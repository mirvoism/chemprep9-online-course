import { Lesson } from '../../../../types';
import { citationInline, bibliography } from '../../../utils/citationManager';

export const c4l1Enhanced: Lesson = {
  id: 'C4L1_ENHANCED',
  unit: 4,
  title: 'Chemical Bonding: Molecular Architecture and Properties',
  objectives: [
    'Distinguish between ionic, covalent, and metallic bonding based on electronegativity differences.',
    'Draw Lewis dot structures for simple molecules and predict molecular geometry using VSEPR theory.',
    'Analyze molecular polarity based on bond polarities and molecular geometry.',
    'Explain how intermolecular forces (London dispersion, dipole-dipole, hydrogen bonding) affect physical properties.',
    'Correlate bonding type and intermolecular forces with observable properties like melting point, electrical conductivity, and solubility.',
  ],
  labMinutes: 50,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/build-a-molecule/latest/build-a-molecule_en.html',
      title: 'Build a Molecule',
      description: 'Build molecules by combining atoms and explore the molecular structures of common compounds.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html',
      title: 'Molecule Shapes',
      description: 'Explore molecular shapes and predict geometries using VSEPR theory.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_en.html',
      title: 'Molecule Polarity',
      description: 'Investigate how molecular structure affects polarity and understand bond dipoles.',
    },
  ],
  narrative: `## **Chemical Bonding: Molecular Architecture and Properties**

\${citationInline('brown-chemistry-14th', 1)} Chemical bonding represents the attractive forces that hold atoms together in compounds, determining everything from a material's melting point to its electrical conductivity. Understanding bonding enables us to predict molecular shapes, explain why oil and water don't mix, and design materials with specific properties for technological applications.

\${citationInline('pauling-electronegativity', 2)} The **electronegativity difference** between bonding atoms serves as our primary tool for predicting bond type. Electronegativity measures an atom's ability to attract shared electrons, with fluorine being the most electronegative element (4.0) and francium the least (0.7).

### **4.1 Ionic Bonding: Complete Electron Transfer**

\${citationInline('lattice-energy-data', 3)} **Ionic bonding** occurs when electrons transfer completely from metal atoms to nonmetal atoms, creating charged ions held together by electrostatic attraction. This bonding type typically occurs when the electronegativity difference exceeds 1.7.

**Formation Process:**
1. **Metal atoms lose electrons** to achieve noble gas configuration
   - Sodium: Na → Na⁺ + e⁻ (loses 1 electron to achieve neon configuration)
   - Calcium: Ca → Ca²⁺ + 2e⁻ (loses 2 electrons to achieve argon configuration)

2. **Nonmetal atoms gain electrons** to achieve noble gas configuration
   - Chlorine: Cl + e⁻ → Cl⁻ (gains 1 electron to achieve argon configuration)
   - Oxygen: O + 2e⁻ → O²⁻ (gains 2 electrons to achieve neon configuration)

3. **Oppositely charged ions attract** forming ionic compounds
   - NaCl: Na⁺ + Cl⁻ → ionic crystal lattice
   - CaO: Ca²⁺ + O²⁻ → ionic crystal lattice

\${citationInline('ionic-crystal-structure', 4)} **Ionic Compound Properties:**
- **High melting and boiling points**: Strong electrostatic forces require significant energy to overcome
- **Electrical conductivity**: Conduct when molten or dissolved (mobile ions), insulators when solid
- **Solubility patterns**: Generally soluble in polar solvents like water
- **Brittleness**: Crystal structure fractures when layers shift

### **4.2 Covalent Bonding: Electron Sharing for Stability**

\${citationInline('lewis-structure-theory', 5)} **Covalent bonding** involves electron sharing between nonmetal atoms to achieve stable electron configurations. The shared electrons are attracted to the nuclei of both atoms, creating the bond that holds them together.

**Lewis Dot Structures** provide a systematic method for representing covalent bonding:

1. **Count total valence electrons** for all atoms in the molecule
2. **Arrange atoms** with the least electronegative atom (usually) in the center
3. **Connect atoms** with single bonds (each bond = 2 electrons)
4. **Distribute remaining electrons** to satisfy the octet rule
5. **Form multiple bonds** if necessary to complete octets

**Example: Carbon Dioxide (CO₂)**
- Total valence electrons: C(4) + O(6) + O(6) = 16 electrons
- Arrangement: O-C-O (carbon in center)
- Single bonds use 4 electrons, leaving 12 electrons
- Complete octets require double bonds: O=C=O (double bonds give carbon an octet)

### **4.3 Molecular Polarity: Unequal Sharing and Its Consequences**

\${citationInline('pauling-electronegativity', 17)} Not all covalent bonds involve equal electron sharing. **Electronegativity differences** create bond polarity, which combines with molecular geometry to determine overall molecular polarity.

**Bond Polarity Classification**:
- **Nonpolar covalent** (ΔEN < 0.4): Equal sharing between similar atoms
  - Examples: H-H, C-C, C-H bonds
  - Electrons distributed symmetrically
- **Polar covalent** (ΔEN 0.4-1.7): Unequal sharing creates partial charges
  - Examples: O-H, C-O, N-H bonds  
  - More electronegative atom gains δ⁻ charge
  - Less electronegative atom gains δ⁺ charge
- **Ionic character** (ΔEN > 1.7): Essentially complete electron transfer

\${citationInline('nist-electronegativity-data', 18)} **Molecular Polarity Determination:**
1. **Identify all bond polarities** using electronegativity differences
2. **Determine molecular geometry** using VSEPR (Valence Shell Electron Pair Repulsion) theory
3. **Assess vector cancellation** of individual bond dipoles

\${citationInline('gillespie-vsepr', 19)} **VSEPR Theory Predictions:**
- **Electron pairs repel** and adopt geometries that minimize repulsion
- **Bonding and lone pairs** both contribute to molecular shape
- **Lone pairs occupy more space** than bonding pairs, affecting bond angles

\${citationInline('molecular-geometry-data', 20)} **Common Molecular Geometries:**
- **Linear** (2 electron pairs): CO₂, BeCl₂ (180° bond angle)
- **Trigonal planar** (3 electron pairs): BF₃ (120° bond angles)
- **Tetrahedral** (4 electron pairs): CH₄ (109.5° bond angles)
- **Trigonal pyramidal** (4 pairs, 1 lone): NH₃ (107° bond angles)
- **Bent** (4 pairs, 2 lone): H₂O (104.5° bond angle)

### **4.4 Metallic Bonding: The Electron Sea Model**

\${citationInline('ashcroft-solid-state', 21)} **Metallic bonding** occurs between metal atoms through the "electron sea model". Metal atoms contribute their valence electrons to a delocalized electron cloud that moves freely throughout the crystal structure.

**Electron Sea Characteristics:**
- **Delocalized electrons** are not associated with specific atoms
- **Positive metal cations** are held in place by the electron sea
- **Mobile electrons** enable electrical and thermal conductivity
- **Non-directional bonding** allows atoms to pack efficiently

\${citationInline('kittel-solid-state', 22)} **Metallic Properties Explained:**
- **Electrical conductivity**: Mobile electrons carry current easily
- **Thermal conductivity**: Electron movement transfers kinetic energy
- **Malleability and ductility**: Non-directional bonding allows deformation without breaking bonds
- **Metallic luster**: Mobile electrons interact with light waves

### **4.5 Intermolecular Forces: Attractions Between Molecules**

\${citationInline('nist-electrical-properties', 23)} While intramolecular forces (chemical bonds) hold atoms together within molecules, **intermolecular forces (IMFs)** act between separate molecules. These weaker forces significantly influence physical properties like boiling point, viscosity, and solubility.

\${citationInline('materials-science-metals', 24)} **London Dispersion Forces (Van der Waals Forces):**
- **Universal IMF** present in all molecules and atoms
- **Temporary dipoles** arise from instantaneous electron distribution fluctuations
- **Induced dipoles** in neighboring molecules create attractive forces
- **Strength increases** with molecular size and surface area

\${citationInline('london-dispersion-theory', 25)} **Dipole-Dipole Interactions:**
- **Permanent dipoles** in polar molecules align to create attraction
- **Positive end** of one molecule attracts **negative end** of another
- **Strength depends** on dipole magnitude and molecular proximity
- **Only occurs** between polar molecules

\${citationInline('dipole-interaction-data', 26)} **Hydrogen Bonding (Special Dipole-Dipole):**
- **Strongest IMF** involving H bonded to N, O, or F
- **Small hydrogen** allows close approach to lone pairs
- **High electronegativity** of N, O, F creates large dipoles
- **Network formation** in substances like water and DNA

### **4.6 Structure-Property Relationships: Connecting Bonding to Observable Behavior**

\${citationInline('hydrogen-bond-database', 27)} Understanding bonding types and intermolecular forces enables prediction of physical and chemical properties:

**Melting and Boiling Points:**
- **Ionic compounds**: High due to strong electrostatic forces
- **Metallic substances**: Variable, generally high due to electron sea bonding
- **Molecular compounds**: Low to moderate, depending on IMF strength
- **Network covalent**: Very high (diamond, quartz) due to extensive covalent bonding

**Electrical Conductivity:**
- **Metals**: Excellent conductors (mobile electrons)
- **Ionic compounds**: Conduct when molten or dissolved (mobile ions)
- **Molecular compounds**: Generally insulators (localized electrons)
- **Semiconductors**: Intermediate conductivity, temperature dependent

\${citationInline('solubility-theory', 28)} **Solubility Patterns:**
- **"Like dissolves like"**: Polar substances dissolve in polar solvents
- **Ionic compounds**: Generally soluble in polar solvents (water)
- **Nonpolar molecules**: Soluble in nonpolar solvents (oils, hydrocarbons)
- **Hydrogen bonding**: Enhances solubility in water

\${citationInline('electronegativity-scales', 29)} **Mechanical Properties:**
- **Ionic crystals**: Hard but brittle (layer shifting breaks bonds)
- **Metals**: Malleable and ductile (non-directional bonding)
- **Molecular solids**: Soft (weak IMFs between molecules)
- **Network covalent**: Very hard (extensive covalent bonding)

\${bibliography([
  'brown-chemistry-14th',
  'pauling-electronegativity',
  'lattice-energy-data',
  'ionic-crystal-structure',
  'lewis-structure-theory',
  'nist-electronegativity-data',
  'gillespie-vsepr',
  'molecular-geometry-data',
  'dipole-moment-data',
  'ashcroft-solid-state',
  'kittel-solid-state',
  'nist-electrical-properties',
  'materials-science-metals',
  'london-dispersion-theory',
  'dipole-interaction-data',
  'hydrogen-bond-database',
  'solubility-theory',
  'electronegativity-scales',
  'materials-properties-database'
])}`,
  practice: [
    {
      text: '1. **Bonding Prediction**: For each pair of elements, predict the type of bond that will form and explain your reasoning:\n    a) Sodium (Na) and Chlorine (Cl)\n    b) Carbon (C) and Oxygen (O)\n    c) Copper (Cu) and Copper (Cu)\n    d) Hydrogen (H) and Fluorine (F)',
    },
    {
      text: '2. **Lewis Structure Construction**: Draw complete Lewis dot structures for the following molecules. Show all bonding and lone pairs:\n    a) Ammonia (NH₃)\n    b) Carbon dioxide (CO₂)\n    c) Water (H₂O)\n    d) Methane (CH₄)',
    },
    {
      text: '3. **Molecular Polarity Analysis**: For each molecule, determine:\n    - Bond polarities\n    - Molecular geometry (using VSEPR)\n    - Overall molecular polarity\n    \n    Molecules: H₂O, CO₂, NH₃, CCl₄',
    },
    {
      text: '4. **Property Correlation**: Explain the following observations in terms of bonding and intermolecular forces:\n    a) NaCl has a much higher melting point than H₂O\n    b) Copper conducts electricity but sulfur does not\n    c) Oil and water do not mix\n    d) Hydrogen fluoride (HF) has a higher boiling point than hydrogen chloride (HCl)',
    },
    {
      text: '5. **Intermolecular Forces Comparison**: Rank the following substances in order of increasing boiling point and explain your reasoning:\n    - CH₄ (methane)\n    - H₂O (water)\n    - HF (hydrogen fluoride)\n    - Ne (neon)',
    },
  ],
  answers: [
    {
      text: '1. **Bond Type Predictions**:\n    a) **Na-Cl: Ionic** - Large electronegativity difference (3.0 - 0.9 = 2.1), metal + nonmetal\n    b) **C-O: Polar covalent** - Moderate electronegativity difference (3.5 - 2.5 = 1.0), both nonmetals\n    c) **Cu-Cu: Metallic** - Identical atoms, both metals, electron sea bonding\n    d) **H-F: Polar covalent** - Large electronegativity difference (4.0 - 2.1 = 1.9) but both nonmetals',
    },
    {
      text: '2. **Lewis Structures**:\n    a) **NH₃**: N in center with 3 H atoms bonded, 1 lone pair on N\n    b) **CO₂**: Linear O=C=O with 2 lone pairs on each oxygen\n    c) **H₂O**: O in center with 2 H atoms bonded, 2 lone pairs on O\n    d) **CH₄**: C in center with 4 H atoms bonded, no lone pairs\n    \n    **Electron counting verification**: Each structure satisfies octet rule (duet for H)',
    },
    {
      text: '3. **Molecular Polarity Analysis**:\n    • **H₂O**: Polar O-H bonds, bent geometry → **POLAR molecule**\n    • **CO₂**: Polar C=O bonds, linear geometry → **NONPOLAR molecule** (cancellation)\n    • **NH₃**: Polar N-H bonds, trigonal pyramidal → **POLAR molecule**\n    • **CCl₄**: Polar C-Cl bonds, tetrahedral geometry → **NONPOLAR molecule** (symmetry)',
    },
    {
      text: '4. **Property Explanations**:\n    a) **NaCl vs H₂O melting points**: Ionic bonds (787°C) much stronger than hydrogen bonds (0°C)\n    b) **Copper vs sulfur conductivity**: Cu has delocalized electrons (metallic bonding), S has localized electrons (covalent bonding)\n    c) **Oil-water immiscibility**: Oil (nonpolar) cannot form favorable interactions with water (polar)\n    d) **HF vs HCl boiling point**: HF forms hydrogen bonds (strong IMF), HCl only has dipole-dipole forces',
    },
    {
      text: '5. **Boiling Point Ranking** (lowest to highest):\n    **Ne < CH₄ < HF < H₂O**\n    \n    **Reasoning**:\n    • **Ne**: Only weak London dispersion forces (very small atom)\n    • **CH₄**: London dispersion forces only (larger than Ne)\n    • **HF**: Hydrogen bonding but smaller molecule than H₂O\n    • **H₂O**: Strong hydrogen bonding with optimal geometry for maximum H-bond formation',
    },
  ],
};
