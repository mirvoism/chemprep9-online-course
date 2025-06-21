import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit10Questions: UnitPracticeBank = {
  unit: 10,
  title: "Redox & Electrochemistry",
  questions: [
    // Multiple Choice Questions
    {
      id: "U10_MC_01",
      unit: 10,
      type: "multiple-choice",
      question: "In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, which statement is correct?",
      choices: {
        A: "Zn is reduced and Cu²⁺ is oxidized",
        B: "Zn is oxidized and Cu²⁺ is reduced",
        C: "Both Zn and Cu²⁺ are oxidized",
        D: "Both Zn and Cu²⁺ are reduced"
      },
      correctAnswer: "B",
      explanation: "Zn loses electrons (oxidation number increases from 0 to +2), so it's oxidized. Cu²⁺ gains electrons (oxidation number decreases from +2 to 0), so it's reduced."
    } as MultipleChoiceQuestion,

    {
      id: "U10_MC_02",
      unit: 10,
      type: "multiple-choice",
      question: "In an electrochemical cell, oxidation occurs at the:",
      choices: {
        A: "Cathode",
        B: "Anode",
        C: "Salt bridge",
        D: "External circuit"
      },
      correctAnswer: "B",
      explanation: "Oxidation always occurs at the anode in electrochemical cells. The mnemonic 'An Ox' (Anode Oxidation) helps remember this."
    } as MultipleChoiceQuestion,

    {
      id: "U10_MC_03",
      unit: 10,
      type: "multiple-choice",
      question: "What is the oxidation number of Cr in K₂Cr₂O₇?",
      choices: {
        A: "+3",
        B: "+6",
        C: "+7",
        D: "+12"
      },
      correctAnswer: "B",
      explanation: "K has +1, O has -2. For K₂Cr₂O₇: 2(+1) + 2(x) + 7(-2) = 0. Solving: 2 + 2x - 14 = 0, so 2x = 12, x = +6."
    } as MultipleChoiceQuestion,

    {
      id: "U10_MC_04",
      unit: 10,
      type: "multiple-choice",
      question: "Which process occurs during electrolysis of molten NaCl?",
      choices: {
        A: "Na⁺ is reduced at the anode",
        B: "Cl⁻ is oxidized at the cathode",
        C: "Na⁺ is reduced at the cathode",
        D: "Both ions are reduced"
      },
      correctAnswer: "C",
      explanation: "During electrolysis, cations (Na⁺) migrate to and are reduced at the cathode, while anions (Cl⁻) migrate to and are oxidized at the anode."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U10_SA_01",
      unit: 10,
      type: "short-answer",
      question: "Explain the difference between a galvanic cell and an electrolytic cell.",
      sampleAnswer: "A galvanic cell converts chemical energy to electrical energy spontaneously (ΔG < 0, E° > 0). Examples include batteries. An electrolytic cell uses electrical energy to drive non-spontaneous chemical reactions (ΔG > 0, E° < 0). Examples include electroplating and electrolysis. In galvanic cells, the anode is negative; in electrolytic cells, the anode is positive.",
      keyPoints: ["galvanic: chemical to electrical", "electrolytic: electrical to chemical", "spontaneous vs non-spontaneous", "anode polarity differs"],
      explanation: "The key difference is the direction of energy conversion and whether the process is spontaneous."
    } as ShortAnswerQuestion,

    {
      id: "U10_SA_02",
      unit: 10,
      type: "short-answer",
      question: "What is the purpose of a salt bridge in an electrochemical cell?",
      sampleAnswer: "A salt bridge maintains electrical neutrality in both half-cells by allowing ion migration. As electrons flow through the external circuit, the salt bridge allows anions to move toward the anode compartment and cations toward the cathode compartment. This prevents charge buildup that would stop the reaction and maintains the flow of current.",
      keyPoints: ["maintains electrical neutrality", "allows ion migration", "prevents charge buildup", "maintains current flow"],
      explanation: "Without a salt bridge, charge separation would quickly stop the electrochemical reaction."
    } as ShortAnswerQuestion,

    {
      id: "U10_SA_03",
      unit: 10,
      type: "short-answer",
      question: "How do you determine if a redox reaction is spontaneous?",
      sampleAnswer: "A redox reaction is spontaneous if the standard cell potential (E°cell) is positive. E°cell = E°cathode - E°anode. If E°cell > 0, then ΔG° < 0 and the reaction is spontaneous. You can also compare reduction potentials: the species with higher reduction potential will be reduced, while the one with lower reduction potential will be oxidized.",
      keyPoints: ["E°cell must be positive", "E°cell = E°cathode - E°anode", "positive E° means negative ΔG°", "compare reduction potentials"],
      explanation: "Standard reduction potentials allow prediction of reaction spontaneity and direction."
    } as ShortAnswerQuestion,

    // Problem Solving Questions
    {
      id: "U10_PS_01",
      unit: 10,
      type: "problem-solving",
      question: "Balance the redox equation in acidic solution: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺",
      sampleAnswer: "Half-reactions: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O and Fe²⁺ → Fe³⁺ + e⁻. Multiply Fe half-reaction by 5: 5Fe²⁺ → 5Fe³⁺ + 5e⁻. Combined: MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺",
      steps: [
        "Write half-reactions: MnO₄⁻ → Mn²⁺ and Fe²⁺ → Fe³⁺",
        "Balance atoms other than H and O",
        "Balance O with H₂O, then H with H⁺",
        "Balance charge with electrons",
        "Multiply to equalize electrons and combine"
      ],
      formula: "Half-reaction method in acidic solution",
      explanation: "Balancing redox equations requires balancing both mass and charge using the half-reaction method."
    } as ProblemSolvingQuestion,

    {
      id: "U10_PS_02",
      unit: 10,
      type: "problem-solving",
      question: "Calculate the standard cell potential for: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s). E°(Zn²⁺/Zn) = -0.76 V, E°(Cu²⁺/Cu) = +0.34 V",
      sampleAnswer: "Identify half-reactions: Zn → Zn²⁺ + 2e⁻ (anode, oxidation) and Cu²⁺ + 2e⁻ → Cu (cathode, reduction). E°cell = E°cathode - E°anode = (+0.34 V) - (-0.76 V) = +0.34 V + 0.76 V = +1.10 V",
      steps: [
        "Identify cathode (reduction): Cu²⁺ + 2e⁻ → Cu, E° = +0.34 V",
        "Identify anode (oxidation): Zn → Zn²⁺ + 2e⁻, E° = -0.76 V",
        "Apply formula: E°cell = E°cathode - E°anode",
        "Calculate: E°cell = (+0.34) - (-0.76) = +1.10 V"
      ],
      formula: "E°cell = E°cathode - E°anode",
      explanation: "Standard cell potential determines the driving force and spontaneity of electrochemical reactions."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U10_APP_01",
      unit: 10,
      type: "application",
      question: "Explain how car batteries work and why they can be recharged, while alkaline batteries typically cannot be recharged.",
      sampleAnswer: "Car batteries (lead-acid) use reversible redox reactions: Pb + PbO₂ + 2H₂SO₄ ⇌ 2PbSO₄ + 2H₂O. During discharge, both electrodes form PbSO₄. During charging, electrical energy reverses the reaction. Alkaline batteries use Zn + MnO₂ reactions that form products that don't easily reverse due to physical changes, gas formation, and electrode degradation, making them effectively non-rechargeable.",
      scenario: "Battery technology and energy storage",
      explanation: "Rechargeability depends on whether the electrode reactions can be efficiently reversed without degradation."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U10_EXT_01",
      unit: 10,
      type: "extension",
      question: "In the electrolysis of aqueous NaCl, chlorine gas is produced at the anode instead of oxygen, even though water has a higher oxidation potential than Cl⁻. Explain this observation using overpotential effects and predict the products at both electrodes.",
      sampleAnswer: "Although H₂O → O₂ has a higher standard potential (+1.23 V) than Cl⁻ → Cl₂ (+1.36 V), kinetic factors (overpotential) favor chlorine production. Overpotential is the extra voltage needed to overcome activation barriers. Cl₂ formation has lower overpotential than O₂ formation on most electrode materials. Products: Anode: 2Cl⁻ → Cl₂ + 2e⁻, Cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻ (H₂O reduction favored over Na⁺ due to much higher reduction potential).",
      challengeLevel: "advanced",
      explanation: "Industrial electrolysis must consider both thermodynamic and kinetic factors to predict actual products."
    } as ExtensionQuestion
  ]
}; 