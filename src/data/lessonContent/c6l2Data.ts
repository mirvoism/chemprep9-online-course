import { Lesson } from '../../../types';

export const c6l2Data: Lesson = {
  id: 'C6L2',
  unit: 6,
  title: 'Gas Laws: Boyle, Charles, Gay-Lussac',
  objectives: [
    "State and apply Boyle's Law (P₁V₁ = P₂V₂) to calculate changes in pressure or volume at constant temperature and moles.",
    "State and apply Charles's Law (V₁/T₁ = V₂/T₂) to calculate changes in volume or temperature at constant pressure and moles, understanding the importance of the Kelvin scale.",
    "State and apply Gay-Lussac's Law (P₁/T₁ = P₂/T₂) to calculate changes in pressure or temperature at constant volume and moles, understanding the importance of the Kelvin scale.",
    'Use the Combined Gas Law (P₁V₁/T₁ = P₂V₂/T₂) to solve problems where pressure, volume, and temperature change for a fixed amount of gas.',
  ],
  labMinutes: 45,
  interactive: [
    {
      type: 'custom',
      componentKey: 'IdealGasLawSimulator',
      title: 'Gas Law Relationships Explorer',
      description:
        "Use the simulator to investigate the relationships between pressure (P), volume (V), and temperature (T). For Boyle's Law, keep T constant and observe P-V changes. For Charles's Law, keep P constant and observe V-T changes. For Gay-Lussac's Law, keep V constant and observe P-T changes.",
    },
  ],
  narrative: `**Introduction to Gas Laws**
The Kinetic Molecular Theory (KMT) helps us understand that gas behavior is governed by relationships between pressure (P), volume (V), temperature (T), and the amount of gas (n, in moles). Gas laws are mathematical expressions of these relationships, typically when one or more variables are held constant.

**1. Boyle's Law: Pressure-Volume Relationship**
Robert Boyle (17th century) studied the relationship between the pressure and volume of a gas at constant temperature and a fixed amount of gas.
*   **Statement:** At constant temperature and moles, the volume of a fixed amount of gas is **inversely proportional** to its pressure.
    *   This means if you increase the pressure on a gas, its volume decreases proportionally (and vice-versa).
*   **Mathematical Expression:** P₁V₁ = P₂V₂
    *   P₁ = Initial pressure, V₁ = Initial volume
    *   P₂ = Final pressure, V₂ = Final volume
*   **KMT Explanation:** If the temperature (average KE) is constant, and the volume is decreased, the gas particles will collide with the walls of the container more frequently in a smaller space, resulting in increased pressure.

<svg width="350" height="220" xmlns="http://www.w3.org/2000/svg" aria-labelledby="boyles-law-title-c6l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="boyles-law-title-c6l2">Boyle's Law: Inverse relationship between Pressure and Volume.</title>
  <style>.axis-label-c6l2 { font-size: 0.8em; fill: var(--color-text-muted); } .curve-c6l2 { stroke: var(--color-accent); stroke-width: 2; fill: none; }</style>
  <!-- Graph -->
  <text x="100" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Boyle's Law (P vs V)</text>
  <line x1="40" y1="180" x2="200" y2="180" stroke="var(--color-text-muted)" stroke-width="1"/> <!-- X-axis (Volume) -->
  <text x="120" y="200" text-anchor="middle" class="axis-label-c6l2">Volume (V)</text>
  <line x1="40" y1="180" x2="40" y2="40" stroke="var(--color-text-muted)" stroke-width="1"/> <!-- Y-axis (Pressure) -->
  <text x="25" y="110" transform="rotate(-90 25 110)" text-anchor="middle" class="axis-label-c6l2">Pressure (P)</text>
  <path d="M 50 50 Q 80 120, 190 170" class="curve-c6l2"/>
  <text x="90" y="100" font-size="0.7em" fill="var(--color-text-muted)">P ∝ 1/V</text>
  <!-- Piston Diagram -->
  <rect x="220" y="50" width="40" height="70" stroke="var(--color-border)" fill="none"/> <!-- Container 1 -->
  <rect x="220" y="50" width="40" height="20" fill="var(--color-secondary)"/> <!-- Piston 1 -->
  <text x="240" y="40" text-anchor="middle" font-size="0.7em" fill="var(--color-text-muted)">Low P, High V</text>
  <rect x="280" y="50" width="40" height="70" stroke="var(--color-border)" fill="none"/> <!-- Container 2 -->
  <rect x="280" y="80" width="40" height="20" fill="var(--color-secondary)"/> <!-- Piston 2 (lower) -->
  <text x="300" y="40" text-anchor="middle" font-size="0.7em" fill="var(--color-text-muted)">High P, Low V</text>
  <line x1="265" y1="85" x2="275" y2="85" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowhead-c6l2)"/>
</svg>

**2. Charles's Law: Volume-Temperature Relationship**
Jacques Charles (late 18th century) investigated the relationship between the volume and temperature of a gas at constant pressure and fixed amount of gas.
*   **Statement:** At constant pressure and moles, the volume of a fixed amount of gas is **directly proportional** to its **Kelvin temperature**.
    *   This means if you increase the Kelvin temperature of a gas, its volume increases proportionally (and vice-versa).
*   **Importance of Kelvin Scale:** Temperature **must** be in Kelvin (K = °C + 273.15). If °C is used, the direct proportionality doesn't hold, and negative volumes could be predicted. Extrapolating a V vs T(K) graph to zero volume theoretically indicates absolute zero (0 K).
*   **Mathematical Expression:** V₁/T₁ = V₂/T₂  (T must be in Kelvin)
*   **KMT Explanation:** If the pressure is constant, increasing the temperature means particles move faster and collide with the walls more forcefully and frequently. To maintain constant pressure, the volume must expand.

<svg width="350" height="220" xmlns="http://www.w3.org/2000/svg" aria-labelledby="charles-law-title-c6l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="charles-law-title-c6l2">Charles's Law: Direct relationship between Volume and Kelvin Temperature.</title>
  <style>.axis-label-c6l2 { font-size: 0.8em; fill: var(--color-text-muted); } .line-c6l2 { stroke: var(--color-primary); stroke-width: 2; fill: none; }</style>
  <!-- Graph -->
  <text x="100" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Charles's Law (V vs T)</text>
  <line x1="40" y1="180" x2="200" y2="180" stroke="var(--color-text-muted)" stroke-width="1"/> <!-- X-axis (Temp K) -->
  <text x="120" y="200" text-anchor="middle" class="axis-label-c6l2">Temperature (K)</text>
  <line x1="40" y1="180" x2="40" y2="40" stroke="var(--color-text-muted)" stroke-width="1"/> <!-- Y-axis (Volume) -->
  <text x="25" y="110" transform="rotate(-90 25 110)" text-anchor="middle" class="axis-label-c6l2">Volume (V)</text>
  <line x1="40" y1="180" x2="190" y2="50" class="line-c6l2"/> <!-- Straight line, should go to origin if 0K is on axis -->
  <text x="100" y="100" font-size="0.7em" fill="var(--color-text-muted)">V ∝ T (Kelvin)</text>
  <!-- Balloon Diagram -->
  <circle cx="250" cy="150" r="20" stroke="var(--color-border)" fill="var(--color-accent)" fill-opacity="0.3"/> <!-- Cold balloon -->
  <text x="250" y="180" text-anchor="middle" font-size="0.7em" fill="var(--color-text-muted)">Low T, Small V</text>
  <circle cx="300" cy="80" r="35" stroke="var(--color-border)" fill="var(--color-accent)" fill-opacity="0.5"/> <!-- Hot balloon -->
  <text x="300" y="130" text-anchor="middle" font-size="0.7em" fill="var(--color-text-muted)">High T, Large V</text>
  <line x1="265" y1="125" x2="285" y2="100" stroke="var(--color-primary)" stroke-width="1.5" marker-end="url(#arrowhead-c6l2)"/>
</svg>

**3. Gay-Lussac's Law: Pressure-Temperature Relationship**
Joseph Gay-Lussac (early 19th century) studied the relationship between the pressure and temperature of a gas at constant volume and fixed amount of gas.
*   **Statement:** At constant volume and moles, the pressure of a fixed amount of gas is **directly proportional** to its **Kelvin temperature**.
*   **Importance of Kelvin Scale:** Temperature **must** be in Kelvin.
*   **Mathematical Expression:** P₁/T₁ = P₂/T₂  (T must be in Kelvin)
*   **KMT Explanation:** If the volume is constant, increasing the temperature means particles move faster. They collide with the container walls more frequently and with greater force, resulting in increased pressure.

<svg width="350" height="220" xmlns="http://www.w3.org/2000/svg" aria-labelledby="gaylussac-law-title-c6l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="gaylussac-law-title-c6l2">Gay-Lussac's Law: Direct relationship between Pressure and Kelvin Temperature.</title>
  <style>.axis-label-c6l2 { font-size: 0.8em; fill: var(--color-text-muted); } .line-c6l2 { stroke: var(--color-success); stroke-width: 2; fill: none; }</style>
  <!-- Graph -->
  <text x="100" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Gay-Lussac's Law (P vs T)</text>
  <line x1="40" y1="180" x2="200" y2="180" stroke="var(--color-text-muted)" stroke-width="1"/> <!-- X-axis (Temp K) -->
  <text x="120" y="200" text-anchor="middle" class="axis-label-c6l2">Temperature (K)</text>
  <line x1="40" y1="180" x2="40" y2="40" stroke="var(--color-text-muted)" stroke-width="1"/> <!-- Y-axis (Pressure) -->
  <text x="25" y="110" transform="rotate(-90 25 110)" text-anchor="middle" class="axis-label-c6l2">Pressure (P)</text>
  <line x1="40" y1="180" x2="190" y2="50" class="line-c6l2"/> <!-- Straight line -->
  <text x="100" y="100" font-size="0.7em" fill="var(--color-text-muted)">P ∝ T (Kelvin)</text>
  <!-- Rigid Container Diagram -->
  <rect x="230" y="70" width="50" height="50" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.2" rx="3"/> <!-- Cold container -->
  <text x="255" y="130" text-anchor="middle" font-size="0.7em" fill="var(--color-text-muted)">Low T, Low P</text>
  <rect x="290" y="70" width="50" height="50" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.2" rx="3"/> <!-- Hot container -->
  <text x="315" y="130" text-anchor="middle" font-size="0.7em" fill="var(--color-text-muted)">High T, High P</text>
  <text x="300" y="60" font-size="1.5em" fill="var(--color-danger)">🔥</text>
  <line x1="270" y1="95" x2="280" y2="95" stroke="var(--color-success)" stroke-width="1.5" marker-end="url(#arrowhead-c6l2)"/>
</svg>

**4. The Combined Gas Law**
This law combines Boyle's, Charles's, and Gay-Lussac's laws into a single expression for a fixed amount of gas (n is constant). It relates pressure, volume, and temperature when more than one variable changes.
*   **Mathematical Expression:** (P₁V₁) / T₁ = (P₂V₂) / T₂   (T must be in Kelvin)
*   If any variable is constant, it can be canceled out from both sides to give one of the individual gas laws. For example, if T is constant (T₁ = T₂), the law simplifies to Boyle's Law (P₁V₁ = P₂V₂).

**Standard Temperature and Pressure (STP)**
STP is a reference condition for gases:
*   **Standard Temperature:** 0°C = 273.15 K (often rounded to 273 K)
*   **Standard Pressure:** 1 atm = 101.325 kPa = 760 mmHg
These values are useful for comparing gas properties and in stoichiometric calculations involving gases (covered in C6L3).

**Example Problem (Combined Gas Law):**
A gas occupies a volume of 10.0 L at 2.00 atm and 25°C. What volume will it occupy at 1.00 atm and 0°C?
*   P₁ = 2.00 atm, V₁ = 10.0 L, T₁ = 25°C + 273 = 298 K
*   P₂ = 1.00 atm, T₂ = 0°C + 273 = 273 K, V₂ = ?
*   Using (P₁V₁) / T₁ = (P₂V₂) / T₂:
    (2.00 atm * 10.0 L) / 298 K = (1.00 atm * V₂) / 273 K
    (20.0 atm·L) / 298 K = (1.00 atm * V₂) / 273 K
    0.06711 atm·L/K = (1.00 atm * V₂) / 273 K
    V₂ = (0.06711 atm·L/K * 273 K) / 1.00 atm
    V₂ = 18.32 L ≈ **18.3 L** (to 3 sig figs)

**Safety Note:** Understanding gas laws is crucial for safety. For example, heating a sealed, rigid container (constant volume) will significantly increase the pressure inside (Gay-Lussac's Law), potentially leading to an explosion. Similarly, changes in temperature can dramatically affect the volume or pressure of gases in flexible or sealed containers (e.g., aerosol cans, tires). Always be mindful of temperature and pressure conditions when working with gases.

<defs>
  <marker id="arrowhead-c6l2" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
    <polygon points="0 0, 6 2, 0 4" fill="currentColor" />
  </marker>
</defs>
`,
  practice: [
    {
      text: '1. A container of gas has a volume of 5.0 L at a pressure of 200 kPa. If the pressure is increased to 400 kPa at constant temperature, what is the new volume?',
    },
    {
      text: '2. A balloon contains 2.5 L of air at 27°C. If the temperature is increased to 127°C at constant pressure, what will be the new volume of the balloon?',
    },
    {
      text: '3. A rigid gas cylinder has a pressure of 3.0 atm at 20°C. What will the pressure be if the cylinder is heated to 50°C?',
    },
    {
      text: '4. A gas has a volume of 15.0 L at STP. If the temperature is changed to 50°C and the pressure to 150 kPa, what is the new volume? (STP: T=273K, P=101.325 kPa or 1 atm)',
    },
  ],
  answers: [
    {
      text: "1. **Boyle's Law (P₁V₁ = P₂V₂):**\n   P₁ = 200 kPa, V₁ = 5.0 L, P₂ = 400 kPa, V₂ = ?\n   (200 kPa)(5.0 L) = (400 kPa)(V₂)\n   1000 kPa·L = 400 kPa · V₂\n   V₂ = 1000 kPa·L / 400 kPa = **2.5 L**.",
    },
    {
      text: "2. **Charles's Law (V₁/T₁ = V₂/T₂), T must be in Kelvin:**\n   V₁ = 2.5 L, T₁ = 27°C + 273 = 300 K\n   T₂ = 127°C + 273 = 400 K, V₂ = ?\n   (2.5 L) / (300 K) = V₂ / (400 K)\n   V₂ = (2.5 L * 400 K) / 300 K = 1000 L·K / 300 K = 3.333... L ≈ **3.3 L**.",
    },
    {
      text: "3. **Gay-Lussac's Law (P₁/T₁ = P₂/T₂), T must be in Kelvin:**\n   P₁ = 3.0 atm, T₁ = 20°C + 273 = 293 K\n   T₂ = 50°C + 273 = 323 K, P₂ = ?\n   (3.0 atm) / (293 K) = P₂ / (323 K)\n   P₂ = (3.0 atm * 323 K) / 293 K = 969 atm·K / 293 K = 3.307... atm ≈ **3.3 atm**.",
    },
    {
      text: '4. **Combined Gas Law ((P₁V₁) / T₁ = (P₂V₂) / T₂):**\n   STP: P₁ = 101.325 kPa, V₁ = 15.0 L, T₁ = 273 K\n   P₂ = 150 kPa, T₂ = 50°C + 273 = 323 K, V₂ = ?\n   (101.325 kPa * 15.0 L) / 273 K = (150 kPa * V₂) / 323 K\n   (1519.875 kPa·L) / 273 K = (150 kPa * V₂) / 323 K\n   5.5673 kPa·L/K = (150 kPa * V₂) / 323 K\n   V₂ = (5.5673 kPa·L/K * 323 K) / 150 kPa\n   V₂ = 1798.2479 kPa·L / 150 kPa = 11.988... L ≈ **12.0 L**.',
    },
  ],
};
