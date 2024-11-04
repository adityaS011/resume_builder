import { Resume } from '@/app/types';
import Link from 'next/link';
import React from 'react';

const ResumeLayout1 = ({ resume }: { resume: Resume }) => (
  <div className='w-30% h-40% max-w-3xl  min-h-[80vh] mx-auto py-4 px-4 flex flex-col gap-2 shadow-lg '>
    <header className='text-center flex flex-col gap-1'>
      <h1 className='text-2xl font-bold'>{resume.name}</h1>
      <div className='flex justify-center gap-4 text-xs font-bold'>
        {resume.contact.map((item) => (
          <div key={item.type} className='flex items-center'>
            <Link href={item.value} className='text-gray-600'>
              {item.type !== 'Phone' ? item.type : item.value}
            </Link>
          </div>
        ))}
      </div>
    </header>
    <hr className='border-gray-300 mx-2' />

    <section className='px-2'>
      <h3 className=' font-semibold'>Education</h3>
      <p className='text-gray-600 text-sm pl-3'>{resume.education}</p>
      <hr className='border-gray-300 mt-1' />
    </section>

    <section className='px-2'>
      <h3 className=' font-semibold'>Technical Skills</h3>
      <ul className='flex flex-row gap-2 text-sm pl-3'>{resume.skills}</ul>
      <hr className='border-gray-300 mt-1' />
    </section>

    <section className='px-2'>
      <h3 className=' font-semibold'>Experience</h3>
      <ul>
        {resume.experience.map((job, index) => (
          <li key={index} className='mb-2 text-sm'>
            <div className='font-semibold'>- {job.job}</div>
            <span className='font-medium pl-1'>{job.company}</span>{' '}
            <span className='text-gray-600'>({job.duration})</span>
            <ul className='pl-5'>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className='text-gray-800'>
                  - {responsibility}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <hr className='border-gray-300' />
    </section>

    <section className='px-2'>
      <h3 className=' font-semibold'>Projects</h3>
      <ul>
        {resume.projects.map((project, index) => (
          <li key={index} className='mb-1 text-sm '>
            <div className='flex flex-row '>
              <div className='font-semibold'>- {project.title}</div>
              <span className='text-black font-medium  pl-1'>
                : {project.description}
              </span>
            </div>
            <ul className='pl-5'>
              {project.details.map((detail, idx) => (
                <li key={idx} className='text-gray-800'>
                  - {detail}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <hr className='border-gray-300' />
    </section>

    <section className='px-2'>
      <h3 className=' font-semibold'>Achievements</h3>
      <ul className='list-disc px-5 flex flex-col'>
        {resume.achievements.map((achievement, index) => (
          <li key={index} className='flex flex-row text-sm justify-between'>
            <div className='font-semibold'>{achievement.title}</div>
            <span className='text-gray-600'>-{achievement.year}</span>
          </li>
        ))}
      </ul>
      <hr className='border-gray-300 mt-1' />
    </section>

    <section className='px-2'>
      <h3 className=' font-semibold'>Certifications</h3>
      <ul className='list-disc px-5 flex flex-col'>
        {resume.certifications.map((certification, index) => (
          <li key={index} className='flex flex-row gap-2 text-sm'>
            <div className='font-semibold'>{certification.title}</div> from{' '}
            <div className='flex flex-row gap-1 '>
              <span className='font-medium'>{certification.institution}</span>
              <span className='text-gray-600'>({certification.year})</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default ResumeLayout1;
