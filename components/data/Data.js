import { FaGithub, FaLinkedinIn, FaInstagram, FaHtml5, FaCss3, FaJava, FaPython, FaReact, FaDocker } from "react-icons/fa"
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
    { num: "167", text: "Contributions In Github" },
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
            { content: "Next Js", duration: "June 2024 - Present" },
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