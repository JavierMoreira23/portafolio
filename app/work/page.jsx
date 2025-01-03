"use client";
import {motion} from 'framer-motion';
import React,{useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BaGithub, BsGithub } from 'react-icons/bs';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,

} from "@/components/ui/tooltip"

import Link from "next/link";
import image from 'next/image';
import { Description } from '@radix-ui/react-dialog';

const projects =[
    {
        num: "01",
        category:"fullstack",
        title:"project 1",
        description : "Sistema Web de gestion de inventario aplicado a una Empresa Ferretera",
        stack: [
            {name : "Html 5"},
            {name : "Css 3"},
            {name: "Php"},
            {name : "Javascript"},
            {name : "Mysql"},
        ],
        image: "/assets/proyectos/proyecto1.png",
        live: '',
        github:'',
    },
    {
        num: "02",
        category:"frontend",
        title:"project 2",
        description : "Diseño de tienda online para productos de tecnologia",
        stack: [
            {name : "Html 5"},
            {name : "Css 3"},
            {name : "Javascript"},
        ],
        image: "/assets/proyectos/proyecto2.png",
        live: '',
        github:'',
    },
    {
        num: "03",
        category:"Game",
        title:"project 3",
        description : "Recreación de juego de pacman en html y css con ayuda de canvas",
        stack: [
            {name : "Html 5"},
            {name : "Css 3"},
            {name : "Javascript"},
        ],
        image: "/assets/proyectos/proyecto3.png",
        live: '',
        github:'',
    },

];

const Work = () =>{
    const [project, SetProject] = useState(projects[0]);
    return (
    <motion.section
        initial={{opacity:0}}
        animate={{opacity:1}}
        
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
        <div className="container mx-auto">
            <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                    {/* ouline num */}
                    <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                        {project.num}
                    </div>
                    {/* project category */}
                    <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category}</h2>
                    {/*project description */}
                    <p className='text-white/60'>{project.description}</p>
                    <ul className='flex gap-4 '>
                        {project.stack.map((item, index) =>{
                            return(
                                <li key={index} className='text-xl text-accent '>{item.name}
                                {/**remove the last comma */}
                                {index !== project.stack.length -1 && ","}
                                </li>
                            )
                        } )
                            }
                    </ul>
                    {/**border */}
                    <div className='border-t-2 border-white/20 '>
                    {/**buttons */}
                    <div>
                        <Link href={project.live}>
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
                                    <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Live project</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                        <Link href={project.github}>
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
                                    <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Github repository</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                        {/**2.24.50 */}
                    </div>
                    </div>
                </div>
                <div className='w-full xl:w-[50%]'>slider</div>
            </div>
        </div>
    </motion.section>

    )
}

export default Work;