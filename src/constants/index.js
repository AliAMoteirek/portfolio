import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  repair,
  shopify,
  moviehouse,
  carrent,
  jobit,
  tripguide,
  springboot,
  java,
  cypress,
  isp,
  maintenance,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Java Backend Developer',
    icon: mobile,
  },
  {
    title: 'NodeJs Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'SpringBoot',
    icon: springboot,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Cypress',
    icon: cypress,
  },
];

const experiences = [
  {
    title: 'Mobil Technician',
    company_name: 'Fix My Phone AB',
    icon: repair,
    iconBg: '#FFFFFF',
    date: '2020 - 2022',
    points: [
      'Repairing mobile phones and tablets.',
      'Selling accessories for mobile phones and tablets.',
    ],
  },
  {
    title: 'My Own Company',
    company_name: 'CompuTech',
    icon: shopify,
    iconBg: '#E6DEDD',
    date: '2014 - 2019',
    points: [
      'Repairing computers, mobile phones and tablets.',
      'Selling electronics and accessories.',
    ],
  },
  {
    title: 'IT Manager och Server Administrator',
    company_name: 'Version Apricot LTD',
    icon: maintenance,
    iconBg: '#E6DEDD',
    date: '2012 - 2014',
    points: [
      'Collaborating closely with a team of engineers to oversee the design and implementation of complex systems.',
    ],
  },
  {
    title: 'Internet Service Provider',
    company_name: 'Aoun Networks',
    icon: isp,
    iconBg: '#E6DEDD',
    date: '2010 - 2012',
    points: [
      'Managing and maintaining networks.',
      'Providing technical support to customers.',
      'Rroubleshooting technical issues.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Movie Streaming App',
    description:
      'Web-based platform that allow users to search, stream, and manage movies and TV shows from various providers have revolutionized the way people consume entertainment.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'material ui',
        color: 'pink-text-gradient',
      },
    ],
    image: moviehouse,
    source_code_link: 'https://github.com/AliAMoteirek/final-thesis',
  },
  // {
  //   name: 'Job IT',
  //   description:
  //     'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: 'https://github.com/',
  // },
  // {
  //   name: 'Trip Guide',
  //   description:
  //     'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: 'https://github.com/',
  // },
];

export { services, technologies, experiences, testimonials, projects };
