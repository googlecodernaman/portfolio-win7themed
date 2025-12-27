import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

const ProjectsWindow = () => {
  const projects: Project[] = [
    {
      title: "Windows 7 Portfolio",
      description: "A nostalgic Windows 7 themed portfolio website built with Next.js and React. Features include BIOS boot screen, login animations, and desktop environment simulation.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/googlecodernaman/portfolio-win7themed",
      demoUrl: "https://eshwar.netlify.app/",
    },
    {
      title: "Project Example 2",
      description: "Add your second project description here. Showcase your best work with detailed information about what you built and the technologies used.",
      techStack: ["React", "Node.js", "MongoDB"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Project Example 3",
      description: "Add your third project description here. This is a great place to highlight your skills and demonstrate your technical capabilities.",
      techStack: ["Python", "Django", "PostgreSQL"],
      githubUrl: "#",
      demoUrl: "#",
    },
  ];

  return (
    <div className="h-full overflow-auto p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Projects</h2>
      
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-5 bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              {project.title}
            </h3>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  View Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> These are example projects. Update the <code className="bg-gray-200 px-2 py-1 rounded text-xs">ProjectsWindow.tsx</code> file to add your own projects with real data, links, and screenshots.
        </p>
      </div>
    </div>
  );
};

export default ProjectsWindow;
