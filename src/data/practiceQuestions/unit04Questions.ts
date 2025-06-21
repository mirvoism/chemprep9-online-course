import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit04Questions: UnitPracticeBank = {
  unit: 4,
  title: "Chemical Bonding",
  questions: [
    // Multiple Choice Questions
    {
      id: "U4_MC_01",
      unit: 4,
      type: "multiple-choice",
      question: "Which type of bond is formed when electrons are transferred from a metal atom to a nonmetal atom?",
      choices: {
        A: "Ionic bond",
        B: "Polar covalent bond",
        C: "Nonpolar covalent bond",
        D: "Metallic bond"
      },
      correctAnswer: "A",
      explanation: "Ionic bonds form when electrons are completely transferred from a metal (low electronegativity) to a nonmetal (high electronegativity), creating oppositely charged ions that attract each other."
    } as MultipleChoiceQuestion,

    {
      id: "U4_MC_02",
      unit: 4,
      type: "multiple-choice",
      question: "A molecule of ammonia (NH₃) has a pyramidal shape. Which statement best describes this molecule?",
      choices: {
        A: "It is symmetrical and therefore nonpolar",
        B: "It is symmetrical and therefore polar",
        C: "It is asymmetrical and therefore nonpolar",
        D: "It is asymmetrical and therefore polar"
      },
      correctAnswer: "D",
      explanation: "NH₃ has a pyramidal shape due to the lone pair on nitrogen, making it asymmetrical. The N-H bonds are polar, and the asymmetrical shape means the dipoles don't cancel, making the molecule polar."
    } as MultipleChoiceQuestion,

    {
      id: "U4_MC_03",
      unit: 4,
      type: "multiple-choice",
      question: "Which substance would have the highest melting point due to its strong network covalent bonds?",
      choices: {
        A: "Water (H₂O)",
        B: "Methane (CH₄)",
        C: "Diamond (C)",
        D: "Sodium Chloride (NaCl)"
      },
      correctAnswer: "C",
      explanation: "Diamond has a network covalent structure where each carbon atom is covalently bonded to four other carbon atoms in a three-dimensional network, requiring enormous energy to break."
    } as MultipleChoiceQuestion,

    {
      id: "U4_MC_04",
      unit: 4,
      type: "multiple-choice",
      question: "The ability of a substance to be hammered into sheets is called:",
      choices: {
        A: "Ductility",
        B: "Conductivity",
        C: "Malleability",
        D: "Elasticity"
      },
      correctAnswer: "C",
      explanation: "Malleability is the property that allows metals to be hammered or pressed into sheets. This is due to the non-directional nature of metallic bonding."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U4_SA_01",
      unit: 4,
      type: "short-answer",
      question: "Explain why ionic compounds typically have high melting points while molecular compounds typically have low melting points.",
      sampleAnswer: "Ionic compounds have high melting points because they are held together by strong electrostatic forces between oppositely charged ions. Molecular compounds have low melting points because they are held together by weaker intermolecular forces (van der Waals forces, dipole-dipole interactions, or hydrogen bonds) between neutral molecules.",
      keyPoints: ["ionic - strong electrostatic forces", "molecular - weak intermolecular forces", "charged vs neutral particles", "energy required to break bonds"],
      explanation: "The strength of attractive forces determines the energy needed to break apart a solid, which correlates with melting point."
    } as ShortAnswerQuestion,

    {
      id: "U4_SA_02",
      unit: 4,
      type: "short-answer",
      question: "Using electronegativity values, predict whether the bond between carbon and oxygen in CO₂ is ionic, polar covalent, or nonpolar covalent. Explain your reasoning.",
      sampleAnswer: "The bond between carbon and oxygen is polar covalent. Carbon has an electronegativity of 2.5 and oxygen has 3.5, giving a difference of 1.0. Since this difference is between 0.4 and 1.7, the bond is polar covalent. The electrons are shared but unequally, with oxygen having a greater attraction for the shared electrons.",
      keyPoints: ["electronegativity difference 1.0", "0.4-1.7 range", "polar covalent", "unequal sharing"],
      explanation: "Electronegativity differences determine bond type: 0-0.4 (nonpolar covalent), 0.4-1.7 (polar covalent), >1.7 (ionic)."
    } as ShortAnswerQuestion,

    {
      id: "U4_SA_03",
      unit: 4,
      type: "short-answer",
      question: "Draw the Lewis structure for water (H₂O) and predict its molecular geometry.",
      sampleAnswer: "The Lewis structure shows oxygen in the center with two single bonds to hydrogen atoms and two lone pairs on oxygen. The molecular geometry is bent (angular) with a bond angle of approximately 104.5° due to the repulsion from the two lone pairs.",
      keyPoints: ["oxygen center", "two single bonds", "two lone pairs", "bent geometry"],
      explanation: "VSEPR theory predicts molecular geometry based on electron pair repulsion, including both bonding and lone pairs."
    } as ShortAnswerQuestion,

    // Problem Solving Questions
    {
      id: "U4_PS_01",
      unit: 4,
      type: "problem-solving",
      question: "Consider the compounds NaCl, CCl₄, and CaCl₂. (a) Identify the type of bonding in each compound. (b) Predict which would have the highest melting point and explain why.",
      sampleAnswer: "(a) NaCl: ionic bonding, CCl₄: covalent bonding, CaCl₂: ionic bonding. (b) CaCl₂ would have the highest melting point because it has the strongest ionic bonding due to the +2 charge on Ca²⁺ and the resulting stronger electrostatic attractions with Cl⁻ ions.",
      steps: [
        "Identify metal vs nonmetal to determine bond type",
        "NaCl and CaCl₂ are ionic (metal + nonmetal)",
        "CCl₄ is covalent (nonmetal + nonmetal)",
        "Compare ionic charges to determine bond strength"
      ],
      formula: "Coulomb's law: Force ∝ q₁q₂/r²",
      explanation: "Ionic bond strength increases with higher charges and smaller ionic radii, leading to higher melting points."
    } as ProblemSolvingQuestion,

    {
      id: "U4_PS_02",
      unit: 4,
      type: "problem-solving",
      question: "Draw the Lewis structure for carbon dioxide (CO₂) and determine its molecular geometry and polarity.",
      sampleAnswer: "Lewis structure: O=C=O with linear geometry. Each C=O bond is polar (electronegativity difference), but the molecule is nonpolar because the two polar bonds are arranged linearly and cancel each other out (symmetrical molecule).",
      steps: [
        "Count total valence electrons (4 + 6 + 6 = 16)",
        "Place carbon in center with double bonds to each oxygen",
        "Apply VSEPR theory: 2 bonding pairs = linear geometry",
        "Analyze polarity: polar bonds but symmetrical arrangement"
      ],
      formula: "VSEPR: electron pairs arrange to minimize repulsion",
      explanation: "Molecular polarity depends on both bond polarity and molecular geometry - symmetrical molecules with polar bonds can be nonpolar overall."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U4_APP_01",
      unit: 4,
      type: "application",
      question: "Explain why metals are good conductors of electricity while ionic compounds only conduct when melted or dissolved in water.",
      sampleAnswer: "Metals conduct electricity because they have a 'sea' of delocalized electrons that can move freely throughout the metal structure. Ionic compounds in solid form have fixed ions that cannot move, so no conduction occurs. When melted or dissolved, the ions become mobile and can carry electrical current.",
      scenario: "Electrical conductivity in different types of bonding",
      explanation: "Electrical conductivity requires mobile charge carriers - either free electrons (metals) or mobile ions (ionic solutions/melts)."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U4_EXT_01",
      unit: 4,
      type: "extension",
      question: "Hydrogen fluoride (HF) has a much higher boiling point (19.5°C) than hydrogen chloride (HCl, -85.1°C), despite HF having a lower molar mass. Using your knowledge of intermolecular forces, explain this observation.",
      sampleAnswer: "HF can form hydrogen bonds due to the highly electronegative fluorine atom bonded to hydrogen. These hydrogen bonds are much stronger intermolecular forces than the dipole-dipole interactions present in HCl. The stronger intermolecular forces in HF require more energy to overcome, resulting in a higher boiling point despite the lower molar mass.",
      challengeLevel: "advanced",
      explanation: "Hydrogen bonding occurs when H is bonded to F, O, or N, creating exceptionally strong intermolecular forces that significantly affect physical properties."
    } as ExtensionQuestion
  ]
}; 