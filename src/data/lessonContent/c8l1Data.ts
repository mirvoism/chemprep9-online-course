import { Lesson } from '../../../types';

export const c8l1Data: Lesson = {
  id: 'C8L1',
  unit: 8,
  title: 'Reaction Rates & Collision Theory',
  objectives: [
    'Define reaction rate and identify factors affecting it.',
    'Explain collision theory: effective collisions, activation energy.',
    'Interpret potential energy diagrams.',
  ],
  labMinutes: 40,
  narrative: `**What is Reaction Rate?**
The **reaction rate** is a measure of how quickly reactants are converted into products, or how quickly products are formed. It can be expressed as the change in concentration of a reactant or product per unit of time (e.g., mol/L·s or M/s).

**Collision Theory**
For a chemical reaction to occur, reactant particles (atoms, ions, or molecules) must collide. However, not all collisions result in a reaction. An **effective collision** is one that leads to the formation of products. For a collision to be effective, two conditions must be met:
1.  **Correct Orientation:** The colliding particles must be oriented in space in a way that allows bonds to break and new bonds to form.
2.  **Sufficient Activation Energy:** The colliding particles must possess a minimum amount of kinetic energy, known as the **activation energy (Ea)**. This energy is required to overcome the repulsive forces between electron clouds and to break existing bonds.

<svg width="400" height="280" xmlns="http://www.w3.org/2000/svg" aria-labelledby="collision-theory-title-c8l1" class="mx-auto my-4 p-2 border border-border-color rounded bg-card-bg dark:bg-slate-700 text-xs sm:text-sm">
  <title id="collision-theory-title-c8l1">Diagram illustrating effective versus ineffective molecular collisions for a reaction A + B₂ → AB + B.</title>
  <defs>
    <circle id="atomA-c8l1" r="10" fill="var(--color-primary)" />
    <circle id="atomB-c8l1" r="12" fill="var(--color-accent)" />
    <g id="moleculeB2-c8l1">
      <use href="#atomB-c8l1" x="0" y="0"/>
      <use href="#atomB-c8l1" x="22" y="0"/>
      <line x1="5" y1="0" x2="17" y2="0" stroke="var(--color-text-muted)" stroke-width="2"/>
    </g>
    <g id="moleculeAB-c8l1">
      <use href="#atomA-c8l1" x="0" y="0"/>
      <use href="#atomB-c8l1" x="20" y="0"/>
      <line x1="5" y1="0" x2="15" y2="0" stroke="var(--color-text-muted)" stroke-width="2"/>
    </g>
    <marker id="arrowHead-c8l1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
  </defs>
  
  <!-- Ineffective Collision - Incorrect Orientation -->
  <text x="200" y="30" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)" class="font-semibold">Ineffective Collision (Wrong Orientation)</text>
  <use href="#atomA-c8l1" x="100" y="60"/>
  <use href="#moleculeB2-c8l1" x="180" y="60" transform="rotate(90 191 60)"/>
  <line x1="115" y1="60" x2="175" y2="60" stroke="var(--color-danger)" stroke-width="2" marker-end="url(#arrowHead-c8l1)" stroke-dasharray="3,3"/>
  <text x="250" y="65" font-size="inherit" fill="var(--color-danger)">A + B₂ → No Reaction</text>
  <text x="200" y="85" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">(Particles bounce apart)</text>

  <!-- Ineffective Collision - Insufficient Energy -->
  <text x="200" y="125" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)" class="font-semibold">Ineffective Collision (Low Energy)</text>
  <use href="#atomA-c8l1" x="100" y="155"/>
  <use href="#moleculeB2-c8l1" x="180" y="155"/>
  <line x1="115" y1="155" x2="175" y2="155" stroke="var(--color-danger)" stroke-width="1.5" marker-end="url(#arrowHead-c8l1)" stroke-dasharray="5,5" />
  <text x="250" y="160" font-size="inherit" fill="var(--color-danger)">A + B₂ → No Reaction</text>
  <text x="200" y="180" text-anchor="middle" font-size="0.9em" fill="var(--color-text-muted)">(Particles bounce apart)</text>
  
  <!-- Effective Collision -->
  <text x="200" y="215" text-anchor="middle" font-size="inherit" fill="var(--color-text-muted)" class="font-semibold">Effective Collision (Correct Orientation & Sufficient Energy)</text>
  <use href="#atomA-c8l1" x="60" y="245"/>
  <use href="#moleculeB2-c8l1" x="140" y="245"/>
  <line x1="75" y1="245" x2="135" y2="245" stroke="var(--color-success)" stroke-width="2.5" marker-end="url(#arrowHead-c8l1)"/>
  <g transform="translate(220, 245)">
    <use href="#moleculeAB-c8l1" />
    <text x="45" y="3" font-size="inherit" fill="var(--color-text-muted)">+</text>
    <use href="#atomB-c8l1" x="55" y="0"/>
  </g>
  <text x="300" y="250" font-size="inherit" fill="var(--color-success)">AB + B (Products Formed!)</text>
</svg>

**Factors Affecting Reaction Rate**
Several factors can influence the rate of a chemical reaction by affecting the frequency or effectiveness of collisions:
1.  **Nature of Reactants:** Some substances are inherently more reactive than others due to their chemical structure and bond strengths. Reactions involving ionic species tend to be faster than those involving molecular compounds, especially if covalent bonds must be broken.
2.  **Concentration:** Increasing the concentration of reactants leads to more frequent collisions, thus increasing the reaction rate.
3.  **Surface Area:** For reactions involving solids, increasing the surface area (e.g., by grinding a solid into a powder) exposes more reactant particles to collisions, increasing the reaction rate.
4.  **Temperature:** Increasing the temperature increases the kinetic energy of particles. This leads to more frequent collisions and, more importantly, a greater proportion of collisions having energy equal to or greater than the activation energy. As a general rule, reaction rates often double for every 10°C rise in temperature.
5.  **Presence of a Catalyst:** A catalyst is a substance that increases the reaction rate without being consumed in the reaction. Catalysts provide an alternative reaction pathway with a lower activation energy.

**Activation Energy (Ea)**
The minimum amount of energy required for reactants to transform into products during a collision. It's like an energy barrier that must be overcome.

**Potential Energy Diagrams**
These diagrams illustrate the energy changes that occur during a chemical reaction.
*   The Y-axis represents potential energy.
*   The X-axis represents the reaction progress (or reaction coordinate).
*   The diagram shows the potential energy of reactants, products, and the activated complex (the unstable, high-energy arrangement of atoms at the peak of the energy barrier).
*   **Activation Energy (Ea):** The difference in energy between the reactants and the activated complex.
*   **Enthalpy Change (ΔH):** The difference in energy between products and reactants.
    *   If ΔH is negative (products have lower energy than reactants), the reaction is **exothermic** (releases heat).
    *   If ΔH is positive (products have higher energy than reactants), the reaction is **endothermic** (absorbs heat).
(More on Potential Energy Diagrams in the next lesson, C8L2)`,
  practice: [
    {
      text: '1. What are the two main conditions that must be met for a collision between reactant particles to be effective?',
    },
    {
      text: '2. Explain how increasing the temperature affects the rate of a reaction in terms of collision theory.',
    },
    {
      text: '3. If a reaction is very slow at room temperature, what does this suggest about its activation energy?',
    },
  ],
  answers: [
    {
      text: '1. For a collision to be effective, reactant particles must: \na) Collide with the **correct orientation** (proper alignment for bond breaking and forming).\nb) Collide with **sufficient energy** (equal to or greater than the activation energy).',
    },
    {
      text: '2. Increasing the temperature increases the average kinetic energy of reactant particles. This leads to:\na) More frequent collisions (particles move faster).\nb) A significantly larger proportion of collisions possessing energy equal to or greater than the activation energy, making more collisions effective.',
    },
    {
      text: '3. If a reaction is very slow at room temperature, it suggests that its activation energy (Ea) is relatively high. A high activation energy means that only a small fraction of collisions at room temperature will have enough energy to overcome the energy barrier and form products.',
    },
  ],
};
