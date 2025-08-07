type LienProjet = {
  label: string;
  url?: string;
};

type Projet = {
  titre: string;
  description: string;
  etat: string;
  liens: LienProjet[];
};

export default function Projets() {
  const projets: Projet[] = [
    {
      titre: 'DogAndMe',
      description: 'Plateforme de réservation de services pour chiens (React, Tailwind, Node.js).',
      etat: '✅ Terminé',
      liens: [
        { label: 'GitHub', url: 'https://github.com/WENCRD/dog-mefront' },
        { label: 'Voir en ligne', url: 'https://dogandme.fr/' },
      ],
    },
    {
      titre: 'Domine Renov',
      description: "Site vitrine d'une entreprise de rénovation (HTML/CSS, amélioration prévue en React).",
      etat: '🚧 Amélioration en cours',
      liens: [
        { label: 'GitHub' },
        { label: 'Voir le site', url: 'https://domine-renov.netlify.app' },
      ],
    },
    {
      titre: 'Mon Portfolio',
      description: 'Mon site personnel pour présenter mes compétences, projets et mon CV.',
      etat: '✅ Terminé',
      liens: [
        { label: 'Code source', url: 'https://github.com/ton-github/portfolio' },
        { label: 'Voir le site', url: 'https://wendso-portfolio.netlify.app' },
      ],
    },
    {
      titre: 'Kallos Vision',
      description: "Plateforme de visibilité pour mannequins et artistes. Projet en cours de développement.",
      etat: '🚧 En cours',
      liens: [
        { label: 'GitHub', url: 'https://github.com/WENCRD/Kallos_front' },
        { label: 'Voir le site', url: 'https://kallosvision.netlify.app' },
      ],
    },
    {
      titre: 'Dreadlocks Center',
      description: "Site vitrine pour un salon spécialisé dans les dreadlocks. Conception en cours.",
      etat: '🚧 En cours',
      liens: [
        { label: 'GitHub' },
        { label: 'Voir le site' },
      ],
    },
    {
      titre: 'Glory Head Spa',
      description: "Projet en développement pour un spa capillaire. Design & développement en cours.",
      etat: '🚧 En cours',
      liens: [
        { label: 'GitHub' },
        { label: 'Voir le site' },
      ],
    },
    {
      titre: 'Techne',
      description: "Site vitrine de mon entreprise freelance (React, Tailwind, déploiement à venir).",
      etat: '🚧 En cours',
      liens: [
        { label: 'GitHub' },
        { label: 'Site à venir' },
      ],
    },
    {
      titre: 'OLMP',
      description: "Site e-commerce pour une marque de vêtements streetwear (design en cours).",
      etat: '🚧 En cours',
      liens: [
        { label: 'GitHub' },
        { label: 'Site à venir' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-4">
      {projets.map((projet) => (
        <div
          key={projet.titre}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-1">{projet.titre}</h2>
          <p className="text-sm text-gray-500 mb-3 italic">{projet.etat}</p>
          <p className="text-gray-700 mb-4">{projet.description}</p>
          <div className="flex flex-col gap-2 text-sm">
            {projet.liens.map((lien, i) =>
              lien.url ? (
                <a
                  key={i}
                  href={lien.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  🔗 {lien.label}
                </a>
              ) : (
                <span key={i} className="text-gray-400 cursor-not-allowed">
                  🔒 {lien.label}
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
