export default function Footer() {
  return (
    <footer className="mt- py-6 bg-black/30 text-white text-center text-sm border-t border-white/10">
      © {new Date().getFullYear()} — Site développé par <span className="font-semibold text-blue-400">Wendso</span>
    </footer>
  );
}
