import { Suspense } from "react";
import ProjectsClient from "@/components/ProjectsClient";

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsClient />
    </Suspense>
  );
}
