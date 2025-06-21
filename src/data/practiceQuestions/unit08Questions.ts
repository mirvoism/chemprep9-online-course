import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit08Questions: UnitPracticeBank = {
  unit: 8,
  title: "Kinetics & Equilibrium",
  questions: [
    // Multiple Choice Questions
    {
      id: "U8_MC_01",
      unit: 8,
      type: "multiple-choice",
      question: "Which factor will increase the rate of a chemical reaction?",
      choices: {
        A: "Decreasing temperature",
        B: "Decreasing concentration of reactants",
        C: "Adding a catalyst",
        D: "Increasing the volume of the container"
      },
      correctAnswer: "C",
      explanation: "A catalyst increases reaction rate by providing an alternative pathway with lower activation energy, without being consumed in the reaction."
    } as MultipleChoiceQuestion,

    {
      id: "U8_MC_02",
      unit: 8,
      type: "multiple-choice",
      question: "At equilibrium, which statement is true?",
      choices: {
        A: "The forward reaction stops",
        B: "The reverse reaction stops",
        C: "The rates of forward and reverse reactions are equal",
        D: "The concentrations of reactants and products are equal"
      },
      correctAnswer: "C",
      explanation: "At equilibrium, the rates of forward and reverse reactions are equal, but the concentrations of reactants and products may be different."
    } as MultipleChoiceQuestion,

    {
      id: "U8_MC_03",
      unit: 8,
      type: "multiple-choice",
      question: "According to Le Châtelier's principle, if pressure is increased on a gaseous equilibrium, the reaction will shift toward:",
      choices: {
        A: "The side with more moles of gas",
        B: "The side with fewer moles of gas",
        C: "The products only",
        D: "The reactants only"
      },
      correctAnswer: "B",
      explanation: "Increasing pressure shifts equilibrium toward the side with fewer moles of gas to reduce the pressure stress."
    } as MultipleChoiceQuestion,

    {
      id: "U8_MC_04",
      unit: 8,
      type: "multiple-choice",
      question: "The activation energy of a reaction is:",
      choices: {
        A: "The energy released during the reaction",
        B: "The minimum energy needed for reactants to form products",
        C: "The energy difference between reactants and products",
        D: "The energy of the products"
      },
      correctAnswer: "B",
      explanation: "Activation energy is the minimum energy barrier that reactants must overcome to form products."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U8_SA_01",
      unit: 8,
      type: "short-answer",
      question: "Explain how a catalyst affects the rate of a chemical reaction.",
      sampleAnswer: "A catalyst increases the rate of a chemical reaction by providing an alternative reaction pathway with lower activation energy. This allows more reactant molecules to have sufficient energy to react. The catalyst is not consumed in the reaction and can be used repeatedly.",
      keyPoints: ["provides alternative pathway", "lowers activation energy", "not consumed", "increases reaction rate"],
      explanation: "Catalysts work by reducing the energy barrier for reactions without affecting the overall energy change."
    } as ShortAnswerQuestion,

    {
      id: "U8_SA_02",
      unit: 8,
      type: "short-answer",
      question: "What is meant by dynamic equilibrium?",
      sampleAnswer: "Dynamic equilibrium occurs when the rates of forward and reverse reactions are equal, so the concentrations of reactants and products remain constant over time. However, both reactions continue to occur at the molecular level - it's called 'dynamic' because molecules are still reacting in both directions.",
      keyPoints: ["equal forward and reverse rates", "constant concentrations", "reactions still occurring", "molecular level activity"],
      explanation: "Dynamic equilibrium represents a balance between opposing processes that continue to occur."
    } as ShortAnswerQuestion,

    {
      id: "U8_SA_03",
      unit: 8,
      type: "short-answer",
      question: "How does increasing temperature affect the equilibrium of an exothermic reaction?",
      sampleAnswer: "For an exothermic reaction, increasing temperature shifts the equilibrium toward the reactants (left). This is because heat is a product in exothermic reactions, so adding heat (increasing temperature) is like adding a product, which shifts equilibrium away from the products according to Le Châtelier's principle.",
      keyPoints: ["shifts toward reactants", "heat is a product", "Le Châtelier's principle", "exothermic reaction"],
      explanation: "Temperature changes affect equilibrium by treating heat as either a reactant or product depending on whether the reaction is endothermic or exothermic."
    } as ShortAnswerQuestion,

    // Problem Solving Questions
    {
      id: "U8_PS_01",
      unit: 8,
      type: "problem-solving",
      question: "For the reaction 2A + B ⇌ C + D, the equilibrium concentrations are: [A] = 0.10 M, [B] = 0.20 M, [C] = 0.30 M, [D] = 0.40 M. Calculate the equilibrium constant Kc.",
      sampleAnswer: "Kc = [C][D]/[A]²[B] = (0.30)(0.40)/(0.10)²(0.20) = 0.12/(0.01)(0.20) = 0.12/0.002 = 60",
      steps: [
        "Write the equilibrium expression: Kc = [C][D]/[A]²[B]",
        "Substitute equilibrium concentrations",
        "Calculate numerator: (0.30)(0.40) = 0.12",
        "Calculate denominator: (0.10)²(0.20) = 0.002",
        "Divide: 0.12/0.002 = 60"
      ],
      formula: "Kc = [products]/[reactants] with appropriate exponents",
      explanation: "The equilibrium constant expression uses equilibrium concentrations raised to their stoichiometric coefficients."
    } as ProblemSolvingQuestion,

    {
      id: "U8_PS_02",
      unit: 8,
      type: "problem-solving",
      question: "A reaction has a rate constant of 0.025 s⁻¹ at 25°C. If the activation energy is 50 kJ/mol, what is the rate constant at 35°C? (R = 8.314 J/mol·K)",
      sampleAnswer: "Use Arrhenius equation: ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂). T₁ = 298 K, T₂ = 308 K. ln(k₂/0.025) = (50,000/8.314)(1/298 - 1/308) = 6014(-1.09×10⁻⁴) = -0.655. k₂/0.025 = e⁻⁰·⁶⁵⁵ = 0.520. k₂ = 0.013 s⁻¹",
      steps: [
        "Convert temperatures to Kelvin: 25°C = 298 K, 35°C = 308 K",
        "Apply Arrhenius equation: ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂)",
        "Calculate temperature term: 1/298 - 1/308 = -1.09×10⁻⁴",
        "Solve for k₂: k₂ = k₁ × e^(-0.655) = 0.013 s⁻¹"
      ],
      formula: "ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂)",
      explanation: "The Arrhenius equation relates reaction rate constants to temperature and activation energy."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U8_APP_01",
      unit: 8,
      type: "application",
      question: "Explain why food spoils faster at room temperature than in a refrigerator, and why adding preservatives helps extend shelf life.",
      sampleAnswer: "Food spoilage involves chemical reactions caused by bacteria and enzymes. Higher temperatures increase reaction rates exponentially, so food spoils faster at room temperature than in cold refrigerators. Preservatives work as inhibitors that slow down these spoilage reactions by interfering with bacterial metabolism or enzyme activity, effectively increasing the activation energy for spoilage reactions.",
      scenario: "Food preservation and reaction kinetics",
      explanation: "Understanding reaction kinetics helps explain everyday phenomena like food preservation strategies."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U8_EXT_01",
      unit: 8,
      type: "extension",
      question: "The Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + heat is used to produce ammonia industrially. Explain why high pressure and moderate temperature (around 450°C) are used, even though lower temperatures would favor ammonia formation according to Le Châtelier's principle.",
      sampleAnswer: "High pressure favors ammonia formation because there are fewer moles of gas on the product side (2 vs 4). While lower temperatures would favor the exothermic formation of ammonia, they would make the reaction rate too slow to be economically viable. 450°C represents a compromise between reasonable reaction rate and acceptable equilibrium yield. Additionally, catalysts are used to increase the rate without affecting the equilibrium position.",
      challengeLevel: "advanced",
      explanation: "Industrial processes must balance thermodynamic favorability with kinetic feasibility for economic viability."
    } as ExtensionQuestion
  ]
}; 