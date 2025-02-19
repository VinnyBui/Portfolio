"use client"
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/projectDetails";

const projects = [
  {
    id: "1",
    name: "we-buy-cisco.com",
    description: "This is my project"
  },
  {
    id: "2",
    name: "we-buy-cisco.com",
    description: "This is my project2"
  },
  {
    id: "3",
    name: "Scripts for Cisco Networks",
    description: "This is my project3"
  }
]

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  if (projectId){
    const project = projects.find((p) => p.id === projectId);
    if(!project) return notFound();
    return <ProjectDetails project={project} />;
  }
}
