export default function Competences() {
  const categories = [
    {
      titre: 'Langages',
      competences: [
        { nom: 'JavaScript', niveau: 'Intermédiaire' },
        { nom: 'TypeScript', niveau: 'Intermédiaire' },
        { nom: 'Python', niveau: 'Débutant' },
      ],
    },
    {
      titre: 'Frameworks',
      competences: [
        { nom: 'React', niveau: 'Avancé' },
        { nom: 'Node.js', niveau: 'Intermédiaire' },
        { nom: 'Tailwind CSS', niveau: 'Avancé' },
      ],
    },
    {
      titre: 'Hard Skills',
      competences: [
        { nom: 'Git', niveau: 'Intermédiaire' },
        { nom: 'Docker', niveau: 'Débutant' },
        { nom: 'Postman', niveau: 'Intermédiaire' },
        { nom: 'VS Code', niveau: 'Avancé' },
        { nom: 'Figma', niveau: 'Intermédiaire' },
      ],
    },
    {
      titre: 'Déploiement',
      competences: [
        { nom: 'Netlify', niveau: 'Avancé' },
        { nom: 'Render', niveau: 'Intermédiaire' },
      ],
    },
    {
      titre: 'Soft Skills',
      competences: [
        { nom: 'Autonomie', niveau: 'Avancé' },
        { nom: 'Communication', niveau: 'Avancé' },
        { nom: 'Curiosité', niveau: 'Avancé' },
        { nom: 'Travail en équipe', niveau: 'Avancé' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-4">
      {categories.map((cat) => (
        <div
          key={cat.titre}
          className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-4 border-b pb-1">
            {cat.titre}
          </h2>
          <ul className="space-y-2">
            {cat.competences.map((skill) => (
              <li
                key={skill.nom}
                className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded-md hover:bg-blue-100 transition"
              >
                <span>{skill.nom}</span>
                <span className="text-sm text-gray-600 italic">{skill.niveau}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
