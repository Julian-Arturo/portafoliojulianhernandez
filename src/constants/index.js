import {
  mobile,
  backend,
  web,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  flutter,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  firebase,
  incubapp,
  logo27,
  hexa,
  dash,
  canchaapp,
  greenwall,
  valliu,
  recetas,
  dart,
  andres,
  gustavo,
  industries,
  mosi,
  marguil,
  portfolio,
  mc
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
    title: "Mobile Developer",
    icon: mobile,
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "pink-text-gradient",
      },
      {
        name: "Native Script",
        color: "blue-text-gradient",
      },
      {
        name: "Kotlin",
        color: "green-text-gradient",
      },
      {
        name: "Swift",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    title: "Web Developer",
    icon: web,
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Flutter Web",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  
  {
    title: "Backend Developer Junior",
    icon: backend,
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "GIT",
        color: "blue-text-gradient",
      },
    ],
  },
  {
    title: "UI/UX Design",
    icon: creator,
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "XD",
        color: "green-text-gradient",
      },
      {
        name: "Adobe",
        color: "pink-text-gradient",
      },
      {
        name: "Blender",
        color: "blue-text-gradient",
      },
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Flutter and React.js/Next.js Engineer",
    company_name: "27 INDUSTRIES",
    icon: logo27,
    iconBg: "#383E56",
    date: "Jun 2023 - Current",
    points: [
      "Add new functionalities and app flavors for thousands of users in Colombia.",
      "Maintain key functionalities for the mobile apps in Dart.",
      "Working with technologies like AWS, Firebase, and Google Analytics. ",
    ],
  },
  {
    title: "Developer",
    company_name: "HEXA SOLUTIONS",
    icon: hexa,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - May 2023",
    points: [
      "Delivered a Mobile App for a national banking company",
      "Startup environment, playing a crucial role between clients and Founders team. ",
      "Flutter with Dart, implementing MVC, Firebase and Clean architecture.",
    ],
  },
  {
    title: "Flutter Engineer",
    company_name: "DASHFLEET",
    icon: dash,
    iconBg: "#383E56",
    date: "Feb 2021 - Feb 2022",
    points: [
      "Deliver mobile app for Android and iOS users across the country.",
      "Increased user retention by 30% after new app features and releases",
      "It was possible to get more customers like COPETRAN in Colombia",
    ],
  },
  {
    title: "Software Engineer Junior",
    company_name: "INCUBAPP VENTURE CAPITAL",
    icon: incubapp,
    iconBg: "#E6DEDD",
    date: "Jul 2020 - Dic 2020",
    points: [
      "Design the minimum viable product designs on a Figma prototype.",
      "Test prototype with real world users and applying changes according to learning.",
      "Assisted in the development of new app features, improving overall functionality and user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Julián Hernández as a talented developer and designer. His experience in mobile app development and web design is reflected in his ability to create both functional and visually appealing technological solutions. He stands out for his teamwork skills, effective communication, and ability to meet deadlines.",
    name: "Andrés Florez",
    designation: "Android Developer",
    company: "Activeone",
    image: andres,
  },
  {
    testimonial:
      "Julián distinguishes himself with his meticulous approach and exceptional proactivity, ensuring that every project progresses seamlessly. His openness to new ideas and willingness to collaborate make him an invaluable asset to any team. Working with him is not only efficient but also a highly rewarding experience, as he fosters a smooth and cooperative working environment that drives success.",
    name: "Gustavo Herrera",
    designation: "Agente Comercial",
    company: "Erco Energy",
    image: gustavo,
  },
];

const projects = [
  {
    name: "CanchaApp",
    description:
      "Development of a mobile app for managing sports events, designed to streamline the entire process of organizing games. The app not only allows users to schedule matches efficiently but also provides a user-friendly interface for quickly finding and reserving available courts",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Google Services",
        color: "pink-text-gradient",
      },
    ],
    image: canchaapp,
    source_code_link: "",
  },
  {
    name: "GreenWall Smart",
    description:
      "Development of a mobile app aimed at managing the status of a garden. The app connects via Bluetooth to a microcontroller, retrieves data, and sends it to a Firebase database, displaying the information in real time.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Microcontroller",
        color: "blue-text-gradient",
      },
    ],
    image: greenwall,
    source_code_link: "",
  },
  {
    name: "Valliu",
    description:
      "Development of a virtual wallet designed to provide public transportation services in Valledupar, Colombia. The app enables users to top up their transportation card, view bus stops, and make mobile phone recharges, among other features.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Google Services",
        color: "green-text-gradient",
      },
      {
        name: "Payment gateway",
        color: "pink-text-gradient",
      },
    ],
    image: valliu,
    source_code_link: "",
  },
  {
    name: "RecipeApp",
    description:
      "This app aims to provide users with recipes they can prepare at home, including a list of ingredients and step-by-step instructions. Designed to simplify home cooking, it offers a clear and practical guide for making a variety of dishes.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "MVC",
        color: "pink-text-gradient",
      },
    ],
    image: recetas,
    source_code_link: "https://github.com/Julian-Arturo/recetas-cocina",
  },
  {
    name: "27Industries SAS",
    description:
      "Web development for 27Industries, created with Next.js from construction to deployment on Hostinger. The site features an intuitive and well-detailed design, including a functional contact form and links to social media, ensuring a comprehensive and smooth user experience.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Hostinger",
        color: "pink-text-gradient",
      },
    ],
    image: industries,
    source_code_link: "https://27industries.com.co/",
  },

  {
    name: "MOS$",
    description:
      "Development of a digital wallet for Crezcamos with an intuitive and user-friendly interface. The app facilitates secure transfers, merchant registration, and reliable money management. Its design is optimized to provide a smooth and accessible experience for all users.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Clean Architecture",
        color: "pink-text-gradient",
      },
    ],
    image: mosi,
    source_code_link: "https://play.google.com/store/apps/details?id=com.crezcamos.users&hl=es_419",
  },

  {
    name: "Marguil",
    description:
      "Development of a website for an insurance agency using React and Vite. The platform features an integrated contact form and allows for service configuration through an easy-to-use admin panel.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: marguil,
    source_code_link: "https://marguil.com/",
  },
  {
    name: "MC Constructions",
    description:
      "Development of a modern website for a construction company, built with React. The website includes a contact form. It is designed with a responsive approach to ensure an optimal experience on devices. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Formspree",
        color: "green-text-gradient",
      },
    ],
    image: mc,
    source_code_link: "https://mcconstruccionessas.com/",
  },
  {
    name: "Portfolio Julian",
    description:
      "Personal portfolio with a modern design and 3D renderings, showcasing my development process. Built with React and Vite, the site features an admin section for configuring various parts of the portfolio.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "http://julianhernandez.pro/",
  },
];

export { services, technologies, experiences, testimonials, projects };
