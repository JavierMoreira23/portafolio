"use client";

import { FaHtml5, FaJs, FaCss3 , FaReact, FaFigma, FaNodeJs, FaPython , FaPhp} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs , SiAstro,  } from "react-icons/si";
const about = {
    title: "About Me",
    description: "I am a front-end developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React, and Node.js. I am always looking to learn new things and improve my skills.",
    
    info: [
        {
            fielName: "Nombre",
            fielValue: "Javier Moreira"
        },
        {
            fielName: "Celular",
            fielValue: "0984122914"
        },
        {
            fielName: "Nacionalidad",
            fielValue: "Ecuatoriano"
        },
        {
            fielName: "Email",
            fielValue: "javier10moreira@hotmail.com"
        },
        {
            fielName: "Dirección",
            fielValue: "Quito, Chillogallo"
        },
        {
            fielName: "Idiomas",
            fielValue: "Inglés, Español"
        },
    ]
};

const experience = {
    icon: '',
    title: "My Experience",
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items:[
        {
            company: "Instituto Tecnológico Superior Quito",
            position: "Pasante Soporte Técnico",
            duration:" 3 meses-2024"
        },
        {
            company: "Edesa",
            position: "Operador de Planta",
            duration:" Enero 2024 - presente"
        },
        {
            company: "Edificio Norwalk",
            position: "Bodeguero",
            duration:"noviembre 2021 - agosto 2023"
        },
    ]
};
const education = {
    icon: '',
    title: "Mi Educación",
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items:[
        {
            institucion: "Instituto Tecnológico Superior Paradox",
            degree: "Tcnlg. en Desarrollo de Videojuegos",
            duration:"Noviembre 2024 - presente"
        },
        {
            institucion: "Instituto Tecnológico Superior Quito",
            degree: "Tcnlg. en Desarrollo de Software",
            duration:"Noviembre 2021 - 2024"
        },
        {
            institucion: "Colegio Fiscal Gonzalo Zaldumbide",
            degree: "Técnico en Contabilidad ",
            duration:"2012 - 2019"
        },
        
    ]
};

const skills = {
    title:"Mis Habilidades",
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillList:[
        {
            icon: <FaHtml5/>,
            name: "HTML 5",
        },
        {
            icon: <FaCss3/>,
            name: "CSS 3",
        },
        {
            icon: <FaJs/>,
            name: "JavaScript",
        },
        {
            icon: <FaReact/>,
            name: "React",
        },
        {
            icon: <FaNodeJs/>,
            name: "Node.js",
        },
        {
            icon: <SiTailwindcss/>,
            name: "Tailwind CSS",
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.js",
        },
        {
            icon: <FaFigma/>,
            name: "Figma",
        },
        {
            icon: <SiAstro/>,
            name: "Astro",
        },
        {
            icon: <FaPython/>,
            name: "Python",
        },
        {
            icon: <FaPhp/>,
            name: "Php",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion";


const Resume = () =>{
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay:2.4, duration: 0.4 ,ease: "easeIn"},
        }}
        className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experiencia</TabsTrigger>
                        <TabsTrigger value="education">Educación</TabsTrigger>
                        <TabsTrigger value="skills">Habilidades</TabsTrigger>
                        <TabsTrigger value="about">Acerca de mi</TabsTrigger>
                    </TabsList>
                    {/* Tabs Content */}
                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item,index)=>{
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item,index)=>{
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institucion}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] ">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                            
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                                    {skills.skillList.map((skill,index)=>{
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* About */}
                        <TabsContent value="about"
                        className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">{about.info.map((item,index)=>{
                                    return(
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-accent/60">{item.fielName}</span>
                                            <span className="text-xl">{item.fielValue}</span>
                                        </li>
                                    )
                                })}
                                
                                </ul>

                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;