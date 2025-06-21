/**
 * Citation Component
 *
 * React component for displaying inline citations with tooltips
 * and various display formats
 */

import React, { useState } from 'react';
import { getCitation } from '../../data/citations/citationDatabase';
import { CitationFormatters } from '../../utils/citationManager';

export interface CitationProps {
  /** Citation ID to display */
  citationId: string;

  /** Content to wrap with citation */
  children: React.ReactNode;

  /** Display style for the citation */
  displayType?: 'inline' | 'superscript' | 'parenthetical';

  /** Whether to show tooltip on hover */
  showTooltip?: boolean;

  /** Citation index for superscript display */
  index?: number;

  /** Custom CSS classes */
  className?: string;
}

/**
 * Citation component for displaying cited content
 */
export const Citation: React.FC<CitationProps> = ({
  citationId,
  children,
  displayType = 'superscript',
  showTooltip = true,
  index = 1,
  className = '',
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const citation = getCitation(citationId);

  if (!citation) {
    console.warn(`Citation not found: ${citationId}`);
    return <span className={className}>{children}</span>;
  }

  const renderCitationMarker = () => {
    switch (displayType) {
      case 'inline':
        return (
          <span className="citation-inline text-blue-600 text-sm">
            {' '}
            {CitationFormatters.formatInline(citationId)}
          </span>
        );

      case 'parenthetical':
        return (
          <span className="citation-parenthetical text-blue-600 text-sm">
            {' '}
            ({CitationFormatters.formatInline(citationId)})
          </span>
        );

      case 'superscript':
      default:
        return (
          <sup className="citation-superscript text-blue-600 text-xs cursor-pointer hover:text-blue-800">
            {CitationFormatters.formatSuperscript(citationId, index)}
          </sup>
        );
    }
  };

  

  return (
    <span
      className={`citation-wrapper relative ${className}`}
      onMouseEnter={() => showTooltip && setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      {children}
      {renderCitationMarker()}

      {/* Tooltip */}
      {showTooltip && isTooltipVisible && (
        <div className="citation-tooltip absolute z-50 bg-gray-900 text-white text-sm p-3 rounded-lg shadow-lg max-w-md -top-2 left-0 transform -translate-y-full">
          <div className="font-medium mb-1">{citation.title}</div>
          <div className="text-gray-300 text-xs">
            {citation.authors?.join(', ') || citation.publisher}
            {citation.year && ` (${citation.year})`}
          </div>
          {citation.reliability && (
            <div className="flex items-center mt-2">
              <span className="text-xs text-gray-400 mr-2">Reliability:</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    className={`text-xs ${
                      star <= citation.reliability! ? 'text-yellow-400' : 'text-gray-600'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tooltip arrow */}
          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </span>
  );
};

/**
 * Simple text citation component for plain text with citation
 */
export interface TextWithCitationProps {
  /** Text content */
  text: string;

  /** Citation ID */
  citationId: string;

  /** Display type */
  displayType?: 'inline' | 'superscript' | 'parenthetical';

  /** Whether to show tooltip */
  showTooltip?: boolean;

  /** Citation index */
  index?: number;
}

export const TextWithCitation: React.FC<TextWithCitationProps> = ({
  text,
  citationId,
  displayType = 'superscript',
  showTooltip = true,
  index = 1,
}) => {
  return (
    <Citation
      citationId={citationId}
      displayType={displayType}
      showTooltip={showTooltip}
      index={index}
    >
      {text}
    </Citation>
  );
};

/**
 * Multiple citations component for content with multiple sources
 */
export interface MultipleCitationsProps {
  /** Content to cite */
  children: React.ReactNode;

  /** Array of citation IDs */
  citationIds: string[];

  /** Display type */
  displayType?: 'inline' | 'superscript' | 'parenthetical';

  /** Whether to show tooltips */
  showTooltip?: boolean;

  /** Starting index for superscript display */
  startIndex?: number;
}

export const MultipleCitations: React.FC<MultipleCitationsProps> = ({
  children,
  citationIds,
  displayType = 'superscript',
  showTooltip = true,
  startIndex = 1,
}) => {
  if (citationIds.length === 0) {
    return <span>{children}</span>;
  }

  if (citationIds.length === 1) {
    return (
      <Citation
        citationId={citationIds[0]}
        displayType={displayType}
        showTooltip={showTooltip}
        index={startIndex}
      >
        {children}
      </Citation>
    );
  }

  // Multiple citations
  return (
    <span className="multiple-citations">
      {children}
      {displayType === 'superscript' ? (
        <sup className="text-blue-600 text-xs">
          {citationIds
            .map((id, idx) => (
              <Citation
                key={id}
                citationId={id}
                displayType="superscript"
                showTooltip={showTooltip}
                index={startIndex + idx}
              >
                {idx > 0 ? ',' : ''}
                {startIndex + idx}
              </Citation>
            ))
            .reduce(
              (prev, curr, idx) =>
                idx === 0 ? [curr] : [...prev, <span key={`sep-${idx}`}>,</span>, curr],
              [] as React.ReactNode[]
            )}
        </sup>
      ) : (
        <span className="text-blue-600 text-sm">
          {' '}
          (
          {citationIds.map((id, idx) => (
            <React.Fragment key={id}>
              {idx > 0 && '; '}
              {CitationFormatters.formatInline(id)}
            </React.Fragment>
          ))}
          )
        </span>
      )}
    </span>
  );
};

/**
 * Citation modal component for detailed citation information
 */
export interface CitationModalProps {
  citationId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({ citationId, isOpen, onClose }) => {
  const citation = getCitation(citationId);

  if (!isOpen || !citation) return null;

  return (
    <div className="citation-modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
        <div className="modal-header flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Citation Details</h2>
          <button
            onClick={onClose}
            className="close-button text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="modal-body p-6">
          {/* Citation Title */}
          <h3 className="citation-title text-lg font-semibold text-gray-800 mb-2">
            {citation.title}
          </h3>

          {/* Authors */}
          {citation.authors && citation.authors.length > 0 && (
            <div className="citation-authors mb-3">
              <span className="label font-medium text-gray-600">Authors: </span>
              <span className="text-gray-800">{citation.authors.join(', ')}</span>
            </div>
          )}

          {/* Publication Info */}
          <div className="publication-info grid grid-cols-2 gap-4 mb-4">
            {citation.year && (
              <div>
                <span className="label font-medium text-gray-600">Year: </span>
                <span className="text-gray-800">{citation.year}</span>
              </div>
            )}

            {citation.publisher && (
              <div>
                <span className="label font-medium text-gray-600">Publisher: </span>
                <span className="text-gray-800">{citation.publisher}</span>
              </div>
            )}

            {citation.edition && (
              <div>
                <span className="label font-medium text-gray-600">Edition: </span>
                <span className="text-gray-800">{citation.edition}</span>
              </div>
            )}

            {citation.doi && (
              <div>
                <span className="label font-medium text-gray-600">DOI: </span>
                <span className="text-gray-800 font-mono text-sm">{citation.doi}</span>
              </div>
            )}
          </div>

          {/* Abstract */}
          {citation.abstract && (
            <div className="citation-abstract mb-4">
              <span className="label font-medium text-gray-600 block mb-1">Abstract:</span>
              <p className="text-gray-700 text-sm leading-relaxed">{citation.abstract}</p>
            </div>
          )}

          {/* Quality Indicators */}
          <div className="quality-indicators mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-600">Source Quality</span>
              {citation.reliability && (
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span
                        key={star}
                        className={`text-lg ${
                          star <= citation.reliability! ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({citation.reliability}/5)</span>
                </div>
              )}
            </div>

            <div className="quality-badges flex flex-wrap gap-2">
              <span
                className={`badge px-2 py-1 rounded text-xs font-medium ${getTypeColor(citation.type)}`}
              >
                {getTypeLabel(citation.type)}
              </span>

              {citation.isPrimarySource && (
                <span className="badge px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                  Primary Source
                </span>
              )}

              {citation.year && new Date().getFullYear() - citation.year <= 5 && (
                <span className="badge px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                  Recent
                </span>
              )}
            </div>
          </div>

          {/* Keywords */}
          {citation.keywords && citation.keywords.length > 0 && (
            <div className="citation-keywords mb-4">
              <span className="label font-medium text-gray-600 block mb-2">Keywords:</span>
              <div className="flex flex-wrap gap-1">
                {citation.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="keyword px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Formatted Citations */}
          <div className="formatted-citations mb-4">
            <span className="label font-medium text-gray-600 block mb-2">Formatted Citations:</span>
            <div className="space-y-2">
              {(['academic', 'apa', 'mla'] as const).map(format => (
                <div key={format} className="format-example p-2 bg-gray-100 rounded text-sm">
                  <span className="format-label font-medium text-gray-600 uppercase text-xs">
                    {format}:
                  </span>
                  <div className="format-text text-gray-800 mt-1">
                    {getCitation(citationId)?.title || "Citation not found"(citation, format)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* URL */}
          {citation.url && (
            <div className="citation-url">
              <a
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View Original Source
                <span className="ml-1">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Helper functions (reusing from Bibliography component)
 */
function getTypeColor(type: string): string {
  switch (type) {
    case 'government':
    case 'nist':
      return 'bg-green-100 text-green-800';
    case 'journal':
      return 'bg-purple-100 text-purple-800';
    case 'textbook':
      return 'bg-blue-100 text-blue-800';
    case 'educational':
      return 'bg-orange-100 text-orange-800';
    case 'reference':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-600';
  }
}

function getTypeLabel(type: string): string {
  switch (type) {
    case 'government':
      return 'Government';
    case 'nist':
      return 'NIST';
    case 'journal':
      return 'Journal';
    case 'textbook':
      return 'Textbook';
    case 'educational':
      return 'Educational';
    case 'reference':
      return 'Reference';
    default:
      return 'Other';
  }
}
