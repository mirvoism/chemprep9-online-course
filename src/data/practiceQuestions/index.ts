import { UnitPracticeBank } from '../../types/practiceQuestions';
import { unit01Questions } from './unit01Questions';
import { unit02Questions } from './unit02Questions';
import { unit03Questions } from './unit03Questions';
import { unit04Questions } from './unit04Questions';
import { unit05Questions } from './unit05Questions';
import { unit06Questions } from './unit06Questions';
import { unit07Questions } from './unit07Questions';
import { unit08Questions } from './unit08Questions';
import { unit09Questions } from './unit09Questions';
import { unit10Questions } from './unit10Questions';
import { unit11Questions } from './unit11Questions';
import { unit12Questions } from './unit12Questions';

// Question bank registry
export const questionBanks: Record<number, UnitPracticeBank> = {
  1: unit01Questions,
  2: unit02Questions,
  3: unit03Questions,
  4: unit04Questions,
  5: unit05Questions,
  6: unit06Questions,
  7: unit07Questions,
  8: unit08Questions,
  9: unit09Questions,
  10: unit10Questions,
  11: unit11Questions,
  12: unit12Questions,
};

// Get question bank for a specific unit
export function getQuestionBank(unit: number): UnitPracticeBank | null {
  return questionBanks[unit] || null;
}

// Get all available units
export function getAvailableUnits(): number[] {
  return Object.keys(questionBanks).map(Number).sort((a, b) => a - b);
}

// Get total question count across all units
export function getTotalQuestionCount(): number {
  return Object.values(questionBanks).reduce((total, bank) => total + bank.questions.length, 0);
}

// Get question count for a specific unit
export function getUnitQuestionCount(unit: number): number {
  const bank = getQuestionBank(unit);
  return bank ? bank.questions.length : 0;
}

// Export individual question banks for direct access if needed
export {
  unit01Questions,
  unit02Questions,
  unit03Questions,
  unit04Questions,
  unit05Questions,
  unit06Questions,
  unit07Questions,
  unit08Questions,
  unit09Questions,
  unit10Questions,
  unit11Questions,
  unit12Questions,
}; 