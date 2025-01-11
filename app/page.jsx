import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () =>{
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">            
              {/*texto */}
              <div className="text-center xl:text-left order-2 xl:order-none">
                <span className="text-xl">Desarrollador de Software</span>
                <h1 className="h1 mb-4">
                  Hola, Soy <br/> <span className="text-accent"> Javier Moreira</span></h1>
                  <p className="max-w-[600px] mb-3 text-white/80">
                    Desarrollador de Software apasionado para crear soluciones innovadoras que optimicen procesos y mejoren la experiencia de usuario con estándares de calidad y eficiencia. 
                  </p>
                  {/* botones y redes sociales*/}
                  <div className="flex flex-col xl:flex-row items-center gap-4">
                    <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                      <a href="../assets/cvjmds.pdf" download="CV Javier Moreira">Descargar Cv</a>
                      <FiDownload className="text-xl"/>
                    </Button>
                    <div className="mb-8 xl:mb-1">
                      <Social containerStyles="flex gap-6" 
                      iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                    </div>
                  </div>
                  
              </div>
              {/* foto*/}
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Photo/>
              </div>            
          </div>
        </div>
        <Stats></Stats>
    </section>
  )
}

export default Home;
