"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Celular",
    Description: "(+593)0984122914",
  },
  {
    icon: <FaEnvelope />,
    title: "Correo",
    Description: "javier10moreira@hotmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Dirección",
    Description: "Quito, Ecuador Chillogallo",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
            {/**form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                    <h3 className="text-4xl text-accent">¡Trabajemos juntos!</h3>
                    <p className="text-white/60">Creamos un mundo donde la tecnología ayude a todo el mundo en cualquier ámbito que lo requieran con soluciones de calidad y eficiencia.</p>
                    {/**input */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input type="firstname" placeholder="Firstname"/>
                        <Input type="lastname" placeholder="Lastname"/>
                        <Input type="email" placeholder="Email"/>
                        <Input type="direccion" placeholder="Dirección"/>
                    </div>
                    {/**select  < */}
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Seleccione un servicio"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Seleccione un servicio</SelectLabel>
                                <SelectItem  value="est">Desarrollo web</SelectItem>
                                <SelectItem value="cst">Desarrollo de aplicaciones móviles</SelectItem>
                                <SelectItem value="sst">Desarrollo de chatbot</SelectItem>
                                <SelectItem value="mst">Cotización</SelectItem>
                                <SelectItem value="lst">Contratación</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {/**textarea */}
                    <Textarea className="h-[150px]" placeholder="Escriba un mensaje aquí."/>
                    {/*button */}
                    <Button size="md" className="max-w-40 ">Enviar</Button>
                </form>
            </div>
            {/**info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                    {info.map((item, index) => {
                        return(
                            <li key={index} className="flex items-center gap-6 ">
                                <div className="w-[52px] h-[52px] xl:W-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                    <div className="text-[28px]">{item.icon}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white/60">{item.title}</p>
                                    <h3 className="text-xl">{item.Description}</h3>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Contact;
