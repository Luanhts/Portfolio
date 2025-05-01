import { useState } from "react";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-end items-center m-4 mr-12 relative">
      {/* Botão do menu no mobile */}
      <button
        className="md:hidden hover:cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu de navegação */}
      <nav
        className={`transition-all duration-300 ease-in-out
          flex flex-col text-right md:flex-row gap-4 md:gap-6 
          absolute md:static top-6 right-0  p-4 md:p-0 
              md:w-auto
          ${isOpen ? "block" : "hidden"} md:flex
        `}
      >
        <a className="hover:text-[#FF6464]" href="#">
          <h1>Blog</h1>
        </a>
        <a className="hover:text-[#FF6464]" href="#">
          <h1>Works</h1>
        </a>
        <a className="hover:text-[#FF6464]" href="#">
          <h1>Contact</h1>
        </a>
      </nav>
    </header>
  );
}
