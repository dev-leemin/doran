/**
 * 아이콘 플레이스홀더 생성 스크립트
 *
 * 사용법:
 *   node scripts/generate-icons.mjs          # 누락된 아이콘 목록 확인
 *   node scripts/generate-icons.mjs --create  # 누락된 아이콘에 대해 SVG 플레이스홀더 생성
 *
 * 생성된 SVG는 임시 플레이스홀더이며, 실제 디자인 이미지로 교체해야 합니다.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC = path.join(__dirname, '..', 'public')

// ── 필요한 아이콘 목록 (테스트 + 결과) ──
const ICONS = {
  tests: [
    { file: 'animal.png', emoji: '🐾', color: '#ec4899', label: '동물 유형' },
    { file: 'love.png', emoji: '💘', color: '#8b5cf6', label: '연애 유형' },
    { file: 'travel.png', emoji: '✈️', color: '#10b981', label: '여행 스타일' },
    { file: 'color.png', emoji: '🎨', color: '#0ea5e9', label: '색깔 유형' },
    { file: 'stress.png', emoji: '😤', color: '#0ea5e9', label: '스트레스 해소' },
    { file: 'cafe.png', emoji: '☕', color: '#f59e0b', label: '카페 유형' },
    { file: 'cooking.png', emoji: '👨‍🍳', color: '#f59e0b', label: '요리 스타일' },
    { file: 'friendship.png', emoji: '👯', color: '#8b5cf6', label: '우정 유형' },
    { file: 'morning.png', emoji: '🌅', color: '#10b981', label: '아침 루틴' },
    { file: 'hobby.png', emoji: '🎯', color: '#10b981', label: '취미 유형' },
    { file: 'superpower.png', emoji: '⚡', color: '#ec4899', label: '초능력' },
    { file: 'fantasy.png', emoji: '🧙', color: '#ec4899', label: '판타지 직업' },
  ],
  results: [
    // animal
    { file: 'animal-golden-retriever.png', emoji: '🐕', color: '#f59e0b' },
    { file: 'animal-cat.png', emoji: '🐱', color: '#8b5cf6' },
    { file: 'animal-fox.png', emoji: '🦊', color: '#f97316' },
    { file: 'animal-bear.png', emoji: '🐻', color: '#78716c' },
    { file: 'animal-dolphin.png', emoji: '🐬', color: '#0ea5e9' },
    { file: 'animal-owl.png', emoji: '🦉', color: '#6366f1' },
    { file: 'animal-sloth.png', emoji: '🦥', color: '#10b981' },
    { file: 'animal-wolf.png', emoji: '🐺', color: '#475569' },
    // love
    { file: 'love-devoted.png', emoji: '💝', color: '#ec4899' },
    { file: 'love-independent.png', emoji: '🚶', color: '#0ea5e9' },
    { file: 'love-romantic.png', emoji: '🌹', color: '#ef4444' },
    { file: 'love-steady.png', emoji: '🏠', color: '#f59e0b' },
    { file: 'love-push-pull.png', emoji: '🎭', color: '#8b5cf6' },
    { file: 'love-friend-lover.png', emoji: '🤝', color: '#10b981' },
    { file: 'love-tsundere.png', emoji: '😤', color: '#6366f1' },
    { file: 'love-adventurer.png', emoji: '🎢', color: '#f97316' },
    // travel
    { file: 'travel-backpacker.png', emoji: '🎒', color: '#10b981' },
    { file: 'travel-planner.png', emoji: '📋', color: '#0ea5e9' },
    { file: 'travel-foodie.png', emoji: '🍽️', color: '#f59e0b' },
    { file: 'travel-culture.png', emoji: '🏛️', color: '#8b5cf6' },
    { file: 'travel-resort.png', emoji: '🏖️', color: '#f43f5e' },
    { file: 'travel-adventure.png', emoji: '🏄', color: '#f97316' },
    { file: 'travel-photo.png', emoji: '📸', color: '#6366f1' },
    { file: 'travel-local.png', emoji: '🏘️', color: '#64748b' },
    // color
    { file: 'color-red.png', emoji: '❤️', color: '#ef4444' },
    { file: 'color-blue.png', emoji: '💙', color: '#3b82f6' },
    { file: 'color-yellow.png', emoji: '💛', color: '#eab308' },
    { file: 'color-green.png', emoji: '💚', color: '#22c55e' },
    { file: 'color-purple.png', emoji: '💜', color: '#a855f7' },
    { file: 'color-orange.png', emoji: '🧡', color: '#f97316' },
    { file: 'color-pink.png', emoji: '🩷', color: '#ec4899' },
    { file: 'color-white.png', emoji: '🤍', color: '#94a3b8' },
    // stress
    { file: 'stress-workout.png', emoji: '💪', color: '#ef4444' },
    { file: 'stress-foodie.png', emoji: '🍕', color: '#f59e0b' },
    { file: 'stress-socializer.png', emoji: '🗣️', color: '#8b5cf6' },
    { file: 'stress-sleeper.png', emoji: '😴', color: '#6366f1' },
    { file: 'stress-shopper.png', emoji: '🛍️', color: '#ec4899' },
    { file: 'stress-creator.png', emoji: '🎨', color: '#10b981' },
    { file: 'stress-nature.png', emoji: '🌿', color: '#22c55e' },
    { file: 'stress-binge.png', emoji: '📺', color: '#0ea5e9' },
    // cafe
    { file: 'cafe-americano.png', emoji: '☕', color: '#78716c' },
    { file: 'cafe-latte.png', emoji: '🥛', color: '#f59e0b' },
    { file: 'cafe-dessert.png', emoji: '🍰', color: '#ec4899' },
    { file: 'cafe-study.png', emoji: '📚', color: '#6366f1' },
    { file: 'cafe-vibe.png', emoji: '🕯️', color: '#8b5cf6' },
    { file: 'cafe-newbie.png', emoji: '🧪', color: '#10b981' },
    { file: 'cafe-takeout.png', emoji: '🏃', color: '#0ea5e9' },
    { file: 'cafe-social.png', emoji: '💬', color: '#f97316' },
    // cooking
    { file: 'cooking-chef.png', emoji: '👨‍🍳', color: '#ef4444' },
    { file: 'cooking-recipe.png', emoji: '📖', color: '#0ea5e9' },
    { file: 'cooking-instant.png', emoji: '🍜', color: '#f59e0b' },
    { file: 'cooking-baker.png', emoji: '🧁', color: '#ec4899' },
    { file: 'cooking-health.png', emoji: '🥗', color: '#10b981' },
    { file: 'cooking-experiment.png', emoji: '🧪', color: '#8b5cf6' },
    { file: 'cooking-delivery.png', emoji: '📱', color: '#f97316' },
    { file: 'cooking-social.png', emoji: '🏠', color: '#6366f1' },
    // friendship
    { file: 'friendship-bestie.png', emoji: '💕', color: '#ec4899' },
    { file: 'friendship-counselor.png', emoji: '🧸', color: '#8b5cf6' },
    { file: 'friendship-planner.png', emoji: '📋', color: '#0ea5e9' },
    { file: 'friendship-mood.png', emoji: '🎉', color: '#f59e0b' },
    { file: 'friendship-reliable.png', emoji: '🪨', color: '#78716c' },
    { file: 'friendship-honest.png', emoji: '💣', color: '#ef4444' },
    { file: 'friendship-connector.png', emoji: '🌐', color: '#10b981' },
    { file: 'friendship-chill.png', emoji: '🛋️', color: '#6366f1' },
    // morning
    { file: 'morning-early-bird.png', emoji: '🐔', color: '#f59e0b' },
    { file: 'morning-snooze.png', emoji: '⏰', color: '#ef4444' },
    { file: 'morning-routine.png', emoji: '📋', color: '#0ea5e9' },
    { file: 'morning-workout.png', emoji: '🏃', color: '#10b981' },
    { file: 'morning-coffee.png', emoji: '☕', color: '#78716c' },
    { file: 'morning-mindful.png', emoji: '🧘', color: '#8b5cf6' },
    { file: 'morning-rush.png', emoji: '💨', color: '#f97316' },
    { file: 'morning-brunch.png', emoji: '🥐', color: '#ec4899' },
    // hobby
    { file: 'hobby-sports.png', emoji: '⚽', color: '#ef4444' },
    { file: 'hobby-art.png', emoji: '🎨', color: '#8b5cf6' },
    { file: 'hobby-game.png', emoji: '🎮', color: '#6366f1' },
    { file: 'hobby-reading.png', emoji: '📚', color: '#f59e0b' },
    { file: 'hobby-outdoor.png', emoji: '🏔️', color: '#10b981' },
    { file: 'hobby-music.png', emoji: '🎵', color: '#ec4899' },
    { file: 'hobby-craft.png', emoji: '🔨', color: '#f97316' },
    { file: 'hobby-social.png', emoji: '🤝', color: '#0ea5e9' },
    // superpower
    { file: 'superpower-teleport.png', emoji: '✨', color: '#8b5cf6' },
    { file: 'superpower-mind-read.png', emoji: '🧠', color: '#6366f1' },
    { file: 'superpower-time-stop.png', emoji: '⏱️', color: '#0ea5e9' },
    { file: 'superpower-invisible.png', emoji: '👻', color: '#94a3b8' },
    { file: 'superpower-fly.png', emoji: '🦅', color: '#f59e0b' },
    { file: 'superpower-heal.png', emoji: '🩹', color: '#10b981' },
    { file: 'superpower-fire.png', emoji: '🔥', color: '#ef4444' },
    { file: 'superpower-charm.png', emoji: '💫', color: '#ec4899' },
    // fantasy
    { file: 'fantasy-warrior.png', emoji: '⚔️', color: '#ef4444' },
    { file: 'fantasy-mage.png', emoji: '🧙', color: '#8b5cf6' },
    { file: 'fantasy-healer.png', emoji: '💚', color: '#10b981' },
    { file: 'fantasy-thief.png', emoji: '🗡️', color: '#475569' },
    { file: 'fantasy-ranger.png', emoji: '🏹', color: '#f59e0b' },
    { file: 'fantasy-bard.png', emoji: '🎵', color: '#ec4899' },
    { file: 'fantasy-paladin.png', emoji: '🛡️', color: '#0ea5e9' },
    { file: 'fantasy-alchemist.png', emoji: '🧪', color: '#f97316' },
  ],
}

// ── SVG 플레이스홀더 생성 ──
function createSvgPlaceholder(emoji, color, size = 128) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="24" fill="${color}15"/>
  <rect width="${size}" height="${size}" rx="24" stroke="${color}" stroke-width="2" fill="none" opacity="0.3"/>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="${size * 0.5}">${emoji}</text>
</svg>`
}

// ── 메인 로직 ──
const createMode = process.argv.includes('--create')

console.log('\n📋 도란도란 아이콘 체크\n')

let missingTests = 0
let missingResults = 0
let createdCount = 0

// 테스트 아이콘
console.log('── 테스트 아이콘 (/icons/tests/) ──')
for (const icon of ICONS.tests) {
  const filePath = path.join(PUBLIC, 'icons', 'tests', icon.file)
  const exists = fs.existsSync(filePath)
  if (!exists) {
    missingTests++
    const svgPath = filePath.replace('.png', '.svg')
    if (createMode) {
      fs.writeFileSync(svgPath, createSvgPlaceholder(icon.emoji, icon.color))
      createdCount++
      console.log(`  ✅ ${icon.file} → SVG 생성됨 (${icon.label})`)
    } else {
      console.log(`  ❌ ${icon.file} — ${icon.emoji} ${icon.label}`)
    }
  } else {
    console.log(`  ✅ ${icon.file}`)
  }
}

// 결과 아이콘
console.log('\n── 결과 아이콘 (/icons/results/) ──')
for (const icon of ICONS.results) {
  const filePath = path.join(PUBLIC, 'icons', 'results', icon.file)
  const exists = fs.existsSync(filePath)
  if (!exists) {
    missingResults++
    const svgPath = filePath.replace('.png', '.svg')
    if (createMode) {
      fs.writeFileSync(svgPath, createSvgPlaceholder(icon.emoji, icon.color))
      createdCount++
      console.log(`  ✅ ${icon.file} → SVG 생성됨`)
    } else {
      console.log(`  ❌ ${icon.file} — ${icon.emoji}`)
    }
  } else {
    console.log(`  ✅ ${icon.file}`)
  }
}

// 요약
console.log('\n── 요약 ──')
console.log(`  테스트 아이콘: ${ICONS.tests.length - missingTests}/${ICONS.tests.length} 존재`)
console.log(`  결과 아이콘:   ${ICONS.results.length - missingResults}/${ICONS.results.length} 존재`)

if (missingTests + missingResults > 0) {
  if (createMode) {
    console.log(`\n  🎨 ${createdCount}개 SVG 플레이스홀더 생성 완료!`)
    console.log(`  💡 SVG는 임시 플레이스홀더입니다. 실제 PNG 이미지로 교체하세요.`)
    console.log(`  💡 테스트 파일에서 icon 경로의 .png → .svg 로 변경하거나,`)
    console.log(`     SVG를 PNG로 변환하세요.`)
  } else {
    console.log(`\n  ⚠️  누락된 아이콘 ${missingTests + missingResults}개`)
    console.log(`  💡 --create 옵션으로 SVG 플레이스홀더를 생성할 수 있습니다:`)
    console.log(`     node scripts/generate-icons.mjs --create`)
  }
} else {
  console.log('\n  ✅ 모든 아이콘이 존재합니다!')
}
console.log('')
