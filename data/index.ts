export const navItems = [
  { name: "About", link: "about" },
  { name: "Experience", link: "experience" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" },
];

export const gridItems = [
  {
    title: "💼",
    description: "With over 3 years of experience working with various programming languages and companies across different industries, I've gained valuable insights into software development, teamwork, and efficiency from colleagues, universities, and mentors.",
    className: "lg:col-span-2 col-span-1",
    imgClassName: "",
    titleClassName: "justify-left",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    title: "🗯️",
    description: "I'm passionate about creating visually appealing and smoothly functioning applications. My curiosity drives me in both technology and life. I prioritize important tasks, adhering to the \"eat the frog\" principle.In my free time, I enjoy reading, listening to podcasts, watching TV series, and engaging with social media.",
    className: "lg:col-span-2 col-span-1",
    imgClassName: "",
    titleClassName: "justify-left",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    title: "🧐",
    description: "I\'m constantly seeking opportunities to invest my time and efforts in solving problems, contributing to society, and improving myself.",
    className: "lg:col-span-2 col-span-1",
    imgClassName: "",
    titleClassName: "justify-left",
    img: "",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    title: "Tickets",
    des: "rafted a user-friendly ticket marketplace that accommodates over 1200 users, leveraging microservices, Kubernetes, Docker, Node.js, and Javascript, focusing on strengthening code quality and system performance.",
    img: "/Tickets.jpg",
    iconLists: ["/p.png", "/pandas.png", "/numpy.png", "/seaborn.svg", "/sk.png"],
    link: "https://github.com/tjonty/ticketing",
  },
  {
    title: "Medikit",
    des: "Spearheaded integration of Django, Python, and MongoDB to revolutionize data management for medical stakeholders, ensuring robust and secure handling of sensitive data and obtaining a 30% boost in data processing.",
    img: "/medikit.webp",
    iconLists: ["/numpy.png", "/sk.png", "/pandas.png", "/p.png", "/dv.png"],
    link: "https://github.com/tjonty/medikit_project",
  },
  {
    title: "Retail Revolution AI-Infused",
    des: "Led comprehensive data management for 30+ retail stores, applied Python and Excel for data aggregation and refinement, ensuring exceptional accuracy in data processing and reporting.",
    img: "/bsb.png",
    iconLists: ["/jim.png", "/di.png", "/excel.png", "/sql.png", "/dv.png"],
    link: "https://github.com/tjonty",
  },
  {
    title: "Exploit",
    des: "Implemented an e-commerce website with features such as add to cart, and search, Utilized React Js and Redux’s state management to categorize data within different pages.",
    img: "/exploit.webp",
    iconLists: ["/excel.png", "/t.png", "/pbi.png", "/gh.png", "/sql.png"],
    link: "https://github.com/tjonty/exploit",
  },
];

export const skills = [
  {
    name: "Node.Js",
    img: "/skills/nodejs.png",
    nameImg: "/nodejs.png",
  },
  {
    name: "React",
    img: "/react.png",
    nameImg: "/reactn.png",
  },
  {
    name: "Typescript",
    img: "/skills/typescript.png",
    nameImg: "/typescript.png",
  },
  {
    name: "Javascript",
    img: "/skills/javascript.png",
    nameImg: "/javascript.png",
  },
  {
    name: "Go Lang",
    img: "/skills/golang.png",
    nameImg: "/golang.png",
  },
  {
    name: "Java",
    img: "/skills/java.png",
    nameImg: "/java.png",
  },
  {
    name: "Python",
    img: "/p.png",
    nameImg: "/pn.png",
  },
  {
    name: "AWS",
    img: "/aws.svg",
    nameImg: "/awsn.png",
  },
  {
    name: "Docker",
    img: "/skills/docker.png",
    nameImg: "/java.png",
  },
  {
    name: "Kubernetes",
    img: "/skills/kubernetes.png",
    nameImg: "/kubernetes.png",
  },
  {
    name: "SQL",
    img: "/sql.png",
    nameImg: "/sqln.png",
  },
  {
    name: "MongoDB",
    img: "/skills/mongodb.png",
    nameImg: "/mongodb.png",
  },
  {
    name: "GraphQL",
    img: "/skills/graphql.png",
    nameImg: "/graphql.png",
  },
  {
    name: "Shopify",
    img: "/skills/shopify.png",
    nameImg: "/shopify.png",
  },
  {
    name: "Tailwind",
    img: "/skills/tailwind.png",
    nameImg: "/tailwind.png",
  },
  {
    name: "Git",
    img: "/skills/git.png",
    nameImg: "/git.png",
  },  
];

export const workExperience = [
  {
    title: "Software Engineer",
    company:"Influxer",
    duration:"June 2024 - present",
    desc: "Code for a startup building a platform serves student-athlete for their NIL(Name, Image, Likeness)",
    lines: [
      "Optimized API performance by refactoring queries to raw SQL and fine-tuning backend logic, delivering a 70% reduction in response time and enhancing overall application speed.",
      "Established a blog section within Remix React framework, integrating Shopify-Hydrogen pagination, increased user engagement by 14% while reducing client-side load by 50%.",
      "Architected and launched a Product Recommendation system powered by Remix and React, propelling a 25% increase in sales through personalized athlete and university-based suggestions.",
      "Initiated server infrastructure migration from Node-Lambda to Go, maximizing resource utilization and system performance.",
      "Developed a Python-based CLI tool leveraging Click, streamlining env variable synchronization between local environments and Pocketbase server, catalyzing team productivity and accelerating workflow."
    ],
    // className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    title: "Full Stack Engineer",
    company:"Pro-Tek Consulting",
    duration:"Sept 2023 - June 2024",
    desc: "Design and code for a consulting firm and its client",
    lines: [
      "Orchestrated development of high-efficiency user management APIs (REST, GraphQL) through Node.js, Express.js, and TypeScript, turbocharging backend functionality to achieve below 200ms response times.",
      "Executed database indexing and query optimization for MongoDB (NoSQL), resulting in a 10% reduction in data retrieval time while elevating security standards.",
      "Utilized Azure cloud and spearheaded test automation for a streamlined deployment pipeline, saving 7 hours per release.",
      "Led comprehensive code reviews with a cross-functional team and pioneered a Continuous Integration (CI) server to run automated tests repeatedly, yielding a 15% elevation in product quality."
    ],
    // className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    title: "Software Engineer",
    company:"Par Solution",
    duration:"Oct 2018 - Jul 2021",
    desc: "Design and code internal projects",
    lines: [  
      "Revamped an MVC architecture Spring Boot, AWS, and OAuth, achieving a 30% optimization in throughput, driving responsiveness to front end while aligning product evolution with user preferences.",
      "Troubleshoot 50+ high-priority bugs through troubleshooting and accelerated automated test coverage for critical features to 90%, reducing bug leakage rate from 9% to 1%.",
      "Acquired React, Redux, and TypeScript to refine frontend operations, leading to a 15% amplification in overall UI performance.",
      "Maximized automation coverage from 0 to 50% for content creation-related UI features employing Jest and Mocha, saving 3+ hours of manual effort weekly.",
      "Pioneered deployment of a Python-based web application through Django and MySQL for a client, orchestrated a 5% reduction in deployment time by adhering to an Agile environment and consolidating Jira for efficient project management."
    ],
    // className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/tjonty/",
  },
  {
    id: 2,
    img: "/insta.png",
    link: "https://www.instagram.com/tjonty23/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jontytejani/",
  },
  {
    id: 4,
    img: "/x.png",
    link: "https://x.com/tjonty23",
  },
];
