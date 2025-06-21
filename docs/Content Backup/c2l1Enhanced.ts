import { Lesson } from '../../../../types';
import { citationInline, bibliography } from '../../../utils/citationManager';

export const c2l1Enhanced: Lesson = {
  id: 'C2L1_ENHANCED',
  unit: 2,
  title: 'Atomic Structure: From Historical Models to Modern Understanding',
  objectives: [
    'Describe the key contributions of Dalton, Thomson, Rutherford, and Bohr to atomic theory development.',
    'Identify the charge, mass, and location of protons, neutrons, and electrons using modern atomic model.',
    'Determine the number of subatomic particles in neutral atoms and ions using atomic and mass numbers.',
    'Define isotopes and calculate average atomic mass from isotopic abundance data.',
    'Write electron configurations for elements and identify valence electrons.',
    'Explain the relationship between electron energy transitions and bright-line spectra.',
  ],
  labMinutes: 60,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html',
      title: 'Build an Atom',
      description:
        'Construct atoms by adding protons, neutrons, and electrons. Observe how the element, charge, and mass change as you build different atoms and ions.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/models-of-the-hydrogen-atom/latest/models-of-the-hydrogen-atom_en.html',
      title: 'Models of the Hydrogen Atom',
      description:
        'Explore historical and modern atomic models. Observe light absorption and emission as electrons transition between energy levels.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/isotopes-and-atomic-mass/latest/isotopes-and-atomic-mass_en.html',
      title: 'Isotopes and Atomic Mass',
      description:
        'Investigate how the number of neutrons affects atomic mass and stability. Calculate average atomic mass using isotope abundance data.',
    },
    {
      type: 'custom',
      title: 'Atomic Timeline Explorer',
      description:
        'Interactive timeline showing the evolution of atomic models with key experiments and discoveries.',
      placeholderText:
        '**Learning Goal:** Understand how atomic theory developed through key historical experiments.\n\n**Functionality:** Students explore an interactive timeline from Dalton (1803) through modern quantum mechanics. Each era shows the experimental evidence, model limitations, and breakthroughs that led to the next advancement. Includes virtual recreations of gold foil experiment and cathode ray tube demonstrations.\n\n*Timeline with interactive experiment simulations and model comparisons.*',
    },
    {
      type: 'custom',
      title: 'Electron Configuration Builder',
      description:
        'Build electron configurations step-by-step and visualize orbital filling patterns.',
      placeholderText:
        '**Learning Goal:** Master electron configuration writing and orbital energy relationships.\n\n**Functionality:** Students build electron configurations by filling orbitals in order of increasing energy. Visual feedback shows orbital shapes and electron placement. Includes practice with exceptions and verification against spectroscopic data.\n\n*Interactive orbital diagram with step-by-step configuration building.*',
    },
  ],
  narrative: `## **The Evolution of Atomic Theory**

The story of atomic theory is a testament to the power of scientific inquiry—each generation of scientists building upon previous discoveries to reveal the true nature of matter${citationInline('brown-chemistry-14th', 23)}.

### **Historical Development of Atomic Models**

#### **Dalton's Atomic Theory (1803)**
John Dalton's groundbreaking atomic theory provided the first scientific foundation for understanding matter${citationInline('dalton-atomic-theory', 24)}:

1. **All matter is composed of extremely small particles called atoms**
2. **Atoms of a given element are identical** in size, mass, and properties
3. **Atoms cannot be subdivided, created, or destroyed** in chemical reactions
4. **Different elements combine in simple whole-number ratios** to form compounds
5. **Chemical reactions involve rearrangement of atoms**

Dalton's model depicted atoms as solid, indivisible spheres—like tiny billiard balls${citationInline('chemistry-history-atoms', 25)}.

#### **Thomson's "Plum Pudding" Model (1897)**
J.J. Thomson's discovery of the electron revolutionized atomic understanding${citationInline('thomson-electron-discovery', 26)}. His cathode ray tube experiments revealed:

- **Electrons**: Negatively charged particles with extremely small mass
- **Atomic Structure**: Atoms contain positive and negative charges
- **"Plum Pudding" Model**: Electrons embedded in a sphere of positive charge

Thomson's work earned him the Nobel Prize and showed that atoms were not indivisible${citationInline('nobel-physics-1906', 27)}.

#### **Rutherford's Nuclear Model (1911)**
Ernest Rutherford's gold foil experiment provided stunning evidence for atomic structure${citationInline('rutherford-gold-foil', 28)}:

**Experimental Setup**: Alpha particles fired at thin gold foil
**Expected Result**: Particles pass straight through (based on Thomson's model)
**Actual Result**: Most passed through, but some deflected at large angles

**Revolutionary Conclusions**:
- **Atoms are mostly empty space**
- **Dense, positive nucleus** at the center contains most of the mass
- **Electrons orbit the nucleus** in the surrounding space

Rutherford's nuclear model established the basic structure we recognize today${citationInline('nist-atomic-structure', 29)}.

#### **Bohr's Quantum Model (1913)**
Niels Bohr refined atomic theory by introducing quantum mechanics principles${citationInline('bohr-model-hydrogen', 30)}:

- **Fixed Energy Levels**: Electrons occupy specific orbital energies
- **Quantum Jumps**: Electrons absorb or emit energy when changing levels
- **Bright-Line Spectra**: Each element produces unique spectral fingerprints
- **Stable Orbits**: Electrons don't spiral into the nucleus

Bohr's model successfully explained hydrogen's spectrum and earned him the Nobel Prize${citationInline('nobel-physics-1922', 31)}.

#### **Modern Wave-Mechanical Model (1920s-present)**
The current quantum mechanical model incorporates wave-particle duality${citationInline('quantum-mechanics-atoms', 32)}:

- **Electron Clouds**: Probability regions where electrons are likely found
- **Orbitals**: Three-dimensional shapes describing electron locations
- **Uncertainty Principle**: Cannot know exact position and momentum simultaneously
- **Quantum Numbers**: Four numbers completely describe each electron

## **Modern Atomic Structure**

### **Subatomic Particles**
Atoms consist of three fundamental particles with precisely measured properties${citationInline('nist-atomic-masses', 33)}:

| Particle | Symbol | Charge | Mass (amu) | Location | Discovery |
|----------|--------|--------|------------|----------|-----------|
| **Proton** | p⁺ | +1 | 1.007276 | Nucleus | Rutherford (1919) |
| **Neutron** | n⁰ | 0 | 1.008665 | Nucleus | Chadwick (1932) |
| **Electron** | e⁻ | -1 | 0.000549 | Orbitals | Thomson (1897) |

### **Nuclear Composition**
The **nucleus** contains protons and neutrons (collectively called **nucleons**)${citationInline('nuclear-composition', 34)}:

- **Extremely dense**: 99.9% of atomic mass in ~0.01% of atomic volume
- **Positively charged**: Due to protons (neutrons are neutral)
- **Held together**: By strong nuclear force overcoming electric repulsion
- **Size**: Approximately 10⁻¹⁵ meters (femtometers)

### **Electron Cloud Structure**
Electrons occupy **orbitals**—regions of space with high probability of electron presence${citationInline('orbital-theory', 35)}:

**Energy Levels (Shells)**:
- **Principal quantum number (n)**: 1, 2, 3, 4, 5, 6, 7...
- **Higher n = higher energy** and greater distance from nucleus
- **Maximum electrons per level**: 2n²

**Orbital Types**:
- **s orbitals**: Spherical shape, hold 2 electrons maximum
- **p orbitals**: Dumbbell shape, hold 6 electrons maximum (3 orbitals × 2)
- **d orbitals**: Complex shapes, hold 10 electrons maximum (5 orbitals × 2)
- **f orbitals**: Very complex shapes, hold 14 electrons maximum (7 orbitals × 2)

## **Atomic Numbers and Mass Numbers**

### **Atomic Number (Z)**
The **atomic number** uniquely identifies each element${citationInline('nist-periodic-data', 36)}:

- **Definition**: Number of protons in the nucleus
- **Element Identity**: Determines all chemical properties
- **Neutral Atoms**: Atomic number = number of electrons
- **Never Changes**: Changing protons creates a different element

**Examples**:
- Hydrogen: Z = 1 (1 proton)
- Carbon: Z = 6 (6 protons)
- Gold: Z = 79 (79 protons)

### **Mass Number (A)**
The **mass number** represents the total nuclear mass${citationInline('atomic-mass-units', 37)}:

**Formula**: A = Number of Protons + Number of Neutrons

**Calculating Neutrons**: Neutrons = Mass Number - Atomic Number

**Example - Carbon-14**:
- Atomic Number (Z) = 6
- Mass Number (A) = 14
- Neutrons = 14 - 6 = 8

## **Isotopes and Average Atomic Mass**

### **Isotopes Definition**
**Isotopes** are atoms of the same element with different numbers of neutrons${citationInline('isotope-definition-nist', 38)}:

- **Same Element**: Identical number of protons (same Z)
- **Different Mass**: Different numbers of neutrons
- **Same Chemistry**: Identical chemical properties
- **Different Physics**: Different nuclear stability and mass

### **Isotope Notation**
**Standard Notation**: Element-Mass Number (e.g., Carbon-12, Carbon-14)
**Nuclear Notation**: ᴬ₍Z₎X (e.g., ¹²₆C, ¹⁴₆C)

**Common Examples**:
- **Hydrogen Isotopes**: ¹H (protium), ²H (deuterium), ³H (tritium)
- **Carbon Isotopes**: ¹²C (98.9%), ¹³C (1.1%), ¹⁴C (trace, radioactive)
- **Uranium Isotopes**: ²³⁵U (0.7%, fissile), ²³⁸U (99.3%, fertile)

### **Average Atomic Mass Calculation**
The atomic mass on the periodic table represents a **weighted average** of all naturally occurring isotopes${citationInline('average-atomic-mass', 39)}:

**Formula**: Average Atomic Mass = Σ(isotope mass × fractional abundance)

**Example - Chlorine**:
- **Cl-35**: Mass = 34.969 amu, Abundance = 75.77%
- **Cl-37**: Mass = 36.966 amu, Abundance = 24.23%

**Calculation**:
Average Mass = (34.969 × 0.7577) + (36.966 × 0.2423)
Average Mass = 26.50 + 8.96 = 35.46 amu

This matches the periodic table value for chlorine${citationInline('nist-chlorine-data', 40)}.

## **Electron Configuration and Energy Levels**

### **Electron Configuration Principles**
Electrons fill orbitals according to specific rules${citationInline('electron-configuration', 41)}:

1. **Aufbau Principle**: Fill lowest energy orbitals first
2. **Pauli Exclusion Principle**: Maximum 2 electrons per orbital with opposite spins
3. **Hund's Rule**: Half-fill orbitals before pairing electrons

### **Orbital Filling Order**
**Energy Sequence**: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p...

**Memory Device**: Use periodic table structure or diagonal rule

### **Electron Configuration Examples**
- **Hydrogen (Z=1)**: 1s¹
- **Carbon (Z=6)**: 1s² 2s² 2p²
- **Sodium (Z=11)**: 1s² 2s² 2p⁶ 3s¹
- **Iron (Z=26)**: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶

### **Valence Electrons**
**Valence electrons** are the outermost electrons that participate in chemical bonding${citationInline('valence-electrons', 42)}:

- **s and p electrons** in the highest energy level
- **Determine chemical properties** and reactivity
- **Group number** (main group elements) = number of valence electrons

## **Bright-Line Spectra and Electron Transitions**

### **Energy Level Transitions**
When electrons absorb energy, they jump to higher energy levels (**excited state**)${citationInline('atomic-spectra', 43)}. When they return to lower levels (**ground state**), they emit light:

**Energy Relationship**: E = hν = hc/λ
- h = Planck's constant
- ν = frequency
- c = speed of light  
- λ = wavelength

### **Spectral Analysis**
Each element produces a unique **bright-line spectrum**—like a fingerprint${citationInline('spectroscopy-nist', 44)}:

- **Hydrogen**: Red, blue-green, blue, violet lines (Balmer series)
- **Sodium**: Characteristic yellow doublet (589 nm)
- **Mercury**: Blue, green, yellow, orange lines

### **Applications**
- **Stellar Composition**: Identify elements in distant stars
- **Chemical Analysis**: Determine sample composition
- **Quantum Mechanics**: Verify energy level predictions
- **Analytical Chemistry**: Atomic absorption/emission spectroscopy

${bibliography([
  'brown-chemistry-14th',
  'dalton-atomic-theory',
  'chemistry-history-atoms',
  'thomson-electron-discovery',
  'nobel-physics-1906',
  'rutherford-gold-foil',
  'nist-atomic-structure',
  'bohr-model-hydrogen',
  'nobel-physics-1922',
  'quantum-mechanics-atoms',
  'nist-atomic-masses',
  'nuclear-composition',
  'orbital-theory',
  'nist-periodic-data',
  'atomic-mass-units',
  'isotope-definition-nist',
  'average-atomic-mass',
  'nist-chlorine-data',
  'electron-configuration',
  'valence-electrons',
  'atomic-spectra',
  'spectroscopy-nist'
])}`,
  practice: [
    {
      text: '1. **Historical Atomic Models**: Explain how Rutherford\'s gold foil experiment provided evidence against Thomson\'s "plum pudding" model. What specific observations led to the nuclear model of the atom?',
    },
    {
      text: '2. **Subatomic Particle Calculations**: An atom has 17 protons and 18 neutrons.\n    a) What is the atomic number?\n    b) What is the mass number?\n    c) How many electrons does the neutral atom have?\n    d) What element is this?\n    e) Write the nuclear notation for this atom.',
    },
    {
      text: '3. **Average Atomic Mass**: Copper has two naturally occurring isotopes: Cu-63 (62.930 amu, 69.17% abundance) and Cu-65 (64.928 amu, 30.83% abundance). Calculate the average atomic mass of copper and compare it to the periodic table value.',
    },
    {
      text: '4. **Electron Configuration**: \n    a) Write the complete electron configuration for sulfur (Z=16)\n    b) How many valence electrons does sulfur have?\n    c) Which noble gas has the same electron configuration as the sulfide ion (S²⁻)?',
    },
    {
      text: '5. **Bright-Line Spectra**: Explain why each element produces a unique bright-line spectrum. How does this relate to electron energy levels and the Bohr model of the atom?',
    },
  ],
  answers: [
    {
      text: '1. **Rutherford\'s Gold Foil Experiment**:\n    **Observations that disproved Thomson\'s model**:\n    - Most alpha particles passed straight through the foil (unexpected if positive charge was evenly distributed)\n    - Some particles were deflected at large angles (impossible with diffuse positive charge)\n    - A few particles bounced straight back (required concentrated positive charge)\n    \n    **Evidence for nuclear model**:\n    - Large deflections required a concentrated, dense positive center (nucleus)\n    - Most empty space explained why most particles passed through\n    - Small nucleus size explained why only a few particles were deflected',
    },
    {
      text: '2. **Subatomic Particle Calculations**:\n    a) **Atomic number** = 17 (number of protons)\n    b) **Mass number** = 17 + 18 = 35 (protons + neutrons)\n    c) **Electrons in neutral atom** = 17 (equals number of protons)\n    d) **Element** = Chlorine (Cl) - atomic number 17\n    e) **Nuclear notation** = ³⁵₁₇Cl',
    },
    {
      text: '3. **Average Atomic Mass Calculation**:\n    **Given**: Cu-63 (62.930 amu, 69.17%) and Cu-65 (64.928 amu, 30.83%)\n    \n    **Calculation**:\n    Average mass = (62.930 × 0.6917) + (64.928 × 0.3083)\n    Average mass = 43.52 + 20.02 = 63.54 amu\n    \n    **Comparison**: This matches the periodic table value of 63.546 amu for copper',
    },
    {
      text: '4. **Electron Configuration for Sulfur**:\n    a) **Complete configuration**: 1s² 2s² 2p⁶ 3s² 3p⁴\n    b) **Valence electrons**: 6 (electrons in outermost shell: 3s² 3p⁴)\n    c) **S²⁻ ion configuration**: 1s² 2s² 2p⁶ 3s² 3p⁶ (gains 2 electrons)\n       **Noble gas equivalent**: Argon (Ar) has the same electron configuration',
    },
    {
      text: '5. **Bright-Line Spectra Explanation**:\n    **Why each element is unique**:\n    - Each element has a unique arrangement of electron energy levels\n    - Energy differences between levels are specific to each element\n    - When electrons fall from higher to lower energy levels, they emit photons with specific energies\n    - Energy determines the wavelength/color of light emitted (E = hc/λ)\n    \n    **Relationship to Bohr model**:\n    - Electrons exist in discrete energy levels (quantized)\n    - Light emission occurs only when electrons transition between these fixed levels\n    - Each transition produces a specific wavelength, creating the unique spectral fingerprint',
    },
  ],
};
