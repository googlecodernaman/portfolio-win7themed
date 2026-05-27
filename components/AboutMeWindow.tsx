import React from 'react';

const field = (label: string, value: string) => (
  <tr key={label}>
    <td
      style={{
        fontFamily: '"Segoe UI", Tahoma, sans-serif',
        fontSize: '13px',
        fontWeight: '600',
        color: '#333',
        padding: '4px 12px 4px 0',
        whiteSpace: 'nowrap',
        verticalAlign: 'top',
        width: '140px',
      }}
    >
      {label}
    </td>
    <td
      style={{
        fontFamily: '"Segoe UI", Tahoma, sans-serif',
        fontSize: '13px',
        color: '#111',
        padding: '4px 0',
        lineHeight: '1.5',
      }}
    >
      {value}
    </td>
  </tr>
);

/* Reusable inset-panel section header */
const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: 'linear-gradient(180deg, #dce7f5 0%, #c5d8f0 100%)',
      border: '1px solid #b0c4de',
      borderRadius: '2px 2px 0 0',
      padding: '4px 10px',
      fontSize: '12px',
      fontWeight: '600',
      color: '#1a3a6e',
      fontFamily: '"Segoe UI", Tahoma, sans-serif',
      letterSpacing: '0.01em',
    }}
  >
    {children}
  </div>
);

/* Inset panel body — mimics Windows groupbox */
const Panel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      border: '1px solid #b0c4de',
      borderTop: 'none',
      borderRadius: '0 0 2px 2px',
      padding: '12px 14px',
      background: '#fafcff',
      marginBottom: '14px',
    }}
  >
    {children}
  </div>
);

const skillBadge = (label: string) => (
  <span
    key={label}
    style={{
      display: 'inline-block',
      background: '#dce7f5',
      border: '1px solid #b0c4de',
      borderRadius: '2px',
      padding: '1px 8px',
      fontSize: '12px',
      color: '#1a3a6e',
      marginRight: '5px',
      marginBottom: '5px',
      fontFamily: '"Segoe UI", Tahoma, sans-serif',
    }}
  >
    {label}
  </span>
);

const AboutMeWindow = () => {
  return (
    <div
      style={{
        height: '100%',
        overflowY: 'auto',
        padding: '14px 18px',
        background: '#fff',
        fontFamily: '"Segoe UI", Tahoma, sans-serif',
      }}
    >
      {/* Title row mimicking a "System Properties" heading */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          paddingBottom: '12px',
          borderBottom: '1px solid #c8d8ea',
          marginBottom: '16px',
        }}
      >
        <div>
          <div style={{ fontSize: '18px', fontWeight: '600', color: '#1a3a6e' }}>Naman Mishra</div>
          <div style={{ fontSize: '13px', color: '#555', marginTop: '2px' }}>Software Developer · Full-Stack</div>
        </div>
      </div>

      {/* ── Professional Summary ─────────────────────────────── */}
      <SectionHeader>Professional Summary</SectionHeader>
      <Panel>
        <p style={{ fontSize: '13px', color: '#222', lineHeight: '1.6', margin: 0 }}>
          Passionate Software Developer with expertise in building modern web applications.
          Strong foundation in full-stack development, specialising in intuitive user experiences
          and scalable backend architecture. Enthusiastic about creative engineering challenges
          and clean, maintainable code.
        </p>
      </Panel>

      {/* ── System info-style key/value ──────────────────────── */}
      <SectionHeader>Details</SectionHeader>
      <Panel>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            {field('Role', 'Software Developer')}
            {field('Location', 'India')}
            {field('Experience', '3+ years')}
            {field('Education', 'B.Tech Computer Science')}
            {field('Availability', 'Open to opportunities')}
          </tbody>
        </table>
      </Panel>

      {/* ── Skills ───────────────────────────────────────────── */}
      <SectionHeader>Skills &amp; Technologies</SectionHeader>
      <Panel>
        <div style={{ marginBottom: '10px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
            Frontend
          </div>
          {['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map(skillBadge)}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
            Backend
          </div>
          {['Node.js', 'Python', 'RESTful APIs', 'PostgreSQL', 'MongoDB'].map(skillBadge)}
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
            Tools
          </div>
          {['Git', 'Docker', 'VS Code', 'Figma', 'Postman'].map(skillBadge)}
        </div>
      </Panel>

      {/* ── Experience ───────────────────────────────────────── */}
      <SectionHeader>Work Experience</SectionHeader>
      <Panel>
        <div style={{ paddingLeft: '10px', borderLeft: '3px solid #4a90d9', marginBottom: '14px' }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#111' }}>Software Developer</div>
          <div style={{ fontSize: '11px', color: '#888', margin: '2px 0 6px' }}>Company Name &nbsp;|&nbsp; 2023 – Present</div>
          <p style={{ fontSize: '13px', color: '#333', lineHeight: '1.55', margin: 0 }}>
            Developed and maintained web applications using React and Node.js.
            Collaborated with cross-functional teams to deliver high-quality software on schedule.
          </p>
        </div>
        <div style={{ paddingLeft: '10px', borderLeft: '3px solid #4a90d9' }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#111' }}>Junior Developer</div>
          <div style={{ fontSize: '11px', color: '#888', margin: '2px 0 6px' }}>Previous Company &nbsp;|&nbsp; 2021 – 2023</div>
          <p style={{ fontSize: '13px', color: '#333', lineHeight: '1.55', margin: 0 }}>
            Built responsive UIs and implemented new features. Learned best practices
            in agile software development and code review culture.
          </p>
        </div>
      </Panel>

      {/* ── Education ────────────────────────────────────────── */}
      <SectionHeader>Education</SectionHeader>
      <Panel>
        <div style={{ paddingLeft: '10px', borderLeft: '3px solid #4a90d9' }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#111' }}>B.Tech — Computer Science &amp; Engineering</div>
          <div style={{ fontSize: '11px', color: '#888', margin: '2px 0 6px' }}>University Name &nbsp;|&nbsp; 2017 – 2021</div>
          <p style={{ fontSize: '13px', color: '#333', margin: 0 }}>Graduated with honours. Focus on software engineering, algorithms, and data structures.</p>
        </div>
      </Panel>
    </div>
  );
};

export default AboutMeWindow;
