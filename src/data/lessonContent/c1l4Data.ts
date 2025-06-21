import { Lesson } from '../../../types';

export const c1l4Data: Lesson = {
  id: 'C1L4',
  unit: 1,
  title: 'Density & Advanced Problem Solving',
  objectives: [
    'Define density and state its common units (e.g., g/mL, g/cm³, kg/L).',
    'Calculate density, mass, or volume given the other two quantities using the formula D = m/V.',
    'Apply the water displacement method to determine the volume of irregularly shaped objects.',
    'Solve multi-step problems involving density, including unit conversions and real-world scenarios.',
    'Relate density to the concept of buoyancy (sinking and floating).',
  ],
  labMinutes: 40,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/density/latest/density_en.html',
      title: 'Density Simulation',
      description:
        'Explore how density relates to mass and volume. Discover how objects float or sink based on their density relative to the fluid.',
    },
    {
      type: 'custom',
      title: 'Advanced Density Problem Solver (Conceptual)',
      description: 'A conceptual interactive for multi-step density problems.',
      placeholderText:
        '**Learning Goal:** To apply density concepts in complex scenarios, including unit conversions and geometric considerations.\n**Intended Functionality:** Users are presented with problems like: \n1. Finding the thickness of a foil given its area, mass, and density.\n2. Identifying an unknown substance by calculating its density from mass and volume data obtained through various measurements (e.g., water displacement for an irregular object, direct measurement for a regular one).\n3. Problems involving buoyancy and density of mixed substances.\n_An interactive tool would guide users through steps, allow input, and check calculations._',
    },
  ],
  narrative: `**What is Density?**
Density (ρ or D) is an **intensive physical property** of a substance, meaning it does not depend on the amount of the substance. It is defined as the mass of a substance per unit volume.
The formula for density is:
**D = m / V**
Where:
*   **D** = Density
*   **m** = Mass
*   **V** = Volume

Common units for density include:
*   grams per milliliter (g/mL) - often used for liquids
*   grams per cubic centimeter (g/cm³) - often used for solids (Note: 1 mL = 1 cm³)
*   kilograms per liter (kg/L)
*   kilograms per cubic meter (kg/m³) - SI unit

**Calculating Density, Mass, or Volume**
If you know any two of the three variables (density, mass, volume), you can rearrange the formula to solve for the unknown:
*   To find mass: **m = D * V**
*   To find volume: **V = m / D**

*Example 1: A piece of metal has a mass of 150 g and a volume of 20.0 cm³. What is its density?*
D = m / V = 150 g / 20.0 cm³ = **7.5 g/cm³**

*Example 2: The density of mercury is 13.6 g/mL. What is the volume of 272 g of mercury?*
V = m / D = 272 g / 13.6 g/mL = **20.0 mL**

**Water Displacement Method for Volume of Irregular Solids**
For irregularly shaped objects, volume cannot be easily measured with a ruler. The water displacement method is used:
1.  Fill a graduated cylinder with a known volume of water (V_initial).
2.  Carefully submerge the irregular object in the water. The water level will rise.
3.  Record the new water level (V_final).
4.  The volume of the object is the difference: **V_object = V_final - V_initial**.
    <div class="my-4 flex flex-wrap justify-around items-center gap-4">
      <svg width="180" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Water displacement method: Graduated cylinder before object" class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <rect x="60" y="20" width="60" height="160" fill="none" stroke="var(--color-text-muted)" stroke-width="2" rx="5"/>
        <path d="M65 150 Q90 140 115 150 L115 90 Q90 80 65 90 Z" fill="var(--color-primary)" fill-opacity="0.3"/>
        <line x1="50" y1="90" x2="65" y2="90" stroke="var(--color-text-muted)"/> <text x="25" y="94" font-size="10" fill="var(--color-text-muted)">V_initial</text>
        <text x="50" y="180" font-size="12" fill="var(--color-text-muted)" class="font-semibold">1. Before Object</text>
      </svg>
      <svg width="180" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Water displacement method: Graduated cylinder with object submerged" class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <rect x="60" y="20" width="60" height="160" fill="none" stroke="var(--color-text-muted)" stroke-width="2" rx="5"/>
        <ellipse cx="90" cy="120" rx="20" ry="10" fill="var(--color-accent)"/> <text x="80" y="124" font-size="10" fill="var(--color-text-light)">Object</text>
        <path d="M65 150 Q90 140 115 150 L115 50 Q90 40 65 50 Z" fill="var(--color-primary)" fill-opacity="0.3"/>
        <line x1="50" y1="50" x2="65" y2="50" stroke="var(--color-text-muted)"/> <text x="25" y="54" font-size="10" fill="var(--color-text-muted)">V_final</text>
        <text x="55" y="180" font-size="12" fill="var(--color-text-muted)" class="font-semibold">2. After Object</text>
      </svg>
    </div>
Once the volume is found, and if the mass is known, the density can be calculated.

**Density and Buoyancy (Floating and Sinking)**
Density determines whether an object will float or sink in a fluid (liquid or gas).
*   If an object is **less dense** than the fluid it is placed in, it will **float**.
*   If an object is **more dense** than the fluid it is placed in, it will **sink**.
*   If an object has the **same density** as the fluid, it will be **neutrally buoyant** (neither sink nor float, but remain suspended).
Example: Wood (density < 1 g/cm³) floats on water (density ≈ 1 g/cm³). A rock (density > 1 g/cm³) sinks in water.

**Advanced Problem Solving**
Density problems can involve multiple steps or require combining density with other concepts (e.g., geometry).
*   *Unit Conversions:* Ensure all units are consistent before calculating. For example, if mass is in kg and volume in mL, convert one so units match the desired density unit (e.g., kg/L or g/mL).
*   *Finding dimensions:* If you know the density and mass of a regular solid (e.g., a cube or cylinder), you can find its volume, and from the volume, you can find a missing dimension (like height or radius) using geometric formulas.

**Safety Note:** When using the water displacement method, ensure the object is fully submerged without splashing water out, as this would lead to an inaccurate volume measurement. For dense objects, lower them gently into the graduated cylinder to avoid breaking the glass.`,
  practice: [
    {
      text: '1. A block of aluminum occupies a volume of 15.0 mL and has a mass of 40.5 g. What is its density?',
    },
    {
      text: '2. The density of gold is 19.3 g/cm³. What is the mass of a gold bar with a volume of 100.0 cm³?',
    },
    {
      text: '3. A student measures out 50.0 mL of ethanol. If the density of ethanol is 0.789 g/mL, what is the mass of the ethanol?',
    },
    {
      text: '4. An irregularly shaped stone is dropped into a graduated cylinder containing 20.0 mL of water. The water level rises to 28.5 mL. If the stone has a mass of 22.5 g, what is the density of the stone?',
    },
    {
      text: '5. A piece of wood has a density of 0.65 g/cm³. Will it float or sink in water (density ≈ 1.00 g/cm³)? Explain.',
    },
    {
      text: '6. (Advanced) A rectangular block of metal measures 2.0 cm x 3.0 cm x 4.0 cm and has a mass of 192 g. What is its density? If this metal is copper (density ≈ 8.96 g/cm³), is the block pure copper?',
    },
  ],
  answers: [
    { text: '1. D = m/V = 40.5 g / 15.0 mL = **2.70 g/mL**.' },
    { text: '2. m = D * V = 19.3 g/cm³ * 100.0 cm³ = **1930 g** (or 1.93 kg).' },
    {
      text: '3. m = D * V = 0.789 g/mL * 50.0 mL = 39.45 g. Rounded to 3 significant figures: **39.5 g**.',
    },
    {
      text: '4. Volume of stone = V_final - V_initial = 28.5 mL - 20.0 mL = 8.5 mL.\n   Density of stone = m/V = 22.5 g / 8.5 mL ≈ **2.6 g/mL** (to 2 significant figures because 8.5 mL has two).',
    },
    {
      text: '5. The wood will **float** in water. Its density (0.65 g/cm³) is less than the density of water (approximately 1.00 g/cm³).',
    },
    {
      text: '6. (Advanced)\n   Volume of block = length * width * height = 2.0 cm * 3.0 cm * 4.0 cm = 24 cm³ (since 4.0 cm has 2 sig figs, result should be 24 cm³).\n   Density of block = m/V = 192 g / 24 cm³ = **8.0 g/cm³**.\n   Comparison: The calculated density (8.0 g/cm³) is different from the density of pure copper (8.96 g/cm³). Therefore, the block is likely not pure copper, or there are significant measurement inaccuracies.',
    },
  ],
};
