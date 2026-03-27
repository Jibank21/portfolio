export default function SkillGroup({ title, items }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold capitalize">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((skill) => (
          <span key={skill} className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}