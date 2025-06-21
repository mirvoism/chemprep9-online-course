/**
 * Citation System Types for Chemistry Learning App
 *
 * Comprehensive type definitions for academic citations,
 * references, and bibliography management
 */

export type CitationType =
  | 'nist' // NIST Chemistry WebBook and standards
  | 'textbook' // Chemistry textbooks and educational materials
  | 'journal' // Peer-reviewed academic journals
  | 'educational' // Educational websites and resources
  | 'government' // Government databases and official sources
  | 'reference'; // Reference materials and encyclopedias

export type CitationFormat = 'apa' | 'mla' | 'chicago' | 'academic';

export interface Citation {
  /** Unique identifier for the citation */
  id: string;

  /** Type of source being cited */
  type: CitationType;

  /** Title of the source */
  title: string;

  /** Authors of the source */
  authors?: string[];

  /** Publication year */
  year?: number;

  /** URL for online sources */
  url?: string;

  /** Date the source was accessed */
  accessDate: string;

  /** Specific page number or section */
  pageNumber?: string;

  /** Digital Object Identifier for academic sources */
  doi?: string;

  /** ISBN for books or ISSN for journals */
  isbnOrIssn?: string;

  /** Publisher information */
  publisher?: string;

  /** Edition for textbooks */
  edition?: string;

  /** Volume for journals */
  volume?: string;

  /** Issue number for journals */
  issue?: string;

  /** Abstract or brief description */
  abstract?: string;

  /** Keywords for categorization */
  keywords?: string[];

  /** Reliability score (1-5) */
  reliability?: number;

  /** Whether this is a primary source */
  isPrimarySource?: boolean;
}

export interface Reference {
  /** Unique identifier for the reference */
  id: string;

  /** Citation this reference points to */
  citationId: string;

  /** Specific context where this reference is used */
  context: string;

  /** Quote or excerpt from the source */
  excerpt?: string;

  /** Page or section number for this specific reference */
  specificLocation?: string;

  /** Type of reference (fact, example, data, etc.) */
  referenceType?: 'fact' | 'data' | 'example' | 'definition' | 'procedure' | 'safety';
}

export interface StandardAlignment {
  /** NYSED or other standard identifier */
  standardId: string;

  /** Description of the standard */
  description: string;

  /** How this content aligns with the standard */
  alignmentDescription: string;

  /** Level of alignment (1-5) */
  alignmentLevel: number;
}

export interface CitationContext {
  /** Text that includes the citation */
  text: string;

  /** Position where citation should appear */
  position: number;

  /** Type of citation display */
  displayType: 'inline' | 'superscript' | 'parenthetical';

  /** Whether to show tooltip with citation details */
  showTooltip?: boolean;
}

export interface BibliographySection {
  /** Section title (e.g., "Government Sources", "Textbooks") */
  title: string;

  /** Citations in this section */
  citations: Citation[];

  /** Sort order for this section */
  order: number;
}

export interface CitationValidation {
  /** Whether the citation is valid */
  isValid: boolean;

  /** Array of validation errors */
  errors: string[];

  /** Array of validation warnings */
  warnings: string[];

  /** Suggested improvements */
  suggestions: string[];
}

export interface CitationStats {
  /** Total number of citations */
  totalCitations: number;

  /** Citations by type */
  citationsByType: Record<CitationType, number>;

  /** Average reliability score */
  averageReliability: number;

  /** Percentage of primary sources */
  primarySourcePercentage: number;

  /** Number of outdated citations */
  outdatedCitations: number;
}
