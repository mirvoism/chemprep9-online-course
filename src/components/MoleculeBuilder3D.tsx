import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Assuming ThemeContext is in src/contexts

interface MoleculeData {
  name: string;
  formula: string;
  lewisStructureText: string; // Simple textual representation
  electronDomains: number;
  bondingDomains: number;
  lonePairs: number;
  electronGeometry: string;
  molecularShape: string;
  bondAngles: string;
  isPolar: boolean;
}

const predefinedMolecules: Record<string, MoleculeData> = {
  CH4: {
    name: 'Methane',
    formula: 'CH₄',
    lewisStructureText: 'C atom central, 4 H atoms single-bonded to C. No lone pairs on C.',
    electronDomains: 4,
    bondingDomains: 4,
    lonePairs: 0,
    electronGeometry: 'Tetrahedral',
    molecularShape: 'Tetrahedral',
    bondAngles: '109.5°',
    isPolar: false,
  },
  NH3: {
    name: 'Ammonia',
    formula: 'NH₃',
    lewisStructureText: 'N atom central, 3 H atoms single-bonded to N. One lone pair on N.',
    electronDomains: 4,
    bondingDomains: 3,
    lonePairs: 1,
    electronGeometry: 'Tetrahedral',
    molecularShape: 'Trigonal Pyramidal',
    bondAngles: 'approx. 107°',
    isPolar: true,
  },
  H2O: {
    name: 'Water',
    formula: 'H₂O',
    lewisStructureText: 'O atom central, 2 H atoms single-bonded to O. Two lone pairs on O.',
    electronDomains: 4,
    bondingDomains: 2,
    lonePairs: 2,
    electronGeometry: 'Tetrahedral',
    molecularShape: 'Bent (or Angular)',
    bondAngles: 'approx. 104.5°',
    isPolar: true,
  },
  CO2: {
    name: 'Carbon Dioxide',
    formula: 'CO₂',
    lewisStructureText:
      'C atom central, double-bonded to two O atoms (O=C=O). Each O has 2 lone pairs.',
    electronDomains: 2,
    bondingDomains: 2,
    lonePairs: 0,
    electronGeometry: 'Linear',
    molecularShape: 'Linear',
    bondAngles: '180°',
    isPolar: false,
  },
  BF3: {
    name: 'Boron Trifluoride',
    formula: 'BF₃',
    lewisStructureText:
      'B atom central, 3 F atoms single-bonded to B. No lone pairs on B (B is an exception to octet rule).',
    electronDomains: 3,
    bondingDomains: 3,
    lonePairs: 0,
    electronGeometry: 'Trigonal Planar',
    molecularShape: 'Trigonal Planar',
    bondAngles: '120°',
    isPolar: false,
  },
  SO2: {
    name: 'Sulfur Dioxide',
    formula: 'SO₂',
    lewisStructureText:
      'S atom central, double-bonded to one O, single-bonded to another O (resonance structure exists). One lone pair on S. (Simplified: O=S-O with LP on S)',
    electronDomains: 3, // 2 bonding (one double, one single), 1 lone pair
    bondingDomains: 2,
    lonePairs: 1,
    electronGeometry: 'Trigonal Planar',
    molecularShape: 'Bent (or Angular)',
    bondAngles: '<120° (approx. 119°)',
    isPolar: true,
  },
  BeCl2: {
    name: 'Beryllium Chloride',
    formula: 'BeCl₂',
    lewisStructureText:
      'Be atom central, single-bonded to two Cl atoms. No lone pairs on Be (Be is an exception to octet rule).',
    electronDomains: 2,
    bondingDomains: 2,
    lonePairs: 0,
    electronGeometry: 'Linear',
    molecularShape: 'Linear',
    bondAngles: '180°',
    isPolar: false, // individual Be-Cl bonds are polar, but molecule is symmetrical
  },
  H2S: {
    name: 'Hydrogen Sulfide',
    formula: 'H₂S',
    lewisStructureText: 'S atom central, 2 H atoms single-bonded to S. Two lone pairs on S.',
    electronDomains: 4,
    bondingDomains: 2,
    lonePairs: 2,
    electronGeometry: 'Tetrahedral',
    molecularShape: 'Bent (or Angular)',
    bondAngles: '<109.5° (approx. 92°)',
    isPolar: true,
  },
  C2H4: {
    name: 'Ethene (Ethylene)',
    formula: 'C₂H₄',
    lewisStructureText: 'Two C atoms double-bonded (C=C). Each C is bonded to two H atoms.',
    electronDomains: 3, // Around each Carbon atom
    bondingDomains: 3, // Around each Carbon atom (2 C-H, 1 C=C)
    lonePairs: 0, // On Carbon atoms
    electronGeometry: 'Trigonal Planar (around each C)',
    molecularShape: 'Planar',
    bondAngles: 'approx. 120° (H-C-H and H-C=C)',
    isPolar: false,
  },
};

