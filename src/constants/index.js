import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  infosys,
  clarku,
  angular,
  java,
  spring,
  springboot,
  python,
  aws,
  azure,
  kafka,
  libflocom,
  auto_car,
  tt_crawl,
  currency_detection,
  EAPSA,
  egxit,
  GS_jewel,
  jntuh,
  coding,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Career",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Apache Kafka",
    icon: kafka,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "AWS",
    icon: aws,
  },

  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const education = [
  {
    degree: "Master of Science",
    major: "Computer Science",
    university: "Clark University",
    icon: clarku,
    iconBg: "#383E56",
    date: "January 2023 - December 2024",
    course_work: [
      "1ˢᵗ Semester: Design and Analysis of Algorithms, Survery of Systems and Programming Languages, Server Side Web Programming",
      "2ⁿᵈ Semester: Software Engineering, Applied Data Analytics, Fundamentals of Data Engineering",
      "3ʳᵈ Semester: Applied Machine Learning, Advance Data Intelligence, Social Informatics",
      "4ᵗʰ Semester: Internship, Capstone Project",
    ],
    gpa: "3.87/4",
  },
  {
    degree: "Bachelor of Technology",
    major: "Computer Science",
    university: "JNTU Hyderabad",
    icon: jntuh,
    iconBg: "#E6DEDD",
    date: "August 2017 - July 2021",
    course_work: [
      "1ˢᵗ Semester: Mathematics-I, Engineering Physics-I, Engineering Chemistry, Basic Electrical and Electronics Engineering, Engineering Mechanics",
      "2ⁿᵈ Semester: Computer Programming in C, Engineering Physics-II, Mathematics-II, Mathematics-III, Engineering Graphics",
      "3ʳᵈ Semester: Data Structures: C++, Object Oriented Programming: Java, Digital Logic design, Mathematics-IV",
      "4ᵗʰ Semester: Operating Systems, Database Management Systems, Computer organization, Formal Languages and Automata Theory, Business Economics and Financial Analysis",
      "5ᵗʰ Semester: Software Engineering, Computer Networks, Design and analysis of Algorithms, Intellectual Property Rights, Fundamentals of Management",
      "6ᵗʰ Semester: Web Technologies, Compiler Design, Cryptography and Network Security, Information Security Management",
      "7ᵗʰ Semester: Software Process and Project Management, Data Mining, Python Programming, Blockchain, Mini Project",
      "8ᵗʰ Semester: Modern Software Engineering, Computer Forensics, Major Project, Entrepreneurship",
    ],
    gpa: "3.67/4",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Self Employed",
    icon: coding,
    iconBg: "#383E56",
    date: "March 2025 - Present",
    points: [
      "Providing full-stack development, branding and technical integration services for small businesses, delivering end-to-end digital solutions that improve customer engagement and operational efficiency.",
      "Engineered a high-performance restaurant website using React.js with ChowNow API integration, reducing manual order processing by 80% and boosting online order volume by 40%.",
      "Designed complete brand identity (logo/visual assets), strengthening client’s market presence and recognition.",
      "Implemented responsive UI/UX, cross-browser compatibility, and SEO optimizations, improving load times and search visibility.",
      "Collaborated directly with business owners to gather requirements and manage timelines, ensuring 100% on-time, in-budget delivery.",
    ],
  },
  {
    title: "Software Developer - Research",
    company_name: "Clark University",
    icon: clarku,
    iconBg: "#E6DEDD",
    date: "November 2023 - December 2024",
    points: [
      "Developed tt_crawl, a Python package to streamlining interactions with the TikTok Research API, reducing manual extraction time by 85%.",
      "Accelerated TikTok data processing by 6x, leveraging concurrent threading and async I/O, enabling real-time research analytics.",
      "Developed a binary ML model (92% accuracy) to detect educational content, outperforming GPT-4 turbo by 35% through feature engineering (text + NPL embeddings).",
      "Fine-tuned LLMs (GPT-4) as baselines, demonstrating trade-offs between cost, latency, and accuracy for research use cases.",
      "Engineered a scene detection pipeline using OpenCV and FFmpeg to analyze and segment videos with 95% boundary accuracy, paired with a 5% interval keyframe analysis, enabling automated content restructuring. ",
      "Achieved 50-70% video length reduction while retaining 90% of original content value through intelligent scene selection supported by React frontend and Django backend.",
      "Deployed using AWS serverless architecture (Lambda, API Gateway), for scalability and cost-efficiency.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#383E56",
    date: "August 2021 - January 2023",
    points: [
      "Developed and maintained Angular-based enterprise banking applications utilized by over 46 million users.",
      "Led development of the credit card application review page, handling 10M+ monthly submissions, by architecting an Angular frontend with conditional business logic.",
      "Modernized banking applications from Angular 6 to Angular 10, reducing bundle size by 25% and improving runtime performance by 30% through lazy-loaded modules and Tree-shaking.",
      "Implemented WCAG 2.1 AA compliance standards to improve website accessibility for users with disabilities.",
      "Addressed legacy system limitations; designed a Spring Boot middleware microservice to bridge COBOL-based systems with modern APIs, reducing transaction failures by 40%.",
      "Implemented OAuth2 authorization in middleware using Spring Security, reducing unauthorized API access by 100% while maintaining <50ms overhead per transaction.",
      "Debugged and resolved critical code defects, boosting system performance, stability, and reliability.",
      "Engaged in agile practices using Scrum and Jira to deliver high-quality software in iterative sprints, resolving over 150 critical bugs and improving performance by 30%.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "GS Jewellers",
    icon: GS_jewel,
    iconBg: "#383E56",
    date: "July 2019 - July 2021",
    points: [
      "Architected a software solution using Spring backend (Spring Web, Spring Data JPA, Spring Security) and React.js for two financial applications.",
      "Addressed disjointed sales/inventory tracking; built an integrated system automating order fulfilment, tax reporting, and payment processing, cutting operational delays by 70%.",
      "Eliminated payment bottlenecks by integrating JusPay gateway, enabling secure card/UPI transactions and boosting customer checkout speed by 85%.",
      "Slashed monthly financial reconciliation time by 8+ hours by implementing automated sales/tax reports with filtering and export-to-PDF functionality.",
      "Engineered a custom reporting dashboard using React.js and Chart.js, enabling real-time financial data visualization and increasing data accessibility by 50% for stakeholders.",
      "Partnered with non-technical stakeholders (sales, finance, inventory teams) to translate business needs into technical specs, ensuring 100% adoption post-launch.",
      "Deployed systems on AWS with CI/CD pipelines, achieving zero downtime during peak sales periods.",
    ],
  },
  {
    title: "Graduate Teaching Assistant",
    company_name: "Clark University",
    icon: clarku,
    iconBg: "#383E56",
    date: "January 2024 - May 2024",
    points: [
      "Designed and implemented a Full Stack HR application utilizing Angular, Django, and SQLite.",
      "Incorporated ETL processes and Chart.js for efficient data collection and analysis of exit interviews.",
      "Analyzed interview data to generate actionable insights to improve employee retention strategies.",
      "Deployed to AWS, utilizing EC2 instances to ensure high availability and a seamless user experience.",
      "Assisting and mentoring students in their software development projects while providing instruction on Agile and Scrum methodologies, as well as best practices for software engineering.",
    ],
  },
];

const extracurriculars = [{}, {}];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "tt_crawl",
    description:
      "Python package that allows you to interact with the TikTok Research API.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "GNU v3.0",
        color: "green-text-gradient",
      },
    ],
    image: tt_crawl,
    source_code_link: "https://github.com/Saikamesh/tt_crawl",
  },
  {
    name: "Libra FLow Commerce",
    description:
      "“Libra Flow Commerce” is a self-hostable e-commerce platform designed to provide business owners with a fee-free solution for managing online stores and inventory in one place.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "green-text-gradient",
      },
      {
        name: "Azure",
        color: "pink-text-gradient",
      },
    ],
    image: libflocom,
    source_code_link: "https://github.com/Saikamesh/LibFloCom",
  },
  {
    name: "EGXiT",
    description:
      " A web-based application designed to streamline the process of conducting employee exit surveys.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: egxit,
    source_code_link: "https://github.com/Saikamesh/EGXIT.IN-Client",
  },
  {
    name: "EAPSA",
    description:
      "EAPSA (Employee Attrition Prediction & Sentiment Analysis) is an web-based tool designed to predict the likelihood of employees leaving the organization and gain insights into employee sentiments.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "private",
        color: "blue-text-gradient",
      },
    ],
    image: EAPSA,
    source_code_link: "https://github.com/",
  },

  {
    name: "Real time object detection and classification for Autonomous driving",
    description:
      "Implemented a deep learning model using the YOLO algorithm for object detection and classification in self-driving cars, achieving 93% accuracy and publishing research in a peer-reviewed journal.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Publication",
        color: "pink-text-gradient",
      },
      {
        name: "private",
        color: "blue-text-gradient",
      },
    ],
    image: auto_car,
    source_code_link: "https://github.com/",
  },
  {
    name: "Currency recognition using deep learning",
    description:
      "Developed a transfer learning-based model using InceptionV3 for currency classification, achieving 95% accuracy with potential applications in counterfeit detection, and published findings in a peer-reviewed journal.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Publication",
        color: "pink-text-gradient",
      },
      {
        name: "private",
        color: "blue-text-gradient",
      },
    ],
    image: currency_detection,
    source_code_link: "https://github.com/",
  },
];

