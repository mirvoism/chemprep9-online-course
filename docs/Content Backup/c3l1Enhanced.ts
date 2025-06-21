import { Lesson } from '../../../../types';
import { citationInline, bibliography } from '../../../utils/citationManager';

export const c3l1Enhanced: Lesson = {
  id: 'C3L1_ENHANCED',
  unit: 3,
  title: 'The Periodic Table: Organization & Trends',
  objectives: [
    'Describe the organization of the periodic table in terms of groups, periods, and atomic number.',
    'Locate and classify elements as metals, nonmetals, and metalloids based on their position.',
    'Define and predict periodic trends for atomic radius, ionic radius, ionization energy, and electronegativity.',
    'Predict chemical properties and behavior based on an element\'s position in the periodic table.',
    'Describe characteristic properties of major elemental groups including alkali metals, halogens, and noble gases.',
  ],
  labMinutes: 50,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/atomic-interactions/latest/atomic-interactions_en.html',
      title: 'Atomic Interactions',
      description:
        'Explore how atoms interact with each other based on their size and electronegativity. Observe how periodic trends affect atomic behavior and chemical bonding.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html',
      title: 'Build an Atom',
      description:
        'Construct atoms by adding protons, neutrons, and electrons. Observe how atomic structure relates to periodic table position and chemical properties.',
    },
    {
      type: 'custom',
      title: 'Interactive Periodic Table Explorer',
      description:
        'Click any element to explore its properties, trends, and chemical behavior with real-time visualizations.',
      placeholderText:
        '**Learning Goal:** Master periodic table navigation and property prediction.\n\n**Functionality:** Students click elements to see detailed information cards with atomic data, electron configuration, and chemical properties. Color-coded view modes highlight metals/nonmetals/metalloids, groups, periods, and trends. Interactive quizzes test element identification and property prediction.\n\n*Real-time feedback guides students through periodic relationships and trend analysis.*',
    },
    {
      type: 'custom',
      title: 'Periodic Trends Visualizer',
      description:
        'Dynamic 3D visualization of how atomic properties change across periods and down groups.',
      placeholderText:
        '**Learning Goal:** Understand periodic trends through visual representation.\n\n**Functionality:** Elements appear as 3D spheres with sizes representing atomic radius, ionization energy, or electronegativity. Students can select different properties and watch the periodic table transform to show trends. Interactive sliders allow comparison between elements.\n\n*Visual learning reinforces trend patterns and helps predict unknown element properties.*',
    },
    {
      type: 'custom',
      title: 'Element Family Challenge',
      description:
        'Sort elements into their correct chemical families based on properties and behavior.',
      placeholderText:
        '**Learning Goal:** Connect periodic table position to chemical behavior.\n\n**Functionality:** Students receive element cards with properties (reactivity, valence electrons, typical ions formed) and must sort them into correct groups: alkali metals, halogens, noble gases, etc. Immediate feedback explains the connection between position and properties.\n\n*Reinforces the relationship between electron configuration and chemical behavior.*',
    },
  ],
  narrative: `## **The Periodic Table: Chemistry's Most Powerful Prediction Tool**

The periodic table is far more than a reference chart—it's a sophisticated prediction system that reveals the fundamental relationships between atomic structure and chemical behavior\${citationInline('nist-atomic-structure', 1)}. When Dmitri Mendeleev first organized the elements in 1869, he discovered that arranging them by atomic mass revealed repeating patterns of properties. Today's modern periodic table, organized by atomic number rather than mass, demonstrates the **Periodic Law**: when elements are arranged by increasing atomic number, their properties repeat in a predictable pattern\${citationInline('iupac-periodic-table', 2)}.

This organizational system allows chemists to predict the properties of unknown elements, design new materials, and understand chemical reactivity patterns that govern everything from biological processes to industrial manufacturing\${citationInline('brown-chemistry-14th', 3)}.

## **Structure & Organization: The Logic Behind the Arrangement**

### **Atomic Number: The True Organizing Principle**

Unlike Mendeleev's original table based on atomic mass, the modern periodic table arranges elements by **atomic number**—the number of protons in the nucleus\${citationInline('nist-atomic-data', 4)}. This arrangement eliminates the inconsistencies that plagued earlier versions and reveals the fundamental relationship between nuclear charge and chemical properties.

The atomic number determines:
- **Nuclear charge**: More protons = stronger positive charge
- **Electron configuration**: Number of electrons in neutral atoms
- **Chemical identity**: Elements with different atomic numbers are fundamentally different substances\${citationInline('nist-webbook', 5)}

### **Groups and Periods: The Grid System**

The periodic table's grid structure reveals two crucial organizational principles:

**Groups (Vertical Columns)**: 18 numbered columns containing elements with identical **valence electron configurations**\${citationInline('nysed-chemistry-standards', 6)}. This shared electron arrangement creates:
- Similar chemical properties within each group
- Predictable patterns in reactivity and bonding behavior
- Consistent trends in physical properties

**Periods (Horizontal Rows)**: 7 numbered rows containing elements with the same **number of occupied electron shells**\${citationInline('brown-chemistry-14th', 7)}. As you move across a period:
- Nuclear charge increases steadily
- Electrons fill the same principal energy level
- Properties change predictably from metallic to nonmetallic

## **Periodic Trends: Predictable Patterns in Atomic Properties**

The periodic table's power lies in its ability to predict properties based on position. Four major trends govern atomic behavior\${citationInline('nist-atomic-properties', 8)}.

### **Atomic Radius: The Size Game**

Atomic radius represents the distance from the nucleus to the outermost electrons in an atom\${citationInline('crc-handbook-chemistry', 9)}.

**Trend Across a Period (Left to Right)**:
- **Radius DECREASES** despite adding electrons
- **Explanation**: Added electrons enter the same shell while nuclear charge increases
- **Nuclear charge wins**: Stronger positive charge pulls electron cloud inward
- **Example**: Na (186 pm) > Mg (160 pm) > Al (143 pm) > Si (117 pm)

**Trend Down a Group (Top to Bottom)**:
- **Radius INCREASES** despite increasing nuclear charge
- **Explanation**: Each period adds a new electron shell
- **Shielding effect**: Inner electrons block nuclear attraction from outer electrons
- **Example**: Li (152 pm) < Na (186 pm) < K (227 pm) < Rb (248 pm)\${citationInline('nist-atomic-radii', 10)}

### **Ionization Energy: The Electron-Holding Power**

First ionization energy measures the energy required to remove the most loosely bound electron from a gaseous atom\${citationInline('nist-ionization-data', 11)}.

**Trend Across a Period**:
- **Ionization energy INCREASES** from left to right
- **Explanation**: Higher nuclear charge holds electrons more tightly
- **Metal to nonmetal transition**: Easy electron loss → difficult electron removal

**Trend Down a Group**:
- **Ionization energy DECREASES** from top to bottom
- **Explanation**: Valence electrons are farther from nucleus and more shielded
- **Result**: Lower elements lose electrons more easily

**Notable Exceptions**: Small deviations occur due to:
- **Sublevel stability**: Half-filled and filled sublevels resist electron removal
- **Examples**: B < Be (2p vs 2s), O < N (electron pairing vs half-filled p)\${citationInline('brown-chemistry-14th', 12)}

### **Electronegativity: The Electron-Attracting Power**

Electronegativity measures an atom's ability to attract shared electrons in a chemical bond\${citationInline('pauling-electronegativity', 13)}. Using the Pauling scale (0-4.0):

**Trend Across a Period**:
- **Electronegativity INCREASES** from left to right
- **Most electronegative**: Fluorine (4.0)
- **Least electronegative**: Francium (0.7)

**Trend Down a Group**:
- **Electronegativity DECREASES** from top to bottom
- **Explanation**: Larger atoms have less nuclear attraction for bonding electrons

**Chemical Significance**:
- **Predicts bond polarity**: Large EN differences → ionic bonds
- **Determines molecular properties**: Affects shape, reactivity, and intermolecular forces\${citationInline('nist-bond-data', 14)}

## **Chemical Families: Elements with Shared Personalities**

Elements in the same group exhibit remarkably similar chemical behaviors due to identical valence electron configurations\${citationInline('cotton-advanced-inorganic', 15)}.

### **Group 1: Alkali Metals - The Ultimate Electron Donors**

**Members**: Lithium (Li), Sodium (Na), Potassium (K), Rubidium (Rb), Cesium (Cs), Francium (Fr)

**Electron Configuration**: One valence electron (ns¹)\${citationInline('nist-electron-config', 16)}

**Chemical Properties**:
- **Extremely reactive**: React violently with water to produce hydrogen gas
- **Form +1 ions exclusively**: Li⁺, Na⁺, K⁺, etc.
- **Reducing agents**: Readily donate their single valence electron
- **Reactivity increases down group**: Cs > Rb > K > Na > Li

**Physical Properties**:
- **Soft metals**: Can be cut with a knife
- **Low densities**: First three elements float on water
- **Low melting points**: Decrease down the group

**Biological Significance**:
- **Sodium and potassium**: Essential electrolytes for nerve transmission
- **Lithium**: Used in psychiatric medications
- **Applications**: Sodium streetlights, potassium fertilizers\${citationInline('nist-biological-data', 17)}

### **Group 17: Halogens - The Electron Hungry**

**Members**: Fluorine (F), Chlorine (Cl), Bromine (Br), Iodine (I), Astatine (At)

**Electron Configuration**: Seven valence electrons (ns²np⁵)\${citationInline('nist-halogen-data', 18)}

**Chemical Properties**:
- **Highly reactive nonmetals**: Need only one electron to complete octet
- **Form -1 ions**: F⁻, Cl⁻, Br⁻, I⁻
- **Oxidizing agents**: Accept electrons from other substances
- **Reactivity decreases down group**: F > Cl > Br > I
- **Diatomic molecules**: Exist as F₂, Cl₂, Br₂, I₂

**Physical Properties**:
- **State progression**: F₂, Cl₂ (gases) → Br₂ (liquid) → I₂ (solid)
- **Color intensifies**: F₂ (pale yellow) → I₂ (deep purple)

**Applications**:
- **Fluorine**: Toothpaste, Teflon, refrigerants
- **Chlorine**: Water disinfection, bleach, PVC plastic
- **Iodine**: Antiseptic, thyroid hormone production\${citationInline('greenwood-chemistry-elements', 19)}

### **Group 18: Noble Gases - The Chemical Aristocrats**

**Members**: Helium (He), Neon (Ne), Argon (Ar), Krypton (Kr), Xenon (Xe), Radon (Rn)

**Electron Configuration**: Complete valence shells (ns²np⁶, except He: 1s²)\${citationInline('nist-noble-gas-data', 20)}

**Chemical Properties**:
- **Extremely unreactive**: Complete electron configurations provide maximum stability
- **Monatomic**: Exist as single atoms, not molecules
- **Rarely form compounds**: Only under extreme conditions (mainly Kr, Xe, Rn)

**Physical Properties**:
- **All gases at room temperature**: Low intermolecular forces
- **Low boiling points**: Increase down the group
- **Colorless and odorless**: Chemically inert

**Applications**:
- **Helium**: Balloons, diving mixtures, MRI cooling
- **Neon**: Advertising signs, lasers
- **Argon**: Welding atmospheres, incandescent bulbs
- **Xenon**: Car headlights, medical imaging\${citationInline('nist-industrial-gases', 21)}

\${bibliography([
  'nist-atomic-structure',
  'iupac-periodic-table', 
  'brown-chemistry-14th',
  'nist-atomic-data',
  'nist-webbook',
  'nysed-chemistry-standards',
  'nist-atomic-properties',
  'crc-handbook-chemistry',
  'nist-atomic-radii',
  'nist-ionization-data',
  'pauling-electronegativity',
  'nist-bond-data',
  'cotton-advanced-inorganic',
  'nist-electron-config',
  'nist-biological-data',
  'nist-halogen-data',
  'greenwood-chemistry-elements',
  'nist-noble-gas-data',
  'nist-industrial-gases'
])}`,
  practice: [
    {
      text: '1. **Periodic Organization**: Explain why the modern periodic table is organized by atomic number rather than atomic mass. What fundamental principle does this arrangement reveal?',
    },
    {
      text: '2. **Element Classification**: Classify each element and predict its properties:\n    a) Element X: Atomic number 19, located in Group 1\n    b) Element Y: Atomic number 17, located in Group 17\n    c) Element Z: Atomic number 14, located along the metalloid diagonal\n    \n    For each element, predict: metallic character, likely ion charge, and general chemical behavior.',
    },
    {
      text: '3. **Periodic Trends Analysis**: For the elements Na, Mg, Al, and Si (all in Period 3):\n    a) Arrange in order of increasing atomic radius\n    b) Arrange in order of increasing first ionization energy\n    c) Arrange in order of increasing electronegativity\n    d) Explain the reasoning behind each trend',
    },
    {
      text: '4. **Ion Size Comparison**: Compare the sizes of the following atoms and ions. Explain your reasoning:\n    a) Na vs. Na⁺\n    b) Cl vs. Cl⁻\n    c) Na⁺ vs. Mg²⁺ (both are isoelectronic)\n    d) Cl⁻ vs. K⁺ (both are isoelectronic)',
    },
    {
      text: '5. **Chemical Family Properties**: An unknown element has the following properties:\n    - Soft, silvery metal\n    - Reacts violently with water\n    - Forms a +1 ion\n    - Located in Period 4\n    \n    Identify the element and its group. Predict how its reactivity compares to other members of its chemical family.',
    },
  ],
  answers: [
    {
      text: '1. **Modern Periodic Table Organization**:\n    The modern table uses **atomic number** (number of protons) rather than atomic mass because:\n    - **Fundamental identity**: Atomic number determines an element\'s chemical identity\n    - **Eliminates inconsistencies**: Resolves problems like Ar/K and Te/I inversions in mass-based tables\n    - **Reveals periodic law**: When arranged by atomic number, properties repeat predictably\n    - **Electron configuration basis**: Atomic number determines electron arrangement, which governs chemical behavior\n    \n    This arrangement reveals that **nuclear charge is the fundamental organizing principle** of matter.',
    },
    {
      text: '2. **Element Classification and Predictions**:\n    a) **Element X (Z=19, Group 1)**: \n       - **Potassium (K)**: Alkali metal\n       - **Properties**: Soft, silvery metal; highly reactive; forms K⁺ ions; reacts violently with water\n    \n    b) **Element Y (Z=17, Group 17)**:\n       - **Chlorine (Cl)**: Halogen\n       - **Properties**: Reactive nonmetal gas; forms Cl⁻ ions; strong oxidizing agent; diatomic (Cl₂)\n    \n    c) **Element Z (Z=14, Metalloid diagonal)**:\n       - **Silicon (Si)**: Metalloid\n       - **Properties**: Semiconductor; intermediate metallic character; forms Si⁴⁺ or Si⁴⁻ ions; essential for electronics',
    },
    {
      text: '3. **Periodic Trends in Period 3**:\n    a) **Atomic radius**: Si < Al < Mg < Na\n       - **Reasoning**: Nuclear charge increases across period, pulling electrons closer\n    \n    b) **First ionization energy**: Na < Mg < Al < Si\n       - **Reasoning**: Higher nuclear charge holds electrons more tightly\n    \n    c) **Electronegativity**: Na < Mg < Al < Si\n       - **Reasoning**: Increased nuclear charge attracts bonding electrons more strongly\n    \n    d) **General principle**: Across a period, nuclear charge increases while electron shielding remains constant, causing trends in atomic properties.',
    },
    {
      text: '4. **Ion Size Comparisons**:\n    a) **Na > Na⁺**: Cation formation removes outermost electron shell\n    b) **Cl⁻ > Cl**: Anion formation adds electron, increasing electron-electron repulsion\n    c) **Na⁺ > Mg²⁺**: Both have 10 electrons, but Mg²⁺ has higher nuclear charge (12 vs 11 protons)\n    d) **Cl⁻ > K⁺**: Both have 18 electrons, but K⁺ has higher nuclear charge (19 vs 17 protons)\n    \n    **Key principle**: For isoelectronic species, size decreases with increasing nuclear charge.',
    },
    {
      text: '5. **Unknown Element Identification**:\n    **Identity**: Potassium (K), Group 1, Period 4\n    \n    **Evidence**:\n    - **Soft, silvery metal + violent water reaction**: Characteristic of alkali metals\n    - **Forms +1 ion**: Confirms Group 1 (one valence electron)\n    - **Period 4**: Narrows to potassium\n    \n    **Reactivity comparison**:\n    - **More reactive than**: Li, Na (reactivity increases down Group 1)\n    - **Less reactive than**: Rb, Cs (larger atoms lose electrons more easily)\n    - **Reactivity order**: Li < Na < K < Rb < Cs',
    },
  ],
};
