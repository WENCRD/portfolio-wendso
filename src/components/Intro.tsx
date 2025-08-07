// src/components/Intro.tsx
import { useEffect, useState } from 'react';

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 500); // léger délai pour l'effet fondu
    }, 3000); // intro visible pendant 3 secondes
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 bg-[#C65D7B] flex justify-center items-center z-50 transition-opacity duration-500 ${hide ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative w-72 h-72 rounded-full bg-[#F6E7D8] overflow-hidden">
        <div className="absolute inset-0 animate-spin-slow bg-gradient-to-br from-[#F68989] to-[#874356] -m-2 rounded-full z-0"></div>
        <div className="absolute inset-2 bg-[#C65D7B] rounded-full z-10"></div>

        <div className="relative inset-8 z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <img
            src="https://abdelrahman345.netlify.app/images/me.jpg"
            alt="profil"
            className="absolute w-full h-full object-cover rounded-full z-10 opacity-100 transition-opacity duration-500 hover:opacity-0"
          />
          <h2 className="relative z-20 font-bold text-sm uppercase tracking-wider">
            Wendso Cardon
            <br />
            <span className="block text-xs font-light">Développeur Web</span>
          </h2>
          <a
            href="#main"
            className="relative mt-4 bg-white text-[#C65D7B] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:tracking-widest transition-all z-20"
          >
            Entrer
          </a>
        </div>
      </div>
    </div>
  );
}
