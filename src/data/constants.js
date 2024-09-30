import cLogo from "../images/c-logo.png";
import jsLogo from "../images/js-logo.png";
import htmlLogo from "../images/html-logo.png";
import cssLogo from "../images/css-logo.png";
import nodeLogo from "../images/node-logo.png";
import exLogo from "../images/ex-logo.png";
import ejsLogo from "../images/ejs-logo.png";
import pugLogo from "../images/pug-logo.png";
import btsLogo from "../images/bts-logo.png";
import muiLogo from "../images/mui-logo.png";
import tailwindLogo from "../images/tailwind-logo.png";
import threeLogo from "../images/three-logo.png";
import vercelLogo from "../images/vercel-logo.png";
import renderLogo from "../images/render-logo.png";
import dsaLogo from "../images/dsaLogo.png";
import oopsLogo from "../images/oops-logo.png";
import osLogo from "../images/os-logo.png";
import dbmsLogo from "../images/dbms-logo.png"
import seLogo from "../images/se-logo.png";
import cnLogo from "../images/cn-logo.png";
import cyberLogo from "../images/cyber-logo.png";
import musicLabs from "../images/musiclabs.png";
import mmt from "../images/mmt.png"
import blogApp from "../images/blogapp.png";
import chatApp from "../images/chatapp.jpg";
import i4india from "../images/i4india.png";
import i4indialogo from "../images/i4indiallogo.png";
import blogApp2 from "../images/blogapp2.png"
import promptApp from "../images/promptapp.png"

export const Bio = {
  name: "Mayank Gupta",
  roles: [
    "Web Developer",
    "UI/UX Designer",
    "Programmer",
    "MERN Developer"
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/mayank160903",
  resume:
    "https://drive.google.com/file/d/1XkYQxvJurAbKR949GjRy55ZugLZMOJRZ/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/mayank-gupta-619b98249/",
  leetcode: "https://leetcode.com/u/mayank1609/",
};

export const skills = [

  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "C",
        image: cLogo
      },
      {
        name: "JavaScript",
        image: jsLogo
      },
      {
        name: "HTML5",
        image: htmlLogo
      },
      {
        name: "CSS",
        image: cssLogo
      },
    ]
  },

  {
    title: "Frameworks",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next Js",
        image: 
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      
      {
        name: "Node JS",
        image: nodeLogo
      },
      {
        name: "Express",
        image: exLogo
      },
      {
        name: "EJS",
        image: ejsLogo
      },
      {
        name: "PugJS",
        image: pugLogo
      },

      {
        name: "Bootstrap",
        image: btsLogo
      },
      {
        name: "Material UI",
        image: muiLogo
      },
      {
        name: "TailwindCSS",
        image: tailwindLogo
      },
      {
        name: "Three JS",
        image: threeLogo
      },
    ],
  },

  {
    title: "Tools and Utilities",
    skills: [
      {
        name: "AWS S3",
        image:
          "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      },
      {
        name: "Google Cloud",
        image:
          "https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png",
      },
      
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Vercel",
        image: vercelLogo
      },
      {
        name: "Render",
        image: renderLogo
      },
     
    ],
  },

  {
    title: "Relevant Coursework",
    skills: [
      {
        name: "Data Structures and Algorithms",
        image: dsaLogo
      },
      {
        name: "Object Oriented Programming",
        image: oopsLogo
      },
      {
        name: "Operating Systems",
        image: osLogo
      },
      {
        name: "Database Management System",
        image: dbmsLogo
      },
      {
        name: "Software Engineering",
        image: seLogo
      },
      {
        name: "Computer Networks",
        image: cnLogo
      },
      
      {
        name: "Cyber Security",
        image: cyberLogo
      },
      
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Emblem.png",
    role: "Certification for 'Full MERN Stack Guide by Maximillian' Course",
    company: "By Udemy",
    date: "June 2023 - Jul 2023",
    desc: "Completed a Guide to MERN Stack Web Development. Learnt the four major MERN Technologies - React, Node, Express, MongoDB - and how to implement them on a single project. Understood the MVC Architecture for Backend, Schema structures, end-points/route management, implementation of third party libaries like Google Maps API, and responsive frontend under this course.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "JavaScript",
    ],
    doc: "",
  },
  {
    id: 1,
    img: "https://i.pinimg.com/originals/33/32/db/3332db2e45a36222e63ad99da6513cbc.png",
    role: "Google Cloud Computing Programme",
    company: "GDSC, IIIT Sri City",
    date: "Sept 2023 - Oct 2023",
    desc: "Achieved 8 certifications for the GCCP (Google Cloud Computing Programme) organized by GDSC at IIIT Sri City. Learnt how to use and access the Google Cloud console, and implement the services provided by Google Cloud. ",
    skills: [
      "Google Cloud Console"
    ],
    doc: "",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASLiTpY15ZOGeFT_at0tYKPTVnRAsUkMx8g&s",
    role: "PR Lead for Technical College Club",
    company: "iOTA Club - IIIT Sri City",
    date: "Aug 2023 - May 2024",
    desc: "Performed the role of Team Lead for Public Relations for iOTA Technical Club. Conducted various technical events and hosted multiple tech sessions held by the club. Conducted a workshop on Resume building.",
    skills: [
      "Public Speaking",
      "Leadership",
      "Management"
    ],
    doc: "",
  },
  {
    id: 3,
    img: i4indialogo,
    role: "FreeLance Internship",
    company: "I4India",
    date: "Aug 2024 - Sept 2024",
    desc: "Constructed a Next.js Based Web Application for I4India, hosted on vercel. Currently implementing dockerisation and hosting on official i4india domain.",
    skills: [
      "Next.js",
      "Vercel",
      "Google OAuth 2.0",
      
    ],
    doc: "https://github.com/mayank160903/i4india",
  },
  // {
  //   id: 4,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/gdsc.jpeg?alt=media&token=c162329c-efaa-4be8-a173-8d3f4c48ea70",
  //   role: "Android Developer",
  //   company: "DSC KIIT",
  //   date: "Nov2021 - Present",
  //   desc: "As an Android developer at the Google Developers Student Club (GDCS), I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology. Through my involvement with GDCS, I have also had the opportunity to host and participate in numerous events, including hackathons, study jams, and workshops.",
  //   skills: [
  //     "Leadership",
  //     "Mobile Application Development",
  //     "Kotlin",
  //     "XML",
  //     "Figma",
  //   ],
  // },
  // {
  //   id: 5,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",
  //   role: "Open Source Contributor ",
  //   company: "GirlScript Summer of Code",
  //   date: "May 2023 - Present",
  //   desc: "Contributed to different open-source projects and learn from industry experts",
  // },
];

