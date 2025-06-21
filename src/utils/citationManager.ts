/**
 * Citation Management System
 *
 * Utilities for managing citations, references, and bibliographies
 * in the Chemistry Learning App
 */

import {
  Citation,
  Reference,
  CitationFormat,
  CitationValidation,
  BibliographySection,
  CitationStats,
  CitationType,
} from '../types/citations';
import { EnhancedLesson } from '../../types';
import { getCitation } from '../data/citations/citationDatabase';

/**
 * Citation Manager Class
 * Handles all citation-related operations
 */
export class CitationManager {
  /**
   * Add a citation to a lesson
   */
  static addCitation(lesson: EnhancedLesson, citationId: string): EnhancedLesson {
    const citations = lesson.citations || [];

    // Avoid duplicates
    if (!citations.includes(citationId)) {
      return {
        ...lesson,
        citations: [...citations, citationId],
        lastModified: new Date().toISOString(),
      };
    }

    return lesson;
  }

  /**
   * Remove a citation from a lesson
   */
  static removeCitation(lesson: EnhancedLesson, citationId: string): EnhancedLesson {
    const citations = lesson.citations || [];

    return {
      ...lesson,
      citations: citations.filter(id => id !== citationId),
      lastModified: new Date().toISOString(),
    };
  }

  /**
   * Add a reference to a lesson
   */
  static addReference(lesson: EnhancedLesson, reference: Reference): EnhancedLesson {
    const references = lesson.references || [];

    return {
      ...lesson,
      references: [...references, reference.id],
      lastModified: new Date().toISOString(),
    };
  }

  /**
   * Format a citation according to specified format
   */
  static formatCitation(citation: Citation, format: CitationFormat = 'academic'): string {
    switch (format) {
      case 'apa':
        return CitationManager.formatAPA(citation);
      case 'mla':
        return CitationManager.formatMLA(citation);
      case 'chicago':
        return CitationManager.formatChicago(citation);
      case 'academic':
      default:
        return CitationManager.formatAcademic(citation);
    }
  }

  /**
   * Format citation in APA style
   */
  private static formatAPA(citation: Citation): string {
    const authors = citation.authors?.join(', ') || 'Anonymous';
    const year = citation.year ? `(${citation.year})` : '';
    const title = citation.title;
    const publisher = citation.publisher ? `, ${citation.publisher}` : '';
    const url = citation.url ? ` Retrieved from ${citation.url}` : '';

    return `${authors} ${year}. ${title}${publisher}.${url}`;
  }

  /**
   * Format citation in MLA style
   */
  private static formatMLA(citation: Citation): string {
    const authors = citation.authors?.join(', ') || 'Anonymous';
    const title = `"${citation.title}"`;
    const publisher = citation.publisher || '';
    const year = citation.year || '';
    const url = citation.url ? ` Web. ${new Date(citation.accessDate).toDateString()}.` : '';

    return `${authors}. ${title} ${publisher}, ${year}.${url}`;
  }

  /**
   * Format citation in Chicago style
   */
  private static formatChicago(citation: Citation): string {
    const authors = citation.authors?.join(', ') || 'Anonymous';
    const title = `"${citation.title}"`;
    const publisher = citation.publisher || '';
    const year = citation.year || '';
    const url = citation.url ? ` ${citation.url}` : '';

    return `${authors}. ${title} ${publisher}, ${year}.${url}`;
  }

  /**
   * Format citation in academic style (custom for chemistry education)
   */
  private static formatAcademic(citation: Citation): string {
    const authors = citation.authors?.join(', ') || citation.publisher || 'Anonymous';
    const title = citation.title;
    const year = citation.year ? ` (${citation.year})` : '';
    const edition = citation.edition ? `, ${citation.edition} ed.` : '';
    const publisher =
      citation.publisher && citation.type === 'textbook' ? `, ${citation.publisher}` : '';
    const url = citation.url ? `. Available: ${citation.url}` : '';
    const accessed = citation.url
      ? ` [Accessed: ${new Date(citation.accessDate).toDateString()}]`
      : '';

    return `${authors}${year}. ${title}${edition}${publisher}${url}${accessed}`;
  }

