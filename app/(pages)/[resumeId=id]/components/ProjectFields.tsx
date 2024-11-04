import { Resume, Sections } from '@/app/types';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FaComputer } from 'react-icons/fa6';

const ProjectFields = ({
  toggleSection,
  resume,
  openSections,
  handleChange,
}: {
  toggleSection: (val: Sections) => void;
  resume: Resume;
  openSections: any;
  handleChange: (key: keyof Resume, value: any) => void;
}) => {
  const addProject = () => {
    const newProjects = [...resume.projects, { title: '', description: '' }];
    handleChange('projects', newProjects);
  };

  return (
    <div className='mb-6'>
      <button
        className='w-full flex justify-between items-center bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors'
        onClick={() => toggleSection('projects')}
      >
        <div className='flex items-center gap-2'>
          <FaComputer className='w-5 h-5' />
          <span>Projects</span>
        </div>
        <BiChevronDown className='w-5 h-5' />
      </button>
      {openSections.projects && (
        <div className='mt-4 space-y-4'>
          {resume.projects.map((project, index) => (
            <div
              key={index}
              className='p-4 bg-white border rounded-lg shadow-sm'
            >
              <input
                type='text'
                className='border border-gray-300 rounded-lg w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Project Title'
                value={project.title}
                onChange={(e) => {
                  const newProjects = [...resume.projects];
                  newProjects[index].title = e.target.value;
                  handleChange('projects', newProjects);
                }}
              />
              <textarea
                className='border border-gray-300 rounded-lg w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Project Description'
                value={project.description}
                onChange={(e) => {
                  const newProjects = [...resume.projects];
                  newProjects[index].description = e.target.value;
                  handleChange('projects', newProjects);
                }}
              />
            </div>
          ))}
          <button
            onClick={addProject}
            className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'
          >
            Add Project
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectFields;
