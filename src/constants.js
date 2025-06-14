// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
//import taskremLogo from './assets/work_logo/task_rem.png';
//import npmLogo from './assets/work_logo/npm.png';
//import webverLogo from './assets/work_logo/web_dig.png';
//import cmLogo from './assets/work_logo/cm.png';
//import imagesearchLogo from './assets/work_logo/image_search.png';
//import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      //{ name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Sept 2023 - July 2025",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Dr. Bhimrao Ambedkar University, Agra",
      date: "Sept 2021 - Aug 2023",
      desc: "I completed my Bachelor's degree in  Science (B.Sc.) from Dr. Bhimrao Ambedkar University, Agra",
      degree: "Bachelor of Science - BSC (Science)",
    },  
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Mood-PlayList",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript",],
      github: "https://github.com/rohitbhardwaj100/Mood-Playlist",
      webapp: "https://rohitbhardwaj100.github.io/Mood-Playlist/",
    },
    {
      id: 1,
      title: "E-Commerce WebSite",
      description:
        "A modern, responsive, and dynamic E-Commerce web application built using React.js, featuring multiple product categories, a shopping cart system, and beautiful UI components.",
      image: csprepLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/rohitbhardwaj100/ecommerce-react",
      webapp: "https://ecommerce-react-two-pink.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "A React-based web Portfolio.",
      image: movierecLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
  ];  