  /**
   * Validate a citation
   */
  static validateCitation(citation: Citation): CitationValidation {
    const errors: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];

    // Required fields validation
    if (!citation.id) errors.push('Citation ID is required');
    if (!citation.title) errors.push('Title is required');
    if (!citation.type) errors.push('Citation type is required');
    if (!citation.accessDate) errors.push('Access date is required');

    // Type-specific validation
    switch (citation.type) {
      case 'textbook':
        if (!citation.authors || citation.authors.length === 0) {
          warnings.push('Authors are recommended for textbook citations');
        }
        if (!citation.year) warnings.push('Publication year is recommended');
        if (!citation.publisher) warnings.push('Publisher is recommended for textbooks');
        if (!citation.isbnOrIssn) suggestions.push('Consider adding ISBN for textbooks');
        break;

      case 'journal':
        if (!citation.authors || citation.authors.length === 0) {
          errors.push('Authors are required for journal citations');
        }
        if (!citation.year) errors.push('Publication year is required for journals');
        if (!citation.doi && !citation.url) {
          warnings.push('DOI or URL is recommended for journal articles');
        }
        break;

      case 'government':
      case 'nist':
        if (!citation.url) warnings.push('URL is recommended for government sources');
        if (!citation.authors && !citation.publisher) {
          warnings.push('Author or publisher is recommended');
        }
        break;

      case 'educational':
        if (!citation.url) errors.push('URL is required for educational resources');
        if (!citation.publisher) warnings.push('Publisher/organization is recommended');
        break;
    }

    // General quality checks
    if (citation.reliability && citation.reliability < 3) {
      warnings.push('Low reliability score - consider finding higher quality sources');
    }

    if (citation.year && citation.year < 2015) {
      suggestions.push('Consider updating to more recent sources when available');
    }

