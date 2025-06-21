import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit12Questions: UnitPracticeBank = {
  unit: 12,
  title: "Nuclear Chemistry",
  questions: [
    // Multiple Choice Questions
    {
      id: "U12_MC_01",
      unit: 12,
      type: "multiple-choice",
      question: "What is emitted during alpha decay?",
      choices: {
        A: "An electron",
        B: "A helium nucleus",
        C: "A neutron",
        D: "Electromagnetic radiation"
      },
      correctAnswer: "B",
      explanation: "Alpha decay emits an alpha particle, which is a helium nucleus (²₄He or ⁴₂α) consisting of 2 protons and 2 neutrons."
    } as MultipleChoiceQuestion,

    {
      id: "U12_MC_02",
      unit: 12,
      type: "multiple-choice",
      question: "In the nuclear equation ²³⁸U → ²³⁴Th + X, what is X?",
      choices: {
        A: "Alpha particle",
        B: "Beta particle",
        C: "Gamma ray",
        D: "Neutron"
      },
      correctAnswer: "A",
      explanation: "The mass number decreases by 4 (238 → 234) and atomic number decreases by 2 (92 → 90), indicating an alpha particle (⁴₂α) was emitted."
    } as MultipleChoiceQuestion,

    {
      id: "U12_MC_03",
      unit: 12,
      type: "multiple-choice",
      question: "What happens to the atomic number during beta-minus decay?",
      choices: {
        A: "Increases by 1",
        B: "Decreases by 1",
        C: "Remains the same",
        D: "Increases by 2"
      },
      correctAnswer: "A",
      explanation: "In beta-minus decay, a neutron converts to a proton and electron. The electron is emitted, increasing the atomic number by 1 while the mass number stays the same."
    } as MultipleChoiceQuestion,

    {
      id: "U12_MC_04",
      unit: 12,
      type: "multiple-choice",
      question: "Which type of radiation has the greatest penetrating power?",
      choices: {
        A: "Alpha particles",
        B: "Beta particles",
        C: "Gamma rays",
        D: "All have equal penetrating power"
      },
      correctAnswer: "C",
      explanation: "Gamma rays are electromagnetic radiation with no mass or charge, giving them the greatest penetrating power. They can pass through several centimeters of lead."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U12_SA_01",
      unit: 12,
      type: "short-answer",
      question: "Explain the difference between nuclear fission and nuclear fusion.",
      sampleAnswer: "Nuclear fission is the splitting of a heavy nucleus into two or more lighter nuclei, releasing energy. It occurs in nuclear reactors and atomic bombs using uranium or plutonium. Nuclear fusion is the combining of light nuclei to form heavier nuclei, releasing even more energy per unit mass. It occurs in stars and hydrogen bombs, typically involving hydrogen isotopes forming helium.",
      keyPoints: ["fission: splitting heavy nuclei", "fusion: combining light nuclei", "both release energy", "different applications"],
      explanation: "Both processes convert mass to energy according to E=mc², but they involve opposite nuclear transformations."
    } as ShortAnswerQuestion,

    {
      id: "U12_SA_02",
      unit: 12,
      type: "short-answer",
      question: "What is half-life and how is it used to measure radioactive decay?",
      sampleAnswer: "Half-life is the time required for half of a radioactive sample to decay. It's a constant characteristic of each radioactive isotope. For example, if a sample has a half-life of 10 years, after 10 years, 50% remains; after 20 years, 25% remains; after 30 years, 12.5% remains. Half-life is used in radioactive dating, medical treatments, and nuclear waste management.",
      keyPoints: ["time for half to decay", "constant for each isotope", "exponential decay pattern", "applications in dating and medicine"],
      explanation: "Half-life provides a way to predict and measure the rate of radioactive decay over time."
    } as ShortAnswerQuestion,

    {
      id: "U12_SA_03",
      unit: 12,
      type: "short-answer",
      question: "Describe three beneficial uses of radioactive isotopes in medicine.",
      sampleAnswer: "1) Medical imaging: Technetium-99m is used in diagnostic scans to visualize organs and detect abnormalities. 2) Cancer treatment: Cobalt-60 and other isotopes provide targeted radiation therapy to destroy cancer cells. 3) Sterilization: Gamma radiation from isotopes like Cobalt-60 sterilizes medical equipment and supplies without heat or chemicals.",
      keyPoints: ["diagnostic imaging", "cancer radiation therapy", "medical sterilization", "targeted applications"],
      explanation: "Controlled use of radioactivity provides valuable medical benefits when properly applied and monitored."
    } as ShortAnswerQuestion,

    // Problem Solving Questions
    {
      id: "U12_PS_01",
      unit: 12,
      type: "problem-solving",
      question: "Complete the nuclear equation: ²²⁶Ra → ²²²Rn + ?",
      sampleAnswer: "The missing particle is an alpha particle (⁴₂α or ⁴₂He). Check: Mass numbers: 226 = 222 + 4 ✓. Atomic numbers: 88 = 86 + 2 ✓. Complete equation: ²²⁶Ra → ²²²Rn + ⁴₂α",
      steps: [
        "Identify the change in mass number: 226 - 222 = 4",
        "Identify the change in atomic number: 88 - 86 = 2", 
        "A particle with mass 4 and charge 2 is an alpha particle",
        "Write complete equation: ²²⁶Ra → ²²²Rn + ⁴₂α"
      ],
      formula: "Conservation of mass number and atomic number",
      explanation: "Nuclear equations must conserve both mass number (A) and atomic number (Z)."
    } as ProblemSolvingQuestion,

    {
      id: "U12_PS_02",
      unit: 12,
      type: "problem-solving",
      question: "If a radioactive sample has a half-life of 8 days, what fraction of the original sample remains after 24 days?",
      sampleAnswer: "Number of half-lives = 24 days ÷ 8 days = 3 half-lives. After each half-life, half remains: After 1 half-life: 1/2. After 2 half-lives: 1/4. After 3 half-lives: 1/8. Therefore, 1/8 of the original sample remains.",
      steps: [
        "Calculate number of half-lives: 24 ÷ 8 = 3",
        "Apply half-life formula: N = N₀(1/2)ⁿ",
        "Substitute: N = N₀(1/2)³ = N₀(1/8)",
        "Answer: 1/8 or 12.5% remains"
      ],
      formula: "N = N₀(1/2)^(t/t₁/₂)",
      explanation: "Radioactive decay follows first-order kinetics with an exponential decrease over time."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U12_APP_01",
      unit: 12,
      type: "application",
      question: "Explain how carbon-14 dating works and why it's useful for archaeological dating but not for dating dinosaur fossils.",
      sampleAnswer: "Carbon-14 dating uses the radioactive decay of ¹⁴C (half-life 5,730 years) that's constantly formed in the atmosphere and incorporated into living organisms. When organisms die, ¹⁴C intake stops and the isotope decays. By measuring the remaining ¹⁴C, scientists can determine when the organism died. It's useful for archaeological artifacts up to about 50,000 years old. Dinosaur fossils are 65+ million years old - after ~10 half-lives (57,300 years), less than 0.1% of original ¹⁴C remains, making detection impossible.",
      scenario: "Archaeological and geological dating methods",
      explanation: "Radioactive dating methods are limited by the half-life of the isotope used and the detection limits of instruments."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U12_EXT_01",
      unit: 12,
      type: "extension",
      question: "Compare the energy release from nuclear reactions versus chemical reactions. Calculate the energy released when 1 gram of uranium-235 undergoes complete fission versus 1 gram of TNT exploding. (Use E=mc² and typical fission energy values)",
      sampleAnswer: "Chemical reactions (like TNT) release ~4,000 J/g by rearranging electrons. Nuclear fission releases ~200 MeV per U-235 nucleus. For 1 gram U-235: (1 g ÷ 235 g/mol) × 6.02×10²³ atoms/mol = 2.56×10²¹ atoms. Energy = 2.56×10²¹ × 200 MeV = 5.12×10²³ MeV = 8.2×10¹⁰ J. Nuclear fission releases ~20 million times more energy per gram than chemical explosives, demonstrating the enormous energy stored in nuclear bonds versus chemical bonds.",
      challengeLevel: "advanced",
      explanation: "The mass-energy equivalence in nuclear reactions releases millions of times more energy than chemical bond rearrangements."
    } as ExtensionQuestion
  ]
}; 