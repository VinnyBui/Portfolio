import { projects } from "@/lib/projectsData";
import ProjectContent from "@/components/sections/projectContent";

type Props = {
  params: {
    id: string;
  };
};

export default function ProjectsPage({ params }: Props) {
  const projectId = params.id;
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectContent project={project} />;
}
