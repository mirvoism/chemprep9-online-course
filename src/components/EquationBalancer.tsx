import React, { useState, useEffect, ChangeEvent } from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Import the actual useTheme

interface MoleculeCounts {
  [element: string]: number;
}

interface EquationSide {
  molecules: Array<{
    coefficient: number;
    elements: MoleculeCounts;
    originalString: string;
  }>;
}

const parseMolecule = (moleculeStr: string): MoleculeCounts => {
  const counts: MoleculeCounts = {};
  const regex = /([A-Z][a-z]*)(\d*)/g;
  let match;
  while ((match = regex.exec(moleculeStr)) !== null) {
    const element = match[1];
    const count = match[2] ? parseInt(match[2], 10) : 1;
    counts[element] = (counts[element] || 0) + count;
  }
  return counts;
};

const parseSide = (sideStr: string): EquationSide['molecules'] => {
  if (!sideStr.trim()) return [];
  return sideStr.split('+').map(term => {
    term = term.trim();
    let coefficient = 1;
    let moleculePart = term;

    const coeffMatch = term.match(/^(\d+)\s*(.*)/);
    if (coeffMatch) {
      coefficient = parseInt(coeffMatch[1], 10);
      moleculePart = coeffMatch[2].trim();
    }

    return {
      coefficient,
      elements: parseMolecule(moleculePart),
      originalString: moleculePart,
    };
  });
};

const getElementCountsForSide = (side: EquationSide['molecules']): MoleculeCounts => {
  const totalCounts: MoleculeCounts = {};
  side.forEach(molecule => {
    for (const element in molecule.elements) {
      totalCounts[element] =
        (totalCounts[element] || 0) + molecule.elements[element] * molecule.coefficient;
    }
  });
  return totalCounts;
};

const checkBalance = (
  reactants: EquationSide['molecules'],
  products: EquationSide['molecules']
): { isBalanced: boolean; details: Record<string, { reactants: number; products: number }> } => {
  const reactantCounts = getElementCountsForSide(reactants);
  const productCounts = getElementCountsForSide(products);
  const allElements = new Set([...Object.keys(reactantCounts), ...Object.keys(productCounts)]);
  let isBalanced = true;
  const details: Record<string, { reactants: number; products: number }> = {};

  allElements.forEach(element => {
    const rCount = reactantCounts[element] || 0;
    const pCount = productCounts[element] || 0;
    details[element] = { reactants: rCount, products: pCount };
    if (rCount !== pCount) {
      isBalanced = false;
    }
  });
  return { isBalanced, details };
};

interface EquationBalancerProps {
  initialEquation?: string;
}

