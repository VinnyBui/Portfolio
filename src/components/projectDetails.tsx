import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
}
const ProjectDetails = ({ project }: { project: Project}) => {
  return (
    <section className="max-w-4xl mx-auto">
      <h1>{project.name}</h1>
      <p className="mt-6 text-lg">{project.description}</p>
      <Link href="/#project">
        <Button className="mt-6">Back to home</Button>
      </Link>
    </section>
  )
}

export default ProjectDetails