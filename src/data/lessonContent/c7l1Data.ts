import { Lesson } from '../../../types';

export const c7l1Data: Lesson = {
  id: 'C7L1',
  unit: 7,
  title: 'Solutions & Concentration',
  objectives: [
    'Define solution, solute, and solvent, and give examples of different types of solutions.',
    "Explain the concept of 'like dissolves like' in terms of polarity.",
    'Describe factors affecting the rate of dissolving and solubility (temperature, pressure for gases, nature of solute/solvent, surface area, agitation).',
    'Define concentration and calculate molarity (M), percent by mass (% m/m), percent by volume (% v/v), and parts per million (ppm).',
    'Prepare a solution of a given molarity.',
  ],
  labMinutes: 45,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/molarity/latest/molarity_en.html',
      title: 'Molarity Simulation (PhET)',
      description:
        'Explore how to make solutions of different concentrations. See how the amount of solute and volume of solution affect molarity.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/concentration/latest/concentration_en.html',
      title: 'Concentration Simulation (PhET)',
      description:
        'Investigate how concentration changes when adding solute, evaporating solvent, or diluting the solution.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/salts-and-solubility/latest/salts-and-solubility_en.html',
      title: 'Salts and Solubility (PhET)',
      description:
        'Explore the solubility of different salts. See how ions are formed when salts dissolve and how Ksp relates to solubility.',
    },
  ],
  narrative: `**What is a Solution?**
A **solution** is a **homogeneous mixture** of two or more substances. This means the mixture has a uniform composition throughout.
*   The **solute** is the substance that gets dissolved. It is usually present in a smaller amount.
*   The **solvent** is the substance that does the dissolving. It is usually present in a larger amount.
When water is the solvent, the solution is called an **aqueous solution (aq)**.

**Types of Solutions:**
Solutions can exist in various phases:
*   **Gas in Gas:** Air (N₂ solvent, O₂, Ar, CO₂ solutes)
*   **Gas in Liquid:** Carbonated water (H₂O solvent, CO₂ solute)
*   **Liquid in Liquid:** Vinegar (H₂O solvent, acetic acid solute), Antifreeze (ethylene glycol in water)
*   **Solid in Liquid:** Saltwater (H₂O solvent, NaCl solute), Sugar water
*   **Solid in Solid:** Alloys like brass (copper solvent, zinc solute) or steel (iron solvent, carbon solute).

<svg width="400" height="180" xmlns="http://www.w3.org/2000/svg" aria-labelledby="dissolution-title-c7l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="dissolution-title-c7l1">Illustration of solute particles dissolving in a solvent.</title>
  <style>
    .solvent-c7l1 { fill: var(--color-primary); opacity: 0.5; }
    .solute-c7l1 { fill: var(--color-accent); }
    .label-c7l1 { font-size: 0.9em; text-anchor: middle; fill: var(--color-text-muted); }
  </style>
  <!-- Before Dissolving -->
  <text x="80" y="25" class="label-c7l1 font-semibold">Before Dissolving</text>
  <rect x="20" y="40" width="120" height="100" rx="5" stroke="var(--color-border)" fill="none"/>
  <!-- Solvent particles -->
  <circle cx="40" cy="60" r="5" class="solvent-c7l1"/> <circle cx="70" cy="50" r="5" class="solvent-c7l1"/>
  <circle cx="100" cy="65" r="5" class="solvent-c7l1"/> <circle cx="50" cy="120" r="5" class="solvent-c7l1"/>
  <circle cx="90" cy="110" r="5" class="solvent-c7l1"/> <circle cx="120" cy="90" r="5" class="solvent-c7l1"/>
  <!-- Solute cluster -->
  <rect x="60" y="80" width="40" height="30" fill="var(--color-accent)" fill-opacity="0.3" rx="3"/>
  <circle cx="70" cy="90" r="4" class="solute-c7l1"/> <circle cx="80" cy="85" r="4" class="solute-c7l1"/>
  <circle cx="90" cy="95" r="4" class="solute-c7l1"/> <circle cx="75" cy="100" r="4" class="solute-c7l1"/>

  <text x="175" y="90" font-size="2em" fill="var(--color-text-muted)">→</text>

  <!-- After Dissolving (Homogeneous) -->
  <text x="290" y="25" class="label-c7l1 font-semibold">After Dissolving (Solution)</text>
  <rect x="230" y="40" width="120" height="100" rx="5" stroke="var(--color-border)" fill="none"/>
  <!-- Solvent particles -->
  <circle cx="250" cy="60" r="5" class="solvent-c7l1"/> <circle cx="280" cy="50" r="5" class="solvent-c7l1"/>
  <circle cx="310" cy="65" r="5" class="solvent-c7l1"/> <circle cx="260" cy="120" r="5" class="solvent-c7l1"/>
  <circle cx="300" cy="110" r="5" class="solvent-c7l1"/> <circle cx="330" cy="90" r="5" class="solvent-c7l1"/>
  <!-- Dispersed solute particles -->
  <circle cx="270" cy="80" r="4" class="solute-c7l1"/> <circle cx="290" cy="95" r="4" class="solute-c7l1"/>
  <circle cx="320" cy="55" r="4" class="solute-c7l1"/> <circle cx="255" cy="100" r="4" class="solute-c7l1"/>
</svg>

**Solubility and "Like Dissolves Like"**
**Solubility** is the maximum amount of a solute that can dissolve in a given amount of solvent at a specific temperature.
A key principle governing solubility is **"like dissolves like"**:
*   **Polar solvents** (like water, H₂O, which has polar O-H bonds and a bent shape) tend to dissolve **polar solutes** (like sugar, C₁₂H₂₂O₆, which has many polar O-H groups) and **ionic solutes** (like NaCl, which consists of Na⁺ and Cl⁻ ions). The attraction between the polar solvent molecules and the solute particles (or ions) overcomes the attractions within the solute itself.
*   **Nonpolar solvents** (like hexane, C₆H₁₄, or oil) tend to dissolve **nonpolar solutes** (like grease or iodine, I₂).
Polar and nonpolar substances generally do not mix well (e.g., oil and water).

**Factors Affecting the Rate of Dissolving and Solubility**
*   **1. Nature of Solute and Solvent (Polarity):** As described by "like dissolves like."
*   **2. Temperature:**
    *   **Solids in Liquids:** Solubility usually **increases** with increasing temperature (e.g., more sugar dissolves in hot tea than cold tea). Higher temperature gives solvent particles more kinetic energy to break apart solute particles.
    *   **Gases in Liquids:** Solubility usually **decreases** with increasing temperature (e.g., warm soda goes "flat" faster as CO₂ escapes). Higher temperature gives dissolved gas particles more kinetic energy to escape the solution.
<svg width="420" height="180" xmlns="http://www.w3.org/2000/svg" aria-labelledby="temp-solubility-title-c7l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="temp-solubility-title-c7l1">Effect of Temperature on Solubility of a Solid and a Gas in Liquid.</title>
  <!-- Solid in Liquid -->
  <text x="100" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Solid in Liquid</text>
  <rect x="30" y="40" width="70" height="80" class="container-c7l1"/>
  <text x="65" y="135" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">Low Temp</text>
  <circle cx="50" cy="70" r="3" class="solute-c7l1"/> <circle cx="70" cy="80" r="3" class="solute-c7l1"/>
  <rect x="40" y="100" width="30" height="10" fill="var(--color-accent)" fill-opacity="0.5"/> <!-- Undissolved -->
  <rect x="130" y="40" width="70" height="80" class="container-c7l1"/>
  <text x="165" y="135" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">High Temp 🔥</text>
  <circle cx="150" cy="60" r="3" class="solute-c7l1"/> <circle cx="170" cy="70" r="3" class="solute-c7l1"/>
  <circle cx="145" cy="85" r="3" class="solute-c7l1"/> <circle cx="165" cy="100" r="3" class="solute-c7l1"/>
  <text x="105" y="85" font-size="1.5em" fill="var(--color-text-muted)">→</text>
  <text x="100" y="155" text-anchor="middle" font-size="0.8em" fill="var(--color-accent)">Solubility Increases</text>

  <!-- Gas in Liquid -->
  <text x="310" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Gas in Liquid</text>
  <rect x="240" y="40" width="70" height="80" class="container-c7l1"/>
  <text x="275" y="135" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">Low Temp</text>
  <circle cx="260" cy="60" r="3" class="solute-c7l1"/> <circle cx="280" cy="70" r="3" class="solute-c7l1"/>
  <circle cx="255" cy="85" r="3" class="solute-c7l1"/> <circle cx="275" cy="100" r="3" class="solute-c7l1"/>
  <rect x="340" y="40" width="70" height="80" class="container-c7l1"/>
  <text x="375" y="135" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">High Temp 🔥</text>
  <circle cx="360" cy="70" r="3" class="solute-c7l1"/> <circle cx="380" cy="80" r="3" class="solute-c7l1"/>
  <text x="315" y="85" font-size="1.5em" fill="var(--color-text-muted)">→</text>
  <text x="310" y="155" text-anchor="middle" font-size="0.8em" fill="var(--color-danger)">Solubility Decreases</text>
</svg>
*   **3. Pressure (for gases in liquids only):** Henry's Law states that the solubility of a gas in a liquid is **directly proportional** to the partial pressure of that gas above the liquid (at constant temperature). Higher pressure forces more gas particles into solution. (e.g., carbonation of soft drinks under high CO₂ pressure).
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="pressure-solubility-title-c7l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="pressure-solubility-title-c7l1">Effect of Pressure on Solubility of a Gas in Liquid.</title>
  <!-- Low Pressure -->
  <text x="75" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Low Pressure</text>
  <rect x="25" y="60" width="100" height="100" class="container-c7l1"/>
  <rect x="25" y="40" width="100" height="20" fill="var(--color-secondary)"/> <!-- Piston -->
  <text x="40" y="52" font-size="0.7em" fill="var(--color-text-light)">↓ P</text>
  <circle cx="50" cy="100" r="3" class="solute-c7l1"/> <circle cx="80" cy="120" r="3" class="solute-c7l1"/> <!-- Dissolved gas -->
  <circle cx="60" cy="70" r="3" class="gas-B-c6l3"/> <circle cx="90" cy="75" r="3" class="gas-B-c6l3"/> <!-- Undissolved gas -->

  <!-- High Pressure -->
  <text x="225" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">High Pressure</text>
  <rect x="175" y="60" width="100" height="100" class="container-c7l1"/>
  <rect x="175" y="40" width="100" height="40" fill="var(--color-secondary)"/> <!-- Piston (lower) -->
  <text x="190" y="52" font-size="0.7em" fill="var(--color-text-light)">↓↓ P</text>
  <circle cx="200" cy="100" r="3" class="solute-c7l1"/> <circle cx="230" cy="120" r="3" class="solute-c7l1"/>
  <circle cx="190" cy="110" r="3" class="solute-c7l1"/> <circle cx="250" cy="95" r="3" class="solute-c7l1"/> <!-- More dissolved gas -->
  <circle cx="210" cy="80" r="3" class="gas-B-c6l3"/> <circle cx="240" cy="85" r="3" class="gas-B-c6l3"/> <!-- Compressed undissolved gas -->
  <text x="150" y="110" font-size="1.5em" fill="var(--color-text-muted)">→</text>
  <text x="150" y="180" text-anchor="middle" font-size="0.8em" fill="var(--color-accent)">Gas Solubility Increases</text>
</svg>
*   **4. Surface Area (for solids):** Increasing the surface area of a solid solute (e.g., by crushing it into a powder) increases the *rate of dissolving* because more solute particles are exposed to the solvent, but it doesn't change the overall solubility (how much can dissolve).
*   **5. Agitation (Stirring/Shaking):** Increases the *rate of dissolving* by bringing fresh solvent into contact with the solute, but doesn't change the overall solubility.

**Concentration of Solutions**
Concentration is a measure of the amount of solute dissolved in a given amount of solvent or solution.
*   **Dilute solution:** Contains a relatively small amount of solute.
*   **Concentrated solution:** Contains a relatively large amount of solute.

**Common Units of Concentration:**
**1. Molarity (M)**
Molarity is the number of moles of solute per liter of solution.
**M = moles of solute / Liters of solution**
Units: mol/L or M
*Example: What is the molarity of a solution made by dissolving 2.0 moles of NaCl in enough water to make 0.50 Liters of solution?*
M = 2.0 mol / 0.50 L = **4.0 M NaCl**

<svg width="250" height="220" xmlns="http://www.w3.org/2000/svg" aria-labelledby="molarity-prep-title-c7l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="molarity-prep-title-c7l1">Preparing a solution of known molarity using a volumetric flask.</title>
  <!-- Step 1: Weigh solute -->
  <text x="60" y="25" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">1. Weigh Solute</text>
  <rect x="20" y="40" width="80" height="20" fill="var(--color-accent)" fill-opacity="0.3"/>
  <text x="60" y="54" text-anchor="middle" font-size="0.7em" fill="var(--color-text-light)">Mass (g) → Moles</text>
  <!-- Step 2: Dissolve in some solvent -->
  <text x="180" y="25" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">2. Dissolve</text>
  <path d="M140 80 L140 40 Q145 30 160 30 T180 40 L180 80 Z" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.1"/>
  <rect x="150" y="60" width="20" height="10" fill="var(--color-accent)" fill-opacity="0.5"/>
  <!-- Step 3: Add to volumetric flask and dilute to mark -->
  <text x="125" y="105" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">3. Dilute to Volume in Volumetric Flask</text>
  <path d="M100 200 L100 140 C95 130 100 120 125 120 S155 130 150 140 L150 200 Z" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.1"/> <!-- Flask body -->
  <rect x="115" y="125" width="20" height="15" fill="var(--color-primary)" fill-opacity="0.3"/> <!-- Liquid level -->
  <line x1="110" y1="132.5" x2="140" y2="132.5" stroke="red" stroke-width="0.5"/> <!-- Mark -->
  <text x="125" y="150" text-anchor="middle" font-size="0.7em" fill="var(--color-text-light)">Liters of Solution</text>
  <text x="125" y="190" text-anchor="middle" font-size="0.9em" fill="var(--color-accent)">M = moles / Liters</text>
</svg>

**2. Percent Composition**
*   **Percent by Mass (% m/m):**
    **% m/m = (mass of solute / mass of solution) × 100%**
    (Note: mass of solution = mass of solute + mass of solvent)
    *Example: What is the percent by mass of NaCl if 20 g of NaCl is dissolved in 80 g of water?*
    Mass of solution = 20 g + 80 g = 100 g
    % m/m = (20 g NaCl / 100 g solution) × 100% = **20% NaCl by mass**

*   **Percent by Volume (% v/v):**
    **% v/v = (volume of solute / volume of solution) × 100%**
    (Often used for liquid-liquid solutions, assuming volumes are additive, which is not always perfectly true).
    *Example: If 50 mL of ethanol is mixed with 150 mL of water to make 200 mL of solution, what is the % v/v of ethanol?*
    % v/v = (50 mL ethanol / 200 mL solution) × 100% = **25% ethanol by volume**

**3. Parts Per Million (ppm)**
Used for very dilute solutions (e.g., pollutants in water or air).
**ppm = (mass of solute / mass of solution) × 1,000,000**
(Assuming densities are close to 1 g/mL for aqueous solutions, ppm can also be mg of solute per L of solution, or mg of solute per kg of solution).
*Example: If 0.005 g of lead is found in 1000 g of water, what is the concentration of lead in ppm?*
ppm = (0.005 g / 1000 g) × 1,000,000 = 5 × 10⁻⁶ × 1,000,000 = **5 ppm**

**Saturated, Unsaturated, and Supersaturated Solutions**
*   **Saturated Solution:** Contains the maximum amount of solute that can dissolve in a given amount of solvent at a specific temperature. If more solute is added, it will not dissolve. An equilibrium exists between dissolved and undissolved solute.
*   **Unsaturated Solution:** Contains less than the maximum amount of solute that can dissolve at a specific temperature. More solute can still be dissolved.
*   **Supersaturated Solution:** Contains more solute than can normally be held in a saturated solution at a given temperature. These solutions are unstable and can be made by dissolving solute at a high temperature and then carefully cooling. Adding a "seed crystal" or disturbing the solution can cause the excess solute to crystallize out rapidly.

**Safety Note:** When preparing solutions, especially acids or bases, always add the concentrated solute slowly to the solvent (often water), stirring continuously. For strong acids, "Acid to Water, like you oughta" (AA rule) is a safety mnemonic to remember, as diluting strong acids can release significant heat. Wear appropriate PPE like goggles and gloves.`,
  practice: [
    {
      text: '1. A solution is prepared by dissolving 10.0 g of NaOH (molar mass ≈ 40.00 g/mol) in enough water to make 250.0 mL of solution. Calculate the molarity of the NaOH solution.',
    },
    {
      text: '2. If 15 g of sugar is dissolved in 135 g of water, what is the percent by mass of sugar in the solution?',
    },
    {
      text: '3. Describe two ways to increase the rate at which a solid solute dissolves in a liquid solvent.',
    },
    {
      text: "4. Why does a can of soda go flat faster when left open at room temperature compared to when it's left open in a refrigerator?",
    },
    {
      text: '5. A water sample contains 0.000025 g of mercury in 500 g of water. What is the concentration of mercury in ppm?',
    },
  ],
  answers: [
    {
      text: '1. **Molarity of NaOH:**\n   Step 1: Moles of NaOH = Mass / Molar Mass = 10.0 g / 40.00 g/mol = 0.250 mol NaOH.\n   Step 2: Volume of solution in Liters = 250.0 mL * (1 L / 1000 mL) = 0.2500 L.\n   Step 3: Molarity = Moles / Liters = 0.250 mol / 0.2500 L = **1.00 M NaOH**.',
    },
    {
      text: '2. **Percent by mass of sugar:**\n   Mass of solute (sugar) = 15 g.\n   Mass of solvent (water) = 135 g.\n   Mass of solution = Mass of solute + Mass of solvent = 15 g + 135 g = 150 g.\n   % m/m = (Mass of solute / Mass of solution) × 100%\n   % m/m = (15 g / 150 g) × 100% = 0.10 × 100% = **10% sugar by mass**.',
    },
    {
      text: '3. Two ways to increase the rate of dissolving a solid solute:\n    a) **Stirring/Agitation:** Brings fresh solvent into contact with the solute surface.\n    b) **Increasing Temperature:** Increases kinetic energy of solvent particles, leading to more frequent and energetic collisions with the solute.\n    c) **Increasing Surface Area:** Crushing the solid into smaller pieces exposes more surface area to the solvent.',
    },
    {
      text: '4. A can of soda goes flat faster at room temperature because the solubility of gases (like CO₂ in soda) in liquids **decreases** as temperature **increases**. At higher room temperature, more CO₂ escapes from the solution into the air compared to the colder refrigerator temperature.',
    },
    {
      text: '5. **Concentration in ppm:**\n   ppm = (mass of solute / mass of solution) × 1,000,000\n   ppm = (0.000025 g / 500 g) × 1,000,000\n   ppm = (5.0 × 10⁻⁸) × 1,000,000 = 0.00000005 × 1,000,000 = **0.05 ppm**.',
    },
  ],
};
