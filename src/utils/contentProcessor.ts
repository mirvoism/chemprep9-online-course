/**
 * Content Processor for Chemistry Learning App
 * 
 * Handles comprehensive processing of lesson content including:
 * - Markdown to HTML conversion
 * - Citation function call resolution
 * - SVG extraction and component wrapping
 * - Typography and spacing normalization
 */

import { getCitation } from '../data/citations/citationDatabase';
import { CitationFormatters } from './citationManager';

export interface ProcessedContent {
  html: string;
  citationIds: string[];
  svgComponents: SVGComponent[];
  hasProcessingErrors: boolean;
  errors: string[];
}

export interface SVGComponent {
  id: string;
  content: string;
  placeholder: string;
}

export interface ProcessedSVGElement {
  index: number;
  placeholder: string;
  originalContent: string;
  processedContent: string;
}

export class ContentProcessor {
  private static citationCounter = 1;
  private static extractedCitations: string[] = [];
  private static extractedSVGs: SVGComponent[] = [];

  /**
   * Main content processing pipeline
   */
  static processContent(rawContent: string): ProcessedContent {
    // Reset static counters for each processing run
    this.citationCounter = 1;
    this.extractedCitations = [];
    this.extractedSVGs = [];

    // Test citation database availability
    console.log('Testing citation database...');
    const testCitation = getCitation('brown-chemistry-14th');
    console.log('Test citation result:', testCitation ? 'DATABASE WORKING' : 'DATABASE FAILED');

    let processedContent = rawContent;
    const errors: string[] = [];
    let hasProcessingErrors = false;

    try {
      // Step 1: Extract and replace SVG content
      processedContent = this.extractSVGContent(processedContent);

      // Step 2: Process citation function calls
      processedContent = this.processCitations(processedContent);

      // Step 3: Process bibliography function calls
      processedContent = this.processBibliography(processedContent);

      // Step 4: Convert markdown to HTML
      processedContent = this.processMarkdown(processedContent);

      // Step 5: Apply typography and spacing
      processedContent = this.applyTypography(processedContent);

      // Step 6: Reinsert processed SVG components
      processedContent = this.reinsertSVGComponents(processedContent);

    } catch (error) {
      hasProcessingErrors = true;
      errors.push(`Content processing error: ${error instanceof Error ? error.message : String(error)}`);
      console.error('Content processing failed:', error);
    }

    return {
      html: processedContent,
      citationIds: [...this.extractedCitations],
      svgComponents: [...this.extractedSVGs],
      hasProcessingErrors,
      errors
    };
  }

  /**
   * Extract SVG content and replace with placeholders (using improved processing)
   */
  private static extractSVGContent(content: string): string {
    console.log('📝 STEP 1: Starting extractSVGContent...');
    console.log('📝 Input content length:', content.length);
    
    const { content: processedContent, svgElements } = this.extractSVG(content);
    
    console.log('📝 After extractSVG - svgElements count:', svgElements.length);
    
    // Convert ProcessedSVGElement[] to SVGComponent[] for compatibility
    svgElements.forEach((element) => {
      console.log(`📝 Converting SVG ${element.index + 1} to component`);
      this.extractedSVGs.push({
        id: `svg-component-${element.index + 1}`,
        content: element.processedContent,
        placeholder: element.placeholder
      });
    });

    console.log('📝 Total extractedSVGs after conversion:', this.extractedSVGs.length);
    return processedContent;
  }

