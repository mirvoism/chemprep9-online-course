import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit03Questions: UnitPracticeBank = {
  unit: 3,
  title: "The Periodic Table",
  questions: [
    // Multiple Choice Questions
    {
      id: "U3_MC_01",
      unit: 3,
      type: "multiple-choice",
      question: "Elements in the same period of the periodic table have the same:",
      choices: {
        A: "number of valence electrons",
        B: "atomic radius",
        C: "chemical properties",
        D: "number of occupied electron shells"
      },
      correctAnswer: "D",
      explanation: "Elements in the same period (horizontal row) have the same number of electron shells or energy levels."
    } as MultipleChoiceQuestion,

    {
      id: "U3_MC_02",
      unit: 3,
      type: "multiple-choice",
      question: "Which element has the highest electronegativity?",
      choices: {
        A: "Fluorine (F)",
        B: "Lithium (Li)",
        C: "Francium (Fr)",
        D: "Helium (He)"
      },
      correctAnswer: "A",
      explanation: "Fluorine has the highest electronegativity (4.0 on the Pauling scale) because it strongly attracts electrons due to its small size and high nuclear charge."
    } as MultipleChoiceQuestion,

    {
      id: "U3_MC_03",
      unit: 3,
      type: "multiple-choice",
      question: "Which of the following elements is classified as a metalloid?",
      choices: {
        A: "Sulfur (S)",
        B: "Silicon (Si)",
        C: "Silver (Ag)",
        D: "Sodium (Na)"
      },
      correctAnswer: "B",
      explanation: "Silicon is a metalloid, having properties intermediate between metals and nonmetals. It's located along the metalloid staircase on the periodic table."
    } as MultipleChoiceQuestion,

    {
      id: "U3_MC_04",
      unit: 3,
      type: "multiple-choice",
      question: "The elements in Group 2 are known as the:",
      choices: {
        A: "Alkali metals",
        B: "Halogens",
        C: "Noble gases",
        D: "Alkaline earth metals"
      },
      correctAnswer: "D",
      explanation: "Group 2 elements (Be, Mg, Ca, Sr, Ba, Ra) are called alkaline earth metals. They have 2 valence electrons and form +2 ions."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U3_SA_01",
      unit: 3,
      type: "short-answer",
      question: "Explain why a sodium atom (Na) is larger than a chlorine atom (Cl), even though chlorine has more electrons and protons.",
      sampleAnswer: "Both sodium and chlorine are in Period 3, meaning they have the same number of electron shells. As you move from sodium to chlorine across the period, the number of protons in the nucleus increases. This stronger positive nuclear charge pulls the electron cloud in more tightly, making the chlorine atom smaller than the sodium atom.",
      keyPoints: ["same period", "same electron shells", "increased nuclear charge", "stronger attraction"],
      explanation: "Atomic radius decreases across a period due to increasing nuclear charge pulling electrons closer."
    } as ShortAnswerQuestion,

    {
      id: "U3_SA_02",
      unit: 3,
      type: "short-answer",
      question: "A calcium atom forms a Ca²⁺ ion. Does the ion have a larger or smaller radius than the original atom? Explain why.",
      sampleAnswer: "The Ca²⁺ ion is smaller than the Ca atom. The neutral calcium atom loses its two outermost valence electrons to become the ion. This results in the loss of its entire outer electron shell, making the resulting ion significantly smaller.",
      keyPoints: ["smaller radius", "lost outer shell", "lost valence electrons", "fewer energy levels"],
      explanation: "Cations are smaller than their parent atoms because they lose electrons and often entire electron shells."
    } as ShortAnswerQuestion,

    {
      id: "U3_SA_03",
      unit: 3,
      type: "short-answer",
      question: "Why do elements in Group 17 (the Halogens) have similar chemical properties?",
      sampleAnswer: "Elements in Group 17 have similar chemical properties because they all have the same number of valence electrons (7). This gives them a strong tendency to gain one electron to achieve a stable octet, making them all highly reactive nonmetals.",
      keyPoints: ["same valence electrons", "7 valence electrons", "gain one electron", "stable octet"],
      explanation: "Elements in the same group have similar chemical properties due to identical valence electron configurations."
    } as ShortAnswerQuestion,

    // Problem Solving Questions
    {
      id: "U3_PS_01",
      unit: 3,
      type: "problem-solving",
      question: "Consider the elements: Mg, Si, S, and Ba. (a) Arrange them in order of increasing atomic radius. (b) Arrange them in order of increasing first ionization energy.",
      sampleAnswer: "(a) S < Si < Mg < Ba. (Radius decreases across period 3, and Ba is much larger in period 6). (b) Ba < Mg < Si < S. (IE increases across period 3, and Ba has a much lower IE in period 6).",
      steps: [
        "Identify periods and groups for each element",
        "Apply periodic trends: radius decreases across periods, increases down groups",
        "Apply IE trends: increases across periods, decreases down groups",
        "Consider both period and group effects"
      ],
      formula: "Periodic trends: Radius and IE are inversely related",
      explanation: "Periodic trends result from changes in nuclear charge and electron shielding as you move across periods and down groups."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U3_APP_01",
      unit: 3,
      type: "application",
      question: "An unknown element is a brittle solid that is a poor conductor of electricity. It is located in Group 16. Predict the charge of the ion this element is most likely to form and whether it would have a high or low electronegativity.",
      sampleAnswer: "As a brittle solid and poor conductor, it is a nonmetal. Elements in Group 16 have 6 valence electrons. To achieve a stable octet, it will most likely gain 2 electrons, forming an ion with a -2 charge. As a nonmetal on the right side of the table, it would have a relatively high electronegativity.",
      scenario: "Identifying unknown element properties using periodic trends",
      explanation: "Physical properties and position on the periodic table allow prediction of chemical behavior and ion formation."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U3_EXT_01",
      unit: 3,
      type: "extension",
      question: "The first ionization energy of sodium is 496 kJ/mol, but the second ionization energy (the energy to remove a second electron) is 4562 kJ/mol, nearly ten times higher. Using your knowledge of electron configuration, explain this huge jump in energy.",
      sampleAnswer: "Sodium's electron configuration is 2-8-1. The first ionization energy removes the single valence electron from the third shell. This is relatively easy. To remove a second electron, you must break into the now-full, stable second shell (octet). This requires a massive amount of energy because the electron is being removed from a stable, noble-gas-like configuration and is much closer to the nucleus.",
      challengeLevel: "advanced",
      explanation: "Large jumps in successive ionization energies occur when electrons must be removed from inner, completed electron shells."
    } as ExtensionQuestion
  ]
}; 