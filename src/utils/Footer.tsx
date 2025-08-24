import { navLinks, socialmedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col h-full justify-between items-center w-full px-8 max-sm:px-1 pt-8 pb-2  bg-gradient-to-b from-[#023f18]/100 via-[#014131]/100 to-[#03311c]/90 to-99%"
    >
      <div className="flex flex-col max-sm:flex-col px-8 max-sm:px-1 sm:items-center sm:justify-between w-full text-white">
        <div className="flex flex-row w-full justify-between items-center">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="logo21june"
              width={50}
              height={50}
              className="max-sm:hidden"
            />
          </Link>
          <h1 className="font-extrabold text-2xl max-sm:text-base ">
            Sociedad Femenina 21 de junio
          </h1>
        </div>{" "}
        <hr className="  border-b border-[#03311c] my-4 w-full" />
        <div className="sm:hidden">
          <div className="flex flex-col gap-1 mb-5 ">
            {navLinks.map((navs) => (
              <div key={navs.id} className="text-xl">
                <Link href={navs.href}>{navs.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row max-sm:flex-col w-full max-sm:items-center justify-between items-start gap-2">
          <p className="max-sm:text-base max-sm:text-center">
            Presencia en redes sociales Si tienes alguna duda o consulta,
            encuéntranos en nuestras redes:
          </p>
          <div className="flex flex-col items-end justify-end max-sm:items-center gap-2 ">
            <div className="gap-2 flex flex-row  items-center justify-center  max-sm:text-xs uppercase text-2xl">
              {socialmedia.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-7 h-7 border p-1 rounded-full hover:scale-105" />
                </Link>
              ))}
            </div>
            <Link href="mailto:sociedadfemenina21@gmail.com?subject=Pregunta&body=Hola,%20queria%20consultar%20sobre...">
              sociedadfemenina21@gmail.com
            </Link>
          </div>
        </div>
        <hr className="  border-b border-[#03311c] my-4 w-full" />
        <p className=" max-sm:text-xz flex w-full items-end justify-end max-sm:justify-center  text-white">
          © Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
