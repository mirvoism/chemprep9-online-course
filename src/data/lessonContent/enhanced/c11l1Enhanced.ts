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
  ],
  narrative: `## **Organic Chemistry: Carbon Compounds and Functional Group Analysis**

${citationInline('organic-chemistry-overview', 1)} Organic chemistry encompasses the study of carbon-containing compounds, representing the largest branch of chemistry with over 20 million known compounds. ${citationInline('carbon-bonding-properties', 2)} Carbon's unique bonding properties enable the formation of complex molecular architectures that serve as the foundation for all biological systems and countless synthetic materials.

### **11.1 Carbon: The Foundation of Organic Chemistry**

${citationInline('carbon-electronic-config', 3)} Carbon's exceptional role in organic chemistry stems from its distinctive electronic configuration and bonding capabilities that distinguish it from all other elements in the periodic table.

**Unique Properties of Carbon**
${citationInline('carbon-valence-electrons', 4)} **Carbon's electronic configuration** (1s² 2s² 2p²) provides four valence electrons that can form four strong covalent bonds through sp³, sp², or sp hybridization. This tetrahedral geometry enables diverse molecular architectures.

**Key characteristics enabling organic diversity:**
1. **Tetravalency**: Forms exactly four covalent bonds
2. **Catenation**: Bonds extensively with other carbon atoms
3. **Multiple bonding**: Forms single, double, and triple bonds
4. **Stable bond formation**: Creates strong bonds with H, O, N, S, and halogens
5. **Size compatibility**: Atomic radius allows effective orbital overlap

**Carbon-Carbon Bonding Patterns**
${citationInline('catenation-property', 5)} **Catenation** - carbon's ability to form stable bonds with other carbon atoms - enables the formation of chains, rings, and three-dimensional networks of virtually unlimited size and complexity.

**Structural possibilities:**
- **Linear chains**: Straight-chain hydrocarbons and fatty acids
- **Branched chains**: Isopentane, amino acids, and complex natural products
- **Cyclic structures**: Benzene, steroids, and cyclic sugars
- **Network structures**: Diamond, graphite, and carbon nanotubes

${citationInline('carbon-bond-strength', 6)} The strength of carbon-carbon bonds (346 kJ/mol for C-C, 602 kJ/mol for C=C, 835 kJ/mol for C≡C) provides thermodynamic stability while maintaining sufficient reactivity for synthetic transformations.

### **11.2 Hydrocarbons: The Simplest Organic Compounds**

${citationInline('hydrocarbon-definition', 7)} **Hydrocarbons** contain only carbon and hydrogen atoms and serve as the fundamental building blocks for all other organic compounds. Classification depends on the types of carbon-carbon bonds present.

**Alkanes: Saturated Hydrocarbons**
${citationInline('alkane-definition', 8)} **Alkanes** contain only single carbon-carbon bonds and represent saturated hydrocarbons with the maximum number of hydrogen atoms for a given carbon framework.

**General formula**: CₙH₂ₙ₊₂

**Nomenclature and examples:**
- **Methane**: CH₄ (n=1)
- **Ethane**: C₂H₆ (n=2) 
- **Propane**: C₃H₈ (n=3)
- **Butane**: C₄H₁₀ (n=4)
- **Pentane**: C₅H₁₂ (n=5)

${citationInline('alkane-properties', 9)} **Physical properties of alkanes**:
- Nonpolar molecules with London dispersion forces
- Boiling points increase with molecular size
- Insoluble in water, soluble in nonpolar solvents
- Lower density than water
- Relatively unreactive due to strong C-H and C-C bonds

**Alkenes: Unsaturated Hydrocarbons with Double Bonds**
${citationInline('alkene-definition', 10)} **Alkenes** contain at least one carbon-carbon double bond, making them unsaturated hydrocarbons with increased reactivity compared to alkanes.

**General formula**: CₙH₂ₙ (for one double bond)

**Examples and structures:**
- **Ethene** (ethylene): H₂C=CH₂
- **Propene** (propylene): CH₃CH=CH₂
- **2-Butene**: CH₃CH=CHCH₃

${citationInline('alkene-characteristics', 11)} **Alkene characteristics**:
- Planar geometry around double bond
- Restricted rotation around C=C bond
- Higher reactivity than alkanes
- Undergo addition reactions
- Possibility of geometric isomerism (cis-trans)

**Alkynes: Unsaturated Hydrocarbons with Triple Bonds**
${citationInline('alkyne-definition', 12)} **Alkynes** contain at least one carbon-carbon triple bond, representing the most unsaturated simple hydrocarbons.

**General formula**: CₙH₂ₙ₋₂ (for one triple bond)

**Examples:**
- **Ethyne** (acetylene): HC≡CH
- **Propyne**: HC≡C-CH₃
- **2-Butyne**: CH₃C≡CCH₃

${citationInline('alkyne-properties', 13)} **Alkyne properties**:
- Linear geometry around triple bond
- Highly reactive toward addition reactions
- Terminal alkynes are weakly acidic
- Important in synthetic organic chemistry

### **11.3 Functional Groups: Reactive Centers in Organic Molecules**

${citationInline('functional-group-definition', 14)} **Functional groups** are specific arrangements of atoms that confer characteristic chemical properties and reactivity patterns to organic molecules, regardless of the size or nature of the carbon framework.

**Classification and Nomenclature of Major Functional Groups**

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

**Alcohol Functional Group Chemistry**
${citationInline('alcohol-chemistry', 15)} **Alcohols** contain the hydroxyl (-OH) functional group and exhibit distinctive properties due to hydrogen bonding capabilities.

**Classification by carbon substitution:**
- **Primary (1°)**: R-CH₂-OH (methanol, ethanol)
- **Secondary (2°)**: R₂CH-OH (2-propanol)
- **Tertiary (3°)**: R₃C-OH (2-methyl-2-propanol)

${citationInline('alcohol-reactions', 16)} **Alcohol properties and reactions**:
- Higher boiling points than corresponding alkanes
- Solubility in water decreases with increasing carbon chain length
- Oxidation: 1° → aldehyde → carboxylic acid; 2° → ketone; 3° → no reaction
- Dehydration: Forms alkenes or ethers

**Carbonyl Group Chemistry**
${citationInline('carbonyl-chemistry', 17)} The **carbonyl group** (C=O) appears in aldehydes, ketones, carboxylic acids, and esters, serving as one of the most important functional groups in organic chemistry.

**Aldehydes vs. Ketones:**
- **Aldehydes**: Carbonyl carbon bonded to at least one hydrogen
- **Ketones**: Carbonyl carbon bonded to two carbon atoms
- **Reactivity**: Aldehydes more reactive than ketones due to steric and electronic factors

**Carboxylic Acids and Derivatives**
${citationInline('carboxylic-acid-chemistry', 18)} **Carboxylic acids** contain the carboxyl group (-COOH) and exhibit both acidic and hydrogen-bonding properties.

**Acid strength factors:**
- Resonance stabilization of carboxylate anion
- Inductive effects of nearby electron-withdrawing groups
- Typical pKₐ values around 4-5 for simple carboxylic acids

${citationInline('ester-formation', 19)} **Ester formation and properties**:
- Formed from carboxylic acids and alcohols
- Pleasant, fruity odors characteristic of many natural flavors
- Hydrolysis regenerates parent acid and alcohol
- Important in biological systems (fats, oils, waxes)

### **11.4 Isomerism: Same Formula, Different Structures**

${citationInline('isomer-definition', 20)} **Isomers** are compounds with identical molecular formulas but different structural arrangements, leading to different physical and chemical properties.

**Structural Isomerism**
${citationInline('structural-isomerism', 21)} **Structural isomers** differ in the connectivity of atoms within the molecule.

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

${citationInline('isomer-properties', 22)} **Property differences among isomers**:
- Boiling and melting points
- Solubility characteristics
- Chemical reactivity
- Biological activity

**Stereoisomerism Introduction**
${citationInline('stereoisomerism', 23)} **Stereoisomers** have the same connectivity but different three-dimensional arrangements of atoms in space.

**Geometric isomerism in alkenes:**
- **Cis isomers**: Similar groups on same side of double bond
- **Trans isomers**: Similar groups on opposite sides of double bond
- Requires restricted rotation around C=C bond

${citationInline('chirality-enantiomers', 24)} **Chirality and enantiomers**:
- **Chiral centers**: Carbon atoms bonded to four different groups
- **Enantiomers**: Non-superimposable mirror images
- Identical physical properties except optical rotation
- Often different biological activities

### **11.5 Organic Reaction Types and Mechanisms**

${citationInline('organic-reaction-types', 25)} Organic reactions can be classified into several major categories based on the overall transformation occurring at the molecular level.

**Substitution Reactions**
${citationInline('substitution-reactions', 26)} **Substitution reactions** involve replacement of one atom or group with another, typically occurring in saturated compounds.

**General mechanism**: R-X + Y → R-Y + X

**Example - Halogenation of alkanes**:
CH₄ + Cl₂ → CH₃Cl + HCl

${citationInline('substitution-factors', 27)} **Factors affecting substitution**:
- Bond strength of leaving group
- Nucleophilicity of incoming group
- Steric hindrance around reaction center
- Reaction conditions (temperature, solvent, catalysts)

**Addition Reactions**
${citationInline('addition-reactions', 28)} **Addition reactions** occur when atoms or groups add across multiple bonds, typically C=C or C≡C bonds in unsaturated compounds.

**Hydrogenation example**:
C₂H₄ + H₂ → C₂H₆

**Halogenation example**:
C₂H₄ + Br₂ → C₂H₄Br₂

${citationInline('addition-characteristics', 29)} **Addition reaction characteristics**:
- Convert unsaturated to saturated compounds
- Often exothermic processes
- May require catalysts (hydrogenation)
- Follow Markovnikov's rule for unsymmetrical additions

**Combustion Reactions**
${citationInline('combustion-reactions', 30)} **Combustion** involves reaction with oxygen to produce carbon dioxide and water, representing complete oxidation of organic compounds.

**General combustion equation**:
CₙHₘ + (n + m/4)O₂ → nCO₂ + (m/2)H₂O

**Propane combustion example**:
C₃H₈ + 5O₂ → 3CO₂ + 4H₂O

**Biological and Industrial Organic Reactions**
${citationInline('biological-industrial-reactions', 31)} Several organic reactions have particular importance in biological systems and industrial processes.

**Esterification**:
R-COOH + R'-OH ⇌ R-COO-R' + H₂O
- Reversible condensation reaction
- Forms esters with characteristic odors
- Important in fat and oil formation

**Saponification**:
Fat + 3NaOH → Glycerol + 3 Soap molecules
- Base-catalyzed hydrolysis of fats
- Produces soap and glycerol
- Industrial soap production method

${citationInline('fermentation-reactions', 32)} **Fermentation**:
C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂
- Anaerobic breakdown of sugars
- Enzyme-catalyzed biological process
- Produces ethanol and carbon dioxide

### **11.6 Polymerization: Building Macromolecules**

${citationInline('polymerization-process', 33)} **Polymerization** involves joining many small molecules (monomers) into large macromolecules (polymers) that form the basis of countless materials.

**Addition Polymerization**
${citationInline('addition-polymerization', 34)} **Addition polymerization** occurs when monomers with multiple bonds add together without elimination of small molecules.

**Polyethylene formation**:
nCH₂=CH₂ → -[CH₂-CH₂]ₙ-

**Common addition polymers**:
- **Polyethylene**: Plastic bags, containers
- **Polypropylene**: Carpets, automotive parts
- **Polystyrene**: Disposable cups, insulation
- **PVC**: Pipes, vinyl records

**Condensation Polymerization**
${citationInline('condensation-polymerization', 35)} **Condensation polymerization** involves elimination of small molecules (usually water) during polymer formation.

**Polyester formation**:
nHOOC-R-COOH + nHO-R'-OH → -[OOC-R-COO-R'-O]ₙ- + nH₂O

**Important condensation polymers**:
- **Polyesters**: Clothing fibers, plastic bottles
- **Nylon**: Synthetic fabrics, ropes
- **Proteins**: Biological polymers of amino acids
- **DNA**: Nucleotide polymers storing genetic information

${citationInline('polymer-properties', 36)} **Polymer properties and applications**:
- Molecular weight affects mechanical properties
- Cross-linking determines flexibility and strength
- Crystallinity influences transparency and toughness
- Chemical resistance depends on polymer structure

### **Organic Chemistry in Biological Systems**

**Biomolecules and Life Processes**
${citationInline('biomolecules-overview', 37)} Living organisms utilize four major classes of organic biomolecules, each with specific structural features and biological functions.

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

${citationInline('protein-structure', 38)} **Proteins**:
- Amino acid polymers with 20 different monomers
- Primary structure: Amino acid sequence
- Secondary structure: α-helices and β-sheets
- Tertiary structure: Three-dimensional folding
- Functions: Enzymes, structural support, transport, defense

**Nucleic Acids**:
- DNA: Double helix storing genetic information
- RNA: Single strand involved in protein synthesis
- Nucleotides: Phosphate, sugar, and nitrogenous base units

**Enzyme Catalysis and Metabolic Pathways**
${citationInline('enzyme-catalysis', 39)} **Enzymes** are protein catalysts that accelerate biological reactions by lowering activation energy barriers through specific substrate binding and stabilization of transition states.

**Enzyme characteristics**:
- High specificity for substrate molecules
- Dramatic rate enhancements (10⁶ to 10¹² fold)
- Operate under mild biological conditions
- Regulated by various control mechanisms

${citationInline('metabolic-pathways', 40)} **Metabolic pathways** represent coordinated sequences of enzyme-catalyzed reactions that extract energy from nutrients, synthesize biomolecules, and maintain cellular homeostasis.

### **Industrial Applications of Organic Chemistry**

**Pharmaceutical Chemistry**
${citationInline('pharmaceutical-chemistry', 41)} **Drug discovery and development** relies heavily on organic chemistry principles for designing molecules with specific biological activities and pharmacological properties.

**Structure-activity relationships**:
- Functional groups determine biological activity
- Stereochemistry affects drug efficacy and toxicity
- Molecular size influences bioavailability
- Lipophilicity affects membrane permeation

**Materials Science and Polymer Engineering**
${citationInline('materials-science', 42)} **Advanced materials** development utilizes organic chemistry to create polymers with tailored properties for specific applications.

**High-performance applications**:
- Aerospace composites with carbon fiber reinforcement
- Biomedical implants with biocompatible polymers
- Electronic materials with conducting polymers
- Protective coatings with specialized surface properties

**Green Chemistry and Sustainability**
${citationInline('green-chemistry', 43)} **Green chemistry** principles guide the development of environmentally benign synthetic methods and sustainable chemical processes.

**Sustainable practices**:
- Renewable feedstock utilization
- Atom-efficient reaction design
- Biodegradable polymer development
- Solvent-free synthetic methods
- Catalytic process optimization

${bibliography([
  'organic-chemistry-overview',
  'carbon-bonding-properties',
  'carbon-electronic-config',
  'carbon-valence-electrons',
  'catenation-property',
  'carbon-bond-strength',
  'hydrocarbon-definition',
  'alkane-definition',
  'alkane-properties',
  'alkene-definition',
  'alkene-characteristics',
  'alkyne-definition',
  'alkyne-properties',
  'functional-group-definition',
  'alcohol-chemistry',
  'alcohol-reactions',
  'carbonyl-chemistry',
  'carboxylic-acid-chemistry',
  'ester-formation',
  'isomer-definition',
  'structural-isomerism',
  'isomer-properties',
  'stereoisomerism',
  'chirality-enantiomers',
  'organic-reaction-types',
  'substitution-reactions',
  'substitution-factors',
  'addition-reactions',
  'addition-characteristics',
  'combustion-reactions',
  'biological-industrial-reactions',
  'fermentation-reactions',
  'polymerization-process',
  'addition-polymerization',
  'condensation-polymerization',
  'polymer-properties',
  'biomolecules-overview',
  'protein-structure',
  'enzyme-catalysis',
  'metabolic-pathways',
  'pharmaceutical-chemistry',
  'materials-science',
  'green-chemistry'
])}`,
  practice: [
    {
      text: '1. **Carbon Bonding Analysis**: Explain why carbon can form such diverse compounds:\n    a) Compare carbon\'s bonding capability to silicon (also Group 14)\n    b) Draw the hybridization states (sp³, sp², sp) for carbon\n    c) Calculate the bond energies for C-C, C=C, and C≡C bonds\n    d) Explain how catenation enables polymer formation',
    },
    {
      text: '2. **Hydrocarbon Classification**: For each molecular formula, draw all possible structures and classify:\n    a) C₄H₁₀ (identify all alkane isomers)\n    b) C₄H₈ (identify alkenes and cycloalkanes)\n    c) C₄H₆ (identify alkynes, dienes, and cyclic structures)\n    d) Name each structure using IUPAC nomenclature',
    },
    {
      text: '3. **Functional Group Identification**: Analyze these molecules and identify all functional groups:\n    a) CH₃CH₂COOH (acetic acid)\n    b) CH₃CH(OH)CH₂NH₂ (amino alcohol)\n    c) CH₃COCH₂COOH (keto acid)\n    d) CH₃CH₂OCH₂CH₃ (ether)\n    e) Predict which has the highest boiling point and explain',
    },
    {
      text: '4. **Isomerism Problems**: \n    a) Draw all structural isomers of C₅H₁₂\n    b) Identify which C₄H₈ compounds can show geometric isomerism\n    c) Find the chiral center in 2-bromobutane\n    d) Explain why cis-2-butene and trans-2-butene have different boiling points',
    },
    {
      text: '5. **Organic Reactions**: Complete and classify these reaction types:\n    a) CH₄ + Cl₂ → ? (substitution)\n    b) C₂H₄ + H₂ → ? (addition)\n    c) C₃H₈ + O₂ → ? (combustion)\n    d) nCH₂=CH₂ → ? (polymerization)\n    e) Explain the mechanism for each reaction type',
    },
  ],
  answers: [
    {
      text: '1. **Carbon Bonding Explanations**:\n    a) **Carbon vs. Silicon**: Carbon forms stronger bonds due to smaller size and better orbital overlap. Silicon-silicon bonds are weaker, limiting catenation.\n    b) **Hybridization**: sp³ (tetrahedral, 109.5°), sp² (trigonal planar, 120°), sp (linear, 180°)\n    c) **Bond Energies**: C-C (346 kJ/mol), C=C (602 kJ/mol), C≡C (835 kJ/mol)\n    d) **Catenation**: Enables unlimited chain length for polymer formation through repetitive C-C bonding',
    },
    {
      text: '2. **Hydrocarbon Structure Solutions**:\n    a) **C₄H₁₀**: n-butane (CH₃CH₂CH₂CH₃), isobutane ((CH₃)₃CH)\n    b) **C₄H₈**: 1-butene, 2-butene (cis/trans), isobutene, cyclobutane\n    c) **C₄H₆**: 1-butyne, 2-butyne, 1,3-butadiene, cyclobutene, methylcyclopropene\n    d) **Naming**: Use longest carbon chain, number from end giving lowest numbers to multiple bonds',
    },
    {
      text: '3. **Functional Group Analysis**:\n    a) **CH₃CH₂COOH**: Carboxylic acid group (-COOH)\n    b) **CH₃CH(OH)CH₂NH₂**: Alcohol (-OH) and amine (-NH₂)\n    c) **CH₃COCH₂COOH**: Ketone (C=O) and carboxylic acid (-COOH)\n    d) **CH₃CH₂OCH₂CH₃**: Ether (-O-)\n    e) **Highest bp**: Keto acid due to both hydrogen bonding and dipole interactions',
    },
    {
      text: '4. **Isomerism Solutions**:\n    a) **C₅H₁₂ isomers**: n-pentane, isopentane, neopentane (3 total)\n    b) **C₄H₈ geometric isomers**: 2-butene (cis/trans forms)\n    c) **Chiral center**: C-2 in 2-bromobutane (bonded to H, Br, CH₃, CH₂CH₃)\n    d) **Different bp**: Different molecular shapes affect intermolecular forces',
    },
    {
      text: '5. **Organic Reaction Solutions**:\n    a) **CH₄ + Cl₂ → CH₃Cl + HCl** (radical substitution)\n    b) **C₂H₄ + H₂ → C₂H₆** (catalytic addition)\n    c) **C₃H₈ + 5O₂ → 3CO₂ + 4H₂O** (complete combustion)\n    d) **nCH₂=CH₂ → (-CH₂-CH₂-)ₙ** (addition polymerization)\n    e) **Mechanisms**: Substitution (radical), addition (electrophilic), combustion (oxidation), polymerization (chain growth)',
    },
  ],
};
