import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const resumeId = parseInt(params.id);
  const data = await request.json();

  try {
    const updatedResume = await prisma.resume.update({
      where: { id: resumeId },
      data: {
        ...data,
      },
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