  /**
   * Process citation function calls and replace with HTML
   */
  private static processCitations(content: string): string {
    // Match ${citationInline('citation-id', optional-index)} patterns
    const citationRegex = /\$\{citationInline\(['"]([^'"]+)['"](?:,\s*(\d+))?\)\}/g;
    
    return content.replace(citationRegex, (match, citationId, index) => {
      try {
        console.log(`Processing citation: ${citationId}`);
        const citation = getCitation(citationId);
        console.log(`Citation result for ${citationId}:`, citation ? 'FOUND' : 'NOT FOUND');
        
        if (!citation) {
          console.warn(`Citation not found: ${citationId}`);
          return `<span class="citation-error" title="Citation not found: ${citationId}">[${citationId}]</span>`;
        }

        // Add to extracted citations list
        if (!this.extractedCitations.includes(citationId)) {
          this.extractedCitations.push(citationId);
        }

        // Use provided index or auto-increment
        const citationIndex = index ? parseInt(index) : this.citationCounter++;

        // Generate citation HTML with better error handling
        try {
          const formattedCitation = CitationFormatters.formatInline(citationId);
          const tooltipText = CitationFormatters.getTooltipText(citationId);

          return `<sup class="citation-superscript text-blue-600 dark:text-blue-400 text-xs cursor-pointer hover:text-blue-800 dark:hover:text-blue-300" title="${tooltipText.replace(/"/g, '&quot;')}">${citationIndex}</sup>`;
        } catch (formatError) {
          console.error(`Error formatting citation ${citationId}:`, formatError);
          // Create a basic citation without formatting
          return `<sup class="citation-superscript text-blue-600 dark:text-blue-400 text-xs cursor-pointer" title="${citation.title || 'Citation'}">${citationIndex}</sup>`;
        }

      } catch (error) {
        console.error(`Error processing citation ${citationId}:`, error);
        return `<span class="citation-error" title="Processing error: ${error}">[${citationId}]</span>`;
      }
    });
  }

