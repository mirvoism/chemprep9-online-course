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
  ],
  narrative: `## **Nuclear Chemistry: Radioactivity, Nuclear Reactions, and Applications**

${citationInline('nuclear-chemistry-overview', 1)} Nuclear chemistry focuses on reactions involving the atomic nucleus, where changes in nuclear composition release enormous amounts of energy compared to ordinary chemical reactions. ${citationInline('mass-energy-conversion', 2)} The energy released in nuclear processes can be millions of times greater than chemical reactions due to the conversion of small amounts of mass into energy according to Einstein's famous equation E=mc².

### **12.1 Natural Radioactivity and Nuclear Decay**

${citationInline('radioactivity-definition', 3)} **Radioactivity** is the spontaneous emission of particles or electromagnetic radiation from unstable atomic nuclei as they transform to achieve greater nuclear stability.

**Discovery and Nature of Radioactivity**
${citationInline('radioactivity-discovery', 4)} Henri Becquerel discovered natural radioactivity in 1896, and Marie and Pierre Curie subsequently identified and isolated radioactive elements radium and polonium. Their pioneering research revealed that radioactivity is an intrinsic nuclear property independent of chemical bonding or external conditions.

**Fundamental characteristics of radioactive decay:**
- **Spontaneous process**: Occurs without external influence
- **Random individual events**: Cannot predict when specific nucleus will decay
- **Statistically predictable**: Large samples follow exponential decay law
- **Nuclear transformation**: Parent nucleus becomes different daughter nucleus
- **Energy release**: Accompanied by emission of particles and/or electromagnetic radiation

**Types of Nuclear Radiation**

${citationInline('radiation-types', 5)} Three primary types of radiation were identified by Ernest Rutherford through deflection experiments using electric and magnetic fields.

| **Radiation Type** | **Symbol** | **Composition** | **Mass (amu)** | **Charge** | **Penetrating Power** | **Range in Air** |
|-------------------|------------|-----------------|----------------|------------|---------------------|------------------|
| **Alpha (α)** | ⁴₂He²⁺ | Helium nucleus | 4.002602 | +2 | Very low | 2-10 cm |
| **Beta minus (β⁻)** | ⁰₋₁e⁻ | High-energy electron | 0.000549 | -1 | Moderate | 1-3 meters |
| **Gamma (γ)** | γ | Electromagnetic radiation | 0 | 0 | Very high | Hundreds of meters |

**Additional Nuclear Decay Modes**
${citationInline('positron-emission', 6)} **Beta plus decay (positron emission)**: A proton converts to a neutron with emission of a positron (⁰₊₁e⁺), the antimatter counterpart of an electron.

**Nuclear equation**: ¹¹₆C → ¹¹₅B + ⁰₊₁e⁺ + νₑ

${citationInline('electron-capture', 7)} **Electron capture**: An inner-shell electron is captured by a proton in the nucleus, converting it to a neutron.

**Nuclear equation**: ⁷₄Be + ⁰₋₁e⁻ → ⁷₃Li + νₑ

**Characteristics of different decay modes:**
- **Alpha decay**: Reduces both mass number and atomic number by 2
- **Beta minus decay**: Increases atomic number by 1, mass number unchanged
- **Beta plus decay**: Decreases atomic number by 1, mass number unchanged
- **Electron capture**: Decreases atomic number by 1, mass number unchanged
- **Gamma emission**: Often accompanies other decay modes, no change in mass or atomic number

**Penetrating Power and Biological Effects**
${citationInline('radiation-penetration', 8)} The penetrating ability of radiation determines its potential biological impact and required shielding materials.

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

### **12.2 Nuclear Equations and Conservation Laws**

${citationInline('nuclear-equations', 9)} **Nuclear equations** represent nuclear transformations using conservation laws that govern all nuclear reactions and decay processes.

**Conservation Laws in Nuclear Reactions**
**Two fundamental conservation laws must be satisfied:**

1. **Conservation of mass number (A)**: Sum of mass numbers before reaction equals sum after reaction
2. **Conservation of atomic number (Z)**: Sum of atomic numbers before reaction equals sum after reaction

**Balancing Nuclear Equations**

${citationInline('alpha-decay-example', 10)} **Alpha decay example**: Uranium-238 undergoes alpha decay

²³⁸₉₂U → ⁴₂He + ²³⁴₉₀Th

**Verification:**
- Mass numbers: 238 = 4 + 234 ✓
- Atomic numbers: 92 = 2 + 90 ✓

**Beta minus decay example**: Carbon-14 undergoes beta decay

¹⁴₆C → ⁰₋₁e + ¹⁴₇N

**Verification:**
- Mass numbers: 14 = 0 + 14 ✓
- Atomic numbers: 6 = (-1) + 7 ✓

**Gamma emission example**: Excited technetium-99m releases gamma ray

⁹⁹ᵐ₄₃Tc → ⁹⁹₄₃Tc + γ

**Verification:**
- Mass numbers: 99 = 99 + 0 ✓
- Atomic numbers: 43 = 43 + 0 ✓

**Complex Nuclear Reactions**
${citationInline('artificial-transmutation', 11)} **Artificial transmutation** involves bombarding stable nuclei with high-energy particles to induce nuclear transformations.

**Neutron bombardment example**:
²³⁵₉₂U + ¹₀n → ¹⁴⁰₅₆Ba + ⁹³₃₆Kr + 3¹₀n

**Charged particle bombardment**:
¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H

${citationInline('equation-balancing-strategy', 12)} **Nuclear equation balancing strategy**:
1. Identify known particles and their mass/atomic numbers
2. Set up equation with unknown particle represented as ᴬᵩX
3. Apply conservation laws to solve for A and Z
4. Identify element X using periodic table
5. Verify conservation laws are satisfied

### **12.3 Half-Life and Radioactive Decay Kinetics**

${citationInline('half-life-definition', 13)} **Half-life (t₁/₂)** is the time required for exactly half of the radioactive nuclei in a sample to undergo decay, representing a fundamental characteristic of each radioactive isotope.

**Mathematical Description of Radioactive Decay**
${citationInline('decay-kinetics', 14)} Radioactive decay follows first-order kinetics described by the exponential decay equation:

**N(t) = N₀e^(-λt)**

Where:
- N(t) = number of radioactive nuclei at time t
- N₀ = initial number of radioactive nuclei
- λ = decay constant (characteristic of isotope)
- t = elapsed time

**Relationship between half-life and decay constant**:
t₁/₂ = ln(2)/λ = 0.693/λ

**Half-Life Calculations**
${citationInline('half-life-calculations', 15)} **Basic half-life calculation method**:

After n half-lives: **N = N₀ × (1/2)ⁿ**

**Example problem**: Iodine-131 has a half-life of 8.02 days. If a sample initially contains 64.0 mg of ¹³¹I, how much remains after 24.1 days?

**Solution**:
1. Number of half-lives: n = 24.1 days ÷ 8.02 days = 3.00 half-lives
2. Remaining amount: N = 64.0 mg × (1/2)³ = 64.0 mg × 1/8 = 8.0 mg

**Applications of Half-Life Concepts**
${citationInline('medical-isotopes', 16)} **Medical applications**: Selection of radioisotopes for medical procedures depends on appropriate half-life matching procedure duration.

**Diagnostic imaging isotopes**:
- **Technetium-99m**: t₁/₂ = 6.0 hours (ideal for imaging procedures)
- **Fluorine-18**: t₁/₂ = 109.8 minutes (PET scan applications)
- **Iodine-123**: t₁/₂ = 13.2 hours (thyroid imaging)

**Therapeutic isotopes**:
- **Iodine-131**: t₁/₂ = 8.02 days (thyroid cancer treatment)
- **Phosphorus-32**: t₁/₂ = 14.3 days (blood disorder treatment)
- **Strontium-90**: t₁/₂ = 28.8 years (bone cancer treatment)

**Radioactive Dating Techniques**
${citationInline('carbon-14-dating', 17)} **Carbon-14 dating** utilizes the predictable decay of ¹⁴C (t₁/₂ = 5,730 years) to determine the age of organic materials up to ~50,000 years old.

**Dating principle**:
- Living organisms maintain constant ¹⁴C/¹²C ratio through carbon dioxide exchange
- After death, ¹⁴C decays without replacement
- Measured ¹⁴C activity compared to living standards determines age

**Age calculation equation**:
t = (t₁/₂ / ln(2)) × ln(A₀/A)

Where A₀ is activity of living sample and A is measured activity.

${citationInline('radiometric-dating', 18)} **Other radiometric dating methods**:
- **Uranium-lead dating**: U-238 (t₁/₂ = 4.47 × 10⁹ years) for rocks billions of years old
- **Potassium-argon dating**: K-40 (t₁/₂ = 1.25 × 10⁹ years) for volcanic rocks
- **Rubidium-strontium dating**: Rb-87 (t₁/₂ = 4.75 × 10¹⁰ years) for very ancient rocks

### **12.4 Nuclear Fission and Fusion Processes**

${citationInline('fission-fusion-overview', 19)} **Nuclear fission** and **fusion** represent two fundamentally different nuclear processes that release enormous amounts of energy through mass-energy conversion.

**Nuclear Fission**
${citationInline('nuclear-fission', 20)} **Nuclear fission** involves the splitting of heavy atomic nuclei into lighter fragments when struck by neutrons, releasing multiple neutrons and enormous energy.

**Uranium-235 fission example**:
²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3¹₀n + energy

**Fission characteristics**:
- **Mass defect**: Small amount of mass converts to energy (E = mc²)
- **Chain reaction potential**: Released neutrons can induce additional fissions
- **Critical mass**: Minimum mass required to sustain chain reaction
- **Energy release**: ~200 MeV per fission event

**Chain Reaction Dynamics**
${citationInline('chain-reaction-control', 21)} **Chain reaction control** is essential for practical applications:

**Multiplication factor (k)**:
- k < 1: Subcritical (reaction dies out)
- k = 1: Critical (steady-state reaction)
- k > 1: Supercritical (exponential increase)

**Nuclear reactor control**:
- **Control rods**: Absorb neutrons to control reaction rate
- **Moderator**: Slows neutrons to optimize fission probability
- **Coolant**: Removes heat and may serve as moderator
- **Containment**: Multiple safety barriers prevent radiation release

**Nuclear Fusion**
${citationInline('nuclear-fusion', 22)} **Nuclear fusion** involves combining light nuclei at extremely high temperatures and pressures to form heavier nuclei with tremendous energy release.

**Hydrogen fusion example (stellar nucleosynthesis)**:
⁴¹₁H → ⁴₂He + 2⁰₊₁e⁺ + 2νₑ + energy

**Deuterium-tritium fusion (practical fusion)**:
²₁H + ³₁H → ⁴₂He + ¹₀n + 17.6 MeV

**Comparison of Fission and Fusion**

| **Property** | **Nuclear Fission** | **Nuclear Fusion** |
|-------------|--------------------|--------------------|
| **Fuel** | Heavy nuclei (U-235, Pu-239) | Light nuclei (H isotopes) |
| **Products** | Medium mass fragments + neutrons | Heavier nucleus + particles |
| **Energy per nucleon** | ~1 MeV | ~3.5 MeV |
| **Conditions** | Room temperature possible | Extreme temperature/pressure |
| **Waste** | Long-lived radioactive products | Short-lived or stable products |
| **Control** | Controllable with current technology | Extremely challenging |

**Fusion Energy Challenges**
${citationInline('fusion-challenges', 23)} **Achieving controlled fusion** requires overcoming significant technological challenges:

**Required conditions**:
- **Temperature**: 100-200 million Kelvin
- **Pressure**: Extremely high confinement
- **Confinement time**: Sufficient for energy-producing reactions

**Confinement approaches**:
- **Magnetic confinement**: Tokamak and stellarator designs
- **Inertial confinement**: Laser-driven implosion
- **Alternative concepts**: Field-reversed configurations, levitating dipoles

### **12.5 Applications and Benefits of Nuclear Chemistry**

${citationInline('nuclear-applications', 24)} Nuclear chemistry provides invaluable applications across medicine, industry, research, and energy production while requiring careful management of associated risks.

**Medical Applications**
${citationInline('nuclear-medicine', 25)} **Nuclear medicine** utilizes radioisotopes for both diagnostic imaging and therapeutic treatment of various medical conditions.

**Diagnostic imaging techniques**:

**Single Photon Emission Computed Tomography (SPECT)**:
- **Technetium-99m**: Most widely used medical radioisotope
- Applications: Heart, brain, bone, and organ imaging
- Advantages: Ideal 6-hour half-life, pure gamma emission

**Positron Emission Tomography (PET)**:
- **Fluorine-18**: Most common PET isotope
- Applications: Cancer detection, brain function studies
- Principle: Positron-electron annihilation produces detectable gamma rays

**Therapeutic Applications**
${citationInline('radiation-therapy', 26)} **Radiation therapy** employs high-energy radiation to destroy cancer cells while minimizing damage to healthy tissue.

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

**Industrial Applications**
${citationInline('industrial-radiography', 27)} **Industrial radiography** uses gamma rays or X-rays to inspect materials and structures without destruction.

**Applications**:
- **Weld inspection**: Detecting flaws in critical structures
- **Pipeline monitoring**: Checking for corrosion or defects
- **Quality control**: Ensuring material integrity in manufacturing

**Tracers in industry**:
- **Flow measurement**: Tracking fluid movement in pipes
- **Leak detection**: Identifying system breaches
- **Wear analysis**: Monitoring equipment degradation

**Food Preservation and Sterilization**
${citationInline('food-irradiation', 28)} **Food irradiation** eliminates harmful bacteria, parasites, and insects while extending shelf life without significantly affecting nutritional content.

**Benefits**:
- **Pathogen elimination**: Destroys Salmonella, E. coli, other bacteria
- **Shelf life extension**: Delays spoilage and ripening
- **Pesticide alternative**: Reduces chemical treatment needs
- **International trade**: Enables quarantine-free transport

**Medical sterilization**:
- **Gamma irradiation**: Sterilizes medical devices and pharmaceuticals
- **Electron beam**: Rapid sterilization of heat-sensitive materials
- **Advantages**: No heat or chemical residues, packaging penetration

**Archaeological and Geological Dating**
${citationInline('archaeological-dating', 29)} **Radiometric dating** provides accurate age determination for archaeological artifacts and geological formations.

**Carbon-14 dating applications**:
- Archaeological artifacts (wood, bone, textiles)
- Historical dating (art authentication, manuscript verification)
- Environmental science (groundwater age, sediment dating)

**Long-term geological dating**:
- **Uranium-lead**: Oldest rocks and meteorites
- **Potassium-argon**: Volcanic rocks and ash layers
- **Rubidium-strontium**: Ancient crystalline rocks

### **12.6 Nuclear Safety and Risk Assessment**

${citationInline('nuclear-safety', 30)} Responsible use of nuclear technology requires comprehensive understanding of radiation effects, safety protocols, and risk management strategies.

**Biological Effects of Radiation**
${citationInline('radiation-biology', 31)} **Radiation interaction with biological tissue** can cause both immediate and long-term health effects depending on dose, duration, and radiation type.

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

**Radiation Protection Principles**
${citationInline('alara-principle', 32)} **ALARA principle** (As Low As Reasonably Achievable) guides radiation protection practices:

**Time**: Minimize exposure duration
**Distance**: Increase distance from radiation source (inverse square law)
**Shielding**: Use appropriate materials to absorb radiation

**Radiation units and measurements**:
- **Becquerel (Bq)**: Activity (decays per second)
- **Gray (Gy)**: Absorbed dose (energy per unit mass)
- **Sievert (Sv)**: Equivalent dose (biological effect consideration)

**Nuclear Waste Management**
${citationInline('waste-management', 33)} **Radioactive waste** requires specialized handling and disposal based on activity level and half-life characteristics.

**Waste classification**:
- **Low-level waste**: Medical gloves, lab equipment (shallow burial)
- **Intermediate-level waste**: Reactor components (engineered storage)
- **High-level waste**: Spent nuclear fuel (deep geological repository)

**Long-term storage strategies**:
- **Engineered barriers**: Multiple containment layers
- **Geological isolation**: Stable rock formations
- **Monitoring systems**: Long-term surveillance capabilities

**Nuclear Accidents and Emergency Response**
${citationInline('nuclear-accidents', 34)} **Major nuclear accidents** provide important lessons for safety improvements and emergency preparedness.

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

**Nuclear Security and Non-Proliferation**
${citationInline('nuclear-security', 35)} **Nuclear security** involves preventing unauthorized access to nuclear materials and technology.

**International oversight**:
- **International Atomic Energy Agency (IAEA)**: Safeguards and inspections
- **Nuclear Non-Proliferation Treaty (NPT)**: Limiting nuclear weapons spread
- **Physical protection**: Securing nuclear facilities and materials

### **Nuclear Chemistry and Energy Production**

**Nuclear Power Generation**
${citationInline('nuclear-power', 36)} **Nuclear power plants** generate electricity through controlled fission reactions, providing ~10% of global electricity with minimal greenhouse gas emissions.

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

**Future Nuclear Technologies**
${citationInline('future-nuclear', 37)} **Advanced nuclear systems** promise improved safety, efficiency, and waste management.

**Generation IV reactor designs**:
- **High Temperature Gas Reactors**: Process heat applications
- **Molten Salt Reactors**: Inherent safety features
- **Fast Reactors**: Improved fuel utilization
- **Supercritical Water Reactors**: Higher efficiency

**Fusion energy prospects**:
- **ITER project**: International fusion demonstration
- **Private fusion initiatives**: Commercial reactor development
- **Timeline**: Potentially commercial by 2040-2050

### **Nuclear Chemistry in Context**

**Stellar Nucleosynthesis**
${citationInline('stellar-nucleosynthesis', 38)} **Nuclear fusion in stars** creates most elements heavier than hydrogen through various nuclear processes.

**Stellar fusion processes**:
- **Proton-proton chain**: Hydrogen to helium in main sequence stars
- **CNO cycle**: Alternative hydrogen fusion pathway
- **Alpha process**: Helium fusion creating carbon, oxygen, silicon
- **Neutron capture**: s-process and r-process element formation

**Cosmic element distribution**:
- Elements from nuclear processes determine planetary composition
- Supernova explosions distribute heavy elements throughout universe
- Nuclear chemistry fundamentals explain matter composition everywhere

**Radiation in Everyday Life**
${citationInline('background-radiation', 39)} **Background radiation** surrounds us constantly from natural and artificial sources.

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

**Societal Impact and Decision Making**
${citationInline('nuclear-policy', 40)} **Nuclear technology policy** requires balancing benefits, risks, costs, and public acceptance.

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

${bibliography([
  'nuclear-chemistry-overview',
  'mass-energy-conversion',
  'radioactivity-definition',
  'radioactivity-discovery',
  'radiation-types',
  'positron-emission',
  'electron-capture',
  'radiation-penetration',
  'nuclear-equations',
  'alpha-decay-example',
  'artificial-transmutation',
  'equation-balancing-strategy',
  'half-life-definition',
  'decay-kinetics',
  'half-life-calculations',
  'medical-isotopes',
  'carbon-14-dating',
  'radiometric-dating',
  'fission-fusion-overview',
  'nuclear-fission',
  'chain-reaction-control',
  'nuclear-fusion',
  'fusion-challenges',
  'nuclear-applications',
  'nuclear-medicine',
  'radiation-therapy',
  'industrial-radiography',
  'food-irradiation',
  'archaeological-dating',
  'nuclear-safety',
  'radiation-biology',
  'alara-principle',
  'waste-management',
  'nuclear-accidents',
  'nuclear-security',
  'nuclear-power',
  'future-nuclear',
  'stellar-nucleosynthesis',
  'background-radiation',
  'nuclear-policy'
])}`,
  practice: [
    {
      text: '1. **Nuclear Equation Balancing**: Balance these nuclear equations and identify the decay type:\n    a) ²³⁸₉₂U → ⁴₂He + ?\n    b) ¹⁴₆C → ⁰₋₁e + ?\n    c) ²²₁₁Na → ⁰₊₁e + ?\n    d) ⁴⁰₁₉K + ⁰₋₁e → ?\n    e) ²³⁵₉₂U + ¹₀n → ¹⁴⁰₅₆Ba + ? + 3¹₀n',
    },
    {
      text: '2. **Half-Life Calculations**: Solve these radioactive decay problems:\n    a) A 100 mg sample of I-131 (t₁/₂ = 8.02 days) decays for 24.06 days. How much remains?\n    b) A sample contains 75% of its original C-14 (t₁/₂ = 5730 years). How old is it?\n    c) If 6.25% of an original sample remains after 60 days, what is the half-life?\n    d) How long for 90% of a Ra-226 sample (t₁/₂ = 1600 years) to decay?',
    },
    {
      text: '3. **Radiation Penetration and Safety**: \n    a) What thickness of each material stops: paper for α, aluminum for β, lead for γ?\n    b) Rank α, β, γ radiation by: penetrating power, ionizing ability, biological danger when ingested\n    c) Calculate radiation dose: Worker exposed to 0.25 mSv/hour for 8 hours. Safe?\n    d) Why is radon gas particularly dangerous in homes?',
    },
    {
      text: '4. **Nuclear Energy Calculations**: \n    a) Calculate energy released in U-235 fission (Δm = 0.186 amu)\n    b) Compare fission vs fusion energy per nucleon\n    c) Why does fusion require extreme temperatures while fission occurs at room temperature?\n    d) Explain why both very light and very heavy nuclei are unstable',
    },
    {
      text: '5. **Nuclear Applications**: \n    a) Choose appropriate isotopes for: thyroid imaging (6-hour procedure), cancer treatment (weeks), archaeological dating (50,000 years)\n    b) Explain how PET scans work using positron emission\n    c) Why is Tc-99m ideal for medical imaging?\n    d) Compare advantages/disadvantages of nuclear vs coal power',
    },
  ],
  answers: [
    {
      text: '1. **Nuclear Equation Solutions**:\n    a) ²³⁸₉₂U → ⁴₂He + **²³⁴₉₀Th** (alpha decay)\n    b) ¹⁴₆C → ⁰₋₁e + **¹⁴₇N** (beta minus decay)\n    c) ²²₁₁Na → ⁰₊₁e + **²²₁₀Ne** (beta plus decay/positron emission)\n    d) ⁴⁰₁₉K + ⁰₋₁e → **⁴⁰₁₈Ar** (electron capture)\n    e) ²³⁵₉₂U + ¹₀n → ¹⁴⁰₅₆Ba + **⁹³₃₆Kr** + 3¹₀n (fission)',
    },
    {
      text: '2. **Half-Life Calculation Solutions**:\n    a) **n = 24.06/8.02 = 3 half-lives; Remaining = 100 × (1/2)³ = 12.5 mg**\n    b) **75% = 3/4 remaining; 1 half-life elapsed; Age = 5730 years**\n    c) **6.25% = (1/2)⁴; 4 half-lives in 60 days; t₁/₂ = 15 days**\n    d) **90% decay = 10% remaining = (1/2)^3.32; Time = 3.32 × 1600 = 5,312 years**',
    },
    {
      text: '3. **Radiation Safety Answers**:\n    a) **Alpha: paper (0.1 mm); Beta: aluminum (3 mm); Gamma: lead (several cm)**\n    b) **Penetrating power: γ > β > α; Ionizing ability: α > β > γ; Biological danger when ingested: α > β > γ**\n    c) **Total dose = 0.25 × 8 = 2 mSv. Exceeds daily limit but within annual limit**\n    d) **Radon is alpha emitter that accumulates in enclosed spaces; extremely dangerous when inhaled**',
    },
    {
      text: '4. **Nuclear Energy Solutions**:\n    a) **E = mc² = (0.186 amu)(931.5 MeV/amu) = 173 MeV per fission**\n    b) **Fission: ~1 MeV/nucleon; Fusion: ~3.5 MeV/nucleon (fusion more efficient)**\n    c) **Fusion requires overcoming Coulomb repulsion between positive nuclei; fission splits naturally unstable heavy nuclei**\n    d) **Light nuclei: low binding energy per nucleon; Heavy nuclei: Coulomb repulsion overcomes strong force**',
    },
    {
      text: '5. **Nuclear Applications Solutions**:\n    a) **Thyroid imaging: Tc-99m (6 hr); Cancer treatment: I-131 (8 days); Archaeological dating: C-14 (5730 yr)**\n    b) **PET: Positron meets electron → annihilation → 2 gamma rays 180° apart → detector ring locates source**\n    c) **Tc-99m ideal: 6-hour half-life matches procedure time, pure gamma emission, no beta particles**\n    d) **Nuclear: no CO₂, reliable baseload, waste concerns; Coal: established technology, air pollution, climate impact**',
    },
  ],
};
