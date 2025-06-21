import { Lesson } from '../../../../types';
import { citationInline, bibliography } from '../../../utils/citationManager';

export const c5l1Enhanced: Lesson = {
  id: 'C5L1_ENHANCED',
  unit: 5,
  title: 'Chemical Reactions & Stoichiometry: The Quantitative Heart of Chemistry',
  objectives: [
    'Write and balance chemical equations following the Law of Conservation of Mass.',
    'Classify chemical reactions as synthesis, decomposition, single replacement, double replacement, or combustion.',
    'Define the mole concept and use Avogadro\'s number in particle-mass-mole conversions.',
    'Calculate molar mass, percent composition, empirical formulas, and molecular formulas.',
    'Perform stoichiometric calculations using mole ratios from balanced equations.',
    'Understand limiting reactants and calculate theoretical and percent yields.',
  ],
  labMinutes: 50,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_en.html',
      title: 'Balancing Chemical Equations',
      description:
        'Practice balancing equations while visualizing conservation of mass. See how coefficients maintain equal numbers of each type of atom.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_en.html',
      title: 'Reactants, Products and Leftovers',
      description:
        'Explore limiting reactants through sandwich-making analogies and chemical reactions. Understand how excess reactants affect product yield.',
    },
    {
      type: 'custom',
      title: 'Mole Conversion Calculator',
      description:
        'Interactive tool for converting between grams, moles, molecules, and atoms using molar mass and Avogadro\'s number.',
      placeholderText:
        '**Learning Goal:** Master fundamental mole conversions and dimensional analysis.\n\n**Functionality:** Students input values in any unit (grams, moles, particles) and the calculator shows step-by-step conversions using molar mass and Avogadro\'s number. Visual representations show the relationship between macroscopic masses and microscopic particles.\n\n*Progressive complexity from simple elements to complex compounds.*',
    },
    {
      type: 'custom',
      title: 'Stoichiometry Problem Solver',
      description:
        'Step-by-step guided practice for stoichiometric calculations with balanced equations.',
      placeholderText:
        '**Learning Goal:** Apply mole ratios to solve quantitative chemistry problems.\n\n**Functionality:** Students work through stoichiometry problems with scaffolded support: equation balancing, mole ratio identification, dimensional analysis setup, and calculation verification. Includes mass-to-mass, mole-to-mole, and limiting reactant scenarios.\n\n*Builds problem-solving confidence through structured practice.*',
    },
    {
      type: 'custom',
      title: 'Empirical Formula Lab Simulator',
      description:
        'Virtual laboratory for determining empirical and molecular formulas from experimental data.',
      placeholderText:
        '**Learning Goal:** Connect experimental data to molecular composition.\n\n**Functionality:** Students analyze combustion analysis data, mass spectrometry results, and percent composition to determine empirical and molecular formulas. Interactive periodic table helps with molar mass calculations and ratio simplification.\n\n*Simulates real analytical chemistry techniques and data interpretation.*',
    },
  ],
  narrative: \`## **Chemical Reactions & Stoichiometry: The Recipe Book of Chemistry**

Chemical reactions are the fundamental processes that transform matter, creating everything from the oxygen we breathe to the complex molecules in our bodies\${citationInline('brown-chemistry-14th', 1)}. Understanding these transformations quantitatively—through stoichiometry—provides chemists with the precise "recipes" needed to predict reaction outcomes, optimize industrial processes, and design new materials\${citationInline('nist-chemical-kinetics', 2)}.

At its core, stoichiometry represents the application of conservation laws to chemical change. By balancing equations and understanding the mole concept, we can predict exactly how much product will form from given reactants, making chemistry a quantitative science capable of precision and prediction\${citationInline('iupac-stoichiometry', 3)}.

## **Chemical Equations: The Language of Transformation**

Chemical equations serve as chemistry's universal language, providing a concise way to represent the complex rearrangements of atoms that occur during chemical reactions\${citationInline('chemical-equation-standards', 4)}.

### **Anatomy of a Chemical Equation**

**Basic Structure**:
**Reactants → Products**

**Complete Representation**:
- **Chemical formulas**: Show the identity and composition of substances
- **State symbols**: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution
- **Coefficients**: Whole numbers indicating relative amounts
- **Reaction arrow**: Shows direction of transformation\${citationInline('iupac-nomenclature', 5)}

### **The Law of Conservation of Mass**

Antoine Lavoisier's Law of Conservation of Mass states that matter cannot be created or destroyed in chemical reactions—only rearranged\${citationInline('lavoisier-conservation', 6)}. This fundamental principle requires that:

- **Total mass of reactants = Total mass of products**
- **Number of atoms of each element must be equal on both sides**
- **Electrical charge must be conserved (in ionic reactions)**

### **Balancing Chemical Equations**

Balancing equations ensures compliance with conservation laws through systematic coefficient adjustment\${citationInline('equation-balancing-methods', 7)}.

**Systematic Approach**:
1. **Write the unbalanced equation** using correct chemical formulas
2. **Count atoms** of each element on both sides
3. **Add coefficients** to balance, starting with the most complex molecule
4. **Balance in order**: metals, nonmetals, hydrogen, oxygen
5. **Use smallest whole number coefficients**
6. **Verify** that all elements are balanced

**Example: Combustion of Propane**
**Step 1**: C₃H₈ + O₂ → CO₂ + H₂O
**Step 2**: Count atoms
- Left: 3 C, 8 H, 2 O
- Right: 1 C, 2 H, 3 O
**Step 3**: Balance carbon: C₃H₈ + O₂ → **3**CO₂ + H₂O
**Step 4**: Balance hydrogen: C₃H₈ + O₂ → 3CO₂ + **4**H₂O
**Step 5**: Balance oxygen: C₃H₈ + **5**O₂ → 3CO₂ + 4H₂O
**Final Check**: 3 C, 8 H, 10 O on each side ✓\${citationInline('combustion-reactions', 8)}

## **Classification of Chemical Reactions**

Understanding reaction patterns helps predict products and balance equations more efficiently\${citationInline('reaction-classification', 9)}.

### **1. Synthesis (Combination) Reactions**

**Pattern**: A + B → AB
**Description**: Two or more simple substances combine to form a more complex compound

**Examples**:
- **Element + Element**: 2Na(s) + Cl₂(g) → 2NaCl(s)
- **Compound + Element**: 2SO₂(g) + O₂(g) → 2SO₃(g)
- **Compound + Compound**: CaO(s) + H₂O(l) → Ca(OH)₂(s)

**Applications**: Industrial synthesis of ammonia (Haber process), formation of ionic compounds\${citationInline('synthesis-reactions', 10)}

### **2. Decomposition Reactions**

**Pattern**: AB → A + B
**Description**: A single compound breaks down into two or more simpler substances

**Common Types**:
- **Thermal decomposition**: 2HgO(s) → 2Hg(l) + O₂(g)
- **Electrolytic decomposition**: 2H₂O(l) → 2H₂(g) + O₂(g)
- **Catalytic decomposition**: 2H₂O₂(aq) → 2H₂O(l) + O₂(g)

**Applications**: Extraction of metals from ores, production of industrial gases\${citationInline('decomposition-reactions', 11)}

### **3. Single Replacement Reactions**

**Pattern**: A + BC → AC + B
**Description**: One element replaces another element in a compound

**Driving Force**: **Activity series** determines which metals can replace others
- More active metal displaces less active metal from compounds
- Activity order: K > Na > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au

**Examples**:
- **Metal displacement**: Zn(s) + Cu(NO₃)₂(aq) → Cu(s) + Zn(NO₃)₂(aq)
- **Hydrogen displacement**: Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)\${citationInline('activity-series', 12)}

### **4. Double Replacement Reactions**

**Pattern**: AB + CD → AD + CB
**Description**: Cations and anions of two ionic compounds exchange partners

**Driving Forces**:
- **Precipitate formation**: Creates insoluble solid
- **Gas evolution**: Produces gaseous product
- **Acid-base neutralization**: Forms water

**Example with Precipitate**:
AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)
(Silver chloride precipitates out of solution)\${citationInline('precipitation-reactions', 13)}

### **5. Combustion Reactions**

**Description**: Rapid reaction with oxygen producing heat and light

**Hydrocarbon Combustion**:
- **Complete combustion**: CₓHᵧ + O₂ → CO₂ + H₂O
- **Incomplete combustion**: CₓHᵧ + O₂ → CO + H₂O (insufficient oxygen)

**Example**: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) + energy

**Applications**: Energy production, automotive engines, heating systems\${citationInline('combustion-chemistry', 14)}

## **The Mole Concept: Chemistry's Counting Unit**

The **mole** provides the essential bridge between the microscopic world of atoms and molecules and the macroscopic world of laboratory measurements\${citationInline('avogadro-constant', 15)}.

### **Defining the Mole**

**1 mole = 6.022 × 10²³ representative particles**

This number, **Avogadro's constant**, represents the number of carbon-12 atoms in exactly 12 grams of carbon-12\${citationInline('nist-constants', 16)}.

**Representative Particles**:
- **Elements**: atoms (1 mol Fe = 6.022 × 10²³ Fe atoms)
- **Molecular compounds**: molecules (1 mol H₂O = 6.022 × 10²³ H₂O molecules)  
- **Ionic compounds**: formula units (1 mol NaCl = 6.022 × 10²³ NaCl formula units)

### **Molar Mass: The Molecular Scale**

**Molar mass** is the mass in grams of one mole of a substance, numerically equal to the atomic or molecular mass in atomic mass units\${citationInline('atomic-masses', 17)}.

**Calculation Method**:
1. **Identify** all atoms in the chemical formula
2. **Multiply** each element's atomic mass by its subscript
3. **Sum** all contributions

**Example: Calcium Carbonate (CaCO₃)**
- Ca: 1 × 40.08 g/mol = 40.08 g/mol
- C: 1 × 12.01 g/mol = 12.01 g/mol  
- O: 3 × 16.00 g/mol = 48.00 g/mol
- **Total molar mass**: 100.09 g/mol

### **Fundamental Mole Conversions**

**Mass ↔ Moles**: 
moles = mass (g) ÷ molar mass (g/mol)
mass = moles × molar mass

**Moles ↔ Particles**:
particles = moles × 6.022 × 10²³
moles = particles ÷ 6.022 × 10²³\${citationInline('dimensional-analysis', 18)}

## **Percent Composition and Formula Determination**

Chemical analysis reveals the quantitative composition of compounds, enabling determination of empirical and molecular formulas\${citationInline('analytical-chemistry', 19)}.

### **Percent Composition**

**Definition**: The percentage by mass of each element in a compound

**Calculation**:
% by mass = (mass of element in 1 mole ÷ molar mass of compound) × 100%

**Example: Water (H₂O)**
- H: (2.02 g ÷ 18.02 g) × 100% = 11.2%
- O: (16.00 g ÷ 18.02 g) × 100% = 88.8%

### **Empirical vs. Molecular Formulas**

**Empirical Formula**: Simplest whole-number ratio of atoms
**Molecular Formula**: Actual number of atoms in one molecule

**Relationship**: Molecular formula = (Empirical formula) × n
where n = molecular mass ÷ empirical formula mass\${citationInline('molecular-formulas', 20)}

### **Determining Empirical Formulas**

**From Percent Composition**:
1. **Assume 100 g sample** (percentages become grams)
2. **Convert grams to moles** for each element  
3. **Divide by smallest mole value** to get ratios
4. **Multiply to get whole numbers** if necessary

**Example: Compound with 40.0% C, 6.7% H, 53.3% O**
- C: 40.0 g ÷ 12.01 g/mol = 3.33 mol
- H: 6.7 g ÷ 1.01 g/mol = 6.6 mol
- O: 53.3 g ÷ 16.00 g/mol = 3.33 mol

**Divide by smallest (3.33)**:
- C: 3.33 ÷ 3.33 = 1
- H: 6.6 ÷ 3.33 = 2  
- O: 3.33 ÷ 3.33 = 1

**Empirical formula**: CH₂O\${citationInline('empirical-formulas', 21)}

## **Stoichiometry: The Heart of Quantitative Chemistry**

Stoichiometry uses balanced equations to predict the quantitative relationships between reactants and products\${citationInline('stoichiometry-principles', 22)}.

### **Mole Ratios: The Foundation**

Balanced equation coefficients provide **mole ratios** between any two substances in a reaction.

**Example**: 2H₂ + O₂ → 2H₂O

**Possible Mole Ratios**:
- 2 mol H₂ : 1 mol O₂
- 2 mol H₂ : 2 mol H₂O  
- 1 mol O₂ : 2 mol H₂O

### **Basic Stoichiometric Calculations**

**Mole-to-Mole Conversions**:
Use mole ratios directly from balanced equations

**Mass-to-Mass Conversions**:
1. **Convert mass to moles** (÷ molar mass)
2. **Use mole ratio** from balanced equation
3. **Convert moles to mass** (× molar mass)

**Example Problem**: How many grams of H₂O form from 5.0 g H₂?
2H₂ + O₂ → 2H₂O

**Solution**:
5.0 g H₂ × (1 mol H₂ ÷ 2.02 g H₂) × (2 mol H₂O ÷ 2 mol H₂) × (18.02 g H₂O ÷ 1 mol H₂O) = 44.6 g H₂O\${citationInline('stoichiometry-examples', 23)}

### **Limiting Reactants and Percent Yield**

**Limiting Reactant**: The reactant that is completely consumed first, determining the maximum amount of product possible

**Identification Method**:
1. **Calculate moles** of each reactant
2. **Use stoichiometry** to determine how much product each could form
3. **Limiting reactant** produces the least amount of product

**Theoretical Yield**: Maximum amount of product possible (based on limiting reactant)
**Actual Yield**: Amount of product actually obtained experimentally
**Percent Yield**: (Actual yield ÷ Theoretical yield) × 100%\${citationInline('reaction-yields', 24)}

## **Applications and Real-World Connections**

Stoichiometry enables precise control in countless applications\${citationInline('industrial-chemistry', 25)}:

**Industrial Manufacturing**:
- **Ammonia synthesis**: Optimizing N₂ and H₂ ratios for maximum yield
- **Steel production**: Calculating exact amounts of carbon and iron ore
- **Pharmaceutical synthesis**: Ensuring complete conversion with minimal waste

**Environmental Chemistry**:
- **Pollution control**: Designing scrubbers to neutralize acid gases
- **Catalytic converters**: Optimizing reactions to reduce automotive emissions
- **Water treatment**: Calculating chlorine doses for safe disinfection

**Biochemical Processes**:
- **Photosynthesis**: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
- **Cellular respiration**: Reverse of photosynthesis for energy production
- **Metabolic pathways**: Precise stoichiometric control in living systems\${citationInline('biochemical-stoichiometry', 26)}

\${bibliography([
  'brown-chemistry-14th',
  'nist-chemical-kinetics',
  'iupac-stoichiometry',
  'chemical-equation-standards',
  'iupac-nomenclature',
  'lavoisier-conservation',
  'equation-balancing-methods',
  'combustion-reactions',
  'reaction-classification',
  'synthesis-reactions',
  'decomposition-reactions',
  'activity-series',
  'precipitation-reactions',
  'combustion-chemistry',
  'avogadro-constant',
  'nist-constants',
  'atomic-masses',
  'dimensional-analysis',
  'analytical-chemistry',
  'molecular-formulas',
  'empirical-formulas',
  'stoichiometry-principles',
  'stoichiometry-examples',
  'reaction-yields',
  'industrial-chemistry',
  'biochemical-stoichiometry'
])}\`,
  practice: [
    {
      text: '1. **Equation Balancing**: Balance the following chemical equations:\n    a) __Al + __O₂ → __Al₂O₃\n    b) __C₄H₁₀ + __O₂ → __CO₂ + __H₂O\n    c) __Fe₂O₃ + __CO → __Fe + __CO₂\n    d) __Ca(OH)₂ + __H₃PO₄ → __Ca₃(PO₄)₂ + __H₂O',
    },
    {
      text: '2. **Mole Conversions**: Perform the following conversions:\n    a) How many moles are in 25.0 g of NaCl?\n    b) How many molecules are in 0.50 mol of CO₂?\n    c) What is the mass of 1.5 × 10²³ atoms of gold?\n    d) How many formula units are in 15.8 g of CaCO₃?',
    },
    {
      text: '3. **Empirical Formula Determination**: A compound contains 52.2% carbon, 13.0% hydrogen, and 34.8% oxygen by mass. Determine:\n    a) The empirical formula\n    b) The molecular formula if the molar mass is 92.0 g/mol',
    },
    {
      text: '4. **Stoichiometry Calculation**: For the reaction: 2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu\n    a) How many grams of copper are produced from 15.0 g of aluminum?\n    b) How many grams of CuSO₄ are needed to react with 8.50 g of aluminum?',
    },
    {
      text: '5. **Limiting Reactant Problem**: 25.0 g of Fe₂O₃ reacts with 15.0 g of CO according to:\n    Fe₂O₃ + 3CO → 2Fe + 3CO₂\n    \n    a) Which reactant is limiting?\n    b) How many grams of iron are produced?\n    c) How many grams of the excess reactant remain?',
    },
  ],
  answers: [
    {
      text: '1. **Balanced Equations**:\n    a) **4**Al + **3**O₂ → **2**Al₂O₃\n    b) **2**C₄H₁₀ + **13**O₂ → **8**CO₂ + **10**H₂O\n    c) **Fe₂O₃** + **3**CO → **2**Fe + **3**CO₂\n    d) **3**Ca(OH)₂ + **2**H₃PO₄ → **Ca₃(PO₄)₂** + **6**H₂O',
    },
    {
      text: '2. **Mole Conversion Solutions**:\n    a) **25.0 g NaCl × (1 mol ÷ 58.44 g) = 0.428 mol NaCl**\n    b) **0.50 mol CO₂ × (6.022 × 10²³ molecules ÷ 1 mol) = 3.0 × 10²³ molecules**\n    c) **1.5 × 10²³ atoms Au × (1 mol ÷ 6.022 × 10²³) × (197.0 g ÷ 1 mol) = 49.1 g Au**\n    d) **15.8 g CaCO₃ × (1 mol ÷ 100.09 g) × (6.022 × 10²³ units ÷ 1 mol) = 9.51 × 10²² formula units**',
    },
    {
      text: '3. **Empirical Formula Solution**:\n    **Assume 100 g sample**:\n    • C: 52.2 g ÷ 12.01 g/mol = 4.35 mol\n    • H: 13.0 g ÷ 1.01 g/mol = 12.9 mol\n    • O: 34.8 g ÷ 16.00 g/mol = 2.18 mol\n    \n    **Divide by smallest (2.18)**:\n    • C: 4.35 ÷ 2.18 = 2\n    • H: 12.9 ÷ 2.18 = 6\n    • O: 2.18 ÷ 2.18 = 1\n    \n    a) **Empirical formula: C₂H₆O**\n    b) **Empirical mass = 46.0 g/mol; n = 92.0 ÷ 46.0 = 2**\n       **Molecular formula: C₄H₁₂O₂**',
    },
    {
      text: '4. **Stoichiometry Solutions**:\n    a) **15.0 g Al × (1 mol Al ÷ 26.98 g) × (3 mol Cu ÷ 2 mol Al) × (63.55 g Cu ÷ 1 mol Cu) = 53.0 g Cu**\n    \n    b) **8.50 g Al × (1 mol Al ÷ 26.98 g) × (3 mol CuSO₄ ÷ 2 mol Al) × (159.61 g CuSO₄ ÷ 1 mol CuSO₄) = 75.4 g CuSO₄**',
    },
    {
      text: '5. **Limiting Reactant Solution**:\n    **Calculate moles**:\n    • Fe₂O₃: 25.0 g ÷ 159.69 g/mol = 0.157 mol\n    • CO: 15.0 g ÷ 28.01 g/mol = 0.536 mol\n    \n    **Check ratios**: Need 3 mol CO per 1 mol Fe₂O₃\n    • Required CO: 0.157 mol Fe₂O₃ × 3 = 0.471 mol CO\n    • Available CO: 0.536 mol\n    \n    a) **Fe₂O₃ is limiting** (need more than available)\n    b) **0.157 mol Fe₂O₃ × (2 mol Fe ÷ 1 mol Fe₂O₃) × (55.85 g ÷ 1 mol Fe) = 17.5 g Fe**\n    c) **Excess CO: 0.536 - 0.471 = 0.065 mol = 1.82 g CO remains**',
    },
  ],
};
