import { Lesson } from '../../../../types';
import { citationInline, bibliography } from '../../../utils/citationManager';

export const c8l1Enhanced: Lesson = {
  id: 'C8L1_ENHANCED',
  unit: 8,
  title: 'Kinetics & Equilibrium: Reaction Rates and Dynamic Balance',
  objectives: [
    'Apply Collision Theory to explain how temperature, concentration, and surface area affect reaction rates.',
    'Interpret potential energy diagrams to identify activation energy, enthalpy changes, and catalyst effects.',
    'Define chemical equilibrium as a dynamic state with equal forward and reverse reaction rates.',
    'Use Le Châtelier\'s Principle to predict equilibrium shifts in response to stress changes.',
    'Distinguish between factors that affect reaction rate versus equilibrium position.',
    'Analyze real-world applications of kinetics and equilibrium principles in industrial and biological systems.',
  ],
  labMinutes: 50,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/collision-lab/latest/collision-lab_en.html',
      title: 'Collision Lab',
      description:
        'Explore collision theory by controlling particle velocities and observing collision outcomes. Investigate how kinetic energy affects reaction probability.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/reversible-reactions/latest/reversible-reactions_en.html',
      title: 'Reversible Reactions',
      description:
        'Observe how reversible reactions reach equilibrium. Manipulate concentrations and temperature to see how Le Châtelier\'s Principle predicts equilibrium shifts.',
    },
    {
      type: 'custom',
      title: 'Collision Theory Simulator',
      description:
        'Interactive model demonstrating how molecular collisions lead to chemical reactions.',
      placeholderText:
        '**Learning Goal:** Understand the molecular basis of reaction rates and activation energy.\n\n**Functionality:** Students control temperature, concentration, and pressure to observe changes in collision frequency and energy. Animation shows effective vs. ineffective collisions. Energy distribution curves demonstrate how temperature affects the fraction of molecules with sufficient activation energy.\n\n*Visualizes abstract collision theory through dynamic molecular animations.*',
    },
    {
      type: 'custom',
      title: 'Potential Energy Diagram Builder',
      description:
        'Interactive tool for constructing and analyzing potential energy diagrams for chemical reactions.',
      placeholderText:
        '**Learning Goal:** Connect energy diagrams to reaction thermodynamics and kinetics.\n\n**Functionality:** Students build PE diagrams by setting reactant and product energy levels, activation energies, and catalyst effects. Tool calculates ΔH values and compares catalyzed vs. uncatalyzed pathways. Multiple reaction types demonstrate energy relationships.\n\n*Builds quantitative understanding of energy barriers and reaction energetics.*',
    },
    {
      type: 'custom',
      title: 'Le Châtelier\'s Principle Lab',
      description:
        'Virtual laboratory for testing equilibrium responses to various stresses.',
      placeholderText:
        '**Learning Goal:** Predict and observe equilibrium shifts using Le Châtelier\'s Principle.\n\n**Functionality:** Students apply stresses (concentration changes, temperature, pressure) to equilibrium systems and observe resulting shifts. Real-time graphs show concentration changes. Industrial examples demonstrate practical applications.\n\n*Provides hands-on experience with dynamic equilibrium concepts.*',
    },
  ],
  narrative: `## **Chemical Kinetics: Understanding Reaction Rates**

Chemical kinetics investigates the rates of chemical reactions and the molecular mechanisms controlling these rates ${citationInline('chemical-kinetics-theory', 1)}. Understanding reaction rates enables optimization of industrial processes, development of new catalysts, and comprehension of biological mechanisms that sustain life.

### **Collision Theory: The Molecular Basis of Reaction Rates**

Collision Theory provides a molecular-level explanation for reaction rates based on particle interactions ${citationInline('collision-theory-development', 2)}. This theory establishes that chemical reactions occur through molecular collisions that must satisfy specific energy and geometric requirements.

**Requirements for Effective Collisions:**

**Sufficient Energy**: Colliding molecules must possess kinetic energy equal to or greater than the activation energy (Ea) ${citationInline('activation-energy-theory', 3)}. This energy threshold represents the minimum required to break existing bonds and initiate bond reorganization.

**Proper Orientation**: Molecules must collide with correct spatial alignment to enable bond formation between appropriate atoms ${citationInline('molecular-orientation', 4)}. Geometric constraints become increasingly important for complex molecules with multiple reactive sites.

**Molecular Motion and Energy Distribution**: At any given temperature, molecules exhibit a Maxwell-Boltzmann energy distribution ${citationInline('maxwell-boltzmann', 5)}. Only the fraction of molecules in the high-energy tail of this distribution possesses sufficient energy for reaction.

### **Factors Affecting Reaction Rates**

Multiple variables influence the frequency and effectiveness of molecular collisions, thereby controlling overall reaction rates ${citationInline('reaction-rate-factors', 6)}.

**Temperature Effects**: 
Increasing temperature produces multiple kinetic effects ${citationInline('temperature-kinetics', 7)}:
- Enhanced molecular kinetic energy increases collision frequency
- Greater fraction of molecules exceed activation energy barrier
- Arrhenius equation quantifies exponential rate dependence on temperature
- Rule of thumb: 10°C temperature increase approximately doubles reaction rate

**Concentration Effects**:
Higher reactant concentrations increase collision probability through statistical effects ${citationInline('concentration-kinetics', 8)}:
- More molecules per unit volume increase collision frequency
- Rate laws express mathematical relationship between concentration and rate
- Order of reaction determines concentration dependence (first-order, second-order, etc.)

**Surface Area Effects**:
For heterogeneous reactions involving solids, surface area directly impacts reaction rate ${citationInline('surface-area-kinetics', 9)}:
- Increased surface area exposes more reactive sites
- Particle size reduction dramatically increases rate
- Industrial applications include catalytic converters and pharmaceutical formulations

**Catalyst Effects**:
Catalysts accelerate reactions by providing alternative mechanisms with lower activation energies ${citationInline('catalysis-principles', 10)}. These substances remain chemically unchanged after reaction completion, enabling continuous reaction acceleration.

### **Potential Energy Diagrams: Visualizing Energy Relationships**

Potential energy diagrams graphically represent energy changes throughout reaction pathways ${citationInline('energy-diagrams', 11)}. These diagrams reveal activation barriers, thermodynamic favorability, and catalyst effects.

**Key Features**:
**Activation Energy (Ea)**: Energy difference between reactants and transition state, representing kinetic barrier to reaction ${citationInline('transition-state-theory', 12)}.

**Enthalpy Change (ΔH)**: Energy difference between products and reactants, indicating thermodynamic favorability independent of kinetic factors ${citationInline('enthalpy-kinetics', 13)}.

**Catalyst Effect**: Provides alternative pathway with lower activation energy while leaving overall enthalpy change unchanged ${citationInline('catalyst-energy-diagrams', 14)}.

### **Chemical Equilibrium: Dynamic Balance in Reversible Reactions**

Chemical equilibrium represents a dynamic state where forward and reverse reaction rates become equal ${citationInline('chemical-equilibrium-theory', 15)}. This balance results from kinetic competition between opposing reactions rather than thermodynamic stability.

**Characteristics of Chemical Equilibrium**:
- **Dynamic Nature**: Continuous molecular exchange between reactants and products
- **Constant Concentrations**: Macroscopic composition remains unchanged over time
- **Rate Equality**: Forward reaction rate equals reverse reaction rate
- **Closed System Requirement**: No material exchange with surroundings ${citationInline('equilibrium-characteristics', 16)}

### **Le Châtelier's Principle: Predicting Equilibrium Response**

Le Châtelier's Principle states that systems at equilibrium respond to external stresses by shifting in directions that counteract the imposed changes ${citationInline('le-chatelier-principle', 17)}. This principle enables prediction of equilibrium behavior under varying conditions.

**Concentration Effects**:
**Adding Reactant/Product**: Equilibrium shifts away from added substance to consume excess and restore balance ${citationInline('concentration-effects-equilibrium', 18)}.

**Temperature Effects**:
**Exothermic Reactions**: Increasing temperature shifts equilibrium toward reactants (away from heat production) ${citationInline('temperature-effects-equilibrium', 19)}.

**Endothermic Reactions**: Increasing temperature shifts equilibrium toward products (toward heat consumption).

**Pressure Effects** (gas-phase reactions):
**Increased Pressure**: Equilibrium shifts toward side with fewer moles of gas to reduce system volume ${citationInline('pressure-effects-equilibrium', 20)}.

**Catalyst Effects**:
Catalysts accelerate both forward and reverse reactions equally, reducing time to reach equilibrium without changing equilibrium position ${citationInline('catalyst-equilibrium-effects', 21)}.

### **Industrial Applications: Haber Process Case Study**

The Haber process for ammonia synthesis exemplifies industrial application of kinetics and equilibrium principles ${citationInline('haber-process', 22)}:

**N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + heat**

**Optimization Challenges**:
- **Pressure**: High pressure favors NH₃ formation but increases equipment costs
- **Temperature**: Lower temperature favors NH₃ formation but reduces reaction rate
- **Catalyst**: Iron-based catalysts accelerate reaction while maintaining favorable equilibrium
- **Compromise Conditions**: 450°C and 200-300 atm balance yield and rate considerations ${citationInline('industrial-process-optimization', 23)}

### **Biological Systems: Enzyme Kinetics and Metabolic Equilibrium**

Living systems exploit kinetic and equilibrium principles to maintain homeostasis and enable complex biochemical networks ${citationInline('biochemical-kinetics', 24)}.

**Enzyme Regulation**:
- **Competitive Inhibition**: Molecules compete for active sites, reducing reaction rates
- **Allosteric Control**: Binding at remote sites modifies enzyme activity
- **Feedback Inhibition**: Product accumulation inhibits upstream enzymes ${citationInline('enzyme-regulation', 25)}

${bibliography([
  'chemical-kinetics-theory',
  'collision-theory-development',
  'activation-energy-theory',
  'molecular-orientation',
  'maxwell-boltzmann',
  'reaction-rate-factors',
  'temperature-kinetics',
  'concentration-kinetics',
  'surface-area-kinetics',
  'catalysis-principles',
  'energy-diagrams',
  'transition-state-theory',
  'enthalpy-kinetics',
  'catalyst-energy-diagrams',
  'chemical-equilibrium-theory',
  'equilibrium-characteristics',
  'le-chatelier-principle',
  'concentration-effects-equilibrium',
  'temperature-effects-equilibrium',
  'pressure-effects-equilibrium',
  'catalyst-equilibrium-effects',
  'haber-process',
  'industrial-process-optimization',
  'biochemical-kinetics',
  'enzyme-regulation'
])}`,
  practice: [
    {
      text: '1. **Collision Theory Applications**: Explain how each factor affects reaction rate using collision theory:\n    a) Increasing temperature from 25°C to 50°C\n    b) Doubling the concentration of reactant A\n    c) Grinding a solid reactant into powder\n    d) Adding a catalyst to the reaction mixture\n    e) Increasing pressure in a gas-phase reaction',
    },
    {
      text: '2. **Potential Energy Diagram Analysis**: For the reaction coordinate diagram:\n    [Reactants at 50 kJ, Peak at 120 kJ, Products at 30 kJ]\n    a) Calculate the activation energy for the forward reaction\n    b) Calculate the activation energy for the reverse reaction\n    c) Determine ΔH for the reaction\n    d) Is this reaction endothermic or exothermic?\n    e) How would adding a catalyst change the diagram?',
    },
    {
      text: '3. **Le Châtelier\'s Principle Predictions**: For the equilibrium:\n    2SO₂(g) + O₂(g) ⇌ 2SO₃(g) + heat\n    \n    Predict the direction of equilibrium shift for each change:\n    a) Adding more SO₂\n    b) Removing SO₃\n    c) Increasing temperature\n    d) Increasing pressure\n    e) Adding a catalyst',
    },
    {
      text: '4. **Kinetics vs. Equilibrium**: Distinguish whether each factor affects reaction rate, equilibrium position, or both:\n    a) Temperature increase\n    b) Catalyst addition\n    c) Concentration increase\n    d) Pressure increase (gas reaction)\n    e) Surface area increase (solid reactant)',
    },
    {
      text: '5. **Industrial Process Analysis**: The Haber process operates at 450°C and 200 atm:\n    N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + heat\n    \n    a) Why isn\'t the process run at room temperature for maximum yield?\n    b) Why isn\'t the process run at 1000°C for maximum rate?\n    c) Explain the pressure choice from both kinetic and equilibrium perspectives\n    d) How does the iron catalyst improve the process?',
    },
  ],
  answers: [
    {
      text: '1. **Collision Theory Explanations**:\n    a) **Higher temperature**: Increases molecular kinetic energy, leading to more frequent collisions and higher fraction of molecules exceeding activation energy\n    b) **Double concentration**: More molecules per volume increases collision frequency proportionally\n    c) **Powder formation**: Dramatically increases surface area, exposing more reactive sites for collisions\n    d) **Catalyst addition**: Provides alternative pathway with lower activation energy, making more collisions effective\n    e) **Increased pressure**: Compresses gas volume, increasing molecular density and collision frequency',
    },
    {
      text: '2. **Energy Diagram Analysis**:\n    a) **Forward Ea**: 120 kJ - 50 kJ = **70 kJ**\n    b) **Reverse Ea**: 120 kJ - 30 kJ = **90 kJ**\n    c) **ΔH**: 30 kJ - 50 kJ = **-20 kJ**\n    d) **Exothermic** (ΔH negative, products lower energy than reactants)\n    e) **Catalyst effect**: Would lower the peak energy (reduce both activation energies) but leave reactant and product energies unchanged',
    },
    {
      text: '3. **Le Châtelier\'s Predictions**:\n    a) **Adding SO₂**: Shifts **right** (toward products) to consume excess reactant\n    b) **Removing SO₃**: Shifts **right** (toward products) to replace removed product\n    c) **Increasing temperature**: Shifts **left** (toward reactants) to absorb added heat in endothermic direction\n    d) **Increasing pressure**: Shifts **right** (toward products) - fewer moles on product side (2 vs 3)\n    e) **Adding catalyst**: **No shift** - catalyst affects rate but not equilibrium position',
    },
    {
      text: '4. **Rate vs. Equilibrium Effects**:\n    a) **Temperature**: Affects **both** - increases rate and shifts equilibrium position\n    b) **Catalyst**: Affects **rate only** - speeds approach to equilibrium without changing position\n    c) **Concentration**: Affects **both** - changes rate and temporarily shifts equilibrium until new balance\n    d) **Pressure (gas)**: Affects **both** - increases rate through concentration effect and shifts equilibrium\n    e) **Surface area**: Affects **rate only** - heterogeneous kinetics but equilibrium position unchanged',
    },
    {
      text: '5. **Haber Process Analysis**:\n    a) **Not room temperature**: Reaction rate would be too slow despite favorable equilibrium - activation energy too high for practical production\n    b) **Not 1000°C**: High temperature shifts equilibrium left (unfavorable for exothermic reaction), reducing NH₃ yield despite faster rate\n    c) **200 atm pressure**: High pressure favors NH₃ formation (fewer moles) and increases rate, but equipment costs limit higher pressures\n    d) **Iron catalyst**: Reduces activation energy, enabling reasonable rates at moderate temperature where equilibrium still favors products',
    },
  ],
};
