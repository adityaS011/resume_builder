import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// Fetch all resumes
export async function GET() {
  const resumes = await prisma.resume.findMany({
    include: {
      contact: true,
      skills: true,
      experience: true,
      projects: true,
      achievements: true,
      certifications: true,
    },
  });
  return NextResponse.json(resumes);
}

// Create a new resume
export async function POST(request: Request) {
  const data = await request.json();
  const newResume = await prisma.resume.create({
    data,
    include: {
      contact: true,
      skills: true,
      experience: true,
      projects: true,
      achievements: true,
      certifications: true,
    },
  });
  return NextResponse.json(newResume);
}

// Update an existing resume

export async function PUT(request: Request) {
  const { id } = await request.json(); // Assuming you send the ID in the request body

  if (!id) {
    return NextResponse.json(
      { error: 'Resume ID is required' },
      { status: 400 }
    );
  }

  const resumeId = parseInt(id, 10);
  const data = await request.json();

  try {
    const updatedResume = await prisma.resume.update({
      where: { id: resumeId },
      data,
      include: {
        contact: true,
        skills: true,
        experience: true,
        projects: true,
        achievements: true,
        certifications: true,
      },
    });
    return NextResponse.json(updatedResume);
  } catch (error) {
    console.error('Error updating resume:', error);
    return NextResponse.error();
  }
}
