import { Lesson } from '../../../types';

export const c5l2Data: Lesson = {
  id: 'C5L2',
  unit: 5,
  title: 'Stoichiometry & Calculations',
  objectives: [
    'Understand and use mole ratios from balanced chemical equations.',
    'Perform mole-mole, mass-mole, and mass-mass stoichiometric calculations.',
    'Identify the limiting reactant in a chemical reaction and calculate the theoretical yield of a product.',
    'Calculate the percent yield of a reaction given the actual yield and theoretical yield.',
  ],
  labMinutes: 60,
  interactive: [
    {
      type: 'custom',
      componentKey: 'EquationBalancer',
      title: 'Equation Balancer Tool',
      initialEquation: 'Fe + O2 -> Fe2O3', // Example equation
      description:
        'Use this tool to practice balancing equations, which is the first crucial step in any stoichiometry problem. Ensure your equation is balanced before calculating mole ratios.',
    },
    {
      type: 'custom',
      title: 'Stoichiometry Problem Solver (Conceptual)',
      description: 'A guided tool to help set up and solve various stoichiometry problems.',
      placeholderText: `**Learning Goal:** To master the systematic approach to solving stoichiometry problems, including limiting reactant and percent yield calculations.\n
**Intended Functionality:**
1.  **Problem Type Selection:** User selects the type of problem (e.g., mass-mass, limiting reactant, percent yield).
2.  **Input:** User inputs the balanced chemical equation and given quantities (masses, moles).
3.  **Step-by-Step Guidance:**
    *   For mass-mass: Guides through mass → moles (reactant A), moles A → moles (product B) using mole ratio, moles B → mass B.
    *   For limiting reactant: Guides through calculating moles of product formed from each reactant, identifying the limiting one.
    *   For percent yield: Prompts for actual yield and guides theoretical yield calculation.
4.  **Calculation & Feedback:** Shows intermediate steps and the final answer.
_This interactive tool would help users break down complex problems and reinforce the calculation pathways._`,
    },
  ],
  narrative: `**Introduction to Stoichiometry**
**Stoichiometry** (pronounced "stoy-key-AHM-uh-tree") is the area of chemistry that deals with the quantitative relationships between reactants and products in chemical reactions. It allows us to predict how much reactant is needed or how much product will be formed in a given reaction. Think of it as the "recipe" calculations for chemistry.

**The Importance of Balanced Chemical Equations**
The foundation of all stoichiometric calculations is a **balanced chemical equation**. The coefficients in a balanced equation provide the **mole ratios** of reactants and products.
*   Example: N₂(g) + 3H₂(g) → 2NH₃(g)
    This equation tells us:
    *   1 mole of N₂ reacts with 3 moles of H₂ to produce 2 moles of NH₃.
    *   The mole ratio of N₂ to H₂ is 1:3.
    *   The mole ratio of N₂ to NH₃ is 1:2.
    *   The mole ratio of H₂ to NH₃ is 3:2.
These mole ratios are crucial conversion factors in stoichiometry.

<svg width="400" height="150" xmlns="http://www.w3.org/2000/svg" aria-labelledby="mole-ratio-title-c5l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="mole-ratio-title-c5l2">Mole ratios from a balanced equation: N₂ + 3H₂ → 2NH₃.</title>
  <text x="200" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">N₂(g) + 3H₂(g) → 2NH₃(g)</text>
  <text x="60" y="70" font-size="0.9em" fill="var(--color-primary)">1 mole N₂</text>
  <text x="140" y="70" font-size="0.9em" fill="var(--color-text-muted)">+</text>
  <text x="210" y="70" font-size="0.9em" fill="var(--color-accent)">3 moles H₂</text>
  <text x="280" y="70" font-size="0.9em" fill="var(--color-text-muted)">→</text>
  <text x="350" y="70" font-size="0.9em" fill="var(--color-success)">2 moles NH₃</text>
  <text x="200" y="110" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">Coefficients give mole ratios for calculations.</text>
</svg>

**Types of Stoichiometric Calculations**

**1. Mole-Mole Calculations:**
Given the number of moles of one substance, calculate the number of moles of another substance involved in the reaction.
*   **Steps:**
    1.  Start with a balanced chemical equation.
    2.  Use the mole ratio from the balanced equation to convert moles of the given substance to moles of the unknown substance.
*   *Example:* How many moles of NH₃ can be produced from 7.0 moles of H₂ reacting with excess N₂? (Use N₂(g) + 3H₂(g) → 2NH₃(g))
    Moles of NH₃ = 7.0 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 4.67 mol NH₃ ≈ **4.7 mol NH₃**

**2. Mass-Mole Calculations (and Mole-Mass):**
Given the mass of one substance, calculate the moles of another (or vice-versa).
*   **Steps (Mass → Moles):**
    1.  Balance the chemical equation.
    2.  Convert the given mass of substance A to moles of substance A (using molar mass of A).
    3.  Use the mole ratio to convert moles of A to moles of substance B.
*   *Example (Mass → Moles):* How many moles of CO₂ are produced when 100.0 g of C₃H₈ combusts?
    Equation: C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l)
    Molar mass of C₃H₈ = (3 × 12.01) + (8 × 1.01) = 44.11 g/mol.
    Moles C₃H₈ = 100.0 g C₃H₈ / 44.11 g/mol = 2.267 mol C₃H₈.
    Moles CO₂ = 2.267 mol C₃H₈ × (3 mol CO₂ / 1 mol C₃H₈) = 6.801 mol CO₂ ≈ **6.80 mol CO₂**.
*   **Steps (Moles → Mass):** (Reverse the mass-mole process)

**3. Mass-Mass Calculations:**
Given the mass of one substance, calculate the mass of another substance.
*   **Steps:**
    1.  Balance the chemical equation.
    2.  Convert the given mass of substance A to moles of substance A (using molar mass of A).
    3.  Use the mole ratio to convert moles of A to moles of substance B.
    4.  Convert moles of substance B to mass of substance B (using molar mass of B).

<svg width="450" height="120" xmlns="http://www.w3.org/2000/svg" aria-labelledby="mass-mass-steps-title-c5l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="mass-mass-steps-title-c5l2">Steps for Mass-Mass Stoichiometric Calculations.</title>
  <style>.step-box-c5l2 { fill:var(--color-secondary); stroke:var(--color-primary); rx:3; text-anchor:middle; } .step-text-c5l2 { fill:var(--color-text-light); font-size:0.8em; } .arrow-c5l2 { stroke:var(--color-accent); stroke-width:1.5; marker-end:url(#arrowStoich-c5l2); }</style>
  <defs><marker id="arrowStoich-c5l2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs>
  <rect x="10" y="40" width="100" height="40" class="step-box-c5l2"/> <text x="60" y="65" class="step-text-c5l2">Mass A (g)</text>
  <line x1="115" y1="60" x2="135" y2="60" class="arrow-c5l2"/> <text x="125" y="50" class="step-text-c5l2" font-size="0.7em">÷ MM A</text>
  <rect x="140" y="40" width="100" height="40" class="step-box-c5l2"/> <text x="190" y="65" class="step-text-c5l2">Moles A</text>
  <line x1="245" y1="60" x2="265" y2="60" class="arrow-c5l2"/> <text x="255" y="50" class="step-text-c5l2" font-size="0.7em">Mole Ratio</text>
  <rect x="270" y="40" width="100" height="40" class="step-box-c5l2"/> <text x="320" y="65" class="step-text-c5l2">Moles B</text>
  <line x1="375" y1="60" x2="395" y2="60" class="arrow-c5l2"/> <text x="385" y="50" class="step-text-c5l2" font-size="0.7em">× MM B</text>
  <rect x="400" y="40" width="100" height="40" class="step-box-c5l2"/> <text x="450" y="65" class="step-text-c5l2">Mass B (g)</text>
  <text x="255" y="15" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Mass-Mass Calculation Pathway</text>
</svg>

*   *Example:* What mass of iron(III) oxide (Fe₂O₃) is produced from the reaction of 25.0 g of iron (Fe) with excess oxygen?
    Equation: 4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)
    Molar mass Fe = 55.85 g/mol. Molar mass Fe₂O₃ = (2 × 55.85) + (3 × 16.00) = 159.70 g/mol.
    1.  Moles Fe = 25.0 g Fe / 55.85 g/mol = 0.4476 mol Fe.
    2.  Moles Fe₂O₃ = 0.4476 mol Fe × (2 mol Fe₂O₃ / 4 mol Fe) = 0.2238 mol Fe₂O₃.
    3.  Mass Fe₂O₃ = 0.2238 mol Fe₂O₃ × 159.70 g/mol = 35.74 g Fe₂O₃ ≈ **35.7 g Fe₂O₃**.

**Limiting Reactants (or Limiting Reagents)**
Often, reactants are not mixed in the exact stoichiometric ratios. One reactant will be completely consumed before the others.
*   **Limiting Reactant:** The reactant that is completely used up first in a reaction. It determines the maximum amount of product that can be formed (the theoretical yield).
*   **Excess Reactant:** The reactant(s) that are not completely consumed and remain after the reaction stops.

**Identifying the Limiting Reactant:**
1.  Calculate the moles of each reactant present.
2.  For each reactant, calculate the amount of product that *could* be formed if that reactant were completely consumed (using mole ratios).
3.  The reactant that produces the **smallest amount of product** is the limiting reactant.

*Example:* If 5.0 g of N₂ (MM=28.02 g/mol) reacts with 2.0 g of H₂ (MM=2.02 g/mol) to form NH₃ (N₂ + 3H₂ → 2NH₃), which is the limiting reactant?
1.  Moles N₂ = 5.0 g / 28.02 g/mol = 0.178 mol N₂.
    Moles H₂ = 2.0 g / 2.02 g/mol = 0.990 mol H₂.
2.  NH₃ from N₂: 0.178 mol N₂ × (2 mol NH₃ / 1 mol N₂) = 0.356 mol NH₃.
    NH₃ from H₂: 0.990 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 0.660 mol NH₃.
3.  N₂ produces less NH₃ (0.356 mol) than H₂ (0.660 mol). Therefore, **N₂ is the limiting reactant**. H₂ is in excess.

**Theoretical Yield, Actual Yield, and Percent Yield**
*   **Theoretical Yield:** The maximum amount of product that can be formed from a given amount of limiting reactant, calculated using stoichiometry. (In the example above, 0.356 mol NH₃ is the theoretical yield in moles).
*   **Actual Yield:** The amount of product actually obtained when the reaction is performed in the laboratory. It is an experimental value and is often less than the theoretical yield.
*   **Percent Yield:** A measure of the efficiency of the reaction.
    **Percent Yield = (Actual Yield / Theoretical Yield) × 100%**
    (Actual and theoretical yields must be in the same units, e.g., grams or moles).

*Example:* In the N₂/H₂ reaction above, the theoretical yield of NH₃ is 0.356 mol. If the actual yield obtained in the lab was 0.300 mol NH₃, what is the percent yield?
Percent Yield = (0.300 mol / 0.356 mol) × 100% = 0.8427 × 100% = **84.3%**.

Reasons for percent yield being less than 100%:
*   Incomplete reaction (equilibrium reached).
*   Side reactions producing unwanted products.
*   Loss of product during purification or collection.
*   Impurities in reactants.

**Safety Note:** Stoichiometric calculations are vital for safety in the lab. Using incorrect amounts of reactants can lead to overly vigorous reactions, insufficient product, or excessive, potentially hazardous, leftover reactants. Always double-check calculations and balanced equations.`,
  practice: [
    {
      text: '1. For the reaction: 2Al(s) + 3Cl₂(g) → 2AlCl₃(s)\n    a) How many moles of Cl₂ are needed to react with 4.50 moles of Al?\n    b) How many grams of AlCl₃ (MM ≈ 133.34 g/mol) can be produced from 15.0 g of Al (MM ≈ 26.98 g/mol)?',
    },
    {
      text: '2. If 20.0 g of magnesium (Mg, MM ≈ 24.31 g/mol) reacts with 25.0 g of oxygen (O₂, MM ≈ 32.00 g/mol) to form magnesium oxide (MgO), according to the equation 2Mg + O₂ → 2MgO:\n    a) Which reactant is the limiting reactant?\n    b) What is the theoretical yield of MgO (MM ≈ 40.31 g/mol) in grams?',
    },
    {
      text: '3. In the reaction from question 2, if a student actually obtains 30.5 g of MgO, what is the percent yield?',
    },
  ],
  answers: [
    {
      text: '1. **Reaction: 2Al(s) + 3Cl₂(g) → 2AlCl₃(s)**\n    a) **Moles of Cl₂:**\n       Moles Cl₂ = 4.50 mol Al × (3 mol Cl₂ / 2 mol Al) = **6.75 mol Cl₂**.\n    b) **Grams of AlCl₃ from 15.0 g Al:**\n       Step 1: Moles Al = 15.0 g Al / 26.98 g/mol = 0.5560 mol Al.\n       Step 2: Moles AlCl₃ = 0.5560 mol Al × (2 mol AlCl₃ / 2 mol Al) = 0.5560 mol AlCl₃.\n       Step 3: Mass AlCl₃ = 0.5560 mol AlCl₃ × 133.34 g/mol = 74.136 g ≈ **74.1 g AlCl₃**.',
    },
    {
      text: '2. **Reaction: 2Mg + O₂ → 2MgO**\n    Given: 20.0 g Mg, 25.0 g O₂.\n    a) **Identifying Limiting Reactant:**\n       Moles Mg = 20.0 g / 24.31 g/mol = 0.8227 mol Mg.\n       Moles O₂ = 25.0 g / 32.00 g/mol = 0.7813 mol O₂.\n       MgO from Mg: 0.8227 mol Mg × (2 mol MgO / 2 mol Mg) = 0.8227 mol MgO.\n       MgO from O₂: 0.7813 mol O₂ × (2 mol MgO / 1 mol O₂) = 1.5626 mol MgO.\n       Magnesium (Mg) produces less MgO, so **Mg is the limiting reactant**.\n    b) **Theoretical Yield of MgO in grams:**\n       The theoretical yield in moles is 0.8227 mol MgO (from the limiting reactant).\n       Mass MgO = 0.8227 mol MgO × 40.31 g/mol = 33.168 g ≈ **33.2 g MgO**.',
    },
    {
      text: '3. **Percent Yield:**\n   Actual Yield = 30.5 g MgO.\n   Theoretical Yield = 33.168 g MgO (using unrounded value for better precision).\n   Percent Yield = (Actual Yield / Theoretical Yield) × 100%\n   Percent Yield = (30.5 g / 33.168 g) × 100% = 0.91955 × 100% = 91.955% ≈ **92.0%**.',
    },
  ],
};
