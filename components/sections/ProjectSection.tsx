import ProjectCard from "@/components/cards/ProjectCard";
import { client } from "@/sanity/lib/client";

const fetchProjectForProjectCard = () => {
  const data = client.fetch(`*[_type == "projects"]{
      _id,
      "slug": slug.current,
      projectBanner,
      name,
      description,
  }`);

  return data;
};

export default async function ProjectSection() {
  const projects = await fetchProjectForProjectCard();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
      {projects.map((project: ProjectCardProp) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </div>
  );
}
