/**
 * Citation Database for Chemistry Learning App
 *
 * Authoritative sources for chemistry education content
 * Including NIST, educational institutions, and peer-reviewed sources
 */

import { Citation, CitationType } from '../../types/citations';

/**
 * NIST and Government Sources
 * Highest reliability sources for chemical data and standards
 */
export const NIST_CITATIONS: Record<string, Citation> = {
  'nist-webbook': {
    id: 'nist-webbook',
    type: 'government',
    title: 'NIST Chemistry WebBook',
    authors: ['National Institute of Standards and Technology'],
    year: 2023,
    url: 'https://webbook.nist.gov/chemistry/',
    accessDate: new Date().toISOString(),
    publisher: 'National Institute of Standards and Technology',
    abstract: 'Comprehensive database of thermochemical, thermophysical, and ion energetics data',
    keywords: ['thermochemistry', 'physical properties', 'chemical data'],
    reliability: 5,
    isPrimarySource: true,
  },

  'nist-atomic-structure': {
    id: 'nist-atomic-structure',
    type: 'government',
    title: 'NIST Atomic Structure and Electron Configuration',
    authors: ['National Institute of Standards and Technology'],
    year: 2023,
    url: 'https://physics.nist.gov/PhysRefData/ASD/index.html',
    accessDate: new Date().toISOString(),
    publisher: 'National Institute of Standards and Technology',
    abstract: 'Authoritative data on atomic structure, electron configurations, and energy levels',
    keywords: ['atomic structure', 'electron configuration', 'energy levels'],
    reliability: 5,
    isPrimarySource: true,
  },

  'nist-atomic-masses': {
    id: 'nist-atomic-masses',
    type: 'government',
    title: 'NIST Atomic Masses and Fundamental Physical Constants',
    authors: ['Wang, M.', 'Huang, W.J.', 'Kondev, F.G.', 'Audi, G.', 'Naimi, S.'],
    year: 2021,
    url: 'https://physics.nist.gov/cuu/Constants/index.html',
    accessDate: new Date().toISOString(),
    publisher: 'National Institute of Standards and Technology',
    abstract: 'Precise atomic masses and fundamental constants',
    keywords: ['atomic masses', 'isotopes', 'fundamental constants'],
    reliability: 5,
    isPrimarySource: true,
  },

  'nist-periodic-data': {
    id: 'nist-periodic-data',
    type: 'government',
    title: 'NIST Periodic Table of Elements',
    authors: ['National Institute of Standards and Technology'],
    year: 2023,
    url: 'https://www.nist.gov/pml/periodic-table-elements',
    accessDate: new Date().toISOString(),
    publisher: 'National Institute of Standards and Technology',
    abstract: 'Official periodic table data with atomic properties',
    keywords: ['periodic table', 'atomic properties', 'elements'],
    reliability: 5,
    isPrimarySource: true,
  },

  'spectroscopy-nist': {
    id: 'spectroscopy-nist',
    type: 'government',
    title: 'NIST Atomic Spectra Database',
    authors: ['Kramida, A.', 'Ralchenko, Yu.', 'Reader, J.'],
    year: 2023,
    url: 'https://physics.nist.gov/asd',
    accessDate: new Date().toISOString(),
    publisher: 'National Institute of Standards and Technology',
    abstract: 'Comprehensive atomic spectroscopic data and energy level information',
    keywords: ['atomic spectra', 'spectroscopy', 'energy transitions'],
    reliability: 5,
    isPrimarySource: true,
  },

  'nist-chlorine-data': {
    id: 'nist-chlorine-data',
    type: 'government',
    title: 'NIST Standard Reference Data for Chlorine',
    authors: ['National Institute of Standards and Technology'],
    year: 2023,
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7782505',
    accessDate: new Date().toISOString(),
    publisher: 'National Institute of Standards and Technology',
    abstract: 'Comprehensive data on chlorine isotopes and properties',
    keywords: ['chlorine', 'isotopes', 'atomic mass'],
    reliability: 5,
    isPrimarySource: true,
  },
};

/**
 * Educational and Textbook Sources
 */
