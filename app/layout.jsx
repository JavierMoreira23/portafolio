import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


//componentes
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  Weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Portafolio | Javier Moreira",
  description: "Mostrando mis proyectos y habilidades como desarrollador de software",
  icons: {
    icon: "/BearIco.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={jetbrainsMono.variable}>
          <Header />
          <StairTransition></StairTransition>
          <PageTransition>
          {children}
          </PageTransition>
          
          
          </body>
    </html>
  );
}
