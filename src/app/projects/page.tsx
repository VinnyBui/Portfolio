import React from "react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-8 md:px-0 py-24">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
        <p className="text-lg text-gray-600">
          Here are some of the projects I've worked on.
        </p>
        {/* Project grid will go here later */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">Project 1</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">Project 2</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        </div>
      </div>
    </main>
  );
}