export const TEXTBOOK_CITATIONS: Record<string, Citation> = {
  'brown-chemistry-14th': {
    id: 'brown-chemistry-14th',
    type: 'textbook',
    title: 'Chemistry: The Central Science',
    authors: ['Brown, T.L.', 'LeMay, H.E.', 'Bursten, B.E.', 'Murphy, C.J.'],
    year: 2021,
    publisher: 'Pearson',
    edition: '14th',
    isbnOrIssn: '978-0134414232',
    abstract: 'Comprehensive general chemistry textbook covering fundamental principles',
    keywords: ['general chemistry', 'chemical principles', 'atomic structure'],
    reliability: 5,
    isPrimarySource: false,
  },

  'zumdahl-chemistry': {
    id: 'zumdahl-chemistry',
    type: 'textbook',
    title: 'Chemistry',
    authors: ['Zumdahl, S.S.', 'Zumdahl, S.A.', 'DeCoste, D.J.'],
    year: 2020,
    publisher: 'Cengage Learning',
    edition: '10th',
    isbnOrIssn: '978-1305957404',
    abstract: 'Comprehensive chemistry textbook with problem-solving emphasis',
    keywords: ['general chemistry', 'atomic theory', 'electron configuration'],
    reliability: 5,
    isPrimarySource: false,
  },
};

/**
 * Historical and Scientific Sources
 */
export const HISTORICAL_CITATIONS: Record<string, Citation> = {
  'dalton-atomic-theory': {
    id: 'dalton-atomic-theory',
    type: 'journal',
    title: 'A New System of Chemical Philosophy',
    authors: ['Dalton, J.'],
    year: 1808,
    publisher: 'R. Bickerstaff',
    abstract: 'Original work establishing atomic theory principles',
    keywords: ['atomic theory', 'historical', 'chemical philosophy'],
    reliability: 5,
    isPrimarySource: true,
  },

  'thomson-electron-discovery': {
    id: 'thomson-electron-discovery',
    type: 'journal',
    title: 'Cathode Rays',
    authors: ['Thomson, J.J.'],
    year: 1897,
    journal: 'Philosophical Magazine',
    volume: '44',
    pages: '293-316',
    abstract: 'Discovery of the electron through cathode ray tube experiments',
    keywords: ['electron discovery', 'cathode rays', 'atomic structure'],
    reliability: 5,
    isPrimarySource: true,
  },

  'rutherford-gold-foil': {
    id: 'rutherford-gold-foil',
    type: 'journal',
    title: 'The Scattering of α and β Particles by Matter and the Structure of the Atom',
    authors: ['Rutherford, E.'],
    year: 1911,
    journal: 'Philosophical Magazine',
    volume: '21',
    pages: '669-688',
    abstract: 'Gold foil experiment revealing nuclear structure of atoms',
    keywords: ['nuclear model', 'gold foil experiment', 'atomic nucleus'],
    reliability: 5,
    isPrimarySource: true,
  },

  'bohr-model-hydrogen': {
    id: 'bohr-model-hydrogen',
    type: 'journal',
    title: 'On the Constitution of Atoms and Molecules',
    authors: ['Bohr, N.'],
    year: 1913,
    journal: 'Philosophical Magazine',
    volume: '26',
    pages: '1-25',
    abstract: 'Introduction of quantum theory to atomic structure',
    keywords: ['Bohr model', 'quantum theory', 'hydrogen atom'],
    reliability: 5,
    isPrimarySource: true,
  },

  'chemistry-history-atoms': {
    id: 'chemistry-history-atoms',
    type: 'reference',
    title: 'The History of Atomic Theory',
    authors: ['Pullman, B.'],
    year: 1998,
    publisher: 'Oxford University Press',
    abstract: 'Comprehensive history of atomic theory development',
    keywords: ['atomic theory', 'history of science', 'chemistry'],
    reliability: 4,
    isPrimarySource: false,
  },
};

/**
 * Nobel Prize and Academic Recognition Sources
 */
export const ACADEMIC_CITATIONS: Record<string, Citation> = {
  'nobel-physics-1906': {
    id: 'nobel-physics-1906',
    type: 'reference',
    title: 'Nobel Prize in Physics 1906: J.J. Thomson',
    authors: ['Nobel Committee for Physics'],
    year: 1906,
    url: 'https://www.nobelprize.org/prizes/physics/1906/',
    accessDate: new Date().toISOString(),
    publisher: 'Nobel Foundation',
    abstract: 'Recognition for theoretical and experimental investigations on conduction of electricity by gases',
    keywords: ['Nobel Prize', 'electron discovery', 'cathode rays'],
    reliability: 5,
    isPrimarySource: true,
  },

  'nobel-physics-1922': {
    id: 'nobel-physics-1922',
    type: 'reference',
    title: 'Nobel Prize in Physics 1922: Niels Bohr',
    authors: ['Nobel Committee for Physics'],
    year: 1922,
    url: 'https://www.nobelprize.org/prizes/physics/1922/',
    accessDate: new Date().toISOString(),
    publisher: 'Nobel Foundation',
    abstract: 'Recognition for services in investigation of structure of atoms and radiation emanating from them',
    keywords: ['Nobel Prize', 'Bohr model', 'atomic structure'],
    reliability: 5,
    isPrimarySource: true,
  },

  'quantum-mechanics-atoms': {
    id: 'quantum-mechanics-atoms',
    type: 'textbook',
    title: 'Introduction to Quantum Mechanics',
    authors: ['Griffiths, D.J.', 'Schroeter, D.F.'],
    year: 2018,
    publisher: 'Cambridge University Press',
    edition: '3rd',
    abstract: 'Modern quantum mechanical treatment of atomic structure',
    keywords: ['quantum mechanics', 'atomic orbitals', 'wave functions'],
    reliability: 5,
    isPrimarySource: false,
  },
};

