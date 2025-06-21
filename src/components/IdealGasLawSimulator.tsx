import React, { useState, useEffect, useMemo, ChangeEvent } from 'react';
import { useTheme } from '../contexts/ThemeContext';

type GasVariable = 'P' | 'V' | 'n' | 'T';

const R_L_ATM_MOL_K = 0.08206; // L·atm / (mol·K)
const R_L_KPA_MOL_K = 8.314; // L·kPa / (mol·K)

interface DaltonGas {
  id: string;
  name: string;
  partialPressure: number;
  moles?: number; // Optional for mole fraction calculation
}

// ChevronDownIcon copied from App.tsx for local use
const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-5 h-5 transition-transform duration-200 ${className || ''}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

interface GuidedProblem {
  id: string;
  title: string;
  problemText: string;
  solutionText: string;
}

const guidedProblemsList: GuidedProblem[] = [
  {
    id: 'problem1',
    title: 'Problem 1: Calculate Volume (Ideal Gas Law)',
    problemText:
      "A rigid container holds 2.0 moles of an ideal gas at a pressure of 1.5 atm and a temperature of 300 K. What is the volume of the container in Liters? Use the Ideal Gas Law simulator above (set 'Calculate: V').",
    solutionText:
      '1. Set the Ideal Gas Law simulator to:\n   - Calculate: V\n   - Pressure (P): 1.5 atm\n   - Moles (n): 2.0 mol\n   - Temperature (T): 300 K\n2. The simulator uses PV=nRT, so V = nRT/P.\n3. With R = 0.08206 L·atm/(mol·K):\n   V = (2.0 mol * 0.08206 L·atm/(mol·K) * 300 K) / 1.5 atm\n   V ≈ 32.824 L. The simulator should display this value.',
  },
  {
    id: 'problem2',
    title: 'Problem 2: Calculate Temperature (Ideal Gas Law)',
    problemText:
      "You have 0.5 moles of an ideal gas in a 10.0 L container. If the pressure is measured to be 120 kPa, what is the temperature of the gas in Kelvin? Use the Ideal Gas Law simulator above (set 'Calculate: T' and ensure pressure unit is kPa).",
    solutionText:
      '1. Set the Ideal Gas Law simulator to:\n   - Calculate: T\n   - Pressure Unit: kPa\n   - Pressure (P): 120 kPa\n   - Volume (V): 10.0 L\n   - Moles (n): 0.5 mol\n2. The simulator uses PV=nRT, so T = PV/(nR).\n3. With R = 8.314 L·kPa/(mol·K):\n   T = (120 kPa * 10.0 L) / (0.5 mol * 8.314 L·kPa/(mol·K))\n   T ≈ 288.67 K. The simulator should display this value.',
  },
  {
    id: 'problem3',
    title: "Problem 3: Total Pressure (Dalton's Law)",
    problemText:
      "A gas mixture contains Nitrogen gas with a partial pressure of 0.7 atm and Oxygen gas with a partial pressure of 0.3 atm. What is the total pressure of the gas mixture? Use the Dalton's Law simulator above.",
    solutionText:
      "1. In the Dalton's Law section, ensure the 'Pressure Unit for Mixture' is 'atm'.\n2. Configure two gases:\n   - Gas 1: Name = Nitrogen, Partial Pressure = 0.7 atm\n   - Gas 2: Name = Oxygen, Partial Pressure = 0.3 atm\n   (Remove or set other gas components to 0 partial pressure if they exist).\n3. The 'Total Pressure (Ptotal)' displayed will be the sum.\n   P_total = P_Nitrogen + P_Oxygen = 0.7 atm + 0.3 atm = 1.0 atm.",
  },
];

