'use client';
import React from "react"; // Ensure React is imported
import { PROJECTS } from "@/constants";
import Image from "next/image";
import Technologies from "./Technologies";

const Projects = () => {
  return (
    <div className="border-b border-transparent pb-4">
      <h1 className="mb-4 text-center text-4xl">Projects</h1>
      <h3 className="mb-20 text-center text-xl text-neutral-400">
        Click on any of the project images to be redirected to their Github
        page.
      </h3>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
                onClick={() => window.open(project.link)}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-transparent">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
