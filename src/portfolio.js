/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Karthik's Portfolio",
  description:
    "An enthusiastic person who constantly seeks opportunities to contribute to comprehensive projects that build sustainable and scalable technical systems, aiming to make a meaningful difference",
  og: {
    title: "Karthik Muraliprasad Portfolio",
    type: "website",
    url: "https://karthikmuraliprasad.com/",
  },
};

//Home Page
const greeting = {
  title: "Karthik Muraliprasad",
  logo_name: "Karthik Muraliprasad",
  nickname: "",
  subTitle:
    "An enthusiastic person who constantly seeks opportunities to contribute to comprehensive projects that build sustainable and scalable technical systems, aiming to make a meaningful difference",
  resumeLink:
    "https://drive.google.com/file/d/16TlZ7_JKC57xN8ZDSstZajwAVrs7RwjR/view?usp=sharing",
  portfolio_repository:
    "https://github.com/karthikmurali60/karthikmurali60.github.io",
  githubProfile: "https://github.com/karthikmurali60",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/karthikmurali60",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/karthikmuraliprasad/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:karthik.muraliprasad@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/imkmuralip",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "simple-icons:node-dot-js",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Cloud Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS Cloud and Micorsoft Azure",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying microservices which are serverless, scalable and fault tolerant on the cloud",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on AWS",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
        {
          skillName: "Elasticsearch",
          fontAwesomeClassname: "logos:elasticsearch",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "devicon:dynamodb",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Route53",
          fontAwesomeClassname: "logos:aws-route53",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Fargate",
          fontAwesomeClassname: "logos:aws-fargate",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "AWS RDS",
          fontAwesomeClassname: "logos:aws-rds",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "AWS S3",
          fontAwesomeClassname: "logos:aws-s3",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/karthikmuraliprasad/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of California, Irvine",
      subtitle: "Master of Computer Science",
      logo_path: "uci.png",
      alt_name: "University of California, Irvine",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Courses completed - Advanced Programming and Problem Solving, Machine Learning, Parallel and Distributed Computing, Big Data Management",
        "⚡ Built a Universal Movie Search Engine as part of the Capstone Project",
        "⚡ During my time at university, I was associated with Team Up - Rope Climbing course as a co-facilitator and the Graduate and Family Housing as a housing assistant",
      ],
      website_link: "https://www.uci.edu/",
    },
    {
      title: "PES University",
      subtitle: "B.Tech in Computer Science and Engineering",
      logo_path: "pes.jpg",
      alt_name: "PES University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Studied basic software engineering subjects like DS, Algorithms, DBMS, OS and CN",
        "⚡ Apart from this, I have done courses on Machine Learning, Cloud Computing and Big Data",
        "⚡ Recepient of the prestigious CNR Rao merit scholarship - given to the top 20% of academic performers",
      ],
      website_link: "http://pes.edu",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HashiCorp Certified Terraform Associate",
      subtitle: "HashiCorp",
      logo_path: "terraform.png",
      certificate_link:
        "https://www.credly.com/badges/ff97886c-aee9-42a8-b32e-5ca94a130000",
      alt_name: "HashiCorp Terraform",
      color_code: "#8C151599",
    },
    {
      title: "AWS Solutions Architect Associate",
      subtitle: "Amazon Web Services",
      logo_path: "saa.png",
      certificate_link:
        "https://www.credly.com/badges/780047c6-1d5e-4011-972d-2939ce311508",
      alt_name: "AWS SAA",
      color_code: "#8C151599",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Amazon Web Services",
      logo_path: "ccp.png",
      certificate_link:
        "https://www.credly.com/badges/ec6dda27-ce5b-44e6-9fa7-7ef3e68e4eb6",
      alt_name: "AWS CCP",
      color_code: "#00000099",
    },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "In this section, you'll find a comprehensive overview of my work and internship experiences that have shaped my professional journey. I believe that these experiences have provided me with valuable skills and insights that make me a well-rounded and capable professional in my field.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Saltside Technologies Pvt Ltd.",
          company_url: "https://saltside.se/",
          logo_path: "saltside.png",
          duration: "July 2020 - Aug 2022",
          location: "Bangalore, Karnataka, India",
          descriptions: [
            "⚡ Designed and developed a Search-As-You-Type Recommendation functionality for site users to better access/search for businesses' shops using Elasticsearch Suggesters, causing a 94% increase in e-commerce shop visitors",
            "⚡ Created an in-memory Redis cache to store pending invoices for a given set of products purchased by a particular user in invoice creation for payments flow. The new improved architecture resulted in a decreased latency in invoice creation API by 63%",
            "⚡ Completed tech debts to incorporate Google Protocol Buffers for serializing structured data for communication between Ruby and Go micro services resulting in more than a 90% reduction in number of failed requests",
            "⚡ Implemented producer-consumer event-oriented architecture between micro services using Apache Kafka thereby optimizing Remote Procedure Calls metrics by 47% and increasing reliability and fault tolerance in communication",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "DecOps",
          company_url: "https://decops.xyz/",
          logo_path: "decops.png",
          duration: "June 2023 - September 2023",
          location: "Irvine, California, USA",
          descriptions: [
            "⚡ Implemented an ECDSA based proving circuit using groth16 for Shadw - a peer to peer append-only log based ecosystem for serverless WebAssembly computing",
            "⚡ Leveraged zero knowledge proofs and ZK-SNARKS to achieve secured communication and outsourced computation",
          ],
          color: "#000000",
        },
        {
          title: "Software Engineer Intern",
          company: "Saltside Technologies Pvt Ltd.",
          company_url: "https://saltside.se/",
          logo_path: "saltside.png",
          duration: "January 2020 - June 2020",
          location: "Bangalore, Karnataka, India",
          descriptions: [
            "⚡ Improved large writes by utilizing BatchWriteItem API call to DynamoDB in chat micro service causing a 42% improvement in write operations",
            "⚡ Updated and restructured price matrix configurations storing pricing of different products offered for sale. As a direct impact, latency for queries fetching prices from related AWS RDS database decreased by over 17%",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Welcome to my Projects section! Here you'll find a showcase of the diverse range of projects I've worked on, highlighting my skills, creativity, and passion for what I do. Each project represents a unique challenge and an opportunity for me to push the boundaries of my expertise.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_pic.png",
    description:
      "Hello! I appreciate your interest in my work and would love to hear from you. Whether you have a question, a collaboration opportunity, or simply want to connect, I'm here to listen and respond.You can contact me directly via email or connect with me on social media. I'm always excited to engage with fellow enthusiasts and creative minds. Thank you once again for your interest and for taking the time to visit my portfolio. I look forward to hearing from you soon!",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "74000 Verano Road APT C705, Irvine, California - 92617",
    locality: "Irvine",
    country: "US",
    region: "California",
    postalCode: "92617",
    streetAddress: "74000 Verano Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/EnuP8EMpFoto6C5j8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
