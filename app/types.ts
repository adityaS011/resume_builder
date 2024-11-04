export type Experience = {
  job: string;
  company: string;
  duration: string;
  responsibilities: string[]; // New field for job responsibilities
};

export type Project = {
  title: string;
  description: string;
  details: string[]; // New field for project features/technologies used
};

export type Achievement = {
  title: string;
  year: string;
};

export type Certification = {
  title: string;
  institution: string;
  year: string;
};

export type Resume = {
  id: number;
  name: string;
  contact: {
    type: string;
    value: string;
  }[]; // Updated to include contact information
  experience: Experience[];
  education: string;
  skills: string[];
  projects: Project[];
  achievements: Achievement[];
  certifications: Certification[];
};

export type Sections =
  | 'name'
  | 'education'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'achievements'
  | 'certifications';
