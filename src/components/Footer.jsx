export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-white/60">© {new Date().getFullYear()} Liquid Glass UI. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm">
            <a className="text-white/70 hover:text-orange-300 transition-colors" href="#">Privacy</a>
            <span className="text-white/20">•</span>
            <a className="text-white/70 hover:text-orange-300 transition-colors" href="#">Terms</a>
            <span className="text-white/20">•</span>
            <a className="text-white/70 hover:text-orange-300 transition-colors" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
