export default function Contact() {
  const infos = [
    {
      label: 'Email',
      value: 'cardonwendso@gmail.com',
      link: 'mailto:cardonwendso@gmail.com',
      icon: '📧',
    },
    {
      label: 'Téléphone',
      value: '06 35 32 95 95',
      link: 'tel:0635329595',
      icon: '📱',
    },
    {
      label: 'Portfolio',
      value: 'wendso-portfolio.netlify.app',
      link: 'https://wendso-portfolio.netlify.app',
      icon: '🌐',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/wendso',
      link: 'https://linkedin.com/in/wendso',
      icon: '💼',
    },
    {
      label: 'GitHub',
      value: 'github.com/ton-github',
      link: 'https://github.com/ton-github',
      icon: '💻',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Contactez-moi</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {infos.map((info) => (
          <a
            key={info.label}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded hover:bg-blue-100 transition text-gray-800"
          >
            <span className="text-xl">{info.icon}</span>
            <div>
              <div className="text-sm text-gray-500">{info.label}</div>
              <div className="font-medium">{info.value}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
