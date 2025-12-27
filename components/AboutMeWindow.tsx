import React from 'react';
import Image from 'next/image';

const AboutMeWindow = () => {
  return (
    <div className="h-full overflow-auto p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">About Me</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I am a passionate Software Developer with expertise in building modern web applications. 
            With a strong foundation in full-stack development, I specialize in creating intuitive 
            user experiences and scalable backend solutions.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>React.js & Next.js</li>
                <li>TypeScript & JavaScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Node.js</li>
                <li>Python</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">
            Experience
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">Software Developer</h4>
              <p className="text-sm text-gray-600 mb-2">Company Name | 2023 - Present</p>
              <p className="text-gray-700">
                Developed and maintained web applications using modern technologies. 
                Collaborated with cross-functional teams to deliver high-quality software solutions.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">Junior Developer</h4>
              <p className="text-sm text-gray-600 mb-2">Previous Company | 2021 - 2023</p>
              <p className="text-gray-700">
                Built responsive web interfaces and implemented new features. 
                Learned best practices in software development and agile methodologies.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">
            Education
          </h3>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-800">Bachelor of Technology in Computer Science</h4>
            <p className="text-sm text-gray-600 mb-2">University Name | 2017 - 2021</p>
            <p className="text-gray-700">
              Graduated with honors. Focused on software engineering, algorithms, and data structures.
            </p>
          </div>
        </section>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Update the <code className="bg-gray-200 px-2 py-1 rounded text-xs">AboutMeWindow.tsx</code> file to add your own professional information, skills, and experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeWindow;
