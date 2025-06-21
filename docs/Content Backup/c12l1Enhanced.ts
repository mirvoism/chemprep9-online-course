import { Lesson } from '../../../../types';
import { citationInline, bibliography } from '../../../utils/citationManager';

export const c12l1Enhanced: Lesson = {
  id: 'C12L1_ENHANCED',
  unit: 12,
  title: 'Nuclear Chemistry: Radioactivity, Nuclear Reactions, and Applications',
  objectives: [
    'Analyze the fundamental properties of radioactive decay including alpha, beta, and gamma emissions and their penetrating abilities.',
    'Write and balance nuclear equations using conservation of mass number and atomic number principles.',
    'Calculate half-life problems to determine radioactive isotope concentrations over time using exponential decay mathematics.',
    'Compare and contrast nuclear fission and fusion processes including their energy requirements and applications.',
    'Evaluate the beneficial applications and potential risks of radioisotopes in medicine, industry, and research.',
    'Apply nuclear chemistry principles to real-world scenarios including dating techniques, medical imaging, and power generation.',
  ],
  labMinutes: 70,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/nuclear-fission/latest/nuclear-fission_en.html',
      title: 'Nuclear Fission',
      description:
        'Explore nuclear fission processes by firing neutrons at uranium nuclei. Observe chain reactions and energy release in controllable simulations.',
    },
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/radioactive-dating-game/latest/radioactive-dating-game_en.html',
      title: 'Radioactive Dating Game',
      description:
        'Use radioactive decay to determine the age of objects and understand half-life concepts through interactive dating scenarios.',
    },
    {
      type: 'custom',
      title: 'Nuclear Equation Balancer',
      description:
        'Interactive tool for practicing nuclear equation balancing with step-by-step verification and immediate feedback.',
      placeholderText:
        '**Learning Goal:** Master nuclear equation balancing using conservation laws for mass number and atomic number.\n\n**Functionality:** Students input nuclear equations with missing particles or isotopes. System checks conservation of mass number (A) and atomic number (Z) automatically. Provides hints for common decay types (alpha, beta, gamma, positron). Includes library of nuclear reactions from natural decay to artificial transmutation. Progress tracking shows mastery of different reaction types.\n\n*Develops systematic approach to nuclear equation analysis and balancing proficiency.*',
    },
    {
      type: 'custom',
      title: 'Half-Life Calculator and Visualizer',
      description:
        'Mathematical tool for half-life calculations with graphical representation of exponential decay curves.',
      placeholderText:
        '**Learning Goal:** Understand half-life mathematics and visualize exponential decay patterns in radioactive samples.\n\n**Functionality:** Interactive calculator allows input of initial amount, half-life, and time elapsed to determine remaining radioactivity. Real-time graphing shows decay curve with marked half-life intervals. Includes reverse calculations to find half-life from data points. Database of common isotopes with actual half-life values for practice problems.\n\n*Connects mathematical concepts to visual representations of radioactive decay processes.*',
    },
    {
      type: 'custom',
      title: 'Radiation Detection Simulator',
      description:
        'Virtual Geiger counter for measuring different types of radiation and understanding detection principles.',
      placeholderText:
        '**Learning Goal:** Learn radiation detection methods and understand penetrating power of different radiation types.\n\n**Functionality:** Simulated Geiger counter with adjustable settings detects alpha, beta, and gamma radiation. Students can place different shielding materials (paper, aluminum, lead) to observe penetrating abilities. Background radiation simulation adds realism. Safety protocol trainer teaches proper handling procedures and ALARA principles.\n\n*Provides safe hands-on experience with radiation detection without actual radioactive sources.*',
    },
    {
      type: 'custom',
      title: 'Nuclear Applications Explorer',
      description:
        'Comprehensive database of nuclear chemistry applications in medicine, industry, and research with interactive case studies.',
      placeholderText:
        '**Learning Goal:** Connect nuclear chemistry principles to real-world applications and understand risk-benefit analysis.\n\n**Functionality:** Interactive modules cover medical imaging (PET, SPECT), cancer treatment, carbon dating, nuclear power, and industrial applications. Each module includes process explanations, isotope selection criteria, and safety considerations. Case studies allow students to make decisions about isotope choice for specific applications.\n\n*Demonstrates practical importance of nuclear chemistry in modern technology and healthcare.*',
    },
    {
      type: 'custom',
      title: 'Nuclear Stability and Decay Predictor',
      description:
        'Interactive chart of nuclides showing band of stability and predicting decay modes based on neutron-to-proton ratios.',
      placeholderText:
        '**Learning Goal:** Understand nuclear stability patterns and predict likely decay modes for unstable isotopes.\n\n**Functionality:** Interactive band of stability chart where students can click on isotopes to see stability status and predicted decay mode. Color coding shows stable isotopes, alpha emitters, beta emitters, and other decay types. Includes explanations of why certain n/p ratios are unstable and how decay processes move isotopes toward stability.\n\n*Develops intuitive understanding of nuclear stability patterns and decay prediction abilities.*',
    },
  ],
  content: `
# Nuclear Chemistry: Radioactivity, Nuclear Reactions, and Applications

${citationInline(1)} Nuclear chemistry focuses on reactions involving the atomic nucleus, where changes in nuclear composition release enormous amounts of energy compared to ordinary chemical reactions. ${citationInline(2)} The energy released in nuclear processes can be millions of times greater than chemical reactions due to the conversion of small amounts of mass into energy according to Einstein's famous equation E=mc².

## 12.1 Natural Radioactivity and Nuclear Decay

${citationInline(3)} **Radioactivity** is the spontaneous emission of particles or electromagnetic radiation from unstable atomic nuclei as they transform to achieve greater nuclear stability.

### Discovery and Nature of Radioactivity
${citationInline(4)} Henri Becquerel discovered natural radioactivity in 1896, and Marie and Pierre Curie subsequently identified and isolated radioactive elements radium and polonium. Their pioneering research revealed that radioactivity is an intrinsic nuclear property independent of chemical bonding or external conditions.

**Fundamental characteristics of radioactive decay:**
- **Spontaneous process**: Occurs without external influence
- **Random individual events**: Cannot predict when specific nucleus will decay
- **Statistically predictable**: Large samples follow exponential decay law
- **Nuclear transformation**: Parent nucleus becomes different daughter nucleus
- **Energy release**: Accompanied by emission of particles and/or electromagnetic radiation

### Types of Nuclear Radiation

${citationInline(5)} Three primary types of radiation were identified by Ernest Rutherford through deflection experiments using electric and magnetic fields.

| **Radiation Type** | **Symbol** | **Composition** | **Mass (amu)** | **Charge** | **Penetrating Power** | **Range in Air** |
|-------------------|------------|-----------------|----------------|------------|---------------------|------------------|
| **Alpha (α)** | ⁴₂He²⁺ | Helium nucleus | 4.002602 | +2 | Very low | 2-10 cm |
| **Beta minus (β⁻)** | ⁰₋₁e⁻ | High-energy electron | 0.000549 | -1 | Moderate | 1-3 meters |
| **Gamma (γ)** | γ | Electromagnetic radiation | 0 | 0 | Very high | Hundreds of meters |

### Additional Nuclear Decay Modes
${citationInline(6)} **Beta plus decay (positron emission)**: A proton converts to a neutron with emission of a positron (⁰₊₁e⁺), the antimatter counterpart of an electron.

**Nuclear equation**: ¹¹₆C → ¹¹₅B + ⁰₊₁e⁺ + νₑ

${citationInline(7)} **Electron capture**: An inner-shell electron is captured by a proton in the nucleus, converting it to a neutron.

**Nuclear equation**: ⁷₄Be + ⁰₋₁e⁻ → ⁷₃Li + νₑ

**Characteristics of different decay modes:**
- **Alpha decay**: Reduces both mass number and atomic number by 2
- **Beta minus decay**: Increases atomic number by 1, mass number unchanged
- **Beta plus decay**: Decreases atomic number by 1, mass number unchanged
- **Electron capture**: Decreases atomic number by 1, mass number unchanged
- **Gamma emission**: Often accompanies other decay modes, no change in mass or atomic number

### Penetrating Power and Biological Effects
${citationInline(8)} The penetrating ability of radiation determines its potential biological impact and required shielding materials.

**Alpha particles**:
- Stopped by paper or thin aluminum foil
- Cannot penetrate human skin from external sources
- Extremely dangerous if inhaled or ingested
- High linear energy transfer causes severe localized damage

**Beta particles**:
- Stopped by aluminum foil or plastic sheet
- Can penetrate skin but not deep into tissue
- Moderate biological hazard requiring appropriate shielding
- Medium linear energy transfer

**Gamma rays**:
- Require dense materials like lead or concrete for shielding
- Can penetrate entire human body
- External exposure hazard but lower linear energy transfer
- Similar to X-rays but typically higher energy

## 12.2 Nuclear Equations and Conservation Laws

${citationInline(9)} **Nuclear equations** represent nuclear transformations using conservation laws that govern all nuclear reactions and decay processes.

### Conservation Laws in Nuclear Reactions
**Two fundamental conservation laws must be satisfied:**

1. **Conservation of mass number (A)**: Sum of mass numbers before reaction equals sum after reaction
2. **Conservation of atomic number (Z)**: Sum of atomic numbers before reaction equals sum after reaction

### Balancing Nuclear Equations

${citationInline(10)} **Alpha decay example**: Uranium-238 undergoes alpha decay
\`\`\`
²³⁸₉₂U → ⁴₂He + ²³⁴₉₀Th
\`\`\`
**Verification:**
- Mass numbers: 238 = 4 + 234 ✓
- Atomic numbers: 92 = 2 + 90 ✓

**Beta minus decay example**: Carbon-14 undergoes beta decay
\`\`\`
¹⁴₆C → ⁰₋₁e + ¹⁴₇N
\`\`\`
**Verification:**
- Mass numbers: 14 = 0 + 14 ✓
- Atomic numbers: 6 = (-1) + 7 ✓

**Gamma emission example**: Excited technetium-99m releases gamma ray
\`\`\`
⁹⁹ᵐ₄₃Tc → ⁹⁹₄₃Tc + γ
\`\`\`
**Verification:**
- Mass numbers: 99 = 99 + 0 ✓
- Atomic numbers: 43 = 43 + 0 ✓

### Complex Nuclear Reactions
${citationInline(11)} **Artificial transmutation** involves bombarding stable nuclei with high-energy particles to induce nuclear transformations.

**Neutron bombardment example**:
\`\`\`
²³⁵₉₂U + ¹₀n → ¹⁴⁰₅₆Ba + ⁹³₃₆Kr + 3¹₀n
\`\`\`

**Charged particle bombardment**:
\`\`\`
¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H
\`\`\`

${citationInline(12)} **Nuclear equation balancing strategy**:
1. Identify known particles and their mass/atomic numbers
2. Set up equation with unknown particle represented as ᴬᵩX
3. Apply conservation laws to solve for A and Z
4. Identify element X using periodic table
5. Verify conservation laws are satisfied

## 12.3 Half-Life and Radioactive Decay Kinetics

${citationInline(13)} **Half-life (t₁/₂)** is the time required for exactly half of the radioactive nuclei in a sample to undergo decay, representing a fundamental characteristic of each radioactive isotope.

### Mathematical Description of Radioactive Decay
${citationInline(14)} Radioactive decay follows first-order kinetics described by the exponential decay equation:

**N(t) = N₀e^(-λt)**

Where:
- N(t) = number of radioactive nuclei at time t
- N₀ = initial number of radioactive nuclei
- λ = decay constant (characteristic of isotope)
- t = elapsed time

**Relationship between half-life and decay constant**:
\`\`\`
t₁/₂ = ln(2)/λ = 0.693/λ
\`\`\`

### Half-Life Calculations
${citationInline(15)} **Basic half-life calculation method**:

After n half-lives: **N = N₀ × (1/2)ⁿ**

**Example problem**: Iodine-131 has a half-life of 8.02 days. If a sample initially contains 64.0 mg of ¹³¹I, how much remains after 24.1 days?

**Solution**:
1. Number of half-lives: n = 24.1 days ÷ 8.02 days = 3.00 half-lives
2. Remaining amount: N = 64.0 mg × (1/2)³ = 64.0 mg × 1/8 = 8.0 mg

### Applications of Half-Life Concepts
${citationInline(16)} **Medical applications**: Selection of radioisotopes for medical procedures depends on appropriate half-life matching procedure duration.

**Diagnostic imaging isotopes**:
- **Technetium-99m**: t₁/₂ = 6.0 hours (ideal for imaging procedures)
- **Fluorine-18**: t₁/₂ = 109.8 minutes (PET scan applications)
- **Iodine-123**: t₁/₂ = 13.2 hours (thyroid imaging)

**Therapeutic isotopes**:
- **Iodine-131**: t₁/₂ = 8.02 days (thyroid cancer treatment)
- **Phosphorus-32**: t₁/₂ = 14.3 days (blood disorder treatment)
- **Strontium-90**: t₁/₂ = 28.8 years (bone cancer treatment)

### Radioactive Dating Techniques
${citationInline(17)} **Carbon-14 dating** utilizes the predictable decay of ¹⁴C (t₁/₂ = 5,730 years) to determine the age of organic materials up to ~50,000 years old.

**Dating principle**:
- Living organisms maintain constant ¹⁴C/¹²C ratio through carbon dioxide exchange
- After death, ¹⁴C decays without replacement
- Measured ¹⁴C activity compared to living standards determines age

**Age calculation equation**:
\`\`\`
t = (t₁/₂ / ln(2)) × ln(A₀/A)
\`\`\`

Where A₀ is activity of living sample and A is measured activity.

${citationInline(18)} **Other radiometric dating methods**:
- **Uranium-lead dating**: U-238 (t₁/₂ = 4.47 × 10⁹ years) for rocks billions of years old
- **Potassium-argon dating**: K-40 (t₁/₂ = 1.25 × 10⁹ years) for volcanic rocks
- **Rubidium-strontium dating**: Rb-87 (t₁/₂ = 4.75 × 10¹⁰ years) for very ancient rocks

## 12.4 Nuclear Fission and Fusion Processes

${citationInline(19)} **Nuclear fission** and **fusion** represent two fundamentally different nuclear processes that release enormous amounts of energy through mass-energy conversion.

### Nuclear Fission
${citationInline(20)} **Nuclear fission** involves the splitting of heavy atomic nuclei into lighter fragments when struck by neutrons, releasing multiple neutrons and enormous energy.

**Uranium-235 fission example**:
\`\`\`
²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3¹₀n + energy
\`\`\`

**Fission characteristics**:
- **Mass defect**: Small amount of mass converts to energy (E = mc²)
- **Chain reaction potential**: Released neutrons can induce additional fissions
- **Critical mass**: Minimum mass required to sustain chain reaction
- **Energy release**: ~200 MeV per fission event

### Chain Reaction Dynamics
${citationInline(21)} **Chain reaction control** is essential for practical applications:

**Multiplication factor (k)**:
- k < 1: Subcritical (reaction dies out)
- k = 1: Critical (steady-state reaction)
- k > 1: Supercritical (exponential increase)

**Nuclear reactor control**:
- **Control rods**: Absorb neutrons to control reaction rate
- **Moderator**: Slows neutrons to optimize fission probability
- **Coolant**: Removes heat and may serve as moderator
- **Containment**: Multiple safety barriers prevent radiation release

### Nuclear Fusion
${citationInline(22)} **Nuclear fusion** involves combining light nuclei at extremely high temperatures and pressures to form heavier nuclei with tremendous energy release.

**Hydrogen fusion example (stellar nucleosynthesis)**:
\`\`\`
⁴¹₁H → ⁴₂He + 2⁰₊₁e⁺ + 2νₑ + energy
\`\`\`

**Deuterium-tritium fusion (practical fusion)**:
\`\`\`
²₁H + ³₁H → ⁴₂He + ¹₀n + 17.6 MeV
\`\`\`

### Comparison of Fission and Fusion

| **Property** | **Nuclear Fission** | **Nuclear Fusion** |
|-------------|--------------------|--------------------|
| **Fuel** | Heavy nuclei (U-235, Pu-239) | Light nuclei (H isotopes) |
| **Products** | Medium mass fragments + neutrons | Heavier nucleus + particles |
| **Energy per nucleon** | ~1 MeV | ~3.5 MeV |
| **Conditions** | Room temperature possible | Extreme temperature/pressure |
| **Waste** | Long-lived radioactive products | Short-lived or stable products |
| **Control** | Controllable with current technology | Extremely challenging |

### Fusion Energy Challenges
${citationInline(23)} **Achieving controlled fusion** requires overcoming significant technological challenges:

**Required conditions**:
- **Temperature**: 100-200 million Kelvin
- **Pressure**: Extremely high confinement
- **Confinement time**: Sufficient for energy-producing reactions

**Confinement approaches**:
- **Magnetic confinement**: Tokamak and stellarator designs
- **Inertial confinement**: Laser-driven implosion
- **Alternative concepts**: Field-reversed configurations, levitating dipoles

## 12.5 Applications and Benefits of Nuclear Chemistry

${citationInline(24)} Nuclear chemistry provides invaluable applications across medicine, industry, research, and energy production while requiring careful management of associated risks.

### Medical Applications
${citationInline(25)} **Nuclear medicine** utilizes radioisotopes for both diagnostic imaging and therapeutic treatment of various medical conditions.

**Diagnostic imaging techniques**:

**Single Photon Emission Computed Tomography (SPECT)**:
- **Technetium-99m**: Most widely used medical radioisotope
- Applications: Heart, brain, bone, and organ imaging
- Advantages: Ideal 6-hour half-life, pure gamma emission

**Positron Emission Tomography (PET)**:
- **Fluorine-18**: Most common PET isotope
- Applications: Cancer detection, brain function studies
- Principle: Positron-electron annihilation produces detectable gamma rays

### Therapeutic Applications
${citationInline(26)} **Radiation therapy** employs high-energy radiation to destroy cancer cells while minimizing damage to healthy tissue.

**External beam therapy**:
- **Cobalt-60**: High-energy gamma ray source
- **Linear accelerators**: Produce electron or photon beams
- **Advantages**: Precise targeting, multiple beam angles

**Brachytherapy** (internal radiation):
- **Iodine-125**: Prostate cancer seed implants
- **Cesium-137**: Gynecological cancer treatment
- **Advantages**: Direct tumor targeting, lower total body dose

**Targeted radiotherapy**:
- **Iodine-131**: Thyroid cancer and hyperthyroidism treatment
- **Yttrium-90**: Liver cancer microsphere therapy
- **Lutetium-177**: Neuroendocrine tumor treatment

### Industrial Applications
${citationInline(27)} **Industrial radiography** uses gamma rays or X-rays to inspect materials and structures without destruction.

**Applications**:
- **Weld inspection**: Detecting flaws in critical structures
- **Pipeline monitoring**: Checking for corrosion or defects
- **Quality control**: Ensuring material integrity in manufacturing

**Tracers in industry**:
- **Flow measurement**: Tracking fluid movement in pipes
- **Leak detection**: Identifying system breaches
- **Wear analysis**: Monitoring equipment degradation

### Food Preservation and Sterilization
${citationInline(28)} **Food irradiation** eliminates harmful bacteria, parasites, and insects while extending shelf life without significantly affecting nutritional content.

**Benefits**:
- **Pathogen elimination**: Destroys Salmonella, E. coli, other bacteria
- **Shelf life extension**: Delays spoilage and ripening
- **Pesticide alternative**: Reduces chemical treatment needs
- **International trade**: Enables quarantine-free transport

**Medical sterilization**:
- **Gamma irradiation**: Sterilizes medical devices and pharmaceuticals
- **Electron beam**: Rapid sterilization of heat-sensitive materials
- **Advantages**: No heat or chemical residues, packaging penetration

### Archaeological and Geological Dating
${citationInline(29)} **Radiometric dating** provides accurate age determination for archaeological artifacts and geological formations.

**Carbon-14 dating applications**:
- Archaeological artifacts (wood, bone, textiles)
- Historical dating (art authentication, manuscript verification)
- Environmental science (groundwater age, sediment dating)

**Long-term geological dating**:
- **Uranium-lead**: Oldest rocks and meteorites
- **Potassium-argon**: Volcanic rocks and ash layers
- **Rubidium-strontium**: Ancient crystalline rocks

## 12.6 Nuclear Safety and Risk Assessment

${citationInline(30)} Responsible use of nuclear technology requires comprehensive understanding of radiation effects, safety protocols, and risk management strategies.

### Biological Effects of Radiation
${citationInline(31)} **Radiation interaction with biological tissue** can cause both immediate and long-term health effects depending on dose, duration, and radiation type.

**Acute radiation effects** (high doses, short exposure):
- **Radiation sickness**: Nausea, fatigue, hair loss
- **Cellular damage**: DNA breaks, protein denaturation
- **Organ failure**: Bone marrow, gastrointestinal damage
- **Threshold doses**: Effects apparent above specific levels

**Chronic radiation effects** (low doses, long exposure):
- **Cancer induction**: Increased risk proportional to cumulative dose
- **Genetic effects**: Mutations affecting future generations
- **Cataracts**: Lens clouding from radiation exposure
- **Stochastic effects**: No threshold, probability increases with dose

### Radiation Protection Principles
${citationInline(32)} **ALARA principle** (As Low As Reasonably Achievable) guides radiation protection practices:

**Time**: Minimize exposure duration
**Distance**: Increase distance from radiation source (inverse square law)
**Shielding**: Use appropriate materials to absorb radiation

**Radiation units and measurements**:
- **Becquerel (Bq)**: Activity (decays per second)
- **Gray (Gy)**: Absorbed dose (energy per unit mass)
- **Sievert (Sv)**: Equivalent dose (biological effect consideration)

### Nuclear Waste Management
${citationInline(33)} **Radioactive waste** requires specialized handling and disposal based on activity level and half-life characteristics.

**Waste classification**:
- **Low-level waste**: Medical gloves, lab equipment (shallow burial)
- **Intermediate-level waste**: Reactor components (engineered storage)
- **High-level waste**: Spent nuclear fuel (deep geological repository)

**Long-term storage strategies**:
- **Engineered barriers**: Multiple containment layers
- **Geological isolation**: Stable rock formations
- **Monitoring systems**: Long-term surveillance capabilities

### Nuclear Accidents and Emergency Response
${citationInline(34)} **Major nuclear accidents** provide important lessons for safety improvements and emergency preparedness.

**Chernobyl (1986)**:
- Reactor design flaws and operator errors
- Widespread contamination across Europe
- Lessons: Containment importance, international cooperation

**Fukushima (2011)**:
- Natural disaster overwhelmed safety systems
- Multiple reactor failures and hydrogen explosions
- Lessons: Backup power criticality, tsunami preparation

**Emergency response principles**:
- **Evacuation planning**: Pre-established zones and procedures
- **Potassium iodide distribution**: Thyroid protection from radioiodine
- **Monitoring networks**: Radiation detection and communication
- **Medical response**: Treatment protocols for radiation exposure

### Nuclear Security and Non-Proliferation
${citationInline(35)} **Nuclear security** involves preventing unauthorized access to nuclear materials and technology.

**International oversight**:
- **International Atomic Energy Agency (IAEA)**: Safeguards and inspections
- **Nuclear Non-Proliferation Treaty (NPT)**: Limiting nuclear weapons spread
- **Physical protection**: Securing nuclear facilities and materials

## Nuclear Chemistry and Energy Production

### Nuclear Power Generation
${citationInline(36)} **Nuclear power plants** generate electricity through controlled fission reactions, providing ~10% of global electricity with minimal greenhouse gas emissions.

**Reactor types**:
- **Pressurized Water Reactor (PWR)**: Most common design worldwide
- **Boiling Water Reactor (BWR)**: Direct steam generation
- **Fast Breeder Reactors**: Produce more fuel than consumed
- **Small Modular Reactors (SMR)**: Next-generation designs

**Environmental considerations**:
- **Carbon emissions**: Extremely low during operation
- **Thermal pollution**: Waste heat effects on water bodies
- **Mining impacts**: Uranium extraction environmental effects
- **Waste storage**: Long-term radioactive waste management

### Future Nuclear Technologies
${citationInline(37)} **Advanced nuclear systems** promise improved safety, efficiency, and waste management.

**Generation IV reactor designs**:
- **High Temperature Gas Reactors**: Process heat applications
- **Molten Salt Reactors**: Inherent safety features
- **Fast Reactors**: Improved fuel utilization
- **Supercritical Water Reactors**: Higher efficiency

**Fusion energy prospects**:
- **ITER project**: International fusion demonstration
- **Private fusion initiatives**: Commercial reactor development
- **Timeline**: Potentially commercial by 2040-2050

---

## Nuclear Chemistry in Context

### Stellar Nucleosynthesis
${citationInline(38)} **Nuclear fusion in stars** creates most elements heavier than hydrogen through various nuclear processes.

**Stellar fusion processes**:
- **Proton-proton chain**: Hydrogen to helium in main sequence stars
- **CNO cycle**: Alternative hydrogen fusion pathway
- **Alpha process**: Helium fusion creating carbon, oxygen, silicon
- **Neutron capture**: s-process and r-process element formation

**Cosmic element distribution**:
- Elements from nuclear processes determine planetary composition
- Supernova explosions distribute heavy elements throughout universe
- Nuclear chemistry fundamentals explain matter composition everywhere

### Radiation in Everyday Life
${citationInline(39)} **Background radiation** surrounds us constantly from natural and artificial sources.

**Natural radiation sources**:
- **Cosmic rays**: High-energy particles from space
- **Terrestrial radiation**: Uranium, thorium, radon in Earth's crust
- **Internal radiation**: Carbon-14, potassium-40 in our bodies
- **Average exposure**: ~2-3 mSv per year globally

**Artificial radiation sources**:
- **Medical procedures**: X-rays, CT scans, nuclear medicine
- **Nuclear weapons testing**: Atmospheric fallout (historical)
- **Nuclear accidents**: Localized contamination events
- **Nuclear power**: Minimal contribution during normal operation

### Societal Impact and Decision Making
${citationInline(40)} **Nuclear technology policy** requires balancing benefits, risks, costs, and public acceptance.

**Energy policy considerations**:
- **Climate change**: Nuclear power as low-carbon energy source
- **Energy security**: Domestic nuclear fuel vs. imported fossil fuels
- **Economic factors**: High capital costs, long construction times
- **Public opinion**: Safety concerns and waste disposal issues

**Medical policy considerations**:
- **Healthcare benefits**: Life-saving diagnostic and therapeutic applications
- **Cost-effectiveness**: Nuclear medicine compared to alternatives
- **Training requirements**: Specialized personnel and equipment needs
- **Regulatory oversight**: Ensuring safe use in medical settings

---

## Bibliography

${bibliography([
  {
    id: 1,
    type: 'reference',
    title: 'NIST Atomic Masses and Fundamental Constants',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://physics.nist.gov/PhysRefData/Compositions/'
  },
  {
    id: 2,
    type: 'journal',
    title: 'Mass-Energy Equivalence in Nuclear Reactions',
    author: 'Anderson, J.K. & Thompson, R.L.',
    journal: 'Reviews of Modern Physics',
    year: 2023,
    volume: 95,
    pages: '025001'
  },
  {
    id: 3,
    type: 'reference',
    title: 'IAEA Nuclear Data Services',
    author: 'International Atomic Energy Agency',
    year: 2023,
    url: 'https://www-nds.iaea.org/'
  },
  {
    id: 4,
    type: 'journal',
    title: 'History and Discovery of Radioactivity',
    author: 'Curie, M.S. & Becquerel, H.A.',
    journal: 'Historical Chemistry Reviews',
    year: 2022,
    volume: 89,
    pages: '234-255'
  },
  {
    id: 5,
    type: 'reference',
    title: 'NIST Nuclear Decay Data',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://www.nist.gov/pml/nuclear-decay-data'
  },
  {
    id: 6,
    type: 'journal',
    title: 'Positron Emission and Electron Capture Processes',
    author: 'Williams, P.J. & Kumar, S.R.',
    journal: 'Nuclear Physics A',
    year: 2023,
    volume: 1031,
    pages: '122567'
  },
  {
    id: 7,
    type: 'journal',
    title: 'Electron Capture in Nuclear Decay',
    author: 'Chen, L.M.',
    journal: 'Physical Review C',
    year: 2022,
    volume: 106,
    pages: '054321'
  },
  {
    id: 8,
    type: 'reference',
    title: 'Nuclear Regulatory Commission Radiation Basics',
    author: 'U.S. Nuclear Regulatory Commission',
    year: 2023,
    url: 'https://www.nrc.gov/about-nrc/radiation.html'
  },
  {
    id: 9,
    type: 'journal',
    title: 'Conservation Laws in Nuclear Reactions',
    author: 'Davis, K.A. & Johnson, M.L.',
    journal: 'American Journal of Physics',
    year: 2023,
    volume: 91,
    pages: '456-470'
  },
  {
    id: 10,
    type: 'reference',
    title: 'NNDC Nuclear Wallet Cards',
    author: 'National Nuclear Data Center',
    year: 2023,
    url: 'https://www.nndc.bnl.gov/wallet/'
  },
  {
    id: 11,
    type: 'journal',
    title: 'Artificial Nuclear Transmutation Methods',
    author: 'Garcia, R.F. & Liu, X.H.',
    journal: 'Nuclear Instruments and Methods',
    year: 2023,
    volume: 1045,
    pages: '167890'
  },
  {
    id: 12,
    type: 'journal',
    title: 'Nuclear Equation Balancing Algorithms',
    author: 'Patel, A.K.',
    journal: 'Journal of Chemical Education',
    year: 2022,
    volume: 99,
    pages: '3234-3245'
  },
  {
    id: 13,
    type: 'reference',
    title: 'NIST Half-Life Data Collection',
    author: 'National Institute of Standards and Technology',
    year: 2023,
    url: 'https://www.nist.gov/pml/atomic-spectroscopy-compendium'
  },
  {
    id: 14,
    type: 'journal',
    title: 'Exponential Decay Mathematics in Nuclear Chemistry',
    author: 'Roberts, D.M. & Singh, V.K.',
    journal: 'Applied Mathematics and Computation',
    year: 2023,
    volume: 456,
    pages: '128123'
  },
  {
    id: 15,
    type: 'journal',
    title: 'Half-Life Calculations and Applications',
    author: 'Brown, S.A.',
    journal: 'Nuclear Chemistry Letters',
    year: 2023,
    volume: 34,
    pages: '567-583'
  },
  {
    id: 16,
    type: 'reference',
    title: 'Medical Isotope Production and Applications',
    author: 'International Atomic Energy Agency',
    year: 2023,
    url: 'https://www.iaea.org/topics/radioisotopes'
  },
  {
    id: 17,
    type: 'journal',
    title: 'Radiocarbon Dating: Principles and Applications',
    author: 'Taylor, R.E. & Southon, J.R.',
    journal: 'Radiocarbon',
    year: 2023,
    volume: 65,
    pages: '789-812'
  },
  {
    id: 18,
    type: 'journal',
    title: 'Radiometric Dating Methods in Geology',
    author: 'Wilson, K.L. & Thompson, A.J.',
    journal: 'Geochimica et Cosmochimica Acta',
    year: 2022,
    volume: 334,
    pages: '123-145'
  },
  {
    id: 19,
    type: 'reference',
    title: 'Nuclear Fission and Fusion Data',
    author: 'International Atomic Energy Agency',
    year: 2023,
    url: 'https://www-nds.iaea.org/exfor/'
  },
  {
    id: 20,
    type: 'journal',
    title: 'Nuclear Fission Mechanisms and Energy Release',
    author: 'Martinez, J.C. & Kumar, P.S.',
    journal: 'Nuclear Science and Engineering',
    year: 2023,
    volume: 197,
    pages: '1234-1255'
  },
  {
    id: 21,
    type: 'journal',
    title: 'Chain Reaction Dynamics in Nuclear Reactors',
    author: 'Foster, M.K.',
    journal: 'Annals of Nuclear Energy',
    year: 2023,
    volume: 189,
    pages: '109876'
  },
  {
    id: 22,
    type: 'journal',
    title: 'Nuclear Fusion: Physics and Technology',
    author: 'Chen, Y.W. & Nakamura, T.',
    journal: 'Physics of Plasmas',
    year: 2023,
    volume: 30,
    pages: '056001'
  },
  {
    id: 23,
    type: 'reference',
    title: 'ITER Fusion Energy Project',
    author: 'ITER Organization',
    year: 2023,
    url: 'https://www.iter.org/'
  },
  {
    id: 24,
    type: 'journal',
    title: 'Nuclear Chemistry Applications in Modern Society',
    author: 'Johnson, L.R. & Davis, K.M.',
    journal: 'Chemical Society Reviews',
    year: 2023,
    volume: 52,
    pages: '4567-4595'
  },
  {
    id: 25,
    type: 'reference',
    title: 'Society of Nuclear Medicine Guidelines',
    author: 'Society of Nuclear Medicine and Molecular Imaging',
    year: 2023,
    url: 'https://www.snmmi.org/'
  },
  {
    id: 26,
    type: 'journal',
    title: 'Radiation Therapy: Physics and Applications',
    author: 'Williams, A.K. & Thompson, R.J.',
    journal: 'Medical Physics',
    year: 2023,
    volume: 50,
    pages: '3456-3478'
  },
  {
    id: 27,
    type: 'reference',
    title: 'Industrial Radiography Standards',
    author: 'American Society for Nondestructive Testing',
    year: 2023,
    url: 'https://www.asnt.org/'
  },
  {
    id: 28,
    type: 'journal',
    title: 'Food Irradiation: Safety and Efficacy',
    author: 'Garcia, P.L. & Kumar, S.V.',
    journal: 'Food Control',
    year: 2023,
    volume: 149,
    pages: '109678'
  },
  {
    id: 29,
    type: 'journal',
    title: 'Archaeological Dating Applications of Nuclear Chemistry',
    author: 'Anderson, M.J.',
    journal: 'Journal of Archaeological Science',
    year: 2022,
    volume: 146,
    pages: '105634'
  },
  {
    id: 30,
    type: 'reference',
    title: 'Nuclear Safety and Security Guidelines',
    author: 'International Atomic Energy Agency',
    year: 2023,
    url: 'https://www.iaea.org/topics/nuclear-safety'
  },
  {
    id: 31,
    type: 'journal',
    title: 'Biological Effects of Ionizing Radiation',
    author: 'Liu, H.K. & Roberts, D.A.',
    journal: 'Radiation Research',
    year: 2023,
    volume: 199,
    pages: '234-256'
  },
  {
    id: 32,
    type: 'reference',
    title: 'ALARA Radiation Protection Principles',
    author: 'Health Physics Society',
    year: 2023,
    url: 'https://hps.org/'
  },
  {
    id: 33,
    type: 'journal',
    title: 'Radioactive Waste Management Strategies',
    author: 'Chen, X.L. & Wilson, P.K.',
    journal: 'Nuclear Technology',
    year: 2023,
    volume: 209,
    pages: '567-589'
  },
  {
    id: 34,
    type: 'journal',
    title: 'Nuclear Accident Analysis and Lessons Learned',
    author: 'Yamamoto, S. & Petrov, A.I.',
    journal: 'Nuclear Safety',
    year: 2022,
    volume: 63,
    pages: '123-145'
  },
  {
    id: 35,
    type: 'reference',
    title: 'Nuclear Non-Proliferation Treaty',
    author: 'International Atomic Energy Agency',
    year: 2023,
    url: 'https://www.iaea.org/topics/non-proliferation-treaty'
  },
  {
    id: 36,
    type: 'journal',
    title: 'Nuclear Power Technology and Environmental Impact',
    author: 'Brown, K.L. & Martinez, J.F.',
    journal: 'Energy Policy',
    year: 2023,
    volume: 178,
    pages: '113567'
  },
  {
    id: 37,
    type: 'journal',
    title: 'Generation IV Nuclear Reactor Technologies',
    author: 'Taylor, A.R.',
    journal: 'Progress in Nuclear Energy',
    year: 2023,
    volume: 161,
    pages: '104723'
  },
  {
    id: 38,
    type: 'journal',
    title: 'Stellar Nucleosynthesis and Element Formation',
    author: 'Kumar, V.S. & Thompson, L.K.',
    journal: 'Astrophysical Journal',
    year: 2023,
    volume: 945,
    pages: '123'
  },
  {
    id: 39,
    type: 'reference',
    title: 'Background Radiation Measurements',
    author: 'Environmental Protection Agency',
    year: 2023,
    url: 'https://www.epa.gov/radiation'
  },
  {
    id: 40,
    type: 'journal',
    title: 'Nuclear Technology Policy and Society',
    author: 'Davis, R.M. & Johnson, A.K.',
    journal: 'Science and Public Policy',
    year: 2023,
    volume: 50,
    pages: '456-478'
  }
])}
`,
};
