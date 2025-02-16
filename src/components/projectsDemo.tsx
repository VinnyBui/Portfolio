import React from 'react'

const ProjectsDemo = () => {
  return (
    <div className="my-20 pb-96 mx-auto">
      <div className="flex h-full">
        {/* Left Side */}
        <div className="flex flex-col gap-48 px-8">
          <div className="flex justify-between">
            <h3>
              Stuff that I've been working on
            </h3>
            <h4>
              Some are professional work, some are just for fun.
            </h4>
          </div>
          <h1 className="text-4xl md:text-9xl font-clash font-bold">
            PROJECTS
          </h1>
        </div>
        {/* Right Side */}
        <div className="flex-1 border-l px-8">
          Picture goes here
        </div>
      </div>
    </div>
  )
}

export default ProjectsDemo