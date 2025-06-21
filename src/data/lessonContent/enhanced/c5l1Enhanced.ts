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
  ],
  narrative: `## **Chemical Reactions & Stoichiometry: The Recipe Book of Chemistry**

Chemical reactions are the fundamental processes that transform matter, creating everything from the oxygen we breathe to the complex molecules in our bodies${citationInline('brown-chemistry-14th', 1)}. Understanding these transformations quantitatively—through stoichiometry—provides chemists with the precise "recipes" needed to predict reaction outcomes, optimize industrial processes, and design new materials${citationInline('nist-chemical-kinetics', 2)}.

At its core, stoichiometry represents the application of conservation laws to chemical change. By balancing equations and understanding the mole concept, we can predict exactly how much product will form from given reactants, making chemistry a quantitative science capable of precision and prediction${citationInline('iupac-stoichiometry', 3)}.

## **Chemical Equations: The Language of Transformation**

Chemical equations serve as chemistry's universal language, providing a concise way to represent the complex rearrangements of atoms that occur during chemical reactions${citationInline('chemical-equation-standards', 4)}.

### **Anatomy of a Chemical Equation**

**Basic Structure**:
**Reactants → Products**

**Complete Representation**:
- **Chemical formulas**: Show the identity and composition of substances
- **State symbols**: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution
- **Coefficients**: Whole numbers indicating relative amounts
- **Reaction arrow**: Shows direction of transformation${citationInline('iupac-nomenclature', 5)}

### **The Law of Conservation of Mass**

Antoine Lavoisier's Law of Conservation of Mass states that matter cannot be created or destroyed in chemical reactions—only rearranged${citationInline('lavoisier-conservation', 6)}. This fundamental principle requires that:

- **Total mass of reactants = Total mass of products**
- **Number of atoms of each element must be equal on both sides**
- **Electrical charge must be conserved (in ionic reactions)**

### **Balancing Chemical Equations**

Balancing equations ensures compliance with conservation laws through systematic coefficient adjustment${citationInline('equation-balancing-methods', 7)}.

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
**Final Check**: 3 C, 8 H, 10 O on each side ✓${citationInline('combustion-reactions', 8)}

## **Classification of Chemical Reactions**

Understanding reaction patterns helps predict products and balance equations more efficiently${citationInline('reaction-classification', 9)}.

### **1. Synthesis (Combination) Reactions**

**Pattern**: A + B → AB
**Description**: Two or more simple substances combine to form a more complex compound

**Examples**:
- **Element + Element**: 2Na(s) + Cl₂(g) → 2NaCl(s)
- **Compound + Element**: 2SO₂(g) + O₂(g) → 2SO₃(g)
- **Compound + Compound**: CaO(s) + H₂O(l) → Ca(OH)₂(s)

**Applications**: Industrial synthesis of ammonia (Haber process), formation of ionic compounds${citationInline('synthesis-reactions', 10)}

### **2. Decomposition Reactions**

**Pattern**: AB → A + B
**Description**: A single compound breaks down into two or more simpler substances

**Common Types**:
- **Thermal decomposition**: 2HgO(s) → 2Hg(l) + O₂(g)
- **Electrolytic decomposition**: 2H₂O(l) → 2H₂(g) + O₂(g)
- **Catalytic decomposition**: 2H₂O₂(aq) → 2H₂O(l) + O₂(g)

**Applications**: Extraction of metals from ores, production of industrial gases${citationInline('decomposition-reactions', 11)}

### **3. Single Replacement Reactions**

**Pattern**: A + BC → AC + B
**Description**: One element replaces another element in a compound

**Driving Force**: **Activity series** determines which metals can replace others
- More active metal displaces less active metal from compounds
- Activity order: K > Na > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au

**Examples**:
- **Metal displacement**: Zn(s) + Cu(NO₃)₂(aq) → Cu(s) + Zn(NO₃)₂(aq)
- **Hydrogen displacement**: Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)${citationInline('activity-series', 12)}

### **4. Double Replacement Reactions**

**Pattern**: AB + CD → AD + CB
**Description**: Cations and anions of two ionic compounds exchange partners

**Driving Forces**:
- **Precipitate formation**: Creates insoluble solid
- **Gas evolution**: Produces gaseous product
- **Acid-base neutralization**: Forms water

**Example with Precipitate**:
AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)
(Silver chloride precipitates out of solution)${citationInline('precipitation-reactions', 13)}

### **5. Combustion Reactions**

**Description**: Rapid reaction with oxygen producing heat and light

**Hydrocarbon Combustion**:
- **Complete combustion**: CₓHᵧ + O₂ → CO₂ + H₂O
- **Incomplete combustion**: CₓHᵧ + O₂ → CO + H₂O (insufficient oxygen)

**Example**: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) + energy

**Applications**: Energy production, automotive engines, heating systems${citationInline('combustion-chemistry', 14)}

## **The Mole Concept: Chemistry's Counting Unit**

The **mole** provides the essential bridge between the microscopic world of atoms and molecules and the macroscopic world of laboratory measurements${citationInline('avogadro-constant', 15)}.

### **Defining the Mole**

**1 mole = 6.022 × 10²³ representative particles**

This number, **Avogadro's constant**, represents the number of carbon-12 atoms in exactly 12 grams of carbon-12${citationInline('nist-constants', 16)}.

**Representative Particles**:
- **Elements**: atoms (1 mol Fe = 6.022 × 10²³ Fe atoms)
- **Molecular compounds**: molecules (1 mol H₂O = 6.022 × 10²³ H₂O molecules)  
- **Ionic compounds**: formula units (1 mol NaCl = 6.022 × 10²³ NaCl formula units)

### **Molar Mass: The Molecular Scale**

**Molar mass** is the mass in grams of one mole of a substance, numerically equal to the atomic or molecular mass in atomic mass units${citationInline('atomic-masses', 17)}.

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
moles = particles ÷ 6.022 × 10²³${citationInline('dimensional-analysis', 18)}

## **Percent Composition and Formula Determination**

Chemical analysis reveals the quantitative composition of compounds, enabling determination of empirical and molecular formulas${citationInline('analytical-chemistry', 19)}.

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
where n = molecular mass ÷ empirical formula mass${citationInline('molecular-formulas', 20)}

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

**Ratio Calculation**:
- C: 3.33 ÷ 3.33 = 1
- H: 6.6 ÷ 3.33 ≈ 2
- O: 3.33 ÷ 3.33 = 1
- **Empirical Formula: CH₂O**

## **Stoichiometry: The Math Behind the Reactions**

Stoichiometry allows us to calculate the amounts of reactants and products involved in a chemical reaction using mole ratios from balanced equations${citationInline('stoichiometry-principles', 21)}.

### **Mole Ratios**

**Definition**: Conversion factors derived from the coefficients of a balanced equation.

**Example: N₂ + 3H₂ → 2NH₃**
- Mole ratios: (1 mol N₂ / 3 mol H₂), (3 mol H₂ / 2 mol NH₃), (1 mol N₂ / 2 mol NH₃), etc.

### **Types of Stoichiometric Calculations**

1. **Mole-Mole**: Moles of substance A → Moles of substance B
2. **Mass-Mole**: Mass of A → Moles of A → Moles of B
3. **Mass-Mass**: Mass of A → Moles of A → Moles of B → Mass of B

**Example: How many grams of NH₃ can be produced from 5.40 g of H₂?**
1. **Moles H₂**: 5.40 g H₂ × (1 mol H₂ / 2.02 g H₂) = 2.67 mol H₂
2. **Moles NH₃**: 2.67 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 1.78 mol NH₃
3. **Grams NH₃**: 1.78 mol NH₃ × (17.03 g NH₃ / 1 mol NH₃) = 30.3 g NH₃

## **Limiting Reactants and Percent Yield**

### **Limiting Reactant**

The reactant that is completely consumed first in a reaction, thereby limiting the amount of product that can be formed${citationInline('limiting-reactant-concepts', 22)}.

**Determining the Limiting Reactant**:
1. **Calculate moles of each reactant**
2. **Divide moles by the reactant's coefficient**
3. **The smallest result identifies the limiting reactant**

### **Theoretical, Actual, and Percent Yield**

- **Theoretical Yield**: Maximum amount of product that *can be* formed from the limiting reactant (calculated via stoichiometry)
- **Actual Yield**: Amount of product *actually obtained* in the lab (measured)
- **Percent Yield**: (Actual Yield / Theoretical Yield) × 100%

Percent yield provides a measure of a reaction's efficiency${citationInline('percent-yield', 23)}.

${bibliography([
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
  'stoichiometry-principles',
  'limiting-reactant-concepts',
  'percent-yield'
])}`,
  practice: [
    { text: 'Write and balance the equation for the combustion of ethanol (C₂H₅OH).' },
    {
      text: 'How many moles are in 58.1 g of NaCl? How many formula units?',
    },
    {
      text: 'Determine the empirical formula of a compound that is 27.3% C and 72.7% O by mass.',
    },
    {
      text: 'If 20.0 g of magnesium reacts with excess hydrochloric acid, how many grams of hydrogen gas are produced? (Mg + 2HCl → MgCl₂ + H₂)',
    },
    {
      text: 'In a reaction, 12.5 g of copper is produced, but the theoretical yield was 15.0 g. What is the percent yield?',
    },
  ],
  answers: [
    { text: 'C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)' },
    {
      text: '1.00 mol NaCl; 6.02 × 10²³ formula units. Molar mass of NaCl is 58.44 g/mol. 58.1 g / 58.44 g/mol ≈ 1.00 mol. 1.00 mol × (6.022 × 10²³ units/mol) = 6.02 × 10²³ units.',
    },
    {
      text: 'CO₂. Assume 100g: 27.3g C, 72.7g O. Moles: 2.27 mol C, 4.54 mol O. Ratio: C₁O₂.',
    },
    {
      text: '1.65 g H₂. Moles Mg: 20.0g / 24.31 g/mol = 0.823 mol Mg. Mole ratio H₂/Mg is 1/1. Moles H₂ = 0.823 mol. Grams H₂ = 0.823 mol * 2.02 g/mol = 1.66 g H₂.',
    },
    {
      text: '83.3%. (12.5 g / 15.0 g) * 100% = 83.3%.',
    },
  ],
};