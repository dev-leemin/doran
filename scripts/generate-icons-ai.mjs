/**
 * DALL-E API를 사용한 아이콘 자동 생성 스크립트
 *
 * 사전 준비:
 *   npm install openai
 *
 * 사용법:
 *   OPENAI_API_KEY=sk-xxx node scripts/generate-icons-ai.mjs              # 전체 생성
 *   OPENAI_API_KEY=sk-xxx node scripts/generate-icons-ai.mjs --resume     # 이어서 생성 (이미 있는 건 건너뜀)
 *   OPENAI_API_KEY=sk-xxx node scripts/generate-icons-ai.mjs --only=tests # 테스트 아이콘만
 *   OPENAI_API_KEY=sk-xxx node scripts/generate-icons-ai.mjs --only=results # 결과 아이콘만
 *   OPENAI_API_KEY=sk-xxx node scripts/generate-icons-ai.mjs --dry-run    # 프롬프트만 출력 (API 호출 안 함)
 *
 * 비용 (DALL-E 3, 1024x1024):
 *   - 결과 111개 × $0.040 = 약 $4.44
 *   - 테스트 15개 × $0.040 = 약 $0.60
 *   - 전체: ~$5.04
 *
 * 참고:
 *   - DALL-E 3는 최소 1024x1024
 *   - Rate limit: 분당 5~7장 (자동 대기 포함)
 *   - 중단 후 --resume 으로 이어서 생성 가능
 */

import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC = path.join(__dirname, '..', 'public')

// ── 설정 ──
const API_KEY = process.env.OPENAI_API_KEY
const DELAY_MS = 12000 // 요청 간 딜레이 (12초, rate limit 방지)

// ── CLI 옵션 파싱 ──
const args = process.argv.slice(2)
const resumeMode = args.includes('--resume')
const dryRun = args.includes('--dry-run')
const onlyArg = args.find(a => a.startsWith('--only='))
const onlyFilter = onlyArg ? onlyArg.split('=')[1] : null // 'tests' | 'results' | null

// ── 공통 프롬프트 스타일 ──
const STYLE = `1024x1024, cute kawaii illustration, soft rounded art style, rich detailed background, characters with props, no text`

