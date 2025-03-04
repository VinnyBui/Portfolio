"use client"; // This ensures it runs only in the browser

import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/projectDetails";
import { projects } from "@/lib/projectsData";

export default function ProjectsClient() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  const initProjectIndex = projectId
    ? projects.findIndex((p) => p.id === projectId)
    : 0;

  if (projectId && initProjectIndex === -1) return notFound();

  return <ProjectDetails projects={projects} initProjectIndex={initProjectIndex} />;
}
