import { Lesson } from '../../../types';

export const c8l2Data: Lesson = {
  id: 'C8L2',
  unit: 8,
  title: 'Potential Energy Diagrams & Catalysts',
  objectives: [
    'Interpret potential energy diagrams for exothermic and endothermic reactions.',
    'Identify reactants, products, activated complex, activation energy (Ea), and enthalpy change (ΔH) on a PE diagram.',
    'Explain how a catalyst affects the reaction pathway and activation energy.',
  ],
  labMinutes: 30,
  narrative: `**Review of Potential Energy Diagrams**
As introduced in C8L1, potential energy (PE) diagrams visually represent the energy changes during a chemical reaction.
*   **Y-axis:** Potential Energy (e.g., kJ/mol)
*   **X-axis:** Reaction Progress or Reaction Coordinate

Key features on a PE diagram:
*   **Reactants (R):** The starting substances, at their initial potential energy level.
*   **Products (P):** The substances formed, at their final potential energy level.
*   **Activated Complex (Transition State):** An unstable, high-energy, temporary arrangement of atoms that exists at the peak of the energy barrier. Bonds are in the process of breaking and forming.
*   **Activation Energy (Ea):** The minimum energy required to transform reactants into the activated complex. It's the energy difference between the reactants and the activated complex.
    *   **Ea (forward):** Activation energy for the forward reaction (R → P).
    *   **Ea (reverse):** Activation energy for the reverse reaction (P → R).
*   **Enthalpy Change (ΔH) or Heat of Reaction:** The net energy change for the reaction. It's the difference between the potential energy of the products and the potential energy of the reactants (ΔH = PE_products - PE_reactants).
    *   **Exothermic Reaction:** Releases energy; products have lower PE than reactants (ΔH < 0).
    *   **Endothermic Reaction:** Absorbs energy; products have higher PE than reactants (ΔH > 0).

**How Catalysts Affect Potential Energy Diagrams**
A **catalyst** is a substance that increases the rate of a chemical reaction without being consumed in the reaction itself. Catalysts achieve this by providing an **alternative reaction pathway** or mechanism that has a **lower activation energy (Ea)**.

<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg" aria-labelledby="pe-diagram-catalyst-title-c8l2" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="pe-diagram-catalyst-title-c8l2">Potential energy diagram showing activation energy for catalyzed vs uncatalyzed exothermic reaction.</title>
  
  <!-- Axes -->
  <line x1="50" y1="270" x2="380" y2="270" stroke="var(--color-text-muted)" stroke-width="1.5"/> <!-- X-axis -->
  <text x="370" y="285" font-size="inherit" fill="var(--color-text-muted)">Reaction Progress</text>
  <line x1="50" y1="270" x2="50" y2="20" stroke="var(--color-text-muted)" stroke-width="1.5"/> <!-- Y-axis -->
  <text x="30" y="30" transform="rotate(-90 30 30)" font-size="inherit" fill="var(--color-text-muted)" text-anchor="middle">Potential Energy</text>

  <!-- Reactants Level -->
  <line x1="50" y1="100" x2="90" y2="100" stroke="var(--color-text-light)" stroke-width="2"/>
  <text x="60" y="95" font-size="inherit" fill="var(--color-text-light)">Reactants (R)</text>

  <!-- Products Level (Exothermic example) -->
  <line x1="300" y1="220" x2="350" y2="220" stroke="var(--color-text-light)" stroke-width="2"/>
  <text x="310" y="215" font-size="inherit" fill="var(--color-text-light)">Products (P)</text>

  <!-- Uncatalyzed Path -->
  <path d="M 90 100 C 150 100, 150 40, 220 40 C 290 40, 290 220, 300 220" stroke="var(--color-danger)" stroke-width="2.5" fill="none"/>
  <text x="180" y="35" font-size="0.9em" fill="var(--color-danger)">Uncatalyzed Path</text>
  
  <!-- Catalyzed Path -->
  <path d="M 90 100 C 140 100, 140 70, 200 70 C 260 70, 270 220, 300 220" stroke="var(--color-success)" stroke-width="2.5" fill="none" stroke-dasharray="4,4"/>
  <text x="160" y="65" font-size="0.9em" fill="var(--color-success)">Catalyzed Path</text>

  <!-- Activation Energy - Uncatalyzed -->
  <line x1="90" y1="100" x2="90" y2="40" stroke="var(--color-danger)" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="90" y1="40" x2="220" y2="40" stroke="var(--color-danger)" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="155" y1="100" x2="155" y2="40" stroke="var(--color-danger)" stroke-width="1" marker-start="url(#arrowEndPE-c8l2)" marker-end="url(#arrowStartPE-c8l2)" />
  <text x="160" y="70" font-size="0.8em" fill="var(--color-danger)">Ea (uncatalyzed)</text>
  <text x="210" y="30" font-size="0.8em" fill="var(--color-danger)">Activated Complex (Uncat.)</text>

  <!-- Activation Energy - Catalyzed -->
  <line x1="90" y1="100" x2="90" y2="70" stroke="var(--color-success)" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="90" y1="70" x2="200" y2="70" stroke="var(--color-success)" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="145" y1="100" x2="145" y2="70" stroke="var(--color-success)" stroke-width="1" marker-start="url(#arrowEndPE-c8l2)" marker-end="url(#arrowStartPE-c8l2)"/>
  <text x="100" y="80" font-size="0.8em" fill="var(--color-success)">Ea (catalyzed)</text>
  <text x="190" y="60" font-size="0.8em" fill="var(--color-success)">Activated Complex (Cat.)</text>

  <!-- Delta H -->
  <line x1="325" y1="100" x2="325" y2="220" stroke="var(--color-primary)" stroke-width="1.5" marker-start="url(#arrowEndPE-c8l2)" marker-end="url(#arrowStartPE-c8l2)"/>
  <text x="330" y="160" font-size="0.9em" fill="var(--color-primary)">ΔH</text>

  <defs>
    <marker id="arrowStartPE-c8l2" markerWidth="5" markerHeight="5" refX="0" refY="2.5" orient="auto">
      <path d="M0,0 L5,2.5 L0,5 Z" fill="currentColor"/>
    </marker>
    <marker id="arrowEndPE-c8l2" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
      <path d="M5,0 L0,2.5 L5,5 Z" fill="currentColor"/>
    </marker>
  </defs>
</svg>

**Key effects of a catalyst shown on a PE diagram:**
*   **Lowers Ea:** The peak of the energy hill (activated complex) is lower for the catalyzed pathway. This means less energy is needed for an effective collision.
*   **Does NOT change ΔH:** The catalyst does not affect the potential energy of the reactants or the products. Therefore, the overall enthalpy change (ΔH) for the reaction remains the same.
*   **May involve different intermediates:** The catalyzed pathway often involves one or more intermediate steps, which might be represented as smaller peaks and valleys on the PE diagram if the mechanism is complex. (The diagram above shows a simplified single lower peak for clarity).
*   **Increases rate of both forward and reverse reactions:** By lowering the activation energy barrier, a catalyst speeds up both the forward and reverse reactions equally. This means a catalyst helps a reversible reaction reach equilibrium faster, but it does not shift the position of equilibrium (i.e., it doesn't change the equilibrium constant Keq).

**Types of Catalysts:**
*   **Homogeneous Catalyst:** Exists in the same phase as the reactants (e.g., an acid catalyst in an aqueous solution).
*   **Heterogeneous Catalyst:** Exists in a different phase from the reactants (e.g., a solid catalyst for a gas-phase reaction, like in a catalytic converter).
*   **Enzymes:** Biological catalysts, typically proteins, that are highly specific for certain reactions in living organisms.

**Inhibitors:**
Substances that slow down reaction rates are called inhibitors. They may work by increasing activation energy, blocking active sites of catalysts, or reacting with intermediates.`,
  practice: [
    {
      text: '1. Sketch a potential energy diagram for an endothermic reaction. Label reactants, products, activated complex, Ea (forward), and ΔH.',
    },
    {
      text: '2. How does a catalyst increase the rate of a reaction? Refer to its effect on the potential energy diagram.',
    },
    {
      text: '3. Does a catalyst change the amount of product formed in a reaction at equilibrium? Explain.',
    },
  ],
  answers: [
    {
      text: "1. (Student should sketch a PE diagram where the products' energy level is higher than the reactants' energy level. All labels should be correctly placed, with Ea being the energy from reactants to the peak, and ΔH being the positive energy difference between products and reactants).",
    },
    {
      text: "2. A catalyst increases the reaction rate by providing an alternative reaction mechanism with a lower activation energy (Ea). On a potential energy diagram, this is shown as a lower 'hill' or energy barrier that reactants need to overcome to form products. With a lower Ea, more reactant molecules will have sufficient energy for effective collisions at a given temperature, leading to a faster rate.",
    },
    {
      text: '3. No, a catalyst does not change the amount of product formed in a reaction at equilibrium. A catalyst speeds up both the forward and reverse reactions equally. This means equilibrium is reached faster, but the position of equilibrium (and thus the equilibrium concentrations of reactants and products, and the equilibrium constant Keq) is not affected by the catalyst. ΔH also remains unchanged.',
    },
  ],
};
