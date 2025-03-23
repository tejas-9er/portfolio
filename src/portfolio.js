/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tejas Gandre",
  title: "Hi all, I'm Tejas",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Angularjs / Vuejs / Reactjs / Nodejs / PostgreSQL and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1A-w5sjijHTmdJROczdkeYA1uAg0c_OFw/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tejas-9er",
  linkedin: "https://www.linkedin.com/in/tejas-gandre/",
  gmail: "tejas.s.gandre@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as RabbitMQ/ AWS / GCP"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angularjs",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State Polytechnic University, Pomona",
      logo: require("./assets/images/CalPolyPomonaLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2019 - December 2020",
      // desc: "Participated in the research of a novel security system and published 1 paper.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Fergusson College, Pune",
      logo: require("./assets/images/FC.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2012 - May 2015",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Google",
      companylogo: require("./assets/images/GoogleLogo.jpg"),
      date: "February 2023 - December 2024",
      desc: `During my tenure, I was a part of the CLI horizontal team for Google's private cloud(GDC air-gapped).
      My primary responsibilities focused on creating features and utilities that other teams could utilize to develop their features for the CLI. 
      Apart from my primary responsibilities, I also participated in programs to improve product quality by becoming a Principle Pioneer and stress-testing products as required.`,
      descBullets: [
        `Developed CLI-Trees, using Golang and Cobra, to enhance terminal configuration and enhanced the CLI performance by 10%.`,
        `Automated end-to-end testing, leading to a 30% reduction in testing time and a substantial improvement in product quality and reliability.`,
        `Led multi-zone efforts for the GDC-air gapped Command Line Interface team, ensuring timely completion of a billion-dollar contract.`,
        `Designed and implemented user-friendly utility tools, empowering sister teams to effectively utilize the CLI and create features that led to essential contract completion.`,
        `Collaborated with UX designers and cross-functional teams to create multiple downloadable CLI versions.`,
        `Significantly reduced CLI bundle size by 30%, resulting in faster download times and improved user satisfaction.`,
        `Conducted rigorous code reviews to ensure adherence to best practices, leading to a more robust and maintainable codebase.`
      ]
    },
    {
      role: "Fullstack Developer",
      company: "IDG",
      companylogo: require("./assets/images/IDGLogo.png"),
      date: "February 2021 - February 2023",
      desc: `During my tenure, I focused on converting intent data into human-readable metrics. 
      I was responsible for converting intent data into human-readable data, displaying it on various dashboards, and creating dashboards if they did not exist. 
      I achieved this using Javascript, AngularJs, VueJs, NodeJs, and PostgreSQL Database hosted on AWS.`,
      descBullets: [
        `Migrated an entire product from AngularJS to VueJS.`,
        `Created a tool to classify topics based on human interpretation`,
        `Created the UI, UX, API, and information retrieval system for a module to market our product to different companies.`,
        `Responsible for custom data retrieval on customer's demand`,
        `Developed a dashboard that helped identify marketing leads and improve sales tactics globally.`
      ]
    },
    {
      role: "Software Engineer, Research Assistant",
      company: "California State Polytechnic University, Pomona",
      companylogo: require("./assets/images/CalPolyPomonaLogo.png"),
      date: "February 2019 - December 2020",
      desc: `Developed an authentication system using EEG signals and music.`,
      descBullets: [
        `Developed a preprocessing model using MNE-Python that filtered noise such as eyeblinks and muscle movement from the captured EEG signals and improved the sound to noise ratio, optimizing the brainprint by 30%.`,
        `Developing a website using Django, Python, HTML5, and CSS and making the code open source for further development of the EEG-security community.`,
        `Implemented one-class SVM, KNN model, and non-linear SVM using Python and Scikit-learn, classifying participants with 96% accuracy based on their brainwaves.`,
        `Developed protocols for data collection.`,
        `Presented the research in the IEEE Big Data Conference in LA Dec 9-12, 2019`
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Project Venn",
      companylogo: require("./assets/images/ProjectVennLogo.png"),
      date: "May 2018 - May 2019",
      desc: `Developed a content-based recommender system for social networking purposes`,
      descBullets: [
        `Developed a content-based recommender system for social networking purposes, using Python which increased the accuracy of meaningful matches by 15%`,
        `Increased the system accuracy by increasing the user database which was achieved by creating dummy profiles with different personalities that would interact among themselves.`,
        `Collaborated remotely with offshore developers to design the recommender system and create a new graph database with Neo4j.`
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Triblio",
      companylogo: require("./assets/images/TriblioLogo.png"),
      date: "February 2019 - December 2020",
      desc: ``,
      descBullets: [
        `Developed a preprocessing model using MNE-Python that filtered noise such as eyeblinks and muscle movement from the captured EEG signals and improved the sound to noise ratio, optimizing the brainprint by 30%.`,
        `Developing a website using Django, Python, HTML5, and CSS and making the code open source for further development of the EEG-security community.`,
        `Implemented one-class SVM, KNN model, and non-linear SVM using Python and Scikit-learn, classifying participants with 96% accuracy based on their brainwaves.`,
        `Developed protocols for data collection.`,
        `Presented the research in the IEEE Big Data Conference in LA Dec 9-12, 2019`
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publication"),
  // subtitle:
  //   "Publication, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "An Authentication System using Neurological Responses to Music",
      subtitle:
        `Developed an authentication mechanism with an accuracy rate between 76.4%-92.3%.`,
      image: require("./assets/images/EEGProject.jpg"),
      imageAlt: "An Authentication System using Neurological Responses to Music Logo",
      footerLink: [
        {
          name: "IEEE Paper",
          url: "https://ieeexplore.ieee.org/document/9006491"
        }
      ]
    },
    // {
    //   title: "GIT",
    //   subtitle:
    //     "Completed Certifcation from LinkedIn for GIT",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },
    // {
    //   title: "Jenkins",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // },
    // {
    //   title: "Vagrant",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // },
    // {
    //   title: "Docker",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // },
    // {
    //   title: "Test Driven Development",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // },
    // {
    //   title: "React.js",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // },
    // {
    //   title: "npm",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(646)-906-6175",
  email_address: "tejas.s.gandre@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