interface MoleculeBuilder3DProps {
  predefinedMolecule?: string; // e.g., "CH4"
}

const MoleculeBuilder3D: React.FC<MoleculeBuilder3DProps> = ({ predefinedMolecule = 'CH4' }) => {
  const [selectedMoleculeKey, setSelectedMoleculeKey] = useState<string>(
    predefinedMolecule && predefinedMolecules[predefinedMolecule] ? predefinedMolecule : 'CH4'
  );
  const { theme } = useTheme();

  const molecule = predefinedMolecules[selectedMoleculeKey];

  if (!molecule) {
    return <div className="p-4 text-red-500">Selected molecule data not found.</div>;
  }

  const selectBaseClass = `p-2 border rounded text-sm sm:text-base w-full sm:w-auto focus:ring-2 focus:outline-none`;
  const selectThemeClass =
    theme === 'light'
      ? 'bg-slate-100 border-slate-300 text-slate-800 focus:ring-sky-500 focus:border-sky-500'
      : 'bg-slate-700 border-slate-500 text-text-light focus:ring-primary focus:border-primary';

  return (
    <div
      className={`p-3 sm:p-4 rounded-lg shadow-lg ${theme === 'light' ? 'bg-white text-slate-800' : 'bg-card-bg text-text-light'}`}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 text-center">
        Molecule Information Explorer
      </h3>

      <div className="mb-4">
        <label
          htmlFor="moleculeSelect"
          className={`block text-sm font-medium mb-1 ${theme === 'light' ? 'text-slate-700' : 'text-text-muted'}`}
        >
          Select Molecule:
        </label>
        <select
          id="moleculeSelect"
          value={selectedMoleculeKey}
          onChange={e => setSelectedMoleculeKey(e.target.value)}
          className={`${selectBaseClass} ${selectThemeClass}`}
        >
          {Object.keys(predefinedMolecules).map(key => (
            <option key={key} value={key}>
              {predefinedMolecules[key].name} ({predefinedMolecules[key].formula})
            </option>
          ))}
        </select>
      </div>

      <div className={`p-3 rounded-md ${theme === 'light' ? 'bg-slate-50' : 'bg-slate-800'}`}>
        <h4 className="text-md sm:text-lg font-semibold text-accent mb-2">
          {molecule.name} ({molecule.formula})
        </h4>
        <p className="text-xs sm:text-sm mb-1">
          <strong>Lewis Structure (Conceptual):</strong> {molecule.lewisStructureText}
        </p>
        <p className="text-xs sm:text-sm mb-1">
          <strong>Total Electron Domains on Central Atom(s):</strong> {molecule.electronDomains}
        </p>
        <p className="text-xs sm:text-sm mb-1">
          <strong>Bonding Domains on Central Atom(s):</strong> {molecule.bondingDomains}
        </p>
        <p className="text-xs sm:text-sm mb-1">
          <strong>Lone Pairs on Central Atom(s):</strong> {molecule.lonePairs}
        </p>
        <p className="text-xs sm:text-sm mb-1">
          <strong>Electron Domain Geometry:</strong> {molecule.electronGeometry}
        </p>
        <p className="text-xs sm:text-sm mb-1">
          <strong>Molecular Shape (VSEPR):</strong> {molecule.molecularShape}
        </p>
        <p className="text-xs sm:text-sm mb-1">
          <strong>Approximate Bond Angles:</strong> {molecule.bondAngles}
        </p>
        <p className="text-xs sm:text-sm mb-1">
          <strong>Overall Molecular Polarity:</strong> {molecule.isPolar ? 'Polar' : 'Nonpolar'}
        </p>
      </div>

      <div
        className={`mt-3 text-xs p-2 rounded ${theme === 'light' ? 'bg-sky-50 text-sky-700' : 'bg-sky-700 bg-opacity-20 text-sky-300'}`}
      >
        <strong>Note:</strong> This is a simplified informational tool. A full 3D builder would
        allow dynamic construction and visualization. The "Lewis Structure (Conceptual)" describes
        the key features for VSEPR determination. For molecules like C₂H₄, domain counts refer to
        each central carbon.
      </div>
    </div>
  );
};

export default MoleculeBuilder3D;