const IdealGasLawSimulator: React.FC = () => {
  const { theme } = useTheme();
  // --- Ideal Gas Law State ---
  const [pressure, setPressure] = useState<number>(1); // atm
  const [volume, setVolume] = useState<number>(22.4); // L
  const [moles, setMoles] = useState<number>(1); // mol
  const [temperature, setTemperature] = useState<number>(273.15); // K

  const [pressureUnit, setPressureUnit] = useState<'atm' | 'kPa'>('atm');
  const [calculateVar, setCalculateVar] = useState<GasVariable>('P');

  const R = useMemo(() => (pressureUnit === 'atm' ? R_L_ATM_MOL_K : R_L_KPA_MOL_K), [pressureUnit]);

  // --- Dalton's Law State ---
  const [daltonGases, setDaltonGases] = useState<DaltonGas[]>([
    { id: 'gas1', name: 'Gas 1', partialPressure: 0.6 },
    { id: 'gas2', name: 'Gas 2', partialPressure: 0.4 },
  ]);
  const [daltonPressureUnitLocal, setDaltonPressureUnitLocal] = useState<'atm' | 'kPa'>('atm');

  const totalDaltonPressure = useMemo(() => {
    return daltonGases.reduce((sum, gas) => sum + gas.partialPressure, 0);
  }, [daltonGases]);

  useEffect(() => {
    // Recalculate for Ideal Gas Law
    let newPressure = pressure,
      newVolume = volume,
      newMoles = moles,
      newTemperature = temperature;

    if (calculateVar === 'P') {
      newPressure = parseFloat(((moles * R * temperature) / volume).toFixed(3));
      if (!isNaN(newPressure)) setPressure(newPressure);
    } else if (calculateVar === 'V') {
      newVolume = parseFloat(((moles * R * temperature) / pressure).toFixed(3));
      if (!isNaN(newVolume) && newVolume > 0) setVolume(newVolume);
      else if (isNaN(newVolume) && pressure !== 0) setVolume(0.001);
    } else if (calculateVar === 'n') {
      newMoles = parseFloat(((pressure * volume) / (R * temperature)).toFixed(3));
      if (!isNaN(newMoles) && newMoles > 0) setMoles(newMoles);
      else if (isNaN(newMoles) && temperature !== 0) setMoles(0.001);
    } else if (calculateVar === 'T') {
      newTemperature = parseFloat(((pressure * volume) / (moles * R)).toFixed(3));
      if (!isNaN(newTemperature) && newTemperature > 0) setTemperature(newTemperature);
      else if (isNaN(newTemperature) && moles !== 0) setTemperature(0.001);
    }
  }, [pressure, volume, moles, temperature, R, calculateVar, pressureUnit]); // Adjusted dependencies

  const handleInputChange = (variable: GasVariable, value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue) && value !== '' && value !== '-' && value !== '.') return;

    switch (variable) {
      case 'P':
        setPressure(numValue);
        break;
      case 'V':
        setVolume(value === '' ? 0.001 : Math.max(0.001, numValue));
        break;
      case 'n':
        setMoles(value === '' ? 0.001 : Math.max(0.001, numValue));
        break;
      case 'T':
        setTemperature(value === '' ? 0.001 : Math.max(0.001, numValue));
        break;
    }
  };

  const handlePressureUnitChange = (unit: 'atm' | 'kPa') => {
    if (unit === pressureUnit) return;

    setPressure(prevP => {
      let convertedP = prevP;
      if (unit === 'kPa' && pressureUnit === 'atm') {
        convertedP = prevP * 101.325;
      } else if (unit === 'atm' && pressureUnit === 'kPa') {
        convertedP = prevP / 101.325;
      }
      return parseFloat(convertedP.toFixed(3));
    });
    setPressureUnit(unit);
  };

  const handleDaltonGasChange = (
    index: number,
    field: 'name' | 'partialPressure',
    value: string | number
  ) => {
    const newGases = [...daltonGases];
    if (field === 'partialPressure') {
      const numValue = parseFloat(value as string);
      newGases[index].partialPressure = isNaN(numValue) ? 0 : Math.max(0, numValue);
    } else {
      newGases[index].name = value as string;
    }
    setDaltonGases(newGases);
  };

  const addDaltonGas = () => {
    setDaltonGases([
      ...daltonGases,
      {
        id: `gas${daltonGases.length + 1}`,
        name: `Gas ${daltonGases.length + 1}`,
        partialPressure: 0,
      },
    ]);
  };

  const removeDaltonGas = (index: number) => {
    if (daltonGases.length > 1) {
      setDaltonGases(daltonGases.filter((_, i) => i !== index));
    }
  };

  const handleDaltonPressureUnitChange = (unit: 'atm' | 'kPa') => {
    if (unit === daltonPressureUnitLocal) return;
    setDaltonGases(prevGases =>
      prevGases.map(gas => {
        let newPP = gas.partialPressure;
        if (unit === 'kPa' && daltonPressureUnitLocal === 'atm') {
          newPP = gas.partialPressure * 101.325;
        } else if (unit === 'atm' && daltonPressureUnitLocal === 'kPa') {
          newPP = gas.partialPressure / 101.325;
        }
        return { ...gas, partialPressure: parseFloat(newPP.toFixed(3)) };
      })
    );
    setDaltonPressureUnitLocal(unit);
  };

  // --- Guided Problems State ---
  const [openProblemId, setOpenProblemId] = useState<string | null>(null);

  const toggleProblem = (problemId: string) => {
    setOpenProblemId(prevId => (prevId === problemId ? null : problemId));
  };

  const particleCount = Math.min(50, Math.max(5, Math.round(moles * 10)));
  const containerWidth = 200;
  const containerHeight = Math.max(50, Math.min(200, volume * 5));
  const animationDuration = Math.max(0.5, 4 - temperature / 100) + 's';

  const inputBaseClass = 'w-full p-2 border rounded text-sm focus:ring-2 focus:outline-none';
  const inputThemeClass =
    theme === 'light'
      ? 'bg-slate-100 border-slate-300 text-slate-800 focus:ring-sky-500 focus:border-sky-500'
      : 'bg-slate-700 border-slate-500 text-text-light focus:ring-primary focus:border-primary';
  const labelBaseClass = `block text-xs font-medium mb-1 ${theme === 'light' ? 'text-slate-600' : 'text-text-muted'}`;
  const buttonBaseClass = `px-3 py-1.5 text-xs sm:text-sm rounded-md transition-colors`;

  return (
    <div
      className={`p-3 sm:p-4 rounded-lg shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-card-bg text-text-light'}`}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4 text-center">
        Ideal Gas Law Simulator (PV=nRT)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-6">
        {/* Controls for Ideal Gas Law */}
        <div className="space-y-3 p-3 rounded-md border border-border-color">
          <div>
            <label className={labelBaseClass}>Calculate:</label>
            <div className="flex space-x-2">
              {(['P', 'V', 'n', 'T'] as GasVariable[]).map(v => (
                <button
                  key={v}
                  onClick={() => setCalculateVar(v)}
                  className={`${buttonBaseClass} ${calculateVar === v ? (theme === 'light' ? 'bg-sky-500 text-white' : 'bg-primary text-white') : theme === 'light' ? 'bg-slate-200 hover:bg-slate-300 text-slate-700' : 'bg-slate-600 hover:bg-slate-500 text-text-light'}`}
                  aria-pressed={calculateVar === v}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="pressure" className={labelBaseClass}>
              Pressure (P)
            </label>
            <div className="flex">
              <input
                type="number"
                id="pressure"
                value={isNaN(pressure) ? '' : pressure}
                onChange={e => handleInputChange('P', e.target.value)}
                disabled={calculateVar === 'P'}
                className={`${inputBaseClass} ${inputThemeClass} rounded-r-none`}
                step="any"
              />
              <select
                value={pressureUnit}
                onChange={e => handlePressureUnitChange(e.target.value as 'atm' | 'kPa')}
                className={`${inputBaseClass} ${inputThemeClass} rounded-l-none w-auto`}
              >
                <option value="atm">atm</option>
                <option value="kPa">kPa</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="volume" className={labelBaseClass}>
              Volume (V) in Liters
            </label>
            <input
              type="number"
              id="volume"
              value={isNaN(volume) ? '' : volume}
              onChange={e => handleInputChange('V', e.target.value)}
              disabled={calculateVar === 'V'}
              className={`${inputBaseClass} ${inputThemeClass}`}
              step="any"
            />
          </div>
          <div>
            <label htmlFor="moles" className={labelBaseClass}>
              Moles (n) in mol
            </label>
            <input
              type="number"
              id="moles"
              value={isNaN(moles) ? '' : moles}
              onChange={e => handleInputChange('n', e.target.value)}
              disabled={calculateVar === 'n'}
              className={`${inputBaseClass} ${inputThemeClass}`}
              step="any"
            />
          </div>
          <div>
            <label htmlFor="temperature" className={labelBaseClass}>
              Temperature (T) in Kelvin
            </label>
            <input
              type="number"
              id="temperature"
              value={isNaN(temperature) ? '' : temperature}
              onChange={e => handleInputChange('T', e.target.value)}
              disabled={calculateVar === 'T'}
              className={`${inputBaseClass} ${inputThemeClass}`}
              step="any"
            />
          </div>
          <p className="text-xs text-text-muted mt-2">
            Using R = {R.toFixed(5)} L·{pressureUnit}/(mol·K)
          </p>
        </div>

        {/* Visualization for Ideal Gas Law */}
        <div className="flex flex-col items-center justify-center p-3 border border-border-color rounded-md min-h-[200px]">
          <p className="text-sm text-text-muted mb-2">Conceptual Gas Container</p>
          <div
            style={{
              width: `${containerWidth}px`,
              height: `${containerHeight}px`,
              backgroundColor: theme === 'light' ? '#e0f2fe' : '#334155',
              border: `2px solid ${theme === 'light' ? '#0ea5e9' : 'var(--color-primary)'}`,
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '4px',
            }}
            role="img"
            aria-label={`Gas container with ${particleCount} particles. Volume conceptually represented by height. Particle speed conceptually represents temperature.`}
          >
            {Array.from({ length: particleCount }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  backgroundColor: theme === 'light' ? '#38bdf8' : 'var(--color-accent)',
                  borderRadius: '50%',
                  animation: `move ${animationDuration} infinite alternate ease-in-out`,
                  left: `${Math.random() * (containerWidth - 6)}px`,
                  top: `${Math.random() * (containerHeight - 6)}px`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
          <style>
            {`
              @keyframes move {
                0% { transform: translate(${Math.random() * 5 - 2.5}px, ${Math.random() * 5 - 2.5}px); }
                100% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
              }
            `}
          </style>
          <div className="mt-2 text-xs text-text-muted text-center">
            Particle count ~ moles. Container height ~ volume. Particle speed ~ temperature.
          </div>
        </div>
      </div>
      <p className={`mb-6 text-xs ${theme === 'light' ? 'text-slate-500' : 'text-text-muted'}`}>
        Adjust any three known variables (P, V, n, T) and set the fourth to "Calculate" mode to see
        the result. Ensure temperature is in Kelvin. Values are dynamically calculated.
      </p>

      {/* Dalton's Law Section */}
      <div className="mt-6 pt-4 border-t border-border-color">
        <h4 className="text-md sm:text-lg font-semibold text-primary mb-3 text-center">
          Dalton's Law of Partial Pressures
        </h4>
        <div className="space-y-3 p-3 rounded-md border border-border-color">
          <div className="flex items-center mb-2">
            <label className={`${labelBaseClass} mr-2`}>Pressure Unit for Mixture:</label>
            <select
              value={daltonPressureUnitLocal}
              onChange={e => handleDaltonPressureUnitChange(e.target.value as 'atm' | 'kPa')}
              className={`${inputBaseClass} ${inputThemeClass} w-auto`}
            >
              <option value="atm">atm</option>
              <option value="kPa">kPa</option>
            </select>
          </div>
          {daltonGases.map((gas, index) => (
            <div
              key={gas.id}
              className="flex flex-col sm:flex-row items-center gap-2 mb-2 p-2 rounded bg-opacity-50 dark:bg-opacity-10"
              style={{
                backgroundColor:
                  theme === 'light' ? 'rgba(200,200,255,0.1)' : 'rgba(255,255,255,0.05)',
              }}
            >
              <input
                type="text"
                value={gas.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleDaltonGasChange(index, 'name', e.target.value)
                }
                className={`${inputBaseClass} ${inputThemeClass} sm:w-1/3`}
                aria-label={`Name for gas ${index + 1}`}
              />
              <div className="flex w-full sm:w-2/3">
                <input
                  type="number"
                  value={isNaN(gas.partialPressure) ? '' : gas.partialPressure}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleDaltonGasChange(index, 'partialPressure', e.target.value)
                  }
                  className={`${inputBaseClass} ${inputThemeClass} rounded-r-none`}
                  aria-label={`Partial pressure for ${gas.name}`}
                  step="any"
                />
                <span
                  className={`p-2 border rounded-r-md text-sm ${theme === 'light' ? 'bg-slate-200 border-slate-300 text-slate-700' : 'bg-slate-600 border-slate-500 text-text-light'}`}
                >
                  {daltonPressureUnitLocal}
                </span>
              </div>
              {daltonGases.length > 1 && (
                <button
                  onClick={() => removeDaltonGas(index)}
                  className={`${buttonBaseClass} bg-red-500 hover:bg-red-600 text-white`}
                  aria-label={`Remove ${gas.name}`}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            onClick={addDaltonGas}
            className={`${buttonBaseClass} ${theme === 'light' ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-success hover:bg-green-700 text-white'}`}
          >
            Add Gas Component
          </button>
          <div
            className={`mt-3 p-2 rounded ${theme === 'light' ? 'bg-slate-100' : 'bg-slate-700'}`}
          >
            <strong>
              Total Pressure (P<sub>total</sub>):
            </strong>{' '}
            {totalDaltonPressure.toFixed(3)} {daltonPressureUnitLocal}
          </div>
        </div>
        <p className={`mt-3 text-xs ${theme === 'light' ? 'text-slate-500' : 'text-text-muted'}`}>
          Enter the partial pressure for each gas in the mixture. The total pressure is calculated.
          Units can be converted.
        </p>
      </div>

      {/* Guided Problems Section */}
      <div className="mt-8 pt-4 border-t border-border-color">
        <h4 className="text-md sm:text-lg font-semibold text-primary mb-3 text-center">
          Guided Problems & Scenarios
        </h4>
        <div className="space-y-2">
          {guidedProblemsList.map(problem => (
            <div
              key={problem.id}
              className={`rounded-lg overflow-hidden shadow ${theme === 'light' ? 'bg-slate-50' : 'bg-slate-800'}`}
            >
              <button
                onClick={() => toggleProblem(problem.id)}
                className={`w-full flex justify-between items-center p-3 text-left font-semibold
                            ${theme === 'light' ? 'text-slate-700 hover:bg-slate-100' : 'text-text-light hover:bg-slate-700'}
                            transition-colors`}
                aria-expanded={openProblemId === problem.id}
                aria-controls={`solution-${problem.id}`}
              >
                <span>{problem.title}</span>
                <ChevronDownIcon
                  className={`${openProblemId === problem.id ? 'rotate-180' : ''}`}
                />
              </button>
              {openProblemId === problem.id && (
                <div
                  id={`solution-${problem.id}`}
                  className={`p-3 border-t ${theme === 'light' ? 'border-slate-200 text-slate-600' : 'border-slate-700 text-text-muted'} text-sm space-y-2`}
                >
                  <p className="font-medium ${theme === 'light' ? 'text-slate-700' : 'text-text-light'}">
                    Problem:
                  </p>
                  <p className="whitespace-pre-wrap">{problem.problemText}</p>
                  <p className="font-medium mt-2 ${theme === 'light' ? 'text-slate-700' : 'text-text-light'}">
                    Solution & Steps:
                  </p>
                  <p className="whitespace-pre-wrap">{problem.solutionText}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdealGasLawSimulator;
