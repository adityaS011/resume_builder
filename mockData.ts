import { Resume } from './app/types';

export const sampleResumes: Resume[] = [
  {
    id: 1,
    name: 'John Doe',
    contact: [
      { type: 'Email', value: 'john.doe@example.com' },
      { type: 'LinkedIn', value: 'https://linkedin.com/in/johndoe' },
      { type: 'GitHub', value: 'https://github.com/johndoe' },
      { type: 'Phone', value: '(123) 456-7890' },
    ],
    experience: [
      {
        job: 'Frontend Developer',
        company: 'Company ABC',
        duration: '2021 - Present',
        responsibilities: [
          'Developed user interfaces using React.js.',
          'Collaborated with backend developers to integrate APIs.',
          'Participated in code reviews and maintained code quality.',
        ],
      },
      {
        job: 'Intern',
        company: 'Company XYZ',
        duration: '2020 - 2021',
        responsibilities: [
          'Assisted in developing a mobile application.',
          'Conducted testing and debugging of features.',
          'Supported the team in daily stand-ups and project management.',
        ],
      },
    ],
    education: 'BS in Computer Science - University of Example',
    skills: ['JavaScript', 'React', 'CSS'],
    projects: [
      {
        title: 'Personal Portfolio',
        description: 'A portfolio website to showcase my work.',
        details: [
          'Used Next.js for server-side rendering.',
          'Implemented a responsive design with Tailwind CSS.',
          'Integrated contact form with email notifications.',
        ],
      },
      {
        title: 'Weather App',
        description: 'A web application to track weather conditions.',
        details: [
          'Fetched weather data using OpenWeatherMap API.',
          'Implemented state management using Redux.',
          'Utilized charts for data visualization.',
        ],
      },
      {
        title: 'Task Manager',
        description: 'A task management application with user authentication.',
        details: [
          'Developed RESTful APIs with Express.js.',
          'Used MongoDB for database management.',
          'Implemented user authentication with JWT.',
        ],
      },
    ],
    achievements: [
      { title: 'Employee of the Month', year: '2022' },
      { title: 'Completed 10 Projects', year: '2021' },
      { title: 'Top Performer in Team', year: '2020' },
    ],
    certifications: [
      {
        title: 'Certified React Developer',
        institution: 'React Academy',
        year: '2021',
      },
      {
        title: 'JavaScript Fundamentals',
        institution: 'Online Academy',
        year: '2020',
      },
      {
        title: 'Agile Methodologies',
        institution: 'Project Management Institute',
        year: '2019',
      },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    contact: [
      { type: 'Email', value: 'jane.smith@example.com' },
      { type: 'LinkedIn', value: 'https://linkedin.com/in/janesmith' },
      { type: 'GitHub', value: 'https://github.com/janesmith' },
      { type: 'Phone', value: '(987) 654-3210' },
    ],
    experience: [
      {
        job: 'Software Engineer',
        company: 'Company DEF',
        duration: '2020 - Present',
        responsibilities: [
          'Designed and implemented scalable web applications.',
          'Led the migration of legacy systems to modern technologies.',
          'Mentored junior developers and interns.',
        ],
      },
      {
        job: 'Junior Developer',
        company: 'Company GHI',
        duration: '2019 - 2020',
        responsibilities: [
          'Assisted in software development lifecycle activities.',
          'Conducted unit testing and participated in QA processes.',
          'Collaborated with cross-functional teams on feature specifications.',
        ],
      },
    ],
    education: 'MS in Software Engineering - Tech University',
    skills: ['Python', 'Django', 'PostgreSQL'],
    projects: [
      {
        title: 'E-commerce Site',
        description: 'Developed a fully functional e-commerce website.',
        details: [
          'Implemented shopping cart and payment processing features.',
          'Utilized Stripe API for payment processing.',
          'Designed the UI using Bootstrap for responsiveness.',
        ],
      },
      {
        title: 'Blog Platform',
        description: 'Created a blogging platform with user roles.',
        details: [
          'Implemented user authentication and authorization.',
          'Used Django for the backend and PostgreSQL for the database.',
          'Developed RESTful APIs for frontend consumption.',
        ],
      },
      {
        title: 'Chat Application',
        description: 'Real-time chat application using WebSocket.',
        details: [
          'Enabled real-time communication with Socket.IO.',
          'Designed a user-friendly interface with React.',
          'Deployed the application using Heroku.',
        ],
      },
    ],
    achievements: [
      { title: 'Best Newcomer', year: '2020' },
      { title: 'Project of the Year', year: '2021' },
      { title: 'Hackathon Winner', year: '2022' },
    ],
    certifications: [
      {
        title: 'AWS Certified Solutions Architect',
        institution: 'Amazon',
        year: '2022',
      },
      {
        title: 'Professional Scrum Master',
        institution: 'Scrum.org',
        year: '2021',
      },
      {
        title: 'Data Science with Python',
        institution: 'Coursera',
        year: '2020',
      },
    ],
  },
];
