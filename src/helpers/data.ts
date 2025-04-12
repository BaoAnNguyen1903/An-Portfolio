import nodejs from "../assets/project/nodejs.jpg";
import antinCinema from "../assets/project/antin-cinema.png";
import sanchoi247 from "../assets/project/sanchoi247.png";

export const APP_DATA = {
  GITHUB_URL: "https://github.com/BaoAnNguyen1903",
  LINKEDIN_URL: "https://www.linkedin.com/in/nguyen-dinh-bao-an/",
  FACEBOOK_URL: "https://www.facebook.com/an.nguyen.151562",
  INSTAGRAM_URL: "https://www.instagram.com/_annguyen19_/"
};

export const EXPERIENCES = [
  {
    id: 1,
    title: {
      vi: "Nhà phát triển phần mềm AI",
      en: "AI Software Developer"
    },
    company: {
      vi: "Thiết kế và xây dựng các giải pháp phần mềm dựa trên AI tận dụng các thuật toán",
      en: "Designing and building AI-driven software solutions that leverage machine learning algorithms"
    },
    duration: {
      vi: "Jan 2024 - Hiện tại",
      en: "Jan 2024 - Present"
    }
  },
  {
    id: 2,
    title: {
      vi: "Thực tập",
      en: "Intern"
    },

    company: {
      vi: "Thực tập fullstack tại công ty FPT software",
      en: "Fullstack internship at FPT software company"
    },
    duration: {
      vi: "Tháng 1/2025 - Tháng 5/2025",
      en: "Jan 2025 - May 2025"
    }
  },
  {
    id: 3,
    title: {
      vi: "Dự án tự làm",
      en: "Self Employed"
    },
    company: {
      vi: "Học kiến thức mới mỗi ngày",
      en: "Code and build something in everyday."
    },
    duration: {
      vi: "Tháng 8/2024 - Hiện tại",
      en: "Aug 2022 - Present"
    }
  }
];

export const PROJECTS = [
  {
    id: 1,
    imgPath: sanchoi247,
    title: "SanChoi247",
    description:
      "This is my first experience as a team leader in a group project, where we are developing an online sports booking platform using statefull model. The project is built using Java Spring Boot with Thymeleaf for the frontend. It integrates key functionalities such as VNPay for secure online payments and Cloudinary for efficient image storage and management.",
    githubLink:
      "https://github.com/BaoAnNguyen1903/SanChoi247-SpringBoot-Thymeleaf",
    demoLink:
      "https://github.com/BaoAnNguyen1903/SanChoi247-SpringBoot-Thymeleaf"
  },
  {
    id: 2,
    imgPath: antinCinema,
    title: "Antin Cinema BackEnd",
    description:
      "Antin Cinema. Which is a movie ticket booking website using stateless model. This project is designed to provide users with a seamless experience in browsing movie schedules, selecting seats, and making online payments. I am developing it using Spring Boot for the backend. Ensuring a dynamic and responsive user interface with a robust.",
    githubLink: "https://github.com/BaoAnNguyen1903/Antin-Cinema-BE-SpringBoot",
    demoLink: "https://github.com/BaoAnNguyen1903/Antin-Cinema-BE-SpringBoot"
  },
  // {
  //     id: 3,
  //     imgPath: antinCinema,
  //     title: "Antin Cinema FrontEnd",
  //     description: "Antin Cinema. Which is a movie ticket booking website using stateless model. This project is designed to provide users with a seamless experience in browsing movie schedules, selecting seats, and making online payments. I am developing it using ReactTS for the frontend. Ensuring a dynamic and responsive user interface with a robust.",
  //     githubLink: "https://hoidanit.vn/khoa-hoc/java-spring-mvc-ultimate-for-beginners-65ce0b770c05f4450fbd86ac.html",
  //     demoLink: "https://hoidanit.vn/khoa-hoc/java-spring-mvc-ultimate-for-beginners-65ce0b770c05f4450fbd86ac.html"
  // },
  {
    id: 44,
    imgPath: nodejs,
    title: "Fullstack Backend NodeJS",
    description:
      "This project is designed to help me gain hands-on experience with Node.js as a backend technology, specifically focusing on building RESTful APIs using Express.js and examining the pros and cons of using SQL and NoSql. I also differentiate between backend and frontend separation. The goal is to understand the core concepts of backend development.",
    githubLink:
      "https://hoidanit.vn/khoa-hoc/java-spring-mvc-ultimate-for-beginners-65ce0b770c05f4450fbd86ac.html",
    demoLink:
      "https://hoidanit.vn/khoa-hoc/java-spring-mvc-ultimate-for-beginners-65ce0b770c05f4450fbd86ac.html"
  }
];

export const SKILLS_DATA = [
  "Java",
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Bootstrap",
  "Docker",
  "MaterialUI",
  "Antd",
  "Vitejs",
  "Postman"
];
