import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
        <h1 className="text-4xl font-semibold">
            Javo <span className="text-accent">.</span>
        </h1>

        </Link>
        {/*Navegacion de escritorio y boton acerca de mi */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href={"/contact"}>
                <Button>Acerca de mi</Button>
            </Link>
        </div>

        {/* Navegacion de celular*/}
        <div className="xl:hidden">
            <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