const certificates = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    issue_date: "December 2021",
    credential_url:
      "https://www.credly.com/badges/9ece01f1-9555-4d29-b7cd-406da8c2a5b6/",
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    issue_date: "November 2021",
    credential_url:
      "https://learn.microsoft.com/en-us/users/saikamesh-1702/credentials/521b68e881f9b706",
  },
  {
    name: "Google IT Automation with Python Professional Certificate",
    issuer: "Google",
    issue_date: "June 2021",
    credential_url:
      "https://www.credly.com/badges/50954792-aa02-46d0-8f3c-e01a07bf5980/",
  },
  {
    name: "Machine Learning",
    issuer: "Stanford Online",
    issue_date: "September 2020",
    credential_url:
      "https://www.coursera.org/account/accomplishments/certificate/B98M62HUCEBJ",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "deeplearning.ai",
    issue_date: "September 2020",
    credential_url:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/H89ZX8QXETHH",
  },
  {
    name: "Tensorflow Developer Professional Certificate",
    issuer: "deeplearning.ai",
    issue_date: "October 2020",
    credential_url:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/BJ5VBK7ZD6ZB",
  },
  {
    name: "Machine Learning Scientist",
    issuer: "DataCamp",
    issue_date: "June 2022",
    credential_url:
      "https://www.datacamp.com/statement-of-accomplishment/track/5960dc9312c33e824b7ce82ed8ed1747d8aee54f?raw=1",
  },
  {
    name: "Full Stack Web Development with React",
    issuer: "Hong Kong University of Science and Technology",
    issue_date: "August 2020",
    credential_url:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/QKTTBH5DQMLZ",
  },
  {
    name: "Web Design for Everybody",
    issuer: "University of Michigan",
    issue_date: "June 2020",
    credential_url:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/H8GDDSRQ8YJB",
  },
];

export {
  technologies,
  education,
  experiences,
  testimonials,
  projects,
  certificates,
};
