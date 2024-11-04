import { Resume, Sections } from '@/app/types';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FaComputer } from 'react-icons/fa6';
import { GiSkills } from 'react-icons/gi';

const SkillsField = ({
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
  return (
    <div className='mb-4'>
      <button
        className='w-full flex flex-row justify-between items-center gap-2 text-left bg-blue-600 hover:bg-blue-700 text-white p-2 rounded'
        onClick={() => toggleSection('skills')}
      >
        <div className='flex items-center gap-2'>
          <GiSkills className='w-5 h-5' />
          <span>Skills</span>
        </div>
        <BiChevronDown className='w-5 h-5' />
      </button>
      {openSections.skills && (
        <input
          type='text'
          className='border rounded w-full p-2 mt-2'
          value={resume.skills}
          onChange={(e) => handleChange('skills', e.target.value)}
        />
      )}
    </div>
  );
};

export default SkillsField;
