import { Lesson } from '../../../types';

export const c4l2Data: Lesson = {
  id: 'C4L2',
  unit: 4,
  title: 'Molecular Geometry - VSEPR Theory',
  objectives: [
    'Explain the basic principles of Valence Shell Electron Pair Repulsion (VSEPR) theory.',
    'Determine the number of electron domains (bonding pairs and lone pairs) around a central atom from a Lewis structure.',
    'Predict the electron domain geometry and molecular geometry (shape) for simple molecules (linear, trigonal planar, tetrahedral, trigonal pyramidal, bent).',
    'Relate molecular geometry to ideal bond angles and explain how lone pairs cause deviations from these angles.',
  ],
  labMinutes: 45,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html', // Direct URL
      title: 'Molecule Shapes (PhET)',
      description:
        'Explore molecule shapes by building molecules in 3D! How does molecule shape change with different numbers of bonds and electron pairs? Find out by adding single, double, or triple bonds and lone pairs to the central atom. Then, compare the model to real molecules.',
    },
    {
      type: 'custom',
      componentKey: 'MoleculeBuilder3D',
      title: 'VSEPR Shape Explorer Tool',
      predefinedMolecule: 'H2O', // Start with a molecule that shows lone pair effect
      description:
        'Use the Molecule Information Explorer to see VSEPR shapes, electron domains, and bond angles for various pre-defined molecules.',
    },
  ],
  narrative: `**Introduction to Molecular Geometry**
The three-dimensional arrangement of atoms in a molecule is its **molecular geometry** or **molecular shape**. This shape is crucial as it influences many physical and chemical properties, including melting point, boiling point, density, reactivity, and polarity.

**Valence Shell Electron Pair Repulsion (VSEPR) Theory**
VSEPR theory is a model used to predict the geometry of individual molecules from the number of electron pairs surrounding their central atoms. The main principles are:
1.  **Electron Pair Repulsion:** Electron pairs in the valence shell of a central atom repel each other. These pairs can be **bonding pairs** (involved in chemical bonds) or **lone pairs** (unshared electrons).
2.  **Minimizing Repulsion:** These electron pairs arrange themselves in three-dimensional space to be as far apart as possible, thereby minimizing electrostatic repulsion.
3.  **Electron Domain Geometry vs. Molecular Geometry:**
    *   **Electron Domain Geometry:** The arrangement of ALL electron domains (both bonding and lone pairs) around the central atom.
    *   **Molecular Geometry:** The arrangement of only the ATOMS in the molecule. Lone pairs influence the molecular geometry but are not "seen" as part of the shape defined by the atomic positions.
4.  **Counting Electron Domains:** For VSEPR purposes, a single bond, a double bond, and a triple bond each count as **ONE electron domain** around the central atom. A lone pair also counts as one electron domain.

**Predicting Molecular Shapes using VSEPR Theory:**
1.  **Draw the Lewis Structure:** Determine the central atom and identify all valence electron pairs around it.
2.  **Count Electron Domains:** Count the total number of electron domains (bonding domains + lone pairs) around the central atom.
3.  **Determine Electron Domain Geometry:** Based on the total number of electron domains.
4.  **Determine Molecular Geometry:** Based on the number of bonding domains and lone pairs. Lone pairs exert slightly greater repulsive forces than bonding pairs, which can compress bond angles.

**Common Molecular Geometries:**

*   **2 Electron Domains:**
    *   Electron Domain Geometry: **Linear**
    *   Arrangement: Atoms are 180° apart.
    *   Example (AB₂ type - 2 bonding, 0 lone pairs): CO₂ (O=C=O). Molecular Geometry: **Linear**. Bond Angle: 180°.

*   **3 Electron Domains:**
    *   Electron Domain Geometry: **Trigonal Planar**
    *   Arrangement: Electron domains are 120° apart in a flat triangle.
    *   Example 1 (AB₃ type - 3 bonding, 0 lone pairs): BF₃. Molecular Geometry: **Trigonal Planar**. Bond Angle: 120°.
    *   Example 2 (AB₂E type - 2 bonding, 1 lone pair): SO₂. Molecular Geometry: **Bent** (or Angular). Bond Angle: <120° (e.g., ~119° in SO₂ due to lone pair repulsion).

*   **4 Electron Domains:**
    *   Electron Domain Geometry: **Tetrahedral**
    *   Arrangement: Electron domains are 109.5° apart, pointing towards the corners of a tetrahedron.
    *   Example 1 (AB₄ type - 4 bonding, 0 lone pairs): CH₄ (Methane). Molecular Geometry: **Tetrahedral**. Bond Angle: 109.5°.
    *   Example 2 (AB₃E type - 3 bonding, 1 lone pair): NH₃ (Ammonia). Molecular Geometry: **Trigonal Pyramidal**. Bond Angle: <109.5° (approx. 107°).
    *   Example 3 (AB₂E₂ type - 2 bonding, 2 lone pairs): H₂O (Water). Molecular Geometry: **Bent** (or Angular). Bond Angle: <109.5° (approx. 104.5°).

**Influence of Lone Pairs:**
Lone pairs occupy more space around the central atom than bonding pairs because they are attracted to only one nucleus. This results in:
*   **Greater Repulsion:** Lone pair-lone pair repulsion > lone pair-bonding pair repulsion > bonding pair-bonding pair repulsion.
*   **Compressed Bond Angles:** Lone pairs push bonding pairs closer together, reducing the bond angles from their ideal values in the electron domain geometry.

**Visualizing Electron vs. Molecular Geometry (e.g., Ammonia, NH₃)**
Ammonia (NH₃) has a central nitrogen atom with 3 single bonds to hydrogen atoms and 1 lone pair of electrons on the nitrogen.
*   Total Electron Domains = 3 bonding pairs + 1 lone pair = 4 electron domains.
*   Electron Domain Geometry = Tetrahedral (the four domains point to the corners of a tetrahedron).
*   Molecular Geometry = Trigonal Pyramidal (the shape described by the N atom and the three H atoms). The lone pair is "invisible" in the molecular shape but influences it.
The H-N-H bond angle is about 107°, compressed from the ideal tetrahedral angle of 109.5° due to the repulsion from the lone pair.

<svg width="300" height="240" xmlns="http://www.w3.org/2000/svg" aria-labelledby="nh3-geometry-title-c4l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="nh3-geometry-title-c4l2">Electron domain geometry (tetrahedral) and molecular geometry (trigonal pyramidal) of Ammonia (NH₃).</title>
  <style>
    .atom-N-c4l2 { fill: var(--color-primary); }
    .atom-H-c4l2 { fill: var(--color-secondary); }
    .lone-pair-c4l2 { fill: var(--color-accent); opacity: 0.6; }
    .bond-line-c4l2 { stroke: var(--color-text-muted); stroke-width: 1.5; }
    .label-text-c4l2 { font-size: 0.9em; fill: var(--color-text-light); }
    .desc-text-c4l2 { font-size: 0.8em; fill: var(--color-text-muted); }
  </style>

  <text x="150" y="20" text-anchor="middle" class="label-text-c4l2 font-semibold">Ammonia (NH₃) Geometry</text>

  <!-- Molecular Structure (Trigonal Pyramidal) -->
  <circle cx="150" cy="100" r="12" class="atom-N-c4l2" /> <!-- Nitrogen -->
  <text x="150" y="104" text-anchor="middle" fill="white" font-size="0.7em">N</text>
  
  <ellipse cx="150" cy="65" rx="15" ry="8" class="lone-pair-c4l2"/> <!-- Lone Pair representation -->
  <text x="150" y="55" text-anchor="middle" class="desc-text-c4l2">Lone Pair</text>

  <line x1="150" y1="100" x2="100" y2="140" class="bond-line-c4l2"/> <!-- N-H1 bond -->
  <circle cx="100" cy="140" r="8" class="atom-H-c4l2" />
  <text x="96" y="143" text-anchor="middle" fill="white" font-size="0.6em">H</text>

  <line x1="150" y1="100" x2="200" y2="140" class="bond-line-c4l2"/> <!-- N-H2 bond -->
  <circle cx="200" cy="140" r="8" class="atom-H-c4l2" />
  <text x="196" y="143" text-anchor="middle" fill="white" font-size="0.6em">H</text>

  <line x1="150" y1="100" x2="150" y2="150" class="bond-line-c4l2" stroke-dasharray="3,3"/> <!-- N-H3 bond (going back) -->
  <circle cx="150" cy="150" r="8" class="atom-H-c4l2" />
  <text x="146" y="153" text-anchor="middle" fill="white" font-size="0.6em">H</text>
  
  <text x="150" y="180" text-anchor="middle" class="label-text-c4l2">Molecular Geometry: Trigonal Pyramidal</text>
  <text x="150" y="195" text-anchor="middle" class="desc-text-c4l2">(Bond Angles ≈ 107°)</text>
  <text x="150" y="215" text-anchor="middle" class="desc-text-c4l2">Electron Domain Geometry is Tetrahedral (due to 3 bonds + 1 lone pair).</text>
</svg>

A table summarizing common shapes is very useful:
| Total Domains | Bonding Domains | Lone Pairs | Electron Geometry | Molecular Geometry | Approx. Bond Angles | Example |
|---------------|-----------------|------------|-------------------|--------------------|---------------------|---------|
| 2             | 2               | 0          | Linear            | Linear             | 180°                | CO₂     |
| 3             | 3               | 0          | Trigonal Planar   | Trigonal Planar    | 120°                | BF₃     |
| 3             | 2               | 1          | Trigonal Planar   | Bent               | <120°               | SO₂     |
| 4             | 4               | 0          | Tetrahedral       | Tetrahedral        | 109.5°              | CH₄     |
| 4             | 3               | 1          | Tetrahedral       | Trigonal Pyramidal | ~107°               | NH₃     |
| 4             | 2               | 2          | Tetrahedral       | Bent               | ~104.5°             | H₂O     |

**Safety Note:** While VSEPR theory is about molecular structure, understanding these structures is key to predicting properties like polarity, which in turn affects how substances interact, their solubility, and potential hazards (e.g., nonpolar solvents might be flammable, polar molecules might interact strongly with biological systems).`,
  practice: [
    {
      text: '1. What is the fundamental principle of VSEPR theory that determines the arrangement of electron domains?',
    },
    {
      text: '2. For a molecule of phosphorus trichloride (PCl₃):\n    a) Draw its Lewis structure.\n    b) Determine the total number of electron domains around the central phosphorus atom.\n    c) Predict its electron domain geometry.\n    d) Predict its molecular geometry and approximate bond angles.',
    },
    {
      text: '3. Explain why carbon dioxide (CO₂) is a linear molecule, while sulfur dioxide (SO₂) is a bent molecule, even though both involve a central atom bonded to two oxygen atoms.',
    },
  ],
  answers: [
    {
      text: '1. The fundamental principle of VSEPR theory is that electron pairs (both bonding pairs and lone pairs) in the valence shell of a central atom repel each other and will arrange themselves in three-dimensional space to be as far apart as possible, thus minimizing this electrostatic repulsion.',
    },
    {
      text: "2. **Phosphorus trichloride (PCl₃):**\n    a) **Lewis Structure:** Phosphorus (P, 5 VE) is central, single-bonded to three Chlorine (Cl, 7 VE each) atoms. P will have one lone pair of electrons to complete its octet. Each Cl will have 3 lone pairs.\n       :Cl – P̈ – Cl:\n          | \n         :Cl:\n       (Imagine 3 lone pairs on each Cl, and 1 lone pair on P).\n    b) **Electron Domains around P:** 3 bonding domains (P-Cl bonds) + 1 lone pair on P = 4 total electron domains.\n    c) **Electron Domain Geometry:** With 4 electron domains, the electron domain geometry is **Tetrahedral**.\n    d) **Molecular Geometry:** With 3 bonding domains and 1 lone pair, the molecular geometry is **Trigonal Pyramidal**. The approximate bond angles will be slightly less than 109.5° (around 107°), due to the lone pair's repulsion.",
    },
    {
      text: '3. **CO₂ vs. SO₂ Shape:**\n    *   **CO₂ (Carbon Dioxide):** Lewis structure is O=C=O. The central carbon atom has two double bonds and no lone pairs. This gives 2 electron domains. To minimize repulsion, these 2 domains arrange themselves 180° apart, resulting in a **linear** molecular geometry.\n    *   **SO₂ (Sulfur Dioxide):** Lewis structure (one common resonance form) is O=S–O with one lone pair on the central sulfur atom. (Sulfur has 6 VE; one double bond = 2 shared pairs, one single bond = 1 shared pair, one lone pair = 1 unshared pair. This gives S 2+2+2=6 electrons in its valence, which is correct for one resonance structure).  The central sulfur atom has: 1 double bond domain + 1 single bond domain + 1 lone pair domain = 3 electron domains. The electron domain geometry is trigonal planar. However, because one of these domains is a lone pair, the molecular geometry (shape of the atoms) is **bent**. The lone pair repels the bonding pairs, causing the O-S-O angle to be less than 120°.',
    },
  ],
};
