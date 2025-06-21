import { Lesson } from '../../../types';

export const c2l4Data: Lesson = {
  id: 'C2L4',
  unit: 2,
  title: 'Valence Electrons & Lewis Dots',
  objectives: [
    'Define valence electrons and explain their significance in chemical bonding.',
    'Determine the number of valence electrons for main group elements using the periodic table or electron configurations.',
    'Draw Lewis dot structures (electron dot diagrams) for atoms of main group elements.',
    'Briefly introduce the octet rule.',
  ],
  labMinutes: 40,
  interactive: [
    {
      type: 'custom',
      title: 'Lewis Dot Structure Practice',
      description: 'Practice drawing Lewis dot structures for various elements.',
      placeholderText:
        "**Learning Goal:** To correctly draw Lewis dot structures for atoms of main group elements.\n**Intended Functionality:** Users select an element (e.g., from a dropdown or by typing its symbol). The tool then either displays the correct Lewis dot structure or allows the user to 'place' dots around the symbol, providing feedback on the number and placement of valence electrons.\n_An interactive module would allow drag-and-drop of dots or click-to-place functionality._",
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html',
      title: 'Build an Atom (Review Electron Shells)',
      description:
        "Use the 'Build an Atom' simulation to visualize electron shells and reinforce the concept of outermost electrons, though it doesn't explicitly draw Lewis dots.",
    },
  ],
  narrative: `**What are Valence Electrons?**
**Valence electrons** are the electrons in the **outermost principal energy level (shell)** of an atom. These are the electrons that are furthest from the nucleus and have the highest energy.

**Significance of Valence Electrons:**
Valence electrons are extremely important because they are the electrons primarily involved in **chemical bonding**. The number of valence electrons an atom possesses largely determines its chemical properties and how it will interact with other atoms to form compounds. Atoms tend to gain, lose, or share valence electrons to achieve more stable electron configurations, often resembling those of noble gases.

<svg width="250" height="180" xmlns="http://www.w3.org/2000/svg" aria-labelledby="valence-electron-diagram-title-c2l4" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="valence-electron-diagram-title-c2l4">Diagram showing core electrons and valence electrons in a stylized atom.</title>
  <!-- Nucleus -->
  <circle cx="125" cy="90" r="20" fill="var(--color-secondary)" />
  <text x="110" y="95" font-size="0.8em" fill="var(--color-text-light)">Nucleus</text>
  <!-- Core Electron Shell -->
  <circle cx="125" cy="90" r="40" fill="none" stroke="var(--color-border)" stroke-dasharray="3,3" />
  <circle cx="100" cy="60" r="5" fill="var(--color-primary)" />
  <circle cx="150" cy="70" r="5" fill="var(--color-primary)" />
  <text x="60" y="50" font-size="0.8em" fill="var(--color-text-muted)">Core Electrons</text>
  <!-- Valence Electron Shell -->
  <circle cx="125" cy="90" r="70" fill="none" stroke="var(--color-border)" />
  <circle cx="125" cy="20" r="7" fill="var(--color-accent)" />
  <text x="100" y="15" font-size="0.9em" fill="var(--color-accent)" class="font-semibold">Valence Electron</text>
  <text x="125" y="165" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)">Outermost Shell</text>
</svg>

**Determining the Number of Valence Electrons**
For **main group elements** (Groups 1, 2, and 13-18, also known as A-group elements):
*   The number of valence electrons is typically equal to the **last digit of their group number** in the IUPAC numbering system (1-18) or simply their group number in the older A/B system (e.g., Group 1A, 2A, 3A ... 8A).
    *   Group 1 (Alkali Metals): 1 valence electron (e.g., Li, Na, K)
    *   Group 2 (Alkaline Earth Metals): 2 valence electrons (e.g., Be, Mg, Ca)
    *   Group 13: 3 valence electrons (e.g., B, Al)
    *   Group 14: 4 valence electrons (e.g., C, Si)
    *   Group 15: 5 valence electrons (e.g., N, P)
    *   Group 16: 6 valence electrons (e.g., O, S)
    *   Group 17 (Halogens): 7 valence electrons (e.g., F, Cl)
    *   Group 18 (Noble Gases): 8 valence electrons (except Helium, which has 2).
*   Alternatively, from an electron configuration, valence electrons are those in the s and p sublevels of the highest occupied principal energy level (n).
    *   Example: Sodium (Na), [Ne] 3s¹ → 1 valence electron (in the 3s orbital).
    *   Example: Chlorine (Cl), [Ne] 3s² 3p⁵ → 2 + 5 = 7 valence electrons (in the 3s and 3p orbitals).
    *   Example: Oxygen (O), 1s² 2s² 2p⁴ → 2 + 4 = 6 valence electrons (in the 2s and 2p orbitals).

**Lewis Dot Structures (Electron Dot Diagrams) for Atoms**
A **Lewis dot structure** (or electron dot diagram) is a simple way to represent the valence electrons of an atom. It consists of the element's chemical symbol surrounded by dots, where each dot represents one valence electron.

**Rules for Drawing Lewis Dot Structures for Atoms:**
1.  Write the chemical symbol of the element.
2.  Determine the number of valence electrons for that element.
3.  Place dots one at a time around the four sides of the symbol (top, bottom, left, right) before pairing them up.
4.  A maximum of two dots can be placed on each side (total of 8 dots for elements obeying the octet rule). The exact position (top, bottom, left, right) for single dots is often not critical as long as they are distributed.

<svg width="420" height="200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="lewis-dot-examples-title-c2l4" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-sm">
  <title id="lewis-dot-examples-title-c2l4">Examples of Lewis Dot Structures for various atoms.</title>
  <style>
    .symbol { font-family: 'Arial', sans-serif; font-size: 1.5em; fill: var(--color-text-light); text-anchor: middle; dominant-baseline: central; }
    .dot { fill: var(--color-accent); }
    .label { font-size: 0.8em; fill: var(--color-text-muted); text-anchor: middle; }
  </style>
  
  <!-- Hydrogen (1 VE) -->
  <text x="40" y="50" class="symbol">H</text>
  <circle cx="52" cy="50" r="3" class="dot"/>
  <text x="40" y="80" class="label">Hydrogen (1)</text>

  <!-- Helium (2 VE) -->
  <text x="110" y="50" class="symbol">He</text>
  <circle cx="122" cy="50" r="3" class="dot"/>
  <circle cx="98" cy="50" r="3" class="dot"/>
  <text x="110" y="80" class="label">Helium (2)</text>
  
  <!-- Lithium (1 VE) -->
  <text x="180" y="50" class="symbol">Li</text>
  <circle cx="192" cy="50" r="3" class="dot"/>
  <text x="180" y="80" class="label">Lithium (1)</text>

  <!-- Carbon (4 VE) -->
  <text x="250" y="50" class="symbol">C</text>
  <circle cx="250" cy="38" r="3" class="dot"/> <!-- top -->
  <circle cx="250" cy="62" r="3" class="dot"/> <!-- bottom -->
  <circle cx="238" cy="50" r="3" class="dot"/> <!-- left -->
  <circle cx="262" cy="50" r="3" class="dot"/> <!-- right -->
  <text x="250" y="80" class="label">Carbon (4)</text>

  <!-- Nitrogen (5 VE) -->
  <text x="320" y="50" class="symbol">N</text>
  <circle cx="320" cy="38" r="3" class="dot"/> <!-- top -->
  <circle cx="320" cy="62" r="3" class="dot"/> <!-- bottom -->
  <circle cx="308" cy="50" r="3" class="dot"/> <!-- left -->
  <circle cx="332" cy="50" r="3" class="dot"/> <!-- right -->
  <circle cx="320" cy="30" r="3" class="dot"/> <!-- pair top -->
  <text x="320" y="80" class="label">Nitrogen (5)</text>
  
  <!-- Oxygen (6 VE) -->
  <text x="40" y="140" class="symbol">O</text>
  <circle cx="40" cy="128" r="3" class="dot"/> <circle cx="40" cy="120" r="3" class="dot"/> <!-- pair top -->
  <circle cx="40" cy="152" r="3" class="dot"/> <circle cx="40" cy="160" r="3" class="dot"/> <!-- pair bottom -->
  <circle cx="28" cy="140" r="3" class="dot"/> <!-- left single -->
  <circle cx="52" cy="140" r="3" class="dot"/> <!-- right single -->
  <text x="40" y="170" class="label">Oxygen (6)</text>

  <!-- Fluorine (7 VE) -->
  <text x="110" y="140" class="symbol">F</text>
  <circle cx="110" cy="128" r="3" class="dot"/> <circle cx="110" cy="120" r="3" class="dot"/> <!-- pair top -->
  <circle cx="110" cy="152" r="3" class="dot"/> <circle cx="110" cy="160" r="3" class="dot"/> <!-- pair bottom -->
  <circle cx="98" cy="140" r="3" class="dot"/> <circle cx="90" cy="140" r="3" class="dot"/> <!-- pair left -->
  <circle cx="122" cy="140" r="3" class="dot"/> <!-- right single -->
  <text x="110" y="170" class="label">Fluorine (7)</text>

  <!-- Neon (8 VE) -->
  <text x="180" y="140" class="symbol">Ne</text>
  <circle cx="180" cy="128" r="3" class="dot"/> <circle cx="180" cy="120" r="3" class="dot"/>
  <circle cx="180" cy="152" r="3" class="dot"/> <circle cx="180" cy="160" r="3" class="dot"/>
  <circle cx="168" cy="140" r="3" class="dot"/> <circle cx="160" cy="140" r="3" class="dot"/>
  <circle cx="192" cy="140" r="3" class="dot"/> <circle cx="200" cy="140" r="3" class="dot"/>
  <text x="180" y="170" class="label">Neon (8)</text>

  <text x="320" y="140" class="label">(Example dot placement; actual positions for unpaired electrons can vary as long as singly placed first)</text>
</svg>

**The Octet Rule (Brief Introduction)**
Atoms of main group elements tend to gain, lose, or share electrons to achieve a stable electron configuration with eight valence electrons (an octet), like that of the nearest noble gas. Helium is an exception, achieving stability with two valence electrons (a duet). This rule is fundamental to understanding chemical bonding, which will be covered in Unit 4.

**Safety Note:** While drawing Lewis dot structures is a theoretical exercise, understanding valence electrons helps predict reactivity. For example, elements with 1 or 7 valence electrons (like alkali metals and halogens, respectively) are highly reactive because they are close to achieving a stable octet by losing or gaining just one electron. Such elements must be handled with care in a lab setting.`,
  practice: [
    {
      text: '1. How many valence electrons do the following elements have? a) Potassium (K) b) Silicon (Si) c) Bromine (Br) d) Argon (Ar)',
    },
    {
      text: '2. Draw the Lewis dot structure for an atom of: a) Magnesium (Mg) b) Phosphorus (P) c) Sulfur (S)',
    },
    {
      text: "3. Why are valence electrons more important than core electrons in determining an element's chemical properties?",
    },
  ],
  answers: [
    {
      text: '1. a) Potassium (K) is in Group 1: **1 valence electron**.\n   b) Silicon (Si) is in Group 14: **4 valence electrons**.\n   c) Bromine (Br) is in Group 17: **7 valence electrons**.\n   d) Argon (Ar) is in Group 18: **8 valence electrons**.',
    },
    {
      text: "2. Lewis dot structures:\n   a) Magnesium (Mg, 2 valence electrons): Mg with two dots (e.g., one on top, one on bottom, or two on one side if preferred after initial single placement, though typically shown separated if unbonded).\n      Symbol: Mg. Dots: Example `Mg :` (two dots to the right, or one top one bottom)\n   b) Phosphorus (P, 5 valence electrons): P with five dots (e.g., one pair and three singles, or other valid representation following Hund's rule for orbital box diagrams before pairing in Lewis structures).\n      Symbol: P. Dots: Example P with one dot on each of 3 sides, and 2 dots on the 4th side. (E.g., `.`P`:` with the `.` on top and `:` on right) \n   c) Sulfur (S, 6 valence electrons): S with six dots (e.g., two pairs and two singles).\n      Symbol: S. Dots: Example S with two dots on each of 2 sides, and one dot on each of the other 2 sides.",
    },
    {
      text: '3. Valence electrons are more important than core electrons in determining chemical properties because they are the outermost electrons and are the ones directly involved in forming chemical bonds with other atoms. Core electrons are held more tightly by the nucleus and are generally not involved in bonding.',
    },
  ],
};
