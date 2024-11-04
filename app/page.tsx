import React from 'react';
import ResumeBuilder from './(pages)/resume-builder/page';

const page = () => {
  return (
    <div className='w-full h-full bg-slate-100 rounded-l-md  border-t border-l border-gray-300 py-4 px-6'>
      <ResumeBuilder />
    </div>
  );
};

export default page;
