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
import Image from 'next/image';
import { Description } from '@radix-ui/react-dialog';
import WorkSliderBtns from "@/components/WorkSliderBtns";

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
        Image: "/assets/project1.png",
        live: '',
        github:'https://github.com/JavierMoreira23/SistemaG_Inventario',
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
        Image: "/assets/proyectos/project2.png",
        live: '',
        github:'https://github.com/JavierMoreira23/Tienda-online/tree/main/Tienda%20Online',
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
        Image: "/assets/proyectos/project3.png",
        live: 'https://pacman-web.vercel.app',
        github:'https://github.com/JavierMoreira23/PacmanWeb',
    },
    {
        num: "04",
        category:"frontend",
        title:"project 4",
        description : "Recreación de página de monkeytype el cual tiene como objetivo la mecanografía en tiempo real",
        stack: [
            {name : "Html 5"},
            {name : "Css 3"},
            {name : "Javascript"},
        ],
        Image: "/assets/proyectos/project4.png",
        live: 'https://monkeytype-snowy.vercel.app',
        github:'https://github.com/JavierMoreira23/Monkeytype',
    },

];

const Work = () =>{
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange =(swiper)=>{
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };
    return (
    <motion.section
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:2.4,duration: 0.4, ease:"easeIn"}}}
        
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
        <div className="container mx-auto">
            <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                    <div className="flex flex-col gap-[30px] h-[50%]">
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
                    <div className='flex items-center gap-4'>
                        <Link href={project.live} target='_blank'>
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
                        <Link href={project.github} target='_blank'>
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
                </div>
                <div className='w-full xl:w-[50%]'> 
                <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12'
                onSlideChange={handleSlideChange}>
                    {projects.map((project,index)=>{
                        return(
                            <SwiperSlide key={index}
                            className='w-full'>
                                <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                {/**overlay */}
                                <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                {/**image */}
                                <div className='relative w-full h-full'>
                                    <Image src={project.Image} fill className='object-cover' alt=''/>
                                    
                                </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    {/**slider buttons */}
                    <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                </Swiper>    
                </div>
            </div>
        </div>
        {/**2.33.13 */}
    </motion.section>

    )
}

export default Work;