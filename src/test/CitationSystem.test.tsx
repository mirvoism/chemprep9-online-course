/**
 * Citation System Test Suite
 *
 * Tests for citation management, components, and integration
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { getCitation, CITATION_DATABASE } from '../data/citations/citationDatabase';
import { Citation } from '../components/ui/Citation';

describe('Citation Database', () => {
  it('should have NIST WebBook citation', () => {
    const citation = getCitation('nist-webbook');
    expect(citation).toBeDefined();
    expect(citation?.title).toBe('NIST Chemistry WebBook');
    expect(citation?.type).toBe('government');
    expect(citation?.reliability).toBe(5);
  });

  it('should have multiple textbook citations', () => {
    const brownChem = getCitation('brown-chemistry-14th');
    const zumdahlChem = getCitation('zumdahl-chemistry');

    expect(brownChem).toBeDefined();
    expect(zumdahlChem).toBeDefined();
    expect(brownChem?.type).toBe('textbook');
    expect(zumdahlChem?.type).toBe('textbook');
  });

  it('should have NYSED curriculum standards', () => {
    const nysedStandards = getCitation('nysed-standards-2017');
    expect(nysedStandards).toBeDefined();
    expect(nysedStandards?.type).toBe('government');
    expect(nysedStandards?.authors).toContain('New York State Education Department');
  });

  it('should have atomic structure citations', () => {
    const atomicStructure = getCitation('nist-atomic-structure');
    const daltonTheory = getCitation('dalton-atomic-theory');
    
    expect(atomicStructure).toBeDefined();
    expect(daltonTheory).toBeDefined();
    expect(atomicStructure?.type).toBe('government');
    expect(daltonTheory?.type).toBe('journal');
  });
});

describe('Citation Components', () => {
  it('should render citation with superscript', () => {
    render(<Citation citationId="nist-webbook" number={1} />);
    const citationElement = screen.getByText('1');
    expect(citationElement).toBeInTheDocument();
    expect(citationElement.tagName).toBe('SUP');
  });

  it('should show warning for missing citation', () => {
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Citation citationId="non-existent" number={1} />);
    expect(consoleWarn).toHaveBeenCalledWith('Citation not found: non-existent');
    consoleWarn.mockRestore();
  });
});

describe('Database Quality', () => {
  it('should have minimum required citations', () => {
    const allCitations = Object.values(CITATION_DATABASE);
    expect(allCitations.length).toBeGreaterThanOrEqual(20);
  });

  it('should have high reliability sources', () => {
    const allCitations = Object.values(CITATION_DATABASE);
    const highReliability = allCitations.filter(c => c.reliability >= 4);
    expect(highReliability.length / allCitations.length).toBeGreaterThan(0.8);
  });

  it('should have government and NIST sources', () => {
    const govCitations = Object.values(CITATION_DATABASE).filter(c => c.type === 'government');
    expect(govCitations.length).toBeGreaterThanOrEqual(8);
  });

  it('should have educational and textbook sources', () => {
    const eduCitations = Object.values(CITATION_DATABASE).filter(c => 
      c.type === 'textbook' || c.type === 'educational'
    );
    expect(eduCitations.length).toBeGreaterThanOrEqual(3);
  });

  it('should have historical sources', () => {
    const historicalCitations = Object.values(CITATION_DATABASE).filter(c => 
      c.keywords?.includes('historical') || c.year < 1950
    );
    expect(historicalCitations.length).toBeGreaterThanOrEqual(4);
  });

  it('should have atomic structure specific citations', () => {
    const atomicCitations = Object.values(CITATION_DATABASE).filter(c => 
      c.keywords?.includes('atomic structure') || 
      c.keywords?.includes('electron configuration') ||
      c.title.toLowerCase().includes('atomic')
    );
    expect(atomicCitations.length).toBeGreaterThanOrEqual(5);
  });
});

describe('Content Integration', () => {
  it('should support Unit 01 citations', () => {
    const unit1Citations = [
      'brown-chemistry-14th',
      'nist-webbook',
      'nysed-standards-2017',
      'nysed-lab-safety',
      'nysed-lab-manual'
    ];
    
    unit1Citations.forEach(id => {
      const citation = getCitation(id);
      expect(citation).toBeDefined();
    });
  });

  it('should support Unit 02 citations', () => {
    const unit2Citations = [
      'brown-chemistry-14th',
      'dalton-atomic-theory',
      'thomson-electron-discovery',
      'rutherford-gold-foil',
      'bohr-model-hydrogen',
      'nist-atomic-structure',
      'nist-atomic-masses'
    ];
    
    unit2Citations.forEach(id => {
      const citation = getCitation(id);
      expect(citation).toBeDefined();
    });
  });
});

describe('Database Integrity', () => {
  it('should have valid citation structure', () => {
    const allCitations = Object.values(CITATION_DATABASE);
    
    allCitations.forEach(citation => {
      expect(citation.id).toBeDefined();
      expect(citation.title).toBeDefined();
      expect(citation.type).toBeDefined();
      expect(citation.reliability).toBeGreaterThanOrEqual(1);
      expect(citation.reliability).toBeLessThanOrEqual(5);
    });
  });

  it('should have consistent ID mapping', () => {
    const allCitations = Object.values(CITATION_DATABASE);
    
    allCitations.forEach(citation => {
      const retrieved = getCitation(citation.id);
      expect(retrieved).toBeDefined();
      expect(retrieved?.id).toBe(citation.id);
    });
  });
});
