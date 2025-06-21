import { Lesson } from '../../../types';

export const c10l1Data: Lesson = {
  id: 'C10L1',
  unit: 10,
  title: 'Redox Reactions & Oxidation Numbers',
  objectives: [
    'Define oxidation and reduction in terms of electron transfer and change in oxidation number.',
    'Assign oxidation numbers to atoms in compounds and ions.',
    'Identify the oxidizing agent and reducing agent in a redox reaction.',
  ],
  labMinutes: 40,
  narrative: `**Redox Reactions: Oxidation and Reduction**
Chemical reactions involving the transfer of electrons from one species to another are called **oxidation-reduction reactions**, or **redox reactions**.

*   **Oxidation:** The **loss** of electrons by a species. When a species is oxidized, its oxidation number **increases**.
*   **Reduction:** The **gain** of electrons by a species. When a species is reduced, its oxidation number **decreases**.

A helpful mnemonic: **OIL RIG**
*   **O**xidation **I**s **L**oss (of electrons)
*   **R**eduction **I**s **G**ain (of electrons)

Oxidation and reduction always occur together in a redox reaction. One substance cannot lose electrons unless another substance gains them.

**Oxidation Numbers (Oxidation States)**
An oxidation number is a positive or negative number assigned to an atom to indicate its degree of oxidation or reduction. It represents the hypothetical charge an atom would have if all bonds to atoms of different elements were 100% ionic.

**Rules for Assigning Oxidation Numbers:**
1.  The oxidation number of an atom in its **elemental form** is **0**. (e.g., Na(s), O₂(g), P₄(s))
2.  The oxidation number of a **monatomic ion** is equal to its **charge**. (e.g., Na⁺ is +1, Cl⁻ is -1, Al³⁺ is +3)
3.  **Oxygen** usually has an oxidation number of **-2** in compounds.
    *   Exception: In peroxides (e.g., H₂O₂, Na₂O₂), oxygen is -1. In compounds with fluorine (e.g., OF₂), oxygen can be positive.
4.  **Hydrogen** usually has an oxidation number of **+1** in compounds.
    *   Exception: In metal hydrides (e.g., NaH, CaH₂), hydrogen is -1.
5.  **Fluorine** always has an oxidation number of **-1** in compounds. Other halogens (Cl, Br, I) are usually -1, except when bonded to oxygen or a more electronegative halogen.
6.  The **sum of oxidation numbers** of all atoms in a **neutral compound** is **0**.
7.  The **sum of oxidation numbers** of all atoms in a **polyatomic ion** is equal to the **charge of the ion**.

*Example: Assign oxidation numbers in KMnO₄*
*   K (Group 1 metal) is +1.
*   O is -2. There are 4 O atoms, so total contribution is 4 * (-2) = -8.
*   Let Mn be x. The compound is neutral, so sum = 0.
    (+1) + x + (-8) = 0
    x - 7 = 0
    x = +7. So, Mn is +7.

**Identifying Redox Reactions**
A reaction is a redox reaction if there is a change in oxidation number for at least two elements in the reaction.

*Example: Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)*
*   Zn(s): Oxidation number = 0
*   Cu in CuSO₄: SO₄ is a sulfate ion with a -2 charge. So, Cu must be +2.
*   Zn in ZnSO₄: SO₄ is -2, so Zn must be +2.
*   Cu(s): Oxidation number = 0
*   **Changes:**
    *   Zn goes from 0 to +2 (Oxidation Number Increases → **Zn is oxidized**)
    *   Cu goes from +2 to 0 (Oxidation Number Decreases → **Cu²⁺ is reduced**)
This is a redox reaction.

**Oxidizing and Reducing Agents**
*   **Oxidizing Agent (Oxidant):** The substance that *causes* oxidation in another substance. The oxidizing agent itself *gets reduced* (gains electrons).
*   **Reducing Agent (Reductant):** The substance that *causes* reduction in another substance. The reducing agent itself *gets oxidized* (loses electrons).

In the example Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s):
*   Zn is oxidized (loses electrons), so **Zn is the reducing agent**.
*   Cu²⁺ (from CuSO₄) is reduced (gains electrons), so **CuSO₄ (or Cu²⁺) is the oxidizing agent**.

**Voltaic Cells (Galvanic Cells)**
A voltaic cell is an electrochemical cell that uses a spontaneous redox reaction to generate electrical energy.
(Diagram: Simple voltaic cell - Zn/Cu electrodes, salt bridge, voltmeter)
<svg width="450" height="320" xmlns="http://www.w3.org/2000/svg" aria-labelledby="voltaic-cell-title-c10l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="voltaic-cell-title-c10l1">Diagram of a simple Zinc-Copper voltaic cell.</title>
  <defs>
    <marker id="arrowHeadVC-c10l1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Anode Half-Cell (Zn) -->
  <rect x="30" y="100" width="120" height="150" rx="5" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.1"/>
  <rect x="80" y="80" width="20" height="100" fill="grey" stroke="var(--color-text-light)" stroke-width="1"/>
  <text x="85" y="75" font-size="inherit" fill="var(--color-text-light)">Zn</text>
  <text x="55" y="260" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">Anode (-)</text>
  <text x="85" y="275" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">Zn → Zn²⁺ + 2e⁻ (Oxidation)</text>
  <text x="85" y="210" font-size="0.8em" fill="var(--color-text-muted)">ZnSO₄(aq)</text>

  <!-- Cathode Half-Cell (Cu) -->
  <rect x="300" y="100" width="120" height="150" rx="5" stroke="var(--color-border)" fill="var(--color-secondary)" fill-opacity="0.1"/>
  <rect x="350" y="80" width="20" height="100" fill="orangered" stroke="var(--color-text-light)" stroke-width="1"/>
  <text x="355" y="75" font-size="inherit" fill="var(--color-text-light)">Cu</text>
  <text x="325" y="260" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">Cathode (+)</text>
  <text x="355" y="275" text-anchor="middle" font-size="0.8em" fill="var(--color-text-muted)">Cu²⁺ + 2e⁻ → Cu (Reduction)</text>
  <text x="355" y="210" font-size="0.8em" fill="var(--color-text-muted)">CuSO₄(aq)</text>

  <!-- Salt Bridge -->
  <path d="M150 120 Q 225 60, 300 120" stroke="var(--color-border)" stroke-width="15" fill="none"/>
  <path d="M150 120 Q 225 60, 300 120" stroke="var(--color-text-muted)" stroke-width="10" fill="none" stroke-dasharray="5,5"/>
  <text x="225" y="95" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">Salt Bridge (e.g., KNO₃)</text>
  <text x="180" y="115" font-size="0.8em" fill="var(--color-primary)">K⁺ →</text> <!-- Cations to Cathode -->
  <line x1="195" y1="115" x2="210" y2="110" stroke="var(--color-primary)" marker-end="url(#arrowHeadVC-c10l1)"/>
  <text x="245" y="115" font-size="0.8em" fill="var(--color-danger)">← NO₃⁻</text> <!-- Anions to Anode -->
  <line x1="255" y1="115" x2="240" y2="110" stroke="var(--color-danger)" marker-start="url(#arrowHeadVC-c10l1)"/>


  <!-- External Circuit & Voltmeter -->
  <line x1="90" y1="80" x2="90" y2="40" stroke="var(--color-text-light)" stroke-width="1.5"/>
  <line x1="90" y1="40" x2="225" y2="40" stroke="var(--color-text-light)" stroke-width="1.5"/>
  <rect x="215" y="25" width="20" height="30" rx="3" stroke="var(--color-text-light)" fill="var(--color-card-bg)"/>
  <text x="225" y="45" text-anchor="middle" font-size="0.9em" fill="var(--color-accent)">V</text>
  <line x1="225" y1="40" x2="360" y2="40" stroke="var(--color-text-light)" stroke-width="1.5"/>
  <line x1="360" y1="40" x2="360" y2="80" stroke="var(--color-text-light)" stroke-width="1.5"/>
  
  <!-- Electron Flow -->
  <text x="150" y="35" font-size="0.9em" fill="var(--color-accent)">e⁻ flow →</text>
  <line x1="140" y1="40" x2="190" y2="40" stroke="var(--color-accent)" stroke-width="1.5" marker-end="url(#arrowHeadVC-c10l1)"/>

  <text x="10" y="20" font-size="inherit" fill="var(--color-text-muted)" class="font-semibold">Simple Voltaic Cell (Zn/Cu)</text>
</svg>

This is a fundamental concept for understanding batteries and electrochemistry, which will be explored further.`,
  practice: [
    { text: '1. Define oxidation and reduction. How can you use the OIL RIG mnemonic?' },
    { text: '2. Assign oxidation numbers to each atom in the following: a) H₂S b) ClO₃⁻ c) Fe₂O₃' },
    {
      text: '3. For the reaction: Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)\n    a) Assign oxidation numbers to all elements.\n    b) Identify what is oxidized and what is reduced.\n    c) Identify the oxidizing agent and the reducing agent.',
    },
  ],
  answers: [
    {
      text: '1. **Oxidation:** Loss of electrons; oxidation number increases.\n**Reduction:** Gain of electrons; oxidation number decreases.\n**OIL RIG:** Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons).',
    },
    {
      text: "2. a) **H₂S:** H = +1 (rule 4), S = -2 (to balance 2*+1, sum = 0).\n    b) **ClO₃⁻:** O = -2 (rule 3). Total for 3 O's = -6. Ion charge = -1. So, Cl + (-6) = -1 → Cl = +5.\n    c) **Fe₂O₃:** O = -2 (rule 3). Total for 3 O's = -6. Compound is neutral. So, 2Fe + (-6) = 0 → 2Fe = +6 → Fe = +3.",
    },
    {
      text: '3. Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)\n    a) **Oxidation numbers:**\n        Mg(s): 0\n        H in HCl: +1\n        Cl in HCl: -1\n        Mg in MgCl₂: +2 (Cl is -1, so Mg must balance 2*-1)\n        Cl in MgCl₂: -1\n        H in H₂: 0\n    b) **Oxidized:** Mg (0 → +2). **Reduced:** H (+1 → 0).\n    c) **Oxidizing agent:** HCl (specifically H⁺, as it causes Mg to be oxidized and H⁺ itself is reduced).\n       **Reducing agent:** Mg (as it causes H⁺ to be reduced and Mg itself is oxidized).',
    },
  ],
};
