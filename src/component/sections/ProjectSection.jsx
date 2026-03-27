import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
      <SectionTitle
        label="Projects"
        title="Selected work"
        description="A few examples of the systems and applications I have contributed to as a software developer."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}