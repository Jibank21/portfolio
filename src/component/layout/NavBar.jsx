export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold tracking-wide">Jiban Khadka</h1>
          <p className="text-sm text-slate-400">
            Full-Stack Engineer • Dashboards • Real-Time • AI Systems
          </p>
        </div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#about" className="transition hover:text-cyan-300">About</a>
          <a href="#experience" className="transition hover:text-cyan-300">Experience</a>
          <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
          <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
          <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}