// ── 아이콘 목록 + 프롬프트 ──
const ICONS = {
  compat: [
    { file: 'soulmate.png', dir: 'icons/compat', prompt: `${STYLE}. Two identical-looking characters gazing at each other with pure joy, surrounded by mirror-image sparkles and radiant soul-connection energy. Their thought bubbles show the exact same image. Glowing deep pink and shimmering white aura tones` },
    { file: 'tikitaka.png', dir: 'icons/compat', prompt: `${STYLE}. Two characters perfectly in sync passing a glowing ball back and forth with matching smiles. Speech bubbles that complete each other's sentences, dynamic motion lines showing perfect rhythm. Energetic coral and lively teal tones` },
    { file: 'middle.png', dir: 'icons/compat', prompt: `${STYLE}. A character standing at a cheerful crossroads with "우리" written on both paths, holding a balance scale that tips slightly forward with a thoughtful smile. Overlapping circles of color behind them. Mellow purple and balanced warm gray tones` },
    { file: 'different-fun.png', dir: 'icons/compat', prompt: `${STYLE}. Two very different-looking characters high-fiving and laughing together, each holding opposite items (book vs game controller, coffee vs soda). A colorful rainbow bridge connecting them with sparks at the meeting point. Contrasting warm orange and cool blue tones` },
  ],
  group: [
    { file: 'soulmate.png', dir: 'icons/group', prompt: `${STYLE}. A group of characters moving in perfect synchronized celebration, arms linked, sparkles and identical heart thought-bubbles above each head. Glowing harmony energy radiates from the center. Radiant pink and shimmering gold tones` },
    { file: 'synergy.png', dir: 'icons/group', prompt: `${STYLE}. A group of characters each sending a colorful energy beam toward the center where it explodes into a brilliant rainbow burst. Everyone cheering with excitement. Electric multicolor explosion and dynamic spark tones` },
    { file: 'individual.png', dir: 'icons/group', prompt: `${STYLE}. Multiple characters each doing their own unique activity in their own colorful spotlight side by side — one painting, one gaming, one dancing, one reading — all smiling happily. Bold contrasting spotlight colors for each character` },
  ],
  tests: [
    { file: 'animal.png', dir: 'icons/tests', prompt: `${STYLE}. A cozy scene with various cute animals (dog, cat, fox, owl) gathered together in a magical forest clearing. Warm golden sunlight, flowers and butterflies, pastel green and gold tones` },
    { file: 'love.png', dir: 'icons/tests', prompt: `${STYLE}. A romantic scene with a character surrounded by floating hearts, love letters, and roses on a dreamy pink cloud background. Fairy lights and sparkles, warm pink and red tones` },
    { file: 'travel.png', dir: 'icons/tests', prompt: `${STYLE}. A character with a suitcase standing at an airport looking at a departure board with excitement. World landmarks visible through windows, clouds and planes. Bright blue and adventure teal tones` },
    { file: 'color.png', dir: 'icons/tests', prompt: `${STYLE}. A character in an art studio surrounded by floating paint splashes in rainbow colors. Paintbrushes, palette, and canvas. Vibrant rainbow and creative pastel tones` },
    { file: 'stress.png', dir: 'icons/tests', prompt: `${STYLE}. A character transitioning from stressed (storm clouds) to relaxed (sunshine), with various stress relief items around — yoga mat, music, snacks, nature. Calming blue and green tones` },
    { file: 'cafe.png', dir: 'icons/tests', prompt: `${STYLE}. A cozy cafe interior with a character enjoying coffee. Latte art, pastries, books, plants, and warm window light. Aesthetic warm brown and cream tones` },
    { file: 'cooking.png', dir: 'icons/tests', prompt: `${STYLE}. A lively kitchen scene with a character cooking with flair. Floating ingredients, steam, pots and pans, spices and herbs. Warm red-orange and kitchen gold tones` },
    { file: 'friendship.png', dir: 'icons/tests', prompt: `${STYLE}. A group of friends having a picnic in a sunny park, laughing and sharing food. Balloons, blanket, and games. Cheerful warm yellow and friendly green tones` },
    { file: 'morning.png', dir: 'icons/tests', prompt: `${STYLE}. A bedroom scene at sunrise — alarm clock, coffee cup, stretching character, morning sunlight streaming through curtains. Fresh gold and morning blue tones` },
    { file: 'hobby.png', dir: 'icons/tests', prompt: `${STYLE}. A character surrounded by various hobby items — sports ball, paintbrush, gaming controller, book, guitar, camera. Colorful and playful rainbow tones` },
    { file: 'superpower.png', dir: 'icons/tests', prompt: `${STYLE}. A character with a flowing cape standing heroically, surrounded by various power symbols — lightning, fire, stars, portals. Epic cosmic purple and energy blue tones` },
    { file: 'fantasy.png', dir: 'icons/tests', prompt: `${STYLE}. A magical fantasy scene with a castle, dragon, wizard staff, and glowing crystals. Enchanted forest background with fireflies. Mystical purple and magical gold tones` },
    { file: 'compatibility.png', dir: 'icons/tests', prompt: `${STYLE}. Two characters looking at each other with puzzle pieces connecting between them. Hearts and stars, playful and warm. Soft pink and harmony blue tones` },
    { file: 'office.png', dir: 'icons/tests', prompt: `${STYLE}. A modern office scene with a character at a desk surrounded by coffee, sticky notes, laptop, and coworkers in background. Professional yet fun blue and warm tones` },
    { file: 'lunch.png', dir: 'icons/tests', prompt: `${STYLE}. A character standing in front of multiple food options — Korean, Japanese, Western dishes — with a confused but happy expression. Warm food orange and appetizing tones` },
  ],
  results: [
    // ── animal (8) ──
    { file: 'animal-golden-retriever.png', dir: 'icons/results', prompt: `${STYLE}. A cheerful golden retriever character wearing a yellow bandana, wagging its tail happily in a sunny park. Flowers, butterflies, and a frisbee on the grass. Warm golden sunlight, pastel yellow and green background` },
    { file: 'animal-cat.png', dir: 'icons/results', prompt: `${STYLE}. An elegant cat character sitting on a windowsill at night, looking out at the moon with half-closed eyes. A cozy blanket, a book, and a cup of tea beside it. Purple and navy night sky with stars` },
    { file: 'animal-fox.png', dir: 'icons/results', prompt: `${STYLE}. A clever fox character wearing round glasses, peeking from behind autumn leaves. Holding a magnifying glass with a sly smile. Orange and red fall forest background with scattered leaves` },
    { file: 'animal-bear.png', dir: 'icons/results', prompt: `${STYLE}. A warm bear character wearing a cozy knit sweater, sitting by a campfire in the woods. Holding a cup of hot cocoa, surrounded by pine trees and fireflies. Warm brown and amber tones` },
    { file: 'animal-dolphin.png', dir: 'icons/results', prompt: `${STYLE}. A playful dolphin character jumping out of sparkling ocean water under a rainbow. Splashing water droplets, seashells, and coral in the background. Bright aqua blue and turquoise tones` },
    { file: 'animal-owl.png', dir: 'icons/results', prompt: `${STYLE}. A wise owl character sitting on a stack of old books in a cozy library. Wearing tiny spectacles, surrounded by candles, scrolls, and a globe. Deep navy and warm amber tones` },
    { file: 'animal-sloth.png', dir: 'icons/results', prompt: `${STYLE}. A peaceful sloth character hanging from a tree branch in a tropical jungle, wearing headphones and smiling lazily. Lush green leaves, tropical flowers, and a hammock nearby. Soft green and mint pastel tones` },
    { file: 'animal-wolf.png', dir: 'icons/results', prompt: `${STYLE}. A charismatic wolf character standing on a mountain cliff under a full moon, with wind blowing through its fur. A dramatic night sky with stars and northern lights. Deep indigo, silver, and moonlight tones` },

    // ── cafe (8) ──
    { file: 'cafe-americano.png', dir: 'icons/results', prompt: `${STYLE}. A cool character in a simple black turtleneck sitting at a minimalist cafe counter, savoring a steaming black americano. Coffee beans scattered on the counter, espresso machine in background. Warm brown and black monochrome tones` },
    { file: 'cafe-latte.png', dir: 'icons/results', prompt: `${STYLE}. A sweet character holding a big latte cup with beautiful latte art, sitting in a pastel pink cafe. Whipped cream, caramel drizzle, and macarons on the table. Soft pink and cream tones` },
    { file: 'cafe-dessert.png', dir: 'icons/results', prompt: `${STYLE}. A character with sparkling eyes surrounded by a tower of desserts — cake slices, croissants, waffles, and parfaits. A dreamy cafe with fairy lights and flower decorations. Pastel rainbow and warm vanilla tones` },
    { file: 'cafe-study.png', dir: 'icons/results', prompt: `${STYLE}. A focused character wearing headphones, typing on a laptop at a cafe window seat. Notebooks, highlighters, and an iced americano on the table. Rain on the window outside. Cool gray-blue and warm indoor lighting tones` },
    { file: 'cafe-vibe.png', dir: 'icons/results', prompt: `${STYLE}. A dreamy character sitting in a vintage cafe with exposed brick walls, candles, and dried flowers. Holding a unique ceramic cup, gazing out a foggy window. Moody warm amber and sage green tones` },
    { file: 'cafe-newbie.png', dir: 'icons/results', prompt: `${STYLE}. An excited character reading a colorful seasonal menu board in a trendy cafe, pointing at something new. Unusual colored drinks (purple, blue, green) on the counter. Bright and playful neon and pastel tones` },
    { file: 'cafe-takeout.png', dir: 'icons/results', prompt: `${STYLE}. A character speed-walking on a busy street holding a takeout coffee cup with a confident smile. Phone in other hand, earbuds in. Urban cityscape with coffee shops blurred in background. Dynamic coral and urban gray tones` },
    { file: 'cafe-social.png', dir: 'icons/results', prompt: `${STYLE}. Two characters laughing together at a bright cafe table, multiple drinks and snacks spread out. Warm sunlight streaming in, cheerful atmosphere. Cheerful yellow and peach tones` },

    // ── color (8) ──
    { file: 'color-red.png', dir: 'icons/results', prompt: `${STYLE}. A passionate character dancing with flowing red ribbons in a field of red roses. Sparks and hearts floating around. Dramatic sunset sky with deep red and crimson tones` },
    { file: 'color-blue.png', dir: 'icons/results', prompt: `${STYLE}. A serene character sitting at the edge of a calm lake, feet in the water, looking at a vast blue sky with gentle clouds. Blue flowers and dragonflies around. Peaceful deep blue and sky blue gradient tones` },
    { file: 'color-yellow.png', dir: 'icons/results', prompt: `${STYLE}. A bright character jumping joyfully in a sunflower field under clear blue sky. Holding a balloon, with bees, butterflies, and sunshine rays. Vibrant yellow and warm gold tones` },
    { file: 'color-green.png', dir: 'icons/results', prompt: `${STYLE}. A calm character sitting under a large tree reading a book, surrounded by lush greenery, moss, ferns, and a small stream. Dappled sunlight through leaves. Fresh emerald and sage green tones` },
    { file: 'color-purple.png', dir: 'icons/results', prompt: `${STYLE}. A mysterious character in a flowing cloak standing in a magical crystal cave. Glowing purple crystals, floating orbs, and cosmic star patterns. Deep violet, lavender, and galaxy tones` },
    { file: 'color-orange.png', dir: 'icons/results', prompt: `${STYLE}. An energetic character skateboarding through an autumn street lined with orange-leafed trees. Leaves flying, street food carts, warm lamplight. Vibrant orange, tangerine, and warm amber tones` },
    { file: 'color-pink.png', dir: 'icons/results', prompt: `${STYLE}. A lovely character sitting on a giant pink cloud, surrounded by cherry blossom petals falling softly. Heart-shaped balloons, ribbons, and a cute bunny companion. Dreamy rose pink and blush tones` },
    { file: 'color-white.png', dir: 'icons/results', prompt: `${STYLE}. A pure character standing in a pristine snowy landscape, wearing a white winter coat. Snowflakes gently falling, a white rabbit nearby, soft morning light. Minimalist clean white, silver, and pale blue tones` },

    // ── compatibility (6) ──
    { file: 'compat-homebody.png', dir: 'icons/results', prompt: `${STYLE}. A cozy character wrapped in a fluffy blanket on a sofa, surrounded by pillows, snacks, a cat, and a TV remote. Warm lamplight, bookshelves, and a window showing rain outside. Warm beige and honey tones` },
    { file: 'compat-planner.png', dir: 'icons/results', prompt: `${STYLE}. An organized character sitting at a desk with color-coded planners, sticky notes, calendars, and neatly arranged pens. A checklist with checkmarks, and a cup of tea. Clean white and pastel blue tones` },
    { file: 'compat-trendsetter.png', dir: 'icons/results', prompt: `${STYLE}. A stylish character in trendy outfit walking down a neon-lit city street at night, shopping bags in hand. Social media icons floating around, flash photography lights. Bold hot pink and electric purple tones` },
    { file: 'compat-emotional.png', dir: 'icons/results', prompt: `${STYLE}. A sensitive character sitting by a window on a rainy evening, writing in a journal with a candle lit. Music notes floating from vinyl record player, dried flowers in a vase. Moody warm amber and dusty rose tones` },
    { file: 'compat-social.png', dir: 'icons/results', prompt: `${STYLE}. A lively character at the center of a group gathering, arms open wide with confetti and sparkles. Friends around with party hats, balloons, and drinks. Festive coral, yellow, and bright tones` },
    { file: 'compat-old-soul.png', dir: 'icons/results', prompt: `${STYLE}. A thoughtful character in a vintage armchair in an old library, sipping tea from a classic teacup. Antique clock, old photographs, leather-bound books. Warm sepia, dark green, and mahogany tones` },

    // ── cooking (8) ──
    { file: 'cooking-chef.png', dir: 'icons/results', prompt: `${STYLE}. A confident character in a white chef hat and apron, tossing ingredients in a flaming pan with flair. Fresh vegetables, spice jars, and steam swirling around a professional kitchen. Warm red-orange and stainless steel tones` },
    { file: 'cooking-recipe.png', dir: 'icons/results', prompt: `${STYLE}. A careful character in a neat apron, measuring ingredients precisely with a scale and measuring cups. An open recipe book on a stand, timer counting down. Clean white kitchen with pastel mint accents` },
    { file: 'cooking-instant.png', dir: 'icons/results', prompt: `${STYLE}. A character happily pouring hot water into a cup noodle, surrounded by instant food packages — ramyeon, frozen meals, and a microwave. Steam rising, simple cozy kitchen. Fun orange and bright yellow tones` },
    { file: 'cooking-baker.png', dir: 'icons/results', prompt: `${STYLE}. A character in a cute apron decorating a beautiful cake with piping bag, surrounded by cupcakes, cookies, and flour dust in the air. Warm oven glow in background. Sweet pastel pink and cream tones` },
    { file: 'cooking-health.png', dir: 'icons/results', prompt: `${STYLE}. A character in a clean kitchen blending a green smoothie, surrounded by fresh vegetables, quinoa bowls, avocado, and a salad. Bright natural sunlight from a window with herbs on the sill. Fresh green and white tones` },
    { file: 'cooking-experiment.png', dir: 'icons/results', prompt: `${STYLE}. A wild-haired character mixing unusual ingredients like a mad scientist — colorful sauces, exotic spices, unexpected combinations. Bubbling pots, smoke, and surprised expressions. Playful purple and chaotic rainbow tones` },
    { file: 'cooking-delivery.png', dir: 'icons/results', prompt: `${STYLE}. A character lying on a couch scrolling through a food delivery app on phone, surrounded by delivery boxes, bags, and chopsticks. Doorbell ringing with a delivery rider visible. Cozy warm orange and brown tones` },
    { file: 'cooking-social.png', dir: 'icons/results', prompt: `${STYLE}. A character hosting a home dinner party, setting a beautiful table with homemade dishes while friends arrive at the door. Warm candles, wine glasses, and flower centerpiece. Welcoming warm gold and burgundy tones` },

    // ── fantasy (8) ──
    { file: 'fantasy-warrior.png', dir: 'icons/results', prompt: `${STYLE}. A brave warrior character in shining armor holding a glowing sword, standing before a dragon silhouette. Battle-scarred shield, flowing red cape, dramatic cliff edge. Epic sunset red and steel gray tones` },
    { file: 'fantasy-mage.png', dir: 'icons/results', prompt: `${STYLE}. A wise mage character in a starry robe casting a swirling spell from an ancient staff. Floating spell books, magical runes, and cosmic energy orbs. Deep midnight blue and glowing purple tones` },
    { file: 'fantasy-healer.png', dir: 'icons/results', prompt: `${STYLE}. A gentle healer character in white robes with golden trim, hands glowing with green healing light over a wounded companion. Sacred forest with magical flowers blooming. Soft emerald green and warm gold tones` },
    { file: 'fantasy-thief.png', dir: 'icons/results', prompt: `${STYLE}. A stealthy thief character in a dark hood perched on a moonlit rooftop, holding a glowing gem. Daggers at belt, shadows swirling, a medieval city below. Dark navy, silver moonlight, and deep shadow tones` },
    { file: 'fantasy-ranger.png', dir: 'icons/results', prompt: `${STYLE}. A free-spirited ranger character with a bow on their back, walking through an enchanted forest with a wolf companion. Sunbeams through ancient trees, mushrooms, and fireflies. Natural forest green and golden sunlight tones` },
    { file: 'fantasy-bard.png', dir: 'icons/results', prompt: `${STYLE}. A charming bard character playing a magical lute in a medieval tavern, musical notes floating as colorful sparkles. Enchanted audience, candle-lit atmosphere, wooden interior. Warm amber, ruby, and musical gold tones` },
    { file: 'fantasy-paladin.png', dir: 'icons/results', prompt: `${STYLE}. A noble paladin character in gleaming white and gold armor, holding a radiant shield with a holy emblem. Standing at a cathedral entrance with light beams from stained glass. Pure white, gold, and celestial blue tones` },
    { file: 'fantasy-alchemist.png', dir: 'icons/results', prompt: `${STYLE}. A curious alchemist character in a cluttered workshop mixing glowing potions. Bubbling flasks, mysterious ingredients, old books, and a small explosion of colorful smoke. Warm amber, emerald green, and potion purple tones` },

    // ── friendship (8) ──
    { file: 'friendship-bestie.png', dir: 'icons/results', prompt: `${STYLE}. Two best friend characters walking arm-in-arm down a cherry blossom-lined path, laughing together. Matching friendship bracelets, ice cream cones in hand. Warm spring pink and soft peach tones` },
    { file: 'friendship-counselor.png', dir: 'icons/results', prompt: `${STYLE}. A caring character sitting on a cozy couch with a friend, offering tissues and hot chocolate. Warm blanket, soft pillows, comforting atmosphere. Gentle lavender and warm cream tones` },
    { file: 'friendship-planner.png', dir: 'icons/results', prompt: `${STYLE}. An enthusiastic character holding up a phone with group chat and a detailed itinerary sheet, with calendar and map pinned on wall. Party supplies ready. Organized bright blue and coral tones` },
    { file: 'friendship-mood.png', dir: 'icons/results', prompt: `${STYLE}. An energetic character at the center of a party, wearing a silly hat, making everyone laugh. Confetti, balloons, disco ball, and friends clapping around. Vibrant yellow, orange, and party rainbow tones` },
    { file: 'friendship-reliable.png', dir: 'icons/results', prompt: `${STYLE}. A strong dependable character carrying an umbrella over a friend in the rain, smiling reassuringly. Sturdy boots, warm jacket, a protected friend beside them. Steady blue-gray and warm amber tones` },
    { file: 'friendship-honest.png', dir: 'icons/results', prompt: `${STYLE}. A direct character sitting across from a friend at a cafe, pointing at something with a serious but caring expression. A speech bubble with an exclamation mark. Bold red and honest white tones` },
    { file: 'friendship-connector.png', dir: 'icons/results', prompt: `${STYLE}. A social character at a bustling gathering introducing two friend groups to each other. Phone full of contacts, a web of connections illustrated around them. Vibrant teal and network-blue tones` },
    { file: 'friendship-chill.png', dir: 'icons/results', prompt: `${STYLE}. Two characters sitting side by side on a rooftop at sunset, not talking, just peacefully enjoying the view. Drinks beside them, city skyline in background. Calm warm orange and cool evening blue tones` },

    // ── hobby (8) ──
    { file: 'hobby-sports.png', dir: 'icons/results', prompt: `${STYLE}. An athletic character mid-action on a sports field — kicking a soccer ball with energy. Sweat droplets, stadium lights, sports equipment scattered around. Dynamic green grass and energetic blue tones` },
    { file: 'hobby-art.png', dir: 'icons/results', prompt: `${STYLE}. A creative character in a paint-splattered smock standing before a large canvas in an art studio. Brushes, palettes, colorful paint tubes, and half-finished artworks. Rich rainbow and warm studio light tones` },
    { file: 'hobby-game.png', dir: 'icons/results', prompt: `${STYLE}. An intense character wearing a gaming headset, hands on controller, screens glowing with game graphics. LED lights, energy drinks, and gaming setup with RGB keyboard. Cool neon blue, green, and purple tones` },
    { file: 'hobby-reading.png', dir: 'icons/results', prompt: `${STYLE}. A bookworm character curled up in a giant armchair surrounded by towering stacks of books. Reading glasses, warm lamp, a cat sleeping on a book pile. Cozy warm brown and vintage cream tones` },
    { file: 'hobby-outdoor.png', dir: 'icons/results', prompt: `${STYLE}. An adventurous character standing at a mountain summit with a backpack, arms raised triumphantly. Panoramic mountain view, hiking boots, trail markers, and an eagle soaring. Fresh mountain blue and earthy green tones` },
    { file: 'hobby-music.png', dir: 'icons/results', prompt: `${STYLE}. A music-loving character wearing oversized headphones, eyes closed, floating among giant musical notes and vinyl records. Warm concert lighting and speaker silhouettes. Dreamy purple and musical gold tones` },
    { file: 'hobby-craft.png', dir: 'icons/results', prompt: `${STYLE}. A maker character at a crafting table surrounded by tools — scissors, glue, wood pieces, yarn, and a half-built model. Sawdust in the air, proud smile. Warm workshop brown and craft-supply rainbow tones` },
    { file: 'hobby-social.png', dir: 'icons/results', prompt: `${STYLE}. A community-minded character organizing a group activity in a park — setting up a picnic blanket, sports gear, and board games. Friends gathering with excitement. Cheerful green park and sunny yellow tones` },

    // ── love (8) ──
    { file: 'love-devoted.png', dir: 'icons/results', prompt: `${STYLE}. A character hugging a giant heart-shaped pillow tightly, surrounded by love letters, roses, and floating hearts. Dreamy bedroom with fairy lights. Deep romantic red and warm pink tones` },
    { file: 'love-independent.png', dir: 'icons/results', prompt: `${STYLE}. A confident character walking alone on a beautiful beach at sunset, headphones on, enjoying their own company. Footprints in sand, a free bird in the sky. Cool teal ocean and warm sunset orange tones` },
    { file: 'love-romantic.png', dir: 'icons/results', prompt: `${STYLE}. A character on a rooftop dinner date under string lights and stars, holding a single rose. Candles, wine glasses, city skyline in the background. Classic romantic deep red and candlelight gold tones` },
    { file: 'love-steady.png', dir: 'icons/results', prompt: `${STYLE}. Two characters sitting together on a porch swing, holding hands peacefully, watching the sunrise. A cozy house, garden flowers, and a dog at their feet. Warm stable honey and morning pastel tones` },
    { file: 'love-push-pull.png', dir: 'icons/results', prompt: `${STYLE}. Two characters playfully reaching toward each other then pulling back, with a theatrical curtain and spotlight. Masks, drama elements, and tension sparkles. Dramatic magenta and mysterious dark purple tones` },
    { file: 'love-friend-lover.png', dir: 'icons/results', prompt: `${STYLE}. Two characters sitting on swings side by side, laughing like best friends while holding hands. A playground at golden hour, casual outfits, carefree vibes. Warm nostalgic gold and friendly green tones` },
    { file: 'love-tsundere.png', dir: 'icons/results', prompt: `${STYLE}. A character looking away with arms crossed and blushing cheeks, while secretly holding a gift behind their back. A heart-shaped thought bubble visible above. Contrasting cool blue exterior and warm pink blush tones` },
    { file: 'love-adventurer.png', dir: 'icons/results', prompt: `${STYLE}. Two characters on a motorcycle riding toward a sunset on an open road, scarves flying in the wind. Adventure gear, map, and a sense of freedom. Bold sunset orange and adventurous teal tones` },

    // ── lunch (6) ──
    { file: 'lunch-spicy.png', dir: 'icons/results', prompt: `${STYLE}. A character with a determined face eating fiery red tteokbokki, surrounded by flames and chili peppers. Sweat droplets, a glass of water nearby but untouched. Intense fire red and chili orange tones` },
    { file: 'lunch-adventurer.png', dir: 'icons/results', prompt: `${STYLE}. A character at a world food market trying exotic dishes from different stalls — sushi, tacos, pasta, curry. A world map tablecloth, flags from different countries. Colorful multicultural rainbow tones` },
    { file: 'lunch-health.png', dir: 'icons/results', prompt: `${STYLE}. A character happily assembling a beautiful poke bowl with fresh vegetables, quinoa, and avocado. Water bottle nearby. Clean fresh green and bright white tones` },
    { file: 'lunch-comfort.png', dir: 'icons/results', prompt: `${STYLE}. A character slurping a big bowl of steaming Korean kimchi jjigae with rice, eyes closed in bliss. A homey kitchen background, side dishes spread out. Warm comfort orange and homey brown tones` },
    { file: 'lunch-balanced.png', dir: 'icons/results', prompt: `${STYLE}. A character sitting at a well-organized table with a perfectly portioned Korean meal — rice, soup, meat, vegetables. A balanced scale motif subtly in background. Harmonious warm earth tones and soft green` },
    { file: 'lunch-routine.png', dir: 'icons/results', prompt: `${STYLE}. A character entering a familiar restaurant with a knowing smile, the staff already preparing their usual order. Clock showing noon, a regular stamp card. Consistent warm amber and routine beige tones` },

    // ── morning (8) ──
    { file: 'morning-early-bird.png', dir: 'icons/results', prompt: `${STYLE}. A cheerful character stretching at an open window at dawn, birds singing on the windowsill. Fresh morning dew, rising sun, and a glass of lemon water. Bright sunrise gold and fresh sky blue tones` },
    { file: 'morning-snooze.png', dir: 'icons/results', prompt: `${STYLE}. A character buried under blankets with multiple alarm clocks going off around the bed, hand reaching to hit snooze. Messy bedroom, eye mask pushed up on forehead. Sleepy purple and cozy warm navy tones` },
    { file: 'morning-routine.png', dir: 'icons/results', prompt: `${STYLE}. A character in a pristine bathroom following a perfectly timed morning routine — skincare, toothbrush, and outfit laid out. A checklist on the mirror with everything checked. Clean mint and organized white tones` },
    { file: 'morning-workout.png', dir: 'icons/results', prompt: `${STYLE}. An athletic character jogging through a park at sunrise with earbuds in, a water bottle strapped on. Dewy grass, early morning joggers in background, fresh air visualization. Energetic orange and fresh green tones` },
    { file: 'morning-coffee.png', dir: 'icons/results', prompt: `${STYLE}. A half-awake character zombie-walking toward a coffee machine, reaching for a mug with desperate eyes. Steam rising from the machine like a holy light. Groggy gray transforming to energized warm brown tones` },
    { file: 'morning-mindful.png', dir: 'icons/results', prompt: `${STYLE}. A peaceful character meditating on a yoga mat by a large window at sunrise, eyes closed, calm smile. Incense smoke, plants, and a singing bowl nearby. Serene lavender and soft morning gold tones` },
    { file: 'morning-rush.png', dir: 'icons/results', prompt: `${STYLE}. A panicked character running out the door with toast in mouth, one shoe on, bag flying open. Clock showing 8:55, items falling behind them. Chaotic speed-line red and urgent orange tones` },
    { file: 'morning-brunch.png', dir: 'icons/results', prompt: `${STYLE}. A stylish character at a beautiful brunch table — avocado toast, eggs benedict, mimosas, and flowers. Natural sunlight from a cafe window. Aesthetic warm peach and brunch gold tones` },

    // ── office (8) ──
    { file: 'office-clock-out.png', dir: 'icons/results', prompt: `${STYLE}. A character packing their bag lightning-fast at exactly 6:00 PM on the clock, already heading for the door. Coworkers still at desks, a speed afterimage effect. Triumphant sunset orange and freedom blue tones` },
    { file: 'office-mood-maker.png', dir: 'icons/results', prompt: `${STYLE}. A character making coworkers laugh in the office break room, doing a funny gesture. Snacks on the table, everyone smiling and relaxed. Bright cheerful yellow and warm office beige tones` },
    { file: 'office-silent-ace.png', dir: 'icons/results', prompt: `${STYLE}. A calm character wearing headphones at their desk, quietly working with multiple monitors showing impressive work. A trophy and awards on the shelf, coworkers glancing in admiration. Cool focused blue and subtle gold accent tones` },
    { file: 'office-passion.png', dir: 'icons/results', prompt: `${STYLE}. A fired-up character at a desk late at night, sleeves rolled up, coffee cups stacked, surrounded by sticky notes and project boards. Burning determination aura. Intense orange-red passion and midnight blue tones` },
    { file: 'office-fox.png', dir: 'icons/results', prompt: `${STYLE}. A sly character in a sharp suit walking confidently through office corridors, knowing everyone's secrets. Multiple conversation scenes in background. Strategic dark navy and clever emerald green tones` },
    { file: 'office-leader.png', dir: 'icons/results', prompt: `${STYLE}. A confident character standing at the head of a meeting table, presenting on a whiteboard with authority. Team members listening attentively, charts showing upward trends. Powerful royal blue and commanding gold tones` },
    { file: 'office-switzerland.png', dir: 'icons/results', prompt: `${STYLE}. A zen-like character sitting peacefully at their desk while coworkers argue on both sides. A white flag and balance scale imagery, calm in the storm. Peaceful neutral gray and sage green tones` },
    { file: 'office-lunch-captain.png', dir: 'icons/results', prompt: `${STYLE}. A character leading a group of coworkers out of the office building, pointing toward restaurants like a tour guide. Menu apps on phone, lunchtime excitement. Hungry warm orange and social yellow tones` },

    // ── stress (8) ──
    { file: 'stress-workout.png', dir: 'icons/results', prompt: `${STYLE}. A determined character punching a boxing bag with explosive energy, sweat flying. Gym equipment, energy waves radiating outward. Powerful red and strong steel gray tones` },
    { file: 'stress-foodie.png', dir: 'icons/results', prompt: `${STYLE}. A comforted character surrounded by comfort food — pizza, chicken, ice cream, ramen — hugging a giant pizza slice. Happy tears, cozy bedroom setting. Warm comfort orange and happy yellow tones` },
    { file: 'stress-socializer.png', dir: 'icons/results', prompt: `${STYLE}. A character talking animatedly on phone while walking, gesturing wildly, venting with expressive speech bubbles. A friend listening patiently on the other end. Lively coral and communicative turquoise tones` },
    { file: 'stress-sleeper.png', dir: 'icons/results', prompt: `${STYLE}. A character in peaceful deep sleep wrapped in a cloud-like blanket, floating among stars and moons. Z's floating upward, a sleep mask with a smile. Dreamy midnight blue and soft cloud white tones` },
    { file: 'stress-shopper.png', dir: 'icons/results', prompt: `${STYLE}. A character with shopping bags in both hands walking out of a glamorous shopping mall, satisfied smile. Shoe boxes and fashion items visible. Retail therapy pink and luxury gold tones` },
    { file: 'stress-creator.png', dir: 'icons/results', prompt: `${STYLE}. A character deeply focused on creating art — painting on a canvas — with headphones on, in a flow state. Colorful creative energy swirling around them. Artistic purple and creative teal tones` },
    { file: 'stress-nature.png', dir: 'icons/results', prompt: `${STYLE}. A character lying in a flower field staring at the sky, completely at peace. Birds, butterflies, a gentle breeze visualized. Rolling green hills and wildflowers. Healing green and sky blue tones` },
    { file: 'stress-binge.png', dir: 'icons/results', prompt: `${STYLE}. A character buried in a blanket fort with a tablet, binge-watching a show. Snacks everywhere, glowing screen, tissues nearby. Cozy dark room with screen-glow purple and snack-warm orange tones` },

    // ── superpower (8) ──
    { file: 'superpower-teleport.png', dir: 'icons/results', prompt: `${STYLE}. A character mid-teleportation — half appearing in a portal with sparkles, stepping from a city into a tropical beach. Dimensional rift effect with swirling energy. Electric cyan and portal purple tones` },
    { file: 'superpower-mind-read.png', dir: 'icons/results', prompt: `${STYLE}. A character with glowing eyes surrounded by floating thought bubbles from nearby people. Brain wave visualizations and telepathic energy rings. Deep psychic purple and neural blue tones` },
    { file: 'superpower-time-stop.png', dir: 'icons/results', prompt: `${STYLE}. A character standing still while everything around them is frozen mid-motion — birds in the air, water droplets suspended, people mid-step. Clock hands stopped. Frozen silver-blue and time-gold tones` },
    { file: 'superpower-invisible.png', dir: 'icons/results', prompt: `${STYLE}. A semi-transparent character walking through a busy crowd unnoticed, with a mischievous smile. Their outline shimmering and fading. Ghost-like translucent white and mysterious pale blue tones` },
    { file: 'superpower-fly.png', dir: 'icons/results', prompt: `${STYLE}. A character soaring through clouds with arms spread wide, a joyful expression, city far below. Wind in their hair, birds flying alongside, dramatic sky. Freedom sky blue and cloud white with golden sunlight tones` },
    { file: 'superpower-heal.png', dir: 'icons/results', prompt: `${STYLE}. A character with glowing green hands gently healing a small injured bird. Warm light emanating from their palms, flowers blooming around them. Compassionate soft green and healing gold tones` },
    { file: 'superpower-fire.png', dir: 'icons/results', prompt: `${STYLE}. A character commanding flames with both hands raised, fire swirling dramatically around them. Volcanic background, ember particles floating, fierce confident expression. Blazing fire red and intense orange tones` },
    { file: 'superpower-charm.png', dir: 'icons/results', prompt: `${STYLE}. A dazzling character surrounded by sparkles and hearts, everyone around them mesmerized with heart-eyes. Star-like aura, confident wink, magnetic presence. Glamorous rose gold and star-sparkle tones` },

    // ── travel (8) ──
    { file: 'travel-backpacker.png', dir: 'icons/results', prompt: `${STYLE}. A carefree character with a large backpack at a train station, looking at a departure board with excitement. Patches on the bag, a crumpled map, worn boots. Adventurous earth brown and travel-worn teal tones` },
    { file: 'travel-planner.png', dir: 'icons/results', prompt: `${STYLE}. A meticulous character surrounded by travel guidebooks, a perfectly organized suitcase, printed itinerary, and highlighted maps. Hotel confirmations and boarding passes arranged neatly. Organized navy blue and planner coral tones` },
    { file: 'travel-foodie.png', dir: 'icons/results', prompt: `${STYLE}. A character at a street food market abroad, holding multiple local dishes — noodles, skewers, exotic fruits. Market lanterns, steam from food stalls, diverse crowds. Vibrant food-market warm orange and cultural red tones` },
    { file: 'travel-culture.png', dir: 'icons/results', prompt: `${STYLE}. A character sketching in a notebook at an ancient temple or historic site, wearing a sun hat. Old architecture, cultural artifacts, and museum-like atmosphere. Classical warm sepia and historic stone gray tones` },
    { file: 'travel-resort.png', dir: 'icons/results', prompt: `${STYLE}. A relaxed character in a resort pool on a floatie, sunglasses on, cocktail in hand. Palm trees, infinity pool, ocean view, and sunset. Luxurious tropical teal and resort sunset pink tones` },
    { file: 'travel-adventure.png', dir: 'icons/results', prompt: `${STYLE}. A thrilled character paragliding over a dramatic landscape. Adrenaline rush expression, action equipment, extreme height. Extreme sport bright red and adventurous sky blue tones` },
    { file: 'travel-photo.png', dir: 'icons/results', prompt: `${STYLE}. A character crouching to take a perfect photo of a scenic landscape with a vintage camera. Golden hour light, polaroid photos scattered, beautiful scenery. Aesthetic warm golden hour and muted tones` },
    { file: 'travel-local.png', dir: 'icons/results', prompt: `${STYLE}. A character sitting with locals at a small village home, sharing a traditional meal. Authentic cultural decorations, hand-woven textiles, warm hospitality. Authentic earthy brown and cultural warm tones` },
  ],
}

