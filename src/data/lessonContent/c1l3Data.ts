import { Lesson } from '../../../types';

export const c1l3Data: Lesson = {
  id: 'C1L3',
  unit: 1,
  title: 'Measurement & Sig Figs',
  objectives: [
    'Understand precision vs. accuracy in measurements.',
    'Apply rules for determining significant figures in measurements.',
    'Perform calculations and report answers with the correct number of significant figures.',
    'Convert numbers to and from scientific notation.',
  ],
  labMinutes: 60,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/measurement-uncertainty/latest/measurement-uncertainty_en.html',
      title: 'Measurement Uncertainty',
      description: 'Investigate uncertainty in measurements using various instruments.',
    },
  ],
  narrative: `**Accuracy vs. Precision**
*   **Accuracy:** How close a measurement is to the true or accepted value. 
    <div class="my-4 flex justify-center">
      <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Dartboard showing high accuracy" class="p-1 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <circle cx="60" cy="60" r="50" fill="white" stroke="black"/>
        <circle cx="60" cy="60" r="35" fill="lightblue" stroke="black"/>
        <circle cx="60" cy="60" r="20" fill="red" stroke="black"/>
        <circle cx="60" cy="60" r="5" fill="yellow" stroke="black"/>
        <circle cx="62" cy="58" r="3" fill="black"/> <circle cx="58" cy="62" r="3" fill="black"/> <circle cx="60" cy="60" r="3" fill="black"/>
        <text x="20" y="110" font-size="10" fill="var(--color-text-muted)">High Accuracy</text>
      </svg>
    </div>
*   **Precision:** How close a series of measurements of the same quantity are to each other (reproducibility). Good precision means small random error.
    <div class="my-4 flex justify-around items-center">
      <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Dartboard showing high precision, low accuracy" class="p-1 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <circle cx="60" cy="60" r="50" fill="white" stroke="black"/>
        <circle cx="60" cy="60" r="35" fill="lightblue" stroke="black"/>
        <circle cx="60" cy="60" r="20" fill="red" stroke="black"/>
        <circle cx="60" cy="60" r="5" fill="yellow" stroke="black"/>
        <circle cx="32" cy="28" r="3" fill="black"/> <circle cx="28" cy="32" r="3" fill="black"/> <circle cx="30" cy="30" r="3" fill="black"/>
        <text x="10" y="110" font-size="10" fill="var(--color-text-muted)">High Precision, Low Accuracy</text>
      </svg>
      <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Dartboard showing high precision and high accuracy" class="p-1 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <circle cx="60" cy="60" r="50" fill="white" stroke="black"/>
        <circle cx="60" cy="60" r="35" fill="lightblue" stroke="black"/>
        <circle cx="60" cy="60" r="20" fill="red" stroke="black"/>
        <circle cx="60" cy="60" r="5" fill="yellow" stroke="black"/>
        <circle cx="61" cy="59" r="3" fill="black"/> <circle cx="59" cy="61" r="3" fill="black"/> <circle cx="60" cy="60" r="3" fill="black"/>
        <text x="10" y="110" font-size="10" fill="var(--color-text-muted)">High Precision & Accuracy</text>
      </svg>
    </div>

**Significant Figures (Sig Figs)**
Significant figures in a measurement include all the digits that are known with certainty plus one last digit that is estimated (uncertain). They indicate the precision of a measurement.

**Rules for Determining Significant Figures:**
1.  **Non-zero digits** are always significant. (e.g., 23.4 g has 3 sig figs)
2.  **Zeros between non-zero digits** (captive zeros) are significant. (e.g., 101.3 cm has 4 sig figs)
3.  **Leading zeros** (zeros at the beginning of a number) are NOT significant. They only act as placeholders. (e.g., 0.0052 kg has 2 sig figs (5 and 2))
4.  **Trailing zeros** (zeros at the end of a number) are significant ONLY if the number contains an explicit decimal point.
    *   2.00 mL has 3 sig figs.
    *   200. g has 3 sig figs (the decimal point makes the zeros significant).
    *   200 m is **ambiguous** regarding precision if measured this way. By convention without a decimal, it's often assumed to have 1 sig fig (the '2'). To avoid ambiguity, especially for numbers ending in zero without a decimal shown, **scientific notation is preferred**.
        *   2 x 10² m (clearly 1 sig fig)
        *   2.0 x 10² m (clearly 2 sig figs)
        *   2.00 x 10² m (clearly 3 sig figs)
5.  **Exact numbers** (e.g., counted items like 12 apples, or defined quantities like 1 inch = 2.54 cm exactly, or 1000 g = 1 kg) have an infinite number of significant figures and do not limit sig figs in calculations.

**Significant Figures in Calculations:**
*   **Multiplication and Division:** The result should have the same number of significant figures as the measurement with the *fewest* significant figures.
    *   Example: 4.56 cm * 1.4 cm = 6.384 cm² → Round to **6.4 cm²** (1.4 cm has 2 sig figs)
*   **Addition and Subtraction:** The result should have the same number of *decimal places* as the measurement with the *fewest* decimal places (the least precise measurement in terms of position of uncertainty).
    *   Example: 12.11 m + 18.0 m + 1.013 m = 31.123 m → Round to **31.1 m** (18.0 m has one decimal place)

**Scientific Notation**
A way to express very large or very small numbers concisely and to clearly indicate significant figures. Format: M x 10ⁿ, where 1 ≤ |M| < 10, and n is an integer.
*   All digits in the coefficient M are significant.
*   Example: 6,022,000,000 = 6.022 x 10⁹ (4 sig figs)
*   Example: 0.0000345 = 3.45 x 10⁻⁵ (3 sig figs)
*   Using scientific notation for numbers like "200 m":
    *   If measured to the nearest hundred: 2 x 10² m (1 sig fig)
    *   If measured to the nearest ten: 2.0 x 10² m (2 sig figs)
    *   If measured to the nearest one: 2.00 x 10² m (3 sig figs)

**Safety Note:** Accurate and precise measurements are crucial in chemistry for safety and reproducibility. For example, incorrectly measuring reactants for a chemical reaction could lead to unexpected or dangerous outcomes. Always use measuring instruments correctly and record data to the appropriate precision.`,
  practice: [
    {
      text: '1. How many significant figures are in each of the following measurements?\n    a) 0.00450 g\n    b) 100.5 mL\n    c) 2000 kg (Express in scientific notation for 1, 2, and 3 sig figs to show clarity)\n    d) 5.020 x 10³ L\n    e) 30 pencils',
    },
    {
      text: '2. Perform the following calculation and report the answer with the correct number of significant figures: (2.34 cm * 1.2 cm) + 0.589 cm²',
    },
    {
      text: '3. Convert 0.000000781 m to scientific notation. How would you write 58,300 km in scientific notation to show 3 significant figures?',
    },
  ],
  answers: [
    {
      text: "1. a) 0.00450 g has **3** significant figures (4, 5, and the trailing zero because it's in the decimal portion and to the right of non-zero digits).\n    b) 100.5 mL has **4** significant figures (captive zeros are significant).\n    c) 2000 kg: \n        - As 2 x 10³ kg, it has **1** significant figure.\n        - As 2.0 x 10³ kg, it has **2** significant figures.\n        - As 2.00 x 10³ kg, it has **3** significant figures.\n        (Without scientific notation or a decimal, '2000 kg' is ambiguous, typically assumed 1 sig fig. Scientific notation removes this ambiguity.)\n    d) 5.020 x 10³ L has **4** significant figures (all digits in the coefficient of scientific notation are significant).\n    e) 30 pencils is an **exact number** (counted items), so it has an infinite number of significant figures.",
    },
    {
      text: '2. Step 1 (Multiplication): 2.34 cm (3 sig figs) * 1.2 cm (2 sig figs) = 2.808 cm². Round to 2 sig figs: **2.8 cm²**.\n    Step 2 (Addition): 2.8 cm² (1 decimal place) + 0.589 cm² (3 decimal places). Result is limited to 1 decimal place.\n    2.8 cm² + 0.589 cm² = 3.389 cm². Round to 1 decimal place: **3.4 cm²**.',
    },
    {
      text: '3. 0.000000781 m = **7.81 x 10⁻⁷ m**.\n    58,300 km written to show 3 significant figures is **5.83 x 10⁴ km**.',
    },
  ],
};
