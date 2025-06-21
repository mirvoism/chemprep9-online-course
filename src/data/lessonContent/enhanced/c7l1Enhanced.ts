import { Lesson } from '../../../../types';
import { citationInline, bibliography } from '../../../utils/citationManager';

export const c7l1Enhanced: Lesson = {
  id: 'C7L1_ENHANCED',
  unit: 7,
  title: 'Solutions & Energy: From Molecular Interactions to Thermochemistry',
  objectives: [
    'Define solutions and apply "like dissolves like" principle to predict solubility patterns.',
    'Interpret solubility curves to distinguish between saturated, unsaturated, and supersaturated solutions.',
    'Calculate solution concentrations using molarity, molality, and parts per million.',
    'Analyze colligative properties and their dependence on particle concentration.',
    'Distinguish between endothermic and exothermic processes using energy diagrams.',
    'Perform calorimetry calculations involving specific heat, heats of fusion, and vaporization.',
  ],
  labMinutes: 50,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/concentration/latest/concentration_en.html',
      title: 'Concentration and Solutions',
      description:
        'Explore how concentration affects solution properties. Mix solutions, observe color changes, and calculate molarity while visualizing molecular-level interactions.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/molarity/latest/molarity_en.html',
      title: 'Molarity Simulation',
      description:
        'Practice making solutions with specific molarities. Add solutes to water and observe how volume and concentration relate in quantitative relationships.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_en.html',
      title: 'Energy Forms and Changes',
      description:
        'Investigate how energy transfers between systems. Observe thermal energy changes and explore the connection between molecular motion and temperature.',
    },
  ],
  narrative: `## **Solutions: Molecular-Level Mixing and Interactions**

Solutions represent homogeneous mixtures where one substance (solute) dissolves uniformly in another (solvent) at the molecular level ${citationInline('solution-theory', 1)}. Understanding solution behavior requires examining intermolecular forces, molecular polarity, and energy changes that accompany the dissolution process.

### **The Nature of Solutions: "Like Dissolves Like"**

The fundamental principle governing solubility states that substances with similar intermolecular forces tend to mix readily ${citationInline('solubility-principles', 2)}. This "like dissolves like" rule emerges from thermodynamic considerations: dissolution occurs when the energy required to separate solute particles and solvent molecules is compensated by favorable solute-solvent interactions.

**Polar Solute-Polar Solvent Interactions:**
- Water dissolves ionic compounds through ion-dipole interactions
- Hydrogen bonding facilitates dissolution of polar organic molecules
- Energy released from hydration often exceeds lattice energy requirements ${citationInline('hydration-energy', 3)}

**Nonpolar Solute-Nonpolar Solvent Interactions:**
- London dispersion forces enable mixing of nonpolar substances
- Hydrocarbon solvents dissolve fats, oils, and other hydrophobic molecules
- Entropy increase drives dissolution despite weak intermolecular attractions ${citationInline('entropy-mixing', 4)}

**Factors Affecting Solubility:**

**Temperature Effects** vary systematically with solute type ${citationInline('temperature-solubility', 5)}:
- **Solid solutes**: Generally increased solubility with higher temperature due to enhanced molecular motion overcoming crystal lattice energy
- **Gas solutes**: Decreased solubility with higher temperature as enhanced kinetic energy allows gas molecules to escape solution more readily
- **Liquid solutes**: Complex behavior depending on relative volatility and molecular interactions

**Pressure Effects** primarily influence gas solubility through Henry's Law ${citationInline('henry-law', 6)}:
- Gas solubility directly proportional to partial pressure above solution
- Applications include carbonated beverages, diving physiology, and industrial gas absorption
- Minimal pressure effects on solid or liquid solute solubility

### **Solubility Curves and Solution Classification**

Solubility curves graphically represent the maximum amount of solute that can dissolve in a given amount of solvent at various temperatures ${citationInline('solubility-curves', 7)}. These curves enable prediction of solution behavior under changing conditions.

**Solution Types Based on Solute Concentration:**

**Unsaturated Solutions**: Contain less solute than the maximum possible at given temperature. Additional solute can dissolve readily without affecting solution stability ${citationInline('unsaturated-solutions', 8)}.

**Saturated Solutions**: Contain the maximum amount of solute possible at equilibrium. Dynamic equilibrium exists between dissolution and precipitation processes ${citationInline('saturated-solutions', 9)}.

**Supersaturated Solutions**: Contain more solute than normally possible at given temperature. These metastable solutions can be prepared by careful cooling of hot saturated solutions and may precipitate excess solute spontaneously ${citationInline('supersaturated-solutions', 10)}.

### **Concentration Units: Quantifying Solution Composition**

Accurate concentration measurement is essential for quantitative chemistry and practical applications ${citationInline('concentration-measurements', 11)}.

**Molarity (M)**: Moles of solute per liter of total solution
- Formula: M = mol solute / L solution
- Most common unit in chemical calculations
- Temperature-dependent due to solution volume changes ${citationInline('molarity-definition', 12)}

**Molality (m)**: Moles of solute per kilogram of solvent
- Formula: m = mol solute / kg solvent
- Temperature-independent concentration measure
- Preferred for colligative property calculations ${citationInline('molality-definition', 13)}

**Parts Per Million (ppm)**: Mass ratio multiplied by 10⁶
- Formula: ppm = (mass solute / mass solution) × 10⁶
- Used for very dilute solutions in environmental and biological systems
- Approximately equivalent to mg/L for aqueous solutions ${citationInline('ppm-measurements', 14)}

### **Colligative Properties: Particle-Dependent Behaviors**

Colligative properties depend solely on the number of dissolved particles, not their chemical identity ${citationInline('colligative-properties', 15)}. These properties reflect how solute particles disrupt normal solvent behavior through statistical mechanical effects.

**Vapor Pressure Depression**: Solute particles reduce solvent surface area available for evaporation, lowering equilibrium vapor pressure according to Raoult's Law ${citationInline('raoult-law', 16)}.

**Boiling Point Elevation**: Reduced vapor pressure requires higher temperature to reach atmospheric pressure. The elevation magnitude depends on molal concentration and solvent properties ${citationInline('boiling-point-elevation', 17)}.

**Freezing Point Depression**: Solute particles interfere with crystal lattice formation, requiring lower temperature for solidification. Applications include antifreeze formulations and ice cream making ${citationInline('freezing-point-depression', 18)}.

**Osmotic Pressure**: Semipermeable membrane creates pressure difference proportional to particle concentration. Critical for biological systems and water purification technologies ${citationInline('osmotic-pressure', 19)}.

### **Thermochemistry: Energy Changes in Chemical Processes**

Thermochemistry quantifies energy changes accompanying chemical reactions and physical transformations ${citationInline('thermochemistry-principles', 20)}. These energy relationships determine reaction spontaneity and provide insights into molecular behavior.

**System and Surroundings**: The system represents the specific reaction or process under study, while surroundings include everything else that can exchange energy ${citationInline('thermodynamic-systems', 21)}.

**Exothermic Processes** release energy to surroundings:
- Products have lower potential energy than reactants
- Enthalpy change (ΔH) is negative
- Surroundings temperature increases
- Examples: Combustion reactions, crystallization, acid-base neutralization ${citationInline('exothermic-reactions', 22)}

**Endothermic Processes** absorb energy from surroundings:
- Products have higher potential energy than reactants
- Enthalpy change (ΔH) is positive
- Surroundings temperature decreases
- Examples: Photosynthesis, melting, some dissolution processes ${citationInline('endothermic-reactions', 23)}

### **Potential Energy Diagrams: Visualizing Energy Changes**

Potential energy diagrams illustrate energy relationships throughout reaction pathways ${citationInline('energy-diagrams', 24)}. These graphs reveal activation energy requirements, reaction spontaneity, and relative stability of reactants and products.

**Key Features**:
- **Activation Energy (Ea)**: Minimum energy required for reaction to proceed
- **Enthalpy Change (ΔH)**: Energy difference between products and reactants
- **Transition States**: High-energy intermediate configurations during bond breaking/forming
- **Reaction Coordinate**: Progress variable representing reaction advancement ${citationInline('activation-energy', 25)}

### **Calorimetry: Measuring Heat Changes**

Calorimetry provides experimental methods for determining energy changes in chemical and physical processes ${citationInline('calorimetry-methods', 26)}. These measurements enable calculation of enthalpy changes and specific heat capacities.

**Heat Capacity Calculations** use the fundamental relationship:
**q = mcΔT**
Where:
- q = heat transferred (Joules)
- m = mass of substance (grams)
- c = specific heat capacity (J/g·°C)
- ΔT = temperature change (°C) ${citationInline('specific-heat-calculations', 27)}

**Phase Change Calculations** require different relationships:
**q = mΔH**
Where ΔH represents enthalpy of fusion (melting/freezing) or vaporization (boiling/condensation) ${citationInline('phase-change-enthalpy', 28)}.

**Calorimeter Design** principles minimize heat loss to ensure accurate measurements:
- Insulated containers prevent heat exchange with surroundings
- Stirring ensures uniform temperature distribution
- Temperature measurements track heat flow over time ${citationInline('calorimeter-design', 29)}

### **Heat Transfer and Energy Conservation**

The First Law of Thermodynamics governs all energy transformations in chemical systems ${citationInline('first-law-thermodynamics', 30)}. Energy conservation requires that heat lost by one component equals heat gained by another in isolated systems.

**Calorimetry Applications**:
- **Specific Heat Determination**: Measuring heat capacity of unknown substances
- **Enthalpy of Reaction**: Calculating energy changes for chemical processes
- **Food Calorie Content**: Determining energy stored in biological molecules
- **Phase Change Studies**: Quantifying fusion and vaporization enthalpies ${citationInline('calorimetry-applications', 31)}

### **Real-World Applications and Industrial Relevance**

Understanding solutions and energy changes enables numerous technological applications ${citationInline('industrial-thermochemistry', 32)}:

**Pharmaceutical Industry**: Drug solubility determines bioavailability, formulation design requires precise concentration control, and calorimetry ensures product stability ${citationInline('pharmaceutical-chemistry', 33)}.

**Environmental Monitoring**: Water quality assessment uses ppm measurements, pollution remediation exploits solubility principles, and thermal pollution monitoring requires calorimetric techniques ${citationInline('environmental-chemistry', 34)}.

**Food Science**: Preservation methods manipulate colligative properties, flavor extraction depends on solubility principles, and cooking processes involve complex thermochemical changes ${citationInline('food-chemistry', 35)}.

${bibliography([
  'solution-theory',
  'solubility-principles',
  'hydration-energy',
  'entropy-mixing',
  'temperature-solubility',
  'henry-law',
  'solubility-curves',
  'unsaturated-solutions',
  'saturated-solutions',
  'supersaturated-solutions',
  'concentration-measurements',
  'molarity-definition',
  'molality-definition',
  'ppm-measurements',
  'colligative-properties',
  'raoult-law',
  'boiling-point-elevation',
  'freezing-point-depression',
  'osmotic-pressure',
  'thermochemistry-principles',
  'thermodynamic-systems',
  'exothermic-reactions',
  'endothermic-reactions',
  'energy-diagrams',
  'activation-energy',
  'calorimetry-methods',
  'specific-heat-calculations',
  'phase-change-enthalpy',
  'calorimeter-design',
  'first-law-thermodynamics',
  'calorimetry-applications',
  'industrial-thermochemistry',
  'pharmaceutical-chemistry',
  'environmental-chemistry',
  'food-chemistry'
])}`,
  practice: [
    {
      text: '1. **Solubility Predictions**: Using "like dissolves like" principles, predict whether these combinations will form solutions:\n    a) NaCl (ionic) in water (polar)\n    b) Vegetable oil (nonpolar) in hexane (nonpolar)\n    c) Ethanol (polar) in water (polar)\n    d) I₂ (nonpolar) in CCl₄ (nonpolar)\n    e) KNO₃ (ionic) in benzene (nonpolar)',
    },
    {
      text: '2. **Concentration Calculations**: Calculate the following solution concentrations:\n    a) Molarity of 25.0 g NaOH dissolved in 500.0 mL total solution\n    b) Molality of 15.0 g glucose (C₆H₁₂O₆) in 250.0 g water\n    c) ppm of 0.025 g chlorine in 1000 g swimming pool water\n    d) Volume of 6.0 M HCl needed to make 250 mL of 0.50 M HCl',
    },
    {
      text: '3. **Colligative Properties Analysis**:\n    a) Which solution has the lower freezing point: 1.0 m glucose or 1.0 m NaCl? Explain.\n    b) Calculate the number of particles produced when 0.50 mol CaCl₂ dissolves completely\n    c) Explain why salt is effective for melting ice on roads\n    d) Why does adding sugar to water increase the boiling point?',
    },
    {
      text: '4. **Thermochemistry Classification**: Identify each process as endothermic or exothermic and explain:\n    a) Burning natural gas: CH₄ + 2O₂ → CO₂ + 2H₂O + energy\n    b) Melting ice cubes in a drink\n    c) Mixing NaOH pellets with water (solution gets hot)\n    d) Photosynthesis: 6CO₂ + 6H₂O + energy → C₆H₁₂O₆ + 6O₂',
    },
    {
      text: '5. **Calorimetry Calculations**: Solve these heat transfer problems:\n    a) How much heat is required to raise 100.0 g water from 25°C to 75°C? (c = 4.18 J/g·°C)\n    b) Calculate the heat released when 50.0 g water vapor condenses at 100°C (ΔHvap = 2260 J/g)\n    c) A 25.0 g metal sample cools from 95°C to 25°C, releasing 1050 J. What is its specific heat?\n    d) How much total energy is needed to convert 20.0 g ice at 0°C to steam at 100°C?',
    },
  ],
  answers: [
    {
      text: '1. **Solubility Predictions**:\n    a) **Yes** - Ionic NaCl dissolves in polar water through ion-dipole interactions\n    b) **Yes** - Both nonpolar substances mix through London dispersion forces\n    c) **Yes** - Both polar substances form hydrogen bonds\n    d) **Yes** - Both nonpolar substances have compatible intermolecular forces\n    e) **No** - Ionic KNO₃ cannot interact favorably with nonpolar benzene',
    },
    {
      text: '2. **Concentration Solutions**:\n    a) **Molarity**: 25.0 g NaOH ÷ 40.0 g/mol = 0.625 mol; 0.625 mol ÷ 0.500 L = **1.25 M**\n    b) **Molality**: 15.0 g glucose ÷ 180.0 g/mol = 0.0833 mol; 0.0833 mol ÷ 0.250 kg = **0.333 m**\n    c) **ppm**: (0.025 g ÷ 1000 g) × 10⁶ = **25 ppm**\n    d) **Dilution**: M₁V₁ = M₂V₂; (6.0 M)(V₁) = (0.50 M)(250 mL); **V₁ = 20.8 mL**',
    },
    {
      text: '3. **Colligative Properties Analysis**:\n    a) **1.0 m NaCl** has lower freezing point because it dissociates into 2 particles (Na⁺ + Cl⁻) vs glucose which remains as 1 particle\n    b) **CaCl₂ dissociates**: CaCl₂ → Ca²⁺ + 2Cl⁻; 0.50 mol × 3 particles/formula unit = **1.5 mol particles**\n    c) **Salt effectiveness**: Ionic dissociation provides more particles per mole, creating greater freezing point depression than molecular compounds\n    d) **Boiling point elevation**: Sugar molecules reduce water\'s vapor pressure, requiring higher temperature to reach atmospheric pressure for boiling',
    },
    {
      text: '4. **Thermochemistry Classification**:\n    a) **Exothermic** - Combustion releases energy (ΔH < 0), products have lower energy than reactants\n    b) **Endothermic** - Melting requires energy input (ΔH > 0) to overcome hydrogen bonds\n    c) **Exothermic** - Dissolution releases energy (ΔH < 0), observed as temperature increase\n    d) **Endothermic** - Photosynthesis requires energy input (ΔH > 0) from sunlight to proceed',
    },
    {
      text: '5. **Calorimetry Solutions**:\n    a) **Heating water**: q = mcΔT = (100.0 g)(4.18 J/g·°C)(50°C) = **20,900 J**\n    b) **Condensation**: q = mΔHvap = (50.0 g)(2260 J/g) = **113,000 J**\n    c) **Specific heat**: c = q/(mΔT) = 1050 J/[(25.0 g)(70°C)] = **0.60 J/g·°C**\n    d) **Ice to steam**: \n       • Melt ice: (20.0 g)(334 J/g) = 6,680 J\n       • Heat water: (20.0 g)(4.18 J/g·°C)(100°C) = 8,360 J\n       • Vaporize water: (20.0 g)(2260 J/g) = 45,200 J\n       • **Total: 60,240 J or 60.2 kJ**',
    },
  ],
};
