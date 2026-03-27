export default function ProjectCard({ project }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
      <h4 className="text-xl font-semibold">{project.title}</h4>
      <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}