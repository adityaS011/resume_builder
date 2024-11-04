'use client';
import { Resume } from '@/app/types';
import { sampleResumes } from '@/mockData';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ResumeBuilder = () => {
  const router = useRouter();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch('/api/resumes');
        if (response.ok) {
          const data = await response.json();
          setResumes(data);
        } else {
          console.error('Failed to fetch resumes:', response.status);
        }
      } catch (error) {
        console.error('Error fetching resumes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const handleTemplateSelect = (templateId: number) => {
    router.push(`/resume?id=${templateId}`);
  };

  const displayResumes = resumes.length > 0 ? resumes : sampleResumes;

  return (
    <div className='flex flex-col p-6 min-h-screen h-full mb-16 '>
      <div className='w-full max-w-2xl'>
        <h1 className='text-3xl font-bold mb-6 text-center'>
          Select a Template
        </h1>
        {loading ? (
          <p className='text-center w-full h-full '>Loading resumes...</p>
        ) : (
          <div className='flex flex-row gap-4'>
            {displayResumes.map((template) => (
              <div
                key={template.id}
                className='bg-white border rounded-lg shadow-lg w-[40%] h-[50%] relative overflow-hidden flex items-center justify-center cursor-pointer'
                onClick={() => handleTemplateSelect(template.id)}
              >
                <div className='w-full h-full flex items-center justify-center '>
                  <Image
                    alt='resume'
                    src='/resume1.png'
                    width={300}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
