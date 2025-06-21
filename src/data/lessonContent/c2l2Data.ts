import { Lesson } from '../../../types';

export const c2l2Data: Lesson = {
  id: 'C2L2',
  unit: 2,
  title: 'Isotopes & Average Atomic Mass',
  objectives: [
    'Define isotope and relate it to atomic number and mass number.',
    'Determine the number of protons, neutrons, and electrons in an atom or ion of a specific isotope.',
    'Calculate average atomic mass from isotopic abundances and masses.',
  ],
  labMinutes: 45,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/isotopes-and-atomic-mass/latest/isotopes-and-atomic-mass_en.html',
      title: 'Isotopes and Atomic Mass',
      description:
        'Explore isotopes and how they relate to mass number, atomic number, and average atomic mass. Build atoms with different numbers of neutrons.',
    },
  ],
  narrative: `**Review: Atomic Number and Mass Number**
Recall from C2L1:
*   **Atomic Number (Z):** The number of protons in the nucleus of an atom. It defines the element.
*   **Mass Number (A):** The total number of protons and neutrons in the nucleus of an atom. (A = #protons + #neutrons)

**What are Isotopes?**
**Isotopes** are atoms of the **same element** that have the same number of protons (same atomic number, Z) but **different numbers of neutrons**. This means they also have different mass numbers (A).

Since isotopes of an element have the same number of protons and electrons (in a neutral atom), they have nearly identical chemical properties. However, their physical properties related to mass, such as density or rate of diffusion, can differ slightly.

**Notation for Isotopes**
Isotopes can be represented in two common ways:
1.  **Hyphen notation:** ElementName-MassNumber (e.g., Carbon-12, Carbon-14, Uranium-235).
2.  **Nuclear symbol notation (or isotopic symbol):**
    <div class="text-center text-lg my-2">
      <span class="relative inline-block">
        <sup class="absolute -top-2 -left-3 text-sm">A</sup>
        <sub class="absolute top-2 -left-3 text-sm">Z</sub>
        <span class="font-serif text-2xl">X</span>
      </span>
    </div>
    Where:
    *   **X** is the chemical symbol of the element.
    *   **A** is the mass number (protons + neutrons) written as a superscript to the left.
    *   **Z** is the atomic number (protons) written as a subscript to the left.
    *   Example: Carbon-12 is <span class="relative inline-block"><sup class="absolute -top-2 -left-3 text-sm">12</sup><sub class="absolute top-2 -left-3 text-sm">6</sub><span class="font-serif text-xl">C</span></span>, Carbon-14 is <span class="relative inline-block"><sup class="absolute -top-2 -left-3 text-sm">14</sup><sub class="absolute top-2 -left-3 text-sm">6</sub><span class="font-serif text-xl">C</span></span>.

<svg width="350" height="180" xmlns="http://www.w3.org/2000/svg" aria-labelledby="isotope-diagram-title-c2l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="isotope-diagram-title-c2l2">Comparison of Carbon-12 and Carbon-14 isotopes.</title>
  <defs>
    <circle id="proton-c2l2" r="6" fill="var(--color-primary)" />
    <circle id="neutron-c2l2" r="6" fill="var(--color-accent)" />
  </defs>
  
  <!-- Carbon-12 -->
  <text x="85" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Carbon-12 (<sup class="text-xs">12</sup>C)</text>
  <circle cx="85" cy="75" r="25" fill="var(--color-secondary)" fill-opacity="0.3"/>
  <!-- 6 protons -->
  <use href="#proton-c2l2" x="75" y="65"/> <use href="#proton-c2l2" x="95" y="65"/>
  <use href="#proton-c2l2" x="70" y="75"/> <use href="#proton-c2l2" x="100" y="75"/>
  <use href="#proton-c2l2" x="75" y="85"/> <use href="#proton-c2l2" x="95" y="85"/>
  <!-- 6 neutrons -->
  <use href="#neutron-c2l2" x="85" y="60"/> <use href="#neutron-c2l2" x="85" y="90"/>
  <use href="#neutron-c2l2" x="68" y="68"/> <use href="#neutron-c2l2" x="102" y="68"/>
  <use href="#neutron-c2l2" x="68" y="82"/> <use href="#neutron-c2l2" x="102" y="82"/>
  <text x="85" y="120" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">6 Protons</text>
  <text x="85" y="135" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">6 Neutrons</text>

  <!-- Carbon-14 -->
  <text x="265" y="25" text-anchor="middle" font-size="inherit" fill="var(--color-text-light)" class="font-semibold">Carbon-14 (<sup class="text-xs">14</sup>C)</text>
  <circle cx="265" cy="75" r="28" fill="var(--color-secondary)" fill-opacity="0.3"/>
  <!-- 6 protons -->
  <use href="#proton-c2l2" x="255" y="65"/> <use href="#proton-c2l2" x="275" y="65"/>
  <use href="#proton-c2l2" x="250" y="75"/> <use href="#proton-c2l2" x="280" y="75"/>
  <use href="#proton-c2l2" x="255" y="85"/> <use href="#proton-c2l2" x="275" y="85"/>
  <!-- 8 neutrons -->
  <use href="#neutron-c2l2" x="265" y="58"/> <use href="#neutron-c2l2" x="265" y="92"/>
  <use href="#neutron-c2l2" x="248" y="65"/> <use href="#neutron-c2l2" x="282" y="65"/>
  <use href="#neutron-c2l2" x="248" y="85"/> <use href="#neutron-c2l2" x="282" y="85"/>
  <use href="#neutron-c2l2" x="242" y="75"/> <use href="#neutron-c2l2" x="288" y="75"/>
  <text x="265" y="120" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">6 Protons</text>
  <text x="265" y="135" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">8 Neutrons</text>
  
  <text x="175" y="165" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">Both have 6 electrons (not shown) if neutral.</text>
</svg>

**Calculating Subatomic Particles for Isotopes**
*   **Number of protons** = Atomic Number (Z)
*   **Number of electrons** (in a neutral atom) = Number of protons = Z
*   **Number of neutrons** = Mass Number (A) - Atomic Number (Z)

*Example: For Uranium-238 (<span class="relative inline-block"><sup class="absolute -top-2 -left-3 text-sm">238</sup><sub class="absolute top-2 -left-3 text-sm">92</sub><span class="font-serif text-xl">U</span></span>):*
*   Protons = Z = 92
*   Electrons = 92 (since it's a neutral atom)
*   Neutrons = A - Z = 238 - 92 = 146

**Average Atomic Mass**
The atomic mass listed on the periodic table is typically not a whole number. This is because it is the **average atomic mass**, a weighted average of the masses of all naturally occurring isotopes of that element. The weighting factor is the **natural isotopic abundance** (percentage of that isotope found in nature).

The formula for average atomic mass is:
**Average Atomic Mass = Σ (mass of isotope × fractional abundance of isotope)**
Fractional abundance = (percent abundance) / 100

*Example: Chlorine has two main isotopes:*
*   Chlorine-35: mass = 34.969 amu, abundance = 75.76% (fractional abundance = 0.7576)
*   Chlorine-37: mass = 36.966 amu, abundance = 24.24% (fractional abundance = 0.2424)

Average Atomic Mass of Chlorine = (34.969 amu × 0.7576) + (36.966 amu × 0.2424)
                               = (26.496 amu) + (8.960 amu)
                               = **35.456 amu** 
(This is very close to the value on the periodic table, 35.45 amu)

**Safety Note:** Some isotopes are radioactive (unstable). Radioactive isotopes decay over time, emitting radiation. While many common isotopes are stable, handling radioactive materials requires specialized knowledge and safety precautions. This course focuses on the structural aspects of stable isotopes.`,
  practice: [
    { text: "1. Define 'isotope' in your own words." },
    {
      text: '2. An atom of potassium has an atomic number of 19 and a mass number of 39. Write its symbol in nuclear symbol notation. How many protons, neutrons, and electrons does it have?',
    },
    {
      text: '3. Silicon has three common isotopes: Silicon-28 (mass 27.977 amu, abundance 92.23%), Silicon-29 (mass 28.976 amu, abundance 4.68%), and Silicon-30 (mass 29.974 amu, abundance 3.09%). Calculate the average atomic mass of silicon.',
    },
  ],
  answers: [
    {
      text: '1. Isotopes are atoms of the same element that have the same number of protons (and thus the same atomic number) but differ in the number of neutrons, leading to different mass numbers.',
    },
    {
      text: "2. Nuclear symbol notation: <span class='relative inline-block'><sup class='absolute -top-2 -left-3 text-sm'>39</sup><sub class='absolute top-2 -left-3 text-sm'>19</sub><span class='font-serif text-xl'>K</span></span>.\n   Protons = Atomic Number = 19.\n   Electrons = Number of protons (for a neutral atom) = 19.\n   Neutrons = Mass Number - Atomic Number = 39 - 19 = 20.",
    },
    {
      text: '3. Average Atomic Mass of Silicon:\n   = (27.977 amu × 0.9223) + (28.976 amu × 0.0468) + (29.974 amu × 0.0309)\n   = (25.803 amu) + (1.356 amu) + (0.926 amu)\n   = 28.085 amu (rounded to three decimal places, consistent with the given masses).',
    },
  ],
};
