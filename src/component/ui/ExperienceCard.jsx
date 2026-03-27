export default function ExperienceCard({ job }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
        <div>
          <h3 className="text-2xl font-semibold">{job.role}</h3>
          <p className="mt-1 text-slate-300">{job.company}</p>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-400">
          {job.period}
        </span>
      </div>
      <ul className="mt-5 space-y-3 text-slate-300">
        {job.points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}