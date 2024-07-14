import { FaGithub, FaLinkedinIn, FaInstagram, FaHtml5, FaCss3, FaJava, FaPython, FaReact, FaDocker, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { BiLogoJavascript, BiLogoMongodb, BiLogoPostgresql, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { RiNextjsLine } from "react-icons/ri"
import { TbBrandMysql } from "react-icons/tb"

export const personal = {
    signature: "Junior Java Developer",
    fullName: "Vijayakumar J",
    bio:
        `I am a BTech graduate with a strong foundation in backend development 
        using Java and Spring Boot. I also have experience with frontend technologies 
        like React and Next.js, allowing me to create full-stack applications. 
        I am passionate about technology and eager to contribute to a dynamic team.`
}

export const navData = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "about", path: "/about" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" },
]

export const cvPathData = {
    cv: "/assets/cv.pdf"
}

export const socialsData = [
    { icon: <FaGithub />, path: "https://github.com/Vijaykumar23112000" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/vijayakumarJ2311" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/_.t.__.f._/" },
]

export const photoData = {
    img: "/assets/vj.png"
}

export const statsData = [
    { num: "7", text: "Technical Skills" }, // python , java , sql , javascript , typescript , html , css
    { num: "3", text: "Projects Completed" },
    { num: "5", text: "Technologies Utilized" }, // docker , springboot , react , nextjs , tailwind , 
    { num: "191", text: "Contributions In Github" },
]

export const notFoundData = {
    image: "/assets/not-found.png",
    title: "Awww ... Don't Cry .",
    content: "It's just a 404 Error !",
    description: "What you're looking for have been misplaced in a Long Term Memory",
}

export const servicesData = [
    {
        num: "01",
        href: "",
        title: "Web Development",
        description:
            `I create modern, responsive websites using React, Tailwind CSS, and Material-UI. 
            Whether it's a simple landing page or a complex platform, I deliver high-quality, 
            user-friendly web applications. I'm also currently learning Next.js for advanced 
            frontend development.`
    },
    {
        num: "02",
        href: "",
        title: "Backend Development",
        description:
            `I specialize in backend development with a strong focus on creating robust and 
            scalable server-side applications. Proficient in Spring Boot, I ensure efficient 
            and secure backend solutions. Currently, I am expanding my expertise by learning 
            microservices architecture to build highly maintainable and scalable backend systems.`
    },
    {
        num: "03",
        href: "",
        title: "Api Development",
        description:
            `I create both public and secure API endpoints using Spring Security, ensuring robust 
            access control and data protection. I work with SQL databases like PostgreSQL and MySQL, 
            as well as NoSQL databases such as MongoDB, to efficiently manage and retrieve data. 
            I utilize Postman for thorough testing and validation of the endpoints to ensure 
            reliability and performance.`
    },
]

export const aboutMeData = {
    experienceData: {
        title: "Fresher",
        description:
            `I am a fresher with a passion for coding and web development. For the past six months, 
        I have been continuously practicing and learning new technologies to enhance my skills. 
        My journey includes mastering frontend and backend development, and I am committed to 
        delivering high-quality solutions.`,
        items: [
            { content: "SpringBoot", duration: "Dec 2023 - Mar 2024" },
            { content: "Front End Technologies", duration: "Mar 2024 - May 2024" },
            { content: "Next Js & Microservices", duration: "June 2024 - Present" },
        ]
    },
    educationData: {
        title: "Education",
        description:
            `I graduated with a B.Tech from the College of Engineering Munnar in 2023, achieving a successful 
            completion without any backlogs. I delved into backend development through the 
            Telusko Online Boot Camp led by Navin Reddy. This comprehensive training has equipped me with 
            solid foundations in backend technologies and prepared me for professional challenges in IT.`,
        items: [
            {
                institution: "College Of Engineering Munnar",
                degree: "BTech",
                duration: "2019 - 2023"
            },
            {
                institution: "Online Boot Camp",
                degree: "Telusko",
                duration: "Dec 2023 - Mar 2024"
            },
        ]
    },
    skillsData: {
        title: "Skills",
        description:
            `I am a versatile developer with a strong foundation in both frontend and backend technologies. 
            I am currently expanding my expertise with Next.js. I am committed to continuous learning and 
            expanding my knowledge to stay updated with the latest industry trends.
            Both technical and technological skills are provided below.`,
        skillList: [
            { icon: <FaJava />, name: "Java" },
            { icon: <BiLogoSpringBoot />, name: "SpringBoot" },
            { icon: <TbBrandMysql />, name: "MySQL" },
            { icon: <BiLogoPostgresql />, name: "Postgresql" },
            { icon: <BiLogoMongodb />, name: "MongoDB" },
            { icon: <FaPython />, name: "Python" },
            { icon: <FaHtml5 />, name: "Html 5" },
            { icon: <FaCss3 />, name: "Css" },
            { icon: <BiLogoJavascript />, name: "Javascript" },
            { icon: <BiLogoTypescript />, name: "Typescript" },
            { icon: <FaReact />, name: "React" },
            { icon: <BiLogoTailwindCss />, name: "React" },
            { icon: <RiNextjsLine />, name: "NextJS" },
            { icon: <FaDocker />, name: "Docker" },
        ],
    },
    aboutData: {
        title: "About Me",
        description:
            `I am a dedicated developer with a strong foundation in frontend and backend technologies. 
            As a fresher actively seeking opportunities, I specialize in creating dynamic user interfaces 
            and building scalable applications. Constantly learning and adapting to new technologies, 
            I'm dedicated to delivering reliable solutions and contributing to innovative projects.`,
        info: [
            { fieldName: "Name", fieldValue: "Vijayakumar J" },
            { fieldName: "Phone", fieldValue: "+91 83019 51775" },
            { fieldName: "Email", fieldValue: "mathew5359302@gmail.com" },
            { fieldName: "Languages", fieldValue: "English, Malayalam, Tamil" },
        ]
    }
}

export const projectsData = [
    {
        num: "01",
        category: "Fullstack",
        title: "Foodify",
        description:
            `This project is a full-stack food ordering system where users can order food from various restaurants 
            managed by administrators and restaurant owners. The backend is built using Spring Boot with Spring 
            Security to secure endpoints, and JWT for authentication and authorization based on user roles. PostgreSQL 
            is used as the database, and Docker is employed to create an instance of pgAdmin for database management. 
            The frontend is developed using React, with MUI for the user interface and Tailwind CSS for styling. 
            Postman was used to test the API endpoints, ensuring robust functionality throughout the application.`,
        stack: [
            { name: "Springboot" },
            { name: "Spring Security" },
            { name: "JWT" },
            { name: "React" },
            { name: "MUI" },
            { name: "Tailwind Css" },
            { name: "React-Redux" },
            { name: "PostgreSQL" },
            { name: "Docker" },
            { name: "Postman" },
        ],
        image: "/assets/projects/foodify.jpg",
        github: "https://github.com/Vijaykumar23112000/foodify"
    },
    {
        num: "02",
        category: "Backend",
        title: "JWT Auth",
        description:
            `This mini project focuses on backend development, specifically on implementing JWT authentication and 
            authorization. It includes features like login and logout functionality using Spring Security and JWT. 
            MySQL is used to store and retrieve data, and Postman was utilized to test the API endpoints, ensuring 
            the security and functionality of the authentication system.`,
        stack: [
            { name: "Springboot" },
            { name: "Spring Security" },
            { name: "JWT" },
            { name: "MySQL" },
            { name: "Postman" },
        ],
        image: "/assets/projects/jwt.png",
        github: "https://github.com/Vijaykumar23112000/SpringSecurityJWT"
    },
    {
        num: "03",
        category: "Fullstack",
        title: "Contact Management",
        description:
            `The Contact Management system is a full-stack application designed to manage contacts efficiently. 
            Users can perform all CRUD operations—create, read, update, and delete contacts—through an intuitive 
            interface. This project showcases my proficiency in both frontend and backend development, integrating 
            a variety of technologies to deliver a seamless user experience. The frontend is built using Next.js 
            and React Redux Toolkit for state management. Note that the primary focus was on functionality, so the 
            frontend UI is minimal and hasn't been fully updated yet. The backend is developed using Spring Boot to 
            create a robust RESTful API. PostgreSQL is used as the database, with Docker to create an instance of pgAdmin 
            for database management. Postman was utilized to test the endpoints, ensuring reliable communication between 
            the frontend and backend.`,
        stack: [
            { name: "Springboot" },
            { name: "PostgreSQL" },
            { name: "NextJS" },
            { name: "React-Redux-Toolkit" },
            { name: "Postman" },
        ],
        image: "/assets/projects/contact-management.jpg",
        github: "https://github.com/Vijaykumar23112000/ContactManagement"
    },
]

export const contactMeData = {
    contactData: {
        title: "Get In Touch",
        description:
            `Drop me a line if you want to talk shop, discuss opportunities, or share your best tech meme. 
            Let's connect and make things happen!`,
        input: [
            { type: "firstname", placeHolder: "Firstname", name: "user_first_name" },
            { type: "lastname", placeHolder: "Lastname", name: "user_last_name" },
            { type: "email", placeHolder: "Email", name: "user_email" },
        ],
        textArea: {
            placeHolder: "Type your message here .",
            name: "user_message",
        }
    },
    statusData: {
        IDLE: "IDLE",
        SUCCESS: "SUCCESS",
        FAILED: "FAILED"
    },
    contactInfoData: [
        {
            icon: <FaPhoneAlt />,
            title: "Phone",
            content: "+91 83019 51775"
        },
        {
            icon: <FaEnvelope />,
            title: "E-Mail",
            content: "mathew5359302@gmail.com"
        },
    ]
}