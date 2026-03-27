export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
          Full-Stack Developer
        </p>
        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
          Building practical, scalable, and data-driven web applications.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          I’m Jiban, a software developer with experience in React, Python Flask, SQL, and PostgreSQL. I enjoy creating business applications, dashboards, and real-time systems that solve real problems and deliver clean user experiences.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="https://github.com/Jibank21"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/15 px-5 py-3 font-semibold transition hover:bg-white/5"
          >
            View GitHub
          </a>
          <a
            href="#contact"
            className="rounded-2xl border border-white/15 px-5 py-3 font-semibold transition hover:bg-white/5"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Current Role</p>
            <h3 className="mt-2 text-lg font-semibold">Software Developer</h3>
            <p className="mt-1 text-sm text-slate-300">SPIN AU PTY LTD</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Core Stack</p>
            <h3 className="mt-2 text-lg font-semibold">React • Flask • PostgreSQL</h3>
            <p className="mt-1 text-sm text-slate-300">React with JavaScript, Flask, and PostgreSQL</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 sm:col-span-2">
            <p className="text-sm text-slate-400">Focus Areas</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Full-stack apps, dashboards, internal tools, real-time systems, business platforms, and user-focused interface design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}