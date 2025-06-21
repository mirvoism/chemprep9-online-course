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
  ],
  narrative: \`## **Acids, Bases & Salts: Chemical Properties and Quantitative Analysis**

\${citationInline('1')} Acids and bases represent two fundamental classes of chemical compounds that play crucial roles in biological systems, industrial processes, and environmental chemistry. \${citationInline('2')} Understanding their properties, behavior, and quantitative relationships forms the foundation for analytical chemistry, biochemistry, and materials science applications.

### **9.1 Arrhenius Theory: Classical Acid-Base Definitions**

\${citationInline('3')} The Arrhenius theory, proposed in 1887, provides the classical definition of acids and bases based on their behavior in aqueous solutions. This theory established the first systematic approach to understanding acid-base chemistry.

**Arrhenius Acids**
\${citationInline('4')} An **Arrhenius acid** is a substance that contains hydrogen and produces hydrogen ions (H⁺) when dissolved in water. In aqueous solution, these H⁺ ions immediately associate with water molecules to form hydronium ions (H₃O⁺).

**Example reaction:**
HCl(g) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)

\${citationInline('5')} Common Arrhenius acids include hydrochloric acid (HCl), sulfuric acid (H₂SO₄), nitric acid (HNO₃), and acetic acid (HC₂H₃O₂). Strong acids like HCl dissociate completely in water, while weak acids like acetic acid only partially ionize.

**Arrhenius Bases**
\${citationInline('6')} An **Arrhenius base** is a substance that contains hydroxide groups and produces hydroxide ions (OH⁻) when dissolved in water.

**Example reaction:**
NaOH(s) → Na⁺(aq) + OH⁻(aq)

\${citationInline('7')} Typical Arrhenius bases include sodium hydroxide (NaOH), potassium hydroxide (KOH), calcium hydroxide (Ca(OH)₂), and ammonia (NH₃) in aqueous solution.

**Characteristic Properties**

| **Acids** | **Bases** |
|-----------|-----------|
| Taste sour (citric acid in lemons) | Taste bitter (soap, antacids) |
| Feel like water | Feel slippery or soapy |
| Turn blue litmus paper **red** | Turn red litmus paper **blue** |
| React with active metals to produce H₂ gas | Generally do not react with metals |
| Conduct electricity (electrolytes) | Conduct electricity (electrolytes) |
| pH < 7 in aqueous solution | pH > 7 in aqueous solution |

\${citationInline('8')} The characteristic properties of acids and bases result from the behavior of H₃O⁺ and OH⁻ ions in aqueous solution. These properties provide reliable identification methods for acid-base classification.

### **9.2 Brønsted-Lowry Theory: Proton Transfer Mechanism**

\${citationInline('9')} The Brønsted-Lowry theory, developed independently by Johannes Brønsted and Thomas Lowry in 1923, expanded acid-base definitions beyond aqueous solutions by focusing on proton transfer reactions.

**Fundamental Definitions**
- **Brønsted-Lowry acid**: A proton (H⁺) donor
- **Brønsted-Lowry base**: A proton (H⁺) acceptor

\${citationInline('10')} This theory explains acid-base behavior in terms of chemical equilibria and allows analysis of reactions in non-aqueous solvents.

**Conjugate Acid-Base Pairs**
\${citationInline('11')} **Conjugate acid-base pairs** are two chemical species related by the transfer of a single proton. When an acid donates a proton, it becomes its conjugate base; when a base accepts a proton, it becomes its conjugate acid.

**Example analysis:**
HCl + H₂O ⇌ H₃O⁺ + Cl⁻
acid₁  base₂   acid₂   base₁

\${citationInline('12')} In this reaction:
- **Conjugate pairs**: HCl/Cl⁻ and H₃O⁺/H₂O
- HCl (acid₁) donates a proton to become Cl⁻ (base₁)
- H₂O (base₂) accepts a proton to become H₃O⁺ (acid₂)

**Amphoteric Substances**
\${citationInline('13')} **Amphoteric substances** can function as either acids or bases depending on reaction conditions. Water exemplifies amphoteric behavior:

**As a base:** HCl + H₂O → H₃O⁺ + Cl⁻
**As an acid:** NH₃ + H₂O → NH₄⁺ + OH⁻

\${citationInline('14')} Other amphoteric substances include amino acids, metal hydroxides like Al(OH)₃, and hydrogen carbonate ion (HCO₃⁻).

### **9.3 The pH Scale: Quantifying Solution Acidity**

\${citationInline('15')} The pH scale, introduced by Søren Sørensen in 1909, provides a logarithmic measure of hydrogen ion concentration in aqueous solutions. This scale enables precise quantification of solution acidity.

**Mathematical Relationship**
\${citationInline('16')} pH is defined as the negative logarithm of hydrogen ion concentration:

pH = -log[H⁺] = -log[H₃O⁺]

\${citationInline('17')} At 25°C, pure water has [H⁺] = [OH⁻] = 1.0 × 10⁻⁷ M, giving pH = 7.00 (neutral).

**pH Scale Interpretation**
- **pH < 7**: Acidic solution ([H⁺] > [OH⁻])
- **pH = 7**: Neutral solution ([H⁺] = [OH⁻])
- **pH > 7**: Basic solution ([H⁺] < [OH⁻])

\${citationInline('18')} Because the scale is logarithmic, each pH unit represents a tenfold change in [H⁺]. A solution with pH 3 has 100 times higher [H⁺] than a solution with pH 5.

**Indicators and Color Changes**
\${citationInline('19')} **Acid-base indicators** are weak organic acids or bases that exhibit different colors in their protonated and deprotonated forms. The color transition occurs over a specific pH range characteristic of each indicator.

**Common indicators:**
- **Litmus**: Red in acid (pH < 5), blue in base (pH > 8)
- **Phenolphthalein**: Colorless in acid (pH < 8.2), pink in base (pH > 10.0)
- **Methyl orange**: Red in acid (pH < 3.1), yellow in base (pH > 4.4)
- **Universal indicator**: Shows gradual color changes across entire pH range

\${citationInline('20')} Indicator selection depends on the expected pH range and the specific application. For titrations, indicators should change color near the equivalence point.

### **9.4 Neutralization Reactions and Titration Analysis**

\${citationInline('21')} **Neutralization reactions** occur when acids and bases react to form water and an ionic compound (salt). These reactions form the basis for quantitative analytical techniques.

**General Neutralization Equation**
Acid + Base → Salt + Water

**Specific example:**
HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)

\${citationInline('22')} The net ionic equation for strong acid-strong base neutralization is always:
H⁺(aq) + OH⁻(aq) → H₂O(l)

**Titration Methodology**
\${citationInline('23')} **Titration** is a quantitative analytical technique used to determine the concentration of an unknown acid or base solution by controlled addition of a standard solution until neutralization occurs.

**Key concepts:**
- **Standard solution**: Solution of precisely known concentration
- **Titrant**: Standard solution added from the buret
- **Analyte**: Unknown solution being analyzed
- **Equivalence point**: Point where moles of H⁺ equal moles of OH⁻
- **Endpoint**: Point where indicator changes color (ideally very close to equivalence point)

**Titration Calculations**
\${citationInline('24')} For monoprotic acids and monobasic bases, the relationship at the equivalence point is:

MₐVₐ = MᵦVᵦ

Where:
- Mₐ = molarity of acid, Vₐ = volume of acid
- Mᵦ = molarity of base, Vᵦ = volume of base

\${citationInline('25')} For polyprotic acids or polybasic bases, stoichiometric coefficients must be included:

MₐVₐnₐ = MᵦVᵦnᵦ

Where nₐ and nᵦ represent the number of ionizable protons or hydroxide groups.

**Example problem:**
If 25.00 mL of 0.1500 M NaOH neutralizes 30.00 mL of HCl, what is the molarity of the HCl?

MₐVₐ = MᵦVᵦ
Mₐ(30.00 mL) = (0.1500 M)(25.00 mL)
Mₐ = 0.1250 M

### **9.5 Salts and Electrolytic Properties**

\${citationInline('26')} **Salts** are ionic compounds formed from the cation of a base and the anion of an acid. These compounds exhibit characteristic behavior in aqueous solution based on their ionic dissociation properties.

**Electrolyte Classification**
\${citationInline('27')} **Electrolytes** are substances that conduct electricity in aqueous solution due to the presence of mobile ions. Classification depends on the degree of ionic dissociation:

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

**Salt Hydrolysis and pH**
\${citationInline('28')} **Salt hydrolysis** occurs when dissolved salt ions react with water to produce acidic or basic solutions. The pH of salt solutions depends on the relative strengths of the parent acid and base.

**Hydrolysis categories:**
1. **Neutral salts** (strong acid + strong base): pH = 7
   - Example: NaCl → Na⁺ + Cl⁻ (neither ion hydrolyzes)

2. **Acidic salts** (strong acid + weak base): pH < 7
   - Example: NH₄Cl → NH₄⁺ + Cl⁻
   - NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺

3. **Basic salts** (weak acid + strong base): pH > 7
   - Example: CH₃COONa → CH₃COO⁻ + Na⁺
   - CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻

\${citationInline('29')} Salt hydrolysis reactions follow Brønsted-Lowry principles, where the conjugate base of a weak acid acts as a proton acceptor, and the conjugate acid of a weak base acts as a proton donor.

### **9.6 Industrial and Biological Applications**

**Industrial Acid-Base Processes**
\${citationInline('30')} Industrial applications of acid-base chemistry include:
- **Petroleum refining**: Sulfuric acid catalysis in alkylation and isomerization
- **Metal processing**: Acid pickling for oxide removal, base neutralization of acidic waste
- **Pharmaceutical manufacturing**: pH control in drug synthesis and formulation
- **Water treatment**: pH adjustment for optimal coagulation and disinfection

**Biological pH Regulation**
\${citationInline('31')} Biological systems maintain strict pH control through buffer systems:
- **Blood pH**: Maintained at 7.35-7.45 by bicarbonate buffer system
- **Cellular pH**: Regulated by phosphate and protein buffer systems
- **Gastric pH**: Stomach acid (pH 1-2) for protein digestion and pathogen control

\${citationInline('32')} Disruption of biological pH regulation leads to acidosis or alkalosis, potentially fatal conditions requiring immediate medical intervention.

### **9.7 Advanced Topics: Weak Acid Equilibria**

\${citationInline('33')} **Weak acids** establish equilibrium between molecular and ionic forms in aqueous solution. The extent of dissociation is characterized by the acid dissociation constant (Kₐ).

**Acid Dissociation Constant**
For a general weak acid HA:
HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq)

\${citationInline('34')} The acid dissociation constant is:
Kₐ = [H₃O⁺][A⁻] / [HA]

**Acid strength correlation:**
- **Strong acids**: Kₐ > 1 (complete dissociation)
- **Weak acids**: Kₐ < 1 (partial dissociation)
- **Very weak acids**: Kₐ < 10⁻⁴ (minimal dissociation)

**pH Calculations for Weak Acids**
\${citationInline('35')} For weak acid solutions, pH calculations require consideration of equilibrium concentrations using ICE tables and quadratic equations or simplifying assumptions.

**Example:** Calculate pH of 0.100 M acetic acid (Kₐ = 1.8 × 10⁻⁵)

Using the quadratic approximation:
[H₃O⁺] = √(Kₐ × C) = √(1.8 × 10⁻⁵ × 0.100) = 1.34 × 10⁻³ M
pH = -log(1.34 × 10⁻³) = 2.87

\${citationInline('36')} This pH is significantly higher than that of a 0.100 M strong acid solution (pH = 1.00), demonstrating the effect of limited dissociation in weak acids.

\${bibliography([
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
  '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
  '31', '32', '33', '34', '35', '36'
])}\`,
  practice: [
    {
      text: '1. **Acid-Base Theory Application**: Classify each substance as an Arrhenius acid, Arrhenius base, or neither. Then identify the Brønsted-Lowry acid and base in each reaction:\n    a) HNO₃ + H₂O → H₃O⁺ + NO₃⁻\n    b) NH₃ + H₂O ⇌ NH₄⁺ + OH⁻\n    c) Ca(OH)₂ → Ca²⁺ + 2OH⁻\n    d) CH₃COOH + NH₃ → CH₃COO⁻ + NH₄⁺',
    },
    {
      text: '2. **pH Scale Calculations**: Calculate the pH of each solution and classify as acidic, neutral, or basic:\n    a) [H⁺] = 1.0 × 10⁻⁴ M\n    b) [OH⁻] = 2.5 × 10⁻³ M\n    c) 0.050 M HCl solution\n    d) 0.025 M NaOH solution',
    },
    {
      text: '3. **Conjugate Acid-Base Pairs**: Identify the conjugate acid-base pairs in each reaction and predict the direction of equilibrium:\n    a) HF + CN⁻ ⇌ HCN + F⁻\n    b) HSO₄⁻ + CO₃²⁻ ⇌ SO₄²⁻ + HCO₃⁻\n    c) H₂PO₄⁻ + OH⁻ ⇌ HPO₄²⁻ + H₂O',
    },
    {
      text: '4. **Titration Analysis**: A 25.0 mL sample of vinegar (acetic acid) requires 42.3 mL of 0.115 M NaOH for neutralization. Calculate:\n    a) Moles of NaOH used\n    b) Moles of acetic acid in the sample\n    c) Molarity of acetic acid in vinegar\n    d) Mass percent of acetic acid (density = 1.01 g/mL)',
    },
    {
      text: '5. **Salt Hydrolysis Prediction**: Predict whether aqueous solutions of these salts will be acidic, basic, or neutral. Write hydrolysis equations where applicable:\n    a) KBr (from KOH + HBr)\n    b) NH₄NO₃ (from NH₃ + HNO₃)\n    c) Na₂CO₃ (from NaOH + H₂CO₃)\n    d) FeCl₃ (from Fe(OH)₃ + HCl)',
    },
  ],
  answers: [
    {
      text: '1. **Acid-Base Classifications**:\n    a) **HNO₃**: Arrhenius acid (produces H⁺), Brønsted-Lowry acid (donates H⁺ to H₂O)\n    b) **NH₃**: Arrhenius base (produces OH⁻), Brønsted-Lowry base (accepts H⁺ from H₂O)\n    c) **Ca(OH)₂**: Arrhenius base (produces OH⁻), not a Brønsted-Lowry reaction\n    d) **CH₃COOH**: Brønsted-Lowry acid (donates H⁺), **NH₃**: Brønsted-Lowry base (accepts H⁺)',
    },
    {
      text: '2. **pH Calculations**:\n    a) pH = -log(1.0 × 10⁻⁴) = **4.00** (acidic)\n    b) pOH = -log(2.5 × 10⁻³) = 2.60, pH = 14.00 - 2.60 = **11.40** (basic)\n    c) [H⁺] = 0.050 M, pH = -log(0.050) = **1.30** (acidic)\n    d) [OH⁻] = 0.025 M, pOH = 1.60, pH = 14.00 - 1.60 = **12.40** (basic)',
    },
    {
      text: '3. **Conjugate Pairs and Equilibrium**:\n    a) **Pairs**: HF/F⁻ and HCN/CN⁻. **Equilibrium favors reactants** (HF stronger acid than HCN)\n    b) **Pairs**: HSO₄⁻/SO₄²⁻ and HCO₃⁻/CO₃²⁻. **Equilibrium favors products** (HSO₄⁻ stronger acid)\n    c) **Pairs**: H₂PO₄⁻/HPO₄²⁻ and H₂O/OH⁻. **Equilibrium favors products** (OH⁻ stronger base)',
    },
    {
      text: '4. **Titration Calculations**:\n    a) **Moles NaOH** = (0.115 M)(0.0423 L) = 0.00487 mol\n    b) **Moles CH₃COOH** = 0.00487 mol (1:1 stoichiometry)\n    c) **Molarity** = 0.00487 mol ÷ 0.0250 L = **0.195 M**\n    d) **Mass %** = (0.00487 mol × 60.05 g/mol) ÷ (25.3 g total) × 100% = **11.6%**',
    },
    {
      text: '5. **Salt Hydrolysis Predictions**:\n    a) **KBr**: Neutral (strong acid + strong base, neither ion hydrolyzes)\n    b) **NH₄NO₃**: Acidic - NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺\n    c) **Na₂CO₃**: Basic - CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻\n    d) **FeCl₃**: Acidic - Fe³⁺ + H₂O ⇌ Fe(OH)²⁺ + H⁺ (metal cation hydrolysis)',
    },
  ],
};
