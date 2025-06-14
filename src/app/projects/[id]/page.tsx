import { projects } from "@/lib/projectsData";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const getTechColor = (tech: string): string => {
  switch (tech.toLowerCase()) {
    case 'react':
      return 'bg-blue-400 text-white';
    case 'vite':
      return 'bg-purple-500 text-white';
    case 'firebase':
      return 'bg-orange-400 text-white';
    case 'python':
      return 'bg-green-500 text-white';
    case 'next.js':
      return 'bg-black text-white';
    case 'javascript':
      return 'bg-yellow-400 text-black';
    case 'vercel':
      return 'bg-black text-white';
    case 'typescript':
      return 'bg-blue-500 text-white';
    case 'aws':
      return 'bg-orange-600 text-white';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

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

  return (
    <div className="max-w-screen-xl mx-auto px-20 py-8">
      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-10 font-boska">{project.name}</h1>
        <div className="flex gap-2 flex-wrap">
          {project.technologies?.map((tech, index) => (
            <span 
              key={index} 
              className={`px-3 py-1 rounded-lg border border-black text-sm md:text-base ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">🔍 Overview</h2>
        <p className="text-sm md:text-base text-gray-700">{project.overviewDescription}</p>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">✨ Key Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p className="text-sm md:text-base">{project.techStack.frontend.join(", ")}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Backend / Database</h3>
            <p className="text-sm md:text-base">{project.techStack.backend.join(", ")}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Deployment</h3>
            <p className="text-sm md:text-base">{project.techStack.deployment.join(", ")}</p>
          </div>
        </div>
      </section>

      {/* Screenshots / Demo */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">📸 Screenshots / Demo</h2>
        <div className="flex flex-col gap-4">
          {project.media && (
            <div className="relative aspect-video">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <source src={project.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {project.images && project.images.length > 0 && (
            <div className="grid grid-cols-1 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="relative aspect-video">
                  <Image 
                    src={image}
                    alt={`${project.name} screenshot ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Live Demo & Source Code */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">🌐 Live Demo & Source Code</h2>
        <div className="flex gap-4">
          <Link href={project.overviewLink} target="_blank">
            <Button className="flex items-center gap-2">
              <ExternalLink size={16} />
              Live App
            </Button>
          </Link>
          {project.githubLink && (
            <Link href={project.githubLink} target="_blank">
              <Button variant="outline" className="flex items-center gap-2">
                <Github size={16} />
                GitHub Repo
              </Button>
            </Link>
          )}
        </div>
      </section>

      {/* My Role */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">🙋 My Role</h2>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-sm md:text-base">
          {project.role.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </section>

      {/* Challenges & Learnings */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">🧠 Challenges & Learnings</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
          {project.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </section>

      {/* Future Improvements */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">🚀 Future Improvements</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
          {project.futureImprovements.map((improvement, index) => (
            <li key={index}>{improvement}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
