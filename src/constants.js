// Skills Section Logo's
import htmlLogo from './assets/tools_logo/html.png';
import cssLogo from './assets/tools_logo/css.png';
import javascriptLogo from './assets/tools_logo/javascript.png';
import reactjsLogo from './assets/tools_logo/reactjs.png';
import reduxLogo from './assets/tools_logo/redux.png';
import tailwindcssLogo from './assets/tools_logo/tailwindcss.png';
import nodejsLogo from './assets/tools_logo/nodejs.png';
import expressjsLogo from './assets/tools_logo/express.png';
import mysqlLogo from './assets/tools_logo/mysql.png';
import mongodbLogo from './assets/tools_logo/mongodb.png';
import cLogo from './assets/tools_logo/c.png';
import cppLogo from './assets/tools_logo/cpp.png';
import javaLogo from './assets/tools_logo/java.png';
import pythonLogo from './assets/tools_logo/python.png';
import gitLogo from './assets/tools_logo/git.png';
import githubLogo from './assets/tools_logo/github.png';
import vscodeLogo from './assets/tools_logo/vscode.png';
import postmanLogo from './assets/tools_logo/postman.png';
import figmaLogo from './assets/tools_logo/figma.png';
import netlifyLogo from './assets/tools_logo/netlify.png';
import vercelLogo from './assets/tools_logo/vercel.png';
import csharpLogo from './assets/tools_logo/csharp.png';
import chat from './assets/projects_images/chat_app.png';
import dhs from './assets/projects_images/dhs.png';

// Education Section Logo's
import ceaLogo from './assets/education_logo/cea_logo.jpg';
import nistLogo from './assets/education_logo/nist_logo.jpg';
import ascolLogo from './assets/education_logo/ascol_logo.jpg';

// Project Section Logo's

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: ascolLogo,
    school: 'Amrit Science Campus',
    date: '2022-2026',
    grade: '----',
    desc: "I am currently pursuing by bachelor's degree in Bsc.CSIT at Amrit Science Campus,Lainchour,Kathmandu",
    degree:
      'Bsc.CSIT(Bachelor of Science in Computer Science and Informatin Technology)',
  },
  {
    id: 1,
    img: nistLogo,
    school: 'Nist college',
    date: '2019-2021',
    grade: '3.53',
    desc: 'I completed my +2 in Science from NIST College, building a solid foundation in Physics, Chemistry, and Mathematics. This experience sharpened my analytical skills and fueled my passion for technology and innovation.',
    degree: 'Bachelor of Science - BSC (Computer Science)',
  },
  {
    id: 2,
    img: ceaLogo,
    school: 'Cea High School',
    date: '20',
    grade: '3.85',
    desc: 'I completed my primary and secondary level education from Cea High School, Kathmandu, under the NEB board.',
    degree: 'Secondary Education Examination',
  },
];

export const projects = [
  {
    id: 0,
    title: 'Chat-app',
    description:
      'A real-time chat application built with MERN and Socket.io, enabling instant messaging with user authentication and notifications.',
    image: chat,
    tags: ['MERN', 'React', 'Node.js', 'Socket.io', 'Real-time'],
    github: 'https://github.com/sachhyam12/chat-app',
    webapp: 'https://chat-app-three-eta-99.vercel.app',
  },
  {
    id: 1,
    title: 'Digital Healthcare System',
    description:
      'Digital Healthcare System is an AI-powered platform for disease prediction, built with Next.js, Node.js, and MongoDB, enabling users to get predictive health insights, personalized recommendations, and efficient online healthcare management.',
    image: dhs,
    tags: [
      'React JS',
      'Node.js',
      'MongoDB',
      'Express',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    github: 'https://github.com/sachhyam12/Complete_dhs',
    webapp: 'https://digital-healthcare-orcin.vercel.app',
  },
];
