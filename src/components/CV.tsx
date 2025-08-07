export default function CV() {
  return (
    <div className="flex flex-col lg:flex-row bg-white text-gray-900 max-w-6xl mx-auto rounded-lg overflow-hidden shadow-md">
      {/* Partie gauche */}
      <div className="bg-gray-100 p-6 w-full lg:w-1/3 flex flex-col items-center text-center space-y-6">
        <img src="/PI WENDSO.jpeg" alt="Wendso Cardon" />

        <div>
          <h2 className="text-xl font-bold mb-2">Profil</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Passionné par le développement web, je souhaite évoluer dans un environnement moderne et collaboratif.
            Je suis à la recherche d'une alternance en développement fullstack
            pour continuer à apprendre en équipe.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Qualités</h2>
          <ul className="text-sm space-y-1">
            {["Autonome", "Rigoureux", "Curieux techniquement", "Travail en équipe", "Sens du service", "Organisation"].map((q) => (
              <li key={q}>• {q}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <p className="text-sm">📧 cardonwendso@gmail.com</p>
          <p className="text-sm">📞 06 35 32 95 95</p>
          <p className="text-sm">📍 Lille, Valenciennes</p>
          <p className="text-sm">🚗 Véhicule personnel</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Maîtrise des logiciels</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Symphony", "Next.js", "Tailwind","php","MySQL", "MongoDB", "SQLite","Git", "GitHub", "Postman", "Figma", "VS Code", "Docker", "VirtualBox"].map((tool) => (
              <span key={tool} className="bg-blue-100 px-3 py-1 rounded-full">{tool}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Partie droite */}
      <div className="p-6 w-full lg:w-2/3 space-y-8">
        {/* Objectif */}
        <div className="text-blue-600 font-semibold text-center text-lg">
          🎯 Je recherche une alternance orientée développement web pour la rentrée 2025, afin de contribuer à des projets modernes, apprendre en équipe et monter en compétences sur des stacks concrètes.
        </div>

        {/* Formations */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Formations et Diplômes</h2>
          <div>
            <h3 className="font-semibold">Foreach Academy (Sept. 2024 - Mars 2025)</h3>
            <p className="text-sm italic mb-2">Développeur Web et Web Mobile</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li><strong>Front-end & Back-end</strong> (React, Node.js, TypeScript)</li>
              <li><strong>Base de données</strong> : MySQL, MongoDB, SQLite</li>
              <li>API REST, déploiement Render/Netlify</li>
              <li>Intégration maquettes Figma</li>
            </ul>
          </div>

          {/* <div>
            <h3 className="font-semibold">Bachelor DevOps & Admin Systèmes (2025 - 2026)</h3>
            <p className="text-sm italic mb-2">École IT, Valenciennes</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Administration systèmes Linux/Windows, réseaux, sécurité</li>
              <li>Virtualisation, versioning, scripting, documentation</li>
            </ul>
          </div> */}
        </div>

        {/* Expériences */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Expériences Professionnelles</h2>

          <div className="mb-4">
            <h3 className="font-semibold">Lyreco France — Développeur Web</h3>
            <p className="text-sm italic mb-1">Stage (Février - Mars 2025)</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Interfaces dynamiques : PHP, TypeScript, Tailwind</li>
              <li>Optimisation API et UX</li>
              <li>Refonte outil interne</li>
              <li>Collaboration Git / GitHub</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">PUBOS — Brodeur</h3>
            <p className="text-sm italic mb-1">Alternance puis CDI (2018 - 2025)</p>
          </div>
        </div>

        {/* Projets */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Projets / Réalisations</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>DogAndMe – Site React/TypeScript (Netlify) : architecture, routing, API</li>
            <li>Domine Renov – Site vitrine HTML/CSS (bientôt migré en React)</li>
            <li>Portfolio personnel – React, Tailwind, déploiement Render</li>
            <li>Projet Next.js en cours – Stack Supabase, Figma, intégration dynamique</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
