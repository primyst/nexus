import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Financial Advisory Platform',
    description: 'A corporate dashboard for real-time financial insights and reporting.',
    image: '/images/project-1.jpg',
    link: '#',
  },
  {
    title: 'Global Compliance Tracker',
    description: 'Enterprise system to monitor and manage compliance across regions.',
    image: '/images/project-2.jpg',
    link: '#',
  },
  {
    title: 'Investment Portfolio Dashboard',
    description: 'Interactive tool for portfolio tracking, analytics, and visualization.',
    image: '/images/project-3.jpg',
    link: '#',
  },
  {
    title: 'Corporate Strategy Portal',
    description: 'A secure portal for internal strategy and operational planning.',
    image: '/images/project-4.jpg',
    link: '#',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold text-[#0F2A44] sm:text-4xl">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-[#5B6B7C]">
            Selected projects showcasing our enterprise-level solutions and impact.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative overflow-hidden rounded-lg shadow-lg group animate-fade-in"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                <p className="text-white text-sm">{project.description}</p>
                {project.link && (
                  <Link
                    href={project.link}
                    className="mt-2 inline-block text-sm font-medium text-[#C9A227] underline"
                  >
                    View Project
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;