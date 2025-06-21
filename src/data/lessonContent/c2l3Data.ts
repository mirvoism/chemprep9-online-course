import { Lesson } from '../../../types';

export const c2l3Data: Lesson = {
  id: 'C2L3',
  unit: 2,
  title: 'Electron Configurations & Orbitals',
  objectives: [
    'Describe electron energy levels (shells), sublevels (s, p, d, f), and atomic orbitals.',
    'State the maximum number of electrons that can occupy each energy level and sublevel.',
    'Write full and noble gas shorthand electron configurations for elements.',
    "Relate electron configurations to an element's position on the periodic table (period and block).",
  ],
  labMinutes: 50,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/models-of-the-hydrogen-atom/latest/models-of-the-hydrogen-atom_en.html',
      title: 'Models of the Hydrogen Atom',
      description:
        'Explore how different models, including Bohr and Schrödinger, describe the electron in a hydrogen atom. See how light absorption and emission relate to energy levels.',
    },
    {
      type: 'custom',
      title: 'Electron Configuration Builder (Conceptual)',
      description: 'Practice building electron configurations step-by-step.',
      placeholderText:
        "**Learning Goal:** To correctly apply rules for electron filling to write configurations.\n**Intended Functionality:** Users select an element. The tool displays energy level/sublevel boxes (e.g., 1s, 2s, 2p). Users 'add' electrons one by one, and the tool validates based on Aufbau, Hund's rule, and Pauli exclusion. Final configuration is displayed.\n_An interactive tool would allow dragging electrons to orbitals or clicking to fill._",
    },
  ],
  narrative: `**From Bohr Model to the Quantum Mechanical Model**
The Bohr model (C2L1) proposed electrons orbiting in fixed energy levels (shells). While a step forward, it couldn't fully explain complex atoms or the wave-like nature of electrons. The modern **Quantum Mechanical Model** describes electrons in terms of probabilities of being found in certain regions of space called **orbitals**.

**1. Principal Energy Levels (Shells)**
*   Indicated by the principal quantum number, **n** (n = 1, 2, 3, ...).
*   Higher 'n' means higher energy and generally further from the nucleus.
*   The maximum number of electrons a principal energy level can hold is **2n²**.
    *   n=1: max 2 electrons
    *   n=2: max 8 electrons
    *   n=3: max 18 electrons

**2. Sublevels (Subshells)**
Within each principal energy level (except n=1), there are **sublevels**, denoted by letters: **s, p, d, f**.
*   n=1 has one sublevel: 1s
*   n=2 has two sublevels: 2s, 2p
*   n=3 has three sublevels: 3s, 3p, 3d
*   n=4 has four sublevels: 4s, 4p, 4d, 4f
The energy of sublevels within a principal energy level generally increases: s < p < d < f.

**3. Atomic Orbitals**
Each sublevel consists of one or more **atomic orbitals**. An orbital is a region of space with a high probability (usually 90%) of finding an electron.
*   **s sublevel:** Contains 1 spherical orbital.
*   **p sublevel:** Contains 3 dumbbell-shaped orbitals (px, py, pz) oriented along x, y, and z axes.
*   **d sublevel:** Contains 5 orbitals with more complex shapes.
*   **f sublevel:** Contains 7 orbitals with even more complex shapes.
**Crucially, each atomic orbital can hold a maximum of 2 electrons**, and these electrons must have opposite spins (Pauli Exclusion Principle).

<svg width="400" height="220" xmlns="http://www.w3.org/2000/svg" aria-labelledby="orbital-shapes-title-c2l3" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="orbital-shapes-title-c2l3">Shapes of s and p atomic orbitals.</title>
  <!-- s orbital -->
  <text x="70" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">s orbital (spherical)</text>
  <circle cx="70" cy="80" r="30" stroke="var(--color-primary)" stroke-width="1.5" fill="var(--color-primary)" fill-opacity="0.2"/>
  <line x1="70" y1="80" x2="70" y2="50" stroke="var(--color-text-muted)" stroke-dasharray="2,2"/>
  <line x1="70" y1="80" x2="100" y2="80" stroke="var(--color-text-muted)" stroke-dasharray="2,2"/>
  <text x="72" y="48" font-size="0.8em" fill="var(--color-text-muted)">z</text>
  <text x="102" y="83" font-size="0.8em" fill="var(--color-text-muted)">x</text>
  <text x="70" y="125" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">1 s-orbital per s-sublevel</text>

  <!-- p orbitals -->
  <text x="270" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">p orbitals (dumbbell)</text>
  <!-- Px orbital -->
  <ellipse cx="220" cy="80" rx="25" ry="10" fill="var(--color-accent)" fill-opacity="0.3" transform="rotate(0 220 80)"/>
  <ellipse cx="220" cy="80" rx="10" ry="25" fill="var(--color-accent)" fill-opacity="0.3" transform="rotate(90 220 80)"/>
  <text x="205" y="70" font-size="0.8em" fill="var(--color-accent)">pₓ</text>
  <!-- Py orbital -->
  <ellipse cx="280" cy="80" rx="10" ry="25" fill="var(--color-success)" fill-opacity="0.3"/>
  <ellipse cx="280" cy="80" rx="25" ry="10" fill="var(--color-success)" fill-opacity="0.3" transform="rotate(90 280 80)" visibility="hidden"/> <!-- conceptual second lobe -->
   <text x="285" y="55" font-size="0.8em" fill="var(--color-success)">p<tspan dy="0.3em" dx="-0.1em" font-size="0.8em">y</tspan></text>
  <!-- Pz orbital -->
  <ellipse cx="340" cy="80" rx="10" ry="25" fill="var(--color-warning)" fill-opacity="0.3"/>
   <text x="345" y="55" font-size="0.8em" fill="var(--color-warning)">p<tspan dy="0.3em" dx="-0.1em" font-size="0.8em">z</tspan></text>
  
  <text x="270" y="125" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">3 p-orbitals (px, py, pz) per p-sublevel</text>
  <text x="200" y="160" text-anchor="middle" font-size="0.9em" fill="var(--color-text-light)">Diagram is simplified: p-orbitals are orthogonal. d and f orbitals have more complex shapes.</text>
</svg>

**Rules for Filling Orbitals (Electron Configuration)**
1.  **Aufbau Principle:** Electrons fill orbitals starting with the lowest energy levels and sublevels first. A common order of filling is:
    1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, ...
    (This can be remembered using a diagonal rule chart or by following the periodic table blocks).
    <div class="my-4 flex justify-center">
        <svg width="280" height="260" xmlns="http://www.w3.org/2000/svg" aria-labelledby="aufbau-title-c2l3" class="p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
            <title id="aufbau-title-c2l3">Aufbau Principle - Order of Filling Orbitals</title>
            <text x="140" y="20" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Order of Filling Orbitals</text>
            <g font-family="monospace" font-size="1.1em" fill="var(--color-text-muted)">
                <text x="20" y="50">1s</text>
                <text x="20" y="80">2s</text> <text x="70" y="80">2p</text>
                <text x="20" y="110">3s</text> <text x="70" y="110">3p</text> <text x="120" y="110">3d</text>
                <text x="20" y="140">4s</text> <text x="70" y="140">4p</text> <text x="120" y="140">4d</text> <text x="170" y="140">4f</text>
                <text x="20" y="170">5s</text> <text x="70" y="170">5p</text> <text x="120" y="170">5d</text> <text x="170" y="170">5f</text>
                <text x="20" y="200">6s</text> <text x="70" y="200">6p</text> <text x="120" y="200">6d</text>
                <text x="20" y="230">7s</text> <text x="70" y="230">7p</text>
            </g>
            <!-- Diagonal arrows -->
            <line x1="35" y1="35" x2="15" y2="55" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadAufbau-c2l3)"/>
            <line x1="35" y1="65" x2="15" y2="85" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadAufbau-c2l3)"/>
            <line x1="85" y1="65" x2="15" y2="115" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadAufbau-c2l3)"/>
            <line x1="85" y1="95" x2="15" y2="145" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadAufbau-c2l3)"/>
            <line x1="135" y1="95" x2="15" y2="175" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadAufbau-c2l3)"/>
            <line x1="135" y1="125" x2="15" y2="205" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadAufbau-c2l3)"/>
             <line x1="185" y1="125" x2="15" y2="235" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadAufbau-c2l3)"/>
            <defs>
                <marker id="arrowHeadAufbau-c2l3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                </marker>
            </defs>
        </svg>
    </div>

2.  **Pauli Exclusion Principle:** An atomic orbital can hold a maximum of two electrons, and these electrons must have opposite spins (represented as ↑ and ↓).
3.  **Hund's Rule:** When filling orbitals within the same sublevel (e.g., the three p orbitals or five d orbitals), electrons fill each orbital singly before any orbital gets a second electron. These singly occupied orbitals all have electrons with the same spin.

**Writing Electron Configurations**
An electron configuration shows the distribution of electrons among the orbitals of an atom.
*   Format: n(sublevel)<sup>#electrons</sup>. Example: 1s², 2s², 2p⁶...
*   **Example: Oxygen (Z=8)**
    *   Has 8 electrons.
    *   1s² (2 electrons in 1s)
    *   2s² (2 electrons in 2s)
    *   2p⁴ (remaining 4 electrons in 2p: ↑↓  ↑   ↑_ )
    *   Full configuration: **1s² 2s² 2p⁴**
*   **Example: Sodium (Z=11)**
    *   1s² 2s² 2p⁶ 3s¹
*   **Noble Gas Shorthand Configuration:** Use the symbol of the preceding noble gas in brackets to represent core electrons, then write the configuration for the remaining valence electrons.
    *   Sodium (Z=11): Neon (Ne, Z=10) is 1s²2s²2p⁶. So, Na is **[Ne] 3s¹**.
    *   Calcium (Z=20): Argon (Ar, Z=18) is 1s²2s²2p⁶3s²3p⁶. So, Ca is **[Ar] 4s²**.

**Electron Configurations and the Periodic Table**
The periodic table's structure is a direct reflection of electron configurations.
*   **Periods:** The period number (row) corresponds to the highest principal energy level (n) occupied by electrons in that element.
*   **Blocks:**
    *   **s-block (Groups 1 & 2):** Outermost electrons are in an s sublevel.
    *   **p-block (Groups 13-18):** Outermost electrons are filling a p sublevel.
    *   **d-block (Groups 3-12, Transition Metals):** Outermost electrons are filling a d sublevel (e.g., 3d, 4d). Note that d sublevels fill after the s sublevel of the next higher energy level (e.g., 4s fills before 3d).
    *   **f-block (Lanthanides & Actinides):** Outermost electrons are filling an f sublevel.

**Safety Note:** Understanding electron configurations is fundamental to predicting chemical behavior, bonding, and reactivity. While this topic itself doesn't involve direct lab hazards, the principles underpin why certain elements react vigorously (e.g., alkali metals with one valence electron) or are inert (e.g., noble gases with full valence shells).`,
  practice: [
    {
      text: "1. What is the maximum number of electrons that can occupy the n=3 principal energy level? How many orbitals are in a 'd' sublevel, and what is the maximum number of electrons it can hold?",
    },
    { text: '2. Write the full electron configuration for Sulfur (S, Z=16).' },
    { text: '3. Write the noble gas shorthand electron configuration for Iron (Fe, Z=26).' },
    {
      text: '4. An element has the electron configuration [Kr] 5s² 4d⁵. Identify the element and its period and block in the periodic table.',
    },
  ],
  answers: [
    {
      text: "1. For n=3, max electrons = 2n² = 2(3)² = 2(9) = **18 electrons**.\nA 'd' sublevel has **5 orbitals** and can hold a maximum of 5 orbitals × 2 electrons/orbital = **10 electrons**.",
    },
    {
      text: '2. Sulfur (S, Z=16) has 16 electrons. Full electron configuration: **1s² 2s² 2p⁶ 3s² 3p⁴**.',
    },
    {
      text: '3. Iron (Fe, Z=26). The preceding noble gas is Argon (Ar, Z=18), which is 1s²2s²2p⁶3s²3p⁶.\n   Remaining electrons for Fe: 26 - 18 = 8 electrons.\n   These fill the 4s and then 3d sublevels: 4s² 3d⁶.\n   Noble gas shorthand: **[Ar] 4s² 3d⁶**.',
    },
    {
      text: '4. The configuration is [Kr] 5s² 4d⁵.\n   The noble gas Krypton (Kr) has Z=36. Adding the electrons: 36 (from Kr) + 2 (in 5s) + 5 (in 4d) = 43 electrons.\n   The element with Z=43 is **Technetium (Tc)**.\n   The highest principal energy level is n=5, so it is in **Period 5**.\n   The last electrons are filling the d-sublevel, so it is in the **d-block**.',
    },
  ],
};