  /**
   * Process bibliography function calls
   */
  private static processBibliography(content: string): string {
    // Match ${bibliography([...])} patterns
    const bibRegex = /\$\{bibliography\(\[(.*?)\]\)\}/g;
    
    return content.replace(bibRegex, (match, citationList) => {
      try {
        // Parse citation IDs from the array
        const citationIds = citationList
          .split(',')
          .map((id: string) => id.trim().replace(/['"]/g, ''))
          .filter((id: string) => id.length > 0);

        // Add to extracted citations
        citationIds.forEach((id: string) => {
          if (!this.extractedCitations.includes(id)) {
            this.extractedCitations.push(id);
          }
        });

        console.log(`Processing bibliography with ${citationIds.length} citations:`, citationIds);

        // Generate bibliography HTML with actual formatted citations
        const sections = getCitation ? 
          citationIds
            .map((id: string) => getCitation(id))
            .filter((citation: any) => citation !== null)
            .map((citation: any, index: number) => `
              <div class="bibliography-entry mb-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div class="text-sm text-slate-800 dark:text-slate-200">
                  <span class="font-semibold text-blue-600 dark:text-blue-400">[${index + 1}]</span>
                  ${citation.authors?.join(', ') || citation.publisher || 'Unknown'} 
                  ${citation.year ? `(${citation.year})` : ''}. 
                  <em>${citation.title}</em>
                  ${citation.url ? `. Available: <a href="${citation.url}" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">${citation.url}</a>` : ''}
                </div>
              </div>
            `).join('')
          : `<div class="text-sm text-slate-600 dark:text-slate-400">Bibliography processing unavailable</div>`;

        return `<div class="bibliography-section mt-8 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
            <span class="mr-2">📚</span> References
          </h3>
          ${sections}
        </div>`;

      } catch (error) {
        console.error('Error processing bibliography:', error);
        return '<div class="bibliography-error">Bibliography processing error</div>';
      }
    });
  }

  /**
   * Convert markdown syntax to HTML
   */
  private static processMarkdown(content: string): string {
    let processed = content;

    // Headers (##, ###, ####, #####)
    processed = processed.replace(/^##### (.+)$/gm, '<h5 class="text-sm font-medium text-slate-900 dark:text-slate-100 mt-4 mb-2">$1</h5>');
    processed = processed.replace(/^#### (.+)$/gm, '<h4 class="text-lg font-medium text-slate-900 dark:text-slate-100 mt-5 mb-3">$1</h4>');
    processed = processed.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-6 mb-3">$1</h3>');
    processed = processed.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">$1</h2>');

    // Bold text (**text**)
    processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-slate-900 dark:text-slate-100">$1</strong>');

    // Italic text (*text*)
    processed = processed.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em class="italic">$1</em>');

    // Code snippets (`code`)
    processed = processed.replace(/`([^`]+)`/g, '<code class="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm font-mono">$1</code>');

    // Unordered lists (lines starting with * or -)
    processed = processed.replace(/^(\s*)([*-])\s+(.+)$/gm, '$1<li class="text-slate-700 dark:text-slate-300">$3</li>');
    
    // Wrap consecutive list items in <ul>
    processed = processed.replace(/(<li[^>]*>.*<\/li>\s*)+/g, (match) => {
      return `<ul class="list-disc list-inside ml-6 space-y-1 my-4">${match}</ul>`;
    });

    // Ordered lists (1. item)
    processed = processed.replace(/^(\s*)(\d+\.)\s+(.+)$/gm, '$1<li class="text-slate-700 dark:text-slate-300">$3</li>');
    
    // Convert consecutive numbered list items to <ol>
    processed = processed.replace(/(<li[^>]*>.*<\/li>\s*)+/g, (match) => {
      // Check if this was from numbered lists by looking for original pattern
      if (content.match(/^\s*\d+\.\s+/m)) {
        return `<ol class="list-decimal list-inside ml-6 space-y-1 my-4">${match}</ol>`;
      }
      return match; // Keep as unordered list
    });

    return processed;
  }

  /**
   * Apply typography and spacing normalization
   */
  private static applyTypography(content: string): string {
    let processed = content;

    // Convert line breaks to proper spacing
    processed = processed.replace(/(\r\n|\r|\n){3,}/g, '\n\n'); // Normalize excessive line breaks
    processed = processed.replace(/(\r\n|\r|\n){2}/g, '</p><p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">'); // Double breaks = new paragraph
    processed = processed.replace(/(\r\n|\r|\n)/g, '<br />'); // Single breaks = line break

    // Wrap in initial paragraph
    processed = `<p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">${processed}</p>`;

    // Clean up empty paragraphs
    processed = processed.replace(/<p[^>]*>\s*<\/p>/g, '');

    // Fix spacing around headers (h2-h5)
    processed = processed.replace(/(<\/p>)\s*(<h[2345][^>]*>)/g, '$2');
    processed = processed.replace(/(<\/h[2345]>)\s*(<p[^>]*>)/g, '$1\n$2');

    // Fix spacing around lists
    processed = processed.replace(/(<\/p>)\s*(<[uo]l[^>]*>)/g, '$2');
    processed = processed.replace(/(<\/[uo]l>)\s*(<p[^>]*>)/g, '$1\n$2');

    return processed;
  }

  /**
   * Reinsert processed SVG components
   */
  private static reinsertSVGComponents(content: string): string {
    let processed = content;

    this.extractedSVGs.forEach((svgComponent) => {
      // Wrap SVG in responsive container with better overflow handling
      const wrappedSVG = `
        <div class="svg-container my-6 flex justify-center">
          <div class="svg-wrapper w-full max-w-4xl overflow-visible rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm">
            <div class="svg-inner w-full flex justify-center">
              ${svgComponent.content}
            </div>
          </div>
        </div>
      `;

      processed = processed.replace(svgComponent.placeholder, wrappedSVG);
    });

    return processed;
  }

  /**
   * Simple markdown processor for practice problems and short text
   */
  static processSimpleMarkdown(text: string): string {
    if (!text) return '';

    let processed = text;

    // Bold text
    processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>');

    // Line breaks
    processed = processed.replace(/\n/g, '<br />');

    // Basic list items (if they exist)
    processed = processed.replace(/^(\s*)([*-])\s+(.+)$/gm, '$1• $3<br />');

    return processed;
  }

  /**
   * Extract citations from processed content for bibliography generation
   */
  static extractCitationIds(processedHtml: string): string[] {
    const citationRegex = /class="citation-superscript"[^>]*>(\d+)<\/sup>/g;
    const citationIds: string[] = [];
    let match;

    while ((match = citationRegex.exec(processedHtml)) !== null) {
      // This is a simplified extraction - in a real implementation,
      // you'd need to maintain a mapping between citation numbers and IDs
    }

    return this.extractedCitations;
  }

  /**
   * Extract and process SVG elements
   */
  private static extractSVG(content: string): { content: string; svgElements: ProcessedSVGElement[] } {
    const svgElements: ProcessedSVGElement[] = [];
    const svgRegex = /<svg[\s\S]*?<\/svg>/g;
    let match;
    let index = 0;

    console.log('🔍 Starting SVG extraction...');
    
    while ((match = svgRegex.exec(content)) !== null) {
      const svgContent = match[0];
      const placeholder = `__SVG_PLACEHOLDER_${index}__`;
      
      console.log(`📝 Found SVG ${index + 1} at position ${match.index}`);
      console.log(`📝 SVG ${index + 1} snippet:`, svgContent.substring(0, 100));
      
      // Process SVG for better display
      const processedSVG = this.processSVGForDisplay(svgContent, index);
      
      svgElements.push({
        index,
        placeholder,
        originalContent: svgContent,
        processedContent: processedSVG
      });
      
      index++;
    }
    
    console.log(`📊 Total SVGs extracted: ${svgElements.length}`);

    // Replace SVGs with placeholders
    const contentWithPlaceholders = content.replace(svgRegex, (match, offset) => {
      const svgIndex = svgElements.findIndex(svg => svg.originalContent === match);
      return svgIndex !== -1 ? svgElements[svgIndex].placeholder : match;
    });

    return { content: contentWithPlaceholders, svgElements };
  }

  /**
   * Process SVG content for better display and responsiveness
   */
  private static processSVGForDisplay(svgContent: string, index: number): string {
    console.log(`🔧 Processing SVG ${index + 1} (index: ${index})`);
    console.log(`SVG ${index + 1} snippet:`, svgContent.substring(0, 150));
    try {
      // Fix CSS custom properties with fallback colors
      let processedSVG = svgContent
        // Replace CSS variables with actual colors for better compatibility
        .replace(/var\(--color-primary\)/g, '#2563a0') // Navy blue
        .replace(/var\(--color-secondary\)/g, '#14b8a6') // Teal  
        .replace(/var\(--color-accent\)/g, '#F76C5E') // Coral
        .replace(/var\(--color-danger\)/g, '#dc2626') // Red
        .replace(/var\(--color-text-light\)/g, '#64748b') // Gray
        .replace(/var\(--color-text-muted\)/g, '#64748b') // Gray
        .replace(/var\(--color-border\)/g, '#e2e8f0') // Light gray
        .replace(/var\(--color-card-bg\)/g, '#ffffff') // White;

      // **TARGETED FIX: Sand & Water SVG (5th SVG)**
      console.log('Checking for Sand & Water SVG...', processedSVG.includes('Sand and water representing a heterogeneous mixture'));
      if (processedSVG.includes('Sand and water representing a heterogeneous mixture')) {
        console.log('🔧 APPLYING TARGETED FIX FOR SAND & WATER SVG...');
        console.log('Full original Sand & Water SVG:', processedSVG);
        
        // Fix text positioning that goes outside SVG boundaries
        const beforeChanges = processedSVG;
        processedSVG = processedSVG
          // Move "Sand Layer" text higher and inside border
          .replace(/y="125"/g, 'y="115"')
          // Move bottom title text higher and add more space
          .replace(/y="140"/g, 'y="135"')
          // Extend SVG height to accommodate text properly
          .replace(/height="150"/g, 'height="160"')
          // Extend viewBox height accordingly
          .replace(/viewBox="0 0 200 150"/g, 'viewBox="0 0 200 160"')
          // Extend border rect to accommodate new height
          .replace(/height="115"/g, 'height="125"');
        
        const changesMade = beforeChanges !== processedSVG;
        console.log('Changes made to Sand & Water SVG:', changesMade);
        if (changesMade) {
          console.log('Full modified Sand & Water SVG:', processedSVG);
        }
      }

      // **TARGETED FIX: Water Molecules SVG (3rd SVG)**
      console.log('Checking for Water Molecules SVG...', processedSVG.includes('Water molecules representing a compound'));
      console.log('Also checking symbol ID...', processedSVG.includes('id="waterMolecule"'));
      console.log('Current SVG index:', index);
      if (processedSVG.includes('Water molecules representing a compound') || processedSVG.includes('id="waterMolecule"')) {
        console.log('🔧 APPLYING TARGETED FIX for Water Molecules SVG...');
        
        // Move molecules left and up by adjusting the actual coordinates in the symbol
        const beforeChanges = processedSVG;
        processedSVG = processedSVG
          // Move oxygen atom left and up: cx="0" cy="0" -> cx="-3" cy="-3"
          .replace(/cx="0" cy="0"/g, 'cx="-3" cy="-3"')
          // Move hydrogen atoms left and up: cx="-10" cy="10" -> cx="-13" cy="7"
          .replace(/cx="-10" cy="10"/g, 'cx="-13" cy="7"')
          // Move hydrogen atoms left and up: cx="10" cy="10" -> cx="7" cy="7"  
          .replace(/cx="10" cy="10"/g, 'cx="7" cy="7"')
          // Adjust bond lines to match new positions
          .replace(/x2="-8" y2="8"/g, 'x2="-11" y2="5"')
          .replace(/x2="8" y2="8"/g, 'x2="5" y2="5"')
          // Move text labels to match new positions
          .replace(/x="-3" y="3"/g, 'x="-6" y="0"')
          .replace(/x="-13" y="13"/g, 'x="-16" y="10"')
          .replace(/x="7" y="13"/g, 'x="4" y="10"');
        
        const changesMade = beforeChanges !== processedSVG;
        console.log('Changes made to Water Molecules SVG:', changesMade);
        console.log('✅ Water Molecules positioning adjusted - moved left and up');
        if (changesMade) {
          console.log('Full modified Water Molecules SVG:', processedSVG);
        }
      }

      // Add viewBox if missing for proper scaling
      processedSVG = processedSVG.replace(/<svg([^>]*?)>/i, (match, attributes) => {
        if (!attributes.includes('viewBox')) {
          // Extract width and height to create viewBox
          const widthMatch = attributes.match(/width="(\d+)"/);
          const heightMatch = attributes.match(/height="(\d+)"/);
          if (widthMatch && heightMatch) {
            const width = widthMatch[1];
            const height = heightMatch[1];
            return `<svg${attributes} viewBox="0 0 ${width} ${height}">`;
          }
        }
        return match;
      });

      // Ensure proper accessibility
      processedSVG = processedSVG.replace(/<svg([^>]*?)>/i, (match, attributes) => {
        if (!attributes.includes('role=')) {
          return match.replace('>', ' role="img">');
        }
        return match;
      });

      // **UNIVERSAL FIXES**: Apply to all SVGs
      processedSVG = processedSVG
        // Fix any text that might be too close to edges (universal safety margin)
        .replace(/y="([0-9]+)"/g, (match, yValue) => {
          const y = parseInt(yValue);
          // If text is within 5px of bottom edge, move it up slightly
          if (y > 145) return `y="${Math.max(y - 10, 135)}"`;
          return match;
        })
        // Ensure text has proper anchoring
        .replace(/<text([^>]*?)>/gi, (match, attributes) => {
          if (!attributes.includes('text-anchor')) {
            return `<text${attributes} text-anchor="start">`;
          }
          return match;
        });

      console.log(`✅ SVG ${index + 1} processing complete.`);
      return processedSVG;
      
    } catch (error) {
      console.error(`Error processing SVG ${index}:`, error);
      // Return original content if processing fails
      return svgContent;
    }
  }
}

/**
 * Convenience function for processing lesson narrative content
 */
export function processLessonContent(rawContent: string): ProcessedContent {
  return ContentProcessor.processContent(rawContent);
}

/**
 * Convenience function for processing practice problem text
 */
export function processPracticeText(text: string): string {
  return ContentProcessor.processSimpleMarkdown(text);
} 