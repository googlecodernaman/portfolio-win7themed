import React from 'react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Windows 7 Portfolio",
    description: "A nostalgic Windows 7 themed portfolio website built with Next.js and React. Features include BIOS boot screen, login animations, and desktop environment simulation.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/eshwaresarapu/portfolio-win7themed",
    demoUrl: "https://eshwar.netlify.app/",
  },
  {
    title: "Project Two",
    description: "Add your second project description here. Showcase your best work with detailed information about what you built and the technologies used.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Project Three",
    description: "Add your third project description here. This is a great place to highlight your skills and demonstrate your technical capabilities.",
    techStack: ["Python", "Django", "PostgreSQL"],
    githubUrl: "#",
    demoUrl: "#",
  },
];

const ProjectsWindow = () => {
  return (
    /* Outer wrapper simulates an Internet Explorer 8 shell */
    <div className="h-full flex flex-col" style={{ fontFamily: '"Segoe UI", Tahoma, sans-serif', background: '#fff' }}>

      {/* ── IE8 address bar ──────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(180deg, #f0f4fa 0%, #dce7f5 100%)',
          borderBottom: '1px solid #b0c4de',
          padding: '3px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexShrink: 0,
        }}
      >
        {/* nav buttons */}
        {['◀', '▶'].map((arrow, i) => (
          <button
            key={i}
            style={{
              background: 'linear-gradient(180deg,#e8f0fc,#c5d8f0)',
              border: '1px solid #8aaecc',
              borderRadius: '3px',
              width: 22,
              height: 22,
              fontSize: '9px',
              cursor: 'default',
              color: '#444',
            }}
          >
            {arrow}
          </button>
        ))}
        {/* Reload */}
        <button
          style={{
            background: 'linear-gradient(180deg,#e8f0fc,#c5d8f0)',
            border: '1px solid #8aaecc',
            borderRadius: '3px',
            width: 22,
            height: 22,
            fontSize: '9px',
            cursor: 'default',
            color: '#444',
          }}
        >
          ↺
        </button>

        {/* Address bar */}
        <div
          style={{
            flex: 1,
            background: '#fff',
            border: '1px solid #7a9fc0',
            borderRadius: '2px',
            padding: '1px 8px',
            fontSize: '12px',
            color: '#1a1a6e',
            fontFamily: '"Segoe UI", Tahoma, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          {/* lock icon */}
          <span style={{ fontSize: '10px', color: '#4a7' }}>🔒</span>
          <span>https://my-projects.local/portfolio</span>
        </div>

        {/* Go button */}
        <button
          style={{
            background: 'linear-gradient(180deg,#e8f0fc,#c5d8f0)',
            border: '1px solid #8aaecc',
            borderRadius: '3px',
            padding: '1px 8px',
            fontSize: '12px',
            cursor: 'default',
            color: '#1a3a6e',
            fontFamily: '"Segoe UI", Tahoma, sans-serif',
          }}
        >
          Go
        </button>
      </div>

      {/* ── IE8 tabs bar ─────────────────────────────────────── */}
      <div
        style={{
          background: '#dce7f5',
          borderBottom: '1px solid #b0c4de',
          padding: '2px 6px 0',
          display: 'flex',
          gap: 2,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            background: '#fff',
            border: '1px solid #b0c4de',
            borderBottom: 'none',
            borderRadius: '4px 4px 0 0',
            padding: '2px 14px',
            fontSize: '12px',
            color: '#222',
            fontFamily: '"Segoe UI", Tahoma, sans-serif',
          }}
        >
          My Projects — Portfolio
        </div>
      </div>

      {/* ── Page content ─────────────────────────────────────── */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px', background: '#fff' }}>
        <h1
          style={{
            fontFamily: '"Segoe UI", Tahoma, sans-serif',
            fontSize: '22px',
            fontWeight: '600',
            color: '#1a3a6e',
            marginBottom: '4px',
            borderBottom: '2px solid #4a90d9',
            paddingBottom: '8px',
          }}
        >
          My Projects
        </h1>
        <p style={{ fontSize: '13px', color: '#555', marginBottom: '20px', fontFamily: '"Segoe UI", Tahoma, sans-serif' }}>
          A selection of projects I've built. Click <strong>View Demo</strong> to open the live site.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #c8d8ea',
                borderRadius: '2px',
                padding: '14px 16px',
                background: index % 2 === 0 ? '#f7faff' : '#fff',
              }}
            >
              <h3
                style={{
                  fontFamily: '"Segoe UI", Tahoma, sans-serif',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#1a3a8e',
                  marginBottom: '6px',
                }}
              >
                {index + 1}. {project.title}
              </h3>

              <p style={{ fontSize: '13px', color: '#333', marginBottom: '10px', lineHeight: '1.55', fontFamily: '"Segoe UI", Tahoma, sans-serif' }}>
                {project.description}
              </p>

              <div style={{ marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Stack:&nbsp;
                </span>
                {project.techStack.map((tech, ti) => (
                  <span
                    key={ti}
                    style={{
                      display: 'inline-block',
                      background: '#dce7f5',
                      border: '1px solid #b0c4de',
                      borderRadius: '2px',
                      padding: '0 7px',
                      fontSize: '11px',
                      color: '#1a3a6e',
                      marginRight: '4px',
                      marginBottom: '4px',
                      fontFamily: '"Segoe UI", Tahoma, sans-serif',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '12px',
                      color: '#1a3a8e',
                      textDecoration: 'underline',
                      fontFamily: '"Segoe UI", Tahoma, sans-serif',
                    }}
                  >
                    🌐 View Demo
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '12px',
                      color: '#1a3a8e',
                      textDecoration: 'underline',
                      fontFamily: '"Segoe UI", Tahoma, sans-serif',
                    }}
                  >
                    📂 View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* IE8-era status bar hint */}
        <div style={{ marginTop: '24px', padding: '8px 12px', background: '#f0f6ff', border: '1px solid #c8d8ea', borderRadius: '2px' }}>
          <p style={{ fontSize: '12px', color: '#555', fontFamily: '"Segoe UI", Tahoma, sans-serif' }}>
            💡 <strong>Tip:</strong> Update the projects array in <code style={{ background: '#dce7f5', padding: '0 4px', fontFamily: 'Courier New, monospace' }}>ProjectsWindow.tsx</code> to add your real projects.
          </p>
        </div>
      </div>

      {/* ── IE8 status bar ───────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(180deg, #f0f4fa 0%, #e0eaf5 100%)',
          borderTop: '1px solid #b0c4de',
          padding: '2px 8px',
          fontSize: '11px',
          color: '#444',
          fontFamily: '"Segoe UI", Tahoma, sans-serif',
          display: 'flex',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <span>Done</span>
        <span>🔒 Protected Mode: Off</span>
      </div>
    </div>
  );
};

export default ProjectsWindow;