// ── DALL-E API 호출 ──
async function generateImage(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '1024x1024',
      quality: 'standard',
      response_format: 'url',
    })

    const options = {
      hostname: 'api.openai.com',
      path: '/v1/images/generations',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Length': Buffer.byteLength(body),
      },
    }

    const req = https.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => { data += chunk })
      res.on('end', () => {
        try {
          const json = JSON.parse(data)
          if (json.error) {
            reject(new Error(json.error.message))
          } else {
            resolve(json.data[0].url)
          }
        } catch (e) {
          reject(new Error(`JSON parse error: ${data.slice(0, 200)}`))
        }
      })
    })

    req.on('error', reject)
    req.write(body)
    req.end()
  })
}

// ── 이미지 다운로드 ──
function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath)
    https.get(url, (res) => {
      // 리다이렉트 처리
      if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, (res2) => {
          res2.pipe(file)
          file.on('finish', () => { file.close(); resolve() })
        }).on('error', reject)
        return
      }
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve() })
    }).on('error', reject)
  })
}

// ── 딜레이 ──
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// ── 메인 ──
async function main() {
  if (!API_KEY && !dryRun) {
    console.error('❌ OPENAI_API_KEY 환경변수를 설정하세요!')
    console.error('   OPENAI_API_KEY=sk-xxx node scripts/generate-icons-ai.mjs')
    process.exit(1)
  }

  // 필터링
  let allIcons = []
  if (!onlyFilter || onlyFilter === 'compat') allIcons.push(...ICONS.compat)
  if (!onlyFilter || onlyFilter === 'group') allIcons.push(...ICONS.group)
  if (!onlyFilter || onlyFilter === 'tests') allIcons.push(...ICONS.tests)
  if (!onlyFilter || onlyFilter === 'results') allIcons.push(...ICONS.results)

  // resume 모드: 이미 존재하는 파일 건너뛰기
  if (resumeMode) {
    const before = allIcons.length
    allIcons = allIcons.filter(icon => {
      const filePath = path.join(PUBLIC, icon.dir, icon.file)
      return !fs.existsSync(filePath)
    })
    console.log(`🔄 Resume 모드: ${before - allIcons.length}개 건너뜀, ${allIcons.length}개 남음\n`)
  }

  console.log(`\n🎨 DALL-E 3 아이콘 생성기`)
  console.log(`   생성 대상: ${allIcons.length}개`)
  console.log(`   예상 비용: ~$${(allIcons.length * 0.04).toFixed(2)}`)
  console.log(`   예상 시간: ~${Math.ceil(allIcons.length * DELAY_MS / 60000)}분\n`)

  if (dryRun) {
    console.log('── 📝 Dry Run: 프롬프트 목록 ──\n')
    for (const icon of allIcons) {
      console.log(`📁 ${icon.dir}/${icon.file}`)
      console.log(`   ${icon.prompt}\n`)
    }
    return
  }

  // 디렉토리 생성
  const dirs = [...new Set(allIcons.map(i => path.join(PUBLIC, i.dir)))]
  for (const dir of dirs) {
    fs.mkdirSync(dir, { recursive: true })
  }

  let success = 0
  let failed = 0
  const errors = []

  for (let i = 0; i < allIcons.length; i++) {
    const icon = allIcons[i]
    const filePath = path.join(PUBLIC, icon.dir, icon.file)
    const progress = `[${i + 1}/${allIcons.length}]`

    try {
      process.stdout.write(`${progress} ${icon.file} ... 생성 중`)

      const imageUrl = await generateImage(icon.prompt)
      process.stdout.write(' → 다운로드 중')

      await downloadImage(imageUrl, filePath)
      success++
      console.log(` → ✅ 완료`)

    } catch (err) {
      failed++
      errors.push({ file: icon.file, error: err.message })
      console.log(` → ❌ 실패: ${err.message}`)

      // Rate limit 에러면 추가 대기
      if (err.message.includes('Rate limit') || err.message.includes('429')) {
        console.log('   ⏳ Rate limit — 60초 대기...')
        await sleep(60000)
      }
    }

    // 마지막이 아니면 딜레이
    if (i < allIcons.length - 1) {
      await sleep(DELAY_MS)
    }
  }

  // 결과 요약
  console.log('\n── 결과 ──')
  console.log(`  ✅ 성공: ${success}개`)
  console.log(`  ❌ 실패: ${failed}개`)
  console.log(`  💰 예상 비용: ~$${(success * 0.04).toFixed(2)}`)

  if (errors.length > 0) {
    console.log('\n── 실패 목록 ──')
    for (const e of errors) {
      console.log(`  ❌ ${e.file}: ${e.error}`)
    }
    console.log('\n  💡 --resume 옵션으로 실패한 이미지만 다시 생성할 수 있습니다.')
  }
}

main().catch(err => {
  console.error('치명적 오류:', err)
  process.exit(1)
})
