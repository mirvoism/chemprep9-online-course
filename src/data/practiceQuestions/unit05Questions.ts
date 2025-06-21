import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit05Questions: UnitPracticeBank = {
  unit: 5,
  title: "Chemical Reactions & Stoichiometry",
  questions: [
    // Multiple Choice Questions
    {
      id: "U5_MC_01",
      unit: 5,
      type: "multiple-choice",
      question: "When the equation Al + O₂ → Al₂O₃ is balanced, the coefficient for O₂ is:",
      choices: {
        A: "2",
        B: "3",
        C: "4",
        D: "6"
      },
      correctAnswer: "B",
      explanation: "The balanced equation is 4Al + 3O₂ → 2Al₂O₃. The coefficient for O₂ is 3."
    } as MultipleChoiceQuestion,

    {
      id: "U5_MC_02",
      unit: 5,
      type: "multiple-choice",
      question: "In the reaction 2H₂ + O₂ → 2H₂O, if 3 moles of H₂ react completely, how many moles of H₂O are produced?",
      choices: {
        A: "1.5 moles",
        B: "3 moles",
        C: "6 moles",
        D: "9 moles"
      },
      correctAnswer: "B",
      explanation: "From the balanced equation, the mole ratio is 2 H₂ : 2 H₂O (or 1:1). Therefore, 3 moles of H₂ produce 3 moles of H₂O."
    } as MultipleChoiceQuestion,

    {
      id: "U5_MC_03",
      unit: 5,
      type: "multiple-choice",
      question: "What type of chemical reaction is represented by: AB + CD → AD + CB?",
      choices: {
        A: "Synthesis (combination)",
        B: "Decomposition",
        C: "Single replacement",
        D: "Double replacement"
      },
      correctAnswer: "D",
      explanation: "This is a double replacement reaction where the positive ions (A and C) switch places with their respective negative ions (B and D)."
    } as MultipleChoiceQuestion,

    {
      id: "U5_MC_04",
      unit: 5,
      type: "multiple-choice",
      question: "The limiting reactant in a chemical reaction is:",
      choices: {
        A: "the reactant that is completely consumed first",
        B: "the reactant that produces the most product",
        C: "the reactant with the largest mass",
        D: "the reactant with the smallest molar mass"
      },
      correctAnswer: "A",
      explanation: "The limiting reactant is the reactant that is completely consumed first, stopping the reaction and determining the maximum amount of product that can be formed."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U5_SA_01",
      unit: 5,
      type: "short-answer",
      question: "Balance the following chemical equation: ___Ca + ___HCl → ___CaCl₂ + ___H₂",
      sampleAnswer: "Ca + 2HCl → CaCl₂ + H₂. The coefficients are 1, 2, 1, 1 respectively.",
      keyPoints: ["1 Ca", "2 HCl", "1 CaCl₂", "1 H₂", "mass conservation"],
      explanation: "Chemical equations must be balanced to obey the law of conservation of mass - atoms cannot be created or destroyed."
    } as ShortAnswerQuestion,

    {
      id: "U5_SA_02",
      unit: 5,
      type: "short-answer",
      question: "Identify the type of reaction and predict the products: Mg + CuSO₄ → ?",
      sampleAnswer: "This is a single replacement reaction. Mg is more reactive than Cu (based on the activity series), so it will replace Cu. Products: MgSO₄ + Cu",
      keyPoints: ["single replacement", "activity series", "Mg more reactive than Cu", "MgSO₄ + Cu"],
      explanation: "In single replacement reactions, a more reactive element displaces a less reactive element from a compound."
    } as ShortAnswerQuestion,

    {
      id: "U5_SA_03",
      unit: 5,
      type: "short-answer",
      question: "What is percent yield, and why might the actual yield of a reaction be less than the theoretical yield?",
      sampleAnswer: "Percent yield = (actual yield/theoretical yield) × 100%. Actual yield may be less due to incomplete reactions, side reactions, loss of product during purification, or measurement errors.",
      keyPoints: ["formula for percent yield", "incomplete reactions", "side reactions", "product loss"],
      explanation: "Theoretical yield assumes perfect conditions, but real reactions often have complications that reduce the actual amount of product obtained."
    } as ShortAnswerQuestion,

    // Problem Solving Questions
    {
      id: "U5_PS_01",
      unit: 5,
      type: "problem-solving",
      question: "How many grams of CO₂ are produced when 25.0 g of C₃H₈ (propane) burns completely in oxygen? The balanced equation is: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
      sampleAnswer: "Step 1: Convert 25.0 g C₃H₈ to moles: 25.0 g ÷ 44.1 g/mol = 0.567 mol C₃H₈. Step 2: Use stoichiometry: 1 mol C₃H₈ produces 3 mol CO₂, so 0.567 mol × 3 = 1.70 mol CO₂. Step 3: Convert to grams: 1.70 mol × 44.0 g/mol = 74.8 g CO₂",
      steps: [
        "Convert grams of reactant to moles",
        "Use mole ratio from balanced equation",
        "Convert moles of product to grams",
        "Check significant figures"
      ],
      formula: "mass → moles → mole ratio → moles → mass",
      explanation: "Stoichiometry calculations use the mole ratio from balanced equations to convert between quantities of reactants and products."
    } as ProblemSolvingQuestion,

    {
      id: "U5_PS_02",
      unit: 5,
      type: "problem-solving",
      question: "In the reaction N₂ + 3H₂ → 2NH₃, if you start with 2.0 mol N₂ and 4.0 mol H₂, which is the limiting reactant and how much NH₃ can be produced?",
      sampleAnswer: "Check each reactant: For N₂: 2.0 mol N₂ × (2 mol NH₃/1 mol N₂) = 4.0 mol NH₃. For H₂: 4.0 mol H₂ × (2 mol NH₃/3 mol H₂) = 2.67 mol NH₃. H₂ produces less NH₃, so H₂ is limiting. Maximum NH₃ produced = 2.67 mol",
      steps: [
        "Calculate theoretical yield from each reactant",
        "Compare theoretical yields",
        "Smallest yield indicates limiting reactant",
        "Maximum product = yield from limiting reactant"
      ],
      formula: "Compare: mol reactant × (mol product/mol reactant)",
      explanation: "The limiting reactant determines the maximum amount of product that can be formed in a chemical reaction."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U5_APP_01",
      unit: 5,
      type: "application",
      question: "A car's airbag inflates when sodium azide (NaN₃) decomposes: 2NaN₃ → 2Na + 3N₂. If an airbag needs 65 L of N₂ at STP to inflate properly, what minimum mass of NaN₃ is required?",
      sampleAnswer: "At STP, 1 mole of gas = 22.4 L. Moles of N₂ needed: 65 L ÷ 22.4 L/mol = 2.90 mol N₂. From stoichiometry: 3 mol N₂ comes from 2 mol NaN₃, so 2.90 mol N₂ × (2 mol NaN₃/3 mol N₂) = 1.93 mol NaN₃. Mass = 1.93 mol × 65.0 g/mol = 126 g NaN₃",
      scenario: "Car airbag chemistry and safety systems",
      explanation: "Real-world applications of stoichiometry include calculating reactant amounts needed for specific product volumes in safety devices."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U5_EXT_01",
      unit: 5,
      type: "extension",
      question: "In industrial ammonia production (Haber process): N₂ + 3H₂ ⇌ 2NH₃, only about 15-20% of the reactants convert to products per pass. If a factory starts with 1000 kg each of N₂ and H₂, and achieves 18% conversion, calculate the theoretical vs. actual yield of NH₃ produced.",
      sampleAnswer: "Find limiting reactant: 1000 kg N₂ = 35.7 kmol, 1000 kg H₂ = 500 kmol. N₂ needs 3 times its moles in H₂: 35.7 × 3 = 107.1 kmol H₂ needed. Since 500 kmol available, N₂ is limiting. Theoretical yield: 35.7 kmol N₂ × (2 mol NH₃/1 mol N₂) = 71.4 kmol = 1214 kg NH₃. Actual yield: 1214 kg × 0.18 = 219 kg NH₃",
      challengeLevel: "advanced",
      explanation: "Industrial processes rarely achieve 100% conversion due to equilibrium limitations, requiring multiple passes and recycling of unreacted materials."
    } as ExtensionQuestion
  ]
}; 