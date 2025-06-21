import { Lesson } from '../../../types';

export const c1l2Data: Lesson = {
  id: 'C1L2',
  unit: 1,
  title: 'Physical vs Chemical Change',
  objectives: [
    'Distinguish between physical and chemical properties.',
    'Identify indicators of chemical change.',
    'Classify changes as physical or chemical.',
  ],
  labMinutes: 30,
  narrative: `**Physical properties** can be observed or measured without changing the chemical identity of the substance (e.g., color, density, melting point, boiling point, state of matter, hardness, malleability, ductility). **Physical changes** alter the form or appearance of a substance, but not its chemical composition. The substance remains the same chemically. Examples:
*   Melting ice (H₂O(s) → H₂O(l)) 
    <div class="my-4 flex justify-around items-center">
      <svg width="120" height="100" xmlns="http://www.w3.org/2000/svg" aria-label="Ice cube structure" class="p-1 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <rect x="30" y="30" width="60" height="40" fill="lightblue" stroke="blue" stroke-width="1"/>
        <circle cx="45" cy="45" r="3" fill="blue"/> <circle cx="60" cy="40" r="3" fill="blue"/> <circle cx="75" cy="45" r="3" fill="blue"/>
        <circle cx="40" cy="60" r="3" fill="blue"/> <circle cx="55" cy="55" r="3" fill="blue"/> <circle cx="70" cy="60" r="3" fill="blue"/>
        <text x="35" y="85" font-size="10" fill="var(--color-text-muted)">Ice (H₂O(s))</text>
      </svg>
      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" class="inline-block"><path d="M5 15 L25 15 M18 8 L25 15 L18 22" stroke="var(--color-accent)" stroke-width="2" fill="none"/></svg>
      <svg width="120" height="100" xmlns="http://www.w3.org/2000/svg" aria-label="Liquid water structure" class="p-1 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <rect x="20" y="25" width="80" height="50" fill="lightblue" rx="5" ry="5" fill-opacity="0.5"/>
        <circle cx="40" cy="40" r="3" fill="blue"/> <circle cx="65" cy="35" r="3" fill="blue"/> <circle cx="50" cy="55" r="3" fill="blue"/>
        <circle cx="70" cy="60" r="3" fill="blue"/> <circle cx="35" cy="65" r="3" fill="blue"/> <circle cx="80" cy="45" r="3" fill="blue"/>
        <text x="30" y="85" font-size="10" fill="var(--color-text-muted)">Water (H₂O(l))</text>
      </svg>
    </div>
*   Tearing paper
*   Dissolving sugar in water
*   Boiling water (H₂O(l) → H₂O(g))
    <div class="my-4 flex justify-around items-center">
      <svg width="120" height="100" xmlns="http://www.w3.org/2000/svg" aria-label="Liquid water in beaker" class="p-1 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <path d="M20 80 L20 30 Q25 20 50 20 T80 30 L80 80 Z" stroke="var(--color-border)" fill="lightblue" fill-opacity="0.5"/>
        <circle cx="40" cy="50" r="2" fill="blue"/> <circle cx="65" cy="45" r="2" fill="blue"/> <circle cx="50" cy="65" r="2" fill="blue"/>
        <text x="25" y="90" font-size="10" fill="var(--color-text-muted)">Water (H₂O(l))</text>
      </svg>
       <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" class="inline-block"><path d="M5 15 L25 15 M18 8 L25 15 L18 22" stroke="var(--color-accent)" stroke-width="2" fill="none"/></svg>
      <svg width="120" height="100" xmlns="http://www.w3.org/2000/svg" aria-label="Steam/Gas particles" class="p-1 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <circle cx="30" cy="30" r="3" fill="blue"/> <circle cx="70" cy="25" r="3" fill="blue"/>
        <circle cx="50" cy="50" r="3" fill="blue"/> <circle cx="85" cy="60" r="3" fill="blue"/>
        <circle cx="40" cy="70" r="3" fill="blue"/> <circle cx="75" cy="75" r="3" fill="blue"/>
        <text x="30" y="90" font-size="10" fill="var(--color-text-muted)">Steam (H₂O(g))</text>
      </svg>
    </div>
*   Chopping wood

**Chemical properties** describe how a substance reacts or changes to form new substances with new properties (e.g., flammability, reactivity with acid, ability to rust, heat of combustion, toxicity). **Chemical changes** (also called chemical reactions) result in the formation of one or more new substances with different chemical compositions and properties from the original substances.
Examples:
*   Burning wood (wood + oxygen → ash, CO₂, H₂O)
    <div class="my-4 flex justify-center">
       <svg width="150" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Burning wood" class="p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <path d="M40 100 L50 70 L60 90 L70 60 L80 95 L90 70 L100 100 Z" fill="brown"/>
        <path d="M60 60 C50 40, 80 40, 70 20 C75 45, 90 40, 80 60" fill="orange"/>
        <path d="M70 50 C65 35, 85 35, 75 15 C78 38, 90 35, 85 50" fill="yellow"/>
        <text x="20" y="115" font-size="10" fill="var(--color-text-muted)">Wood Burning: New Substances</text>
      </svg>
    </div>
*   Iron rusting (iron + oxygen → iron oxide)
    <div class="my-4 flex justify-around items-center">
        <svg width="100" height="80" xmlns="http://www.w3.org/2000/svg" aria-label="Shiny iron nail" class="p-1 border border-border-color rounded bg-card-bg dark:bg-slate-700">
            <rect x="20" y="30" width="60" height="10" fill="silver" rx="2"/> <polygon points="80,30 85,35 80,40" fill="silver"/>
            <text x="30" y="55" font-size="10" fill="var(--color-text-muted)">Iron (Fe)</text>
        </svg>
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" class="inline-block"><path d="M5 15 L25 15 M18 8 L25 15 L18 22" stroke="var(--color-accent)" stroke-width="2" fill="none"/></svg>
        <svg width="100" height="80" xmlns="http://www.w3.org/2000/svg" aria-label="Rusty iron nail" class="p-1 border border-border-color rounded bg-card-bg dark:bg-slate-700">
            <rect x="20" y="30" width="60" height="10" fill="brown" fill-opacity="0.7" rx="2"/> <polygon points="80,30 85,35 80,40" fill="brown" fill-opacity="0.7"/>
            <text x="15" y="55" font-size="10" fill="var(--color-text-muted)">Rust (Fe₂O₃)</text>
        </svg>
    </div>
*   Baking a cake (ingredients react to form new substances)
*   Digestion of food

**Indicators of Chemical Change (Evidence a reaction may have occurred):**
*   **Change in color** (unexpected, not just dilution)
*   **Formation of a precipitate** (a solid forming from a solution)
    <div class="my-4 flex justify-center">
      <svg width="150" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Formation of a precipitate" class="p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <path d="M40 20 L40 70 Q45 80 60 80 T80 70 L80 20 Z" stroke="var(--color-border)" fill="lightblue" fill-opacity="0.3"/> <!-- Test tube -->
        <rect x="50" y="60" width="20" height="15" fill="yellow" fill-opacity="0.7"/> <!-- Precipitate -->
        <text x="30" y="100" font-size="10" fill="var(--color-text-muted)">Precipitate Formed</text>
      </svg>
    </div>
*   **Formation of a gas** (bubbles appearing, not from boiling)
    <div class="my-4 flex justify-center">
      <svg width="150" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Formation of gas bubbles" class="p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <path d="M40 80 L40 30 Q45 20 60 20 T80 30 L80 80 Z" stroke="var(--color-border)" fill="lightgreen" fill-opacity="0.3"/> <!-- Beaker with liquid -->
        <circle cx="50" cy="70" r="5" fill="grey"/> <!-- Solid reactant -->
        <circle cx="55" cy="50" r="3" stroke="var(--color-text-muted)" fill="none"/> <circle cx="65" cy="40" r="2" stroke="var(--color-text-muted)" fill="none"/> <circle cx="50" cy="30" r="3" stroke="var(--color-text-muted)" fill="none"/>
        <text x="30" y="100" font-size="10" fill="var(--color-text-muted)">Gas Bubbles Formed</text>
      </svg>
    </div>
*   **Production or absorption of heat** (exothermic - gets hot, or endothermic - gets cold)
*   **Production of light** (e.g., burning, bioluminescence)
*   **Change in odor** (a new smell is produced)

**Safety Note:** Many chemical changes can release energy or produce hazardous substances. Always follow safety protocols in a lab setting. For example, when observing the reactivity of a substance with acid, do so in a well-ventilated area and wear eye protection.`,
  practice: [
    { text: '1. Is boiling water a physical or chemical change? Explain.' },
    {
      text: '2. Burning wood is an example of what type of change? List two observations that support your answer.',
    },
    {
      text: '3. Classify each process as a physical or chemical change: a) Digesting a candy bar, b) Inflating a tire, c) A silver spoon tarnishing.',
    },
  ],
  answers: [
    {
      text: '1. Boiling water is a **physical change**. Although the water changes state from liquid (H₂O(l)) to gas (steam, H₂O(g)), its chemical composition (H₂O) remains the same. The water molecules themselves are not altered.',
    },
    {
      text: '2. Burning wood is a **chemical change**. Observations supporting this include:\n    a) **Production of light and heat** (flames are visible, and heat is released).\n    b) **Formation of new substances** (ash, smoke, and gases like carbon dioxide and water vapor are produced, which have different properties from the original wood).',
    },
    {
      text: "3. a) Digesting a candy bar: **Chemical change** (complex food molecules are broken down into simpler molecules by enzymes).\n    b) Inflating a tire: **Physical change** (air is compressed, but its chemical composition doesn't change).\n    c) A silver spoon tarnishing: **Chemical change** (silver reacts with sulfur compounds in the air to form silver sulfide, a new substance).",
    },
  ],
};
