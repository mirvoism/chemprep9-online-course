import { Lesson } from '../../../types';

export const c4l1Data: Lesson = {
  id: 'C4L1',
  unit: 4,
  title: 'Ionic & Covalent Bonds',
  objectives: [
    'Define and differentiate between ionic and covalent chemical bonds, including the role of electron transfer versus electron sharing.',
    'Explain how electronegativity differences between atoms can be used to predict the type of bond formed (ionic, polar covalent, nonpolar covalent).',
    'Illustrate the formation of ions (cations and anions) and write Lewis dot structures for simple ionic compounds.',
    'Draw Lewis dot structures for simple covalent molecules, including those with single, double, and triple bonds, applying the octet rule.',
    'Compare general physical properties (e.g., melting point, conductivity) of ionic and covalent compounds.',
  ],
  labMinutes: 45,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/build-a-molecule/latest/build-a-molecule_en.html',
      title: 'Build a Molecule',
      description:
        'Explore how atoms combine to form molecules by building simple structures. Observe how different atoms share electrons to form bonds.',
    },
    {
      type: 'custom',
      title: 'Bond Type Predictor (Conceptual)',
      description: 'Predict bond type based on electronegativity values.',
      placeholderText:
        '**Learning Goal:** To apply electronegativity differences to predict bond types.\n**Intended Functionality:** Users select two elements. The tool displays their electronegativity values (from a predefined dataset) and calculates the difference. Based on the difference (e.g., ΔEN > 1.7 for ionic, 0.4 < ΔEN ≤ 1.7 for polar covalent, ΔEN ≤ 0.4 for nonpolar covalent), it predicts the bond type. Feedback is provided.\n_An interactive module would feature dropdowns for element selection and display results dynamically._',
    },
  ],
  narrative: `**Introduction to Chemical Bonding**
Atoms form chemical bonds to achieve a more stable electron configuration, often resembling that of a noble gas (which typically have 8 valence electrons – the **octet rule**, or 2 for helium). This stability is usually achieved by losing, gaining, or sharing valence electrons. There are two main types of strong chemical bonds: ionic and covalent.

**1. Ionic Bonding**
Ionic bonds typically form between **metals** and **nonmetals**.
*   **Electron Transfer:** In ionic bonding, one or more valence electrons are completely **transferred** from the metal atom to the nonmetal atom.
    *   The **metal atom loses** electrons and becomes a positively charged ion called a **cation**. Metals have low ionization energies and low electronegativities, so they lose electrons relatively easily.
        *   Example: Sodium (Na: 1s²2s²2p⁶3s¹) loses its 1 valence electron to become Na⁺ (1s²2s²2p⁶ - a stable neon configuration).
    *   The **nonmetal atom gains** electrons and becomes a negatively charged ion called an **anion**. Nonmetals have high electron affinities and high electronegativities, so they readily gain electrons.
        *   Example: Chlorine (Cl: [Ne]3s²3p⁵) gains 1 electron to become Cl⁻ ([Ne]3s²3p⁶ - a stable argon configuration).
*   **Electrostatic Attraction:** The resulting oppositely charged ions (cation and anion) are then held together by strong electrostatic forces of attraction. This attraction is the ionic bond.
*   **Formation of Ionic Compounds (Salts):** Ionic bonds lead to the formation of ionic compounds, often crystalline solids arranged in a repeating pattern called a crystal lattice.

**Electronegativity and Ionic Bonds:**
Ionic bonds form when there is a **large difference in electronegativity** between the two atoms (typically **ΔEN > 1.7**). Electronegativity is a measure of an atom's ability to attract electrons in a chemical bond. The more electronegative atom pulls the electron(s) away from the less electronegative atom.

*Example: Sodium Chloride (NaCl)*
Sodium (EN = 0.93) and Chlorine (EN = 3.16). ΔEN = 3.16 - 0.93 = 2.23 (which is > 1.7).
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="nacl-formation-title-c4l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="nacl-formation-title-c4l1">Formation of an ionic bond between Sodium (Na) and Chlorine (Cl) to form NaCl.</title>
  <defs>
    <marker id="arrowHead-c4l1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent)" />
    </marker>
  </defs>
  <!-- Na atom -->
  <circle cx="60" cy="80" r="25" stroke="var(--color-text-muted)" fill="var(--color-secondary)" fill-opacity="0.2"/>
  <text x="60" y="85" font-size="1.2em" text-anchor="middle" fill="var(--color-text-light)">Na</text>
  <circle cx="88" cy="60" r="4" fill="var(--color-accent)"/> <!-- Valence electron -->
  <text x="35" y="130" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)">Na atom (1 VE)</text>
  
  <text x="125" y="85" font-size="1.5em" fill="var(--color-text-muted)">+</text>

  <!-- Cl atom -->
  <circle cx="190" cy="80" r="28" stroke="var(--color-text-muted)" fill="var(--color-primary)" fill-opacity="0.2"/>
  <text x="190" y="85" font-size="1.2em" text-anchor="middle" fill="var(--color-text-light)">Cl</text>
  <g fill="var(--color-accent)"> <!-- Valence electrons for Cl -->
    <circle cx="190" cy="58" r="3"/> <circle cx="190" cy="50" r="3"/>
    <circle cx="212" cy="80" r="3"/> <circle cx="220" cy="80" r="3"/>
    <circle cx="190" cy="102" r="3"/> <circle cx="190" cy="110" r="3"/>
    <circle cx="168" cy="80" r="3"/>
  </g>
  <text x="190" y="130" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)">Cl atom (7 VE)</text>

  <!-- Arrow for electron transfer -->
  <line x1="95" y1="65" x2="160" y2="75" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHead-c4l1)" stroke-dasharray="3,3"/>
  <text x="105" y="55" font-size="0.8em" fill="var(--color-accent)">e⁻ transfer</text>

  <text x="250" y="85" font-size="1.5em" fill="var(--color-text-muted)">→</text>

  <!-- Na+ ion -->
  <circle cx="300" cy="80" r="20" stroke="var(--color-text-muted)" fill="var(--color-secondary)" fill-opacity="0.3"/>
  <text x="300" y="85" font-size="1.2em" text-anchor="middle" fill="var(--color-text-light)">Na<tspan baseline-shift="super" font-size="0.7em">+</tspan></text>
  <text x="300" y="130" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)">Na⁺ ion (cation)</text>

  <!-- Cl- ion -->
  <circle cx="370" cy="80" r="30" stroke="var(--color-text-muted)" fill="var(--color-primary)" fill-opacity="0.3"/>
  <text x="370" y="85" font-size="1.2em" text-anchor="middle" fill="var(--color-text-light)">Cl<tspan baseline-shift="super" font-size="0.7em">-</tspan></text>
  <g fill="var(--color-accent)"> <!-- 8 Valence electrons for Cl- -->
    <circle cx="370" cy="56" r="3"/> <circle cx="370" cy="48" r="3"/>
    <circle cx="394" cy="80" r="3"/> <circle cx="402" cy="80" r="3"/>
    <circle cx="370" cy="104" r="3"/> <circle cx="370" cy="112" r="3"/>
    <circle cx="346" cy="80" r="3"/> <circle cx="338" cy="80" r="3"/>
  </g>
  <text x="370" y="130" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)">Cl⁻ ion (anion)</text>
  <text x="200" y="170" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)">Overall structure: Ionic crystal lattice of Na⁺ and Cl⁻ ions.</text>
</svg>

**Lewis Structures for Ionic Compounds:**
Show the resulting ions with their charges. The metal ion usually has no dots (having lost its valence electrons), and the nonmetal ion has a full octet of dots.
*   NaCl:  [Na]⁺ [:Cl̈:]⁻  (imagine 8 dots around Cl)
*   MgCl₂: [:Cl̈:]⁻ [Mg]²⁺ [:Cl̈:]⁻

**Properties of Ionic Compounds:**
*   High melting and boiling points (due to strong electrostatic attractions).
*   Usually crystalline solids at room temperature.
*   Conduct electricity when molten (melted) or dissolved in water (aqueous solution) because ions are free to move. They do not conduct electricity in the solid state as ions are fixed in the lattice.
*   Often soluble in polar solvents like water.

**2. Covalent Bonding**
Covalent bonds typically form between **two nonmetal atoms**, or between a nonmetal and a metalloid.
*   **Electron Sharing:** In covalent bonding, atoms **share** one or more pairs of valence electrons to achieve stable electron configurations. The shared pair(s) of electrons are attracted to the nuclei of both atoms, holding them together.
*   **Formation of Molecules:** Covalent bonding results in the formation of **molecules**, which are discrete groups of atoms bonded together.
*   **Types of Covalent Bonds based on number of shared pairs:**
    *   **Single Bond:** One pair of electrons is shared (e.g., H-H in H₂, C-H in CH₄). Represented by a single line.
    *   **Double Bond:** Two pairs of electrons are shared (e.g., O=O in O₂, C=O in CO₂). Represented by two lines.
    *   **Triple Bond:** Three pairs of electrons are shared (e.g., N≡N in N₂). Represented by three lines.

<svg width="450" height="150" xmlns="http://www.w3.org/2000/svg" aria-labelledby="covalent-bond-examples-title-c4l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="covalent-bond-examples-title-c4l1">Examples of single, double, and triple covalent bonds.</title>
  <style>
    .atom-label-c4l1 { font-size: 1.2em; text-anchor: middle; fill: var(--color-text-light); }
    .bond-line-c4l1 { stroke: var(--color-text-light); stroke-width: 2; }
    .desc-text-c4l1 { font-size: inherit; text-anchor: middle; fill: var(--color-text-muted); }
  </style>
  <!-- H2 - Single Bond -->
  <text x="50" y="60" class="atom-label-c4l1">H</text>
  <line x1="65" y1="60" x2="85" y2="60" class="bond-line-c4l1"/>
  <text x="100" y="60" class="atom-label-c4l1">H</text>
  <text x="75" y="90" class="desc-text-c4l1">H₂ (Single Bond)</text>
  <text x="75" y="110" class="desc-text-c4l1">1 shared pair</text>

  <!-- O2 - Double Bond -->
  <text x="180" y="60" class="atom-label-c4l1">O</text>
  <line x1="195" y1="57" x2="215" y2="57" class="bond-line-c4l1"/>
  <line x1="195" y1="63" x2="215" y2="63" class="bond-line-c4l1"/>
  <text x="230" y="60" class="atom-label-c4l1">O</text>
  <text x="205" y="90" class="desc-text-c4l1">O₂ (Double Bond)</text>
  <text x="205" y="110" class="desc-text-c4l1">2 shared pairs</text>

  <!-- N2 - Triple Bond -->
  <text x="310" y="60" class="atom-label-c4l1">N</text>
  <line x1="325" y1="55" x2="345" y2="55" class="bond-line-c4l1"/>
  <line x1="325" y1="60" x2="345" y2="60" class="bond-line-c4l1"/>
  <line x1="325" y1="65" x2="345" y2="65" class="bond-line-c4l1"/>
  <text x="360" y="60" class="atom-label-c4l1">N</text>
  <text x="335" y="90" class="desc-text-c4l1">N₂ (Triple Bond)</text>
  <text x="335" y="110" class="desc-text-c4l1">3 shared pairs</text>
</svg>

**Electronegativity and Covalent Bonds:**
The nature of a covalent bond depends on how equally the electrons are shared, which is determined by the electronegativity difference (ΔEN) between the bonded atoms.
*   **Nonpolar Covalent Bond:** Electrons are shared **equally** (or nearly equally).
    *   Occurs when ΔEN is very small (typically **0 to 0.4**).
    *   Common between identical atoms (e.g., H₂, O₂, Cl₂) or atoms with very similar electronegativities (e.g., C-H bond in methane, CH₄, where ΔEN is ~0.4).
*   **Polar Covalent Bond:** Electrons are shared **unequally**.
    *   Occurs when ΔEN is moderate (typically **between 0.4 and 1.7**).
    *   The more electronegative atom attracts the shared electrons more strongly, acquiring a partial negative charge (δ⁻, delta negative).
    *   The less electronegative atom acquires a partial positive charge (δ⁺, delta positive).
    *   This separation of charge creates a **bond dipole**.
    *   Example: HCl. Chlorine (EN=3.16) is more electronegative than Hydrogen (EN=2.20). ΔEN = 0.96. Electrons are pulled closer to Cl.
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg" aria-labelledby="hcl-polar-bond-title-c4l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
          <title id="hcl-polar-bond-title-c4l1">Polar covalent bond in HCl showing partial charges and dipole moment.</title>
          <style>.atom-label-c4l1-polar { font-size: 1.5em; text-anchor: middle; fill: var(--color-text-light); } .charge-label-c4l1 { font-size: 1em; fill: var(--color-accent); }</style>
          <text x="40" y="55" class="atom-label-c4l1-polar">H</text>
          <text x="100" y="55" class="atom-label-c4l1-polar">Cl</text>
          <line x1="58" y1="50" x2="82" y2="50" stroke="var(--color-text-light)" stroke-width="2"/>
          <text x="35" y="35" class="charge-label-c4l1">δ+</text>
          <text x="95" y="35" class="charge-label-c4l1">δ-</text>
          <line x1="45" y1="70" x2="95" y2="70" stroke="var(--color-primary)" stroke-width="1.5" marker-end="url(#arrowHead-c4l1)"/>
          <line x1="45" y1="70" x2="45" y2="65" stroke="var(--color-primary)" stroke-width="1.5"/>
          <line x1="45" y1="70" x2="45" y2="75" stroke="var(--color-primary)" stroke-width="1.5"/>
          <text x="65" y="85" font-size="0.8em" fill="var(--color-primary)">Dipole Moment</text>
        </svg>

**Lewis Structures for Covalent Molecules:**
Represent shared electron pairs as lines (one line for a single bond, two for double, three for triple) and unshared valence electrons (lone pairs) as dots. The goal is usually for each atom (except H, Be, B) to achieve an octet of electrons.
*   H₂: H–H
*   O₂: :Ö=Ö: (each O has 2 lone pairs)
*   N₂: :N≡N: (each N has 1 lone pair)
*   CH₄: H–C(H)(H)–H (C central, 4 H single bonded, no lone pairs on C)
*   H₂O: H–Ö–H (O central, 2 H single bonded, 2 lone pairs on O)

**Properties of Covalent (Molecular) Compounds:**
*   Generally lower melting and boiling points compared to ionic compounds (because intermolecular forces between molecules are weaker than ionic bonds).
*   Exist as gases, liquids, or solids at room temperature. Solids are often soft.
*   Generally poor conductors of electricity in any state, as they do not contain free-moving charged particles (ions or delocalized electrons).
*   Solubility varies: nonpolar molecules tend to dissolve in nonpolar solvents; polar molecules tend to dissolve in polar solvents ("like dissolves like").

**Summary of Electronegativity Difference and Bond Type (General Guidelines):**
*   **ΔEN = 0 to 0.4:** Nonpolar Covalent Bond
*   **ΔEN > 0.4 to 1.7:** Polar Covalent Bond
*   **ΔEN > 1.7:** Ionic Bond
(Note: These are guidelines; there's a continuum, and some bonds with ΔEN around 1.7 can have characteristics of both.)

**The Octet Rule in Bonding**
Atoms tend to gain, lose (ionic bonding), or share (covalent bonding) electrons to achieve a stable configuration of 8 valence electrons (an octet). Hydrogen is an exception, achieving stability with 2 electrons (a duet). Some other exceptions exist (e.g., Be often has 4, B often has 6 in compounds).

**Safety Note:** The properties of substances (e.g., reactivity, flammability, toxicity, state of matter) are directly related to the types of chemical bonds they contain and the resulting intermolecular forces. Understanding bonding is crucial for predicting and handling chemicals safely.`,
  practice: [
    {
      text: '1. Compare and contrast ionic and covalent bonds in terms of: a) How they are formed, b) The types of atoms typically involved, c) The state of resulting compounds at room temperature.',
    },
    {
      text: '2. Using electronegativity values (e.g., K=0.82, O=3.44, C=2.55, H=2.20), predict the type of bond (ionic, polar covalent, or nonpolar covalent) you would expect to form between: a) K and O, b) C and O, c) C and H.',
    },
    {
      text: '3. Draw Lewis dot structures for: a) Potassium fluoride (KF) - an ionic compound. b) Methane (CH₄) - a covalent molecule. c) Carbon dioxide (CO₂) - a covalent molecule with double bonds.',
    },
    {
      text: '4. Why do ionic compounds typically conduct electricity when molten or dissolved, but not in the solid state?',
    },
  ],
  answers: [
    {
      text: '1. **Comparison of Ionic and Covalent Bonds:**\n    a) **Formation:** Ionic bonds are formed by the complete transfer of electrons from one atom to another, resulting in oppositely charged ions that attract each other. Covalent bonds are formed by the sharing of electron pairs between atoms.\n    b) **Types of Atoms:** Ionic bonds typically form between metals and nonmetals. Covalent bonds typically form between two nonmetal atoms.\n    c) **State at Room Temperature:** Ionic compounds are usually crystalline solids at room temperature. Covalent compounds can be solids, liquids, or gases at room temperature.',
    },
    {
      text: '2. **Bond Type Prediction (using ΔEN):\n   Guideline: >1.7 Ionic; 0.4-1.7 Polar Covalent; <0.4 Nonpolar Covalent**\n    a) **K and O:** ΔEN = |3.44 - 0.82| = 2.62. This is a large difference, so an **ionic bond** is expected.\n    b) **C and O:** ΔEN = |3.44 - 2.55| = 0.89. This is a moderate difference, so a **polar covalent bond** is expected.\n    c) **C and H:** ΔEN = |2.55 - 2.20| = 0.35. This is a small difference, so a **nonpolar covalent bond** (or very slightly polar covalent) is expected.',
    },
    {
      text: '3. **Lewis Dot Structures:**\n    a) **Potassium fluoride (KF):** K loses 1 electron, F gains 1 electron.\n       [K]⁺ [:F̈:]⁻  (imagine 8 dots around F, representing a full octet for fluoride ion)\n    b) **Methane (CH₄):** Carbon (4 VE) shares 1 electron with each of the four Hydrogen atoms (1 VE each).\n       H\n       | \n       H–C–H\n       | \n       H\n       (Each H has 2 electrons (a line), C has 8 electrons (four lines)).\n    c) **Carbon dioxide (CO₂):** Carbon (4 VE) forms two double bonds with two Oxygen atoms (6 VE each).\n       :Ö=C=Ö:  (Each O has 2 lone pairs and 2 shared pairs (double bond). C has 2 double bonds and no lone pairs, satisfying the octet rule for all atoms).',
    },
    {
      text: '4. Ionic compounds conduct electricity when molten or dissolved because their ions become free to move and carry an electric current. In the solid state, the ions are held rigidly in a crystal lattice and cannot move, so they cannot conduct electricity.',
    },
  ],
};
