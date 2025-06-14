import { projects } from "@/lib/projectsData";
import ProjectContent from "@/components/sections/ProjectContent";

type Props = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProjectsPage({ params }: Props) {
  const { id: projectId } = await params;
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectContent project={project} />;
}
