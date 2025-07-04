export function NavBar() {
  const links = [
    { name: "Home", href: "#Home" },
    { name: "Skills", href: "#Skills" },
    { name: "Projetos", href: "#Projetos" },
    { name: "Contato", href: "#Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo ou nome */}
        <div className="text-xl font-bold">Luanhts</div>

        {/* Links da navegação */}
        <nav className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#FF6464] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
