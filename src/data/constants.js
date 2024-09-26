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
    "https://drive.google.com/file/d/1H831k049-fmmrYPc34kE3FyZM3q3ver6/view?usp=drive_link",
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
      "A Next.js Web Application for reading news all over the world. Incremented Google OAuth 2.0 for Sign In/ Sign Up, CRUD operations handled by admin, versatile search engine, and bookmarking functionality.",
    image:
      i4india,
    tags: [
      "Next Js",
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
      "Developed a Full Stack Music Learning Platform where a user can search, buy and access courses and an instructor can upload, edit or delete various courses. The Admin can monitor all the actions and events of the application.",
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
    title: "Hotel Booking App",
    date: "Jun 2024 - Jul 2024",
    description:
      "A Hotel Booking app, where a User can book an accomodation as well as post their own accomodation in the application for business purposes.",
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
    title: "PLace Blogging Application",
    date: "Jan 2024 - Mar 2024",
    description:
      "A MERN Stack Blogging Application where a user can upload Blogs of different places along with location fetched from the Google Maps API and the Google Geocoding API.",
    image:
      "data:image/jpeg;base64,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",
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
    image: blogApp,
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
  // {
  //   id: 5,
  //   title: "News App",
  //   date: "May 2023 - Jun 2023",
  //   description:
  //   "A React Application where a user can access and read news based on different categories or search for a specific news topic, fetched from the News API.",
  //   image: newsapp,
  //     tags: ["React", "News API"],
  //   category: "web app",
  //   github: "https://github.com/mayank160903/Global-News-Station-1.0",
  //   webapp: "",
  //   member: [
  //     {
  //       name: "Mayank Gupta",
  //       img: "https://avatars.githubusercontent.com/u/97187052?v=4",
  //       linkedin: "https://www.linkedin.com/in/mayank-gupta-619b98249/",
  //       github: "https://github.com/mayank160903/",
  //     },
      
  //   ],
  // },
  {
    id: 6,
    title: "Whatsapp Clone",
    date: "Jul 2024",
    description:
      "A Chatting application where a user can register and chat with different users. All the messages are stored in the database. The user can see if a particular user is online or not.",
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
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
