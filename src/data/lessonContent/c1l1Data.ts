import { Lesson } from '../../../types';

export const c1l1Data: Lesson = {
  id: 'C1L1',
  unit: 1,
  title: 'Matter Classification',
  objectives: [
    'Differentiate between pure substances (elements and compounds) and mixtures (homogeneous and heterogeneous).',
    'Identify common physical separation methods for mixtures.',
    'Classify common examples of matter.',
  ],
  labMinutes: 40,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html',
      title: 'States of Matter Basics',
      description:
        'Explore how heating or cooling atoms and molecules changes their behavior. Relate particle motion to the states of matter.',
    },
    {
      type: 'custom',
      title: 'Mixture Separation Challenge (Conceptual)',
      description:
        'A conceptual interactive where students choose appropriate separation techniques for given mixtures.',
      placeholderText:
        '**Learning Goal:** To apply knowledge of separation techniques to different types of mixtures.\n**Intended Functionality:** Users are presented with various mixtures (e.g., sand & salt, iron filings & sugar, ink). They must select the correct sequence of separation methods (e.g., dissolving, filtration, evaporation, magnetism, chromatography) from a list of options. Feedback is provided on their choices.\n_An interactive simulation would guide users through these choices._',
    },
  ],
  narrative: `**What is Matter?**
Matter is anything that has **mass** (the amount of 'stuff' in an object) and **volume** (the amount of space an object occupies). It exists in various forms, which can be broadly categorized.

**1. Pure Substances**
Pure substances have a fixed, uniform composition and distinct, unchanging properties. They cannot be separated into simpler components by physical means. There are two types of pure substances:
*   **Elements:** The simplest form of matter that cannot be broken down into simpler substances by chemical reactions. Each element is made up of only one kind of atom. Examples: Oxygen (O₂), Copper (Cu), Helium (He). The periodic table lists all known elements.
    <div class="my-4 flex flex-wrap justify-around items-center gap-4">
      <svg width="150" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Diagram of Helium atoms, representing an element." class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <circle cx="50" cy="50" r="10" fill="var(--color-accent)" /> <text x="45" y="55" font-size="10" fill="var(--color-text-light)">He</text>
        <circle cx="80" cy="40" r="10" fill="var(--color-accent)" /> <text x="75" y="45" font-size="10" fill="var(--color-text-light)">He</text>
        <circle cx="60" cy="70" r="10" fill="var(--color-accent)" /> <text x="55" y="75" font-size="10" fill="var(--color-text-light)">He</text>
        <text x="20" y="100" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Element (Helium Atoms)</text>
      </svg>
      <svg width="150" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Diagram of Oxygen molecules, representing a diatomic element." class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <circle cx="40" cy="50" r="10" fill="var(--color-primary)" /> <circle cx="60" cy="50" r="10" fill="var(--color-primary)" /> <line x1="50" y1="50" x2="40" y2="50" stroke="var(--color-text-light)" stroke-width="1.5"/> <line x1="50" y1="50" x2="60" y2="50" stroke="var(--color-text-light)" stroke-width="1.5"/>
        <circle cx="90" cy="60" r="10" fill="var(--color-primary)" /> <circle cx="110" cy="60" r="10" fill="var(--color-primary)" /> <line x1="100" y1="60" x2="90" y2="60" stroke="var(--color-text-light)" stroke-width="1.5"/> <line x1="100" y1="60" x2="110" y2="60" stroke="var(--color-text-light)" stroke-width="1.5"/>
        <text x="10" y="100" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Diatomic Element (O₂ Molecules)</text>
      </svg>
    </div>
*   **Compounds:** Formed when two or more different elements are chemically bonded together in a fixed ratio. Compounds have properties that are distinctly different from their constituent elements. Examples: Water (H₂O - formed from hydrogen and oxygen), Sodium Chloride (NaCl - table salt, formed from sodium and chlorine), Carbon Dioxide (CO₂).
    <div class="my-4 flex justify-center">
      <svg width="180" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Diagram of Water molecules, representing a compound." class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <symbol id="waterMoleculeSymbolC1L1b" viewBox="-15 -15 30 30">
          <circle cx="0" cy="0" r="8" fill="var(--color-danger)" /> <text x="-4" y="3" font-size="8" fill="var(--color-text-light)" class="font-bold">O</text>
          <circle cx="-10" cy="10" r="5" fill="var(--color-secondary)" /> <text x="-13" y="13" font-size="6" fill="var(--color-text-light)">H</text>
          <circle cx="10" cy="10" r="5" fill="var(--color-secondary)" /> <text x="7" y="13" font-size="6" fill="var(--color-text-light)">H</text>
          <line x1="0" y1="0" x2="-8" y2="8" stroke="var(--color-text-light)" stroke-width="1"/>
          <line x1="0" y1="0" x2="8" y2="8" stroke="var(--color-text-light)" stroke-width="1"/>
        </symbol>
        <use href="#waterMoleculeSymbolC1L1b" x="50" y="40" />
        <use href="#waterMoleculeSymbolC1L1b" x="90" y="50" />
        <use href="#waterMoleculeSymbolC1L1b" x="130" y="40" />
        <text x="10" y="100" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Compound (Water Molecules H₂O)</text>
      </svg>
    </div>
    *   *Example Chemical Equation (Formation of Water):* 2H₂(g) + O₂(g) → 2H₂O(l)
    This equation shows that two molecules of hydrogen gas react with one molecule of oxygen gas to produce two molecules of liquid water.

**2. Mixtures**
Mixtures are physical combinations of two or more pure substances where each substance retains its own chemical identity and properties. The components of a mixture are not chemically bonded and can be separated by physical means. Mixtures have variable composition.
*   **Homogeneous Mixtures (Solutions):** Have a uniform composition throughout. The different components are not visibly distinguishable. Any sample taken from the mixture will have the same proportions of its components. Examples: Saltwater (salt dissolved in water), Air (a mixture of nitrogen, oxygen, and other gases), Brass (an alloy of copper and zinc).
    <div class="my-4 flex justify-center">
      <svg width="180" height="150" xmlns="http://www.w3.org/2000/svg" aria-label="Diagram of a saltwater solution, representing a homogeneous mixture." class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <!-- Water molecules -->
        <circle cx="30" cy="30" r="8" fill="var(--color-secondary)" opacity="0.7"/> <circle cx="70" cy="25" r="8" fill="var(--color-secondary)" opacity="0.7"/>
        <circle cx="110" cy="35" r="8" fill="var(--color-secondary)" opacity="0.7"/> <circle cx="50" cy="60" r="8" fill="var(--color-secondary)" opacity="0.7"/>
        <circle cx="90" cy="65" r="8" fill="var(--color-secondary)" opacity="0.7"/> <circle cx="130" cy="55" r="8" fill="var(--color-secondary)" opacity="0.7"/>
        <circle cx="40" cy="90" r="8" fill="var(--color-secondary)" opacity="0.7"/> <circle cx="100" cy="95" r="8" fill="var(--color-secondary)" opacity="0.7"/>
        <!-- Salt ions -->
        <circle cx="50" cy="40" r="4" fill="var(--color-accent)"/> <text x="46" y="44" font-size="5" fill="var(--color-text-light)">Na⁺</text>
        <circle cx="80" cy="50" r="4" fill="var(--color-primary)"/> <text x="76" y="54" font-size="5" fill="var(--color-text-light)">Cl⁻</text>
        <circle cx="120" cy="45" r="4" fill="var(--color-accent)"/> <text x="116" y="49" font-size="5" fill="var(--color-text-light)">Na⁺</text>
        <circle cx="60" cy="75" r="4" fill="var(--color-primary)"/> <text x="56" y="79" font-size="5" fill="var(--color-text-light)">Cl⁻</text>
        <circle cx="110" cy="80" r="4" fill="var(--color-accent)"/> <text x="106" y="84" font-size="5" fill="var(--color-text-light)">Na⁺</text>
        <rect x="5" y="5" width="170" height="110" stroke="var(--color-border)" stroke-width="1" fill="none" rx="5"/>
        <text x="10" y="135" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Homogeneous Mixture (Saltwater)</text>
      </svg>
    </div>
*   **Heterogeneous Mixtures:** Have a non-uniform composition. The components are often visibly distinguishable, and their distribution is not even. Examples: Sand and water, Oil and vinegar, A salad, Concrete.
    <div class="my-4 flex justify-center">
      <svg width="180" height="150" xmlns="http://www.w3.org/2000/svg" aria-label="Diagram of sand and water, representing a heterogeneous mixture." class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <!-- Water -->
        <rect x="5" y="5" width="170" height="60" fill="var(--color-secondary)" fill-opacity="0.3"/>
        <!-- Sand particles -->
        <circle cx="40" cy="90" r="6" fill="var(--color-accent)" fill-opacity="0.8"/> <ellipse cx="70" cy="100" rx="8" ry="5" fill="var(--color-accent)" fill-opacity="0.8"/>
        <circle cx="100" cy="85" r="5" fill="var(--color-accent)" fill-opacity="0.8"/> <ellipse cx="130" cy="95" rx="7" ry="4" fill="var(--color-accent)" fill-opacity="0.8"/>
        <circle cx="60" cy="110" r="6" fill="var(--color-accent)" fill-opacity="0.8"/> <ellipse cx="110" cy="105" rx="5" ry="7" fill="var(--color-accent)" fill-opacity="0.8"/>
        <rect x="5" y="5" width="170" height="110" stroke="var(--color-border)" stroke-width="1" fill="none" rx="5"/>
        <text x="10" y="135" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Heterogeneous Mixture (Sand & Water)</text>
      </svg>
    </div>

**Separation of Mixtures**
Mixtures can be separated into their components by physical methods that exploit differences in their physical properties. Common techniques include:
*   **Filtration:** Separates an insoluble solid from a liquid (e.g., sand from water). The mixture is poured through a filter paper; the liquid passes through, while the solid is retained.
    <div class="my-4 flex justify-center">
      <svg width="200" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Diagram of filtration setup" class="p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <text x="50" y="15" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Filtration Setup</text>
        <!-- Beaker with mixture -->
        <path d="M30 50 C30 40, 40 30, 60 30 S90 40, 90 50 L85 90 H35 Z" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.2"/>
        <text x="40" y="60" font-size="10" fill="var(--color-text-light)">Mixture</text>
        <line x1="75" y1="55" x2="100" y2="70" stroke="var(--color-border)" stroke-width="1"/> <!-- Pouring line -->
        <!-- Funnel -->
        <path d="M100 70 L110 90 L150 90 L160 70 Z" stroke="var(--color-border)" fill="var(--color-card-bg)"/>
        <path d="M120 90 L130 110 L140 90" stroke="var(--color-border)" fill="var(--color-text-muted)" fill-opacity="0.3"/> <!-- Filter paper representation -->
        <text x="105" y="85" font-size="10" fill="var(--color-text-light)">Funnel</text>
        <!-- Erlenmeyer Flask -->
        <path d="M115 110 L100 150 Q125 165, 150 150 L135 110 Z" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.2"/>
        <text x="105" y="125" font-size="10" fill="var(--color-text-light)">Filtrate</text>
        <text x="110" y="100" font-size="10" fill="var(--color-accent)">Residue</text>
      </svg>
    </div>
*   **Distillation:** Separates substances with different boiling points, typically liquids in a solution or a liquid from dissolved solids (e.g., separating ethanol from water, or obtaining pure water from saltwater). The mixture is heated; the substance with the lower boiling point vaporizes first. The vapor is then cooled, condensed, and collected.
    <div class="my-4 flex justify-center">
      <svg width="250" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Diagram of simple distillation setup" class="p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <text x="60" y="15" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Simple Distillation Setup</text>
        <!-- Heating Mantle -->
        <rect x="20" y="130" width="60" height="20" fill="var(--color-danger)" rx="3"/>
        <text x="25" y="145" font-size="8" fill="var(--color-text-light)">Heat</text>
        <!-- Round Bottom Flask -->
        <circle cx="50" cy="100" r="30" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.2"/>
        <rect x="45" y="70" width="10" height="30" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.2"/>
        <text x="30" y="105" font-size="10" fill="var(--color-text-light)">Mixture</text>
        <!-- Distillation Head & Thermometer -->
        <path d="M50 70 L70 50 L120 50 L100 70 Z" stroke="var(--color-border)" fill="var(--color-card-bg)"/>
        <line x1="80" y1="50" x2="80" y2="30" stroke="var(--color-border)"/> <circle cx="80" cy="25" r="3" fill="red"/>
        <text x="85" y="35" font-size="8" fill="var(--color-text-muted)">T°</text>
        <!-- Condenser -->
        <rect x="120" y="45" width="80" height="30" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.3"/>
        <line x1="120" y1="60" x2="200" y2="75" stroke="var(--color-border)" fill="none"/> <!-- Inner tube -->
        <text x="125" y="40" font-size="8" fill="var(--color-text-muted)">Water Out</text><line x1="140" y1="45" x2="140" y2="35" stroke="blue" marker-end="url(#arrowC1L1)"/>
        <text x="165" y="85" font-size="8" fill="var(--color-text-muted)">Water In</text><line x1="180" y1="75" x2="180" y2="85" stroke="blue" marker-start="url(#arrowrevC1L1)"/>
        <!-- Receiving Flask -->
        <path d="M200 75 L190 110 Q205 125 220 110 L210 75 Z" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.2"/>
        <text x="195" y="95" font-size="10" fill="var(--color-text-light)">Distillate</text>
        <defs>
           <marker id="arrowC1L1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="blue" /></marker>
           <marker id="arrowrevC1L1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 10 0 L 0 5 L 10 10 z" fill="blue" /></marker>
        </defs>
      </svg>
    </div>
*   **Evaporation:** Separates a dissolved solid (solute) from a liquid solvent by heating the solution until the solvent turns into a gas, leaving the solid behind (e.g., obtaining salt from saltwater by letting the water evaporate).
    <div class="my-4 flex justify-center">
      <svg width="150" height="130" xmlns="http://www.w3.org/2000/svg" aria-label="Diagram of evaporation" class="p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <text x="30" y="15" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Evaporation</text>
        <!-- Evaporating Dish -->
        <path d="M20 60 Q75 40, 130 60 L120 80 L30 80 Z" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.2"/>
        <text x="50" y="70" font-size="10" fill="var(--color-text-light)">Solution</text>
        <text x="60" y="75" font-size="10" fill="var(--color-accent)">Solid Residue</text>
        <!-- Heat Source -->
        <path d="M50 90 L60 110 L90 110 L100 90" stroke="var(--color-danger)" stroke-width="2" fill="none"/>
        <text x="65" y="105" font-size="10" fill="var(--color-danger)">Heat</text>
        <!-- Vapor -->
        <path d="M50 50 Q60 40 70 50 T90 50" stroke="var(--color-text-muted)" stroke-width="1.5" fill="none" stroke-dasharray="2 2"/>
        <path d="M55 45 Q65 35 75 45 T95 45" stroke="var(--color-text-muted)" stroke-width="1.5" fill="none" stroke-dasharray="2 2"/>
        <text x="65" y="35" font-size="10" fill="var(--color-text-muted)">Vapor</text>
      </svg>
    </div>
*   **Chromatography:** Separates components of a mixture based on their differing affinities for a stationary phase (a solid or liquid) and a mobile phase (a liquid or gas that moves through the stationary phase). Used to separate pigments in ink or dyes.
    <div class="my-4 flex justify-center">
      <svg width="150" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Diagram of paper chromatography" class="p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <text x="10" y="15" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Paper Chromatography</text>
        <!-- Beaker -->
        <rect x="20" y="100" width="110" height="60" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.1"/>
        <text x="50" y="150" font-size="10" fill="var(--color-text-muted)">Solvent</text>
        <!-- Paper Strip -->
        <rect x="60" y="30" width="30" height="100" fill="var(--color-text-muted)" fill-opacity="0.3"/>
        <line x1="75" y1="110" x2="75" y2="120" stroke="var(--color-primary)" stroke-width="2"/> <!-- Origin spot -->
        <text x="30" y="115" font-size="10" fill="var(--color-text-muted)">Origin</text>
        <!-- Separated Bands -->
        <rect x="70" y="80" width="10" height="10" fill="red" opacity="0.7"/>
        <rect x="70" y="60" width="10" height="10" fill="blue" opacity="0.7"/>
        <rect x="70" y="40" width="10" height="10" fill="green" opacity="0.7"/>
        <text x="85" y="50" font-size="10" fill="var(--color-text-muted)">Bands</text>
        <!-- Solvent Front -->
        <line x1="60" y1="35" x2="90" y2="35" stroke="var(--color-accent)" stroke-dasharray="2,2"/>
        <text x="20" y="40" font-size="10" fill="var(--color-text-muted)">Solvent Front</text>
      </svg>
    </div>
*   **Decanting:** Carefully pouring off a liquid from a settled solid or an immiscible denser liquid (e.g., separating water from sand after the sand has settled, or oil from water).
*   **Magnetism:** Used to separate magnetic substances from non-magnetic ones (e.g., iron filings from sand).

**Safety Note:** When performing separations like distillation or evaporation involving heating, always use appropriate safety equipment like goggles and be mindful of hot surfaces. Some chemical vapors can be harmful if inhaled, so ensure good ventilation.`,
  practice: [
    {
      text: '1. Classify each of the following as an element, compound, homogeneous mixture, or heterogeneous mixture:\n    a) Copper wire\n    b) Sugar (C₁₂H₂₂O₁₁)\n    c) A chocolate chip cookie\n    d) Vinegar (acetic acid dissolved in water)\n    e) Helium gas in a balloon',
    },
    {
      text: '2. You have a mixture of salt, sand, and iron filings. Describe a sequence of physical separation techniques you could use to separate these three substances. Explain your reasoning for each step.',
    },
    {
      text: '3. Is the process of dissolving sugar in tea a physical or chemical change? Explain why.',
    },
  ],
  answers: [
    {
      text: '1. **Classifications:**\n    a) **Copper wire:** Element (Copper, Cu, is a substance listed on the periodic table).\n    b) **Sugar (C₁₂H₂₂O₁₁):** Compound (Made of carbon, hydrogen, and oxygen chemically bonded in a fixed ratio).\n    c) **A chocolate chip cookie:** Heterogeneous mixture (Chocolate chips, dough, etc., are not uniformly distributed).\n    d) **Vinegar (acetic acid dissolved in water):** Homogeneous mixture (Solution - acetic acid is uniformly distributed in water).\n    e) **Helium gas in a balloon:** Element (Helium, He, is a substance).',
    },
    {
      text: '2. **Separating salt, sand, and iron filings:**\n    a) **Magnetism:** Use a magnet to remove the iron filings. Iron is magnetic; salt and sand are not.\n    b) **Dissolving & Decanting/Filtration:** Add water to the remaining mixture of salt and sand. Salt will dissolve in water, but sand will not. Carefully decant (pour off) the saltwater solution, leaving the sand behind. Alternatively, filter the mixture: the sand will be caught by the filter paper, and the saltwater solution will pass through.\n    c) **Evaporation:** Heat the saltwater solution gently. The water will evaporate, leaving the solid salt behind.',
    },
    {
      text: '3. Dissolving sugar in tea is a **physical change**. The sugar molecules spread out and intermingle with the tea (water) molecules, but the chemical composition of the sugar (C₁₂H₂₂O₁₁) and the water (H₂O) do not change. No new substances are formed. The sugar can be recovered by evaporating the tea, indicating it was a physical combination.',
    },
  ],
};
