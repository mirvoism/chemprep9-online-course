import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface TitrationPoint {
  volumeAdded: number;
  pH: number;
}

const VirtualTitration: React.FC = () => {
  const { theme } = useTheme();
  const [analyteVolume] = useState<number>(25.0); // mL, fixed for simplicity
  const [titrantIncrement] = useState<number>(1.0); // mL per addition

  const [volumeAdded, setVolumeAdded] = useState<number>(0);
  const [pH, setPH] = useState<number>(2.0); // Initial pH of strong acid analyte
  const [titrationData, setTitrationData] = useState<TitrationPoint[]>([
    { volumeAdded: 0, pH: 2.0 },
  ]);

  const equivalencePointVolume = 25.0; // mL, conceptual for a 1:1 reaction with similar concentrations
  const initialPH = 2.0;
  const equivalencePH = 7.0;
  const finalPH = 12.0;

  const simulatePHChange = (currentVolumeAdded: number): number => {
    // Simple conceptual pH curve for strong acid / strong base
    if (currentVolumeAdded < equivalencePointVolume * 0.8) {
      // Initial buffer-like region
      return initialPH + (currentVolumeAdded / (equivalencePointVolume * 0.8)) * 1.5; // Slow rise
    } else if (currentVolumeAdded < equivalencePointVolume * 0.98) {
      return (
        initialPH +
        1.5 +
        ((currentVolumeAdded - equivalencePointVolume * 0.8) / (equivalencePointVolume * 0.18)) *
          1.5
      ); // Steeper rise
    } else if (currentVolumeAdded <= equivalencePointVolume * 1.02) {
      // Equivalence point region
      return (
        initialPH +
        3.0 +
        ((currentVolumeAdded - equivalencePointVolume * 0.98) / (equivalencePointVolume * 0.04)) *
          (equivalencePH - (initialPH + 3.0))
      );
    } else if (currentVolumeAdded < equivalencePointVolume * 1.2) {
      // After equivalence
      return (
        equivalencePH +
        ((currentVolumeAdded - equivalencePointVolume * 1.02) / (equivalencePointVolume * 0.18)) *
          2.0
      );
    }
    return Math.min(
      finalPH,
      equivalencePH +
        2.0 +
        ((currentVolumeAdded - equivalencePointVolume * 1.2) / (equivalencePointVolume * 0.8)) *
          (finalPH - (equivalencePH + 2.0))
    );
  };

  const handleAddTitrant = () => {
    setVolumeAdded(prev => {
      const newVolume = prev + titrantIncrement;
      const newPH = simulatePHChange(newVolume);
      setPH(newPH);
      setTitrationData(prevData => [...prevData, { volumeAdded: newVolume, pH: newPH }]);
      return newVolume;
    });
  };

  const resetTitration = () => {
    setVolumeAdded(0);
    const initialSimPH = simulatePHChange(0);
    setPH(initialSimPH);
    setTitrationData([{ volumeAdded: 0, pH: initialSimPH }]);
  };

  // SVG Graph dimensions and scaling
  const graphWidth = 300;
  const graphHeight = 200;
  const padding = 30;
  const maxVolumeDisplay = Math.max(equivalencePointVolume * 2, volumeAdded * 1.1, 30); // Ensure graph scales
  const maxPHDisplay = 14;

  const getX = (vol: number) => padding + (vol / maxVolumeDisplay) * (graphWidth - 2 * padding);
  const getY = (currentPH: number) =>
    graphHeight - padding - (currentPH / maxPHDisplay) * (graphHeight - 2 * padding);

  const pathData = titrationData.map(p => `${getX(p.volumeAdded)},${getY(p.pH)}`).join(' L ');

  const inputBaseClass = 'w-full p-2 border rounded text-sm focus:ring-2 focus:outline-none';
  const inputThemeClass =
    theme === 'light'
      ? 'bg-slate-100 border-slate-300 text-slate-800 focus:ring-sky-500 focus:border-sky-500'
      : 'bg-slate-700 border-slate-500 text-text-light focus:ring-primary focus:border-primary';
  const labelBaseClass = `block text-xs font-medium mb-1 ${theme === 'light' ? 'text-slate-600' : 'text-text-muted'}`;
  const buttonBaseClass = `px-4 py-2 text-sm rounded-md transition-colors font-semibold`;

  return (
    <div
      className={`p-3 sm:p-4 rounded-lg shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-card-bg text-text-light'}`}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4 text-center">
        Virtual Titration Simulator
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Controls and Data */}
        <div className="space-y-4 p-3 rounded-md border border-border-color">
          <div>
            <p className={labelBaseClass}>Analyte Volume:</p>
            <p className="text-text-light">{analyteVolume.toFixed(1)} mL</p>
          </div>
          <div>
            <p className={labelBaseClass}>Titrant Added:</p>
            <p className="text-text-light">{volumeAdded.toFixed(1)} mL</p>
          </div>
          <div>
            <p className={labelBaseClass}>Current pH:</p>
            <p className="text-lg font-bold text-accent">{pH.toFixed(2)}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleAddTitrant}
              className={`${buttonBaseClass} ${theme === 'light' ? 'bg-sky-500 hover:bg-sky-600 text-white' : 'bg-primary hover:bg-primary-hover text-white'}`}
            >
              Add {titrantIncrement.toFixed(1)} mL Titrant
            </button>
            <button
              onClick={resetTitration}
              className={`${buttonBaseClass} ${theme === 'light' ? 'bg-slate-500 hover:bg-slate-600 text-white' : 'bg-secondary hover:bg-opacity-80 text-white'}`}
            >
              Reset
            </button>
          </div>
          <p className="text-xs text-text-muted mt-2">
            This is a conceptual simulation of a strong acid titrated with a strong base.
            Equivalence point is conceptually set around {equivalencePointVolume.toFixed(1)} mL.
          </p>
        </div>

        {/* Titration Curve Graph */}
        <div className="p-3 border border-border-color rounded-md flex flex-col items-center">
          <h4 className="text-md font-semibold text-accent mb-2">
            Titration Curve (pH vs. Volume Added)
          </h4>
          <svg
            width={graphWidth}
            height={graphHeight}
            aria-labelledby="titrationGraphTitle"
            role="img"
          >
            <title id="titrationGraphTitle">Graph of pH versus volume of titrant added.</title>
            {/* Y Axis (pH) */}
            <line
              x1={padding}
              y1={padding}
              x2={padding}
              y2={graphHeight - padding}
              stroke={theme === 'light' ? '#94a3b8' : 'var(--color-text-muted)'}
              strokeWidth="1"
            />
            {[0, 2, 4, 6, 7, 8, 10, 12, 14].map(phVal => (
              <g key={`phLabel-${phVal}`}>
                <text
                  x={padding - 15}
                  y={getY(phVal) + 3}
                  fontSize="8"
                  fill={theme === 'light' ? '#475569' : 'var(--color-text-muted)'}
                  textAnchor="middle"
                >
                  {phVal}
                </text>
                <line
                  x1={padding - 3}
                  y1={getY(phVal)}
                  x2={padding}
                  y2={getY(phVal)}
                  stroke={theme === 'light' ? '#cbd5e1' : 'var(--color-border)'}
                  strokeWidth="0.5"
                />
              </g>
            ))}
            <text
              x={padding - 25}
              y={graphHeight / 2}
              fontSize="10"
              fill={theme === 'light' ? '#334155' : 'var(--color-text-light)'}
              transform={`rotate(-90 ${padding - 25} ${graphHeight / 2})`}
              textAnchor="middle"
            >
              pH
            </text>

            {/* X Axis (Volume) */}
            <line
              x1={padding}
              y1={graphHeight - padding}
              x2={graphWidth - padding}
              y2={graphHeight - padding}
              stroke={theme === 'light' ? '#94a3b8' : 'var(--color-text-muted)'}
              strokeWidth="1"
            />
            {Array.from({ length: Math.floor(maxVolumeDisplay / 5) + 1 }, (_, i) => i * 5).map(
              volVal => {
                if (volVal <= maxVolumeDisplay) {
                  return (
                    <g key={`volLabel-${volVal}`}>
                      <text
                        x={getX(volVal)}
                        y={graphHeight - padding + 15}
                        fontSize="8"
                        fill={theme === 'light' ? '#475569' : 'var(--color-text-muted)'}
                        textAnchor="middle"
                      >
                        {volVal}
                      </text>
                      <line
                        x1={getX(volVal)}
                        y1={graphHeight - padding}
                        x2={getX(volVal)}
                        y2={graphHeight - padding + 3}
                        stroke={theme === 'light' ? '#cbd5e1' : 'var(--color-border)'}
                        strokeWidth="0.5"
                      />
                    </g>
                  );
                }
                return null;
              }
            )}
            <text
              x={graphWidth / 2}
              y={graphHeight - padding + 25}
              fontSize="10"
              fill={theme === 'light' ? '#334155' : 'var(--color-text-light)'}
              textAnchor="middle"
            >
              Volume Titrant Added (mL)
            </text>

            {/* Equivalence Point Line (conceptual) */}
            <line
              x1={getX(equivalencePointVolume)}
              y1={padding}
              x2={getX(equivalencePointVolume)}
              y2={graphHeight - padding}
              stroke={theme === 'light' ? '#f59e0b' : 'var(--color-accent)'}
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <text
              x={getX(equivalencePointVolume) + 5}
              y={padding + 10}
              fontSize="8"
              fill={theme === 'light' ? '#f59e0b' : 'var(--color-accent)'}
            >
              Eq. Pt.
            </text>

            {/* Titration Curve Path */}
            {titrationData.length > 1 && (
              <path
                d={`M ${pathData}`}
                stroke={theme === 'light' ? '#0ea5e9' : 'var(--color-primary)'}
                strokeWidth="2"
                fill="none"
              />
            )}
            {/* Current Point Circle */}
            {titrationData.length > 0 && (
              <circle
                cx={getX(volumeAdded)}
                cy={getY(pH)}
                r="3"
                fill={theme === 'light' ? '#ef4444' : 'var(--color-danger)'}
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VirtualTitration;
