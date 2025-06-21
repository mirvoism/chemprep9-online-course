import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit09Questions: UnitPracticeBank = {
  unit: 9,
  title: "Acids, Bases & Salts",
  questions: [
    // Multiple Choice Questions
    {
      id: "U9_MC_01",
      unit: 9,
      type: "multiple-choice",
      question: "According to the Brønsted-Lowry definition, an acid is a substance that:",
      choices: {
        A: "Produces H⁺ ions in water",
        B: "Donates protons (H⁺)",
        C: "Accepts electrons",
        D: "Increases OH⁻ concentration"
      },
      correctAnswer: "B",
      explanation: "The Brønsted-Lowry definition states that an acid is a proton (H⁺) donor, while a base is a proton acceptor."
    } as MultipleChoiceQuestion,

    {
      id: "U9_MC_02",
      unit: 9,
      type: "multiple-choice",
      question: "What is the pH of a solution with [H⁺] = 1.0 × 10⁻⁹ M?",
      choices: {
        A: "5",
        B: "9",
        C: "10⁻⁹",
        D: "-9"
      },
      correctAnswer: "B",
      explanation: "pH = -log[H⁺] = -log(1.0 × 10⁻⁹) = -(-9) = 9. This solution is basic since pH > 7."
    } as MultipleChoiceQuestion,

    {
      id: "U9_MC_03",
      unit: 9,
      type: "multiple-choice",
      question: "Which of the following is a strong acid?",
      choices: {
        A: "CH₃COOH (acetic acid)",
        B: "HF (hydrofluoric acid)",
        C: "HNO₃ (nitric acid)",
        D: "H₂CO₃ (carbonic acid)"
      },
      correctAnswer: "C",
      explanation: "HNO₃ (nitric acid) is one of the six common strong acids that completely ionize in aqueous solution."
    } as MultipleChoiceQuestion,

    {
      id: "U9_MC_04",
      unit: 9,
      type: "multiple-choice",
      question: "In a neutralization reaction between HCl and NaOH, what is the salt formed?",
      choices: {
        A: "NaCl",
        B: "Na₂O",
        C: "HClO",
        D: "NaH"
      },
      correctAnswer: "A",
      explanation: "HCl + NaOH → NaCl + H₂O. The salt formed is NaCl (sodium chloride), which comes from the cation of the base (Na⁺) and the anion of the acid (Cl⁻)."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U9_SA_01",
      unit: 9,
      type: "short-answer",
      question: "Explain the difference between a strong acid and a weak acid in terms of ionization.",
      sampleAnswer: "A strong acid completely ionizes in aqueous solution, meaning nearly 100% of the acid molecules donate their protons to water. A weak acid only partially ionizes, meaning only a small percentage of acid molecules donate protons, while most remain as intact molecules. Strong acids have large Ka values, while weak acids have small Ka values.",
      keyPoints: ["strong acids completely ionize", "weak acids partially ionize", "Ka values differ significantly", "percentage of ionization"],
      explanation: "The degree of ionization determines acid strength and affects solution properties like pH and conductivity."
    } as ShortAnswerQuestion,

    {
      id: "U9_SA_02",
      unit: 9,
      type: "short-answer",
      question: "What is an amphoteric substance? Give an example.",
      sampleAnswer: "An amphoteric substance can act as either an acid or a base depending on the conditions. Water is a common example - it can donate a proton (acting as an acid) to form OH⁻, or accept a proton (acting as a base) to form H₃O⁺. Aluminum hydroxide Al(OH)₃ is another example that can react with both acids and bases.",
      keyPoints: ["can act as acid or base", "depends on conditions", "water example", "aluminum hydroxide example"],
      explanation: "Amphoteric behavior allows substances to participate in acid-base reactions from either perspective."
    } as ShortAnswerQuestion,

    {
      id: "U9_SA_03",
      unit: 9,
      type: "short-answer",
      question: "Explain what happens during the hydrolysis of a salt.",
      sampleAnswer: "Salt hydrolysis occurs when ions from a salt react with water to produce acidic or basic solutions. If the salt comes from a weak acid and strong base, the anion acts as a base and the solution becomes basic. If from a strong acid and weak base, the cation acts as an acid and the solution becomes acidic. Salts from strong acid-strong base pairs don't hydrolyze and remain neutral.",
      keyPoints: ["ions react with water", "weak acid + strong base = basic", "strong acid + weak base = acidic", "strong-strong = neutral"],
      explanation: "Salt hydrolysis explains why salt solutions can have pH values different from 7."
    } as ShortAnswerQuestion,

    // Problem Solving Questions
    {
      id: "U9_PS_01",
      unit: 9,
      type: "problem-solving",
      question: "Calculate the pH of a 0.025 M HCl solution.",
      sampleAnswer: "HCl is a strong acid, so it completely ionizes: HCl → H⁺ + Cl⁻. Therefore, [H⁺] = 0.025 M. pH = -log[H⁺] = -log(0.025) = -log(2.5 × 10⁻²) = -(0.40 - 2) = 1.60",
      steps: [
        "Recognize HCl as a strong acid (complete ionization)",
        "Determine [H⁺] = 0.025 M",
        "Apply pH formula: pH = -log[H⁺]",
        "Calculate: pH = -log(0.025) = 1.60"
      ],
      formula: "pH = -log[H⁺]",
      explanation: "Strong acids completely ionize, so the H⁺ concentration equals the acid concentration."
    } as ProblemSolvingQuestion,

    {
      id: "U9_PS_02",
      unit: 9,
      type: "problem-solving",
      question: "What volume of 0.10 M NaOH is needed to neutralize 25.0 mL of 0.15 M HCl?",
      sampleAnswer: "The neutralization reaction is HCl + NaOH → NaCl + H₂O (1:1 molar ratio). Moles of HCl = (0.15 mol/L)(0.025 L) = 0.00375 mol. Since the ratio is 1:1, moles of NaOH needed = 0.00375 mol. Volume of NaOH = moles/molarity = 0.00375 mol / 0.10 mol/L = 0.0375 L = 37.5 mL",
      steps: [
        "Write balanced equation: HCl + NaOH → NaCl + H₂O",
        "Calculate moles of HCl: (0.15)(0.025) = 0.00375 mol",
        "Use 1:1 stoichiometry: moles NaOH = 0.00375 mol",
        "Calculate volume: 0.00375 mol ÷ 0.10 M = 37.5 mL"
      ],
      formula: "Molarity = moles/volume",
      explanation: "Neutralization calculations use stoichiometry to relate moles of acid and base."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U9_APP_01",
      unit: 9,
      type: "application",
      question: "Explain why antacids work to relieve stomach acid, and why drinking milk can also provide relief from heartburn.",
      sampleAnswer: "Stomach acid is primarily HCl with a pH around 1-2. Antacids contain basic compounds like CaCO₃, Mg(OH)₂, or Al(OH)₃ that neutralize excess stomach acid through acid-base reactions, raising the pH and reducing irritation. Milk contains proteins and phosphates that act as buffers, helping to neutralize acid and maintain a more stable pH in the stomach.",
      scenario: "Medical applications of acid-base chemistry",
      explanation: "Understanding acid-base reactions helps explain how various treatments work to neutralize excess stomach acid."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U9_EXT_01",
      unit: 9,
      type: "extension",
      question: "A buffer solution contains 0.10 M CH₃COOH and 0.15 M CH₃COONa. If the Ka of acetic acid is 1.8 × 10⁻⁵, calculate the pH of this buffer solution. Explain why this solution resists pH changes when small amounts of acid or base are added.",
      sampleAnswer: "Using Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]). pKa = -log(1.8 × 10⁻⁵) = 4.74. pH = 4.74 + log(0.15/0.10) = 4.74 + log(1.5) = 4.74 + 0.18 = 4.92. This buffer resists pH changes because it contains both a weak acid (CH₃COOH) and its conjugate base (CH₃COO⁻). Added H⁺ reacts with the base component, while added OH⁻ reacts with the acid component, minimizing pH changes.",
      challengeLevel: "advanced",
      explanation: "Buffer systems maintain relatively constant pH through the presence of conjugate acid-base pairs that can neutralize added acids or bases."
    } as ExtensionQuestion
  ]
}; 