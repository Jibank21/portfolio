import SectionTitle from "../ui/SectionTitle";
import ExperienceCard from "../ui/ExperienceCard";
import { experience } from "../../data/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-14">
      <SectionTitle label="Experience" title="Work history" />
      <div className="mt-6 grid gap-6">
        {experience.map((job) => (
          <ExperienceCard key={job.role + job.company} job={job} />
        ))}
      </div>
    </section>
  );
}