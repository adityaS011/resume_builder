'use client';
import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import ResumeLayout2 from '@/components/ResumeLayouts/Resume2';
import { Resume, Sections } from '@/app/types';
import ResumeLayout1 from '@/components/ResumeLayouts/Resume1';
import EducationFields from './components/EducationFields';
import ProjectFields from './components/ProjectFields';
import ExperienceFields from './components/ExperienceFields';
import AchievementsFields from './components/AchievementsFields';
import CertificationsFields from './components/CertificationsFields';
import { BiChevronDown, BiDownload, BiPencil } from 'react-icons/bi';
import SkillsField from './components/SkillsFields';
import { sampleResumes } from '@/mockData';

export default function ResumePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [resume, setResume] = useState<Resume | null>(null);
  const [openSections, setOpenSections] = useState({
    name: false,
    education: false,
    experience: false,
    projects: false,
    achievements: false,
    certifications: false,
    skills: false,
  });
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchResume = async () => {
      if (id) {
        const resumeData = sampleResumes[parseInt(id) - 1];
        if (resumeData) {
          setResume(resumeData);
        } else {
          setMessage('Resume not found.');
        }
      }
      setLoading(false);
    };
    fetchResume();
  }, [id]);

  const handleChange = (key: keyof Resume, value: any) => {
    if (resume) {
      setResume({
        ...resume,
        [key]: value,
      });
      setMessage('Resume updated successfully!');
    }
  };

  const downloadPDF = async () => {
    if (resumeRef.current) {
      const canvas = await html2canvas(resumeRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${resume?.name}-resume.pdf`);
    }
  };

  const updateResumeInDB = async () => {
    if (resume) {
      try {
        const response = await fetch(`/api/resumes/${resume.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(resume),
        });

        if (response.ok) {
          const updatedResume = await response.json();
          setResume(updatedResume);
          setMessage('Resume updated successfully!');
        } else {
          setMessage('Failed to update resume.');
        }
      } catch (error) {
        console.error('Error updating resume:', error);
        setMessage('An error occurred while updating the resume.');
      }
    }
  };

  const toggleSection = (section: Sections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  if (loading) {
    return (
      <p className='w-screen h-screen flex items-center justify-center'>
        Loading resume...
      </p>
    );
  }

  if (!resume) {
    return (
      <p className='w-screen h-screen flex items-center justify-center'>
        No resume found.
      </p>
    );
  }

  return (
    <div className='container relative mx-auto p-4 mb-20'>
      <div className='flex flex-row gap-4 '>
        {/* Resume Section */}
        <div className='border w-3/5 shadow-lg '>
          <div
            ref={resumeRef}
            className='w-full '
            style={{ minHeight: '842px' }}
          >
            {id === '1' && <ResumeLayout1 resume={resume} />}
            {id === '2' && <ResumeLayout2 resume={resume} />}
          </div>
        </div>
        {/* Edit Section */}
        <div className='top-2 sticky w-2/5 flex flex-col justify-between h-fit min-h-[40rem] p-4 bg-gray-100 rounded-lg'>
          <div>
            <h2 className='text-xl font-semibold mb-4'>Edit Resume Details</h2>
            {message && <p className='text-green-600 mb-2'>{message}</p>}
            <div className='mb-4'>
              <button
                className='w-full text-left bg-blue-600 text-white flex flex-row justify-between hover:bg-blue-700 p-2 rounded'
                onClick={() => toggleSection('name')}
              >
                <div className='flex items-center gap-2'>
                  <BiPencil className='w-5 h-5' />
                  <span>Name</span>
                </div>
                <BiChevronDown className='w-5 h-5' />
              </button>
              {openSections.name && (
                <input
                  type='text'
                  className='border rounded w-full p-2 mt-2'
                  value={resume.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              )}
            </div>

            <EducationFields
              toggleSection={toggleSection}
              resume={resume}
              openSections={openSections}
              handleChange={handleChange}
            />
            <SkillsField
              toggleSection={toggleSection}
              resume={resume}
              openSections={openSections}
              handleChange={handleChange}
            />

            <ExperienceFields
              toggleSection={toggleSection}
              resume={resume}
              openSections={openSections}
              handleChange={handleChange}
            />
            <ProjectFields
              toggleSection={toggleSection}
              resume={resume}
              openSections={openSections}
              handleChange={handleChange}
            />
            <AchievementsFields
              toggleSection={toggleSection}
              resume={resume}
              openSections={openSections}
              handleChange={handleChange}
            />
            <CertificationsFields
              toggleSection={toggleSection}
              resume={resume}
              openSections={openSections}
              handleChange={handleChange}
            />
            <button
              onClick={updateResumeInDB}
              className='mt-auto mb-4 ml-auto flex flex-row items-center gap-2 tracking-wide bg-blue-500 text-white px-4 py-2 rounded'
            >
              <BiPencil className='w-5 h-5' /> Update Resume
            </button>
          </div>

          <div className='flex justify-between'>
            <button
              onClick={downloadPDF}
              className='mt-auto mx-auto flex flex-row items-center gap-2 tracking-wide bg-green-500 text-white px-4 py-2 rounded'
            >
              <BiDownload className='w-5 h-5' /> Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
