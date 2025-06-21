import { UnitPracticeBank, MultipleChoiceQuestion, ShortAnswerQuestion, ProblemSolvingQuestion, ApplicationQuestion, ExtensionQuestion } from '../../types/practiceQuestions';

export const unit01Questions: UnitPracticeBank = {
  unit: 1,
  title: "Introduction to Chemistry & Measurement",
  questions: [
    // Multiple Choice Questions
    {
      id: "U1_MC_01",
      unit: 1,
      type: "multiple-choice",
      question: "A student observes that a solution fizzes when a white powder is added. This observation is best described as:",
      choices: {
        A: "An inference",
        B: "A qualitative observation", 
        C: "A quantitative observation",
        D: "A scientific theory"
      },
      correctAnswer: "B",
      explanation: "This is a qualitative observation because it describes a quality or characteristic (fizzing) without using numbers or measurements."
    } as MultipleChoiceQuestion,
    
    {
      id: "U1_MC_02", 
      unit: 1,
      type: "multiple-choice",
      question: "Which of the following is a chemical property of iron?",
      choices: {
        A: "Iron is a solid at room temperature",
        B: "Iron has a density of 7.87 g/cm³", 
        C: "Iron conducts electricity",
        D: "Iron rusts in the presence of air and water"
      },
      correctAnswer: "D",
      explanation: "A chemical property describes how a substance behaves during a chemical reaction. Rusting is a chemical change involving the formation of iron oxide."
    } as MultipleChoiceQuestion,

    {
      id: "U1_MC_03",
      unit: 1, 
      type: "multiple-choice",
      question: "Which piece of laboratory equipment is best suited for accurately measuring the volume of a liquid?",
      choices: {
        A: "Beaker",
        B: "Erlenmeyer flask",
        C: "Test tube", 
        D: "Graduated cylinder"
      },
      correctAnswer: "D",
      explanation: "A graduated cylinder is specifically designed for precise volume measurements, with clear markings and a narrow shape to minimize measurement error."
    } as MultipleChoiceQuestion,

    {
      id: "U1_MC_04",
      unit: 1,
      type: "multiple-choice", 
      question: "A well-tested explanation for a broad set of observations is best known as a:",
      choices: {
        A: "Hypothesis",
        B: "Law",
        C: "Theory",
        D: "Variable"
      },
      correctAnswer: "C",
      explanation: "A scientific theory is a well-substantiated explanation supported by extensive evidence that explains a broad range of natural phenomena."
    } as MultipleChoiceQuestion,

    // Short Answer Questions
    {
      id: "U1_SA_01",
      unit: 1,
      type: "short-answer",
      question: "Explain the difference between an element and a compound at the atomic level.",
      sampleAnswer: "An element is made of only one type of atom (e.g., all atoms are copper). A compound is made of two or more different types of atoms chemically bonded together in a fixed ratio (e.g., H₂O molecules, each containing 2 hydrogen atoms and 1 oxygen atom).",
      keyPoints: ["one type of atom", "different types of atoms", "chemically bonded", "fixed ratio"],
      explanation: "Understanding atomic composition is fundamental to distinguishing between pure substances (elements) and chemical combinations (compounds)."
    } as ShortAnswerQuestion,

    {
      id: "U1_SA_02", 
      unit: 1,
      type: "short-answer",
      question: "A student measures the boiling point of water to be 98.6 °C. The accepted boiling point is 100.0 °C. Calculate the student's percent error.",
      sampleAnswer: "Percent Error = (|98.6 - 100.0| / 100.0) × 100% = (1.4 / 100.0) × 100% = 1.4%",
      keyPoints: ["absolute value", "divided by accepted value", "multiply by 100", "1.4%"],
      explanation: "Percent error measures the accuracy of experimental measurements compared to accepted values."
    } as ShortAnswerQuestion,

    {
      id: "U1_SA_03",
      unit: 1,
      type: "short-answer", 
      question: "Classify each of the following as a physical change or a chemical change: (a) melting an ice cube, (b) burning a piece of paper, (c) dissolving sugar in water.",
      sampleAnswer: "(a) Physical change, (b) Chemical change, (c) Physical change.",
      keyPoints: ["melting - physical", "burning - chemical", "dissolving - physical"],
      explanation: "Physical changes alter form or state without changing chemical composition, while chemical changes form new substances with different properties."
    } as ShortAnswerQuestion,

    // Problem Solving Questions  
    {
      id: "U1_PS_01",
      unit: 1,
      type: "problem-solving",
      question: "A rectangular block of wood has dimensions of 2.0 cm, 5.5 cm, and 10.0 cm. It has a mass of 82.5 g. (a) Calculate the volume of the block. (b) Calculate the density of the block. Remember to use the correct number of significant figures in your final answers.",
      sampleAnswer: "(a) Volume = 2.0 cm × 5.5 cm × 10.0 cm = 110 cm³. (2 sig figs from 2.0) (b) Density = mass/volume = 82.5 g / 110 cm³ = 0.75 g/cm³. (2 sig figs)",
      steps: [
        "Calculate volume using V = l × w × h",
        "Apply significant figures rules (limited by 2.0 cm)",
        "Calculate density using density = mass/volume", 
        "Round to appropriate significant figures"
      ],
      formula: "Density = mass/volume",
      explanation: "Density calculations require careful attention to significant figures, which are determined by the measurement with the fewest significant digits."
    } as ProblemSolvingQuestion,

    {
      id: "U1_PS_02",
      unit: 1,
      type: "problem-solving",
      question: "Using dimensional analysis, convert a speed of 90.0 kilometers per hour (km/hr) to meters per second (m/s).",
      sampleAnswer: "(90.0 km/hr) × (1000 m/1 km) × (1 hr/60 min) × (1 min/60 s) = 25.0 m/s",
      steps: [
        "Set up conversion factors to cancel unwanted units",
        "Convert km to m using 1000 m = 1 km", 
        "Convert hr to min using 1 hr = 60 min",
        "Convert min to s using 1 min = 60 s",
        "Calculate final result"
      ],
      formula: "Use conversion factors where unwanted units cancel",
      explanation: "Dimensional analysis ensures unit consistency and provides a systematic method for unit conversions."
    } as ProblemSolvingQuestion,

    // Application Question
    {
      id: "U1_APP_01", 
      unit: 1,
      type: "application",
      question: "You are given a mixture of small plastic beads and sand. Describe a step-by-step procedure you could use to separate these two substances, explaining the physical property that allows the separation to work.",
      sampleAnswer: "Add the mixture to a beaker of water. The sand will sink because its density is greater than water, while the plastic beads will float because their density is less than water. The beads can then be skimmed off the surface. This separation works because of the difference in density between the three substances.",
      scenario: "Laboratory separation of heterogeneous mixture",
      explanation: "Separation techniques exploit differences in physical properties. Here, density differences allow separation by flotation."
    } as ApplicationQuestion,

    // Extension Question
    {
      id: "U1_EXT_01",
      unit: 1, 
      type: "extension",
      question: "The density of gold is 19.3 g/cm³. A person claiming to have a pure gold nugget says it has a mass of 95.0 g and a volume of 5.5 cm³. Is the nugget likely pure gold? Justify your answer with a calculation.",
      sampleAnswer: "Calculate the density of the nugget: Density = 95.0 g / 5.5 cm³ ≈ 17.3 g/cm³. This calculated density is significantly lower than the accepted density of gold (19.3 g/cm³). Therefore, the nugget is not likely pure gold.",
      challengeLevel: "advanced",
      explanation: "This problem requires applying density concepts to evaluate claims and demonstrates how physical properties can be used for identification and authentication."
    } as ExtensionQuestion
  ]
};
