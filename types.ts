export interface Unit {
  id: number;
  title: string;
  lessons: number; // Number of lessons in this unit
  weeks: number;   // Estimated weeks to complete
}

export interface InteractiveElement {
  type: 'phet' | '3dmol' | 'custom';
  url?: string;        // URL for PhET or PDB file/ID for 3DMol
  title?: string;      // Optional title for the interactive
  pdbContent?: string; // For inline PDB content for 3DMol
  // Known keys: 'PeriodicTableExplorer', 'EquationBalancer', 'MoleculeBuilder3D', 'IdealGasLawSimulator', 'VirtualTitration', 'ElectrochemicalCell'
  componentKey?: string; 
  description?: string; // Description to show above the interactive
  placeholderText?: string; // Text for placeholders if componentKey is not matched
  initialEquation?: string; // For EquationBalancer
  predefinedMolecule?: string; // For MoleculeBuilder3D
}

export interface PracticeItem {
  text: string;
}

export interface AnswerItem {
  text: string;
}

export interface PracticeProblem {
  question: string;
  answer: string;
}

export interface Lesson {
  id: string; // e.g., C1L1
  unit: number;
  title: string;
  objectives: string[];
  labMinutes: number;
  interactive?: InteractiveElement[];
  narrative?: string; // Main content, can include markdown-like syntax
  practice?: PracticeItem[];
  answers?: AnswerItem[];
  practiceProblems?: PracticeProblem[];
  bibliography?: any;
}

export interface QuestionBankItem {
  id: string; // e.g., C001
  unit: number;
  standard: string; // NYSED Standard or learning objective reference
  lessonIds?: string[]; // Optional: Array of lesson IDs this question specifically relates to
  question: string;
  choiceA: string;
  choiceB: string;
  choiceC?: string; // Optional for True/False or fewer choices
  choiceD?: string; // Optional
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface PhetSimulationMap {
  [lessonIdOrKey: string]: string;
}

export interface ElementData {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: string | number;
  electronConfiguration: string; // Simplified
  group: number;
  period: number;
  electronegativity?: number; // Pauling scale
  category?: 'alkali metal' | 'alkaline earth metal' | 'lanthanide' | 'actinide' | 'transition metal' | 'post-transition metal' | 'metalloid' | 'nonmetal' | 'halogen' | 'noble gas' | string; // string for uncategorized or new ones
}
// Enhanced lesson interface with citation support
export interface EnhancedLesson extends Lesson {
  /** Citation enhancements */
  citations?: string[]; // Array of citation IDs
  references?: string[]; // Array of reference IDs
  standardsAlignment?: string[]; // Array of standard alignment IDs
  
  /** Content reliability score */
  reliabilityScore?: number;
  
  /** Last fact-check date */
  lastFactCheck?: string;
  
  /** Review status */
  reviewStatus?: 'draft' | 'reviewed' | 'approved' | 'needs-update';
  
  /** Version information */
  version?: string;
  lastModified?: string;
}

// Re-export citation types for convenience
export * from './src/types/citations';