export const education = [
  {
    id: 0,
    img: 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZzzc3I5fnnxhbFKjD9ZG5zJo7O_2pcVZyw&s",
    school: "Indian Institute Of Information and Technology - Sri City (Chittoor)",
    date: "Dec 2021 - May 2025",
    grade: "7.50 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Indian Institute Of Information and Technology - Sri City . I have completed 6 semesters and I am currently in my 7th Semester (4th Year). I have taken courses in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the iOTA Tehnical Club at IIITS, where I am learning and working on exciting projects with a team of talented developers.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://play-lh.googleusercontent.com/4HKjhkQ4aDXssgjxi_aGHBOvDO9kpeNy7bzhMUQG6zKM9bl-_bDO51YqyzUUtZtDLHFO",
    school: "Parvati RadhaKishen Fomra School, Mathura",
    date: "Apr 2020 - May 2021",
    grade: "95.2%",
    desc: "I completed my class 12 high school education at Parvati RadhaKishen Fomra School, Mathura, where I studied Science with Computer Science.",
    degree: "CBSE(XII), 12th Board",
  },
  {
    id: 2,
    img: "https://play-lh.googleusercontent.com/4HKjhkQ4aDXssgjxi_aGHBOvDO9kpeNy7bzhMUQG6zKM9bl-_bDO51YqyzUUtZtDLHFO",
    school: "Parvati RadhaKishen Fomra School, Mathura",
    date: "Apr 2018 - Apr 2019",
    grade: "95.6%",
    desc: "I completed my class 10 education at Parvati RadhaKishen Fomra School, Mathura.",
    degree: "CBSE(X), 10th Board",
  },
];

