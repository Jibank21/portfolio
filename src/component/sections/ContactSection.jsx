export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-slate-900 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Contact
        </p>

        <h3 className="mt-3 text-3xl font-bold">
          Let’s build scalable products together.
        </h3>

        <p className="mt-4 max-w-2xl leading-8 text-slate-300">
          I’m open to connecting about software development, React applications,
          full-stack systems, dashboards, internal tools, and modern web experiences.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-200">
          <a
            href="/Jiban_Khadka_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-3 font-medium text-cyan-300 transition hover:bg-cyan-400/20"
          >
            View Resume
          </a>

          <a
            href="/Jiban_Khadka_Resume.pdf"
            download
            className="rounded-2xl border border-white/15 px-4 py-3 transition hover:bg-white/5"
          >
            Download Resume
          </a>

          <a
            href="https://jibankhadka.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/15 px-4 py-3 transition hover:bg-white/5"
          >
            Portfolio Website
          </a>

          <a
            href="https://github.com/Jibank21"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/15 px-4 py-3 transition hover:bg-white/5"
          >
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/jiban-khadka-4315b3148/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/15 px-4 py-3 transition hover:bg-white/5"
          >
            LinkedIn Profile
          </a>

        </div>
      </div>
    </section>
  );
}