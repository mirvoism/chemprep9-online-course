import { Lesson } from '../../../types';

export const c3l3Data: Lesson = {
  id: 'C3L3',
  unit: 3,
  title: 'Properties of Groups',
  objectives: [
    'Describe characteristic physical and chemical properties of alkali metals (Group 1).',
    'Describe characteristic physical and chemical properties of alkaline earth metals (Group 2).',
    'Describe characteristic physical and chemical properties of halogens (Group 17).',
    'Describe characteristic physical and chemical properties of noble gases (Group 18).',
    'Relate the properties of these groups to their electron configurations.',
  ],
  labMinutes: 40,
  interactive: [
    {
      type: 'custom',
      title: 'Group Properties Explorer (Conceptual)',
      description: 'Visually compare trends and key reactions for element groups.',
      placeholderText:
        '**Learning Goal:** To understand how electron configuration dictates group properties and reactivity trends.\n**Intended Functionality:** Users select a group (Alkali Metals, Alkaline Earth Metals, Halogens, Noble Gases). The tool displays:\n1. Typical electron configuration (e.g., ns¹ for Alkali Metals).\n2. Key physical properties (state at STP, metallic character, general appearance).\n3. Trends within the group (e.g., reactivity, atomic radius changes down the group).\n4. Examples of characteristic reactions (e.g., alkali metal + water, halogen + metal).\n_An interactive module might show animated reactions or allow users to predict properties._',
    },
  ],
  narrative: `The periodic table organizes elements not just by atomic number, but also by shared chemical properties. Elements in the same vertical column, called a **group** or **family**, exhibit similar chemical behaviors because they have the same number of **valence electrons**.

**Group 1: Alkali Metals**
*   Elements: Lithium (Li), Sodium (Na), Potassium (K), Rubidium (Rb), Cesium (Cs), Francium (Fr).
*   Electron Configuration: All have **1 valence electron** (ns¹ configuration, e.g., Na: [Ne]3s¹).
*   Physical Properties:
    *   Soft, silvery metals.
    *   Low densities (Li, Na, K float on water).
    *   Low melting and boiling points compared to other metals.
    *   Excellent conductors of heat and electricity.
*   Chemical Properties:
    *   **Extremely reactive.** They readily lose their single valence electron to form +1 ions (e.g., Na⁺, K⁺).
    *   Reactivity **increases** as you go down the group (valence electron is further from the nucleus, easier to lose).
    *   React vigorously with water to produce hydrogen gas and a metal hydroxide (an alkaline solution).
        Example: 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)
    *   React readily with nonmetals, especially halogens, to form ionic compounds (salts).
        Example: 2Na(s) + Cl₂(g) → 2NaCl(s)
    *   Stored under oil or inert atmosphere to prevent reaction with air and moisture.
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" aria-labelledby="alkali-metal-reaction-title-c3l3" class="mx-auto my-2 p-1 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="alkali-metal-reaction-title-c3l3">Alkali metal (e.g., Na) reacting with water.</title>
  <rect x="10" y="50" width="180" height="80" fill="var(--color-primary)" fill-opacity="0.2" rx="5"/>
  <text x="100" y="140" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">Water</text>
  <circle cx="100" cy="70" r="15" fill="silver"/>
  <text x="100" y="73" text-anchor="middle" font-size="0.7em" fill="black">Na</text>
  <text x="100" y="30" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Alkali Metal + Water</text>
  <!-- Bubbles for H2 gas -->
  <circle cx="80" cy="55" r="3" fill="var(--color-text-muted)" opacity="0.7"/>
  <circle cx="120" cy="50" r="4" fill="var(--color-text-muted)" opacity="0.7"/>
  <circle cx="100" cy="45" r="2" fill="var(--color-text-muted)" opacity="0.7"/>
  <text x="140" y="60" font-size="0.8em" fill="var(--color-text-muted)">H₂ gas</text>
</svg>

**Group 2: Alkaline Earth Metals**
*   Elements: Beryllium (Be), Magnesium (Mg), Calcium (Ca), Strontium (Sr), Barium (Ba), Radium (Ra).
*   Electron Configuration: All have **2 valence electrons** (ns² configuration, e.g., Mg: [Ne]3s²).
*   Physical Properties:
    *   Harder, denser, and have higher melting points than alkali metals.
    *   Silvery-white metals.
*   Chemical Properties:
    *   Reactive, but generally less reactive than alkali metals.
    *   Readily lose their two valence electrons to form +2 ions (e.g., Mg²⁺, Ca²⁺).
    *   Reactivity **increases** as you go down the group.
    *   React with water (less vigorously than alkali metals, especially Be and Mg) to produce hydrogen gas and metal hydroxides.
        Example: Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g)
    *   React with nonmetals to form ionic compounds.

**Group 17: Halogens**
*   Elements: Fluorine (F), Chlorine (Cl), Bromine (Br), Iodine (I), Astatine (At).
*   Electron Configuration: All have **7 valence electrons** (ns²np⁵ configuration, e.g., Cl: [Ne]3s²3p⁵).
*   Physical Properties:
    *   Exist as diatomic molecules (F₂, Cl₂, Br₂, I₂).
    *   States at room temperature vary: F₂ (gas), Cl₂ (gas), Br₂ (liquid), I₂ (solid). This trend is due to increasing London Dispersion Forces with molecular size.
    *   Colored substances (F₂: pale yellow-green, Cl₂: greenish-yellow, Br₂: reddish-brown, I₂: purplish-black solid that sublimes to purple vapor).
<svg width="350" height="120" xmlns="http://www.w3.org/2000/svg" aria-labelledby="halogens-states-title-c3l3" class="mx-auto my-2 p-1 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="halogens-states-title-c3l3">States of halogens at room temperature.</title>
  <text x="175" y="20" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Halogens (Diatomic Molecules)</text>
  <!-- Fluorine (gas) -->
  <text x="50" y="50" font-size="inherit" fill="#D1FAE5">F₂ (gas)</text>
  <circle cx="45" cy="70" r="3" fill="#A7F3D0" opacity="0.7"/> <circle cx="55" cy="75" r="3" fill="#A7F3D0" opacity="0.7"/> <circle cx="40" cy="80" r="3" fill="#A7F3D0" opacity="0.7"/>
  <!-- Chlorine (gas) -->
  <text x="130" y="50" font-size="inherit" fill="#FDE047">Cl₂ (gas)</text>
  <circle cx="125" cy="70" r="3" fill="#FACC15" opacity="0.7"/> <circle cx="135" cy="75" r="3" fill="#FACC15" opacity="0.7"/> <circle cx="120" cy="80" r="3" fill="#FACC15" opacity="0.7"/>
  <!-- Bromine (liquid) -->
  <text x="210" y="50" font-size="inherit" fill="#FCA5A5">Br₂ (liquid)</text>
  <rect x="190" y="65" width="40" height="25" fill="#F87171" opacity="0.5" rx="3"/>
  <!-- Iodine (solid) -->
  <text x="290" y="50" font-size="inherit" fill="#C4B5FD">I₂ (solid)</text>
  <rect x="275" y="65" width="30" height="20" fill="#A78BFA" opacity="0.7" rx="2"/>
  <rect x="280" y="70" width="20" height="10" fill="#8B5CF6" opacity="0.8" rx="1"/>
</svg>
*   Chemical Properties:
    *   **Highly reactive nonmetals.** They readily gain one electron to form -1 ions (halide ions, e.g., F⁻, Cl⁻) to achieve a stable octet.
    *   Reactivity **decreases** as you go down the group (outermost shell is further from nucleus, attraction for an additional electron is weaker). Fluorine is the most reactive nonmetal.
    *   React with metals to form ionic salts.
        Example: 2K(s) + Br₂(l) → 2KBr(s)
    *   React with hydrogen to form hydrogen halides (which are acids in water).
        Example: H₂(g) + Cl₂(g) → 2HCl(g)

**Group 18: Noble Gases**
*   Elements: Helium (He), Neon (Ne), Argon (Ar), Krypton (Kr), Xenon (Xe), Radon (Rn).
*   Electron Configuration: Have a **full valence shell** of electrons (He has 2 (1s²), others have 8 (ns²np⁶)).
*   Physical Properties:
    *   Colorless, odorless, tasteless gases at room temperature.
*   Chemical Properties:
    *   **Extremely unreactive (inert).** Their full valence shells make them very stable and they have little tendency to gain, lose, or share electrons.
    *   Exist as monatomic gases (single atoms).
    *   Historically called "inert gases," though some compounds of Kr, Xe, and Rn have been synthesized under special conditions with highly reactive elements like fluorine and oxygen. However, for Regents Chemistry, they are considered unreactive.

**General Trends and Takeaways**
*   Elements within the same group have similar chemical properties due to the same number of valence electrons.
*   Reactivity trends within groups (e.g., increasing for alkali metals down the group, decreasing for halogens down the group) are related to factors like atomic size, nuclear charge, and electron shielding, which affect how easily valence electrons are lost or gained.

**Safety Note:** The reactivity of elements varies greatly by group. Alkali metals are dangerously reactive with water and must be handled with extreme care. Halogens like chlorine and bromine are corrosive and toxic. Noble gases are safe due to their inertness. Always consult safety data sheets (SDS) and follow proper procedures when handling any chemicals.`,
  practice: [
    {
      text: '1. Why are alkali metals (Group 1) more reactive than alkaline earth metals (Group 2)?',
    },
    {
      text: '2. Describe the trend in reactivity as you go down Group 17 (Halogens). Explain why this trend occurs.',
    },
    { text: '3. Why are noble gases (Group 18) generally unreactive?' },
    {
      text: '4. Write the general valence electron configuration for: a) Alkaline earth metals b) Halogens',
    },
  ],
  answers: [
    {
      text: '1. Alkali metals (Group 1) have only one valence electron, which they can lose relatively easily to form a +1 ion and achieve a stable noble gas configuration. Alkaline earth metals (Group 2) have two valence electrons. While they also lose these to become stable, it requires more energy to remove two electrons than one, and the effective nuclear charge holding onto those two electrons is slightly greater compared to the single valence electron of an alkali metal in the same period. Thus, alkali metals are generally more reactive.',
    },
    {
      text: '2. Reactivity of halogens (Group 17) **decreases** as you go down the group. Halogens react by gaining an electron. As you go down the group, the atomic radius increases, and the outermost (valence) shell is further from the positively charged nucleus. There is also increased electron shielding from inner electrons. These factors make it less easy for the atom to attract an additional electron, hence lower reactivity for larger halogens like iodine compared to fluorine.',
    },
    {
      text: '3. Noble gases (Group 18) are generally unreactive because they have a full valence electron shell (an octet, or a duet for Helium). This electron configuration is very stable, so they have little or no tendency to gain, lose, or share electrons to form chemical bonds.',
    },
    {
      text: "4. a) Alkaline earth metals (Group 2): **ns²** (where 'n' is the principal energy level of the valence shell).\nb) Halogens (Group 17): **ns²np⁵**.",
    },
  ],
};
