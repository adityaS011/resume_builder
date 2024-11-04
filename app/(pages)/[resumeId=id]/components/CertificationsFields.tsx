import { Resume, Sections } from '@/app/types';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FaCertificate } from 'react-icons/fa';

const CertificationsFields = ({
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
  const addCertification = () => {
    const newCertifications = [
      ...resume.certifications,
      { title: '', institution: '', year: '' },
    ];
    handleChange('certifications', newCertifications);
  };

  return (
    <div className='mb-6'>
      <button
        className='w-full flex justify-between items-center bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors'
        onClick={() => toggleSection('certifications')}
      >
        <div className='flex items-center gap-2'>
          <FaCertificate className='w-5 h-4' />
          <span>Certifications</span>
        </div>
        <BiChevronDown className='w-5 h-5' />
      </button>
      {openSections.certifications && (
        <div className='mt-4 space-y-4'>
          {resume.certifications.map((certification, index) => (
            <div
              key={index}
              className='p-4 bg-white border rounded-lg shadow-sm'
            >
              <input
                type='text'
                className='border border-gray-300 rounded-lg w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                placeholder='Certification Title'
                value={certification.title}
                onChange={(e) => {
                  const newCertifications = [...resume.certifications];
                  newCertifications[index].title = e.target.value;
                  handleChange('certifications', newCertifications);
                }}
              />
              <input
                type='text'
                className='border border-gray-300 rounded-lg w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                placeholder='Institution'
                value={certification.institution}
                onChange={(e) => {
                  const newCertifications = [...resume.certifications];
                  newCertifications[index].institution = e.target.value;
                  handleChange('certifications', newCertifications);
                }}
              />
              <input
                type='text'
                className='border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                placeholder='Year'
                value={certification.year}
                onChange={(e) => {
                  const newCertifications = [...resume.certifications];
                  newCertifications[index].year = e.target.value;
                  handleChange('certifications', newCertifications);
                }}
              />
            </div>
          ))}
          <button
            onClick={addCertification}
            className='mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors'
          >
            Add Certification
          </button>
        </div>
      )}
    </div>
  );
};

export default CertificationsFields;
