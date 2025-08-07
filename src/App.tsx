import './index.css';
import { useState, useRef, useEffect } from 'react';
import Annonce from './components/Annonce';
import Competences from './components/Competences';
import Projets from './components/Projets';
import CV from './components/CV';
import Realisations from './components/Realisations';
import Contact from './components/Contact';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

function App() {
  const items = ['Compétences', 'CV', 'Projets', 'Réalisations', 'Contact'];
  const [active, setActive] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (active && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [active]);

  const renderContent = () => {
    switch (active) {
      case 'Compétences':
        return <Competences />;
      case 'CV':
        return <CV />;
      case 'Projets':
        return <Projets />;
      case 'Réalisations':
        return <Realisations />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center px-4 py-10">
        <Annonce />
        {/* Quiz (s’affiche uniquement au début) */}
        {!quizFinished && <Quiz onEnd={() => setQuizFinished(true)} />}

        {/* Bulles horizontales centrées en style glassmorphism */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 mt-4">
          {items.map((item) => (
            <div
              key={item}
              onClick={() => setActive(item)}
              className={`
                w-28 h-28 rounded-full flex items-center justify-center
                cursor-pointer font-semibold text-white text-sm
                shadow-lg backdrop-blur-md bg-black/40 border border-white/10
                transition-all duration-300
                ${active === item ? 'ring-2 ring-blue-500 scale-110' : 'hover:scale-105 hover:ring-1 hover:ring-white/20'}
              `}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Bulle active et contenu */}
        {active && (
          <div ref={contentRef} className="flex flex-col items-center gap-4 mt-6 w-full px-4">
            <div className="w-36 h-36 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shadow-xl text-lg transition-all duration-500">
              {active}
            </div>

            <div className="w-full max-w-6xl mt-6">
              {renderContent()}
            </div>
          </div>
        )}
        
      </div>
  {/* ✅ Footer à l’intérieur du JSX */}
      <Footer />
    
    </>
  );
}

export default App;
