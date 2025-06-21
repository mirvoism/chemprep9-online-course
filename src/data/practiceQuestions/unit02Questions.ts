import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit02Questions: UnitPracticeBank = {
  unit: 2,
  title: "Atomic Structure",
  questions: [
    // Multiple Choice Questions
    {
      id: "U2_MC_01",
      unit: 2,
      type: "multiple-choice",
      question: "Rutherford's gold foil experiment provided evidence that an atom:",
      choices: {
        A: "is a hard, indivisible sphere",
        B: "consists of a positively charged \"pudding\" with electrons embedded in it",
        C: "has a small, dense, positively charged nucleus",
        D: "has electrons in fixed planetary orbits"
      },
      correctAnswer: "C",
      explanation: "Rutherford's experiment showed that most alpha particles passed through the gold foil, but some were deflected at large angles, indicating a small, dense, positively charged nucleus."
    } as MultipleChoiceQuestion,

    {
      id: "U2_MC_02",
      unit: 2,
      type: "multiple-choice",
      question: "What is the total number of neutrons in an atom of ¹⁹₉F?",
      choices: {
        A: "9",
        B: "10", 
        C: "19",
        D: "28"
      },
      correctAnswer: "B",
      explanation: "Neutrons = Mass Number - Atomic Number = 19 - 9 = 10"
    } as MultipleChoiceQuestion,

    {
      id: "U2_MC_03",
      unit: 2,
      type: "multiple-choice",
      question: "Which model of the atom was the first to include a nucleus?",
      choices: {
        A: "Dalton's model",
        B: "Thomson's model",
        C: "Rutherford's model",
        D: "Bohr's model"
      },
      correctAnswer: "C",
      explanation: "Rutherford's model was the first to propose that atoms have a central nucleus containing protons, based on his gold foil experiment."
    } as MultipleChoiceQuestion,

    {
      id: "U2_MC_04",
      unit: 2,
      type: "multiple-choice",
      question: "The bright-line spectrum of an element is produced when electrons:",
      choices: {
        A: "move from lower to higher energy levels",
        B: "move from higher to lower energy levels",
        C: "are lost from the atom",
        D: "are gained by the atom"
      },
      correctAnswer: "B",
      explanation: "When electrons fall from higher to lower energy levels, they emit energy in the form of light, creating the characteristic bright-line spectrum."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U2_SA_01",
      unit: 2,
      type: "short-answer",
      question: "An atom has an electron configuration of 2-8-5. Identify the element and state the number of valence electrons it has.",
      sampleAnswer: "The total number of electrons is 2+8+5 = 15. The element with atomic number 15 is Phosphorus (P). It has 5 valence electrons (the electrons in the outermost shell).",
      keyPoints: ["15 electrons total", "Phosphorus (P)", "5 valence electrons", "outermost shell"],
      explanation: "The electron configuration shows the distribution of electrons in energy levels, and the outermost level determines chemical properties."
    } as ShortAnswerQuestion,

    {
      id: "U2_SA_02",
      unit: 2,
      type: "short-answer",
      question: "Explain, in terms of subatomic particles, why atoms of Carbon-12 and Carbon-14 are both considered isotopes of carbon.",
      sampleAnswer: "They are isotopes because they both have the same number of protons (6 protons), which makes them carbon. However, they have different numbers of neutrons (C-12 has 6 neutrons, C-14 has 8 neutrons), giving them different mass numbers.",
      keyPoints: ["same number of protons", "different neutrons", "same element", "different mass numbers"],
      explanation: "Isotopes are atoms of the same element with different numbers of neutrons, resulting in different atomic masses."
    } as ShortAnswerQuestion,

    {
      id: "U2_SA_03",
      unit: 2,
      type: "short-answer",
      question: "A neutral magnesium atom (Mg) has an atomic number of 12 and a mass number of 24. It loses two electrons. What is the resulting particle called, and what is its net charge?",
      sampleAnswer: "The resulting particle is a magnesium ion (or cation). Since it lost two negative electrons, its net charge is +2.",
      keyPoints: ["magnesium ion", "cation", "+2 charge", "lost electrons"],
      explanation: "When an atom loses electrons, it becomes positively charged because there are more protons than electrons."
    } as ShortAnswerQuestion,

    // Problem Solving Questions
    {
      id: "U2_PS_01",
      unit: 2,
      type: "problem-solving",
      question: "Element X has two natural isotopes. The isotope X-63 has a mass of 62.93 amu and a relative abundance of 69.17%. The isotope X-65 has a mass of 64.93 amu and a relative abundance of 30.83%. Calculate the average atomic mass of element X.",
      sampleAnswer: "Contribution from X-63 = 62.93 amu × 0.6917 = 43.529 amu; Contribution from X-65 = 64.93 amu × 0.3083 = 20.017 amu; Average Atomic Mass = 43.529 + 20.017 = 63.546 amu. (This element is Copper, Cu)",
      steps: [
        "Convert percentages to decimals",
        "Calculate contribution from each isotope (mass × abundance)",
        "Add contributions together",
        "Round to appropriate significant figures"
      ],
      formula: "Average atomic mass = Σ(isotope mass × fractional abundance)",
      explanation: "Average atomic mass is the weighted average of all isotopes based on their natural abundance."
    } as ProblemSolvingQuestion,

    {
      id: "U2_PS_02",
      unit: 2,
      type: "problem-solving",
      question: "An atom of potassium-40 contains 19 protons, 21 neutrons, and 19 electrons. Write the isotopic notation for this atom in the form of ᴬzX.",
      sampleAnswer: "⁴⁰₁₉K",
      steps: [
        "Identify mass number A = protons + neutrons = 19 + 21 = 40",
        "Identify atomic number Z = number of protons = 19",
        "Identify element symbol from atomic number (K for potassium)",
        "Write in notation form: ᴬzX"
      ],
      formula: "ᴬzX where A = mass number, Z = atomic number, X = element symbol",
      explanation: "Isotopic notation shows the mass number (superscript) and atomic number (subscript) with the element symbol."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U2_APP_01",
      unit: 2,
      type: "application",
      question: "When a specific salt is heated in a flame, a vibrant green light is produced. Explain this phenomenon in terms of electron behavior, using the terms \"ground state,\" \"excited state,\" and \"energy.\"",
      sampleAnswer: "The atoms in the salt absorb energy from the flame. This causes their electrons to jump from their normal, low-energy 'ground state' to a higher-energy 'excited state.' This state is unstable, so the electrons immediately fall back down to the ground state. As they fall, they release the absorbed energy as light. The green color corresponds to the specific amount of energy released during this transition.",
      scenario: "Flame test producing colored light",
      explanation: "Flame tests work because electrons absorb energy, become excited, then emit specific wavelengths of light when returning to ground state."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U2_EXT_01",
      unit: 2,
      type: "extension",
      question: "The nucleus of a particular atom is sometimes called a \"nuclide.\" A certain nuclide contains 92 protons and 143 neutrons. It undergoes a process where it emits an alpha particle (which is a helium nucleus, ⁴₂He). What is the atomic number and mass number of the new nuclide that is formed? Identify the new element.",
      sampleAnswer: "The original nuclide is Uranium-235 (²³⁵₉₂U). Emitting an alpha particle (2 protons, 2 neutrons) reduces the atomic number by 2 and the mass number by 4. New Atomic Number = 92 - 2 = 90; New Mass Number = 235 - 4 = 231; The element with atomic number 90 is Thorium (Th). The new nuclide is Thorium-231 (²³¹₉₀Th).",
      challengeLevel: "advanced",
      explanation: "Nuclear decay processes follow conservation laws for mass number and atomic number, allowing prediction of decay products."
    } as ExtensionQuestion
  ]
}; 