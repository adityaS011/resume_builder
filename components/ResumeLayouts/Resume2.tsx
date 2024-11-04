import { Resume } from '@/app/types';
import Link from 'next/link';
import React from 'react';

const ResumeLayout2 = ({ resume }: { resume: Resume }) => (
  <div className='max-w-3xl min-h-screen mx-auto p-4 flex flex-col gap-4'>
    <header className='text-center flex flex-col gap-1'>
      <h1 className='text-4xl font-bold'>{resume.name}</h1>
      <div className='flex justify-center gap-4 text-xs font-bold'>
        {resume.contact.map((item) => (
          <div key={item.type} className='flex items-center'>
            <Link href={item.value}>
              {item.type !== 'Phone' ? item.type : item.value}
            </Link>
          </div>
        ))}
      </div>
    </header>

    <hr className='border-gray-300 my-4' />

    <section>
      <h3 className='text-lg font-semibold'>Experience</h3>
      <ul className='list-disc pl-5'>
        {resume.experience.map((job, index) => (
          <li key={index} className='mb-2'>
            <strong>{job.job}</strong> at{' '}
            <span className='font-medium'>{job.company}</span>{' '}
            <span className='text-gray-500'>({job.duration})</span>
            <ul className='list-disc pl-5'>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className='text-gray-600'>
                  {responsibility}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>

    <hr className='border-gray-300 my-4' />

    <section>
      <h3 className='text-lg font-semibold'>Projects</h3>
      <ul className='list-disc pl-5'>
        {resume.projects.map((project, index) => (
          <li key={index} className='mb-2'>
            <strong>{project.title}</strong>:{' '}
            <span className='text-gray-600'>{project.description}</span>
            <ul className='list-disc pl-5'>
              {project.details.map((detail, idx) => (
                <li key={idx} className='text-gray-600'>
                  {detail}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>

    <hr className='border-gray-300 my-4' />

    <section>
      <h3 className='text-lg font-semibold'>Achievements</h3>
      <ul className='list-disc pl-5'>
        {resume.achievements.map((achievement, index) => (
          <li key={index} className='mb-2'>
            <strong>{achievement.title}</strong> -{' '}
            <span className='text-gray-500'>{achievement.year}</span>
          </li>
        ))}
      </ul>
    </section>

    <hr className='border-gray-300 my-4' />

    <section>
      <h3 className='text-lg font-semibold'>Certifications</h3>
      <ul className='list-disc pl-5'>
        {resume.certifications.map((certification, index) => (
          <li key={index} className='mb-2'>
            <strong>{certification.title}</strong> from{' '}
            <span className='font-medium'>{certification.institution}</span>{' '}
            <span className='text-gray-500'>({certification.year})</span>
          </li>
        ))}
      </ul>
    </section>

    <hr className='border-gray-300 my-4' />

    <section>
      <h3 className='text-lg font-semibold'>Technical Skills</h3>
      <div className='flex flex-wrap gap-2 mb-4'>
        {resume.skills.map((skill, index) => (
          <span
            key={index}
            className='bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700'
          >
            {skill}
          </span>
        ))}
      </div>
    </section>

    <hr className='border-gray-300 my-4' />

    <section>
      <h3 className='text-lg font-semibold'>Education</h3>
      <p className='text-gray-600'>{resume.education}</p>
    </section>
  </div>
);

export default ResumeLayout2;
