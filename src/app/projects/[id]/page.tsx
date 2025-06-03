import { projects } from "@/lib/projectsData";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default function ProjectsPage({params}: Props) {
  const projectId = params.id;
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{project.name}</h1>
    </div>
  );
}
