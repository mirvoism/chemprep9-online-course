import { Lesson } from '../../../types';

export const c6l3Data: Lesson = {
  id: 'C6L3',
  unit: 6,
  title: "Ideal Gas Law & Dalton's Law",
  objectives: [
    'State the Ideal Gas Law (PV=nRT) and define each variable with its common units.',
    'Use the Ideal Gas Law to calculate pressure, volume, moles, or temperature of a gas sample when other conditions are known.',
    'Understand the significance and common values/units of the ideal gas constant (R).',
    "State Dalton's Law of Partial Pressures and use it to calculate total pressure or partial pressures in a mixture of non-reacting gases.",
    'Define molar volume of a gas at Standard Temperature and Pressure (STP) as 22.4 L/mol.',
    'Perform stoichiometric calculations involving gases, including mole-to-volume and mass-to-volume conversions at STP and non-STP conditions (using PV=nRT).',
  ],
  labMinutes: 50,
  interactive: [
    {
      type: 'custom',
      componentKey: 'IdealGasLawSimulator',
      title: 'Ideal Gas & Partial Pressures Simulator',
      description:
        "Use the simulator to explore the relationships in PV=nRT and to visualize Dalton's Law of Partial Pressures. You can solve for any variable in the Ideal Gas Law and model mixtures of gases.",
    },
  ],
  narrative: `**Introduction**
While Boyle's, Charles's, and Gay-Lussac's laws describe relationships between two gas variables (P, V, T) when others are constant, the **Ideal Gas Law** provides a more general equation relating all four measurable properties of a gas: pressure (P), volume (V), temperature (T), and the number of moles (n).

**The Ideal Gas Law: PV = nRT**
This equation describes the state of a hypothetical ideal gas. Real gases approximate this behavior under conditions of low pressure and high temperature.
*   **P = Pressure** of the gas (Common units: atm, kPa, mmHg)
*   **V = Volume** of the gas (Common unit: Liters, L)
*   **n = Number of moles** of the gas (Unit: mol)
*   **T = Temperature** of the gas (Unit: **Kelvin, K, is essential**)
*   **R = Ideal Gas Constant**. The value and units of R depend on the units used for pressure and volume.

**The Ideal Gas Constant (R)**
Two common values for R are:
*   **R = 0.08206 L·atm / (mol·K)**  (Use when pressure is in atm and volume in L)
*   **R = 8.314 L·kPa / (mol·K)**    (Use when pressure is in kPa and volume in L)
It's crucial to choose the value of R that matches the units of P and V in your problem.

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ideal-gas-law-vars-title-c6l3" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="ideal-gas-law-vars-title-c6l3">Ideal Gas Law Variables: P, V, T, n in a container.</title>
  <style>.var-label-c6l3 { font-size: 0.9em; fill: var(--color-text-light); } .particle-c6l3 { fill: var(--color-accent); }</style>
  <rect x="50" y="50" width="200" height="120" rx="5" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.2"/>
  <rect x="50" y="50" width="200" height="20" fill="var(--color-primary)" fill-opacity="0.5"/> <!-- Piston -->
  <text x="150" y="40" text-anchor="middle" class="var-label-c6l3">Pressure (P)</text>
  <line x1="150" y1="50" x2="150" y2="70" stroke="var(--color-accent)" stroke-width="1.5" marker-start="url(#arrowheadPVTn-c6l3)"/>
  
  <text x="260" y="110" class="var-label-c6l3">Volume (V)</text>
  <line x1="250" y1="110" x2="200" y2="110" stroke="var(--color-accent)" stroke-width="1.5" marker-start="url(#arrowheadPVTn-c6l3)"/>
  
  <text x="150" y="185" text-anchor="middle" class="var-label-c6l3">Temperature (T)</text>
  <text x="40" y="185" text-anchor="middle" class="var-label-c6l3">Moles (n)</text>

  <!-- Gas Particles (n) -->
  <circle cx="100" cy="100" r="3" class="particle-c6l3"/> <circle cx="130" cy="120" r="3" class="particle-c6l3"/>
  <circle cx="160" cy="90" r="3" class="particle-c6l3"/>  <circle cx="190" cy="130" r="3" class="particle-c6l3"/>
  <circle cx="110" cy="140" r="3" class="particle-c6l3"/> <circle cx="170" cy="110" r="3" class="particle-c6l3"/>
  <defs>
    <marker id="arrowheadPVTn-c6l3" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
      <path d="M 10 0 L 0 5 L 10 10 z" fill="currentColor" />
    </marker>
  </defs>
</svg>

*Example Calculation with PV=nRT:*
What is the volume of 2.00 moles of N₂ gas at 25°C and 101.3 kPa?
*   P = 101.3 kPa
*   n = 2.00 mol
*   T = 25°C + 273.15 = 298.15 K
*   R = 8.314 L·kPa/(mol·K)
*   V = ?
PV = nRT  =>  V = nRT / P
V = (2.00 mol * 8.314 L·kPa/(mol·K) * 298.15 K) / 101.3 kPa
V = (4958.1 L·kPa) / 101.3 kPa 
V ≈ **48.9 L**

**Dalton's Law of Partial Pressures**
John Dalton stated that for a mixture of non-reacting gases, the total pressure exerted is the sum of the partial pressures of each individual gas in the mixture.
**P<sub>total</sub> = P₁ + P₂ + P₃ + ...**
Where:
*   P<sub>total</sub> is the total pressure of the gas mixture.
*   P₁, P₂, P₃, etc., are the partial pressures of each component gas (the pressure that gas would exert if it alone occupied the entire volume).

*KMT Explanation:* Gas particles act independently (KMT Postulate 4). Each gas in a mixture contributes to the total pressure based on the number of its particles colliding with the container walls.

<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="daltons-law-title-c6l3" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="daltons-law-title-c6l3">Dalton's Law of Partial Pressures.</title>
  <style>
    .gas-A-c6l3 { fill: var(--color-primary); } .gas-B-c6l3 { fill: var(--color-accent); }
    .container-c6l3 { stroke: var(--color-border); fill: var(--color-secondary); fill-opacity:0.1; rx:5;}
    .label-c6l3 { font-size: 0.9em; text-anchor:middle; fill: var(--color-text-light); }
  </style>
  <!-- Gas A -->
  <rect x="20" y="50" width="80" height="80" class="container-c6l3"/>
  <circle cx="40" cy="80" r="4" class="gas-A-c6l3"/> <circle cx="60" cy="100" r="4" class="gas-A-c6l3"/> <circle cx="80" cy="70" r="4" class="gas-A-c6l3"/>
  <text x="60" y="150" class="label-c6l3">Gas A (P₁)</text>
  
  <text x="115" y="95" font-size="1.5em" fill="var(--color-text-muted)">+</text>

  <!-- Gas B -->
  <rect x="150" y="50" width="80" height="80" class="container-c6l3"/>
  <circle cx="170" cy="75" r="4" class="gas-B-c6l3"/> <circle cx="190" cy="105" r="4" class="gas-B-c6l3"/> <circle cx="210" cy="85" r="4" class="gas-B-c6l3"/>
  <text x="190" y="150" class="label-c6l3">Gas B (P₂)</text>

  <text x="245" y="95" font-size="1.5em" fill="var(--color-text-muted)">=</text>

  <!-- Mixture -->
  <rect x="280" y="50" width="100" height="80" class="container-c6l3"/>
  <circle cx="300" cy="80" r="4" class="gas-A-c6l3"/> <circle cx="320" cy="100" r="4" class="gas-A-c6l3"/> <circle cx="340" cy="70" r="4" class="gas-A-c6l3"/>
  <circle cx="305" cy="105" r="4" class="gas-B-c6l3"/> <circle cx="330" cy="75" r="4" class="gas-B-c6l3"/> <circle cx="350" cy="95" r="4" class="gas-B-c6l3"/>
  <text x="330" y="150" class="label-c6l3">Mixture (P<sub>total</sub> = P₁ + P₂)</text>
  <text x="200" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Dalton's Law</text>
</svg>

*Example:* A container holds a mixture of oxygen gas (O₂) at a partial pressure of 0.50 atm and nitrogen gas (N₂) at a partial pressure of 0.80 atm. What is the total pressure?
P<sub>total</sub> = P<sub>O₂</sub> + P<sub>N₂</sub> = 0.50 atm + 0.80 atm = **1.30 atm**.

**Mole Fraction and Partial Pressure (Advanced Concept):**
The partial pressure of a gas in a mixture is also related to its mole fraction (χ):
P<sub>A</sub> = χ<sub>A</sub> * P<sub>total</sub>
Where χ<sub>A</sub> = (moles of gas A) / (total moles of all gases).

**Gas Stoichiometry**
Stoichiometry involves using balanced chemical equations to determine quantitative relationships between reactants and products. For gases, volume can be related to moles.

**1. Molar Volume at STP**
At Standard Temperature and Pressure (STP: 0°C or 273.15 K, and 1 atm or 101.325 kPa), **one mole of any ideal gas occupies a volume of 22.4 Liters**.
This value (22.4 L/mol) can be used as a conversion factor in stoichiometric calculations *only at STP*.

<svg width="200" height="180" xmlns="http://www.w3.org/2000/svg" aria-labelledby="molar-volume-title-c6l3" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="molar-volume-title-c6l3">Molar Volume of a Gas at STP.</title>
  <rect x="30" y="30" width="140" height="100" rx="10" stroke="var(--color-border)" fill="var(--color-primary)" fill-opacity="0.2"/>
  <text x="100" y="20" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Molar Volume at STP</text>
  <text x="100" y="70" text-anchor="middle" font-size="1.1em" fill="var(--color-text-light)">22.4 L</text>
  <text x="100" y="95" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">Contains 1 mole</text>
  <text x="100" y="110" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">(6.022 x 10²³ particles)</text>
  <text x="100" y="140" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">Conditions: 0°C (273K) & 1 atm</text>
</svg>

*Example (Stoichiometry at STP):*
How many liters of oxygen gas (O₂) at STP are required to completely react with 4.0 moles of hydrogen gas (H₂) according to the reaction: 2H₂(g) + O₂(g) → 2H₂O(g)?
1.  **Mole ratio:** From the balanced equation, 2 mol H₂ reacts with 1 mol O₂.
    Moles of O₂ needed = 4.0 mol H₂ × (1 mol O₂ / 2 mol H₂) = 2.0 mol O₂.
2.  **Volume at STP:**
    Volume of O₂ = 2.0 mol O₂ × (22.4 L / 1 mol O₂) = **44.8 L O₂**.

**2. Gas Stoichiometry at Non-STP Conditions**
If a reaction involving gases occurs at conditions other than STP, you cannot use 22.4 L/mol directly. Instead:
1.  Use the balanced chemical equation to find moles of the gas.
2.  Use the Ideal Gas Law (PV=nRT) to calculate the volume of the gas (or other variables like P, n, T) using the given non-STP conditions.

*Example (Stoichiometry at non-STP):*
How many grams of zinc (Zn) are needed to produce 5.00 L of H₂ gas collected at 20.0°C and 0.980 atm? Reaction: Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)
(Molar mass of Zn ≈ 65.38 g/mol)
1.  **Find moles of H₂ using PV=nRT:**
    P = 0.980 atm, V = 5.00 L, T = 20.0°C + 273.15 = 293.15 K, R = 0.08206 L·atm/(mol·K)
    n = PV / RT = (0.980 atm * 5.00 L) / (0.08206 L·atm/(mol·K) * 293.15 K)
    n = 4.90 atm·L / 24.055 L·atm/mol ≈ 0.2037 mol H₂.
2.  **Use mole ratio from balanced equation:** 1 mol Zn produces 1 mol H₂.
    Moles of Zn needed = 0.2037 mol H₂ × (1 mol Zn / 1 mol H₂) = 0.2037 mol Zn.
3.  **Convert moles of Zn to grams:**
    Mass of Zn = 0.2037 mol Zn × 65.38 g/mol Zn ≈ **13.3 g Zn**.

**Safety Note:** When performing reactions that produce gases, especially in closed systems, be aware of pressure buildup. Ensure adequate ventilation if toxic or flammable gases are produced. Calculations involving gases require careful attention to units, especially for temperature (must be Kelvin for PV=nRT and combined gas law) and the R constant.`,
  practice: [
    {
      text: '1. A 5.0 L container holds 0.25 moles of oxygen gas at a temperature of 300 K. What is the pressure inside the container in atm? (R = 0.08206 L·atm/mol·K)',
    },
    {
      text: '2. How many moles of helium gas are present in a 10.0 L balloon at 27°C and 1.20 atm pressure?',
    },
    {
      text: '3. A gas mixture contains nitrogen (N₂) with a partial pressure of 75 kPa and oxygen (O₂) with a partial pressure of 25 kPa. What is the total pressure of the mixture?',
    },
    {
      text: '4. How many liters of CO₂ gas at STP are produced when 60.0 g of glucose (C₆H₁₂O₆, molar mass ≈ 180.16 g/mol) ferments according to the equation: C₆H₁₂O₆(s) → 2C₂H₅OH(l) + 2CO₂(g)?',
    },
    {
      text: '5. (Advanced) Calculate the volume of oxygen gas produced at 22.0°C and 0.995 atm when 10.0 g of potassium chlorate (KClO₃, molar mass ≈ 122.55 g/mol) decomposes. Reaction: 2KClO₃(s) → 2KCl(s) + 3O₂(g).',
    },
  ],
  answers: [
    {
      text: '1. **Ideal Gas Law (PV=nRT), solve for P:**\n   P = nRT / V\n   n = 0.25 mol, R = 0.08206 L·atm/mol·K, T = 300 K, V = 5.0 L\n   P = (0.25 mol * 0.08206 L·atm/mol·K * 300 K) / 5.0 L\n   P = (6.1545 L·atm) / 5.0 L = 1.2309 atm ≈ **1.2 atm** (to 2 sig figs from 0.25 and 5.0).',
    },
    {
      text: '2. **Ideal Gas Law (PV=nRT), solve for n:**\n   n = PV / RT\n   P = 1.20 atm, V = 10.0 L, T = 27°C + 273.15 = 300.15 K, R = 0.08206 L·atm/mol·K\n   n = (1.20 atm * 10.0 L) / (0.08206 L·atm/mol·K * 300.15 K)\n   n = (12.0 L·atm) / (24.629 L·atm/mol) ≈ **0.487 mol He**.',
    },
    {
      text: "3. **Dalton's Law (P<sub>total</sub> = P₁ + P₂):**\n   P<sub>total</sub> = P<sub>N₂</sub> + P<sub>O₂</sub> = 75 kPa + 25 kPa = **100 kPa**.",
    },
    {
      text: '4. **Gas Stoichiometry at STP:**\n   Step 1: Moles of glucose.\n   Moles C₆H₁₂O₆ = 60.0 g / 180.16 g/mol ≈ 0.3330 mol C₆H₁₂O₆.\n   Step 2: Moles of CO₂ produced (from balanced equation, 1 mol glucose → 2 mol CO₂).\n   Moles CO₂ = 0.3330 mol C₆H₁₂O₆ × (2 mol CO₂ / 1 mol C₆H₁₂O₆) = 0.6660 mol CO₂.\n   Step 3: Volume of CO₂ at STP (1 mol gas = 22.4 L at STP).\n   Volume CO₂ = 0.6660 mol × 22.4 L/mol = 14.9184 L ≈ **14.9 L CO₂**.',
    },
    {
      text: '5. **Gas Stoichiometry at non-STP:**\n   Step 1: Moles of KClO₃.\n   Moles KClO₃ = 10.0 g / 122.55 g/mol ≈ 0.08160 mol KClO₃.\n   Step 2: Moles of O₂ produced (from balanced equation, 2 mol KClO₃ → 3 mol O₂).\n   Moles O₂ = 0.08160 mol KClO₃ × (3 mol O₂ / 2 mol KClO₃) = 0.1224 mol O₂.\n   Step 3: Volume of O₂ using PV=nRT.\n   P = 0.995 atm, n = 0.1224 mol, T = 22.0°C + 273.15 = 295.15 K, R = 0.08206 L·atm/mol·K\n   V = nRT / P\n   V = (0.1224 mol * 0.08206 L·atm/mol·K * 295.15 K) / 0.995 atm\n   V = (2.969 L·atm) / 0.995 atm = 2.984 L ≈ **2.98 L O₂**.',
    },
  ],
};
