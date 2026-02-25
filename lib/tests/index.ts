import officeTest from './office'
import lunchTest from './lunch'
import compatibilityTest from './compatibility'
import animalTest from './animal'
import loveTest from './love'
import travelTest from './travel'
import { TestConfig } from './types'

export const tests: Record<string, TestConfig> = {
  office: officeTest,
  lunch: lunchTest,
  compatibility: compatibilityTest,
  animal: animalTest,
  love: loveTest,
  travel: travelTest,
}

export const testList = [officeTest, lunchTest, compatibilityTest, animalTest, loveTest, travelTest]

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
