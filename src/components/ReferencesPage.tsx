import React from 'react';

const ReferencesPage: React.FC = () => {
  const resources = [
    {
      category: 'Authoritative Textbooks',
      items: [
        {
          title: 'Chemistry: The Central Science',
          authors: 'Brown, LeMay, Bursten, Murphy, Woodward, Stoltzfus',
          note: 'A comprehensive college-level text often used for AP Chemistry, excellent for depth.',
        },
        {
          title: 'Prentice Hall Chemistry',
          authors: 'Wilbraham, Staley, Matta, Waterman',
          note: 'A widely used high school chemistry textbook.',
        },
        {
          title: 'Chemistry',
          authors: 'Zumdahl, Zumdahl, DeCoste',
          note: 'Another popular and thorough textbook for high school and introductory college chemistry.',
        },
      ],
    },
    {
      category: 'Online Resources',
      items: [
        {
          title: 'PhET Interactive Simulations (Chemistry)',
          url: 'https://phet.colorado.edu/en/simulations/filter?subjects=chemistry&type=html&sort=alpha&view=grid',
          note: 'Excellent interactive simulations for various chemistry concepts.',
        },
        {
          title: 'ChemLibreTexts',
          url: 'https://chem.libretexts.org/',
          note: 'An extensive open-source collection of chemistry textbooks and resources.',
        },
        {
          title: 'American Chemical Society (ACS) Education',
          url: 'https://www.acs.org/education.html',
          note: 'Resources for students and educators from the ACS.',
        },
        {
          title: 'Khan Academy Chemistry',
          url: 'https://www.khanacademy.org/science/chemistry',
          note: 'Video lessons and practice exercises covering many chemistry topics.',
        },
      ],
    },
    {
      category: 'Curriculum Standards',
      items: [
        {
          title: 'NYSED Physical Setting/Chemistry Core Curriculum',
          url: 'http://www.nysed.gov/common/nysed/files/programs/curriculum-instruction/chemist.pdf',
          note: 'Official New York State Education Department curriculum framework (Note: Check for the most current version on the NYSED website).',
        },
        {
          title: 'NYSED Science Learning Standards',
          url: 'https://www.nysed.gov/curriculum-instruction/science-learning-standards',
          note: 'Broader science standards which include chemistry.',
        },
      ],
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto text-text-light">
      <h1 className="text-4xl font-bold text-primary mb-8">References & Resources</h1>

      {resources.map(section => (
        <section key={section.category} className="mb-10">
          <h2 className="text-2xl font-semibold text-accent mb-4 pb-2 border-b border-border-color">
            {section.category}
          </h2>
          <ul className="space-y-4">
            {section.items.map(item => (
              <li key={item.title} className="p-4 bg-card-bg rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-primary">{item.title}</h3>
                {item.authors && (
                  <p className="text-sm text-text-muted italic">Authors: {item.authors}</p>
                )}
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sky-400 hover:text-sky-300 hover:underline break-all"
                  >
                    {item.url}
                  </a>
                ) : null}
                {item.note && <p className="text-sm text-text-muted mt-1">{item.note}</p>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default ReferencesPage;
