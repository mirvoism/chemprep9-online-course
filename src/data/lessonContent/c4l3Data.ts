import { Lesson } from '../../../types';

export const c4l3Data: Lesson = {
  id: 'C4L3',
  unit: 4,
  title: 'Polarity & Intermolecular Forces',
  objectives: [
    'Distinguish between polar and nonpolar covalent bonds using electronegativity differences.',
    'Determine if a molecule is polar or nonpolar based on its bond polarities and molecular geometry (shape).',
    'Describe the three main types of intermolecular forces (IMFs): London Dispersion Forces, dipole-dipole forces, and hydrogen bonds.',
    'Relate the strength of intermolecular forces to physical properties such as boiling point, melting point, and vapor pressure.',
  ],
  labMinutes: 50,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_en.html',
      title: 'Molecule Polarity (PhET)',
      description:
        'Explore bond polarity and molecular polarity. See how electronegativity and molecular shape affect polarity. Investigate how polar molecules interact.',
    },
    {
      type: 'custom',
      title: 'IMF Strength Sorter (Conceptual)',
      description: 'Compare relative strengths of IMFs for different molecules.',
      placeholderText:
        '**Learning Goal:** To rank substances by strength of IMFs and predict related physical properties.\n**Intended Functionality:** Users are given a set of molecules (e.g., CH₄, NH₃, H₂O, HCl, F₂). They must identify the strongest IMF present in each and then rank them by increasing boiling point. Feedback explains the correct ranking based on IMF types and strengths (e.g., H-bonding > dipole-dipole > LDFs, and LDF strength increases with molecular size/surface area).\n_An interactive module could involve drag-and-drop sorting._',
    },
  ],
  narrative: `**Recap: Bond Polarity**
Recall from C4L1 that covalent bonds can be:
*   **Nonpolar Covalent:** Electrons are shared equally (ΔEN ≤ 0.4). Example: Cl-Cl in Cl₂.
*   **Polar Covalent:** Electrons are shared unequally (0.4 < ΔEN ≤ 1.7). The more electronegative atom gains a partial negative charge (δ⁻), and the less electronegative atom gains a partial positive charge (δ⁺). This creates a **bond dipole**. Example: H-Cl (H<sup>δ+</sup>–Cl<sup>δ-</sup>).

**Molecular Polarity**
A molecule can have polar bonds but still be **nonpolar overall** if its shape is symmetrical, causing the bond dipoles to cancel each other out. If the bond dipoles do not cancel, the molecule is **polar** (it has a net molecular dipole).

*   **To determine molecular polarity:**
    1.  Draw the Lewis structure.
    2.  Determine the molecular geometry (VSEPR theory - C4L2).
    3.  Determine the polarity of each bond.
    4.  Analyze the symmetry:
        *   **Nonpolar Molecules:**
            *   Often have symmetrical shapes where bond dipoles cancel. Examples:
                *   CO₂ (Linear, O=C=O, bond dipoles cancel).
                *   CH₄ (Tetrahedral, C-H bonds are slightly polar, but symmetrical arrangement cancels dipoles).
                *   Molecules made of only one type of atom (e.g., O₂, N₂, Cl₂).
        *   **Polar Molecules:**
            *   Often have asymmetrical shapes, or contain lone pairs on the central atom that cause an uneven distribution of charge. Bond dipoles do not cancel. Examples:
                *   H₂O (Bent, O-H bond dipoles add up).
                *   NH₃ (Trigonal pyramidal, N-H bond dipoles and lone pair effect result in a net dipole).
                *   HCl (Linear diatomic with a polar bond).

<svg width="450" height="220" xmlns="http://www.w3.org/2000/svg" aria-labelledby="molecular-polarity-title-c4l3" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="molecular-polarity-title-c4l3">Comparison of nonpolar CO₂ and polar H₂O molecules.</title>
  <defs>
    <marker id="arrowHeadPolarity-c4l3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent)" />
    </marker>
    <style>
      .atom-label-c4l3 { font-size: 1em; text-anchor: middle; fill: var(--color-text-light); }
      .charge-label-c4l3 { font-size: 0.8em; fill: var(--color-accent); }
      .desc-text-c4l3 { font-size: 0.9em; text-anchor: middle; fill: var(--color-text-muted); }
    </style>
  </defs>

  <!-- CO2 (Nonpolar) -->
  <text x="100" y="30" text-anchor="middle" class="desc-text-c4l3 font-semibold">CO₂ (Linear, Nonpolar)</text>
  <text x="40" y="70" class="atom-label-c4l3">O</text>
  <text x="100" y="70" class="atom-label-c4l3">C</text>
  <text x="160" y="70" class="atom-label-c4l3">O</text>
  <line x1="55" y1="70" x2="85" y2="70" stroke="var(--color-text-light)" stroke-width="1.5"/>
  <line x1="55" y1="67" x2="85" y2="67" stroke="var(--color-text-light)" stroke-width="1.5"/>
  <line x1="115" y1="70" x2="145" y2="70" stroke="var(--color-text-light)" stroke-width="1.5"/>
  <line x1="115" y1="67" x2="145" y2="67" stroke="var(--color-text-light)" stroke-width="1.5"/>
  <!-- Bond dipoles for CO2 -->
  <text x="35" y="60" class="charge-label-c4l3">δ-</text>
  <text x="95" y="60" class="charge-label-c4l3">δ+</text>
  <text x="155" y="60" class="charge-label-c4l3">δ-</text>
  <line x1="80" y1="85" x2="50" y2="85" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadPolarity-c4l3)"/>
  <line x1="120" y1="85" x2="150" y2="85" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadPolarity-c4l3)"/>
  <text x="100" y="110" class="desc-text-c4l3">Bond dipoles cancel.</text>
  <text x="100" y="125" class="desc-text-c4l3">Net Dipole = 0</text>

  <!-- H2O (Polar) -->
  <text x="325" y="30" text-anchor="middle" class="desc-text-c4l3 font-semibold">H₂O (Bent, Polar)</text>
  <text x="325" y="70" class="atom-label-c4l3">O</text>
  <text x="285" y="105" class="atom-label-c4l3">H</text>
  <text x="365" y="105" class="atom-label-c4l3">H</text>
  <line x1="315" y1="75" x2="295" y2="95" stroke="var(--color-text-light)" stroke-width="1.5"/>
  <line x1="335" y1="75" x2="355" y2="95" stroke="var(--color-text-light)" stroke-width="1.5"/>
  <!-- Bond dipoles for H2O -->
  <text x="320" y="60" class="charge-label-c4l3">δ-</text>
  <text x="280" y="120" class="charge-label-c4l3">δ+</text>
  <text x="360" y="120" class="charge-label-c4l3">δ+</text>
  <line x1="300" y1="95" x2="315" y2="78" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadPolarity-c4l3)"/>
  <line x1="350" y1="95" x2="335" y2="78" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadPolarity-c4l3)"/>
  <!-- Net dipole for H2O -->
  <line x1="325" y1="100" x2="325" y2="60" stroke="var(--color-primary)" stroke-width="2" marker-end="url(#arrowHeadPolarity-c4l3)"/>
  <text x="325" y="140" class="desc-text-c4l3">Bond dipoles add up.</text>
  <text x="325" y="155" class="desc-text-c4l3">Net Dipole ≠ 0</text>
  <text x="325" y="115" class="desc-text-c4l3">(Lone pairs on O also contribute)</text>
</svg>

**Intermolecular Forces (IMFs)**
Intermolecular forces are attractive forces **between** molecules. They are much weaker than intramolecular forces (ionic or covalent bonds *within* molecules) but are responsible for many physical properties of substances, such as boiling points, melting points, and viscosity.
There are three main types of IMFs, listed generally from weakest to strongest:

**1. London Dispersion Forces (LDFs)**
*   Also known as induced dipole-induced dipole forces or van der Waals forces (though van der Waals can also refer to dipole-dipole).
*   Present in **ALL** atoms and molecules, both polar and nonpolar. They are the *only* IMFs present in nonpolar molecules.
*   Caused by the constant random motion of electrons. At any instant, the electron distribution in an atom or molecule can be temporarily uneven, creating a temporary, instantaneous dipole. This instantaneous dipole can then induce a dipole in a neighboring atom or molecule, leading to a weak, short-lived attraction.
*   **Strength of LDFs depends on:**
    *   **Number of Electrons (Molecular Size/Mass):** Larger molecules with more electrons have larger, more polarizable electron clouds, leading to stronger LDFs. (e.g., I₂ has stronger LDFs than F₂ because I₂ is larger).
    *   **Molecular Shape:** Molecules with greater surface area allow for more points of contact, leading to stronger LDFs (e.g., long, straight-chain alkanes have stronger LDFs than compact, branched isomers of the same molar mass).
<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ldf-title-c4l3" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="ldf-title-c4l3">Illustration of London Dispersion Forces between two nonpolar molecules.</title>
  <!-- Molecule 1 -->
  <ellipse cx="75" cy="75" rx="40" ry="25" fill="var(--color-secondary)" fill-opacity="0.2"/>
  <text x="75" y="78" text-anchor="middle" font-size="0.9em" fill="var(--color-text-light)">Molecule 1</text>
  <text x="50" cy="75" font-size="1.2em" fill="var(--color-primary)">δ+</text> <!-- Instantaneous dipole -->
  <text x="100" cy="75" font-size="1.2em" fill="var(--color-danger)">δ-</text>
  <!-- Molecule 2 -->
  <ellipse cx="225" cy="75" rx="40" ry="25" fill="var(--color-secondary)" fill-opacity="0.2"/>
  <text x="225" y="78" text-anchor="middle" font-size="0.9em" fill="var(--color-text-light)">Molecule 2</text>
  <text x="200" cy="75" font-size="1.2em" fill="var(--color-primary)">δ+</text> <!-- Induced dipole -->
  <text x="250" cy="75" font-size="1.2em" fill="var(--color-danger)">δ-</text>
  <!-- Attraction line -->
  <line x1="110" y1="75" x2="190" y2="75" stroke="var(--color-accent)" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="150" y="60" text-anchor="middle" font-size="0.8em" fill="var(--color-accent)">Weak attraction</text>
  <text x="150" y="120" text-anchor="middle" class="desc-text-c4l3">London Dispersion Force (LDF)</text>
</svg>

**2. Dipole-Dipole Forces**
*   Occur between **polar molecules** (molecules with a permanent net dipole moment).
*   The positive end (δ⁺) of one polar molecule is attracted to the negative end (δ⁻) of a neighboring polar molecule.
*   Stronger than LDFs for molecules of comparable size.
<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg" aria-labelledby="dipole-dipole-title-c4l3" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="dipole-dipole-title-c4l3">Illustration of Dipole-Dipole Forces between two polar molecules.</title>
  <!-- Molecule 1 (e.g., HCl) -->
  <rect x="40" y="60" width="70" height="30" rx="15" fill="var(--color-primary)" fill-opacity="0.3"/>
  <text x="55" y="78" font-size="0.9em" fill="var(--color-text-light)">H<sup>δ+</sup></text>
  <text x="90" y="78" font-size="0.9em" fill="var(--color-text-light)">Cl<sup>δ-</sup></text>
  <!-- Molecule 2 (e.g., HCl) -->
  <rect x="190" y="60" width="70" height="30" rx="15" fill="var(--color-primary)" fill-opacity="0.3"/>
  <text x="205" y="78" font-size="0.9em" fill="var(--color-text-light)">H<sup>δ+</sup></text>
  <text x="240" y="78" font-size="0.9em" fill="var(--color-text-light)">Cl<sup>δ-</sup></text>
  <!-- Attraction line (Cl of mol1 to H of mol2) -->
  <line x1="110" y1="75" x2="190" y2="75" stroke="var(--color-accent)" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="150" y="60" text-anchor="middle" font-size="0.8em" fill="var(--color-accent)">Attraction</text>
  <text x="150" y="120" text-anchor="middle" class="desc-text-c4l3">Dipole-Dipole Force</text>
</svg>

**3. Hydrogen Bonds**
*   A special, particularly strong type of dipole-dipole interaction.
*   Occurs when a hydrogen atom is bonded to a highly electronegative atom (specifically **Nitrogen (N), Oxygen (O), or Fluorine (F)**) AND is attracted to a lone pair of electrons on another N, O, or F atom in a neighboring molecule.
*   Mnemonic: "Hydrogen bonds are F-O-N!" (Hydrogen bonding to F, O, or N).
*   Significantly stronger than typical dipole-dipole forces and LDFs.
*   Responsible for many unique properties of water (e.g., high boiling point, high surface tension, ice floating).
<svg width="350" height="180" xmlns="http://www.w3.org/2000/svg" aria-labelledby="h-bond-water-title-c4l3" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="h-bond-water-title-c4l3">Hydrogen bonding between water molecules.</title>
  <style>
    .atom-O-c4l3 { fill: var(--color-danger); }
    .atom-H-c4l3 { fill: var(--color-secondary); }
    .h-bond-line-c4l3 { stroke: var(--color-accent); stroke-width: 1.5; stroke-dasharray: 3,3; }
  </style>
  <!-- Water Molecule 1 -->
  <circle cx="100" cy="70" r="10" class="atom-O-c4l3"/> <text x="97" y="74" fill="white" font-size="0.7em">O</text>
  <text x="95" y="60" class="charge-label-c4l3">δ-</text>
  <circle cx="80" cy="90" r="6" class="atom-H-c4l3"/> <text x="77" y="93" fill="white" font-size="0.5em">H</text>
  <text x="75" y="105" class="charge-label-c4l3">δ+</text>
  <line x1="95" y1="75" x2="83" y2="87" stroke="var(--color-text-muted)" stroke-width="1"/>
  <circle cx="120" cy="90" r="6" class="atom-H-c4l3"/> <text x="117" y="93" fill="white" font-size="0.5em">H</text>
  <text x="115" y="105" class="charge-label-c4l3">δ+</text>
  <line x1="105" y1="75" x2="117" y2="87" stroke="var(--color-text-muted)" stroke-width="1"/>

  <!-- Water Molecule 2 -->
  <circle cx="220" cy="70" r="10" class="atom-O-c4l3"/> <text x="217" y="74" fill="white" font-size="0.7em">O</text>
  <text x="215" y="60" class="charge-label-c4l3">δ-</text>
  <circle cx="200" cy="90" r="6" class="atom-H-c4l3"/> <text x="197" y="93" fill="white" font-size="0.5em">H</text>
  <text x="195" y="105" class="charge-label-c4l3">δ+</text>
  <line x1="215" y1="75" x2="203" y2="87" stroke="var(--color-text-muted)" stroke-width="1"/>
  <circle cx="240" cy="90" r="6" class="atom-H-c4l3"/> <text x="237" y="93" fill="white" font-size="0.5em">H</text>
  <text x="235" y="105" class="charge-label-c4l3">δ+</text>
  <line x1="225" y1="75" x2="237" y2="87" stroke="var(--color-text-muted)" stroke-width="1"/>
  
  <!-- Hydrogen Bond -->
  <line x1="120" y1="90" x2="210" y2="75" class="h-bond-line-c4l3"/>
  <text x="165" y="95" text-anchor="middle" font-size="0.8em" fill="var(--color-accent)">Hydrogen Bond</text>
  <text x="175" y="140" text-anchor="middle" class="desc-text-c4l3">H (on molecule 1, bonded to O) attracted to lone pair on O (of molecule 2).</text>
</svg>

**IMFs and Physical Properties**
The stronger the intermolecular forces between molecules, the more energy is required to separate them. This directly affects:
*   **Boiling Point & Melting Point:** Substances with stronger IMFs have higher boiling points and melting points because more energy (heat) is needed to overcome these attractions to change phase (solid → liquid → gas).
*   **Vapor Pressure:** Substances with stronger IMFs have lower vapor pressures. Vapor pressure is the pressure exerted by a vapor in equilibrium with its liquid or solid phase. Stronger IMFs hold molecules more tightly in the liquid/solid phase, making it harder for them to escape into the gas phase.
*   **Viscosity:** Liquids with stronger IMFs tend to be more viscous (resistant to flow).
*   **Surface Tension:** Liquids with stronger IMFs tend to have higher surface tension.

**General Order of IMF Strength:**
Hydrogen Bonds > Dipole-Dipole Forces > London Dispersion Forces
(However, LDFs in very large molecules can sometimes outweigh dipole-dipole forces in smaller polar molecules.)

**Safety Note:** Understanding IMFs helps predict volatility. Substances with weak IMFs (and thus high vapor pressures) are often volatile and can pose inhalation or flammability hazards (e.g., many nonpolar organic solvents). Conversely, substances with strong IMFs (like water) are less volatile.`,
  practice: [
    {
      text: '1. Explain the difference between a polar bond and a polar molecule. Can a molecule with polar bonds be nonpolar? Give an example.',
    },
    {
      text: '2. What type(s) of intermolecular forces are present in each of the following substances?\n    a) F₂ (Fluorine gas)\n    b) HCl (Hydrogen chloride)\n    c) CH₃OH (Methanol)\n    d) CCl₄ (Carbon tetrachloride - tetrahedral shape)',
    },
    {
      text: '3. Arrange the following substances in order of increasing boiling point, and explain your reasoning based on IMFs: CH₄, NH₃, SiH₄.',
    },
    {
      text: '4. Why does water (H₂O) have a much higher boiling point than hydrogen sulfide (H₂S), even though sulfur is larger and below oxygen in the same group?',
    },
  ],
  answers: [
    {
      text: "1. A **polar bond** forms between two atoms with a significant difference in electronegativity, resulting in unequal sharing of electrons and partial charges on the atoms. A **polar molecule** has an overall net dipole moment, meaning there's an uneven distribution of electron density across the entire molecule. \nYes, a molecule with polar bonds can be nonpolar if its molecular geometry is symmetrical, causing the bond dipoles to cancel each other out. An example is **carbon dioxide (CO₂)**. The C=O bonds are polar, but the molecule is linear, so the two bond dipoles point in opposite directions and cancel, making the CO₂ molecule nonpolar.",
    },
    {
      text: '2. **Types of IMFs:**\n    a) **F₂:** Nonpolar molecule. Only **London Dispersion Forces (LDFs)**.\n    b) **HCl:** Polar molecule (H-Cl bond is polar, molecule is linear). **Dipole-dipole forces** and also LDFs.\n    c) **CH₃OH (Methanol):** Polar molecule. Hydrogen is bonded to oxygen. Can form **Hydrogen bonds**. Also has dipole-dipole forces and LDFs. (Hydrogen bonding is the strongest IMF present).\n    d) **CCl₄ (Carbon tetrachloride):** C-Cl bonds are polar. However, the molecule is tetrahedral and symmetrical, so the bond dipoles cancel out, making the molecule nonpolar. Only **London Dispersion Forces (LDFs)**.',
    },
    {
      text: '3. **Increasing boiling point: CH₄ < SiH₄ < NH₃**\n    *   **CH₄ (Methane):** Nonpolar, only has weak LDFs.\n    *   **SiH₄ (Silane):** Nonpolar, only has LDFs. SiH₄ is larger than CH₄ (Si is below C in Group 14), so it has more electrons and thus stronger LDFs than CH₄. Therefore, SiH₄ has a higher boiling point than CH₄.\n    *   **NH₃ (Ammonia):** Polar molecule and capable of hydrogen bonding (H bonded to N). Hydrogen bonds are significantly stronger than LDFs. Therefore, NH₃ has the highest boiling point among the three.',
    },
    {
      text: "4. Water (H₂O) has a much higher boiling point than hydrogen sulfide (H₂S) because water molecules can form strong **hydrogen bonds** with each other (H bonded to O). Hydrogen sulfide, while polar, cannot form hydrogen bonds (S is not N, O, or F). The strongest IMFs in H₂S are dipole-dipole forces, which are weaker than hydrogen bonds. Even though H₂S has stronger LDFs than H₂O due to sulfur's larger size, the presence of hydrogen bonding in water dominates and leads to its unusually high boiling point.",
    },
  ],
};
