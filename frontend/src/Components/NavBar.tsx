import { useState } from "react";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 z-50 shadow-md">
      <div className="flex justify-end items-center m-4 mr-12">
        {/* Botão do menu no mobile */}
        <button
          className="md:hidden cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu de navegação */}
        <nav
          className={`transition-all duration-300 ease-in-out
            flex flex-col text-right md:flex-row gap-4 md:gap-6 
            absolute md:static top-6 right-0 p-4 md:p-0 
            md:w-auto bg-white md:bg-transparent
            ${isOpen ? "block" : "hidden"} md:flex
          `}
        >
          <a
            className="text-black hover:text-[#FF6464] cursor-pointer"
            href="#Home"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            className="hover:text-[#FF6464] cursor-pointer"
            href="#Skills"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            className="hover:text-[#FF6464] cursor-pointer"
            href="#Projetos"
            onClick={() => setIsOpen(false)}
          >
            Projetos
          </a>
          <a
            className="hover:text-[#FF6464] cursor-pointer"
            href="#Contato"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
