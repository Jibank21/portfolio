import SectionTitle from "../ui/SectionTitle";
import SkillGroup from "../ui/SkillGroup";
import { skills } from "../../data/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-14">
      <SectionTitle label="Skills" title="Tech stack" />
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([title, items]) => (
          <SkillGroup key={title} title={title} items={items} />
        ))}
      </div>
    </section>
  );
}