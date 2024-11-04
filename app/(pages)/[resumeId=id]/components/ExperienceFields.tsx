import { Resume, Sections } from '@/app/types';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { HiOfficeBuilding } from 'react-icons/hi';

const ExperienceFields = ({
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
  const addExperience = () => {
    const newExperience = [
      ...resume.experience,
      { job: '', company: '', duration: '' },
    ];
    handleChange('experience', newExperience);
  };

  return (
    <div className='mb-6'>
      <button
        className='w-full flex justify-between items-center bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors'
        onClick={() => toggleSection('experience')}
      >
        <div className='flex items-center gap-2'>
          <HiOfficeBuilding className='w-5 h-5' />
          <span>Experiences</span>
        </div>
        <BiChevronDown className='w-5 h-5' />
      </button>
      {openSections.experience && (
        <div className='mt-4 space-y-4'>
          {resume.experience.map((exp, index) => (
            <div
              key={index}
              className='p-4 bg-white border rounded-lg shadow-sm'
            >
              <input
                type='text'
                className='border border-gray-300 rounded-lg w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Job Title'
                value={exp.job}
                onChange={(e) => {
                  const newExperience = [...resume.experience];
                  newExperience[index].job = e.target.value;
                  handleChange('experience', newExperience);
                }}
              />
              <input
                type='text'
                className='border border-gray-300 rounded-lg w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Company'
                value={exp.company}
                onChange={(e) => {
                  const newExperience = [...resume.experience];
                  newExperience[index].company = e.target.value;
                  handleChange('experience', newExperience);
                }}
              />
              <input
                type='text'
                className='border border-gray-300 rounded-lg w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Duration'
                value={exp.duration}
                onChange={(e) => {
                  const newExperience = [...resume.experience];
                  newExperience[index].duration = e.target.value;
                  handleChange('experience', newExperience);
                }}
              />
            </div>
          ))}
          <button
            onClick={addExperience}
            className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'
          >
            Add Experience
          </button>
        </div>
      )}
    </div>
  );
};

export default ExperienceFields;
