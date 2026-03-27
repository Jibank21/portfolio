export default function SectionTitle({ label, title, description }) {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{label}</p>
        {title ? <h3 className="mt-3 text-3xl font-bold">{title}</h3> : null}
      </div>
      {description ? <p className="max-w-2xl text-slate-400">{description}</p> : null}
    </div>
  );
}