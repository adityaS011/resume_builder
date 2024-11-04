import { Resume, Sections } from '@/app/types';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { GiAchievement } from 'react-icons/gi';

const AchievementsFields = ({
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
  const addAchievement = () => {
    const newAchievements = [...resume.achievements, { title: '', year: '' }];
    handleChange('achievements', newAchievements);
  };

  return (
    <div className='mb-6'>
      <button
        className='w-full flex justify-between items-center bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors'
        onClick={() => toggleSection('achievements')}
      >
        <div className='flex items-center gap-2'>
          <GiAchievement className='w-5 h-5' />
          <span>Achievements</span>
        </div>
        <BiChevronDown className='w-5 h-5' />
      </button>
      {openSections.achievements && (
        <div className='mt-4 space-y-4'>
          {resume.achievements.map((achievement, index) => (
            <div
              key={index}
              className='p-4 bg-white border rounded-lg shadow-sm'
            >
              <input
                type='text'
                className='border border-gray-300 rounded-lg w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Achievement Title'
                value={achievement.title}
                onChange={(e) => {
                  const newAchievements = [...resume.achievements];
                  newAchievements[index].title = e.target.value;
                  handleChange('achievements', newAchievements);
                }}
              />
              <input
                type='text'
                className='border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Year'
                value={achievement.year}
                onChange={(e) => {
                  const newAchievements = [...resume.achievements];
                  newAchievements[index].year = e.target.value;
                  handleChange('achievements', newAchievements);
                }}
              />
            </div>
          ))}
          <button
            onClick={addAchievement}
            className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'
          >
            Add Achievement
          </button>
        </div>
      )}
    </div>
  );
};

export default AchievementsFields;