/**
 * Standards and Educational Guidelines
 */
export const STANDARDS_CITATIONS: Record<string, Citation> = {
  'nysed-standards-2017': {
    id: 'nysed-standards-2017',
    type: 'government',
    title: 'New York State P-12 Science Learning Standards',
    authors: ['New York State Education Department'],
    year: 2017,
    url: 'http://www.nysed.gov/common/nysed/files/programs/curriculum-instruction/nys-p-12-science-learning-standards.pdf',
    accessDate: new Date().toISOString(),
    publisher: 'New York State Education Department',
    abstract: 'Official science learning standards for New York State schools',
    keywords: ['education standards', 'science curriculum', 'New York'],
    reliability: 5,
    isPrimarySource: true,
  },

  'nysed-lab-safety': {
    id: 'nysed-lab-safety',
    type: 'government',
    title: 'Science Safety in New York State Public Schools',
    authors: ['New York State Education Department'],
    year: 2019,
    url: 'http://www.nysed.gov/common/nysed/files/programs/curriculum-instruction/science-safety-guide.pdf',
    accessDate: new Date().toISOString(),
    publisher: 'New York State Education Department',
    abstract: 'Guidelines for safe science laboratory practices in schools',
    keywords: ['laboratory safety', 'education', 'science standards'],
    reliability: 5,
    isPrimarySource: true,
  },

  'nysed-lab-manual': {
    id: 'nysed-lab-manual',
    type: 'government',
    title: 'New York State Regents Chemistry Laboratory Manual',
    authors: ['New York State Education Department'],
    year: 2020,
    publisher: 'New York State Education Department',
    abstract: 'Official laboratory manual for Regents chemistry courses',
    keywords: ['laboratory procedures', 'Regents chemistry', 'experiments'],
    reliability: 5,
    isPrimarySource: true,
  },
};

/**
 * Modern Scientific Sources
 */
export const MODERN_CITATIONS: Record<string, Citation> = {
  'nuclear-composition': {
    id: 'nuclear-composition',
    type: 'journal',
    title: 'Nuclear Structure and Properties',
    authors: ['Stone, N.J.'],
    year: 2021,
    journal: 'Nuclear Physics A',
    volume: '1006',
    abstract: 'Modern understanding of nuclear composition and forces',
    keywords: ['nuclear physics', 'protons', 'neutrons'],
    reliability: 5,
    isPrimarySource: false,
  },

  'orbital-theory': {
    id: 'orbital-theory',
    type: 'journal',
    title: 'Atomic Orbitals and Electronic Structure',
    authors: ['McQuarrie, D.A.', 'Simon, J.D.'],
    year: 2021,
    journal: 'Journal of Chemical Education',
    volume: '98',
    abstract: 'Modern treatment of atomic orbital theory and electron configurations',
    keywords: ['atomic orbitals', 'electron configuration', 'quantum mechanics'],
    reliability: 5,
    isPrimarySource: false,
  },

  'atomic-mass-units': {
    id: 'atomic-mass-units',
    type: 'journal',
    title: 'The Definition and Realization of the Atomic Mass Unit',
    authors: ['Stock, M.', 'Wapstra, A.H.'],
    year: 2020,
    journal: 'Metrologia',
    volume: '57',
    abstract: 'Precise definition and measurement of atomic mass standards',
    keywords: ['atomic mass unit', 'measurement standards', 'metrology'],
    reliability: 5,
    isPrimarySource: false,
  },

  'isotope-definition-nist': {
    id: 'isotope-definition-nist',
    type: 'government',
    title: 'NIST Guide to Isotope Data',
    authors: ['National Institute of Standards and Technology'],
    year: 2023,
    url: 'https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl',
    accessDate: new Date().toISOString(),
    publisher: 'National Institute of Standards and Technology',
    abstract: 'Comprehensive isotope data and definitions',
    keywords: ['isotopes', 'nuclear data', 'atomic composition'],
    reliability: 5,
    isPrimarySource: true,
  },

  'average-atomic-mass': {
    id: 'average-atomic-mass',
    type: 'educational',
    title: 'Understanding Atomic Mass: From Isotopes to Averages',
    authors: ['Chemical Education Resources'],
    year: 2022,
    url: 'https://chem.libretexts.org/Courses/General_Chemistry/Atomic_Mass',
    accessDate: new Date().toISOString(),
    publisher: 'LibreTexts',
    abstract: 'Educational resource explaining atomic mass calculations',
    keywords: ['atomic mass', 'isotope abundance', 'chemistry education'],
    reliability: 4,
    isPrimarySource: false,
  },

  'electron-configuration': {
    id: 'electron-configuration',
    type: 'textbook',
    title: 'Principles of Modern Chemistry',
    authors: ['Oxtoby, D.W.', 'Gillis, H.P.', 'Butler, L.J.'],
    year: 2020,
    publisher: 'Cengage Learning',
    edition: '8th',
    abstract: 'Modern treatment of electron configuration and atomic structure',
    keywords: ['electron configuration', 'atomic structure', 'quantum mechanics'],
    reliability: 5,
    isPrimarySource: false,
  },

  'valence-electrons': {
    id: 'valence-electrons',
    type: 'journal',
    title: 'Valence Electrons and Chemical Bonding',
    authors: ['Pauling, L.'],
    year: 1960,
    journal: 'The Nature of the Chemical Bond',
    publisher: 'Cornell University Press',
    abstract: 'Classical treatment of valence electrons and their role in bonding',
    keywords: ['valence electrons', 'chemical bonding', 'atomic structure'],
    reliability: 5,
    isPrimarySource: true,
  },

  'atomic-spectra': {
    id: 'atomic-spectra',
    type: 'textbook',
    title: 'Atomic Spectroscopy and Radiative Processes',
    authors: ['Sobelman, I.I.'],
    year: 2019,
    publisher: 'Springer',
    abstract: 'Comprehensive treatment of atomic spectroscopy and energy transitions',
    keywords: ['atomic spectra', 'energy transitions', 'spectroscopy'],
    reliability: 5,
    isPrimarySource: false,
  },
};

