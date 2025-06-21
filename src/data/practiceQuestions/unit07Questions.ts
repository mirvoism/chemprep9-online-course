import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit07Questions: UnitPracticeBank = {
  unit: 7,
  title: "Solutions & Energy",
  questions: [
    // Multiple Choice Questions
    {
      id: "U7_MC_01",
      unit: 7,
      type: "multiple-choice",
      question: "Which factor does NOT affect the rate of dissolving?",
      choices: {
        A: "Temperature",
        B: "Surface area",
        C: "Stirring",
        D: "Color of the solute"
      },
      correctAnswer: "D",
      explanation: "The color of the solute is a physical property that does not affect the rate at which it dissolves. Temperature, surface area, and stirring all increase the rate of dissolving."
    } as MultipleChoiceQuestion,

    {
      id: "U7_MC_02",
      unit: 7,
      type: "multiple-choice",
      question: "What happens to the solubility of most solid solutes as temperature increases?",
      choices: {
        A: "Solubility decreases",
        B: "Solubility increases",
        C: "Solubility remains constant",
        D: "Solubility becomes zero"
      },
      correctAnswer: "B",
      explanation: "For most solid solutes, solubility increases with increasing temperature because higher temperatures provide more energy to break apart the crystal lattice."
    } as MultipleChoiceQuestion,

    {
      id: "U7_MC_03",
      unit: 7,
      type: "multiple-choice",
      question: "A solution with a concentration of 3.0 M contains:",
      choices: {
        A: "3.0 moles of solute per liter of solvent",
        B: "3.0 moles of solute per liter of solution",
        C: "3.0 grams of solute per liter of solution",
        D: "3.0 molecules of solute per liter of solution"
      },
      correctAnswer: "B",
      explanation: "Molarity (M) is defined as moles of solute per liter of solution, not solvent."
    } as MultipleChoiceQuestion,

    {
      id: "U7_MC_04",
      unit: 7,
      type: "multiple-choice",
      question: "Which process releases energy?",
      choices: {
        A: "Melting ice",
        B: "Boiling water",
        C: "Freezing water",
        D: "Sublimation of dry ice"
      },
      correctAnswer: "C",
      explanation: "Freezing is an exothermic process that releases energy as water molecules form a more ordered crystalline structure."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U7_SA_01",
      unit: 7,
      type: "short-answer",
      question: "Explain the difference between 'like dissolves like' and provide an example.",
      sampleAnswer: "'Like dissolves like' means that polar substances dissolve in polar solvents, and nonpolar substances dissolve in nonpolar solvents. For example, salt (ionic/polar) dissolves in water (polar), while oil (nonpolar) dissolves in gasoline (nonpolar) but not in water.",
      keyPoints: ["polar dissolves in polar", "nonpolar dissolves in nonpolar", "example with salt and water", "example with oil and nonpolar solvent"],
      explanation: "Solubility is determined by the similarity of intermolecular forces between solute and solvent."
    } as ShortAnswerQuestion,

    {
      id: "U7_SA_02",
      unit: 7,
      type: "short-answer",
      question: "What is the difference between heat and temperature?",
      sampleAnswer: "Heat is the total energy of molecular motion in a substance and depends on both temperature and the amount of substance. Temperature is the average kinetic energy of particles and is independent of the amount of substance. Heat is measured in joules, while temperature is measured in degrees.",
      keyPoints: ["heat is total energy", "temperature is average kinetic energy", "heat depends on amount", "temperature independent of amount"],
      explanation: "Heat and temperature are related but distinct concepts in thermodynamics."
    } as ShortAnswerQuestion,

    {
      id: "U7_SA_03",
      unit: 7,
      type: "short-answer",
      question: "Describe what happens when you add more solute to a saturated solution.",
      sampleAnswer: "When you add more solute to a saturated solution, the excess solute will not dissolve and will remain as undissolved solid at the bottom of the container. The solution has reached its maximum capacity for that solute at that temperature and pressure.",
      keyPoints: ["excess solute remains undissolved", "maximum capacity reached", "depends on temperature and pressure", "equilibrium established"],
      explanation: "A saturated solution represents an equilibrium between dissolved and undissolved solute."
    } as ShortAnswerQuestion,

    // Problem Solving Questions
    {
      id: "U7_PS_01",
      unit: 7,
      type: "problem-solving",
      question: "Calculate the molarity of a solution made by dissolving 58.5 g of NaCl in enough water to make 2.0 L of solution.",
      sampleAnswer: "First, find moles of NaCl: molar mass = 58.5 g/mol, so moles = 58.5 g ÷ 58.5 g/mol = 1.0 mol. Then calculate molarity: M = moles/volume = 1.0 mol ÷ 2.0 L = 0.50 M",
      steps: [
        "Calculate molar mass of NaCl (23 + 35.5 = 58.5 g/mol)",
        "Convert grams to moles: 58.5 g ÷ 58.5 g/mol = 1.0 mol",
        "Apply molarity formula: M = moles/L",
        "Calculate: 1.0 mol ÷ 2.0 L = 0.50 M"
      ],
      formula: "Molarity = moles of solute / liters of solution",
      explanation: "Molarity calculations require converting mass to moles using molar mass."
    } as ProblemSolvingQuestion,

    {
      id: "U7_PS_02",
      unit: 7,
      type: "problem-solving",
      question: "How much heat is required to raise the temperature of 100 g of water from 25°C to 75°C? (specific heat of water = 4.18 J/g°C)",
      sampleAnswer: "Use q = mcΔT where q = heat, m = mass, c = specific heat, ΔT = temperature change. q = (100 g)(4.18 J/g°C)(75°C - 25°C) = (100)(4.18)(50) = 20,900 J = 20.9 kJ",
      steps: [
        "Identify given values: m = 100 g, c = 4.18 J/g°C",
        "Calculate ΔT = 75°C - 25°C = 50°C",
        "Apply formula q = mcΔT",
        "Calculate: q = (100)(4.18)(50) = 20,900 J"
      ],
      formula: "q = mcΔT",
      explanation: "Heat calculations use the specific heat capacity to relate temperature change to energy transfer."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U7_APP_01",
      unit: 7,
      type: "application",
      question: "Explain why salt is spread on icy roads in winter and why this method becomes less effective at very low temperatures.",
      sampleAnswer: "Salt lowers the freezing point of water through freezing point depression. When salt dissolves, it dissociates into ions that interfere with ice crystal formation, requiring a lower temperature to freeze. This method becomes less effective at very low temperatures because the amount of freezing point depression is limited, and at extremely cold temperatures, even salt water will freeze.",
      scenario: "Winter road safety and colligative properties",
      explanation: "Colligative properties like freezing point depression have practical applications in everyday life."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U7_EXT_01",
      unit: 7,
      type: "extension",
      question: "A solution is prepared by dissolving 10.0 g of a nonelectrolyte solute (molar mass = 180 g/mol) in 500 g of water. Calculate the freezing point of this solution. (Kf for water = 1.86°C/m)",
      sampleAnswer: "First, calculate molality: moles of solute = 10.0 g ÷ 180 g/mol = 0.0556 mol. Molality = 0.0556 mol ÷ 0.500 kg = 0.111 m. Freezing point depression: ΔTf = Kf × m = 1.86°C/m × 0.111 m = 0.206°C. New freezing point = 0.00°C - 0.206°C = -0.206°C",
      challengeLevel: "advanced",
      explanation: "Colligative properties depend on the number of particles in solution and can be calculated using specific constants."
    } as ExtensionQuestion
  ]
}; 