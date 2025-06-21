import { Lesson } from '../../../types';

export const c6l1Data: Lesson = {
  id: 'C6L1',
  unit: 6,
  title: 'Gases & Kinetic Molecular Theory',
  objectives: [
    'Describe the general physical properties of gases (expansion, compressibility, low density, fluidity, diffusion/effusion).',
    'State the five main postulates of the Kinetic Molecular Theory (KMT) of ideal gases.',
    'Relate the postulates of KMT to the observed properties of gases.',
    'Define pressure, identify common units of pressure (atm, kPa, mmHg, torr), and understand how pressure is measured.',
    'Explain the relationship between Kelvin temperature and the average kinetic energy of gas particles.',
  ],
  labMinutes: 40,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_en.html',
      title: 'Gas Properties Simulation (PhET)',
      description:
        'Explore how gas properties like pressure, volume, and temperature are related by observing particle motion. Investigate the effect of adding/removing heat, changing volume, and adding more particles.',
    },
    {
      type: 'custom',
      title: 'KMT Postulates Explorer (Conceptual)',
      description: 'Visually explore the key assumptions of the Kinetic Molecular Theory.',
      placeholderText: `**Learning Goal:** To understand the fundamental postulates of KMT and how they describe ideal gas behavior.\n**Intended Functionality:**
1.  User sees a list of the 5 KMT postulates.
2.  Clicking on a postulate reveals a concise explanation and a simple animation or SVG diagram illustrating that specific concept.
    *   *Negligible Volume:* Shows tiny particles in a large container.
    *   *Constant Motion:* Shows particles moving randomly and rapidly.
    *   *Elastic Collisions:* Shows particles colliding with each other and walls with no loss of speed.
    *   *No Intermolecular Forces:* Shows particles moving past each other without attracting or repelling.
    *   *KE ∝ Temperature:* Shows particles speeding up as temperature increases.
_An interactive module would implement these visualizations._`,
    },
  ],
  narrative: `**Introduction to Gases**
Gases are one of the fundamental states of matter. Unlike solids and liquids, gases have unique physical properties:
*   **Expansion:** Gases expand to fill any container they are in. They have no definite shape or volume.
*   **Fluidity:** Gas particles can easily flow past one another.
*   **Low Density:** Gases are much less dense than liquids or solids because particles are far apart.
*   **Compressibility:** The volume of a gas can be greatly decreased by applying pressure because of the large spaces between particles.
*   **Diffusion and Effusion:**
    *   **Diffusion:** The spontaneous mixing of particles of two or more substances because of their random motion (e.g., the smell of perfume spreading across a room).
    *   **Effusion:** The process by which gas particles pass through a tiny opening (e.g., air slowly escaping from a balloon).

<svg width="400" height="180" xmlns="http://www.w3.org/2000/svg" aria-labelledby="gas-properties-title-c6l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="gas-properties-title-c6l1">Illustration of Gas Properties: Expansion and Compressibility.</title>
  <style>
    .gas-particle-c6l1 { fill: var(--color-accent); animation: move-c6l1 3s linear infinite alternate; }
    @keyframes move-c6l1 { 
      0% { transform: translate(0,0); } 
      25% { transform: translate(5px, -3px); }
      50% { transform: translate(-2px, 4px); }
      75% { transform: translate(3px, 2px); }
      100% { transform: translate(-4px, -5px); }
    }
  </style>
  <!-- Expansion -->
  <rect x="20" y="30" width="100" height="100" rx="5" stroke="var(--color-border)" fill="none"/>
  <text x="70" y="20" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)" class="font-semibold">Expansion (Fills Container)</text>
  <circle cx="40" cy="50" r="3" class="gas-particle-c6l1"/> <circle cx="70" cy="60" r="3" class="gas-particle-c6l1" style="animation-delay: -0.5s;"/>
  <circle cx="50" cy="90" r="3" class="gas-particle-c6l1" style="animation-delay: -1s;"/> <circle cx="90" cy="110" r="3" class="gas-particle-c6l1" style="animation-delay: -1.5s;"/>
  <circle cx="60" cy="120" r="3" class="gas-particle-c6l1" style="animation-delay: -2s;"/> <circle cx="100" cy="40" r="3" class="gas-particle-c6l1" style="animation-delay: -2.5s;"/>

  <!-- Compressibility -->
  <rect x="200" y="30" width="100" height="100" rx="5" stroke="var(--color-border)" fill="none"/>
  <rect x="200" y="30" width="100" height="20" fill="var(--color-secondary)" class="piston-c6l1"/>
  <line x1="245" y1="30" x2="245" y2="10" stroke="var(--color-border)" stroke-width="2"/>
  <line x1="255" y1="30" x2="255" y2="10" stroke="var(--color-border)" stroke-width="2"/>
  <text x="250" y="20" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)" class="font-semibold">Compressibility</text>
  <text x="225" y="40" font-size="0.7em" fill="var(--color-text-light)">Piston</text>
  <g transform="translate(0, 20)"> <!-- Gas particles under piston -->
    <circle cx="220" cy="60" r="3" class="gas-particle-c6l1"/> <circle cx="250" cy="70" r="3" class="gas-particle-c6l1" style="animation-delay: -0.5s;"/>
    <circle cx="230" cy="100" r="3" class="gas-particle-c6l1" style="animation-delay: -1s;"/> <circle cx="270" cy="120" r="3" class="gas-particle-c6l1" style="animation-delay: -1.5s;"/>
    <circle cx="240" cy="110" r="3" class="gas-particle-c6l1" style="animation-delay: -2s;"/> <circle cx="280" cy="50" r="3" class="gas-particle-c6l1" style="animation-delay: -2.5s;"/>
  </g>
  <text x="200" y="155" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">Particles can be pushed closer.</text>
</svg>

**Kinetic Molecular Theory (KMT) of Ideal Gases**
The KMT provides a model to explain the behavior of gases. It describes an **ideal gas**, which is a hypothetical gas that perfectly fits all the assumptions of the theory. Real gases approximate ideal behavior under certain conditions.
The main postulates of KMT are:
1.  **Particle Size and Spacing:** Gases consist of tiny particles (atoms or molecules) that are very far apart relative to their own size. The actual volume of the gas particles themselves is considered negligible compared to the volume of the container.
2.  **Constant, Random Motion:** Gas particles are in continuous, rapid, random, straight-line motion. They possess kinetic energy (energy of motion).
3.  **Elastic Collisions:** Collisions between gas particles and between particles and the walls of their container are perfectly **elastic**. This means that kinetic energy is transferred between colliding particles, but the total kinetic energy of the system remains constant (no net loss of energy due to collisions).
4.  **No Intermolecular Forces:** There are no significant attractive or repulsive forces between ideal gas particles. They move independently of each other.
5.  **Temperature and Kinetic Energy:** The **average kinetic energy** of gas particles is directly proportional to the **Kelvin temperature** of the gas.
    *   Mathematically: KE<sub>avg</sub> ∝ T (where T is in Kelvin).
    *   This implies that at a given temperature, all gases, regardless of their identity, have the same average kinetic energy.
    *   Since KE = ½mv² (where m is mass and v is velocity), lighter gas particles (smaller m) must move, on average, faster than heavier gas particles (larger m) at the same temperature to have the same average KE.

**Explaining Gas Properties with KMT:**
*   **Expansion & Fluidity:** Particles are in constant motion and move independently, allowing them to fill any volume and flow.
*   **Low Density:** Particles are far apart (negligible volume of particles themselves).
*   **Compressibility:** Large spaces between particles allow them to be forced closer together.
*   **Diffusion & Effusion:** Constant random motion causes particles to spread out and mix, or pass through small openings.
*   **Pressure:** Caused by the collisions of gas particles with the walls of the container. More collisions or more forceful collisions lead to higher pressure.

**Pressure**
Pressure (P) is defined as the force (F) exerted per unit area (A): **P = F/A**.
Gas pressure results from the countless collisions of gas particles with the surfaces they encounter.

**Units of Pressure:**
*   **Atmosphere (atm):** Standard atmospheric pressure at sea level is 1 atm.
*   **Kilopascal (kPa):** The SI unit of pressure. 1 atm = 101.325 kPa.
*   **Millimeters of Mercury (mmHg) or Torr:** Based on the height of a mercury column in a barometer. 1 atm = 760 mmHg = 760 torr.
*   Pounds per Square Inch (psi): Often used in engineering. 1 atm ≈ 14.7 psi.

**Measuring Pressure:**
*   **Barometer:** Used to measure atmospheric pressure. Invented by Evangelista Torricelli, it typically consists of a mercury-filled tube inverted in a dish of mercury. The height of the mercury column is balanced by the atmospheric pressure pushing down on the mercury in the dish.
<svg width="150" height="200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="barometer-title-c6l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="barometer-title-c6l1">Simplified diagram of a mercury barometer.</title>
  <rect x="20" y="150" width="110" height="30" fill="var(--color-secondary)" fill-opacity="0.3" rx="3"/> <!-- Mercury dish -->
  <rect x="60" y="20" width="30" height="140" fill="var(--color-secondary)" fill-opacity="0.1" stroke="var(--color-border)"/> <!-- Tube -->
  <rect x="60" y="40" width="30" height="110" fill="var(--color-secondary)" fill-opacity="0.5"/> <!-- Mercury column -->
  <text x="75" y="35" text-anchor="middle" font-size="0.7em" fill="var(--color-text-light)">Vacuum</text>
  <line x1="75" y1="40" x2="75" y2="150" stroke="var(--color-text-muted)" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="95" y="100" font-size="0.8em" fill="var(--color-text-muted)">h = 760 mmHg</text>
  <text x="10" y="140" font-size="0.8em" fill="var(--color-accent)">Atmospheric</text>
  <text x="10" y="150" font-size="0.8em" fill="var(--color-accent)">Pressure ↓</text>
  <text x="120" y="140" font-size="0.8em" fill="var(--color-accent)">Atmospheric</text>
  <text x="120" y="150" font-size="0.8em" fill="var(--color-accent)">Pressure ↓</text>
  <text x="75" y="190" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Barometer</text>
</svg>
*   **Manometer:** Used to measure the pressure of a confined gas. It compares the gas pressure to atmospheric pressure or a known pressure.

**Temperature and Kinetic Energy**
Temperature is a measure of the average kinetic energy of the particles in a substance.
*   The **Kelvin (K)** temperature scale is used in gas law calculations because it is an absolute scale, where 0 K (absolute zero) theoretically represents the point of zero kinetic energy.
*   Conversion: K = °C + 273.15 (often rounded to K = °C + 273).
*   **Key Relationship:** An increase in Kelvin temperature means an increase in the average kinetic energy of gas particles. This means particles move faster and collide more frequently and more forcefully.

**Ideal Gas vs. Real Gas**
The KMT describes an **ideal gas**. Real gases deviate from ideal behavior because:
1.  **Real gas particles do have some volume.** This becomes significant at high pressures when particles are close together.
2.  **Real gas particles do experience intermolecular attractive forces.** These forces become significant at low temperatures when particles move slowly and are close enough to interact.

**Conditions for Ideal Gas Behavior:**
Real gases behave most like ideal gases under conditions of:
*   **Low Pressure:** Particles are far apart, minimizing their individual volumes and intermolecular forces.
*   **High Temperature:** Particles have high kinetic energy, overcoming intermolecular forces.
Small, nonpolar gas molecules (like H₂, He) tend to behave more ideally than large, polar molecules.

**Safety Note:** Understanding gas behavior is crucial for safety. Compressed gases are stored under high pressure and must be handled with care. Rapid expansion or heating of gases can lead to explosions. Many gases are flammable, toxic, or asphyxiants.`,
  practice: [
    { text: '1. List the five main postulates of the Kinetic Molecular Theory of ideal gases.' },
    {
      text: '2. How does KMT explain why gases are easily compressible but liquids and solids are not?',
    },
    { text: '3. Convert 1.50 atm to: a) kPa b) mmHg' },
    {
      text: '4. If two different gases are at the same temperature, which gas particles will have a higher average speed: the lighter ones or the heavier ones? Explain using KMT.',
    },
    {
      text: '5. Under what conditions of temperature and pressure do real gases deviate most from ideal gas behavior? Explain why.',
    },
  ],
  answers: [
    {
      text: '1. **Five Postulates of KMT:**\n    a) Gases consist of tiny particles far apart; their volume is negligible.\n    b) Gas particles are in constant, rapid, random motion.\n    c) Collisions are perfectly elastic (no net loss of KE).\n    d) There are no significant attractive or repulsive forces between gas particles.\n    e) The average kinetic energy of gas particles is directly proportional to the Kelvin temperature.',
    },
    {
      text: '2. KMT states that gas particles are very far apart relative to their size (Postulate 1). This large amount of empty space allows gas particles to be easily pushed closer together, making gases compressible. In liquids and solids, particles are much closer together with less empty space, so they are not easily compressible.',
    },
    {
      text: '3. **Pressure Conversions (1 atm = 101.325 kPa = 760 mmHg):**\n    a) 1.50 atm × (101.325 kPa / 1 atm) = **152 kPa** (to 3 sig figs).\n    b) 1.50 atm × (760 mmHg / 1 atm) = **1140 mmHg**.',
    },
    {
      text: '4. At the same temperature, all gases have the same average kinetic energy (KE<sub>avg</sub>, Postulate 5). Since KE = ½mv², for KE<sub>avg</sub> to be the same, particles with smaller mass (m) must have a higher average speed (v). Therefore, **lighter gas particles will have a higher average speed**.',
    },
    {
      text: '5. Real gases deviate most from ideal behavior under conditions of **high pressure** and **low temperature**.\n    *   **High Pressure:** Particles are forced closer together, so their individual volume becomes significant compared to the container volume (violating KMT Postulate 1). Intermolecular forces also become more prominent.\n    *   **Low Temperature:** Particles have lower kinetic energy and move slower. This allows intermolecular attractive forces (which KMT assumes are negligible, Postulate 4) to become significant and affect particle behavior (e.g., causing condensation).',
    },
  ],
};
