// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Education Section Logo's
import JNVLogo from './assets/education_logo/JNV_logo.png';
import SisTechLogo from './assets/education_logo/SisTech_logo.png';


// Project Section Logo's
import wanderlustLogo from './assets/work_logo/wanderlust.png';
import roomRentLogo from './assets/work_logo/Room-rent.png';
import investMoneyLogo from './assets/work_logo/Invest-Money.png';

import movierecLogo from './assets/work_logo/movie_rec.png';


import imagesearchLogo from './assets/work_logo/image_search.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
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
     
      
    ],
  },
];
  
  export const education = [
   
    {
      id: 1,
      img: SisTechLogo,
      school: "Sagar Institute of Science and Technology, Gandhi Nagar, Bhopal",
      date: "Nov 2022 – June 2026 (Expected)",
      grade: "Pursuing",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering. My academic journey has exposed me to core areas such as Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Web Development. Alongside my coursework, I actively work on projects that bridge theoretical learning with practical implementation, helping me strengthen problem-solving skills and build scalable applications. I am also exploring emerging technologies like Artificial Intelligence, Cloud Computing, and Full-Stack Development to align myself with industry demands.",
      degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)"

    },
    {
      id: 2,
      img: JNVLogo,
      school: "Jawahar Navodaya Vidyalaya , Rajgarh",
      date: "Apr 2020 - March 2021",
      grade: "82.6%",
      desc: "I completed my class 12 education from Jawahar Navodaya Vidyalaya , Rajgarh, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: JNVLogo,
      school: "Jawahar Navodaya Vidyalaya , Rajgarh",
      date: "Apr 2018 - March 2019",
      grade: "82%",
      desc: "I completed my class 10 education from Jawahar Navodaya Vidyalaya , Rajgarh, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
     {
      id: 0,
      title: "Wanderlust - Travel & Destination Website",
      description: 
        "A full-stack web app where users can explore, share, and review tourist destinations. Built with Node.js, Express, EJS, and MongoDB, it features user authentication, dynamic listings, reviews, and photo uploads with a responsive design.",
      image: wanderlustLogo,
      tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Authentication", "CRUD", "Responsive Design"],
      github: "https://github.com/Dineshun9/Wanderlust",
      webapp: "https://wanderlust-umyz.onrender.com/listings",
    },

    {
  id: 1,
  title: "Room Rent Application",
  description:
    "A full-stack room rental platform that allows users to list, discover, and book rental rooms based on location, budget, and availability. The application supports user authentication, room management, image uploads, and real-time interactions, providing a smooth experience for both property owners and tenants.",
  image: roomRentLogo, // replace with your room app logo
  tags: [
    "React JS",
    "Node.js",
    "MongoDB",
    "Express",
    "JWT",
    "REST API",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  github: "https://github.com/Dineshun9/",
  webapp: "",
},

    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Dineshun9/",
      webapp: "",
    },
   
   {
      id: 4,
      title: "Invest-Money Subscription Platform",
      description:
        "A subscription-based investment platform that allows users to invest money through structured plans. Users can subscribe to different investment plans, track their invested amount, returns, and wallet balance through a secure and user-friendly interface. The system focuses on transparency, controlled access, and scalable financial operations.",
      image: investMoneyLogo,
      tags: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Wallet System",
      "Subscription Model",
      "JWT Authentication",
      "REST APIs"
    ],
      github: "https://github.com/Dineshun9/",
      webapp: "",
    },

    {
      id: 6,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/Dineshun9/Image-Search-app",
      webapp: "https://imagsearch.netlify.app/",
    }
    
  ];  