"use client"
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/projectDetails";
import { projects } from "@/lib/projectsData";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  if (projectId){
    const project = projects.find((p) => p.id === projectId);
    if(!project) return notFound();
    return <ProjectDetails project={project} />;
  }
}
