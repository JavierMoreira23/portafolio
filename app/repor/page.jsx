"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const reports = [
    {
        num: '01',
        title: 'Sitios Web',
        descrption: 'En un mundo donde la mayoría de las decisiones de compra comienzan en línea, tener un sitio web profesional y funcional no es solo una ventaja es una necesidad. ', 
        href: "",
    },
    {
        num: '02',
        title: 'Aplicaciones Móviles',
        descrption: 'Tener una aplicación móvil personalizada puede ser el punto clave para conectar con tus clientes, mejorar su experiencia y potenciar tus resultados de negocio.', 
        href: "",
    },
    {
        num: '03',
        title: 'Chatbots',
        descrption: 'La atención al cliente es un factor clave para el éxito de cualquier negocio. Un chatbot puede ayudarte a mejorar la experiencia y optimizar procesos.', 
        href: "",
    },
    {
        num: '04',
        title: 'Aplicaciones Web',
        descrption: 'Permíteme mostrarte cómo podemos ayudarte a optimizar tus procesos, mejorar la experiencia de tus usuarios y alcanzar tus objetivos con una solución web innovadora.', 
        href: "",
    },
    
];
import {motion} from "framer-motion"; 


const Repor = () =>{
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
                }} 
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"    
                > 
                 {reports.map((repor,index)=>{
                    return (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            {/*top */}
                            <div className=" w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{repor.num}</div>
                                <Link href={repor.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex
                                 justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl"/>
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover: text-accent transition-all duration-500">{repor.title}</h2>
                            {/* description */} 
                            <p className="text-white/60 ">{repor.descrption}</p> 
                            {/*border */}
                            <div className="border-b border-white/20 w-full">

                            </div>
                        </div>
                    );
                 })}   
                </motion.div>
            </div>
        </section>
    )
    
}

export default Repor;