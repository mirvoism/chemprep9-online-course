import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit11Questions: UnitPracticeBank = {
  unit: 11,
  title: "Organic Chemistry",
  questions: [
    // Multiple Choice Questions
    {
      id: "U11_MC_01",
      unit: 11,
      type: "multiple-choice",
      question: "Which functional group is present in alcohols?",
      choices: {
        A: "-COOH",
        B: "-OH",
        C: "-CHO",
        D: "-NH₂"
      },
      correctAnswer: "B",
      explanation: "The hydroxyl group (-OH) is the characteristic functional group of alcohols. -COOH is carboxyl (acids), -CHO is aldehyde, and -NH₂ is amino."
    } as MultipleChoiceQuestion,

    {
      id: "U11_MC_02",
      unit: 11,
      type: "multiple-choice",
      question: "What is the IUPAC name for CH₃CH₂CH₂CH₃?",
      choices: {
        A: "Propane",
        B: "Butane",
        C: "Pentane",
        D: "Hexane"
      },
      correctAnswer: "B",
      explanation: "This molecule has 4 carbon atoms in a straight chain, making it butane. The prefix 'but-' indicates 4 carbons, and '-ane' indicates it's an alkane."
    } as MultipleChoiceQuestion,

    {
      id: "U11_MC_03",
      unit: 11,
      type: "multiple-choice",
      question: "Which type of reaction occurs when an alkene reacts with hydrogen gas in the presence of a catalyst?",
      choices: {
        A: "Substitution",
        B: "Elimination",
        C: "Addition",
        D: "Combustion"
      },
      correctAnswer: "C",
      explanation: "This is a hydrogenation reaction, which is an addition reaction. The H₂ adds across the double bond, converting the alkene to an alkane."
    } as MultipleChoiceQuestion,

    {
      id: "U11_MC_04",
      unit: 11,
      type: "multiple-choice",
      question: "Which compound is an isomer of butane (C₄H₁₀)?",
      choices: {
        A: "Propane",
        B: "2-methylpropane",
        C: "Pentane",
        D: "Cyclobutane"
      },
      correctAnswer: "B",
      explanation: "2-methylpropane (also called isobutane) has the same molecular formula as butane (C₄H₁₀) but a different structure, making it a structural isomer."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U11_SA_01",
      unit: 11,
      type: "short-answer",
      question: "Explain the difference between saturated and unsaturated hydrocarbons.",
      sampleAnswer: "Saturated hydrocarbons contain only single bonds between carbon atoms and have the maximum number of hydrogen atoms possible. Examples include alkanes like methane and ethane. Unsaturated hydrocarbons contain double or triple bonds between carbon atoms and have fewer hydrogen atoms than the maximum possible. Examples include alkenes (double bonds) and alkynes (triple bonds).",
      keyPoints: ["saturated: only single bonds", "unsaturated: double/triple bonds", "maximum vs fewer hydrogens", "alkanes vs alkenes/alkynes"],
      explanation: "The degree of saturation refers to how many hydrogen atoms are bonded to the carbon skeleton."
    } as ShortAnswerQuestion,

    {
      id: "U11_SA_02",
      unit: 11,
      type: "short-answer",
      question: "What are functional groups and why are they important in organic chemistry?",
      sampleAnswer: "Functional groups are specific arrangements of atoms that give organic molecules their characteristic chemical properties and reactivity. Examples include -OH (hydroxyl), -COOH (carboxyl), and -NH₂ (amino). They are important because molecules with the same functional group tend to undergo similar reactions and have similar properties, regardless of the size of the carbon chain.",
      keyPoints: ["specific atom arrangements", "characteristic properties", "similar reactivity", "independent of carbon chain size"],
      explanation: "Functional groups allow chemists to predict and understand the behavior of organic compounds."
    } as ShortAnswerQuestion,

    {
      id: "U11_SA_03",
      unit: 11,
      type: "short-answer",
      question: "Describe the process of cracking in petroleum refining.",
      sampleAnswer: "Cracking is the process of breaking down large hydrocarbon molecules into smaller, more useful ones. Thermal cracking uses high temperature and pressure, while catalytic cracking uses catalysts at lower temperatures. This process converts heavy crude oil fractions into lighter products like gasoline, diesel, and jet fuel. It's essential because crude oil contains mostly large molecules, but we need smaller molecules for fuels.",
      keyPoints: ["breaks large molecules", "thermal vs catalytic", "produces useful fuels", "converts heavy to light fractions"],
      explanation: "Cracking is crucial for producing the range of petroleum products that modern society requires."
    } as ShortAnswerQuestion,

    // Problem Solving Questions
    {
      id: "U11_PS_01",
      unit: 11,
      type: "problem-solving",
      question: "Draw the structural formula for 2-methylpentane and identify it as an alkane, alkene, or alkyne.",
      sampleAnswer: "2-methylpentane has a 5-carbon main chain with a methyl group on the second carbon: CH₃-CH(CH₃)-CH₂-CH₂-CH₃. This is an alkane because it contains only single bonds between carbon atoms. The molecular formula is C₆H₁₄.",
      steps: [
        "Identify the main chain: pentane (5 carbons)",
        "Add the methyl substituent at position 2",
        "Draw the structure with all bonds",
        "Classify as alkane (only single bonds)"
      ],
      formula: "General alkane formula: CₙH₂ₙ₊₂",
      explanation: "IUPAC naming and structural drawing require understanding the carbon backbone and substituent positions."
    } as ProblemSolvingQuestion,

    {
      id: "U11_PS_02",
      unit: 11,
      type: "problem-solving",
      question: "Write the balanced equation for the complete combustion of propane (C₃H₈).",
      sampleAnswer: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Check: Left side has 3 C, 8 H, 10 O. Right side has 3 C, 8 H, 10 O. The equation is balanced.",
      steps: [
        "Write unbalanced equation: C₃H₈ + O₂ → CO₂ + H₂O",
        "Balance carbon: C₃H₈ + O₂ → 3CO₂ + H₂O",
        "Balance hydrogen: C₃H₈ + O₂ → 3CO₂ + 4H₂O",
        "Balance oxygen: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O"
      ],
      formula: "Hydrocarbon + O₂ → CO₂ + H₂O",
      explanation: "Complete combustion of hydrocarbons always produces carbon dioxide and water."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U11_APP_01",
      unit: 11,
      type: "application",
      question: "Explain why ethanol (C₂H₅OH) is soluble in water while octane (C₈H₁₈) is not, and how this property affects their uses.",
      sampleAnswer: "Ethanol contains a polar -OH group that can form hydrogen bonds with water molecules, making it miscible with water. Octane is a nonpolar hydrocarbon that cannot form hydrogen bonds with water, making it immiscible. This difference affects their uses: ethanol can be used in aqueous solutions (alcoholic beverages, antiseptics), while octane is used as a nonpolar solvent and fuel component where water separation is important.",
      scenario: "Solubility and practical applications",
      explanation: "The principle 'like dissolves like' governs solubility and determines how organic compounds can be used in different applications."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U11_EXT_01",
      unit: 11,
      type: "extension",
      question: "Compare the environmental and economic impacts of using ethanol versus gasoline as a vehicle fuel. Consider production methods, energy content, and emissions.",
      sampleAnswer: "Ethanol (C₂H₅OH) can be produced from renewable biomass (corn, sugarcane) making it potentially carbon-neutral, while gasoline comes from finite petroleum reserves. However, ethanol has lower energy content (about 67% of gasoline), reducing fuel efficiency. Ethanol burns cleaner, producing fewer toxic emissions, but its production requires significant agricultural land and energy input. Economic factors include agricultural subsidies, infrastructure costs for distribution, and price volatility. The net environmental benefit depends on production methods and lifecycle analysis.",
      challengeLevel: "advanced",
      explanation: "Sustainable chemistry requires considering the full lifecycle impacts of chemical processes and products."
    } as ExtensionQuestion
  ]
}; 