import React, { useEffect, useRef, useState } from 'react';

// Import all images
import HTMLImage from '../assets/Html image.jpeg';
import CSSImage from '../assets/CSS image.webp';
import JSImage from '../assets/JS image.jpg';
import ReactImage from '../assets/React js image.png';
import BootstrapImage from '../assets/Bootstrap image.png';
import TailwindImage from '../assets/TailwindCSS image.png';

import NodeImage from '../assets/Node js image.svg';
import ExpressImage from '../assets/Express js image.png';

import MongoDBImage from '../assets/Mongo Db image.png';
import PostgreSQLImage from '../assets/PostgreSql image.webp';
import MySQLImage from '../assets/MySql image.png';

import FirebaseImage from '../assets/Firebase image.png';
import VercelImage from '../assets/Vercel image.png';
import RenderImage from '../assets/Render image.png';

import GitImage from '../assets/Git image.png';
import GitHubImage from '../assets/github image.png';
import PostmanImage from '../assets/Postman image.webp';
import VSCodeImage from '../assets/Visual Studio image.png';

import PythonImage from '../assets/Python image.png';
import FigmaImage from '../assets/Figma image.png';
import WordPressImage from '../assets/Wordpress image.png';

const Skills = ({ darkMode }) => {
  const skillSections = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: HTMLImage, level: 90 },
        { name: 'CSS3', icon: CSSImage, level: 85 },
        { name: 'JavaScript', icon: JSImage, level: 80 },
        { name: 'React.js', icon: ReactImage, level: 75 },
        { name: 'Bootstrap', icon: BootstrapImage, level: 70 },
        { name: 'Tailwind CSS', icon: TailwindImage, level: 80 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: NodeImage, level: 70 },
        { name: 'Express.js', icon: ExpressImage, level: 65 },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: MongoDBImage, level: 70 },
        { name: 'PostgreSQL', icon: PostgreSQLImage, level: 60 },
        { name: 'MySQL', icon: MySQLImage, level: 65 },
      ],
    },
    {
      title: 'Cloud & Deployment',
      skills: [
        { name: 'Firebase', icon: FirebaseImage, level: 70 },
        { name: 'Vercel', icon: VercelImage, level: 75 },
        { name: 'Render', icon: RenderImage, level: 65 },
      ],
    },
    {
      title: 'Tools & Utilities',
      skills: [
        { name: 'Git', icon: GitImage, level: 85 },
        { name: 'GitHub', icon: GitHubImage, level: 85 },
        { name: 'Postman', icon: PostmanImage, level: 75 },
        { name: 'VS Code', icon: VSCodeImage, level: 90 },
      ],
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'Python', icon: PythonImage, level: 70 },
        { name: 'Figma (UI/UX)', icon: FigmaImage, level: 65 },
        { name: 'WordPress', icon: WordPressImage, level: 60 },
      ],
    },
  ];

  // Animation state
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target);
            if (idx !== -1 && !visibleSections.includes(idx)) {
              setVisibleSections((prev) => [...prev, idx]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleSections]);

  return (
    <section
      id="skills"
      className="py-16"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
    >
      <div className="container mx-auto px-5">
        {/* Title */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? '#ffffff' : '#1f2937' }}
          >
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
          >
            Technologies and tools I work with
          </p>
        </div>

        {/* Sections */}
        {skillSections.map((section, idx) => (
          <div
            key={idx}
            className="mb-14"
            ref={(el) => (sectionRefs.current[idx] = el)}
          >
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: darkMode ? '#ffffff' : '#1f2937' }}
            >
              {section.title}
            </h3>

            <div className="grid gap-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {section.skills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-xl border p-5 flex flex-col gap-4 transition hover:shadow-lg hover:scale-105 duration-300"
                  style={{
                    backgroundColor: darkMode ? '#111827' : '#ffffff',
                    borderColor: darkMode ? '#374151' : '#e5e7eb',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-lg p-2 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                      style={{
                        backgroundColor: darkMode ? '#1f2937' : '#f3f4f6',
                      }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <span
                      className="font-medium"
                      style={{ color: darkMode ? '#ffffff' : '#1f2937' }}
                    >
                      {skill.name}
                    </span>
                  </div>

                  {/* Skill Level Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-orange-500 transition-all duration-1000 ease-out`}
                      style={{
                        width: visibleSections.includes(idx) ? `${skill.level}%` : '0%',
                      }}
                    ></div>
                  </div>

                  <span
                    className="text-sm font-medium"
                    style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
                  >
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