export const projects = [
  {
    id: 1,
    title: "I4India",
    date: "Aug 2024 - Sept 2024",
    description:
      "A News Reading Web Application with Google OAuth 2.0 Authentication, admin panel, responsive design and bookmarking functionality.",
    image:
      i4india,
    tags: [
      "Next Js",
      "Tailwind CSS",
      "Vercel",
      "Google OAuth 2.0",
    ],
    category: "web app",
    github: "https://github.com/mayank160903/i4india",
    webapp: "https://i4india.vercel.app/",
    member: [
      {
        name: "Mayank Gupta",
        img: "https://avatars.githubusercontent.com/u/97187052?v=4",
        linkedin: "https://www.linkedin.com/in/mayank-gupta-619b98249/",
        github: "https://github.com/mayank160903/",
      },
      
    ],
  },
 
  {
    id: 0,
    title: "MusicLabs",
    date: "January 2024 - May 2024",
    description:
      "A MERN Stack Music Learning Web platform with two types of users and admin panel.",
    image: musicLabs,
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux", "MERN", "SwaggerUI", "TailwindCSS"],
    category: "web app",
    github: "https://github.com/mayank160903/MusicLabs.com",
    webapp: "https://musiclabs.vercel.app/",
    member: [
      {
        name: "Mayank Gupta",
        img: "https://avatars.githubusercontent.com/u/97187052?v=4",
        linkedin: "https://www.linkedin.com/in/mayank-gupta-619b98249/",
        github: "https://github.com/mayank160903/",
      },
      
    ],
  },
  {
    id: 2,
    title: "Prompt sharing App",
    date: "Aug 2024 - Sept 2024",
    description:
    "A Next.js Prompt sharing application to share AI based prompts and search based prompts on tags, keywords or profile. Implemented Google OAuth 2.0 authentication.",
    image: promptApp,
      tags: ["Next.js", "Google OAuth 2.0 ", "Tailwind CSS", "Vercel"],
    category: "web app",
    github: "https://github.com/mayank160903/promptopia",
    webapp: "https://promptopia-swart-delta.vercel.app/",
    member: [
      {
        name: "Mayank Gupta",
        img: "https://avatars.githubusercontent.com/u/97187052?v=4",
        linkedin: "https://www.linkedin.com/in/mayank-gupta-619b98249/",
        github: "https://github.com/mayank160903/",
      },
      
    ],
  },
  {
    id: 6,
    title: "Whatsapp Clone",
    date: "Jul 2024",
    description:
      "A Chatting application for real time communication using web sockets, enabling online status visibility, profile picture upload, and file upload on AWS S3.",
    image: chatApp ,
    tags: ["React Js", "Node JS", "Express", "MongoDB"],
    category: "web app",
    github: "https://github.com/mayank160903/chattingapp",
    webapp: "",
    member: [
      {
        name: "Mayank Gupta",
        img: "https://avatars.githubusercontent.com/u/97187052?v=4",
        linkedin: "https://www.linkedin.com/in/mayank-gupta-619b98249/",
        github: "https://github.com/mayank160903/",
      },
      
    ],
  },
  {
    id: 5,
    title: "Hotel Booking App",
    date: "Jun 2024 - Jul 2024",
    description:
      "A MERN Stack Hotel Booking application, where a User can book a place as well as post their own accomodation for business purposes.",
    image: mmt,
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
      "NodeMailer",
    ],
    category: "web app",
    github: "https://github.com/mayank160903/makeourtrip",
    webapp: "https://makeourtrip-rho.vercel.app/",
    member: [
      {
        name: "Mayank Gupta",
        img: "https://avatars.githubusercontent.com/u/97187052?v=4",
        linkedin: "https://www.linkedin.com/in/mayank-gupta-619b98249/",
        github: "https://github.com/mayank160903/",
      },
      
    ],
  },
  {
    id: 4,
    title: "PLace Blog Application",
    date: "Jan 2024 - Mar 2024",
    description:
      "A MERN Stack Blog Application to upload Blogs of places along with location fetched from the Google Maps API.",
    image: blogApp,
    tags: ["React", "NodeJS", "Express", "MongoDB", "Google Maps API"],
    category: "web app",
    github: "https://github.com/mayank160903/PlaceVlogs-2.0",
    webapp: "",
    member: [
      {
        name: "Mayank Gupta",
        img: "https://avatars.githubusercontent.com/u/97187052?v=4",
        linkedin: "https://www.linkedin.com/in/mayank-gupta-619b98249/",
        github: "https://github.com/mayank160903/",
      },
      
    ],
  },
  {
    id: 3,
    title: "Blogging App",
    date: "May 2024 - Jun 2024",
    description:
    "A MERN Stack Blogging Application where a user can Create, update and delete blogs.",
    image: blogApp2,
      tags: ["React", "NodeJS", "Express", "MongoDB"],
    category: "web app",
    github: "https://github.com/mayank160903/MyBlogsforAll",
    webapp: "",
    member: [
      {
        name: "Mayank Gupta",
        img: "https://avatars.githubusercontent.com/u/97187052?v=4",
        linkedin: "https://www.linkedin.com/in/mayank-gupta-619b98249/",
        github: "https://github.com/mayank160903/",
      },
      
    ],
  },
 
 
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
