import { Lesson } from '../../../types';

export const c5l1Data: Lesson = {
  id: 'C5L1',
  unit: 5,
  title: 'The Mole & Molar Mass',
  objectives: [
    "Define the mole as the SI unit for amount of substance and state Avogadro's number.",
    'Calculate the molar mass of elements and compounds using the periodic table.',
    'Perform conversions between mass, moles, and the number of particles (atoms, molecules, formula units).',
  ],
  labMinutes: 45,
  interactive: [
    {
      type: 'custom',
      title: 'Mole Conversion Practice Tool (Conceptual)',
      description: 'Practice converting between grams, moles, and particles.',
      placeholderText: `**Learning Goal:** To master conversions involving moles.\n**Intended Functionality:**
1.  User selects a substance (e.g., H₂O, CO₂, Fe).
2.  User inputs a quantity (e.g., grams, moles, or number of particles).
3.  User selects the desired unit to convert to.
4.  The tool guides the user through the calculation steps (e.g., shows molar mass, Avogadro's number) and provides the answer.
_An interactive module would allow input and show step-by-step solutions._`,
    },
  ],
  narrative: `**Introduction: Why Do We Need the Mole?**
Atoms and molecules are incredibly small. It's impossible to count them individually for any practical amount of a substance. Chemists needed a way to relate the macroscopic world (what we can measure, like grams) to the microscopic world of atoms and molecules. This bridge is **the mole**.

**The Mole (mol)**
The mole is the SI unit for the **amount of substance**. It represents a specific number of particles.
One mole of any substance contains **Avogadro's number** of particles.

**Avogadro's Number (N<sub>A</sub>)**
Avogadro's number is approximately **6.022 x 10²³ particles per mole**.
So, 1 mole = 6.022 x 10²³ representative particles.
These "representative particles" can be:
*   **Atoms:** For elements (e.g., 1 mole of Carbon contains 6.022 x 10²³ Carbon atoms).
*   **Molecules:** For covalent compounds (e.g., 1 mole of Water (H₂O) contains 6.022 x 10²³ H₂O molecules).
*   **Formula Units:** For ionic compounds (e.g., 1 mole of Sodium Chloride (NaCl) contains 6.022 x 10²³ NaCl formula units).
*   **Ions:** If you are referring to ions specifically (e.g., 1 mole of Na⁺ ions).

Think of a mole like a "chemist's dozen." Just as 1 dozen eggs = 12 eggs, 1 mole of atoms = 6.022 x 10²³ atoms.

**Molar Mass (MM)**
The **molar mass** of a substance is the mass in grams of one mole of that substance. The units are typically **grams per mole (g/mol)**.
*   **For Elements:** The molar mass of an element is numerically equal to its atomic mass (found on the periodic table) expressed in g/mol.
    *   Example: Carbon (C) has an atomic mass of approximately 12.01 amu. So, the molar mass of Carbon is 12.01 g/mol. (This means 12.01 grams of Carbon contains 6.022 x 10²³ Carbon atoms).
*   **For Compounds:** The molar mass of a compound is the sum of the molar masses of all the atoms in its chemical formula.
    *   Example: Water (H₂O)
        *   Molar mass of H = 1.01 g/mol
        *   Molar mass of O = 16.00 g/mol
        *   Molar mass of H₂O = (2 × 1.01 g/mol) + (1 × 16.00 g/mol) = 2.02 g/mol + 16.00 g/mol = **18.02 g/mol**.
        (This means 18.02 grams of water contains 6.022 x 10²³ water molecules).
    *   Example: Sodium Chloride (NaCl)
        *   Molar mass of Na = 22.99 g/mol
        *   Molar mass of Cl = 35.45 g/mol
        *   Molar mass of NaCl = 22.99 g/mol + 35.45 g/mol = **58.44 g/mol**.

**Conversions Involving the Mole**
The mole concept allows us to convert between mass, moles, and the number of particles.

<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg" aria-labelledby="mole-conversion-map-title-c5l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="mole-conversion-map-title-c5l1">Mole Conversion Map showing relationships between Mass, Moles, and Particles.</title>
  <style>
    .box-c5l1 { fill: var(--color-secondary); stroke: var(--color-primary); stroke-width:1; rx:5; ry:5; }
    .text-label-c5l1 { font-size: 1em; text-anchor: middle; fill: var(--color-text-light); }
    .text-conversion-c5l1 { font-size: 0.8em; text-anchor: middle; fill: var(--color-accent); }
    .arrow-c5l1 { stroke: var(--color-accent); stroke-width:1.5; marker-end: url(#arrowhead-c5l1); }
  </style>
  <defs>
    <marker id="arrowhead-c5l1" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="var(--color-accent)" />
    </marker>
  </defs>

  <!-- Boxes -->
  <rect x="20" y="90" width="100" height="50" class="box-c5l1"/>
  <text x="70" y="118" class="text-label-c5l1">Mass (grams)</text>

  <rect x="150" y="20" width="100" height="50" class="box-c5l1"/>
  <text x="200" y="48" class="text-label-c5l1">Moles (mol)</text>

  <rect x="280" y="90" width="100" height="50" class="box-c5l1"/>
  <text x="330" y="110" class="text-label-c5l1">Number of</text>
  <text x="330" y="125" class="text-label-c5l1">Particles</text>
  <text x="330" y="138" class="text-label-c5l1">(atoms/molecules)</text>


  <!-- Arrows and Conversion Factors -->
  <!-- Mass to Moles -->
  <path d="M 120 100 C 130 80, 140 65, 150 60" fill="none" class="arrow-c5l1"/>
  <text x="145" y="75" class="text-conversion-c5l1">÷ Molar Mass (g/mol)</text>

  <!-- Moles to Mass -->
  <path d="M 160 70 C 140 90, 120 110, 110 118" fill="none" class="arrow-c5l1" transform="rotate(180 135 94)"/>
  <text x="100" y="65" class="text-conversion-c5l1" transform="translate(30, 10)">× Molar Mass (g/mol)</text>
  
  <!-- Moles to Particles -->
  <path d="M 250 60 C 260 80, 270 90, 280 100" fill="none" class="arrow-c5l1"/>
  <text x="285" y="75" class="text-conversion-c5l1">× N<sub>A</sub> (6.022x10²³)</text>

  <!-- Particles to Moles -->
  <path d="M 290 118 C 270 90, 260 70, 240 70" fill="none" class="arrow-c5l1" transform="rotate(180 265 94)"/>
  <text x="210" y="100" class="text-conversion-c5l1" transform="translate(30, -10)">÷ N<sub>A</sub> (6.022x10²³)</text>
  
  <text x="200" y="200" class="text-label-c5l1" font-size="0.9em">The Mole Map</text>
</svg>

**1. Converting Moles to Number of Particles:**
   Number of Particles = Moles × Avogadro's Number
   *   *Example:* How many molecules are in 2.5 moles of CO₂?
       Molecules = 2.5 mol × (6.022 × 10²³ molecules/mol) = 1.5055 × 10²⁴ molecules ≈ **1.5 × 10²⁴ molecules** (to 2 sig figs)

**2. Converting Number of Particles to Moles:**
   Moles = Number of Particles / Avogadro's Number
   *   *Example:* How many moles are present in 3.011 × 10²² atoms of Iron (Fe)?
       Moles = (3.011 × 10²² atoms) / (6.022 × 10²³ atoms/mol) = 0.05000 mol = **0.050 mol Fe**

**3. Converting Mass to Moles:**
   Moles = Mass (g) / Molar Mass (g/mol)
   *   *Example:* How many moles are in 36.04 grams of H₂O? (Molar mass of H₂O = 18.02 g/mol)
       Moles = 36.04 g / 18.02 g/mol = **2.000 mol H₂O**

**4. Converting Moles to Mass:**
   Mass (g) = Moles × Molar Mass (g/mol)
   *   *Example:* What is the mass of 0.50 moles of Carbon (C)? (Molar mass of C = 12.01 g/mol)
       Mass = 0.50 mol × 12.01 g/mol = **6.005 g C ≈ 6.0 g C** (to 2 sig figs)

**Two-Step Conversions:**
*   **Mass to Number of Particles:** First convert mass to moles, then moles to particles.
    *   *Example:* How many molecules are in 9.00 grams of H₂O?
        1.  Moles of H₂O = 9.00 g / 18.02 g/mol = 0.4994 mol H₂O
        2.  Molecules of H₂O = 0.4994 mol × (6.022 × 10²³ molecules/mol) ≈ **3.01 × 10²³ molecules H₂O**
*   **Number of Particles to Mass:** First convert particles to moles, then moles to mass.

**Safety Note:** While mole calculations are theoretical, accurate mass measurements are critical in the lab. Using an analytical balance correctly and recording masses to the proper precision ensures that the calculated moles reflect the actual amount of substance used, which is vital for stoichiometry and safety in chemical reactions.`,
  practice: [
    {
      text: '1. Calculate the molar mass of sulfuric acid (H₂SO₄). (Atomic masses: H=1.01, S=32.07, O=16.00)',
    },
    {
      text: '2. How many moles are present in 100.0 grams of calcium carbonate (CaCO₃)? (Molar mass of CaCO₃ ≈ 100.09 g/mol)',
    },
    { text: '3. How many atoms are there in 3.0 moles of pure copper (Cu)?' },
    {
      text: '4. What is the mass in grams of 1.20 × 10²⁴ molecules of methane (CH₄)? (Molar mass of CH₄ ≈ 16.05 g/mol)',
    },
  ],
  answers: [
    {
      text: '1. **Molar Mass of H₂SO₄:**\n   H: 2 × 1.01 g/mol = 2.02 g/mol\n   S: 1 × 32.07 g/mol = 32.07 g/mol\n   O: 4 × 16.00 g/mol = 64.00 g/mol\n   Total Molar Mass = 2.02 + 32.07 + 64.00 = **98.09 g/mol**.',
    },
    {
      text: '2. **Moles of CaCO₃:**\n   Moles = Mass / Molar Mass = 100.0 g / 100.09 g/mol ≈ **0.9991 mol CaCO₃**.',
    },
    {
      text: "3. **Atoms in 3.0 moles of Cu:**\n   Number of Atoms = Moles × Avogadro's Number\n   Number of Atoms = 3.0 mol × (6.022 × 10²³ atoms/mol) = 1.8066 × 10²⁴ atoms ≈ **1.8 × 10²⁴ atoms Cu** (to 2 sig figs).",
    },
    {
      text: '4. **Mass of 1.20 × 10²⁴ molecules of CH₄:**\n   Step 1: Convert molecules to moles.\n   Moles = (1.20 × 10²⁴ molecules) / (6.022 × 10²³ molecules/mol) ≈ 1.9927 mol CH₄.\n   Step 2: Convert moles to mass.\n   Mass = Moles × Molar Mass = 1.9927 mol × 16.05 g/mol ≈ 31.98 g ≈ **32.0 g CH₄** (to 3 sig figs based on 1.20 and 16.05).',
    },
  ],
};
