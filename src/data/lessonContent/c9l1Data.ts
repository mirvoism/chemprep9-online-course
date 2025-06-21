import { Lesson } from '../../../types';

export const c9l1Data: Lesson = {
  id: 'C9L1',
  unit: 9,
  title: 'Properties of Acids & Bases',
  objectives: [
    'Define acids and bases according to Arrhenius and Brønsted-Lowry theories.',
    'List common properties of acids and bases.',
    'Distinguish between strong and weak acids/bases in terms of dissociation/ionization.',
  ],
  labMinutes: 40,
  narrative: `**What are Acids and Bases?**
There are several theories to define acids and bases. Two important ones are:

**1. Arrhenius Theory**
*   **Arrhenius Acid:** A substance that produces hydrogen ions (H⁺) or hydronium ions (H₃O⁺) when dissolved in water. (H⁺ ions are highly reactive and immediately bond with water to form H₃O⁺).
    *   Example: HCl(g) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)
*   **Arrhenius Base:** A substance that produces hydroxide ions (OH⁻) when dissolved in water.
    *   Example: NaOH(s) → Na⁺(aq) + OH⁻(aq) (in water)

**2. Brønsted-Lowry Theory (Broader Definition)**
*   **Brønsted-Lowry Acid:** A proton (H⁺) donor.
*   **Brønsted-Lowry Base:** A proton (H⁺) acceptor.
    *   Example: HCl(aq) + H₂O(l) ⇌ H₃O⁺(aq) + Cl⁻(aq)
        *   HCl donates a proton to H₂O, so HCl is the acid.
        *   H₂O accepts a proton from HCl, so H₂O is the base.
    *   Example: NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)
        *   H₂O donates a proton to NH₃, so H₂O is the acid.
        *   NH₃ accepts a proton from H₂O, so NH₃ is the base.
*   **Conjugate Acid-Base Pairs:** In a Brønsted-Lowry acid-base reaction, an acid donates a proton to become its conjugate base, and a base accepts a proton to become its conjugate acid.
    *   In HCl + H₂O ⇌ H₃O⁺ + Cl⁻:
        *   HCl (acid) and Cl⁻ (conjugate base) form a pair.
        *   H₂O (base) and H₃O⁺ (conjugate acid) form a pair.

**Common Properties of Acids:**
*   Taste sour (e.g., lemon juice, vinegar - never taste lab chemicals!).
*   React with active metals (e.g., Zn, Mg) to produce hydrogen gas (H₂).
    *   Example: Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)
*   React with carbonates and bicarbonates to produce carbon dioxide gas (CO₂).
*   Turn blue litmus paper red.
*   Conduct electricity in solution (electrolytes) due to the presence of ions.
*   Have a pH less than 7.

**Common Properties of Bases:**
*   Taste bitter (e.g., unsweetened cocoa - never taste lab chemicals!).
*   Feel slippery to the touch (due to reaction with oils on skin).
*   Turn red litmus paper blue.
*   Conduct electricity in solution (electrolytes).
*   Have a pH greater than 7.
*   React with acids to neutralize their properties (forming salt and water).

**Strong vs. Weak Acids and Bases**
The strength of an acid or base depends on the extent to which it ionizes or dissociates in water.

*   **Strong Acids:** Ionize completely (or nearly completely) in water, meaning almost all acid molecules donate their protons.
    *   Represented by a single arrow (→) in the ionization equation.
    *   Examples: HCl (hydrochloric acid), H₂SO₄ (sulfuric acid), HNO₃ (nitric acid).
    *   Solutions of strong acids have a high concentration of H₃O⁺ ions.
*   **Weak Acids:** Ionize only partially in water. Only a small fraction of acid molecules donate their protons. An equilibrium is established between the undissociated acid and its ions.
    *   Represented by equilibrium arrows (⇌) in the ionization equation.
    *   Examples: CH₃COOH (acetic acid - in vinegar), H₂CO₃ (carbonic acid), HF (hydrofluoric acid).
    *   Solutions of weak acids have a lower concentration of H₃O⁺ ions compared to a strong acid of the same molarity.

<svg width="420" height="250" xmlns="http://www.w3.org/2000/svg" aria-labelledby="acid-dissociation-title-c9l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="acid-dissociation-title-c9l1">Comparison of dissociation of a strong acid (HCl) versus a weak acid (CH₃COOH) in water.</title>
  <defs>
    <circle id="h-ion-c9l1" r="5" fill="var(--color-danger)" />
    <circle id="cl-ion-c9l1" r="7" fill="var(--color-primary)" />
    <circle id="acetate-ion-c9l1" r="9" fill="var(--color-secondary)" />
    <g id="hcl-molecule-c9l1">
      <use href="#h-ion-c9l1" x="0" y="0"/>
      <use href="#cl-ion-c9l1" x="12" y="0"/>
      <line x1="2.5" y1="0" x2="9.5" y2="0" stroke="var(--color-text-muted)" stroke-width="1"/>
    </g>
    <g id="ch3cooh-molecule-c9l1">
      <rect x="-10" y="-5" width="20" height="10" rx="3" fill="var(--color-accent)" />
      <text x="-8" y="3" font-size="0.7em" fill="var(--color-text-light)">CH₃COOH</text>
    </g>
  </defs>

  <!-- Strong Acid (HCl) Beaker -->
  <rect x="20" y="40" width="180" height="150" rx="10" stroke="var(--color-border)" fill-opacity="0.1" fill="var(--color-secondary)"/>
  <text x="110" y="30" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)" class="font-semibold">Strong Acid (e.g., HCl in water)</text>
  <text x="110" y="200" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">HCl → H⁺ + Cl⁻ (Complete Dissociation)</text>
  <!-- HCl ions - many, dissociated -->
  <use href="#h-ion-c9l1" x="50" y="70"/> <use href="#cl-ion-c9l1" x="70" y="75"/>
  <use href="#h-ion-c9l1" x="100" y="65"/> <use href="#cl-ion-c9l1" x="120" y="70"/>
  <use href="#h-ion-c9l1" x="60" y="100"/> <use href="#cl-ion-c9l1" x="80" y="105"/>
  <use href="#h-ion-c9l1" x="130" y="95"/> <use href="#cl-ion-c9l1" x="150" y="100"/>
  <use href="#h-ion-c9l1" x="90" y="130"/> <use href="#cl-ion-c9l1" x="110" y="135"/>
  <use href="#h-ion-c9l1" x="40" y="140"/> <use href="#cl-ion-c9l1" x="60" y="145"/>
  <use href="#h-ion-c9l1" x="140" y="150"/> <use href="#cl-ion-c9l1" x="160" y="155"/>

  <!-- Weak Acid (CH3COOH) Beaker -->
  <rect x="220" y="40" width="180" height="150" rx="10" stroke="var(--color-border)" fill-opacity="0.1" fill="var(--color-secondary)"/>
  <text x="310" y="30" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)" class="font-semibold">Weak Acid (e.g., CH₃COOH in water)</text>
  <text x="310" y="200" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">CH₃COOH ⇌ H⁺ + CH₃COO⁻ (Partial Dissociation)</text>
  <!-- CH3COOH molecules - many, undissociated -->
  <use href="#ch3cooh-molecule-c9l1" x="250" y="70"/>
  <use href="#ch3cooh-molecule-c9l1" x="300" y="65"/>
  <use href="#ch3cooh-molecule-c9l1" x="350" y="70"/>
  <use href="#ch3cooh-molecule-c9l1" x="270" y="100"/>
  <use href="#ch3cooh-molecule-c9l1" x="330" y="105"/>
  <use href="#ch3cooh-molecule-c9l1" x="240" y="140"/>
  <use href="#ch3cooh-molecule-c9l1" x="290" y="145"/>
  <use href="#ch3cooh-molecule-c9l1" x="360" y="150"/>
  <!-- Few ions for weak acid -->
  <use href="#h-ion-c9l1" x="280" y="85"/> <use href="#acetate-ion-c9l1" x="310" y="125"/>
  <use href="#h-ion-c9l1" x="340" y="90"/> 
</svg>

*   **Strong Bases:** Dissociate completely in water to produce a high concentration of OH⁻ ions.
    *   Examples: NaOH (sodium hydroxide), KOH (potassium hydroxide), Ca(OH)₂ (calcium hydroxide).
*   **Weak Bases:** React with water to produce OH⁻ ions only to a limited extent. An equilibrium is established.
    *   Example: NH₃ (ammonia): NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)
    *   Solutions of weak bases have a lower concentration of OH⁻ ions compared to a strong base of the same molarity.

The terms **ionization** (for covalent acids forming ions) and **dissociation** (for ionic bases separating into ions) are often used interchangeably in this context.`,
  practice: [
    {
      text: '1. Define an acid according to the Arrhenius theory and the Brønsted-Lowry theory. Give an example for each.',
    },
    { text: '2. List three characteristic properties of acids and three of bases.' },
    {
      text: '3. What is the main difference between a strong acid and a weak acid? How is this represented in their ionization equations?',
    },
  ],
  answers: [
    {
      text: '1. **Arrhenius Acid:** Produces H⁺ (or H₃O⁺) ions in water. Example: HCl(aq) → H⁺(aq) + Cl⁻(aq).\n**Brønsted-Lowry Acid:** A proton (H⁺) donor. Example: In NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, H₂O acts as a Brønsted-Lowry acid by donating a proton to NH₃.',
    },
    {
      text: '2. **Acids:** Taste sour, react with active metals to produce H₂ gas, turn blue litmus red (any three).\n**Bases:** Taste bitter, feel slippery, turn red litmus blue (any three).',
    },
    {
      text: '3. The main difference is the extent of ionization. A **strong acid** ionizes completely (or nearly completely) in water, producing a high concentration of H₃O⁺ ions. Its ionization equation uses a single arrow (→). A **weak acid** ionizes only partially, establishing an equilibrium and producing a lower concentration of H₃O⁺ ions. Its ionization equation uses equilibrium arrows (⇌).',
    },
  ],
};