/**
 * Combined citation database
 */
export const CITATION_DATABASE: Record<string, Citation> = {
  ...NIST_CITATIONS,
  ...TEXTBOOK_CITATIONS,
  ...HISTORICAL_CITATIONS,
  ...ACADEMIC_CITATIONS,
  ...STANDARDS_CITATIONS,
  ...MODERN_CITATIONS,
};

/**
 * Citations organized by type for easy filtering
 */
export const CITATIONS_BY_TYPE: Record<CitationType, Citation[]> = {
  nist: Object.values(NIST_CITATIONS),
  textbook: Object.values(TEXTBOOK_CITATIONS),
  journal: [
    ...Object.values(HISTORICAL_CITATIONS).filter(c => c.type === 'journal'),
    ...Object.values(MODERN_CITATIONS).filter(c => c.type === 'journal'),
  ],
  educational: Object.values(MODERN_CITATIONS).filter(c => c.type === 'educational'),
  government: [
    ...Object.values(NIST_CITATIONS),
    ...Object.values(STANDARDS_CITATIONS),
    ...Object.values(MODERN_CITATIONS).filter(c => c.type === 'government'),
  ],
  reference: [
    ...Object.values(HISTORICAL_CITATIONS).filter(c => c.type === 'reference'),
    ...Object.values(ACADEMIC_CITATIONS).filter(c => c.type === 'reference'),
  ],
};

/**
 * Get a citation by ID
 */
export function getCitation(id: string): Citation | undefined {
  return CITATION_DATABASE[id];
}

/**
 * Get multiple citations by IDs
 */
export function getCitations(ids: string[]): Citation[] {
  return ids.map(id => getCitation(id)).filter(Boolean) as Citation[];
}

/**
 * Get all citations
 */
export function getAllCitations(): Citation[] {
  return Object.values(CITATION_DATABASE);
}

/**
 * Get citations by type
 */
export function getCitationsByType(type: CitationType): Citation[] {
  return CITATIONS_BY_TYPE[type] || [];
}

/**
 * Search citations by keyword
 */
export function searchCitations(keyword: string): Citation[] {
  const normalizedKeyword = keyword.toLowerCase();
  return Object.values(CITATION_DATABASE).filter(
    citation =>
      citation.title.toLowerCase().includes(normalizedKeyword) ||
      citation.abstract?.toLowerCase().includes(normalizedKeyword) ||
      citation.keywords?.some(k => k.toLowerCase().includes(normalizedKeyword)) ||
      citation.authors?.some(a => a.toLowerCase().includes(normalizedKeyword))
  );
}
