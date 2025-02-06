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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#383E56",
    date: "August 2021 - January 2023",
    points: [
      "Developed and maintained Angular-based enterprise UI application utilized by over 46 million users, enhancing user engagement and functionality.",
      "Implemented WCAG 2.1 AA compliance standards to ensure that websites are accessible to people with disabilities.",
      "Built and optimized microservices in Spring, enhancing system performance by 27%.",
      "Integrated legacy and modern systems using Spring, enhancing system functionality and reliability.",
      "Collaborated with cross-functional teams to design and implement microservices, reducing development time by 25%.",
      "Engaged in agile practices using Scrum and Jira to deliver high-quality software in iterative sprints, resolving over 150 critical bugs and improving performance by 30%.",
    ],
  },
  {
    title: "Software Developer (Research)",
    company_name: "Clark University",
    icon: clarku,
    iconBg: "#E6DEDD",
    date: "November 2023 - May 2024",
    points: [
      "Developed the Python package (tt_crawl) to streamline interactions with Tiktok Research API.",
      "Improved data validation performance by 90% using threads, async & concurrency.",
      "Built a Machine learning model to identify educational content using NLP & python scientific libraries.",
      "Achieved a 30% performance improvement over the initial models incorporated by LLMs.",
      "Enhanced feature engineering using NLP and LLMs, improving model performance by 20%.",
      "Conducted A/B tests to compare ml models, optimizing performance through data-driven decisions.",
    ],
  },
  {
    title: "Software Developer (Research)",
    company_name: "Clark University",
    icon: clarku,
    iconBg: "#E6DEDD",
    date: "May 2024 - December 2024",
    points: [
      "Developed a full-stack application using React and Django to analyze YouTube videos and divide them into shorter, more digestible segments, enhancing content accessibility and learning efficiency.",
      "Engineered machine learning algorithms to detect and segment videos into chapters and scenes, streamlining the organization of complex information.",
      "Implemented AI-driven content analysis to summarize video details and generate concise scripts, creating shorter videos optimized for learning.",
      "Integrated AI-generated visuals and extracted scene images to build cohesive short videos from segmented content, improving educational value.",
      "Utilized AWS serverless architecture, including Lambda and API Gateway, to enable scalable and cost-efficient deployment.",
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
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates,
};
