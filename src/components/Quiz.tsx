import { useState } from 'react';

const questions = [
  {
    question: "Quel langage est utilisé avec React ?",
    options: ["PHP", "Java", "JavaScript", "Python"],
    answer: "JavaScript",
  },
  {
    question: "Quelle balise HTML permet d’insérer une image ?",
    options: ["<link>", "<img>", "<picture>", "<src>"],
    answer: "<img>",
  },
  {
    question: "Tailwind CSS est un...",
    options: ["Framework UI", "Framework Backend", "IDE", "Librairie"],
    answer: "Framework UI",
  },
  {
    question: "Node.js permet de...",
    options: ["Styliser", "Déployer", "Créer du backend JS", "Faire des maquettes"],
    answer: "Créer du backend JS",
  },
];

export default function Quiz({ onEnd }: { onEnd?: () => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = questions[index];

  const handleAnswer = (option: string) => {
    if (!showAnswer) {
      setSelected(option);
      setShowAnswer(true);

      if (option === question.answer) {
        setScore((prev) => prev + 1);
      }

      setTimeout(() => {
        if (index + 1 < questions.length) {
          setIndex(index + 1);
          setSelected(null);
          setShowAnswer(false);
        } else {
          setIsFinished(true);
          setTimeout(() => {
            onEnd?.();
          }, 3000);
        }
      }, 2000);
    }
  };

  if (isFinished) {
    const isWin = score >= Math.ceil(questions.length / 2);

    return (
      <div className="bg-white text-gray-800 shadow-xl rounded-xl p-6 w-full max-w-xl mx-auto mb-6 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Quiz terminé !</h2>
        <p className="text-xl mb-2">Score : <strong>{score} / {questions.length}</strong></p>
        <p className={`text-lg font-semibold ${isWin ? 'text-green-600' : 'text-red-600'}`}>
          {isWin ? "🎉 Bravo, vous avez gagné !" : "❌ Dommage, réessayez !"}
        </p>
        <p className="text-sm mt-4 text-gray-500">(Le quiz va se fermer automatiquement)</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 shadow-xl rounded-xl p-6 w-full max-w-xl mx-auto mb-6">
      <h2 className="text-xl font-bold mb-4 text-blue-700">{question.question}</h2>

      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option) => {
          const isCorrect = showAnswer && option === question.answer;
          const isWrong = showAnswer && selected === option && option !== question.answer;

          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className={`px-4 py-2 rounded border text-left transition 
                ${isCorrect ? 'bg-green-100 border-green-400 text-green-700' : ''}
                ${isWrong ? 'bg-red-100 border-red-400 text-red-700' : ''}
                ${!showAnswer ? 'hover:bg-blue-100 border-gray-300' : 'cursor-default'}
              `}
              disabled={showAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showAnswer && (
        <div className="mt-4 text-sm text-gray-600">
          ✅ Bonne réponse : <strong>{question.answer}</strong>
        </div>
      )}
    </div>
  );
}
