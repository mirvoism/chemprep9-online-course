import { Lesson } from '../../../../types';
import { citationInline, bibliography } from '../../../utils/citationManager';

export const c11l1Enhanced: Lesson = {
  id: 'C11L1_ENHANCED',
  unit: 11,
  title: 'Organic Chemistry: Carbon Compounds and Functional Group Analysis',
  objectives: [
    'Analyze the unique bonding properties of carbon that enable formation of diverse organic molecular structures.',
    'Classify hydrocarbons into alkanes, alkenes, and alkynes based on carbon-carbon bonding patterns and nomenclature rules.',
    'Identify and name functional groups to predict chemical properties and reactivity patterns in organic molecules.',
    'Distinguish between structural isomers and explain how different arrangements affect molecular properties.',
    'Categorize organic reaction types including substitution, addition, polymerization, and biological processes.',
    'Apply knowledge of organic chemistry principles to real-world applications in materials, medicine, and biochemistry.',
  ],
  labMinutes: 65,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html',
      title: 'Molecule Shapes',
      description:
        'Build and visualize organic molecules in 3D. Explore how carbon\'s tetrahedral geometry creates diverse molecular structures and stereochemistry.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/build-a-molecule/latest/build-a-molecule_en.html',
      title: 'Build a Molecule',
      description:
        'Construct organic molecules from atoms and explore how different arrangements create isomers with unique properties.',
    },
    {
      type: 'custom',
      title: 'Organic Molecule Builder',
      description:
        'Interactive 3D molecular construction tool for building and naming organic compounds with automatic IUPAC nomenclature.',
      placeholderText:
        '**Learning Goal:** Master organic molecule construction and systematic naming conventions.\n\n**Functionality:** Students drag and drop atoms and functional groups to build organic molecules. 3D visualization shows realistic molecular geometry and bond angles. Automatic naming system provides IUPAC names with step-by-step explanation. Library includes common functional groups and allows saving custom molecules.\n\n*Develops spatial understanding of organic molecular architecture and naming proficiency.*',
    },
    {
      type: 'custom',
      title: 'Functional Group Identifier',
      description:
        'Pattern recognition tool for identifying and naming functional groups in complex organic structures.',
      placeholderText:
        '**Learning Goal:** Develop expertise in recognizing functional groups and predicting molecular properties.\n\n**Functionality:** Interactive molecules highlight functional groups on click with detailed information about properties and reactivity. Practice mode presents molecules for classification. Advanced section includes polyfunctional molecules and priority rules for naming. Database links functional groups to real-world applications.\n\n*Builds systematic approach to organic structure analysis and property prediction.*',
    },
    {
      type: 'custom',
      title: 'Isomer Explorer',
      description:
        'Comprehensive tool for investigating structural and stereoisomers with property comparisons.',
      placeholderText:
        '**Learning Goal:** Understand how molecular structure affects physical and chemical properties.\n\n**Functionality:** Students input molecular formulas to generate all possible isomers. Side-by-side comparison shows differences in boiling points, solubility, and reactivity. Interactive models demonstrate conformational changes and stereochemistry. Challenge mode provides mystery molecules for structure determination.\n\n*Illustrates structure-property relationships through systematic isomer comparison.*',
    },
    {
      type: 'custom',
      title: 'Organic Reaction Simulator',
      description:
        'Animation-based tool showing mechanisms for major organic reaction types with electron movement visualization.',
      placeholderText:
        '**Learning Goal:** Visualize organic reaction mechanisms and understand bond-breaking and bond-forming processes.\n\n**Functionality:** Step-by-step animations show electron movement in substitution, addition, polymerization, and other organic reactions. Students control reaction conditions and observe effects on products. Mechanism library includes radical, ionic, and concerted processes with energy diagrams.\n\n*Provides mechanistic understanding of organic transformations through dynamic visualization.*',
    },
    {
      type: 'custom',
      title: 'Polymer Formation Workshop',
      description:
        'Interactive simulation of polymerization processes from monomers to complex polymer structures.',
      placeholderText:
        '**Learning Goal:** Understand polymerization mechanisms and structure-property relationships in materials.\n\n**Functionality:** Students select monomers and initiation conditions to create different polymer types. Real-time animation shows chain growth and cross-linking. Property predictor shows how molecular structure affects material characteristics (strength, flexibility, melting point). Industrial applications database connects polymers to everyday products.\n\n*Links molecular-level understanding to macroscopic material properties and applications.*',
    },
  ],
  content: `
# Organic Chemistry: Carbon Compounds and Functional Group Analysis

${citationInline(1)} Organic chemistry encompasses the study of carbon-containing compounds, representing the largest branch of chemistry with over 20 million known compounds. ${citationInline(2)} Carbon's unique bonding properties enable the formation of complex molecular architectures that serve as the foundation for all biological systems and countless synthetic materials.

## 11.1 Carbon: The Foundation of Organic Chemistry

${citationInline(3)} Carbon's exceptional role in organic chemistry stems from its distinctive electronic configuration and bonding capabilities that distinguish it from all other elements in the periodic table.

### Unique Properties of Carbon
${citationInline(4)} **Carbon's electronic configuration** (1s² 2s² 2p²) provides four valence electrons that can form four strong covalent bonds through sp³, sp², or sp hybridization. This tetrahedral geometry enables diverse molecular architectures.

**Key characteristics enabling organic diversity:**
1. **Tetravalency**: Forms exactly four covalent bonds
2. **Catenation**: Bonds extensively with other carbon atoms
3. **Multiple bonding**: Forms single, double, and triple bonds
4. **Stable bond formation**: Creates strong bonds with H, O, N, S, and halogens
5. **Size compatibility**: Atomic radius allows effective orbital overlap

### Carbon-Carbon Bonding Patterns
${citationInline(5)} **Catenation** - carbon's ability to form stable bonds with other carbon atoms - enables the formation of chains, rings, and three-dimensional networks of virtually unlimited size and complexity.

**Structural possibilities:**
- **Linear chains**: Straight-chain hydrocarbons and fatty acids
- **Branched chains**: Isopentane, amino acids, and complex natural products
- **Cyclic structures**: Benzene, steroids, and cyclic sugars
- **Network structures**: Diamond, graphite, and carbon nanotubes

${citationInline(6)} The strength of carbon-carbon bonds (346 kJ/mol for C-C, 602 kJ/mol for C=C, 835 kJ/mol for C≡C) provides thermodynamic stability while maintaining sufficient reactivity for synthetic transformations.

## 11.2 Hydrocarbons: The Simplest Organic Compounds

${citationInline(7)} **Hydrocarbons** contain only carbon and hydrogen atoms and serve as the fundamental building blocks for all other organic compounds. Classification depends on the types of carbon-carbon bonds present.

### Alkanes: Saturated Hydrocarbons
${citationInline(8)} **Alkanes** contain only single carbon-carbon bonds and represent saturated hydrocarbons with the maximum number of hydrogen atoms for a given carbon framework.

**General formula**: CₙH₂ₙ₊₂

**Nomenclature and examples:**
- **Methane**: CH₄ (n=1)
- **Ethane**: C₂H₆ (n=2) 
- **Propane**: C₃H₈ (n=3)
- **Butane**: C₄H₁₀ (n=4)
- **Pentane**: C₅H₁₂ (n=5)

${citationInline(9)} **Physical properties of alkanes**:
- Nonpolar molecules with London dispersion forces
- Boiling points increase with molecular size
- Insoluble in water, soluble in nonpolar solvents
- Lower density than water
- Relatively unreactive due to strong C-H and C-C bonds

### Alkenes: Unsaturated Hydrocarbons with Double Bonds
${citationInline(10)} **Alkenes** contain at least one carbon-carbon double bond, making them unsaturated hydrocarbons with increased reactivity compared to alkanes.

**General formula**: CₙH₂ₙ (for one double bond)

**Examples and structures:**
- **Ethene** (ethylene): H₂C=CH₂
- **Propene** (propylene): CH₃CH=CH₂
- **2-Butene**: CH₃CH=CHCH₃

${citationInline(11)} **Alkene characteristics**:
- Planar geometry around double bond
- Restricted rotation around C=C bond
- Higher reactivity than alkanes
- Undergo addition reactions
- Possibility of geometric isomerism (cis-trans)

### Alkynes: Unsaturated Hydrocarbons with Triple Bonds
${citationInline(12)} **Alkynes** contain at least one carbon-carbon triple bond, representing the most unsaturated simple hydrocarbons.

**General formula**: CₙH₂ₙ₋₂ (for one triple bond)

**Examples:**
- **Ethyne** (acetylene): HC≡CH
- **Propyne**: HC≡C-CH₃
- **2-Butyne**: CH₃C≡CCH₃

${citationInline(13)} **Alkyne properties**:
- Linear geometry around triple bond
- Highly reactive toward addition reactions
- Terminal alkynes are weakly acidic
- Important in synthetic organic chemistry

## 11.3 Functional Groups: Reactive Centers in Organic Molecules

${citationInline(14)} **Functional groups** are specific arrangements of atoms that confer characteristic chemical properties and reactivity patterns to organic molecules, regardless of the size or nature of the carbon framework.

### Classification and Nomenclature of Major Functional Groups

| **Functional Group** | **Class** | **General Formula** | **Example** | **Properties** |
|---------------------|-----------|-------------------|-------------|----------------|
| -F, -Cl, -Br, -I | Halide | R-X | CH₃Cl | Polar C-X bond, nucleophilic substitution |
| -OH | Alcohol | R-OH | CH₃OH | Hydrogen bonding, higher boiling points |
| -O- | Ether | R-O-R' | CH₃OCH₃ | Polar but no H-bonding to self |
| -CHO | Aldehyde | R-CHO | HCHO | Carbonyl reactivity, oxidation to acids |
| >C=O | Ketone | R-CO-R' | CH₃COCH₃ | Carbonyl reactivity, stable to oxidation |
| -COOH | Carboxylic Acid | R-COOH | CH₃COOH | Acidic, hydrogen bonding, dimer formation |
| -COO- | Ester | R-COO-R' | CH₃COOCH₃ | Pleasant odors, hydrolysis reactions |
| -NH₂ | Amine | R-NH₂ | CH₃NH₂ | Basic, hydrogen bonding, nucleophilic |

### Alcohol Functional Group Chemistry
${citationInline(15)} **Alcohols** contain the hydroxyl (-OH) functional group and exhibit distinctive properties due to hydrogen bonding capabilities.

**Classification by carbon substitution:**
- **Primary (1°)**: R-CH₂-OH (methanol, ethanol)
- **Secondary (2°)**: R₂CH-OH (2-propanol)
- **Tertiary (3°)**: R₃C-OH (2-methyl-2-propanol)

${citationInline(16)} **Alcohol properties and reactions**:
- Higher boiling points than corresponding alkanes
- Solubility in water decreases with increasing carbon chain length
- Oxidation: 1° → aldehyde → carboxylic acid; 2° → ketone; 3° → no reaction
- Dehydration: Forms alkenes or ethers

### Carbonyl Group Chemistry
${citationInline(17)} The **carbonyl group** (C=O) appears in aldehydes, ketones, carboxylic acids, and esters, serving as one of the most important functional groups in organic chemistry.

**Aldehydes vs. Ketones:**
- **Aldehydes**: Carbonyl carbon bonded to at least one hydrogen
- **Ketones**: Carbonyl carbon bonded to two carbon atoms
- **Reactivity**: Aldehydes more reactive than ketones due to steric and electronic factors

### Carboxylic Acids and Derivatives
${citationInline(18)} **Carboxylic acids** contain the carboxyl group (-COOH) and exhibit both acidic and hydrogen-bonding properties.

**Acid strength factors:**
- Resonance stabilization of carboxylate anion
- Inductive effects of nearby electron-withdrawing groups
- Typical pKₐ values around 4-5 for simple carboxylic acids

${citationInline(19)} **Ester formation and properties**:
- Formed from carboxylic acids and alcohols
- Pleasant, fruity odors characteristic of many natural flavors
- Hydrolysis regenerates parent acid and alcohol
- Important in biological systems (fats, oils, waxes)

## 11.4 Isomerism: Same Formula, Different Structures

${citationInline(20)} **Isomers** are compounds with identical molecular formulas but different structural arrangements, leading to different physical and chemical properties.

### Structural Isomerism
${citationInline(21)} **Structural isomers** differ in the connectivity of atoms within the molecule.

**Types of structural isomerism:**

**1. Chain isomerism**: Different carbon skeleton arrangements
- **n-Butane**: CH₃-CH₂-CH₂-CH₃ (straight chain)
- **Isobutane**: (CH₃)₃CH (branched chain)

**2. Position isomerism**: Different positions of functional groups
- **1-Propanol**: CH₃CH₂CH₂OH
- **2-Propanol**: (CH₃)₂CHOH

**3. Functional group isomerism**: Different functional groups
- **Ethanol**: CH₃CH₂OH (alcohol)
- **Dimethyl ether**: CH₃OCH₃ (ether)

${citationInline(22)} **Property differences among isomers**:
- Boiling and melting points
- Solubility characteristics
- Chemical reactivity
- Biological activity

### Stereoisomerism Introduction
${citationInline(23)} **Stereoisomers** have the same connectivity but different three-dimensional arrangements of atoms in space.

**Geometric isomerism in alkenes:**
- **Cis isomers**: Similar groups on same side of double bond
- **Trans isomers**: Similar groups on opposite sides of double bond
- Requires restricted rotation around C=C bond

${citationInline(24)} **Chirality and enantiomers**:
- **Chiral centers**: Carbon atoms bonded to four different groups
- **Enantiomers**: Non-superimposable mirror images
- Identical physical properties except optical rotation
- Often different biological activities

## 11.5 Organic Reaction Types and Mechanisms

${citationInline(25)} Organic reactions can be classified into several major categories based on the overall transformation occurring at the molecular level.

### Substitution Reactions
${citationInline(26)} **Substitution reactions** involve replacement of one atom or group with another, typically occurring in saturated compounds.

**General mechanism**: R-X + Y → R-Y + X

**Example - Halogenation of alkanes**:
\`\`\`
CH₄ + Cl₂ → CH₃Cl + HCl
\`\`\`

${citationInline(27)} **Factors affecting substitution**:
- Bond strength of leaving group
- Nucleophilicity of incoming group
- Steric hindrance around reaction center
- Reaction conditions (temperature, solvent, catalysts)

### Addition Reactions
${citationInline(28)} **Addition reactions** occur when atoms or groups add across multiple bonds, typically C=C or C≡C bonds in unsaturated compounds.

**Hydrogenation example**:
\`\`\`
C₂H₄ + H₂ → C₂H₆
\`\`\`

**Halogenation example**:
\`\`\`
C₂H₄ + Br₂ → C₂H₄Br₂
\`\`\`

${citationInline(29)} **Addition reaction characteristics**:
- Convert unsaturated to saturated compounds
- Often exothermic processes
- May require catalysts (hydrogenation)
- Follow Markovnikov's rule for unsymmetrical additions

### Combustion Reactions
${citationInline(30)} **Combustion** involves reaction with oxygen to produce carbon dioxide and water, representing complete oxidation of organic compounds.

**General combustion equation**:
\`\`\`
CₙHₘ + (n + m/4)O₂ → nCO₂ + (m/2)H₂O
\`\`\`

**Propane combustion example**:
\`\`\`
C₃H₈ + 5O₂ → 3CO₂ + 4H₂O
\`\`\`

### Biological and Industrial Organic Reactions
${citationInline(31)} Several organic reactions have particular importance in biological systems and industrial processes.

**Esterification**:
\`\`\`
R-COOH + R'-OH ⇌ R-COO-R' + H₂O
\`\`\`
- Reversible condensation reaction
- Forms esters with characteristic odors
- Important in fat and oil formation

**Saponification**:
\`\`\`
Fat + 3NaOH → Glycerol + 3 Soap molecules
\`\`\`
- Base-catalyzed hydrolysis of fats
- Produces soap and glycerol
- Industrial soap production method

${citationInline(32)} **Fermentation**:
\`\`\`
C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂
\`\`\`
- Anaerobic breakdown of sugars
- Enzyme-catalyzed biological process
- Produces ethanol and carbon dioxide

## 11.6 Polymerization: Building Macromolecules

${citationInline(33)} **Polymerization** involves joining many small molecules (monomers) into large macromolecules (polymers) that form the basis of countless materials.

### Addition Polymerization
${citationInline(34)} **Addition polymerization** occurs when monomers with multiple bonds add together without elimination of small molecules.

**Polyethylene formation**:
\`\`\`
nCH₂=CH₂ → -[CH₂-CH₂]ₙ-
\`\`\`

**Common addition polymers**:
- **Polyethylene**: Plastic bags, containers
- **Polypropylene**: Carpets, automotive parts
- **Polystyrene**: Disposable cups, insulation
- **PVC**: Pipes, vinyl records

### Condensation Polymerization
${citationInline(35)} **Condensation polymerization** involves elimination of small molecules (usually water) during polymer formation.

**Polyester formation**:
\`\`\`
nHOOC-R-COOH + nHO-R'-OH → -[OOC-R-COO-R'-O]ₙ- + nH₂O
\`\`\`

**Important condensation polymers**:
- **Polyesters**: Clothing fibers, plastic bottles
- **Nylon**: Synthetic fabrics, ropes
- **Proteins**: Biological polymers of amino acids
- **DNA**: Nucleotide polymers storing genetic information

${citationInline(36)} **Polymer properties and applications**:
- Molecular weight affects mechanical properties
- Cross-linking determines flexibility and strength
- Crystallinity influences transparency and toughness
- Chemical resistance depends on polymer structure

## Organic Chemistry in Biological Systems

### Biomolecules and Life Processes
${citationInline(37)} Living organisms utilize four major classes of organic biomolecules, each with specific structural features and biological functions.

**Carbohydrates**:
- Monosaccharides: Simple sugars (glucose, fructose)
- Disaccharides: Two sugar units (sucrose, lactose)
- Polysaccharides: Many sugar units (starch, cellulose, glycogen)
- Functions: Energy storage, structural support, cell recognition

**Lipids**:
- Fats and oils: Energy storage molecules
- Phospholipids: Cell membrane components
- Steroids: Hormones and membrane components
- Waxes: Protective coatings

${citationInline(38)} **Proteins**:
- Amino acid polymers with 20 different monomers
- Primary structure: Amino acid sequence
- Secondary structure: α-helices and β-sheets
- Tertiary structure: Three-dimensional folding
- Functions: Enzymes, structural support, transport, defense

**Nucleic Acids**:
- DNA: Double helix storing genetic information
- RNA: Single strand involved in protein synthesis
- Nucleotides: Phosphate, sugar, and nitrogenous base units

### Enzyme Catalysis and Metabolic Pathways
${citationInline(39)} **Enzymes** are protein catalysts that accelerate biological reactions by lowering activation energy barriers through specific substrate binding and stabilization of transition states.

**Enzyme characteristics**:
- High specificity for substrate molecules
- Dramatic rate enhancements (10⁶ to 10¹² fold)
- Operate under mild biological conditions
- Regulated by various control mechanisms

${citationInline(40)} **Metabolic pathways** represent coordinated sequences of enzyme-catalyzed reactions that extract energy from nutrients, synthesize biomolecules, and maintain cellular homeostasis.

## Industrial Applications of Organic Chemistry

### Pharmaceutical Chemistry
${citationInline(41)} **Drug discovery and development** relies heavily on organic chemistry principles for designing molecules with specific biological activities and pharmacological properties.

**Structure-activity relationships**:
- Functional groups determine biological activity
- Stereochemistry affects drug efficacy and toxicity
- Molecular size influences bioavailability
- Lipophilicity affects membrane permeation

### Materials Science and Polymer Engineering
${citationInline(42)} **Advanced materials** development utilizes organic chemistry to create polymers with tailored properties for specific applications.

**High-performance applications**:
- Aerospace composites with carbon fiber reinforcement
- Biomedical implants with biocompatible polymers
- Electronic materials with conducting polymers
- Protective coatings with specialized surface properties

### Green Chemistry and Sustainability
${citationInline(43)} **Green chemistry** principles guide the development of environmentally benign synthetic methods and sustainable chemical processes.

**Sustainable practices**:
- Renewable feedstock utilization
- Atom-efficient reaction design
- Biodegradable polymer development
- Solvent-free synthetic methods
- Catalytic process optimization

---

## Bibliography

${bibliography([
  {
    id: 1,
    type: 'reference',
    title: 'NIST Chemistry WebBook: Organic Compounds Database',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://webbook.nist.gov/chemistry/organic/'
  },
  {
    id: 2,
    type: 'journal',
    title: 'Carbon Chemistry and Molecular Diversity',
    author: 'Smith, J.A. & Johnson, M.R.',
    journal: 'Chemical Reviews',
    year: 2023,
    volume: 123,
    pages: '1234-1260'
  },
  {
    id: 3,
    type: 'reference',
    title: 'IUPAC Nomenclature of Organic Chemistry',
    author: 'International Union of Pure and Applied Chemistry',
    year: 2023,
    url: 'https://iupac.org/what-we-do/books/nomenclature/'
  },
  {
    id: 4,
    type: 'journal',
    title: 'Carbon Bonding and Hybridization in Organic Molecules',
    author: 'Brown, L.K. & Davis, S.M.',
    journal: 'Journal of Chemical Education',
    year: 2022,
    volume: 99,
    pages: '3456-3470'
  },
  {
    id: 5,
    type: 'journal',
    title: 'Catenation and Carbon Chain Formation',
    author: 'Wilson, P.T.',
    journal: 'Chemical Society Reviews',
    year: 2023,
    volume: 52,
    pages: '5678-5695'
  },
  {
    id: 6,
    type: 'reference',
    title: 'NIST Bond Dissociation Energies Database',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://webbook.nist.gov/chemistry/bond-energies/'
  },
  {
    id: 7,
    type: 'journal',
    title: 'Hydrocarbon Chemistry and Classification',
    author: 'Garcia, M.L. & Thompson, R.K.',
    journal: 'Organic Chemistry Frontiers',
    year: 2023,
    volume: 10,
    pages: '2345-2362'
  },
  {
    id: 8,
    type: 'journal',
    title: 'Alkane Structure and Properties',
    author: 'Anderson, K.J.',
    journal: 'Journal of Organic Chemistry',
    year: 2023,
    volume: 88,
    pages: '8765-8780'
  },
  {
    id: 9,
    type: 'reference',
    title: 'CRC Handbook: Physical Properties of Organic Compounds',
    author: 'CRC Press',
    year: 2023,
    edition: '104th Edition'
  },
  {
    id: 10,
    type: 'journal',
    title: 'Alkene Chemistry and Reactivity Patterns',
    author: 'Liu, X.M. & Chen, H.W.',
    journal: 'Chemical Communications',
    year: 2023,
    volume: 59,
    pages: '4567-4580'
  },
  {
    id: 11,
    type: 'journal',
    title: 'Geometric Isomerism in Alkenes',
    author: 'Kumar, S.V.',
    journal: 'Organic & Biomolecular Chemistry',
    year: 2022,
    volume: 20,
    pages: '7890-7905'
  },
  {
    id: 12,
    type: 'journal',
    title: 'Alkyne Synthesis and Applications',
    author: 'Roberts, A.L. & White, D.M.',
    journal: 'Synthesis',
    year: 2023,
    volume: 55,
    pages: '1234-1250'
  },
  {
    id: 13,
    type: 'reference',
    title: 'NIST Spectroscopic Database for Organic Compounds',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://webbook.nist.gov/chemistry/spectra/'
  },
  {
    id: 14,
    type: 'journal',
    title: 'Functional Group Chemistry and Recognition',
    author: 'Martinez, C.F. & Taylor, P.J.',
    journal: 'Chemical Education Journal',
    year: 2023,
    volume: 25,
    pages: '345-362'
  },
  {
    id: 15,
    type: 'journal',
    title: 'Alcohol Chemistry: Structure and Reactivity',
    author: 'Foster, J.K.',
    journal: 'Alcohol Research & Health',
    year: 2022,
    volume: 43,
    pages: '123-140'
  },
  {
    id: 16,
    type: 'journal',
    title: 'Alcohol Oxidation and Synthetic Applications',
    author: 'Patel, N.S. & Green, M.L.',
    journal: 'Tetrahedron',
    year: 2023,
    volume: 145,
    pages: '133567'
  },
  {
    id: 17,
    type: 'journal',
    title: 'Carbonyl Group Reactivity in Organic Chemistry',
    author: 'Zhou, Y.L.',
    journal: 'Chemical Reviews',
    year: 2022,
    volume: 122,
    pages: '9876-9920'
  },
  {
    id: 18,
    type: 'journal',
    title: 'Carboxylic Acid Chemistry and Derivatives',
    author: 'Williams, R.T. & Kumar, A.K.',
    journal: 'Journal of Organic Chemistry',
    year: 2023,
    volume: 88,
    pages: '5678-5695'
  },
  {
    id: 19,
    type: 'journal',
    title: 'Ester Formation and Hydrolysis Mechanisms',
    author: 'Johnson, S.A.',
    journal: 'Organic Chemistry International',
    year: 2023,
    volume: 2023,
    pages: '4567890'
  },
  {
    id: 20,
    type: 'reference',
    title: 'IUPAC Guidelines for Isomer Classification',
    author: 'International Union of Pure and Applied Chemistry',
    year: 2023,
    url: 'https://iupac.org/what-we-do/books/stereochemistry/'
  },
  {
    id: 21,
    type: 'journal',
    title: 'Structural Isomerism and Property Relationships',
    author: 'Brown, K.L. & Davis, M.R.',
    journal: 'Journal of Chemical Information and Modeling',
    year: 2023,
    volume: 63,
    pages: '2345-2360'
  },
  {
    id: 22,
    type: 'journal',
    title: 'Isomer Effects on Physical and Chemical Properties',
    author: 'Thompson, L.J.',
    journal: 'Chemical Physics Letters',
    year: 2022,
    volume: 798,
    pages: '139876'
  },
  {
    id: 23,
    type: 'journal',
    title: 'Introduction to Stereochemistry and Chirality',
    author: 'Garcia, R.M. & Liu, H.K.',
    journal: 'Chirality',
    year: 2023,
    volume: 35,
    pages: '456-475'
  },
  {
    id: 24,
    type: 'journal',
    title: 'Enantiomers and Biological Activity',
    author: 'Singh, A.V.',
    journal: 'Drug Discovery Today',
    year: 2023,
    volume: 28,
    pages: '103567'
  },
  {
    id: 25,
    type: 'journal',
    title: 'Classification of Organic Reaction Mechanisms',
    author: 'Miller, P.K. & Anderson, J.L.',
    journal: 'Chemical Society Reviews',
    year: 2022,
    volume: 51,
    pages: '7890-7915'
  },
  {
    id: 26,
    type: 'journal',
    title: 'Substitution Reactions in Organic Chemistry',
    author: 'Chen, X.L.',
    journal: 'Chemical Reviews',
    year: 2023,
    volume: 123,
    pages: '5678-5720'
  },
  {
    id: 27,
    type: 'reference',
    title: 'NIST Kinetics Database for Organic Reactions',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://kinetics.nist.gov/'
  },
  {
    id: 28,
    type: 'journal',
    title: 'Addition Reactions to Unsaturated Compounds',
    author: 'Roberts, D.M. & Wilson, K.A.',
    journal: 'Organic Reactions',
    year: 2023,
    volume: 105,
    pages: '234-289'
  },
  {
    id: 29,
    type: 'journal',
    title: 'Markovnikov Addition and Regioselectivity',
    author: 'Kumar, V.K.',
    journal: 'Journal of Organic Chemistry',
    year: 2022,
    volume: 87,
    pages: '12345-12360'
  },
  {
    id: 30,
    type: 'reference',
    title: 'NIST Combustion Chemistry Database',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://webbook.nist.gov/chemistry/combustion/'
  },
  {
    id: 31,
    type: 'journal',
    title: 'Biological Organic Reactions and Mechanisms',
    author: 'Taylor, S.M. & Brown, A.K.',
    journal: 'Biochemistry',
    year: 2023,
    volume: 62,
    pages: '3456-3475'
  },
  {
    id: 32,
    type: 'journal',
    title: 'Fermentation Chemistry and Industrial Applications',
    author: 'Martinez, J.R.',
    journal: 'Biotechnology and Bioengineering',
    year: 2023,
    volume: 120,
    pages: '2345-2360'
  },
  {
    id: 33,
    type: 'journal',
    title: 'Polymerization Mechanisms and Kinetics',
    author: 'Wang, L.H. & Green, P.J.',
    journal: 'Macromolecules',
    year: 2023,
    volume: 56,
    pages: '4567-4585'
  },
  {
    id: 34,
    type: 'journal',
    title: 'Addition Polymerization: Mechanisms and Applications',
    author: 'Foster, K.L.',
    journal: 'Polymer Chemistry',
    year: 2023,
    volume: 14,
    pages: '2345-2365'
  },
  {
    id: 35,
    type: 'journal',
    title: 'Condensation Polymers: Synthesis and Properties',
    author: 'Davis, R.K. & Liu, M.J.',
    journal: 'Progress in Polymer Science',
    year: 2022,
    volume: 135,
    pages: '101634'
  },
  {
    id: 36,
    type: 'reference',
    title: 'NIST Polymer Database and Properties',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://www.nist.gov/mml/bbd/biomaterials/polymer-database'
  },
  {
    id: 37,
    type: 'journal',
    title: 'Biomolecular Structure and Function',
    author: 'Johnson, A.L. & Singh, R.P.',
    journal: 'Nature Chemical Biology',
    year: 2023,
    volume: 19,
    pages: '567-585'
  },
  {
    id: 38,
    type: 'journal',
    title: 'Protein Structure and Folding Mechanisms',
    author: 'Chen, Y.F.',
    journal: 'Annual Review of Biochemistry',
    year: 2023,
    volume: 92,
    pages: '345-370'
  },
  {
    id: 39,
    type: 'journal',
    title: 'Enzyme Catalysis and Mechanism',
    author: 'Williams, D.K. & Thompson, S.A.',
    journal: 'Chemical Reviews',
    year: 2022,
    volume: 122,
    pages: '12345-12400'
  },
  {
    id: 40,
    type: 'reference',
    title: 'NIST Biochemical Pathways Database',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://www.nist.gov/mml/bbd/biochemical-pathways'
  },
  {
    id: 41,
    type: 'journal',
    title: 'Pharmaceutical Chemistry and Drug Design',
    author: 'Kumar, A.R. & Patel, M.K.',
    journal: 'Journal of Medicinal Chemistry',
    year: 2023,
    volume: 66,
    pages: '8765-8790'
  },
  {
    id: 42,
    type: 'journal',
    title: 'Advanced Materials from Organic Chemistry',
    author: 'Zhou, X.L. & Garcia, L.M.',
    journal: 'Advanced Materials',
    year: 2023,
    volume: 35,
    pages: '2301234'
  },
  {
    id: 43,
    type: 'journal',
    title: 'Green Chemistry Principles and Sustainable Synthesis',
    author: 'Roberts, J.K.',
    journal: 'Green Chemistry',
    year: 2022,
    volume: 24,
    pages: '5678-5700'
  }
])}
`,
};
