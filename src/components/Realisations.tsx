export default function Realisations() {
    const newLocal = 'https://dogandme.fr';
  const realisations = [
    {
      titre: 'DogAndMe',
      description: 'Plateforme de réservation de services pour chiens, déployée sur Netlify.',
      techno: ['React', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/ton-github/dogandme',
      site: newLocal,
    },
    // Tu pourras en ajouter d’autres ici plus tard
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-4">
      {realisations.map((realisation) => (
        <div
          key={realisation.titre}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-2">{realisation.titre}</h2>
          <p className="text-gray-600 mb-4">{realisation.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {realisation.techno.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={realisation.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              🔗 Site déployé
            </a>
            <a
              href={realisation.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline"
            >
              🧠 Code source GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