    // URL validation
    if (citation.url && !citation.url.startsWith('http')) {
      errors.push('URL must be a valid web address starting with http or https');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      suggestions,
    };
  }

  /**
   * Generate bibliography sections
   */
  static generateBibliography(citationIds: string[]): BibliographySection[] {
    const citations = citationIds
      .map(id => getCitation(id))
      .filter((citation): citation is Citation => citation !== undefined);

    // Group citations by type
    const grouped = citations.reduce(
      (acc, citation) => {
        const type = citation.type;
        if (!acc[type]) acc[type] = [];
        acc[type].push(citation);
        return acc;
      },
      {} as Record<string, Citation[]>
    );

    // Sort within each group and create sections
    const sections: BibliographySection[] = [];
    const typeOrder: Record<string, number> = {
      government: 1,
      nist: 1,
      journal: 2,
      textbook: 3,
      reference: 4,
      educational: 5,
    };

    Object.entries(grouped).forEach(([type, typeCitations]) => {
      const sortedCitations = typeCitations.sort((a, b) => {
        // Sort by author first, then by title
        const aAuthor = a.authors?.[0] || a.publisher || a.title;
        const bAuthor = b.authors?.[0] || b.publisher || b.title;
        return aAuthor.localeCompare(bAuthor);
      });

      sections.push({
        title: CitationManager.getSectionTitle(type as CitationType),
        citations: sortedCitations,
        order: typeOrder[type] || 999,
      });
    });

    // Sort sections by order
    return sections.sort((a, b) => a.order - b.order);
  }

  /**
   * Get section title for bibliography
   */
  private static getSectionTitle(type: CitationType): string {
    switch (type) {
      case 'government':
      case 'nist':
        return 'Government and Official Sources';
      case 'journal':
        return 'Academic Journals';
      case 'textbook':
        return 'Textbooks and Educational Materials';
      case 'reference':
        return 'Reference Materials';
      case 'educational':
        return 'Educational Resources';
      default:
        return 'Other Sources';
    }
  }

  /**
   * Generate citation statistics
   */
  static generateCitationStats(citationIds: string[]): CitationStats {
    const citations = citationIds
      .map(id => getCitation(id))
      .filter((citation): citation is Citation => citation !== undefined);

    const totalCitations = citations.length;

    // Count by type
    const citationsByType = citations.reduce(
      (acc, citation) => {
        acc[citation.type] = (acc[citation.type] || 0) + 1;
        return acc;
      },
      {} as Record<CitationType, number>
    );

    // Calculate average reliability
    const reliabilityScores = citations
      .map(c => c.reliability)
      .filter((score): score is number => score !== undefined);
    const averageReliability =
      reliabilityScores.length > 0
        ? reliabilityScores.reduce((sum, score) => sum + score, 0) / reliabilityScores.length
        : 0;

    // Calculate primary source percentage
    const primarySources = citations.filter(c => c.isPrimarySource).length;
    const primarySourcePercentage =
      totalCitations > 0 ? (primarySources / totalCitations) * 100 : 0;

    // Count outdated citations (older than 10 years)
    const currentYear = new Date().getFullYear();
    const outdatedCitations = citations.filter(c => c.year && currentYear - c.year > 10).length;

    return {
      totalCitations,
      citationsByType,
      averageReliability,
      primarySourcePercentage,
      outdatedCitations,
    };
  }

  /**
   * Update lesson reliability score based on citations
   */
  static updateLessonReliability(lesson: EnhancedLesson): EnhancedLesson {
    if (!lesson.citations || lesson.citations.length === 0) {
      return { ...lesson, reliabilityScore: 2 }; // Low score for no citations
    }

    const stats = CitationManager.generateCitationStats(lesson.citations);

    // Calculate weighted reliability score
    let score = stats.averageReliability * 0.6; // 60% weight on source reliability
    score += (stats.primarySourcePercentage / 100) * 1.5; // 1.5 points for primary sources
    score += Math.min(stats.totalCitations / 5, 1) * 0.5; // Up to 0.5 points for citation count
    score -= (stats.outdatedCitations / stats.totalCitations) * 1; // Penalty for outdated sources

    return {
      ...lesson,
      reliabilityScore: Math.max(1, Math.min(5, Math.round(score * 10) / 10)),
      lastFactCheck: new Date().toISOString(),
    };
  }
}

/**
 * Helper functions for citation formatting and display
 */
export const CitationFormatters = {
  /**
   * Format citation for inline display
   */
  formatInline(citationId: string): string {
    const citation = getCitation(citationId);
    if (!citation) return `[${citationId}]`;

    const author = citation.authors?.[0]?.split(',')[0] || citation.publisher || 'Source';
    const year = citation.year || 'n.d.';
    return `(${author}, ${year})`;
  },

  /**
   * Format citation for superscript display
   */
  formatSuperscript(citationId: string, index: number): string {
    return `${index}`;
  },

  /**
   * Get citation tooltip text
   */
  getTooltipText(citationId: string): string {
    const citation = getCitation(citationId);
    if (!citation) return 'Citation not found';

    return CitationManager.formatCitation(citation, 'academic');
  },
};

/**
 * Legacy helper functions for backward compatibility
 */
export const citationInline = (citationId: string, index?: number): string => {
  return CitationFormatters.formatInline(citationId);
};

export const bibliography = (citationIds: string[]): string => {
  const sections = CitationManager.generateBibliography(citationIds);
  return sections
    .map(section => {
      const formattedCitations = section.citations
        .map(citation => CitationManager.formatCitation(citation))
        .join('\n');
      return `### ${section.title}\n\n${formattedCitations}`;
    })
    .join('\n\n');
};
