import { Resume, Sections } from '@/app/types';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { GiGraduateCap } from 'react-icons/gi';

const EducationFields = ({
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
        onClick={() => toggleSection('education')}
      >
        <div className='flex items-center gap-2'>
          <GiGraduateCap className='w-5 h-5' />
          <span>Education</span>
        </div>
        <BiChevronDown className='w-5 h-5' />
      </button>
      {openSections.education && (
        <input
          type='text'
          className='border rounded w-full p-2 mt-2'
          value={resume.education}
          onChange={(e) => handleChange('education', e.target.value)}
        />
      )}
    </div>
  );
};

export default EducationFields;
