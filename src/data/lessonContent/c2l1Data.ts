import { Lesson } from '../../../types';

export const c2l1Data: Lesson = {
  id: 'C2L1',
  unit: 2,
  title: 'The Modern Atom',
  objectives: [
    'Summarize key experiments leading to the modern atomic model (Dalton, Thomson, Rutherford, Bohr).',
    'Describe the structure of the atom (protons, neutrons, electrons; nucleus and electron cloud).',
    'Relate bright-line spectra to electron transitions and energy levels.',
  ],
  labMinutes: 50,
  interactive: [
    {
      type: 'phet',
      url: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html',
      title: 'Build an Atom',
      description:
        'Construct atoms by adding protons, neutrons, and electrons. See how the element, charge, and mass change.',
    },
    {
      type: 'phet',
      title: 'Models of the Hydrogen Atom',
      url: 'https://phet.colorado.edu/sims/html/models-of-the-hydrogen-atom/latest/models-of-the-hydrogen-atom_en.html',
      description:
        "Explore different models of the atom, including Bohr's model and the quantum mechanical model. Observe how light absorption and emission relate to electron transitions.",
    },
  ],
  narrative: `Early ideas of atoms by philosophers like Democritus were followed by John **Dalton's Atomic Theory** (early 1800s), which proposed that:
1.  All matter is composed of extremely small particles called atoms.
2.  Atoms of a given element are identical in size, mass, and other properties; atoms of different elements differ. (Note: discovery of isotopes later modified this).
3.  Atoms cannot be subdivided, created, or destroyed (Note: nuclear reactions later showed atoms can be changed).
4.  Atoms of different elements combine in simple whole-number ratios to form chemical compounds.
5.  In chemical reactions, atoms are combined, separated, or rearranged.
    <div class="my-4 flex justify-center">
      <svg width="180" height="100" xmlns="http://www.w3.org/2000/svg" aria-label="Dalton's atoms representation" class="p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <circle cx="30" cy="50" r="10" fill="var(--color-primary)" /> <text x="25" y="70" font-size="10" fill="var(--color-text-muted)">Atom X</text>
        <circle cx="80" cy="50" r="15" fill="var(--color-accent)" /> <text x="70" y="70" font-size="10" fill="var(--color-text-muted)">Atom Y</text>
        <circle cx="140" cy="50" r="10" fill="var(--color-primary)" />
        <line x1="140" y1="50" x2="155" y2="50" stroke="var(--color-text-light)" stroke-width="1"/>
        <circle cx="155" cy="50" r="15" fill="var(--color-accent)" />
        <text x="125" y="70" font-size="10" fill="var(--color-text-muted)">Compound XY</text>
      </svg>
    </div>

Later discoveries refined this model:
*   **J.J. Thomson** (late 1800s) discovered the **electron** using cathode ray tubes. He proposed the "plum pudding" model: a positively charged sphere with negatively charged electrons embedded in it.
    <div class="my-4 flex justify-center">
      <svg width="200" height="140" xmlns="http://www.w3.org/2000/svg" aria-label="Thomson's Plum Pudding Model of the Atom" class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <circle cx="100" cy="65" r="50" fill="var(--color-primary)" fill-opacity="0.3" stroke="var(--color-primary)" stroke-width="1"/>
        <text x="40" y="20" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Thomson's Plum Pudding Model</text>
        <!-- Electrons -->
        <circle cx="80" cy="50" r="5" fill="var(--color-danger)" /> <text x="76" y="54" font-size="8" fill="var(--color-text-light)">e⁻</text>
        <circle cx="120" cy="60" r="5" fill="var(--color-danger)" /> <text x="116" y="64" font-size="8" fill="var(--color-text-light)">e⁻</text>
        <circle cx="100" cy="85" r="5" fill="var(--color-danger)" /> <text x="96" y="89" font-size="8" fill="var(--color-text-light)">e⁻</text>
        <circle cx="70" cy="75" r="5" fill="var(--color-danger)" /> <text x="66" y="79" font-size="8" fill="var(--color-text-light)">e⁻</text>
        <circle cx="130" cy="40" r="5" fill="var(--color-danger)" /> <text x="126" y="44" font-size="8" fill="var(--color-text-light)">e⁻</text>
        <text x="50" y="130" font-size="10" fill="var(--color-text-muted)">Positive sphere with embedded electrons</text>
      </svg>
    </div>
*   **Ernest Rutherford** (early 1900s), through his gold-foil experiment, discovered the **nucleus**. Alpha particles were shot at a thin gold foil. Most passed through (atom is mostly empty space), but some were deflected at large angles, and a few bounced back, indicating a small, dense, positively charged nucleus.
    (Diagram: Rutherford's gold foil experiment - alpha particles, foil, detector screen, deflected paths)
*   **Niels Bohr** (1913) proposed a model where electrons orbit the nucleus in specific **energy levels** or shells. Electrons can jump to higher energy levels by absorbing energy and fall back by emitting energy (often as light). This explained the bright-line spectra of elements.
    (Diagram: Bohr model of Hydrogen - nucleus, electron orbits n=1,2,3, electron jump for emission/absorption)
*   The **Wave-Mechanical Model (Modern Model)**: Electrons do not orbit in fixed paths but exist in **orbitals**, regions of space where there is a high probability of finding an electron. This model incorporates wave-particle duality.

**Structure of the Atom**
*   **Nucleus:** Contains positively charged **protons** (+1 charge, mass ~1 amu) and neutral **neutrons** (0 charge, mass ~1 amu). The nucleus is small, dense, and positively charged.
*   **Electrons:** Negatively charged particles (-1 charge, mass ~1/1836 amu, very small) that occupy the space outside the nucleus in specific energy levels and orbitals.
    <div class="my-4 flex justify-center">
      <svg width="200" height="160" xmlns="http://www.w3.org/2000/svg" aria-label="Simplified model of an atom showing nucleus with protons and neutrons, and electrons in shells." class="inline-block p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700">
        <title>Simplified Atomic Model</title>
        <!-- Nucleus -->
        <circle cx="100" cy="80" r="20" fill="var(--color-secondary)" />
        <circle cx="95" cy="75" r="5" fill="var(--color-primary)" /> <text x="92" y="78" font-size="8" fill="white">+</text> <!-- Proton -->
        <circle cx="105" cy="75" r="5" fill="var(--color-primary)" /> <text x="102" y="78" font-size="8" fill="white">+</text> <!-- Proton -->
        <circle cx="100" cy="85" r="5" fill="var(--color-text-muted)" /> <!-- Neutron -->
        <text x="80" y="105" font-size="10" fill="var(--color-text-light)">Nucleus</text>
        
        <!-- Electron Shells & Electrons -->
        <circle cx="100" cy="80" r="40" fill="none" stroke="var(--color-border)" stroke-dasharray="2,2" />
        <circle cx="100" cy="40" r="6" fill="var(--color-accent)" /> <text x="97" y="43" font-size="8" fill="white">-</text> <!-- Electron -->
        
        <circle cx="100" cy="80" r="60" fill="none" stroke="var(--color-border)" stroke-dasharray="2,2" />
        <circle cx="40" cy="80" r="6" fill="var(--color-accent)" /> <text x="37" y="83" font-size="8" fill="white">-</text> <!-- Electron -->
        <circle cx="160" cy="80" r="6" fill="var(--color-accent)" /> <text x="157" y="83" font-size="8" fill="white">-</text> <!-- Electron -->
        
        <text x="20" y="20" font-size="12" fill="var(--color-text-muted)" class="font-semibold">Atomic Structure (Simplified)</text>
        <text x="10" y="140" font-size="10" fill="var(--color-text-muted)">Electrons (e⁻) orbit nucleus in shells.</text>
        <text x="10" y="150" font-size="10" fill="var(--color-text-muted)">Nucleus: Protons (p⁺) & Neutrons (n⁰).</text>
      </svg>
    </div>
**Bright-Line Spectra**
When atoms are excited (e.g., by heat or electricity), their electrons jump to higher energy levels. As they fall back to lower, more stable energy levels, they emit energy in the form of light. Each element emits a unique set of specific wavelengths (colors) of light, called its **bright-line spectrum** or emission spectrum. This spectrum is like a "fingerprint" for an element and provides evidence for quantized energy levels.
(Diagram: Bright-line spectrum vs continuous spectrum. Show light passing through prism. For bright-line, show discrete lines for an element like Hydrogen. For continuous, show rainbow.)`,
  practice: [
    {
      text: "1. Describe the key findings of Rutherford's gold foil experiment and how they changed the model of the atom.",
    },
    {
      text: '2. What are the three main subatomic particles, their charges, approximate masses (in amu), and locations within the atom?',
    },
    { text: '3. How does the Bohr model explain the bright-line spectrum of hydrogen?' },
  ],
  answers: [
    {
      text: "1. Key findings of Rutherford's gold foil experiment: \n    a) Most alpha particles passed straight through the gold foil, indicating that atoms are mostly empty space.\n    b) Some alpha particles were deflected at large angles, and a few bounced back, indicating a small, dense, positively charged nucleus at the center of the atom where most of the atom's mass is concentrated. \n    This disproved the plum pudding model and led to the nuclear model of the atom.",
    },
    {
      text: '2. Subatomic particles:\n    a) **Proton:** Charge: +1, Mass: ~1 amu, Location: Nucleus\n    b) **Neutron:** Charge: 0 (neutral), Mass: ~1 amu, Location: Nucleus\n    c) **Electron:** Charge: -1, Mass: ~1/1836 amu (negligible), Location: Outside the nucleus in energy levels/orbitals',
    },
    {
      text: '3. The Bohr model proposed that electrons orbit the nucleus in specific, quantized energy levels. When an electron absorbs a specific amount of energy, it jumps to a higher energy level (excited state). When it falls back to a lower energy level (ground state or another lower level), it emits that energy as a photon of light with a specific wavelength (and therefore color). Since only certain energy transitions are allowed, only specific wavelengths of light are emitted, resulting in the discrete lines observed in the bright-line spectrum of hydrogen.',
    },
  ],
};
