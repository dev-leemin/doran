import officeTest from './office'
import lunchTest from './lunch'
import compatibilityTest from './compatibility'
import animalTest from './animal'
import loveTest from './love'
import travelTest from './travel'
import colorTest from './color'
import stressTest from './stress'
import cafeTest from './cafe'
import cookingTest from './cooking'
import friendshipTest from './friendship'
import morningTest from './morning'
import hobbyTest from './hobby'
import superpowerTest from './superpower'
import fantasyTest from './fantasy'
import { TestConfig } from './types'

export const tests: Record<string, TestConfig> = {
  office: officeTest,
  lunch: lunchTest,
  compatibility: compatibilityTest,
  animal: animalTest,
  love: loveTest,
  travel: travelTest,
  color: colorTest,
  stress: stressTest,
  cafe: cafeTest,
  cooking: cookingTest,
  friendship: friendshipTest,
  morning: morningTest,
  hobby: hobbyTest,
  superpower: superpowerTest,
  fantasy: fantasyTest,
}

export const testList = [
  officeTest, lunchTest, compatibilityTest,
  animalTest, loveTest, travelTest,
  colorTest, stressTest,
  cafeTest, cookingTest,
  friendshipTest,
  morningTest, hobbyTest,
  superpowerTest, fantasyTest,
]

export function getTest(id: string): TestConfig | undefined {
  return tests[id]
}

export function getResult(testId: string, resultId: string) {
  const test = tests[testId]
  if (!test) return undefined
  return test.results.find(r => r.id === resultId)
}

export type { TestConfig, Question, Choice, ResultType, TestResult, QuestionCountOption, TestCategory } from './types'
export { CATEGORY_COLORS, CATEGORY_LABELS } from './types'
