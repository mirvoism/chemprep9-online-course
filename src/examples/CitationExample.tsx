/**
 * Citation System Usage Example
 *
 * Demonstrates how to integrate citations with existing lesson content
 */

import React, { useState } from 'react';
import {
  Citation,
  TextWithCitation,
  MultipleCitations,
  Bibliography,
  CompactBibliography,
  CitationStats,
} from '../components/ui';

/**
 * Example enhanced lesson component with citations
 */
export const CitationExampleLesson: React.FC = () => {
  const [showFullBibliography, setShowFullBibliography] = useState(false);

  // Example citation IDs from our database
  const citationIds = [
    'nist-webbook',
    'brown-chemistry',
    'nysed-chemistry-standards',
    'nist-atomic-spectra',
    'acs-education',
  ];

  return (
    <div className="lesson-content max-w-4xl mx-auto p-6">
      {/* Lesson Header */}
      <header className="lesson-header mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Atomic Structure and Electron Configuration
        </h1>
        <p className="text-gray-600">Unit 2, Lesson 3 - Enhanced with Citations</p>
      </header>

      {/* Source Quality Overview */}
      <CitationStats citationIds={citationIds} className="mb-6" />

      {/* Main Content with Citations */}
      <div className="lesson-body prose prose-lg max-w-none">
        <h2>Learning Objectives</h2>
        <ul>
          <li>
            <Citation citationId="nysed-chemistry-standards" displayType="parenthetical">
              Understand the arrangement of electrons in atoms
            </Citation>
          </li>
          <li>
            <TextWithCitation
              text="Apply electron configuration rules to predict chemical behavior"
              citationId="brown-chemistry"
              index={2}
            />
          </li>
        </ul>

        <h2>Key Concepts</h2>

        <h3>Electron Configuration</h3>
        <p>
          <MultipleCitations
            citationIds={['nist-atomic-spectra', 'brown-chemistry']}
            startIndex={3}
          >
            Electrons in atoms occupy specific energy levels and orbitals according to
            well-established principles.
          </MultipleCitations>{' '}
          <Citation citationId="nist-webbook" index={5}>
            The NIST Atomic Spectra Database provides authoritative data on electron energy levels
            for all elements.
          </Citation>
        </p>

        <h3>Aufbau Principle</h3>
        <p>
          <Citation citationId="brown-chemistry" index={6}>
            Electrons fill orbitals starting with the lowest energy level first, following the
            Aufbau principle.
          </Citation>
          This fundamental rule helps predict the chemical properties of elements.
        </p>

        <div className="practice-problem bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <h4 className="font-semibold mb-2">Practice Problem</h4>
          <p>
            <Citation citationId="brown-chemistry" index={7}>
              Write the electron configuration for oxygen (atomic number 8).
            </Citation>
          </p>
          <details className="mt-2">
            <summary className="cursor-pointer font-medium">Show Answer</summary>
            <p className="mt-2">
              <Citation citationId="nist-atomic-spectra" index={8}>
                Oxygen: 1s² 2s² 2p⁴
              </Citation>
            </p>
          </details>
        </div>
      </div>

      {/* Compact Bibliography */}
      <CompactBibliography
        citationIds={citationIds}
        title="Key Sources"
        maxItems={3}
        onViewAll={() => setShowFullBibliography(true)}
      />

      {/* Full Bibliography Modal */}
      {showFullBibliography && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-96 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Complete Bibliography</h2>
              <button
                onClick={() => setShowFullBibliography(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="overflow-y-auto max-h-80 p-4">
              <Bibliography
                citationIds={citationIds}
                title=""
                showSections={true}
                format="academic"
                showReliability={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Simple integration example showing how to add citations to existing content
 */
export const SimpleCitationIntegration: React.FC = () => {
  return (
    <div className="simple-example p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Before and After Citation Integration</h2>

      {/* Before: Plain text */}
      <div className="example-section mb-6">
        <h3 className="text-lg font-semibold mb-2 text-red-600">❌ Before (No Citations)</h3>
        <div className="bg-red-50 border border-red-200 rounded p-4">
          <p>
            Water has a boiling point of 100°C at standard atmospheric pressure. This property is
            important for many chemical processes.
          </p>
        </div>
      </div>

      {/* After: With citations */}
      <div className="example-section mb-6">
        <h3 className="text-lg font-semibold mb-2 text-green-600">✅ After (With Citations)</h3>
        <div className="bg-green-50 border border-green-200 rounded p-4">
          <p>
            <Citation citationId="nist-webbook" index={1}>
              Water has a boiling point of 100°C at standard atmospheric pressure.
            </Citation>{' '}
            <Citation citationId="brown-chemistry" index={2}>
              This property is important for many chemical processes.
            </Citation>
          </p>
        </div>
      </div>

      {/* Implementation code */}
      <div className="code-example">
        <h3 className="text-lg font-semibold mb-2">Implementation Code</h3>
        <pre className="bg-gray-100 border rounded p-4 text-sm overflow-x-auto">
          {`<Citation citationId="nist-webbook" index={1}>
  Water has a boiling point of 100°C at standard atmospheric pressure.
</Citation>
{' '}
<Citation citationId="brown-chemistry" index={2}>
  This property is important for many chemical processes.
</Citation>`}
        </pre>
      </div>
    </div>
  );
};
