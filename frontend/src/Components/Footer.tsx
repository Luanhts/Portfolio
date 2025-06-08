import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer id="Contato" className="py-10 flex flex-col items-center justify-center text-[#21243D]">
      {/* Ícones sociais */}
      <div className="flex space-x-6 mb-4 text-2xl text-[#21243D]">
        <a href="https://github.com/Luanhts" aria-label="GitHub" className="hover:text-[#00A8CC]">
          <FaGithub />
        </a>
       
        <a
          href="https://www.linkedin.com/in/luanhenriquets/"
          aria-label="LinkedIn"
          className="hover:text-[#00A8CC]"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-[#21243D]">&copy;2025 All rights reserved</p>
    </footer>
  );
}
