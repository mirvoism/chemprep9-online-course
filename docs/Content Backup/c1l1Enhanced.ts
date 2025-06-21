import { Lesson } from '../../../../types';
import { citationInline, bibliography } from '../../../utils/citationManager';

export const c1l1Enhanced: Lesson = {
  id: 'C1L1_ENHANCED',
  unit: 1,
  title: 'Introduction to Chemistry & Matter Classification',
  objectives: [
    'Describe the scientific method and differentiate between observations, hypotheses, and theories.',
    'Identify and apply laboratory safety rules and recognize common laboratory equipment.',
    'Classify samples of matter as elements, compounds, homogeneous mixtures, or heterogeneous mixtures.',
    'Distinguish between physical and chemical properties and changes.',
    'Apply appropriate separation techniques for different types of mixtures.',
  ],
  labMinutes: 50,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html',
      title: 'States of Matter Basics',
      description:
        'Explore how heating or cooling atoms and molecules changes their behavior. Relate particle motion to the states of matter and observe the differences between solids, liquids, and gases.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html',
      title: 'Build an Atom',
      description:
        'Use protons, neutrons, and electrons to build atoms and explore how the structure relates to mass number, atomic number, and charge.',
    },
    {
      type: 'custom',
      title: 'Mixture Separation Challenge',
      description:
        'Interactive simulation where students choose appropriate separation techniques for given mixtures based on physical properties.',
      placeholderText:
        '**Learning Goal:** Apply knowledge of separation techniques to different types of mixtures.\n\n**Functionality:** Students are presented with various real-world mixtures (sand & salt, iron filings & sugar, ink chromatography, oil & water). They must select the correct sequence of separation methods from options including filtration, evaporation, magnetism, distillation, and chromatography. Immediate feedback is provided with explanations of why each technique works based on physical properties.\n\n*Interactive simulation guides students through the separation process with visual feedback.*',
    },
    {
      type: 'custom',
      title: 'Scientific Method Virtual Lab',
      description:
        'Guide students through a virtual chemistry investigation using the scientific method steps.',
      placeholderText:
        '**Learning Goal:** Practice applying the scientific method to chemistry investigations.\n\n**Functionality:** Students investigate "Why does salt make ice melt faster?" by making observations, forming hypotheses, designing experiments, collecting data, and drawing conclusions. The simulation provides virtual lab equipment and realistic data collection.\n\n*Step-by-step guidance through observation → hypothesis → experimentation → analysis → conclusion.*',
    },
  ],
  narrative: `## **Welcome to Chemistry: The Central Science**

Chemistry is often called the "central science" because it connects virtually every other field of science—from biology and medicine to physics and environmental science${citationInline('brown-chemistry-14th', 1)}. At its core, chemistry is the study of **matter**—what it's made of, what its properties are, and how it changes${citationInline('nist-webbook', 2)}. Every object in the universe, from distant stars to the smallest speck of dust, is composed of matter.

### **The Scientific Method: How Chemists Investigate**

Scientists use a systematic approach called the **scientific method** to explore the natural world${citationInline('brown-chemistry-14th', 3)}. This isn't a rigid recipe but a flexible framework for investigation:

**1. Observation**
Scientific inquiry begins with careful observation—gathering information using our senses or scientific instruments${citationInline('nysed-standards-2017', 4)}. Observations can be:
- **Qualitative**: Descriptive observations like "the liquid is blue" or "the solution fizzes"
- **Quantitative**: Numerical measurements like "the volume is 50.2 mL" or "the temperature is 23.5°C"

**2. Hypothesis Formation**
Based on observations, scientists propose a **hypothesis**—a testable, tentative explanation or prediction${citationInline('brown-chemistry-14th', 5)}. A good hypothesis:
- Is a statement, not a question
- Can be tested experimentally
- Example: "If salt is added to water, then the boiling point will increase"

**3. Experimentation**
Scientists design controlled experiments to test hypotheses${citationInline('nysed-standards-2017', 6)}. Key components include:
- **Independent variable**: What you deliberately change
- **Dependent variable**: What you measure in response
- **Constants**: All other conditions kept the same
- **Control group**: Baseline for comparison

**4. Analysis & Conclusion**
After collecting and analyzing experimental data, scientists draw conclusions. Does the evidence support or refute the hypothesis? If refuted, new hypotheses are formed and tested.

**5. Theory Development**
When hypotheses are supported by extensive evidence from many experiments, they may become **theories**—comprehensive explanations for natural phenomena${citationInline('brown-chemistry-14th', 7)}. Examples include Atomic Theory and Kinetic Molecular Theory.

**Scientific Laws** describe *what* happens but don't explain *why*. The Law of Conservation of Mass states that mass is neither created nor destroyed in chemical reactions, but doesn't explain the underlying atomic mechanisms.

### **Laboratory Safety: Your First Priority**

Safety is paramount in any chemistry laboratory${citationInline('nysed-lab-safety', 8)}. **Always wear safety goggles** to protect your eyes from chemical splashes and broken glass. Additional safety rules include:

- Never eat, drink, or apply cosmetics in the lab
- Tie back long hair and secure loose clothing
- Wear closed-toe shoes (no sandals)
- Know the location of safety equipment: fire extinguisher, safety shower, eyewash station, and fire blanket
- Never perform unauthorized experiments
- Report all accidents, no matter how minor

**Laboratory Equipment Essentials:**

- **Beaker**: Wide-mouthed container for mixing and heating (approximate volume measurements)
- **Graduated Cylinder**: Precise liquid volume measurements (read from bottom of meniscus)
- **Erlenmeyer Flask**: Cone-shaped vessel ideal for swirling without splashing
- **Pipette and Buret**: Deliver precise, variable liquid volumes for titrations
- **Electronic Balance**: Accurate mass measurements to several decimal places
- **Bunsen Burner**: Controlled heating source for chemical reactions
- **Test Tubes**: Small-scale reactions and qualitative tests

## **Classification of Matter**

All matter in the universe can be systematically classified based on its composition and properties${citationInline('nist-webbook', 9)}.

### **Pure Substances**

**Pure substances** have uniform and definite composition with consistent properties throughout${citationInline('brown-chemistry-14th', 10)}.

#### **Elements**
Elements are the simplest form of matter that cannot be broken down by chemical means${citationInline('nist-webbook', 11)}. Each element consists of only one type of atom and is listed on the periodic table.

**Examples:**
- **Helium (He)**: Noble gas with single atoms
- **Oxygen (O₂)**: Diatomic gas molecules
- **Copper (Cu)**: Metallic element used in electrical wiring

<div class="my-4 flex flex-wrap justify-around items-center gap-4">
  <svg width="150" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Helium atoms representing an element" class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
    <circle cx="50" cy="50" r="10" fill="var(--color-accent)" />
    <text x="45" y="55" font-size="10" fill="var(--color-text-light)">He</text>
    <circle cx="80" cy="40" r="10" fill="var(--color-accent)" />
    <text x="75" y="45" font-size="10" fill="var(--color-text-light)">He</text>
    <circle cx="60" cy="70" r="10" fill="var(--color-accent)" />
    <text x="55" y="75" font-size="10" fill="var(--color-text-light)">He</text>
    <text x="20" y="100" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Element: Helium Atoms</text>
  </svg>
  
  <svg width="150" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Oxygen molecules representing a diatomic element" class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
    <circle cx="40" cy="50" r="10" fill="var(--color-primary)" />
    <circle cx="60" cy="50" r="10" fill="var(--color-primary)" />
    <line x1="50" y1="50" x2="40" y2="50" stroke="var(--color-text-light)" stroke-width="2"/>
    <line x1="50" y1="50" x2="60" y2="50" stroke="var(--color-text-light)" stroke-width="2"/>
    <circle cx="90" cy="60" r="10" fill="var(--color-primary)" />
    <circle cx="110" cy="60" r="10" fill="var(--color-primary)" />
    <line x1="100" y1="60" x2="90" y2="60" stroke="var(--color-text-light)" stroke-width="2"/>
    <line x1="100" y1="60" x2="110" y2="60" stroke="var(--color-text-light)" stroke-width="2"/>
    <text x="15" y="100" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Element: Oxygen Molecules (O₂)</text>
  </svg>
</div>

#### **Compounds**
Compounds form when two or more different elements chemically bond in fixed ratios${citationInline('brown-chemistry-14th', 12)}. The resulting compound has properties completely different from its constituent elements.

**Example: Water (H₂O)**
- Hydrogen: Flammable gas
- Oxygen: Supports combustion
- Water: Extinguishes fires!

**Formation Equation**: 2H₂(g) + O₂(g) → 2H₂O(l)

<div class="my-4 flex justify-center">
  <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Water molecules representing a compound" class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
    <symbol id="waterMolecule" viewBox="-15 -15 30 30">
      <circle cx="0" cy="0" r="8" fill="var(--color-danger)" />
      <text x="-3" y="3" font-size="8" fill="var(--color-text-light)" class="font-bold">O</text>
      <circle cx="-10" cy="10" r="5" fill="var(--color-secondary)" />
      <text x="-13" y="13" font-size="6" fill="var(--color-text-light)">H</text>
      <circle cx="10" cy="10" r="5" fill="var(--color-secondary)" />
      <text x="7" y="13" font-size="6" fill="var(--color-text-light)">H</text>
      <line x1="0" y1="0" x2="-8" y2="8" stroke="var(--color-text-light)" stroke-width="1"/>
      <line x1="0" y1="0" x2="8" y2="8" stroke="var(--color-text-light)" stroke-width="1"/>
    </symbol>
    <use href="#waterMolecule" x="50" y="40" />
    <use href="#waterMolecule" x="100" y="50" />
    <use href="#waterMolecule" x="150" y="40" />
    <text x="45" y="100" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Compound: Water Molecules (H₂O)</text>
  </svg>
</div>

### **Mixtures**

**Mixtures** are physical combinations of two or more pure substances${citationInline('brown-chemistry-14th', 13)}. Each component retains its chemical identity and properties. Mixtures have variable composition and can be separated by physical means.

#### **Homogeneous Mixtures (Solutions)**
Have uniform composition throughout—you cannot distinguish individual components${citationInline('nist-webbook', 14)}.

**Examples:**
- **Salt water**: Salt dissolved uniformly in water
- **Air**: Nitrogen, oxygen, and trace gases mixed uniformly
- **Brass**: Copper and zinc atoms mixed at the atomic level

<div class="my-4 flex justify-center">
  <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" aria-label="Saltwater solution representing a homogeneous mixture" class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
    <!-- Water molecules -->
    <circle cx="30" cy="30" r="8" fill="var(--color-secondary)" opacity="0.7"/>
    <circle cx="70" cy="25" r="8" fill="var(--color-secondary)" opacity="0.7"/>
    <circle cx="110" cy="35" r="8" fill="var(--color-secondary)" opacity="0.7"/>
    <circle cx="50" cy="60" r="8" fill="var(--color-secondary)" opacity="0.7"/>
    <circle cx="90" cy="65" r="8" fill="var(--color-secondary)" opacity="0.7"/>
    <circle cx="130" cy="55" r="8" fill="var(--color-secondary)" opacity="0.7"/>
    <!-- Salt ions distributed uniformly -->
    <circle cx="50" cy="40" r="4" fill="var(--color-accent)"/>
    <text x="46" y="44" font-size="5" fill="var(--color-text-light)">Na⁺</text>
    <circle cx="80" cy="50" r="4" fill="var(--color-primary)"/>
    <text x="76" y="54" font-size="5" fill="var(--color-text-light)">Cl⁻</text>
    <circle cx="120" cy="45" r="4" fill="var(--color-accent)"/>
    <text x="116" y="49" font-size="5" fill="var(--color-text-light)">Na⁺</text>
    <circle cx="60" cy="75" r="4" fill="var(--color-primary)"/>
    <text x="56" y="79" font-size="5" fill="var(--color-text-light)">Cl⁻</text>
    <rect x="5" y="5" width="190" height="110" stroke="var(--color-border)" stroke-width="1" fill="none" rx="5"/>
    <text x="40" y="135" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Homogeneous Mixture: Saltwater Solution</text>
  </svg>
</div>

#### **Heterogeneous Mixtures**
Have non-uniform composition—you can see distinct regions or phases${citationInline('brown-chemistry-14th', 15)}.

**Examples:**
- **Sand and water**: Clearly separated phases
- **Oil and vinegar**: Immiscible liquids form layers
- **Granite**: Visible crystals of different minerals

<div class="my-4 flex justify-center">
  <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" aria-label="Sand and water representing a heterogeneous mixture" class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
    <!-- Water layer -->
    <rect x="5" y="5" width="190" height="60" fill="var(--color-secondary)" fill-opacity="0.3"/>
    <text x="80" y="30" font-size="12" fill="var(--color-text-light)">Water Layer</text>
    <!-- Sand layer -->
    <circle cx="40" cy="90" r="6" fill="var(--color-accent)" fill-opacity="0.8"/>
    <ellipse cx="70" cy="100" rx="8" ry="5" fill="var(--color-accent)" fill-opacity="0.8"/>
    <circle cx="100" cy="85" r="5" fill="var(--color-accent)" fill-opacity="0.8"/>
    <ellipse cx="130" cy="95" rx="7" ry="4" fill="var(--color-accent)" fill-opacity="0.8"/>
    <circle cx="60" cy="110" r="6" fill="var(--color-accent)" fill-opacity="0.8"/>
    <ellipse cx="110" cy="105" rx="5" ry="7" fill="var(--color-accent)" fill-opacity="0.8"/>
    <text x="70" y="125" font-size="12" fill="var(--color-text-light)">Sand Layer</text>
    <rect x="5" y="5" width="190" height="115" stroke="var(--color-border)" stroke-width="1" fill="none" rx="5"/>
    <text x="40" y="140" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Heterogeneous Mixture: Sand & Water</text>
  </svg>
</div>

## **Separation Techniques for Mixtures**

Mixtures can be separated using physical methods that exploit differences in properties${citationInline('brown-chemistry-14th', 16)}:

### **Common Separation Methods**

**1. Filtration**
Separates insoluble solids from liquids using filter paper${citationInline('nysed-lab-manual', 17)}.
*Application*: Sand from water, precipitate from solution

**2. Distillation**
Separates substances with different boiling points${citationInline('brown-chemistry-14th', 18)}.
*Application*: Pure water from saltwater, ethanol from water

**3. Evaporation**
Removes liquid solvent to leave dissolved solid behind${citationInline('nist-webbook', 19)}.
*Application*: Salt from saltwater, sugar from solution

**4. Chromatography**
Separates components based on different rates of movement through a medium${citationInline('brown-chemistry-14th', 20)}.
*Application*: Ink pigments, food dyes, biological molecules

**5. Magnetism**
Separates magnetic materials from non-magnetic ones.
*Application*: Iron filings from sand

**6. Decanting**
Carefully pouring off liquid from settled solid.
*Application*: Water from sand after settling

${bibliography([
  'brown-chemistry-14th',
  'nist-webbook', 
  'nysed-standards-2017',
  'nysed-lab-safety',
  'nysed-lab-manual'
])}`,
  practice: [
    {
      text: '1. **Scientific Method Application**: You observe that plants in your garden grow taller when you add fertilizer. Design a controlled experiment to test whether fertilizer concentration affects plant growth. Identify your hypothesis, independent variable, dependent variable, and constants.',
    },
    {
      text: '2. **Matter Classification**: Classify each substance as an element, compound, homogeneous mixture, or heterogeneous mixture. Explain your reasoning:\n    a) Copper wire (Cu)\n    b) Sugar dissolved in coffee (C₁₂H₂₂O₁₁ + H₂O)\n    c) Trail mix with nuts and raisins\n    d) Carbon dioxide gas (CO₂)\n    e) Steel (iron + carbon alloy)\n    f) Distilled water (H₂O)',
    },
    {
      text: '3. **Separation Challenge**: Design a complete separation procedure for a mixture containing:\n    - Salt (soluble in water)\n    - Sand (insoluble in water) \n    - Iron filings (magnetic)\n    - Wood chips (less dense than water)\n    \n    List your steps in order and explain the principle behind each separation technique.',
    },
    {
      text: '4. **Laboratory Safety**: Explain why each safety rule is important:\n    a) Always wear safety goggles\n    b) No food or drinks in the lab\n    c) Know the location of the eyewash station\n    d) Never perform unauthorized experiments',
    },
  ],
  answers: [
    {
      text: '1. **Controlled Experiment Design**:\n    - **Hypothesis**: "If fertilizer concentration increases, then plant height will increase up to an optimal level."\n    - **Independent Variable**: Fertilizer concentration (0%, 5%, 10%, 15%, 20%)\n    - **Dependent Variable**: Plant height after 4 weeks\n    - **Constants**: Plant species, pot size, soil type, water amount, light exposure, temperature\n    - **Control Group**: Plants with 0% fertilizer (water only)\n    - **Sample Size**: Multiple plants per concentration for statistical validity',
    },
    {
      text: '2. **Classification with Reasoning**:\n    a) **Copper wire (Cu)**: Element - single type of atom listed on periodic table\n    b) **Sugar in coffee**: Homogeneous mixture - sugar molecules uniformly distributed in water\n    c) **Trail mix**: Heterogeneous mixture - visible distinct components not uniformly distributed\n    d) **Carbon dioxide (CO₂)**: Compound - two different elements chemically bonded in fixed ratio\n    e) **Steel**: Homogeneous mixture - iron and carbon atoms uniformly distributed at atomic level\n    f) **Distilled water (H₂O)**: Compound - hydrogen and oxygen chemically bonded in 2:1 ratio',
    },
    {
      text: '3. **Complete Separation Procedure**:\n    **Step 1**: Add water and stir - wood chips float (density difference), collect by skimming\n    **Step 2**: Use magnet to remove iron filings (magnetic property)\n    **Step 3**: Filter mixture - sand remains on filter paper (particle size difference)\n    **Step 4**: Evaporate filtrate - water evaporates, salt crystals remain (boiling point difference)\n    \n    **Result**: Four separate components recovered using physical property differences',
    },
    {
      text: '4. **Safety Rule Explanations**:\n    a) **Safety goggles**: Protect eyes from chemical splashes, flying glass, and unexpected reactions that could cause blindness\n    b) **No food/drinks**: Prevents accidental ingestion of toxic chemicals and contamination of experiments\n    c) **Eyewash station location**: Immediate treatment for chemical eye exposure - every second counts in preventing permanent damage\n    d) **No unauthorized experiments**: Prevents dangerous chemical combinations that could cause fires, explosions, or toxic gas release',
    },
  ],
};
