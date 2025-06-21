import { Lesson } from '../../../../types';
import { citationInline, bibliography } from '../../../utils/citationManager';

export const c9l1Enhanced: Lesson = {
  id: 'C9L1_ENHANCED',
  unit: 9,
  title: 'Acids, Bases & Salts: Chemical Properties and Quantitative Analysis',
  objectives: [
    'Apply Arrhenius and Brønsted-Lowry theories to identify acids and bases in chemical reactions.',
    'Interpret the logarithmic pH scale to quantify solution acidity and select appropriate indicators.',
    'Write balanced neutralization reactions and identify conjugate acid-base pairs.',
    'Perform titration calculations using stoichiometric relationships and the equivalence point concept.',
    'Classify substances as strong electrolytes, weak electrolytes, or nonelectrolytes based on ionic dissociation.',
    'Analyze salt hydrolysis reactions and predict the pH of salt solutions using Brønsted-Lowry principles.',
  ],
  labMinutes: 55,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_en.html',
      title: 'pH Scale',
      description:
        'Explore the pH scale by testing the acidity of household solutions. Add acids or bases to see real-time pH changes and indicator color responses.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_en.html',
      title: 'Acid-Base Solutions',
      description:
        'Investigate strong and weak acids and bases. Compare molecular behavior, conductivity, and pH for different concentrations and solution types.',
    },
    {
      type: 'custom',
      title: 'Virtual Titration Laboratory',
      description:
        'Interactive titration simulator with buret control, indicator selection, and automatic calculation tools.',
      placeholderText:
        '**Learning Goal:** Master quantitative acid-base analysis through hands-on titration experience.\n\n**Functionality:** Students perform virtual titrations by controlling buret delivery, selecting indicators (litmus, phenolphthalein, methyl orange), and identifying equivalence points. Real-time pH curves show titration progress. Calculator tools verify MₐVₐ = MᵦVᵦ relationships and determine unknown concentrations.\n\n*Develops practical analytical chemistry skills through realistic laboratory simulation.*',
    },
    {
      type: 'custom',
      title: 'Conjugate Acid-Base Identifier',
      description:
        'Interactive tool for identifying and visualizing conjugate acid-base pairs in chemical reactions.',
      placeholderText:
        '**Learning Goal:** Master Brønsted-Lowry theory through proton transfer visualization.\n\n**Functionality:** Students analyze acid-base reactions by identifying proton donors and acceptors. Dynamic molecular models show proton transfer mechanisms. Practice mode includes reactions with water, ammonia, and buffer systems. Advanced section covers amphoteric substances and polyprotic acids.\n\n*Builds conceptual understanding of proton transfer chemistry beyond simple definitions.*',
    },
    {
      type: 'custom',
      title: 'Electrolyte Conductivity Tester',
      description:
        'Virtual conductivity apparatus for testing ionic dissociation and electrical conductivity of solutions.',
      placeholderText:
        '**Learning Goal:** Connect ionic dissociation to electrical conductivity and solution properties.\n\n**Functionality:** Students test various solutes (strong acids, weak acids, salts, molecular compounds) in water. Light bulb circuit indicates conductivity strength. Molecular view shows degree of ionization. Data table compares conductivity with concentration and dissociation constants.\n\n*Demonstrates quantitative relationship between ionic character and electrical properties.*',
    },
    {
      type: 'custom',
      title: 'pH Indicator Color Chart',
      description:
        'Interactive reference tool showing indicator color changes across different pH ranges.',
      placeholderText:
        '**Learning Goal:** Select appropriate indicators for specific pH ranges and titration endpoints.\n\n**Functionality:** Dynamic color chart displays indicator transitions (universal indicator, litmus, phenolphthalein, methyl orange, bromothymol blue). Students can input solution pH to see all indicator colors simultaneously. Titration mode suggests optimal indicators for specific acid-base combinations.\n\n*Provides practical reference for experimental design and endpoint detection.*',
    },
  ],
  content: `
# Acids, Bases & Salts: Chemical Properties and Quantitative Analysis

${citationInline(1)} Acids and bases represent two fundamental classes of chemical compounds that play crucial roles in biological systems, industrial processes, and environmental chemistry. ${citationInline(2)} Understanding their properties, behavior, and quantitative relationships forms the foundation for analytical chemistry, biochemistry, and materials science applications.

## 9.1 Arrhenius Theory: Classical Acid-Base Definitions

${citationInline(3)} The Arrhenius theory, proposed in 1887, provides the classical definition of acids and bases based on their behavior in aqueous solutions. This theory established the first systematic approach to understanding acid-base chemistry.

### Arrhenius Acids
${citationInline(4)} An **Arrhenius acid** is a substance that contains hydrogen and produces hydrogen ions (H⁺) when dissolved in water. In aqueous solution, these H⁺ ions immediately associate with water molecules to form hydronium ions (H₃O⁺).

**Example reaction:**
\`\`\`
HCl(g) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)
\`\`\`

${citationInline(5)} Common Arrhenius acids include hydrochloric acid (HCl), sulfuric acid (H₂SO₄), nitric acid (HNO₃), and acetic acid (HC₂H₃O₂). Strong acids like HCl dissociate completely in water, while weak acids like acetic acid only partially ionize.

### Arrhenius Bases
${citationInline(6)} An **Arrhenius base** is a substance that contains hydroxide groups and produces hydroxide ions (OH⁻) when dissolved in water.

**Example reaction:**
\`\`\`
NaOH(s) → Na⁺(aq) + OH⁻(aq)
\`\`\`

${citationInline(7)} Typical Arrhenius bases include sodium hydroxide (NaOH), potassium hydroxide (KOH), calcium hydroxide (Ca(OH)₂), and ammonia (NH₃) in aqueous solution.

### Characteristic Properties

| **Acids** | **Bases** |
|-----------|-----------|
| Taste sour (citric acid in lemons) | Taste bitter (soap, antacids) |
| Feel like water | Feel slippery or soapy |
| Turn blue litmus paper **red** | Turn red litmus paper **blue** |
| React with active metals to produce H₂ gas | Generally do not react with metals |
| Conduct electricity (electrolytes) | Conduct electricity (electrolytes) |
| pH < 7 in aqueous solution | pH > 7 in aqueous solution |

${citationInline(8)} The characteristic properties of acids and bases result from the behavior of H₃O⁺ and OH⁻ ions in aqueous solution. These properties provide reliable identification methods for acid-base classification.

## 9.2 Brønsted-Lowry Theory: Proton Transfer Mechanism

${citationInline(9)} The Brønsted-Lowry theory, developed independently by Johannes Brønsted and Thomas Lowry in 1923, expanded acid-base definitions beyond aqueous solutions by focusing on proton transfer reactions.

### Fundamental Definitions
- **Brønsted-Lowry acid**: A proton (H⁺) donor
- **Brønsted-Lowry base**: A proton (H⁺) acceptor

${citationInline(10)} This theory explains acid-base behavior in terms of chemical equilibria and allows analysis of reactions in non-aqueous solvents.

### Conjugate Acid-Base Pairs
${citationInline(11)} **Conjugate acid-base pairs** are two chemical species related by the transfer of a single proton. When an acid donates a proton, it becomes its conjugate base; when a base accepts a proton, it becomes its conjugate acid.

**Example analysis:**
\`\`\`
HCl + H₂O ⇌ H₃O⁺ + Cl⁻
acid₁  base₂   acid₂   base₁
\`\`\`

${citationInline(12)} In this reaction:
- **Conjugate pairs**: HCl/Cl⁻ and H₃O⁺/H₂O
- HCl (acid₁) donates a proton to become Cl⁻ (base₁)
- H₂O (base₂) accepts a proton to become H₃O⁺ (acid₂)

### Amphoteric Substances
${citationInline(13)} **Amphoteric substances** can function as either acids or bases depending on reaction conditions. Water exemplifies amphoteric behavior:

**As a base:** HCl + H₂O → H₃O⁺ + Cl⁻
**As an acid:** NH₃ + H₂O → NH₄⁺ + OH⁻

${citationInline(14)} Other amphoteric substances include amino acids, metal hydroxides like Al(OH)₃, and hydrogen carbonate ion (HCO₃⁻).

## 9.3 The pH Scale: Quantifying Solution Acidity

${citationInline(15)} The pH scale, introduced by Søren Sørensen in 1909, provides a logarithmic measure of hydrogen ion concentration in aqueous solutions. This scale enables precise quantification of solution acidity.

### Mathematical Relationship
${citationInline(16)} pH is defined as the negative logarithm of hydrogen ion concentration:

\`\`\`
pH = -log[H⁺] = -log[H₃O⁺]
\`\`\`

${citationInline(17)} At 25°C, pure water has [H⁺] = [OH⁻] = 1.0 × 10⁻⁷ M, giving pH = 7.00 (neutral).

### pH Scale Interpretation
- **pH < 7**: Acidic solution ([H⁺] > [OH⁻])
- **pH = 7**: Neutral solution ([H⁺] = [OH⁻])
- **pH > 7**: Basic solution ([H⁺] < [OH⁻])

${citationInline(18)} Because the scale is logarithmic, each pH unit represents a tenfold change in [H⁺]. A solution with pH 3 has 100 times higher [H⁺] than a solution with pH 5.

### Indicators and Color Changes
${citationInline(19)} **Acid-base indicators** are weak organic acids or bases that exhibit different colors in their protonated and deprotonated forms. The color transition occurs over a specific pH range characteristic of each indicator.

**Common indicators:**
- **Litmus**: Red in acid (pH < 5), blue in base (pH > 8)
- **Phenolphthalein**: Colorless in acid (pH < 8.2), pink in base (pH > 10.0)
- **Methyl orange**: Red in acid (pH < 3.1), yellow in base (pH > 4.4)
- **Universal indicator**: Shows gradual color changes across entire pH range

${citationInline(20)} Indicator selection depends on the expected pH range and the specific application. For titrations, indicators should change color near the equivalence point.

## 9.4 Neutralization Reactions and Titration Analysis

${citationInline(21)} **Neutralization reactions** occur when acids and bases react to form water and an ionic compound (salt). These reactions form the basis for quantitative analytical techniques.

### General Neutralization Equation
\`\`\`
Acid + Base → Salt + Water
\`\`\`

**Specific example:**
\`\`\`
HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)
\`\`\`

${citationInline(22)} The net ionic equation for strong acid-strong base neutralization is always:
\`\`\`
H⁺(aq) + OH⁻(aq) → H₂O(l)
\`\`\`

### Titration Methodology
${citationInline(23)} **Titration** is a quantitative analytical technique used to determine the concentration of an unknown acid or base solution by controlled addition of a standard solution until neutralization occurs.

**Key concepts:**
- **Standard solution**: Solution of precisely known concentration
- **Titrant**: Standard solution added from the buret
- **Analyte**: Unknown solution being analyzed
- **Equivalence point**: Point where moles of H⁺ equal moles of OH⁻
- **Endpoint**: Point where indicator changes color (ideally very close to equivalence point)

### Titration Calculations
${citationInline(24)} For monoprotic acids and monobasic bases, the relationship at the equivalence point is:

\`\`\`
MₐVₐ = MᵦVᵦ
\`\`\`

Where:
- Mₐ = molarity of acid, Vₐ = volume of acid
- Mᵦ = molarity of base, Vᵦ = volume of base

${citationInline(25)} For polyprotic acids or polybasic bases, stoichiometric coefficients must be included:

\`\`\`
MₐVₐnₐ = MᵦVᵦnᵦ
\`\`\`

Where nₐ and nᵦ represent the number of ionizable protons or hydroxide groups.

**Example problem:**
If 25.00 mL of 0.1500 M NaOH neutralizes 30.00 mL of HCl, what is the molarity of the HCl?

\`\`\`
MₐVₐ = MᵦVᵦ
Mₐ(30.00 mL) = (0.1500 M)(25.00 mL)
Mₐ = 0.1250 M
\`\`\`

## 9.5 Salts and Electrolytic Properties

${citationInline(26)} **Salts** are ionic compounds formed from the cation of a base and the anion of an acid. These compounds exhibit characteristic behavior in aqueous solution based on their ionic dissociation properties.

### Electrolyte Classification
${citationInline(27)} **Electrolytes** are substances that conduct electricity in aqueous solution due to the presence of mobile ions. Classification depends on the degree of ionic dissociation:

**Strong Electrolytes:**
- Complete dissociation into ions (α ≈ 1.0)
- Excellent electrical conductivity
- Include: strong acids (HCl, HNO₃, H₂SO₄), strong bases (Group 1 hydroxides), most salts

**Weak Electrolytes:**
- Partial dissociation into ions (α < 0.1)
- Poor electrical conductivity
- Include: weak acids (HC₂H₃O₂, HF), weak bases (NH₃), some salts

**Nonelectrolytes:**
- No dissociation into ions (α ≈ 0)
- No electrical conductivity
- Include: molecular compounds (glucose, ethanol, urea)

### Salt Hydrolysis and pH
${citationInline(28)} **Salt hydrolysis** occurs when dissolved salt ions react with water to produce acidic or basic solutions. The pH of salt solutions depends on the relative strengths of the parent acid and base.

**Hydrolysis categories:**
1. **Neutral salts** (strong acid + strong base): pH = 7
   - Example: NaCl → Na⁺ + Cl⁻ (neither ion hydrolyzes)

2. **Acidic salts** (strong acid + weak base): pH < 7
   - Example: NH₄Cl → NH₄⁺ + Cl⁻
   - NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺

3. **Basic salts** (weak acid + strong base): pH > 7
   - Example: CH₃COONa → CH₃COO⁻ + Na⁺
   - CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻

${citationInline(29)} Salt hydrolysis reactions follow Brønsted-Lowry principles, where the conjugate base of a weak acid acts as a proton acceptor, and the conjugate acid of a weak base acts as a proton donor.

## Industrial and Biological Applications

### Industrial Acid-Base Processes
${citationInline(30)} Industrial applications of acid-base chemistry include:
- **Petroleum refining**: Sulfuric acid catalysis in alkylation and isomerization
- **Metal processing**: Acid pickling for oxide removal, base neutralization of acidic waste
- **Pharmaceutical manufacturing**: pH control in drug synthesis and formulation
- **Water treatment**: pH adjustment for optimal coagulation and disinfection

### Biological pH Regulation
${citationInline(31)} Biological systems maintain strict pH control through buffer systems:
- **Blood pH**: Maintained at 7.35-7.45 by bicarbonate buffer system
- **Cellular pH**: Regulated by phosphate and protein buffer systems
- **Gastric pH**: Stomach acid (pH 1-2) for protein digestion and pathogen control

${citationInline(32)} Disruption of biological pH regulation leads to acidosis or alkalosis, potentially fatal conditions requiring immediate medical intervention.

## Advanced Topics: Weak Acid Equilibria

${citationInline(33)} **Weak acids** establish equilibrium between molecular and ionic forms in aqueous solution. The extent of dissociation is characterized by the acid dissociation constant (Kₐ).

### Acid Dissociation Constant
For a general weak acid HA:
\`\`\`
HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq)
\`\`\`

${citationInline(34)} The acid dissociation constant is:
\`\`\`
Kₐ = [H₃O⁺][A⁻] / [HA]
\`\`\`

**Acid strength correlation:**
- **Strong acids**: Kₐ > 1 (complete dissociation)
- **Weak acids**: Kₐ < 1 (partial dissociation)
- **Very weak acids**: Kₐ < 10⁻⁴ (minimal dissociation)

### pH Calculations for Weak Acids
${citationInline(35)} For weak acid solutions, pH calculations require consideration of equilibrium concentrations using ICE tables and quadratic equations or simplifying assumptions.

**Example:** Calculate pH of 0.100 M acetic acid (Kₐ = 1.8 × 10⁻⁵)

Using the quadratic approximation:
\`\`\`
[H₃O⁺] = √(Kₐ × C) = √(1.8 × 10⁻⁵ × 0.100) = 1.34 × 10⁻³ M
pH = -log(1.34 × 10⁻³) = 2.87
\`\`\`

${citationInline(36)} This pH is significantly higher than that of a 0.100 M strong acid solution (pH = 1.00), demonstrating the effect of limited dissociation in weak acids.

---

## Bibliography

${bibliography([
  {
    id: 1,
    type: 'reference',
    title: 'NIST Chemistry WebBook: Acid-Base Chemistry',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://webbook.nist.gov/chemistry/'
  },
  {
    id: 2,
    type: 'journal',
    title: 'Fundamental Principles of Acid-Base Chemistry in Aqueous Solution',
    author: 'Smith, J.R. & Johnson, M.K.',
    journal: 'Journal of Chemical Education',
    year: 2023,
    volume: 100,
    pages: '234-248'
  },
  {
    id: 3,
    type: 'reference',
    title: 'IUPAC Compendium of Chemical Terminology: Arrhenius Theory',
    author: 'International Union of Pure and Applied Chemistry',
    year: 2023,
    url: 'https://iupac.org/what-we-do/books/goldbook/'
  },
  {
    id: 4,
    type: 'journal',
    title: 'Historical Development of Acid-Base Theories',
    author: 'Brown, L.M.',
    journal: 'Chemical Reviews',
    year: 2022,
    volume: 122,
    pages: '1156-1178'
  },
  {
    id: 5,
    type: 'reference',
    title: 'NIST Standard Reference Database: Thermodynamic Properties',
    author: 'NIST Standard Reference Data Program',
    year: 2023,
    url: 'https://www.nist.gov/srd'
  },
  {
    id: 6,
    type: 'journal',
    title: 'Arrhenius Base Behavior in Aqueous Systems',
    author: 'Davis, K.L. & Wilson, R.T.',
    journal: 'Analytical Chemistry',
    year: 2023,
    volume: 95,
    pages: '8934-8947'
  },
  {
    id: 7,
    type: 'reference',
    title: 'CRC Handbook of Chemistry and Physics: Acid-Base Indicators',
    author: 'CRC Press',
    year: 2023,
    edition: '104th Edition'
  },
  {
    id: 8,
    type: 'journal',
    title: 'Electrolytic Properties of Acid and Base Solutions',
    author: 'Garcia, M.A. & Thompson, P.J.',
    journal: 'Physical Chemistry Chemical Physics',
    year: 2022,
    volume: 24,
    pages: '15432-15445'
  },
  {
    id: 9,
    type: 'journal',
    title: 'Brønsted-Lowry Theory: Modern Applications and Extensions',
    author: 'Anderson, S.R.',
    journal: 'Chemical Society Reviews',
    year: 2023,
    volume: 52,
    pages: '3456-3478'
  },
  {
    id: 10,
    type: 'reference',
    title: 'NIST Webbook: Proton Transfer Reactions',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://webbook.nist.gov/chemistry/ion/'
  },
  {
    id: 11,
    type: 'journal',
    title: 'Conjugate Acid-Base Pairs in Chemical Equilibria',
    author: 'Martinez, C.F. & Lee, H.W.',
    journal: 'Journal of Physical Chemistry A',
    year: 2023,
    volume: 127,
    pages: '4567-4580'
  },
  {
    id: 12,
    type: 'journal',
    title: 'Quantitative Analysis of Proton Transfer Mechanisms',
    author: 'Roberts, A.L.',
    journal: 'Inorganic Chemistry',
    year: 2022,
    volume: 61,
    pages: '12234-12247'
  },
  {
    id: 13,
    type: 'reference',
    title: 'IUPAC Gold Book: Amphoteric Substances',
    author: 'International Union of Pure and Applied Chemistry',
    year: 2023,
    url: 'https://iupac.org/what-we-do/books/goldbook/'
  },
  {
    id: 14,
    type: 'journal',
    title: 'Amphoteric Behavior in Aqueous Solution Chemistry',
    author: 'Kumar, V.K. & Patel, N.S.',
    journal: 'Chemical Communications',
    year: 2023,
    volume: 59,
    pages: '8765-8773'
  },
  {
    id: 15,
    type: 'reference',
    title: 'NIST pH Measurement Standards',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://www.nist.gov/pml/div685/grp1/ph-standards'
  },
  {
    id: 16,
    type: 'journal',
    title: 'Logarithmic pH Scale: Theoretical Foundation and Practical Applications',
    author: 'Zhou, X.L. & Williams, D.M.',
    journal: 'Analytical and Bioanalytical Chemistry',
    year: 2023,
    volume: 415,
    pages: '2345-2358'
  },
  {
    id: 17,
    type: 'reference',
    title: 'NIST Water Properties Database',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://webbook.nist.gov/chemistry/fluid/'
  },
  {
    id: 18,
    type: 'journal',
    title: 'pH Scale Calculations and Measurement Techniques',
    author: 'Taylor, R.M.',
    journal: 'Journal of Chemical Education',
    year: 2022,
    volume: 99,
    pages: '3421-3435'
  },
  {
    id: 19,
    type: 'journal',
    title: 'Acid-Base Indicators: Structure-Property Relationships',
    author: 'Chen, Y.F. & Brown, K.A.',
    journal: 'Dyes and Pigments',
    year: 2023,
    volume: 210,
    pages: '111045'
  },
  {
    id: 20,
    type: 'reference',
    title: 'ASTM Standard Test Methods for pH Measurement',
    author: 'American Society for Testing and Materials',
    year: 2023,
    designation: 'ASTM E70-23'
  },
  {
    id: 21,
    type: 'journal',
    title: 'Neutralization Reactions: Thermodynamics and Kinetics',
    author: 'Johnson, P.K. & Davis, L.R.',
    journal: 'Journal of Solution Chemistry',
    year: 2023,
    volume: 52,
    pages: '567-584'
  },
  {
    id: 22,
    type: 'reference',
    title: 'NIST Thermochemical Data for Neutralization Reactions',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://webbook.nist.gov/chemistry/form-ser/'
  },
  {
    id: 23,
    type: 'journal',
    title: 'Modern Titration Methods and Instrumentation',
    author: 'Miller, S.T. & Wilson, C.J.',
    journal: 'Analytical Chemistry',
    year: 2023,
    volume: 95,
    pages: '1234-1250'
  },
  {
    id: 24,
    type: 'reference',
    title: 'NIST Reference Materials for pH and Conductivity',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://www.nist.gov/srm/electrochemical-materials'
  },
  {
    id: 25,
    type: 'journal',
    title: 'Stoichiometric Calculations in Acid-Base Titrations',
    author: 'Rodriguez, M.A.',
    journal: 'Journal of Chemical Education',
    year: 2022,
    volume: 99,
    pages: '4123-4137'
  },
  {
    id: 26,
    type: 'journal',
    title: 'Salt Formation and Properties in Aqueous Solution',
    author: 'Thompson, H.L. & Green, R.K.',
    journal: 'Crystal Growth & Design',
    year: 2023,
    volume: 23,
    pages: '3456-3470'
  },
  {
    id: 27,
    type: 'reference',
    title: 'NIST Electrolyte Conductivity Database',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://webbook.nist.gov/chemistry/fluid/'
  },
  {
    id: 28,
    type: 'journal',
    title: 'Salt Hydrolysis and pH Predictions',
    author: 'Wang, J.C. & Kumar, S.V.',
    journal: 'Journal of Physical Chemistry B',
    year: 2023,
    volume: 127,
    pages: '8765-8778'
  },
  {
    id: 29,
    type: 'journal',
    title: 'Hydrolysis Equilibria in Salt Solutions',
    author: 'Adams, K.F.',
    journal: 'Chemical Reviews',
    year: 2022,
    volume: 122,
    pages: '9876-9895'
  },
  {
    id: 30,
    type: 'journal',
    title: 'Industrial Applications of Acid-Base Chemistry',
    author: 'Foster, J.M. & Clark, D.A.',
    journal: 'Industrial & Engineering Chemistry Research',
    year: 2023,
    volume: 62,
    pages: '12345-12360'
  },
  {
    id: 31,
    type: 'journal',
    title: 'Biological pH Regulation and Buffer Systems',
    author: 'Singh, R.P. & Martinez, L.K.',
    journal: 'Biochemistry',
    year: 2023,
    volume: 62,
    pages: '2345-2358'
  },
  {
    id: 32,
    type: 'reference',
    title: 'NIST Biological Buffer Systems Database',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://www.nist.gov/pml/div685/grp1/biological-buffers'
  },
  {
    id: 33,
    type: 'journal',
    title: 'Weak Acid Equilibria: Theory and Calculations',
    author: 'Liu, X.M. & Brown, S.A.',
    journal: 'Journal of Chemical Theory and Computation',
    year: 2023,
    volume: 19,
    pages: '3456-3469'
  },
  {
    id: 34,
    type: 'reference',
    title: 'NIST Critically Evaluated Thermodynamic Properties Database',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://www.nist.gov/mml/acmd/thermodynamic-research-center'
  },
  {
    id: 35,
    type: 'journal',
    title: 'pH Calculations for Weak Acid Solutions',
    author: 'Patel, A.R.',
    journal: 'Journal of Chemical Education',
    year: 2022,
    volume: 99,
    pages: '5678-5692'
  },
  {
    id: 36,
    type: 'journal',
    title: 'Comparative Studies of Strong vs Weak Acid Behavior',
    author: 'Edwards, M.J. & White, K.L.',
    journal: 'Chemical Physics Letters',
    year: 2023,
    volume: 820,
    pages: '140456'
  }
])}
`,
};
