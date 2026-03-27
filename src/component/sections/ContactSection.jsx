export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-slate-900 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contact</p>
        <h3 className="mt-3 text-3xl font-bold">Let’s build something useful.</h3>
        <p className="mt-4 max-w-2xl leading-8 text-slate-300">
          I’m open to connecting about software development, React JavaScript applications, full-stack projects, dashboards, internal tools, and modern web applications.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-200">
          <a href="mailto:jiban362@gmail.com" className="rounded-2xl border border-white/15 px-4 py-3 transition hover:bg-white/5">
            jiban362@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/jiban-khadka-4315b3148/" className="rounded-2xl border border-white/15 px-4 py-3 transition hover:bg-white/5">
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/Jibank21"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/15 px-4 py-3 transition hover:bg-white/5"
          >
            github Profile
          </a>
        </div>
      </div>
    </section>
  );
}