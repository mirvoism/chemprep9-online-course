import { Lesson } from '../../../types';

export const c3l1Data: Lesson = {
  id: 'C3L1',
  unit: 3,
  title: 'Periodic Table Layout',
  objectives: [
    'Describe the organization of the periodic table (groups, periods, and blocks).',
    'Distinguish between metals, nonmetals, and metalloids based on their position and properties.',
    'Locate and identify key families of elements: alkali metals, alkaline earth metals, transition metals, halogens, and noble gases.',
    'Relate the arrangement of elements to their electron configurations (briefly, as a precursor to periodic trends).',
  ],
  labMinutes: 0,
  interactive: [
    {
      type: 'phet',
      url: 'C2L1_build_an_atom', // Re-using existing key from phetMapping.ts
      title: 'Build an Atom (Review)',
      description:
        "Review atomic structure (protons, neutrons, electrons) which determines an element's position in the periodic table.",
    },
    {
      type: 'custom',
      componentKey: 'PeriodicTableExplorer', // This component does not exist yet.
      title: 'Periodic Table Explorer (Conceptual)',
      description: 'Explore elements, their properties, and positions on the periodic table.',
      placeholderText: `**Learning Goal:** To interactively explore the periodic table, learning about element properties, classifications, and trends.\n
**Intended Functionality:**
1.  **Visual Representation:** Display a full, interactive periodic table.
2.  **Element Information:** Clicking on an element would display detailed information (from \`elementsData.ts\`) such as:
    *   Symbol, Name, Atomic Number, Atomic Mass
    *   Electron Configuration
    *   Group, Period, Block
    *   Classification (Metal, Nonmetal, Metalloid)
    *   Family (Alkali Metal, Halogen, etc.)
    *   Key properties (e.g., electronegativity, ionization energy - for later lessons)
3.  **Highlighting Features:** Buttons or overlays to highlight:
    *   Groups, Periods, Blocks (s, p, d, f)
    *   Metals, Nonmetals, Metalloids (showing the stair-step line)
    *   Specific families (Alkali Metals, Halogens, etc.)
4.  **Trend Visualization (Advanced):** Option to color-code the table to show trends like atomic radius, ionization energy (for C3L2).
_This tool would provide a dynamic way to learn the table's structure and element properties._`,
    },
  ],
  narrative: `**The Architect of Elements: The Periodic Table**
The Periodic Table of Elements is one of the most significant achievements in science, providing a systematic way to organize and understand the properties of all known elements. It's like a map of the building blocks of the universe.

**Historical Context: Order from Chaos**
In the mid-19th century, scientists had discovered many elements but lacked a consistent way to organize them.
*   **Dmitri Mendeleev** (1869) is credited with creating the first widely recognized periodic table. He arranged elements primarily by increasing **atomic mass** and grouped them by similar **chemical properties**. Crucially, he left gaps for undiscovered elements and predicted their properties with remarkable accuracy.
*   **Henry Moseley** (early 20th century) later refined the table by arranging elements by increasing **atomic number** (number of protons), which resolved some inconsistencies in Mendeleev's table. This is the basis of the modern periodic table.

**Organization of the Modern Periodic Table**

<svg width="500" height="320" xmlns="http://www.w3.org/2000/svg" aria-labelledby="periodic-table-structure-title-c3l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="periodic-table-structure-title-c3l1">Basic structure of the Periodic Table showing Periods, Groups, and Blocks.</title>
  <style>
    .pt-rect-c3l1 { stroke: var(--color-border); stroke-width: 0.5; }
    .pt-text-c3l1 { font-size: 0.7em; text-anchor: middle; fill: var(--color-text-muted); }
    .pt-label-c3l1 { font-size: 0.8em; text-anchor: middle; fill: var(--color-text-light); font-weight: bold;}
    .s-block-c3l1 { fill: var(--color-primary); fill-opacity: 0.3; }
    .p-block-c3l1 { fill: var(--color-accent); fill-opacity: 0.3; }
    .d-block-c3l1 { fill: var(--color-danger); fill-opacity: 0.3; } /* Using danger for distinct color */
    .f-block-c3l1 { fill: #FFD700; fill-opacity: 0.3; } /* Gold-like for f-block */
  </style>

  <text x="250" y="20" class="pt-label-c3l1">Periodic Table Structure</text>

  <!-- Periods Labels -->
  <text x="15" y="55" class="pt-text-c3l1">P1</text>
  <text x="15" y="80" class="pt-text-c3l1">P2</text>
  <text x="15" y="105" class="pt-text-c3l1">P3</text>
  <text x="15" y="130" class="pt-text-c3l1">P4</text>
  <text x="15" y="155" class="pt-text-c3l1">P5</text>
  <text x="15" y="180" class="pt-text-c3l1">P6</text>
  <text x="15" y="205" class="pt-text-c3l1">P7</text>

  <!-- Groups Labels (simplified) -->
  <text x="45" y="35" class="pt-text-c3l1">G1</text> <text x="70" y="35" class="pt-text-c3l1">G2</text>
  <text x="220" y="35" class="pt-text-c3l1">G3-12</text>
  <text x="345" y="35" class="pt-text-c3l1">G13</text> <text x="370" y="35" class="pt-text-c3l1">G14</text>
  <text x="395" y="35" class="pt-text-c3l1">G15</text> <text x="420" y="35" class="pt-text-c3l1">G16</text>
  <text x="445" y="35" class="pt-text-c3l1">G17</text> <text x="470" y="35" class="pt-text-c3l1">G18</text>

  <!-- s-block -->
  <rect x="30" y="40" width="20" height="20" class="s-block-c3l1 pt-rect-c3l1"/> <!-- H -->
  <rect x="30" y="65" width="20" height="20" class="s-block-c3l1 pt-rect-c3l1"/> <rect x="55" y="65" width="20" height="20" class="s-block-c3l1 pt-rect-c3l1"/>
  <rect x="30" y="90" width="20" height="20" class="s-block-c3l1 pt-rect-c3l1"/> <rect x="55" y="90" width="20" height="20" class="s-block-c3l1 pt-rect-c3l1"/>
  <rect x="30" y="115" width="20" height="45" class="s-block-c3l1 pt-rect-c3l1"/> <rect x="55" y="115" width="20" height="45" class="s-block-c3l1 pt-rect-c3l1"/>
  <rect x="30" y="165" width="20" height="20" class="s-block-c3l1 pt-rect-c3l1"/> <rect x="55" y="165" width="20" height="20" class="s-block-c3l1 pt-rect-c3l1"/>
  <rect x="30" y="190" width="20" height="20" class="s-block-c3l1 pt-rect-c3l1"/> <rect x="55" y="190" width="20" height="20" class="s-block-c3l1 pt-rect-c3l1"/>
  <text x="42" y="100" class="pt-label-c3l1" fill="var(--color-primary-hover)">s</text>

  <!-- p-block -->
  <rect x="455" y="40" width="20" height="20" class="p-block-c3l1 pt-rect-c3l1"/> <!-- He -->
  <path d="M330 65 h145 v70 h-145 Z" class="p-block-c3l1 pt-rect-c3l1"/>
  <text x="400" y="100" class="pt-label-c3l1" fill="var(--color-accent)">p</text>

  <!-- d-block (transition metals) -->
  <path d="M80 115 h245 v45 h-245 Z" class="d-block-c3l1 pt-rect-c3l1"/>
  <text x="200" y="138" class="pt-label-c3l1" fill="var(--color-danger)">d</text>

  <!-- f-block (Lanthanides/Actinides) -->
  <rect x="90" y="235" width="280" height="20" class="f-block-c3l1 pt-rect-c3l1"/>
  <rect x="90" y="260" width="280" height="20" class="f-block-c3l1 pt-rect-c3l1"/>
  <text x="230" y="258" class="pt-label-c3l1" fill="#B8860B">f</text>
  <line x1="80" y1="185" x2="90" y2="230" stroke="var(--color-text-muted)" stroke-dasharray="2,2"/>
  <line x1="80" y1="210" x2="90" y2="255" stroke="var(--color-text-muted)" stroke-dasharray="2,2"/>

  <text x="30" y="290" class="pt-text-c3l1">Periods (Rows) → Increase Principal Energy Level (n)</text>
  <text x="250" y="305" class="pt-text-c3l1">Groups (Columns) → Similar Valence Electrons & Properties</text>
</svg>

*   **Periods (Rows):**
    *   Horizontal rows on the periodic table (numbered 1-7).
    *   Elements in the same period have their valence electrons in the same **principal energy level (n)**.
    *   Example: Elements in Period 2 (Li, Be, B, C, N, O, F, Ne) have their valence electrons in the n=2 energy level.
*   **Groups (Columns/Families):**
    *   Vertical columns on the periodic table.
    *   Numbered 1-18 (IUPAC system) or by A/B groups (e.g., 1A, 2A, 3B...8A).
    *   Elements in the same group have the **same number of valence electrons** and thus similar **chemical properties**.
    *   Example: Group 1 elements (Alkali Metals) all have 1 valence electron.
*   **Blocks (s, p, d, f):**
    *   The periodic table can be divided into blocks based on the sublevel (s, p, d, or f) being filled with valence electrons.
        *   **s-block:** Groups 1 and 2 (plus Helium). Valence electrons are in the s sublevel.
        *   **p-block:** Groups 13-18. Valence electrons are in s and p sublevels.
        *   **d-block:** Groups 3-12 (Transition Metals). Valence electrons are in s and d sublevels.
        *   **f-block:** Lanthanides and Actinides (Inner Transition Metals). Valence electrons are in s and f sublevels.

**Classification of Elements**

<svg width="450" height="280" xmlns="http://www.w3.org/2000/svg" aria-labelledby="element-classification-title-c3l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="element-classification-title-c3l1">Periodic Table showing Metals, Nonmetals, and Metalloids.</title>
  <style>
    .metal-c3l1 { fill: var(--color-primary); fill-opacity: 0.4; }
    .nonmetal-c3l1 { fill: var(--color-accent); fill-opacity: 0.4; }
    .metalloid-c3l1 { fill: var(--color-warning); fill-opacity: 0.5; } /* Orange-like for metalloids */
    .stair-step-c3l1 { stroke: var(--color-text-light); stroke-width: 2; stroke-dasharray: 3,3; }
    .cls-text-c3l1 { font-size: 0.9em; text-anchor: middle; fill: var(--color-text-muted); }
    .legend-text-c3l1 { font-size: 0.8em; fill: var(--color-text-light); }
  </style>
  <text x="225" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Classification of Elements</text>

  <!-- Metals Area (vast majority on left and center) -->
  <path d="M20 40 H280 V200 H20 Z" class="metal-c3l1"/> <!-- Simplified metal area -->
  <polygon points="20,40 280,40 280,120 240,120 240,140 200,140 200,160 160,160 160,180 120,180 120,200 20,200" class="metal-c3l1"/>
  <text x="100" y="100" class="cls-text-c3l1" fill="var(--color-primary-hover)">METALS</text>
  
  <!-- Nonmetals Area (right side, plus Hydrogen) -->
  <rect x="20" y="40" width="25" height="25" class="nonmetal-c3l1"/> <!-- Hydrogen -->
  <text x="32" y="52" font-size="0.6em" fill="var(--color-accent)">H</text>
  <path d="M300 40 H430 V160 H380 V140 H340 V120 H300 Z" class="nonmetal-c3l1"/> <!-- Simplified nonmetal area -->
  <text x="360" y="100" class="cls-text-c3l1" fill="var(--color-success)">NONMETALS</text>

  <!-- Metalloids (along the stair-step line) -->
  <!-- B --> <rect x="285" y="60" width="25" height="25" class="metalloid-c3l1"/> <text x="297" y="72" font-size="0.6em">B</text>
  <!-- Si --> <rect x="310" y="85" width="25" height="25" class="metalloid-c3l1"/> <text x="322" y="97" font-size="0.6em">Si</text>
  <!-- Ge --> <rect x="285" y="110" width="25" height="25" class="metalloid-c3l1"/> <text x="297" y="122" font-size="0.6em">Ge</text>
  <!-- As --> <rect x="335" y="110" width="25" height="25" class="metalloid-c3l1"/> <text x="347" y="122" font-size="0.6em">As</text>
  <!-- Sb --> <rect x="310" y="135" width="25" height="25" class="metalloid-c3l1"/> <text x="322" y="147" font-size="0.6em">Sb</text>
  <!-- Te --> <rect x="360" y="135" width="25" height="25" class="metalloid-c3l1"/> <text x="372" y="147" font-size="0.6em">Te</text>
  <!-- Po (sometimes considered metalloid) --> <rect x="335" y="160" width="25" height="25" class="metalloid-c3l1" fill-opacity="0.2"/> <text x="347" y="172" font-size="0.6em" fill-opacity="0.5">Po</text>
  <text x="300" y="180" class="cls-text-c3l1" fill="var(--color-warning)">METALLOIDS</text>

  <!-- Stair-step Line -->
  <polyline points="280,60 310,60 310,85 335,85 335,110 360,110 360,135 385,135 385,160" fill="none" class="stair-step-c3l1"/>
  <text x="350" y="175" font-size="0.7em" fill="var(--color-text-light)">Stair-step line</text>

  <!-- Legend -->
  <rect x="30" y="220" width="15" height="15" class="metal-c3l1"/> <text x="55" y="232" class="legend-text-c3l1">Metals</text>
  <rect x="120" y="220" width="15" height="15" class="nonmetal-c3l1"/> <text x="145" y="232" class="legend-text-c3l1">Nonmetals</text>
  <rect x="230" y="220" width="15" height="15" class="metalloid-c3l1"/> <text x="255" y="232" class="legend-text-c3l1">Metalloids</text>
</svg>

1.  **Metals:**
    *   Location: Found on the **left side and center** of the periodic table (most elements are metals).
    *   General Properties:
        *   Good conductors of heat and electricity.
        *   Lustrous (shiny).
        *   Malleable (can be hammered into sheets).
        *   Ductile (can be drawn into wires).
        *   Typically solid at room temperature (except Mercury, Hg, which is a liquid).
        *   Tend to **lose electrons** in chemical reactions to form positive ions (cations).
2.  **Nonmetals:**
    *   Location: Found on the **upper right side** of the periodic table (plus Hydrogen).
    *   General Properties:
        *   Poor conductors of heat and electricity (insulators).
        *   Usually dull in appearance (not shiny).
        *   Brittle if solid (shatter easily).
        *   Exist as solids, liquids (e.g., Bromine, Br₂), or gases (e.g., O₂, N₂, Cl₂) at room temperature.
        *   Tend to **gain electrons** in chemical reactions with metals to form negative ions (anions), or share electrons with other nonmetals.
3.  **Metalloids (Semimetals):**
    *   Location: Found along the **stair-step line** that separates metals from nonmetals.
    *   Common Metalloids: Boron (B), Silicon (Si), Germanium (Ge), Arsenic (As), Antimony (Sb), Tellurium (Te). (Polonium (Po) and Astatine (At) are sometimes included).
    *   General Properties: Exhibit properties intermediate between those of metals and nonmetals. Many are semiconductors, meaning they conduct electricity under certain conditions, making them vital in electronics.

**Key Families (Groups) of Elements**
*   **Group 1: Alkali Metals** (e.g., Li, Na, K)
    *   1 valence electron (ns¹).
    *   Extremely reactive, soft, silvery metals. Form +1 ions.
*   **Group 2: Alkaline Earth Metals** (e.g., Be, Mg, Ca)
    *   2 valence electrons (ns²).
    *   Reactive (less than alkali metals), harder than alkali metals. Form +2 ions.
*   **Groups 3-12: Transition Metals** (d-block elements, e.g., Fe, Cu, Ag, Au)
    *   Typically have 1 or 2 valence electrons in their outermost s orbital, but also fill d orbitals in an inner shell.
    *   Good conductors, hard, high melting points. Often form colored compounds and can have multiple oxidation states (charges).
*   **Group 17: Halogens** (e.g., F, Cl, Br, I)
    *   7 valence electrons (ns²np⁵).
    *   Highly reactive nonmetals. Exist as diatomic molecules (F₂, Cl₂, etc.). Form -1 ions (halides).
*   **Group 18: Noble Gases** (e.g., He, Ne, Ar)
    *   8 valence electrons (ns²np⁶), except Helium which has 2 (1s²). This is a full valence shell.
    *   Extremely unreactive (inert) gases due to their stable electron configurations. Monatomic gases.
*   **Lanthanides and Actinides (f-block elements):**
    *   Usually shown as two separate rows at the bottom of the table.
    *   Lanthanides (Period 6) and Actinides (Period 7) are inner transition metals. Many actinides are radioactive.

**Relationship to Electron Configuration (Briefly)**
The position of an element in the periodic table is directly related to its electron configuration.
*   The period number indicates the highest principal energy level (n) containing electrons.
*   The group number (for main group elements) often indicates the number of valence electrons.
*   The block (s, p, d, f) indicates the sublevel of the highest energy electrons.
Understanding electron configurations (Unit 2, Lesson 3) is key to understanding why the periodic table is structured the way it is and why elements in the same group have similar properties.

**Safety Note:** Different groups of elements have vastly different reactivities. Alkali metals are highly reactive with water and air. Halogens can be corrosive and toxic. Noble gases are generally safe due to their inertness. Always handle chemicals according to safety guidelines.`,
  practice: [
    {
      text: '1. Describe how elements are arranged in the modern periodic table (in terms of periods and groups).',
    },
    {
      text: '2. List three general properties of metals and three general properties of nonmetals.',
    },
    {
      text: '3. Where are metalloids located on the periodic table, and what is one oftheir characteristic properties?',
    },
    {
      text: '4. For each of the following elements, identify its group number, period number, and whether it is a metal, nonmetal, or metalloid: a) Sodium (Na), b) Sulfur (S), c) Silicon (Si).',
    },
    {
      text: '5. Name the chemical family (group name) to which each of the following elements belongs: a) Potassium (K), b) Fluorine (F), c) Argon (Ar), d) Calcium (Ca).',
    },
  ],
  answers: [
    {
      text: '1. Elements in the modern periodic table are arranged in order of increasing **atomic number**. \n   - **Periods** are horizontal rows. Elements in the same period have their valence electrons in the same principal energy level.\n   - **Groups** (or families) are vertical columns. Elements in the same group have the same number of valence electrons and thus similar chemical properties.',
    },
    {
      text: '2. **Metals (any three):** Good conductors of heat/electricity, lustrous (shiny), malleable, ductile, tend to lose electrons, mostly solid at room temperature.\n   **Nonmetals (any three):** Poor conductors of heat/electricity, dull, brittle (if solid), can be solid/liquid/gas at room temp, tend to gain or share electrons.',
    },
    {
      text: '3. Metalloids are located along the **stair-step line** that separates metals from nonmetals on the periodic table. One characteristic property is that they are often **semiconductors** (can conduct electricity under certain conditions).',
    },
    {
      text: '4. Element Identification:\n    a) **Sodium (Na):** Group 1, Period 3, Metal.\n    b) **Sulfur (S):** Group 16, Period 3, Nonmetal.\n    c) **Silicon (Si):** Group 14, Period 3, Metalloid.',
    },
    {
      text: '5. Chemical Families:\n    a) **Potassium (K):** Alkali Metals (Group 1).\n    b) **Fluorine (F):** Halogens (Group 17).\n    c) **Argon (Ar):** Noble Gases (Group 18).\n    d) **Calcium (Ca):** Alkaline Earth Metals (Group 2).',
    },
  ],
};
