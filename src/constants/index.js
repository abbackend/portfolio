import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  laravel,
  symfony,
  vuejs,
  mysql,
  python,
  mongodb,
  docker,
  profilics,
  git,
  cmc,
  elevatus,
  plansecurely,
  skibutlers
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Web Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile
  }
];

const technologies = [
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Symfony",
    icon: symfony,
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue.js",
    icon: vuejs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git
  }
];

const experiences = [
  {
    title: "Junior Web Developer",
    company_name: "Profilics Systems Pvt. Ltd.",
    icon: profilics,
    iconBg: "#383E56",
    date: "Oct 2019 - Jan 2020",
    points: []
  },
  {
    title: "Web Developer",
    company_name: "Profilics Systems Pvt. Ltd.",
    icon: profilics,
    iconBg: "#383E56",
    date: "Jan 2020 - Dec 2020",
    points: [
      "Built an application with multiple roles and permissions.",
      "Created Restful APIs.",
      "Integrated card and address validation system."
    ]
  },
  {
    title: "Lead Web Developer",
    company_name: "Profilics Systems Pvt. Ltd.",
    icon: profilics,
    iconBg: "#383E56",
    date: "Jan 2021 - Dec 2021",
    points: [
      "Built a CRM system from scratch.",
      "Integrate Zapier webhook for Lending pad sync.",
      "Added RingCentral for SMS gateway.",
      "Integrated PDF and Image manipulation system."
    ]
  },
  {
    title: "Senior Web Developer",
    company_name: "Profilics Systems Pvt. Ltd.",
    icon: profilics,
    iconBg: "#383E56",
    date: "Jan 2022 - May 2022",
    points: [
      "Built application with 10k+ active users.",
      "Added Stripe payment gateway.",
      "Managed and educated team of 4 developers.",
      "Worked with unit test based structure."
    ]
  },
  {
    title: "Senior Web Developer",
    company_name: "Profilics Systems Pvt. Ltd.",
    icon: profilics,
    iconBg: "#383E56",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Worked with microstructure based application.",
      "Created reusable code structure.",
      "Worked with elastic search and redis using Docker."
    ]
  },
  {
    title: "Senior Web Developer",
    company_name: "Profilics Systems Pvt. Ltd.",
    icon: profilics,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Worked with microstructure based application.",
      "Created reusable code structure.",
      "Worked with elastic search and redis using Docker.",
      "Worked with Rest full APIs."
    ]
  },
];

const projects = [
  {
    name: "Plan Securely",
    description: "We were building a platform which makes it easy to connect with local financial and estate planning experts.",
    tags: [
      {
        name: "laravel 6",
        color: "blue-text-gradient",
      },
      {
        name: "php 7.4",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: plansecurely,
    live_link: "https://plansecurely.com",
  },
  {
    name: "Clear Mortgage Capital",
    description: "We were building an application to process mortgages.",
    tags: [
      {
        name: "symfony 5",
        color: "blue-text-gradient",
      },
      {
        name: "php 7.3",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
      {
        name: "vue.js",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      }
    ],
    image: cmc,
    live_link: "https://www.clearmortgagecapital.com",
  },
  {
    name: "Ski Butlers",
    description: "We were building an application like ecommerce to make ski vacations convenient & deliver top quality equipment with the simplest processes.",
    tags: [
      {
        name: "laravel 8",
        color: "blue-text-gradient",
      },
      {
        name: "php 8",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
      {
        name: "vue.js",
        color: "green-text-gradient",
      },
      {
        name: "craft cms",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      }
    ],
    image: skibutlers,
    live_link: "https://www.skibutlers.com",
  },
  {
    name: "Elevatus",
    description: "We were building an award-winning recruitment and video interviewing software that streamlines the entire hiring cycle.",
    tags: [
      {
        name: "laravel 6",
        color: "blue-text-gradient",
      },
      {
        name: "php 7.4",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "blue-text-gradient",
      },
      {
        name: "elastic search",
        color: "green-text-gradient",
      },
      {
        name: "react js",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      }
    ],
    image: elevatus,
    live_link: "https://www.elevatus.io"
  }
];

const details = {
  first_name: "Ashish",
  last_name: "Bairagi",
  about: "I am a Full Stack Developer with 4+ years of experience working on large scale web apps and web solutions by using various PHP Frameworks like Laravel and Symfony.\n" +
    "I can build complete Project (Frontend UI/UX + DB Design + Backend).\n\n" +
    "I always stick to my client's vision. When I work on any new project or idea. I always make discussion with my client to understand views and clear all the requirements.\n\n" +
    "I am a person with positive attitude and always assist my clients to enhance their business to leverage the power of web preference and web solutions. I am fully capable of handle the project independently and also can work as team member.",
  tagline: "Full Stack Web Developer - Specialized in Laravel & Symfony",
  tags: "frontend developer, developer portfolio, next.js, react.js, tailwind css, node.js, mongodb, three.js, react-three"
};

export { services, technologies, experiences, projects, details };
