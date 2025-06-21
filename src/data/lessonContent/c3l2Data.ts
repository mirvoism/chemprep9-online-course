import { Lesson } from '../../../types';

export const c3l2Data: Lesson = {
  id: 'C3L2',
  unit: 3,
  title: 'Periodic Trends',
  objectives: [
    'Define atomic radius, ionic radius, ionization energy, and electronegativity.',
    'Describe the general trends for atomic radius, ionization energy, and electronegativity across a period and down a group.',
    'Explain the reasons for these trends in terms of nuclear charge, electron shielding, and energy levels.',
    'Compare metallic and nonmetallic character trends across periods and down groups.',
  ],
  labMinutes: 0,
  interactive: [
    {
      type: 'phet',
      url: 'periodic_table_phet', // New key for phetMapping.ts
      title: 'Periodic Table (PhET)',
      description:
        "Explore the periodic table. While this simulation doesn't explicitly graph trends, it's useful for visualizing element positions, atomic numbers, and mass as you learn about trends.",
    },
    {
      type: 'custom',
      componentKey: 'PeriodicTableExplorer', // Re-referencing conceptual component
      title: 'Periodic Trends Visualizer (Conceptual Extension)',
      description:
        'Ideally, the Periodic Table Explorer would allow color-coding or arrow overlays to visualize trends like atomic radius, ionization energy, and electronegativity across the table.',
      placeholderText: `**Enhancement for Periodic Table Explorer:**
This lesson focuses on periodic trends. The conceptual "Periodic Table Explorer" (introduced in C3L1) could be enhanced to:
1.  **Visualize Trends:** Allow users to select a trend (e.g., atomic radius, ionization energy, electronegativity). The table would then color-code elements or use arrow overlays to show how that property changes across periods and down groups.
2.  **Data Display:** Clicking an element would show its specific value for the selected trend (if available in \`elementsData.ts\`).
3.  **Comparative Tool:** Allow selecting two elements and see a direct comparison of their trend-related properties and structural reasons for differences.
_This would make learning trends more dynamic and visual._`,
    },
  ],
  narrative: `**Understanding Periodic Trends**
The properties of elements are not random; they show predictable patterns, or **trends**, as you move across a period (left to right) or down a group (top to bottom) in the periodic table. These trends are primarily due to variations in:
1.  **Nuclear Charge (Z):** The number of protons in the nucleus. A higher nuclear charge means a stronger attraction for electrons.
2.  **Electron Shielding:** Inner-shell electrons "shield" or block some of the nuclear charge from reaching the outer (valence) electrons.
3.  **Number of Principal Energy Levels (n):** As 'n' increases, valence electrons are further from the nucleus.

**1. Atomic Radius**
**Definition:** Half the distance between the nuclei of two identical atoms that are bonded together. It's a measure of atomic size.

*   **Trend Down a Group:** Atomic radius **increases**.
    *   **Reason:** Each step down a group adds a new principal energy level. The outermost electrons are further from the nucleus, and there's increased shielding by inner electrons. These factors outweigh the increase in nuclear charge.
*   **Trend Across a Period (Left to Right):** Atomic radius **decreases**.
    *   **Reason:** Across a period, electrons are being added to the *same* principal energy level. The nuclear charge (number of protons) is increasing. This stronger positive charge pulls the electrons in that outermost shell closer to the nucleus, making the atom smaller. Shielding effect is relatively constant across a period for valence electrons in the same shell.

<svg width="350" height="200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="atomic-radius-trend-title-c3l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="atomic-radius-trend-title-c3l2">Trend for Atomic Radius on the Periodic Table.</title>
  <style>.trend-arrow-c3l2 { stroke: var(--color-accent); stroke-width: 2.5; marker-end: url(#arrow-c3l2); } .trend-text-c3l2 { fill: var(--color-text-light); font-size: 0.9em; }</style>
  <defs><marker id="arrow-c3l2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent)" /></marker></defs>
  <rect x="20" y="40" width="310" height="130" fill="var(--color-secondary)" fill-opacity="0.1" stroke="var(--color-border)" rx="5"/>
  <text x="175" y="25" text-anchor="middle" class="trend-text-c3l2 font-semibold">Atomic Radius Trend</text>
  <!-- Across a Period (Decreases) -->
  <line x1="50" y1="100" x2="280" y2="100" class="trend-arrow-c3l2" transform="scale(-1, 1) translate(-330, 0)"/>
  <text x="175" y="90" text-anchor="middle" class="trend-text-c3l2">Decreases →</text>
  <!-- Down a Group (Increases) -->
  <line x1="175" y1="60" x2="175" y2="150" class="trend-arrow-c3l2"/>
  <text x="195" y="105" class="trend-text-c3l2" transform="rotate(90 195 105)">Increases ↓</text>
</svg>

**2. Ionic Radius**
**Definition:** The radius of an ion.
*   **Cations (Positive Ions):** Formed when an atom loses electrons. Cations are **smaller** than their parent neutral atoms.
    *   **Reasons:**
        1.  Loss of electrons may result in the loss of an entire outer energy level.
        2.  The remaining electrons are pulled closer by the unchanged nuclear charge (fewer electrons being pulled by the same number of protons means a stronger effective pull per electron).
*   **Anions (Negative Ions):** Formed when an atom gains electrons. Anions are **larger** than their parent neutral atoms.
    *   **Reasons:**
        1.  The added electrons increase electron-electron repulsion in the outer shell, causing the electron cloud to expand.
        2.  The nuclear charge remains the same but is now pulling on more electrons, so its effective pull on each individual outer electron is slightly weaker.

<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ionic-radius-compare-title-c3l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="ionic-radius-compare-title-c3l2">Comparison of atomic and ionic radii.</title>
  <style>.atom-c3l2 { stroke: var(--color-border); stroke-width:1; } .ion-text-c3l2 {fill: var(--color-text-light); text-anchor:middle; font-size:0.9em;}</style>
  <!-- Na vs Na+ -->
  <circle cx="50" cy="60" r="20" class="atom-c3l2" fill="var(--color-primary)" fill-opacity="0.3"/> <text x="50" y="63" class="ion-text-c3l2">Na</text>
  <circle cx="100" cy="60" r="12" class="atom-c3l2" fill="var(--color-primary)" fill-opacity="0.5"/> <text x="100" y="63" class="ion-text-c3l2">Na⁺</text>
  <text x="75" y="100" class="ion-text-c3l2" fill="var(--color-text-muted)">Cation smaller</text>
  <!-- Cl vs Cl- -->
  <circle cx="180" cy="60" r="15" class="atom-c3l2" fill="var(--color-accent)" fill-opacity="0.3"/> <text x="180" y="63" class="ion-text-c3l2">Cl</text>
  <circle cx="240" cy="60" r="22" class="atom-c3l2" fill="var(--color-accent)" fill-opacity="0.5"/> <text x="240" y="63" class="ion-text-c3l2">Cl⁻</text>
  <text x="210" y="100" class="ion-text-c3l2" fill="var(--color-text-muted)">Anion larger</text>
</svg>

**3. Ionization Energy (IE)**
**Definition:** The minimum energy required to remove the most loosely bound electron from a neutral gaseous atom in its ground state. (This is the first ionization energy, IE₁).
A + energy → A⁺ + e⁻
*   **Trend Down a Group:** Ionization energy **decreases**.
    *   **Reason:** Valence electrons are further from the nucleus and are better shielded by inner electrons. This means they are held less tightly and require less energy to remove.
*   **Trend Across a Period (Left to Right):** Ionization energy **increases**.
    *   **Reason:** Increasing nuclear charge holds the valence electrons (in the same principal energy level) more tightly, making them more difficult and requiring more energy to remove.

<svg width="350" height="200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ie-trend-title-c3l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="ie-trend-title-c3l2">Trend for Ionization Energy on the Periodic Table.</title>
  <rect x="20" y="40" width="310" height="130" fill="var(--color-secondary)" fill-opacity="0.1" stroke="var(--color-border)" rx="5"/>
  <text x="175" y="25" text-anchor="middle" class="trend-text-c3l2 font-semibold">Ionization Energy Trend</text>
  <!-- Across a Period (Increases) -->
  <line x1="50" y1="100" x2="280" y2="100" class="trend-arrow-c3l2"/>
  <text x="175" y="90" text-anchor="middle" class="trend-text-c3l2">Increases →</text>
  <!-- Down a Group (Decreases) -->
  <line x1="175" y1="60" x2="175" y2="150" class="trend-arrow-c3l2" transform="scale(1, -1) translate(0, -210)"/>
  <text x="195" y="105" class="trend-text-c3l2" transform="rotate(90 195 105)">Decreases ↓</text>
</svg>

**4. Electronegativity (EN)**
**Definition:** A measure of the ability of an atom in a chemical compound to attract electrons towards itself when forming a chemical bond. It's a relative scale (Linus Pauling scale is common, with Fluorine being the highest at ~4.0).
*   **Trend Down a Group:** Electronegativity **decreases**.
    *   **Reason:** The bonding electrons are further from the nucleus and are more shielded, so the nucleus has less attraction for them.
*   **Trend Across a Period (Left to Right):** Electronegativity **increases**.
    *   **Reason:** Increasing nuclear charge results in a stronger attraction for the shared electrons in a bond.
*   Noble gases are generally not assigned electronegativity values because they rarely form chemical bonds.

<svg width="350" height="200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="en-trend-title-c3l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="en-trend-title-c3l2">Trend for Electronegativity on the Periodic Table.</title>
  <rect x="20" y="40" width="310" height="130" fill="var(--color-secondary)" fill-opacity="0.1" stroke="var(--color-border)" rx="5"/>
  <text x="175" y="25" text-anchor="middle" class="trend-text-c3l2 font-semibold">Electronegativity Trend</text>
  <!-- Across a Period (Increases) -->
  <line x1="50" y1="100" x2="280" y2="100" class="trend-arrow-c3l2"/>
  <text x="175" y="90" text-anchor="middle" class="trend-text-c3l2">Increases →</text>
  <!-- Down a Group (Decreases) -->
  <line x1="175" y1="60" x2="175" y2="150" class="trend-arrow-c3l2" transform="scale(1, -1) translate(0, -210)"/>
  <text x="195" y="105" class="trend-text-c3l2" transform="rotate(90 195 105)">Decreases ↓</text>
</svg>

**5. Metallic and Nonmetallic Character**
*   **Metallic Character:** Refers to properties typical of metals: tendency to lose electrons (low IE, low EN), good conductivity, malleability, ductility, luster.
    *   **Trend Down a Group:** Metallic character **increases**.
    *   **Trend Across a Period (Left to Right):** Metallic character **decreases**.
*   **Nonmetallic Character:** Refers to properties typical of nonmetals: tendency to gain electrons (high IE, high EN), poor conductivity, brittle (if solid).
    *   **Trend Down a Group:** Nonmetallic character **decreases**.
    *   **Trend Across a Period (Left to Right):** Nonmetallic character **increases**.
The "stair-step" line on the periodic table separates metals from nonmetals, with metalloids exhibiting intermediate properties.

**Summary of Trends:**
*   Moving **Left to Right** across a period:
    *   Atomic Radius ↓
    *   Ionization Energy ↑
    *   Electronegativity ↑
    *   Metallic Character ↓ (Nonmetallic Character ↑)
*   Moving **Top to Bottom** down a group:
    *   Atomic Radius ↑
    *   Ionization Energy ↓
    *   Electronegativity ↓
    *   Metallic Character ↑ (Nonmetallic Character ↓)

**Safety Note:** While understanding trends is theoretical, these properties directly influence reactivity. For example, elements with low ionization energies (like alkali metals, bottom left of PT) are highly reactive as they lose electrons easily. Elements with high electronegativity (like halogens, top right) are also highly reactive as they readily attract electrons.`,
  practice: [
    {
      text: '1. Arrange the following elements in order of increasing atomic radius: F, Li, C, Ne.',
    },
    {
      text: '2. Why does ionization energy generally increase as you move from left to right across a period?',
    },
    {
      text: '3. Which element is more electronegative: Sodium (Na) or Sulfur (S)? Explain your reasoning based on their positions in the periodic table.',
    },
    { text: '4. Compare the radius of a K atom to a K⁺ ion. Explain the difference.' },
    { text: '5. How does the shielding effect influence the trend of atomic radius down a group?' },
  ],
  answers: [
    {
      text: '1. **Increasing Atomic Radius:** All elements are in Period 2. Atomic radius decreases across a period. So, the order is: Ne < F < C < Li. (Note: Noble gas radii are sometimes defined differently, but generally follow the trend of being smallest in their period due to high Zeff for that shell, or are compared based on van der Waals radii if not bonding).',
    },
    {
      text: '2. Ionization energy generally increases across a period because the **nuclear charge** (number of protons) increases. This results in a stronger attraction between the nucleus and the valence electrons, which are in the same principal energy level. More energy is therefore required to remove an electron. The shielding effect from inner electrons is relatively constant across a period for valence electrons.',
    },
    {
      text: '3. **Sulfur (S) is more electronegative than Sodium (Na).** Both are in Period 3. Electronegativity increases from left to right across a period. Sodium is in Group 1 (far left), and Sulfur is in Group 16 (further to the right). Sulfur has a greater nuclear charge and a stronger attraction for bonding electrons.',
    },
    {
      text: '4. The K⁺ ion is **smaller** than a K atom. When a potassium atom (K) loses its single valence electron to become a K⁺ ion, it loses its entire outermost electron shell (the 4s electron). The remaining electrons are in lower energy levels (n=3) and are pulled closer by the same nuclear charge, resulting in a smaller radius.',
    },
    {
      text: "5. As you move down a group, the number of inner electron shells increases. These inner electrons **shield** the valence electrons from the full attractive force of the nucleus. This increased shielding effect makes the valence electrons less tightly held, contributing to a larger atomic radius and lower ionization energy down a group, as the valence electrons are effectively further from the nucleus's strong pull despite the increasing nuclear charge.",
    },
  ],
};
