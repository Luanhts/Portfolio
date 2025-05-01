import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-10 flex flex-col items-center justify-center text-[#21243D]">
      {/* Ícones sociais */}
      <div className="flex space-x-6 mb-4 text-2xl text-[#21243D]">
        <a href="#" aria-label="Facebook" className="hover:text-[#00A8CC]">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-[#00A8CC]">
          <FaInstagram />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-[#00A8CC]">
          <FaTwitter />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-[#00A8CC]">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-[#21243D]">&copy;2020 All rights reserved</p>
    </footer>
  );
}