const EquationBalancer: React.FC<EquationBalancerProps> = ({
  initialEquation = 'H2 + O2 -> H2O',
}) => {
  const [equationInput, setEquationInput] = useState<string>(initialEquation);
  const [reactants, setReactants] = useState<EquationSide['molecules']>([]);
  const [products, setProducts] = useState<EquationSide['molecules']>([]);
  const [balanceStatus, setBalanceStatus] = useState<{
    isBalanced: boolean;
    details: Record<string, { reactants: number; products: number }>;
  } | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const [reactantsStr, productsStr] = equationInput.split('->');
    if (reactantsStr && productsStr) {
      setReactants(parseSide(reactantsStr));
      setProducts(parseSide(productsStr));
    } else {
      setReactants([]);
      setProducts([]);
    }
    setBalanceStatus(null); // Reset balance status on equation change
  }, [equationInput]);

  const handleCoefficientChange = (
    side: 'reactants' | 'products',
    index: number,
    value: string
  ) => {
    const newCoeff = parseInt(value, 10);
    if (isNaN(newCoeff) && value !== '') return; // Allow empty input but not non-numeric

    const updater = side === 'reactants' ? setReactants : setProducts;
    updater(prev => {
      const newSide = [...prev];
      newSide[index] = {
        ...newSide[index],
        coefficient: isNaN(newCoeff) ? 1 : Math.max(1, newCoeff),
      }; // Default to 1 if empty or invalid
      return newSide;
    });
    setBalanceStatus(null); // Reset balance status on coefficient change
  };

  const handleEquationInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEquationInput(e.target.value);
  };

  const onCheckBalance = () => {
    setBalanceStatus(checkBalance(reactants, products));
  };

  const renderSide = (side: EquationSide['molecules'], type: 'reactants' | 'products') => (
    <div className="flex flex-wrap items-center gap-2">
      {side.map((mol, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-xl mx-1 text-text-muted">+</span>}
          <input
            type="number"
            min="1"
            value={
              mol.coefficient === 1 && reactants.length + products.length > 0 && !balanceStatus
                ? ''
                : mol.coefficient
            } // Show empty for 1 unless checked
            onChange={e => handleCoefficientChange(type, index, e.target.value)}
            className={`w-12 sm:w-16 p-1.5 border rounded text-center text-sm sm:text-base
                        ${
                          theme === 'light'
                            ? 'bg-slate-100 border-slate-300 text-slate-800 focus:ring-sky-500 focus:border-sky-500'
                            : 'bg-slate-700 border-slate-500 text-text-light focus:ring-primary focus:border-primary'
                        }`}
            aria-label={`Coefficient for ${mol.originalString}`}
          />
          <span
            className="text-sm sm:text-base text-text-light"
            dangerouslySetInnerHTML={{
              __html: mol.originalString.replace(/(\d+)/g, '<sub>$1</sub>'),
            }}
          ></span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div
      className={`p-3 sm:p-4 rounded-lg shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-card-bg text-text-light'}`}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 text-center">
        Equation Balancer
      </h3>

      <div className="mb-3 sm:mb-4">
        <label
          htmlFor="equationInput"
          className={`block text-sm font-medium mb-1 ${theme === 'light' ? 'text-slate-700' : 'text-text-muted'}`}
        >
          Enter Chemical Equation (e.g., Fe + O2 -&gt; Fe2O3)
        </label>
        <input
          type="text"
          id="equationInput"
          value={equationInput}
          onChange={handleEquationInputChange}
          className={`w-full p-2 border rounded text-sm sm:text-base
                      ${
                        theme === 'light'
                          ? 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-sky-500 focus:border-sky-500'
                          : 'bg-slate-700 border-slate-500 text-text-light focus:ring-primary focus:border-primary'
                      }`}
          placeholder="e.g., H2 + O2 -> H2O"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-around gap-2 sm:gap-4 mb-3 sm:mb-4 p-2 sm:p-3 rounded-md ${theme === 'light' ? 'bg-slate-50' : 'bg-slate-800'}">
        {renderSide(reactants, 'reactants')}
        <span className="text-2xl mx-1 sm:mx-2 text-accent font-semibold">&rarr;</span>
        {renderSide(products, 'products')}
      </div>

      <button
        onClick={onCheckBalance}
        className={`w-full sm:w-auto px-4 py-2 font-semibold rounded-md transition-colors
                    ${
                      theme === 'light'
                        ? 'bg-sky-500 hover:bg-sky-600 text-white'
                        : 'bg-primary hover:bg-primary-hover text-white'
                    }`}
      >
        Check Balance
      </button>

      {balanceStatus && (
        <div
          className={`mt-3 sm:mt-4 p-3 rounded-md text-sm sm:text-base ${balanceStatus.isBalanced ? (theme === 'light' ? 'bg-green-100 border-green-300 text-green-700' : 'bg-green-700 bg-opacity-30 border-green-500 text-green-300') : theme === 'light' ? 'bg-red-100 border-red-300 text-red-700' : 'bg-red-700 bg-opacity-30 border-red-500 text-red-300'}`}
        >
          <p className="font-semibold text-base sm:text-lg mb-2">
            {balanceStatus.isBalanced ? 'Equation is Balanced!' : 'Equation is Not Balanced.'}
          </p>
          <ul className="list-disc list-inside space-y-1">
            {Object.entries(balanceStatus.details).map(([element, counts]) => (
              <li
                key={element}
                className={
                  counts.reactants === counts.products
                    ? theme === 'light'
                      ? 'text-green-700'
                      : 'text-green-400'
                    : theme === 'light'
                      ? 'text-red-700'
                      : 'text-red-400'
                }
              >
                <strong>{element}:</strong> Reactants: {counts.reactants}, Products:{' '}
                {counts.products}
                {counts.reactants === counts.products ? ' ✔' : ' ✘'}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className={`mt-3 text-xs ${theme === 'light' ? 'text-slate-500' : 'text-text-muted'}`}>
        Note: Enter coefficients in the small boxes. The equation parser is basic and expects
        standard chemical formulas (e.g., H2O, CO2, Fe2O3).
      </p>
    </div>
  );
};

export default EquationBalancer;
