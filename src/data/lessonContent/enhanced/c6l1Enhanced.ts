import { Lesson } from '../../../../types';
import { citationInline, bibliography } from '../../../utils/citationManager';

export const c6l1Enhanced: Lesson = {
  id: 'C6L1_ENHANCED',
  unit: 6,
  title: 'Physical Behavior of Matter: From Molecular Motion to Gas Laws',
  objectives: [
    'Apply the Kinetic Molecular Theory to explain the properties of solids, liquids, and gases.',
    'Interpret heating and cooling curves to understand phase changes and energy relationships.',
    'Analyze vapor pressure, boiling point, and their relationship to intermolecular forces.',
    'Use Boyle\'s, Charles\'s, and Gay-Lussac\'s laws to predict gas behavior under changing conditions.',
    'Apply the Combined Gas Law and distinguish between ideal and real gas behavior.',
    'Understand how temperature, pressure, and intermolecular forces affect physical state transitions.',
  ],
  labMinutes: 50,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_en.html',
      title: 'Gas Properties Simulation',
      description:
        'Explore how gas behavior changes with temperature, pressure, and volume. Pump gas molecules into a container and see how they move, interact, and respond to external conditions.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_en.html',
      title: 'States of Matter: Basics',
      description:
        'Visualize molecular motion in solids, liquids, and gases. Heat and cool substances to observe phase changes and understand how temperature affects particle behavior.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/boyles-law/latest/boyles-law_en.html',
      title: 'Boyle\'s Law Simulation',
      description:
        'Investigate the inverse relationship between gas pressure and volume at constant temperature. Manipulate the pressure and observe how volume responds.',
    },
  ],
  narrative: `## **Physical States: A Molecular Perspective**

Understanding matter's physical behavior begins with recognizing that all substances consist of particles in constant motion ${citationInline('kinetic-molecular-theory', 1)}. The **Kinetic Molecular Theory (KMT)** provides our foundational framework for explaining why ice melts, why gases expand when heated, and why pressure cookers work more efficiently at high altitudes.

### **The Kinetic Molecular Theory: Motion Defines State**

The KMT establishes that all matter comprises tiny particles (atoms, molecules, or ions) in perpetual, random motion ${citationInline('statistical-mechanics', 2)}. The energy of this motion—kinetic energy—directly correlates with absolute temperature measured in Kelvin. This fundamental relationship explains why absolute zero (-273.15°C) represents the theoretical point where all molecular motion ceases ${citationInline('thermodynamics-principles', 3)}.

**Solid State Characteristics:**
- Particles arrange in fixed, orderly patterns (crystal lattices)
- Movement limited to vibrations around equilibrium positions
- Strong intermolecular forces maintain structural integrity
- Definite shape and volume result from restricted particle motion ${citationInline('solid-state-physics', 4)}

**Liquid State Characteristics:**
- Particles remain close but move freely past one another
- Intermolecular forces provide cohesion without rigidity
- Definite volume but indefinite shape (conforms to container)
- Sufficient kinetic energy overcomes some intermolecular attractions ${citationInline('liquid-state-theory', 5)}

**Gas State Characteristics:**
- Particles widely separated with negligible intermolecular forces
- Rapid, random motion in straight lines until collisions occur
- No definite shape or volume (expands to fill container)
- High kinetic energy dominates over weak attractive forces ${citationInline('gas-kinetic-theory', 6)}

### **Phase Transitions: Energy and Molecular Reorganization**

Phase changes represent energy-driven transitions between physical states without altering chemical composition ${citationInline('phase-transitions', 7)}. These transformations involve breaking or forming intermolecular forces while maintaining molecular identity.

**Endothermic Processes (Energy Absorption):**
- **Melting (Fusion)**: Solid → Liquid. Energy disrupts crystal lattice structure
- **Boiling (Vaporization)**: Liquid → Gas. Energy overcomes remaining intermolecular forces
- **Sublimation**: Solid → Gas. Direct transition bypassing liquid phase ${citationInline('sublimation-thermodynamics', 8)}

**Exothermic Processes (Energy Release):**
- **Freezing (Crystallization)**: Liquid → Solid. Energy released as particles organize
- **Condensation**: Gas → Liquid. Energy released as intermolecular forces form
- **Deposition**: Gas → Solid. Direct transition releasing maximum energy ${citationInline('crystallization-kinetics', 9)}

### **Heating and Cooling Curves: Visualizing Energy Flow**

Heating curves graphically represent temperature changes as thermal energy is continuously added to a substance ${citationInline('thermal-analysis', 10)}. These curves reveal crucial information about phase transitions and energy requirements.

**Sloped Regions** indicate temperature increase within a single phase:
- Energy increases kinetic energy of particles
- Temperature rises according to q = mcΔT
- Specific heat capacity (c) determines slope steepness ${citationInline('specific-heat-measurements', 11)}

**Horizontal Plateaus** represent phase changes at constant temperature:
- Energy increases potential energy by overcoming intermolecular forces
- Temperature remains constant during transition
- Energy calculated using q = mΔH (enthalpy of fusion or vaporization) ${citationInline('enthalpy-measurements', 12)}

### **Vapor Pressure and Boiling: Molecular Escape Phenomena**

**Vapor pressure** results from molecules possessing sufficient kinetic energy to escape liquid surfaces and enter the gas phase ${citationInline('vapor-pressure-theory', 13)}. This dynamic equilibrium between evaporation and condensation creates measurable pressure above liquid surfaces.

**Temperature Effects on Vapor Pressure:**
- Higher temperatures increase molecular kinetic energy
- More molecules achieve escape velocity from liquid surface
- Vapor pressure increases exponentially with temperature (Clausius-Clapeyron equation) ${citationInline('clausius-clapeyron', 14)}

**Intermolecular Force Effects:**
- **Volatile liquids** (weak IMFs): High vapor pressure, low boiling point
- **Non-volatile liquids** (strong IMFs): Low vapor pressure, high boiling point
- Hydrogen bonding significantly reduces volatility ${citationInline('hydrogen-bonding', 15)}

**Boiling Point Definition:** The temperature at which vapor pressure equals external atmospheric pressure ${citationInline('boiling-point-theory', 16)}. At this point, bubbles form throughout the liquid rather than just at surfaces.

### **Gas Laws: Quantifying Gas Behavior**

Gas behavior follows predictable mathematical relationships between pressure (P), volume (V), and temperature (T) ${citationInline('gas-laws-development', 17)}. These empirical laws, derived from experimental observations, accurately describe gas behavior under normal conditions.

**Critical Requirement:** Temperature must always be expressed in Kelvin for gas law calculations. The conversion K = °C + 273.15 ensures proportional relationships hold mathematically ${citationInline('temperature-scales', 18)}.

**Boyle's Law** (Robert Boyle, 1662): At constant temperature, gas pressure and volume are inversely proportional ${citationInline('boyles-law-historical', 19)}.
- Mathematical expression: P₁V₁ = P₂V₂
- Physical explanation: Smaller volume concentrates same number of particles, increasing collision frequency with container walls
- Applications: Breathing mechanics, hydraulic systems, diving physiology

**Charles's Law** (Jacques Charles, 1787): At constant pressure, gas volume and absolute temperature are directly proportional ${citationInline('charles-law-historical', 20)}.
- Mathematical expression: V₁/T₁ = V₂/T₂
- Physical explanation: Higher temperature increases kinetic energy, requiring larger volume to maintain constant pressure
- Applications: Hot air balloons, thermal expansion, weather balloon design

**Gay-Lussac's Law** (Joseph Gay-Lussac, 1808): At constant volume, gas pressure and absolute temperature are directly proportional ${citationInline('gay-lussac-law', 21)}.
- Mathematical expression: P₁/T₁ = P₂/T₂
- Physical explanation: Higher temperature increases particle kinetic energy and collision force with container walls
- Applications: Pressure cookers, automotive tire pressure, aerosol containers

### **Combined Gas Law: Unified Mathematical Framework**

The Combined Gas Law integrates Boyle's, Charles's, and Gay-Lussac's laws into a single equation applicable when gas amount remains constant ${citationInline('combined-gas-law', 22)}:

**(P₁V₁)/T₁ = (P₂V₂)/T₂**

This relationship allows calculation of any unknown variable when five others are known. By holding one variable constant, the equation reduces to individual gas laws, demonstrating their mathematical unity ${citationInline('gas-law-derivations', 23)}.

### **Ideal vs. Real Gas Behavior: Model Limitations**

**Ideal Gas Model** assumes:
1. Gas particles have negligible volume (point masses)
2. No intermolecular forces exist between particles
3. All collisions are perfectly elastic
4. Particle motion follows classical mechanics ${citationInline('ideal-gas-theory', 24)}

**Real Gas Deviations** occur because:
1. Molecules occupy finite volume (especially at high pressure)
2. Intermolecular forces exist (van der Waals forces, dipole interactions)
3. Forces become significant at low temperature or high pressure ${citationInline('real-gas-behavior', 25)}

**Conditions Favoring Ideal Behavior:**
- **High temperature**: Kinetic energy >> intermolecular forces
- **Low pressure**: Large intermolecular distances minimize volume and force effects
- **Small, nonpolar molecules**: Minimal intermolecular attractions ${citationInline('gas-ideality-conditions', 26)}

**Conditions Causing Deviations:**
- **Low temperature**: Intermolecular forces become significant
- **High pressure**: Molecular volume becomes appreciable
- **Large, polar molecules**: Strong intermolecular attractions
- **Near condensation conditions**: Approaching phase transition ${citationInline('gas-deviation-factors', 27)}

### **Practical Applications and Real-World Connections**

Understanding physical behavior of matter enables technological advancement and explains natural phenomena ${citationInline('applied-thermodynamics', 28)}:

**Meteorology**: Weather prediction relies on gas law relationships in atmospheric pressure systems, cloud formation through vapor pressure dynamics, and thermal expansion effects ${citationInline('atmospheric-physics', 29)}.

**Engineering**: Refrigeration cycles exploit phase change enthalpies, pressure vessel design requires real gas calculations, and thermal expansion considerations prevent structural failure ${citationInline('engineering-thermodynamics', 30)}.

**Biology**: Breathing mechanics follow Boyle's Law, cellular osmotic pressure depends on solution behavior, and protein folding involves intermolecular force optimization ${citationInline('biological-thermodynamics', 31)}.

${bibliography([
  'kinetic-molecular-theory',
  'statistical-mechanics',
  'thermodynamics-principles',
  'solid-state-physics',
  'liquid-state-theory',
  'gas-kinetic-theory',
  'phase-transitions',
  'sublimation-thermodynamics',
  'crystallization-kinetics',
  'thermal-analysis',
  'specific-heat-measurements',
  'enthalpy-measurements',
  'vapor-pressure-theory',
  'clausius-clapeyron',
  'hydrogen-bonding',
  'boiling-point-theory',
  'gas-laws-development',
  'temperature-scales',
  'boyles-law-historical',
  'charles-law-historical',
  'gay-lussac-law',
  'combined-gas-law',
  'gas-law-derivations',
  'ideal-gas-theory',
  'real-gas-behavior',
  'gas-ideality-conditions',
  'gas-deviation-factors',
  'applied-thermodynamics',
  'atmospheric-physics',
  'engineering-thermodynamics',
  'biological-thermodynamics'
])}`,
  practice: [
    {
      text: '1. **Kinetic Molecular Theory Application**: Using KMT principles, explain why:\n    a) Solids maintain their shape while liquids take the shape of their container\n    b) Gases are much more compressible than liquids or solids\n    c) Increasing temperature causes most substances to expand\n    d) Ice floats on liquid water (considering molecular arrangement)',
    },
    {
      text: '2. **Gas Law Calculations**: Solve the following gas law problems:\n    a) A gas occupies 450 mL at 27°C and 1.2 atm. What volume will it occupy at STP?\n    b) A tire pressure gauge reads 32 psi at 20°C. What will it read at 45°C?\n    c) A gas sample has a volume of 2.50 L at 298 K and 0.95 atm. Find the volume at 350 K and 1.15 atm.',
    },
    {
      text: '3. **Phase Change Energy**: Calculate the energy required to:\n    a) Melt 50.0 g of ice at 0°C (ΔHfus = 334 J/g)\n    b) Heat the resulting water from 0°C to 100°C (c = 4.18 J/g·°C)\n    c) Vaporize the water at 100°C (ΔHvap = 2260 J/g)\n    d) What is the total energy required for the complete process?',
    },
    {
      text: '4. **Vapor Pressure Analysis**: \n    a) Explain why water boils at lower temperatures at high altitudes\n    b) Which has higher vapor pressure at 25°C: ethanol (bp = 78°C) or water (bp = 100°C)?\n    c) Why do volatile liquids feel cool when applied to skin?\n    d) Predict how vapor pressure changes when temperature increases by 20°C',
    },
    {
      text: '5. **Real vs. Ideal Gas Behavior**: \n    a) Under what conditions does CO₂ behave most like an ideal gas?\n    b) Explain why He behaves more ideally than H₂O vapor at the same conditions\n    c) A gas shows 15% deviation from ideal behavior. What physical factors likely cause this?\n    d) Why do gas laws work well for most calculations despite real gas deviations?',
    },
  ],
  answers: [
    {
      text: '1. **KMT Explanations**:\n    a) **Solids**: Strong intermolecular forces keep particles in fixed positions with only vibrational motion. **Liquids**: Weaker forces allow particles to move past each other while maintaining some cohesion.\n    b) **Gases**: Large spaces between particles allow significant volume reduction. **Liquids/Solids**: Particles already close together resist compression.\n    c) **Thermal expansion**: Higher temperature increases kinetic energy, causing particles to move more vigorously and occupy more space on average.\n    d) **Ice structure**: Hydrogen bonding creates an open crystal lattice less dense than liquid water\'s more compact arrangement.',
    },
    {
      text: '2. **Gas Law Solutions**:\n    a) **STP conversion**: V₂ = P₁V₁T₂ / (P₂T₁) = (1.2 atm)(450 mL)(273 K) / (1.0 atm)(300 K) = **491.4 mL**\n    b) **Tire pressure**: P₂ = P₁T₂/T₁ = (32 psi)(318 K) / (293 K) = **34.7 psi**\n    c) **Combined law**: V₂ = P₁V₁T₂ / (P₂T₁) = (0.95 atm)(2.50 L)(350 K) / (1.15 atm)(298 K) = **2.43 L**',
    },
    {
      text: '3. **Energy Calculation Solutions**:\n    a) **Melting**: q = (50.0 g)(334 J/g) = **16,700 J**\n    b) **Heating**: q = (50.0 g)(4.18 J/g·°C)(100°C) = **20,900 J**\n    c) **Vaporizing**: q = (50.0 g)(2260 J/g) = **113,000 J**\n    d) **Total energy**: 16,700 + 20,900 + 113,000 = **150,600 J** (150.6 kJ)',
    },
    {
      text: '4. **Vapor Pressure Answers**:\n    a) **Altitude effect**: Lower atmospheric pressure requires lower vapor pressure to boil.\n    b) **Ethanol** has weaker intermolecular forces, leading to higher vapor pressure.\n    c) **Evaporative cooling**: Volatile liquids evaporate quickly, absorbing heat from skin.\n    d) **Temperature increase**: Vapor pressure increases exponentially due to more molecules having sufficient energy to escape.',
    },
    {
      text: '5. **Ideal Gas Behavior Answers**:\n    a) **Ideal conditions for CO₂**: High temperature and low pressure minimize intermolecular forces and molecular volume effects.\n    b) **He vs. H₂O**: Helium is smaller and nonpolar, resulting in weaker intermolecular forces than polar water molecules.\n    c) **Deviation causes**: Could be low temperature, high pressure, or strong intermolecular forces (e.g., hydrogen bonding).\n    d) **Gas law utility**: Under common conditions, real gas behavior is close enough to ideal for most practical calculations.',
    },
  ],
};
