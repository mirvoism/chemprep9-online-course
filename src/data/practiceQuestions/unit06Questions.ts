import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit06Questions: UnitPracticeBank = {
  unit: 6,
  title: "Physical Behavior of Matter",
  questions: [
    // Multiple Choice Questions
    {
      id: "U6_MC_01",
      unit: 6,
      type: "multiple-choice",
      question: "According to kinetic molecular theory, which statement about gas particles is correct?",
      choices: {
        A: "Gas particles have strong intermolecular forces",
        B: "Gas particles are in constant, random motion",
        C: "Gas particles have a definite volume",
        D: "Gas particles move in predictable patterns"
      },
      correctAnswer: "B",
      explanation: "Kinetic molecular theory states that gas particles are in constant, random motion and have negligible intermolecular forces."
    } as MultipleChoiceQuestion,

    {
      id: "U6_MC_02",
      unit: 6,
      type: "multiple-choice",
      question: "At STP, what is the molar volume of any ideal gas?",
      choices: {
        A: "22.4 L",
        B: "24.5 L",
        C: "1.00 L",
        D: "273 L"
      },
      correctAnswer: "A",
      explanation: "At standard temperature and pressure (STP), one mole of any ideal gas occupies 22.4 liters."
    } as MultipleChoiceQuestion,

    {
      id: "U6_MC_03",
      unit: 6,
      type: "multiple-choice",
      question: "Which phase change requires the absorption of energy?",
      choices: {
        A: "Condensation",
        B: "Freezing",
        C: "Deposition",
        D: "Sublimation"
      },
      correctAnswer: "D",
      explanation: "Sublimation (solid to gas) is an endothermic process that requires energy input to overcome intermolecular forces."
    } as MultipleChoiceQuestion,

    {
      id: "U6_MC_04",
      unit: 6,
      type: "multiple-choice",
      question: "If the pressure of a gas is doubled while temperature remains constant, what happens to its volume?",
      choices: {
        A: "Volume doubles",
        B: "Volume is halved",
        C: "Volume remains the same",
        D: "Volume quadruples"
      },
      correctAnswer: "B",
      explanation: "According to Boyle's Law (P₁V₁ = P₂V₂), pressure and volume are inversely proportional at constant temperature."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U6_SA_01",
      unit: 6,
      type: "short-answer",
      question: "Explain why gases are compressible while liquids and solids are not.",
      sampleAnswer: "Gases are compressible because their particles are far apart with large amounts of empty space between them. When pressure is applied, the particles can be pushed closer together. Liquids and solids have particles that are already close together with little empty space, so they cannot be compressed significantly.",
      keyPoints: ["large empty space in gases", "particles far apart", "liquids/solids already close together", "minimal compression possible"],
      explanation: "Compressibility depends on the amount of empty space between particles in different phases of matter."
    } as ShortAnswerQuestion,

    {
      id: "U6_SA_02",
      unit: 6,
      type: "short-answer",
      question: "What happens to the kinetic energy of gas particles when the temperature increases?",
      sampleAnswer: "When temperature increases, the average kinetic energy of gas particles increases. This means the particles move faster and with greater energy. Temperature is directly proportional to the average kinetic energy of particles.",
      keyPoints: ["kinetic energy increases", "particles move faster", "direct proportional relationship", "average kinetic energy"],
      explanation: "Temperature is a measure of the average kinetic energy of particles in a substance."
    } as ShortAnswerQuestion,

    {
      id: "U6_SA_03",
      unit: 6,
      type: "short-answer",
      question: "Describe what happens during the process of evaporation in terms of molecular motion.",
      sampleAnswer: "During evaporation, the most energetic molecules at the surface of a liquid have enough kinetic energy to overcome intermolecular forces and escape into the gas phase. This leaves behind molecules with lower average kinetic energy, which is why evaporation has a cooling effect.",
      keyPoints: ["energetic surface molecules", "overcome intermolecular forces", "escape to gas phase", "cooling effect"],
      explanation: "Evaporation is a selective process where only the highest energy molecules can escape the liquid phase."
    } as ShortAnswerQuestion,

    // Problem Solving Questions
    {
      id: "U6_PS_01",
      unit: 6,
      type: "problem-solving",
      question: "A gas occupies 2.5 L at 25°C and 1.0 atm. What volume will it occupy at 50°C and 2.0 atm?",
      sampleAnswer: "Using combined gas law: (P₁V₁)/T₁ = (P₂V₂)/T₂. Convert temperatures to Kelvin: T₁ = 298 K, T₂ = 323 K. Solve: V₂ = (P₁V₁T₂)/(P₂T₁) = (1.0 atm × 2.5 L × 323 K)/(2.0 atm × 298 K) = 1.36 L",
      steps: [
        "Convert temperatures to Kelvin (add 273)",
        "Apply combined gas law formula",
        "Substitute known values",
        "Solve for V₂"
      ],
      formula: "(P₁V₁)/T₁ = (P₂V₂)/T₂",
      explanation: "The combined gas law relates pressure, volume, and temperature for a fixed amount of gas."
    } as ProblemSolvingQuestion,

    {
      id: "U6_PS_02",
      unit: 6,
      type: "problem-solving",
      question: "How many moles of CO₂ gas are present in 5.6 L at STP?",
      sampleAnswer: "At STP, 1 mole of gas = 22.4 L. Using the relationship: moles = volume / molar volume = 5.6 L / 22.4 L/mol = 0.25 mol CO₂",
      steps: [
        "Identify STP molar volume (22.4 L/mol)",
        "Apply moles = volume / molar volume",
        "Substitute values",
        "Calculate result"
      ],
      formula: "moles = volume (L) / 22.4 L/mol at STP",
      explanation: "At standard temperature and pressure, the molar volume of any ideal gas is 22.4 L/mol."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U6_APP_01",
      unit: 6,
      type: "application",
      question: "Explain why a balloon filled with helium will eventually deflate even if there are no visible holes.",
      sampleAnswer: "Helium atoms are very small and can slowly diffuse through the microscopic pores in the balloon material. This process, called effusion, occurs because gas particles are in constant motion and can pass through tiny openings. The rate of effusion is inversely related to the molar mass - lighter gases like helium effuse faster than heavier gases.",
      scenario: "Balloon deflation and gas effusion",
      explanation: "Real-world applications of kinetic molecular theory explain everyday phenomena like balloon deflation through effusion."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U6_EXT_01",
      unit: 6,
      type: "extension",
      question: "A weather balloon is filled with 100 L of helium at sea level (1.0 atm, 20°C). As it rises to an altitude where pressure is 0.3 atm and temperature is -40°C, what will be its new volume? Explain why weather balloons often burst at high altitudes.",
      sampleAnswer: "Using combined gas law: V₂ = (P₁V₁T₂)/(P₂T₁). T₁ = 293 K, T₂ = 233 K. V₂ = (1.0 atm × 100 L × 233 K)/(0.3 atm × 293 K) = 265 L. Weather balloons burst because as they rise, decreasing pressure causes dramatic volume expansion. Even though temperature decreases (reducing volume), the pressure effect dominates, causing the balloon to expand beyond its elastic limit.",
      challengeLevel: "advanced",
      explanation: "Real atmospheric conditions create complex pressure-temperature relationships that can cause catastrophic balloon failure."
    } as ExtensionQuestion
  ]
}; 