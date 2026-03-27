export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-8 md:grid-cols-[1fr,1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">About Me</p>
          <h3 className="mt-3 text-3xl font-bold">A developer who enjoys solving real business problems.</h3>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
          <p className="leading-8">
            I have experience building modern web applications across internal business systems, dashboards, and data-focused tools. My work includes platforms such as task management systems, CRM, SRM, DMS, and analytics dashboards. I enjoy turning complex requirements into clean, usable products and continuously improving both performance and user experience.
          </p>
          <p className="mt-4 leading-8">
            I hold a Bachelor of Information Technology from Federation University and I am currently pursuing a Master’s in IT. I am also continuously learning more about system design, performance optimization, and scalable application development.
          </p>
        </div>
      </div>
    </section>
  );
}