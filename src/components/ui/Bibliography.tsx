/**
 * Bibliography Component
 *
 * React component for displaying organized bibliographies
 * with proper formatting and sectioning
 */

import React, { useMemo } from 'react';
import { Citation, BibliographySection } from '../../types/citations';
import { CitationManager } from '../../utils/citationManager';
import { getCitation } from '../../data/citations/citationDatabase';

export interface BibliographyProps {
  citationIds: string[];
  title?: string;
  showSections?: boolean;
  format?: 'apa' | 'mla' | 'chicago' | 'academic';
  showReliability?: boolean;
  className?: string;
}

export const Bibliography: React.FC<BibliographyProps> = ({
  citationIds,
  title = 'References',
  showSections = true,
  format = 'academic',
  showReliability = true,
  className = '',
}) => {
  const sections = useMemo(() => {
    if (showSections) {
      return CitationManager.generateBibliography(citationIds);
    } else {
      const citations = citationIds
        .map(id => getCitation(id))
        .filter((citation): citation is Citation => citation !== undefined)
        .sort((a, b) => {
          const aAuthor = a.authors?.[0] || a.publisher || a.title;
          const bAuthor = b.authors?.[0] || b.publisher || b.title;
          return aAuthor.localeCompare(bAuthor);
        });

      return [
        {
          title: 'References',
          citations,
          order: 1,
        },
      ];
    }
  }, [citationIds, showSections]);

  if (citationIds.length === 0) {
    return (
      <div className={`bibliography-empty text-gray-500 text-center py-8 ${className}`}>
        No citations available
      </div>
    );
  }

  return (
    <div className={`bibliography ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
        {title}
      </h2>

      {sections.map((section, sectionIndex) => (
        <BibliographySectionComponent
          key={section.title}
          section={section}
          format={format}
          showReliability={showReliability}
          showTitle={showSections && sections.length > 1}
          startIndex={
            sectionIndex === 0
              ? 1
              : sections.slice(0, sectionIndex).reduce((sum, s) => sum + s.citations.length, 1)
          }
        />
      ))}

      <div className="bibliography-footer mt-8 pt-4 border-t border-gray-200 text-sm text-gray-600">
        <p>Total references: {citationIds.length}</p>
        {showReliability && (
          <p className="mt-1">
            Reliability indicators: ★★★★★ = Highly reliable, ★★★ = Moderately reliable, ★ = Less
            reliable
          </p>
        )}
      </div>
    </div>
  );
};

interface InternalBibliographySectionProps {
  section: BibliographySection;
  format: 'apa' | 'mla' | 'chicago' | 'academic';
  showReliability: boolean;
  showTitle: boolean;
  startIndex: number;
}

const BibliographySectionComponent: React.FC<InternalBibliographySectionProps> = ({
  section,
  format,
  showReliability,
  showTitle,
  startIndex,
}) => {
  return (
    <div className="bibliography-section mb-8">
      {showTitle && (
        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-l-4 border-blue-400 pl-3">
          {section.title}
        </h3>
      )}

      <div className="citations-list space-y-3">
        {section.citations.map((citation, index) => (
          <CitationEntry
            key={citation.id}
            citation={citation}
            format={format}
            showReliability={showReliability}
            index={startIndex + index}
          />
        ))}
      </div>
    </div>
  );
};

interface CitationEntryProps {
  citation: Citation;
  format: 'apa' | 'mla' | 'chicago' | 'academic';
  showReliability: boolean;
  index: number;
}

const CitationEntry: React.FC<CitationEntryProps> = ({
  citation,
  format,
  showReliability,
  index,
}) => {
  const formattedCitation = CitationManager.formatCitation(citation, format);
  const typeColor = getTypeColor(citation.type);
  const typeLabel = getTypeLabel(citation.type);

  return (
    <div className="citation-entry flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="citation-index flex-shrink-0 w-8 h-8 bg-blue-500 text-white text-sm font-medium rounded-full flex items-center justify-center">
        {index}
      </div>

      <div className="citation-content flex-grow">
        <div className="citation-text text-gray-800 leading-relaxed">{formattedCitation}</div>

        <div className="citation-metadata mt-2 flex items-center space-x-4 text-sm text-gray-600">
          <span className={`citation-type px-2 py-1 rounded text-xs font-medium ${typeColor}`}>
            {typeLabel}
          </span>

          {showReliability && citation.reliability && (
            <div className="reliability-score flex items-center space-x-1">
              <span className="text-xs">Reliability:</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => {
                  const starColor =
                    star <= citation.reliability! ? 'text-yellow-500' : 'text-gray-300';
                  return (
                    <span key={star} className={`text-sm ${starColor}`}>
                      ★
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {citation.isPrimarySource && (
            <span className="primary-source px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
              Primary Source
            </span>
          )}

          {citation.url && (
            <span className="access-date text-xs text-gray-500">
              Accessed: {new Date(citation.accessDate).toLocaleDateString()}
            </span>
          )}
        </div>

        {citation.keywords && citation.keywords.length > 0 && (
          <div className="citation-keywords mt-2">
            <span className="text-xs text-gray-500 mr-2">Keywords:</span>
            <div className="inline-flex flex-wrap gap-1">
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

        {citation.url && (
          <div className="citation-url mt-2">
            <a
              href={citation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              View Source →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

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

export interface CompactBibliographyProps {
  citationIds: string[];
  title?: string;
  maxItems?: number;
  showViewAll?: boolean;
  onViewAll?: () => void;
}

export const CompactBibliography: React.FC<CompactBibliographyProps> = ({
  citationIds,
  title = 'Sources',
  maxItems = 3,
  showViewAll = true,
  onViewAll,
}) => {
  const citations = useMemo(() => {
    return citationIds
      .map(id => getCitation(id))
      .filter((citation): citation is Citation => citation !== undefined)
      .slice(0, maxItems);
  }, [citationIds, maxItems]);

  const hasMore = citationIds.length > maxItems;

  if (citations.length === 0) return null;

  return (
    <div className="compact-bibliography bg-gray-50 border border-gray-200 rounded-lg p-4 mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>

      <div className="citations-list space-y-2">
        {citations.map((citation, index) => (
          <div key={citation.id} className="compact-citation text-sm text-gray-700">
            <span className="citation-index font-medium text-blue-600 mr-2">[{index + 1}]</span>
            <span className="citation-text">
              {CitationManager.formatCitation(citation, 'academic')}
            </span>
          </div>
        ))}
      </div>

      {hasMore && showViewAll && (
        <button
          onClick={onViewAll}
          className="view-all-button mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium underline"
        >
          View all {citationIds.length} sources →
        </button>
      )}
    </div>
  );
};

export interface CitationStatsProps {
  citationIds: string[];
  className?: string;
}

export const CitationStats: React.FC<CitationStatsProps> = ({ citationIds, className = '' }) => {
  const stats = useMemo(() => {
    return CitationManager.generateCitationStats(citationIds);
  }, [citationIds]);

  if (citationIds.length === 0) return null;

  const statsClasses = `citation-stats bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`;

  return (
    <div className={statsClasses}>
      <h3 className="text-lg font-semibold text-blue-800 mb-3">Source Quality Overview</h3>

      <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="stat-item text-center">
          <div className="stat-value text-2xl font-bold text-blue-600">{stats.totalCitations}</div>
          <div className="stat-label text-sm text-gray-600">Total Sources</div>
        </div>

        <div className="stat-item text-center">
          <div className="stat-value text-2xl font-bold text-green-600">
            {stats.averageReliability.toFixed(1)}/5
          </div>
          <div className="stat-label text-sm text-gray-600">Avg Reliability</div>
        </div>

        <div className="stat-item text-center">
          <div className="stat-value text-2xl font-bold text-purple-600">
            {Math.round(stats.primarySourcePercentage)}%
          </div>
          <div className="stat-label text-sm text-gray-600">Primary Sources</div>
        </div>

        <div className="stat-item text-center">
          <div className="stat-value text-2xl font-bold text-orange-600">
            {stats.citationsByType.government || 0}
          </div>
          <div className="stat-label text-sm text-gray-600">Gov't Sources</div>
        </div>
      </div>

      {stats.outdatedCitations > 0 && (
        <div className="outdated-warning mt-3 p-2 bg-yellow-100 border border-yellow-300 rounded text-sm text-yellow-800">
          ⚠️ {stats.outdatedCitations} source(s) may need updating (older than 10 years)
        </div>
      )}
    </div>
  );
};
