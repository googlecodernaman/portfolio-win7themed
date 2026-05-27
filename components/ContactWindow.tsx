import React, { useState } from 'react';

const labelStyle: React.CSSProperties = {
  fontFamily: '"Segoe UI", Tahoma, sans-serif',
  fontSize: '13px',
  color: '#222',
  display: 'block',
  marginBottom: '3px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: '1px solid #7a9fc0',
  borderRadius: '2px',
  padding: '4px 7px',
  fontSize: '13px',
  fontFamily: '"Segoe UI", Tahoma, sans-serif',
  color: '#111',
  background: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
};

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
    }}
  >
    {children}
  </div>
);

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      border: '1px solid #b0c4de',
      borderTop: 'none',
      borderRadius: '0 0 2px 2px',
      padding: '14px 16px',
      background: '#fafcff',
      marginBottom: '14px',
    }}
  >
    {children}
  </div>
);

const ContactWindow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:mishranaman520@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setStatus('Opening your email client...');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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
      {/* Page heading */}
      <div
        style={{
          paddingBottom: '12px',
          borderBottom: '1px solid #c8d8ea',
          marginBottom: '16px',
        }}
      >
        <div style={{ fontSize: '18px', fontWeight: '600', color: '#1a3a6e' }}>
          Contact / Hire Me
        </div>
        <div style={{ fontSize: '13px', color: '#555', marginTop: '3px' }}>
          Interested in working together? Send me a message below.
        </div>
      </div>

      {/* ── Contact Form ─────────────────────────────────────── */}
      <SectionHeader>Send a Message</SectionHeader>
      <Panel>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={labelStyle} htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle} htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle} htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project or inquiry..."
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>

            {/* Win7-style button row */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '4px' }}>
              <button
                type="button"
                onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
                style={{
                  fontFamily: '"Segoe UI", Tahoma, sans-serif',
                  fontSize: '13px',
                  padding: '4px 18px',
                  cursor: 'pointer',
                }}
              >
                Clear
              </button>
              <button
                type="submit"
                style={{
                  fontFamily: '"Segoe UI", Tahoma, sans-serif',
                  fontSize: '13px',
                  fontWeight: '600',
                  padding: '4px 22px',
                  cursor: 'pointer',
                  background: 'linear-gradient(180deg,#4a90d9,#1a5fa8)',
                  color: '#fff',
                  border: '1px solid #1a4a8a',
                  borderRadius: '3px',
                }}
              >
                Send Message
              </button>
            </div>

            {status && (
              <div
                style={{
                  background: '#e8f5e9',
                  border: '1px solid #a5d6a7',
                  borderRadius: '2px',
                  padding: '6px 10px',
                  fontSize: '13px',
                  color: '#2e7d32',
                  fontFamily: '"Segoe UI", Tahoma, sans-serif',
                }}
              >
                ✓ {status}
              </div>
            )}
          </div>
        </form>
      </Panel>

      {/* ── Connect links ─────────────────────────────────────── */}
      <SectionHeader>Connect</SectionHeader>
      <Panel>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naman-mishra-575476193/', display: 'www.linkedin.com/in/naman-mishra-575476193' },
              { label: 'GitHub', href: 'https://github.com/googlecodernaman', display: 'github.com/googlecodernaman' },
              { label: 'Email', href: 'mailto:mishranaman520@gmail.com', display: 'mishranaman520@gmail.com' },
            ].map(({ label, href, display }) => (
              <tr key={label}>
                <td style={{ fontFamily: '"Segoe UI", Tahoma, sans-serif', fontSize: '13px', fontWeight: '600', color: '#333', padding: '4px 16px 4px 0', width: '90px', whiteSpace: 'nowrap' }}>
                  {label}
                </td>
                <td style={{ padding: '4px 0' }}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    style={{ fontSize: '13px', color: '#1a3a8e', textDecoration: 'underline', fontFamily: '"Segoe UI", Tahoma, sans-serif' }}
                  >
                    {display}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
};

export default ContactWindow;
