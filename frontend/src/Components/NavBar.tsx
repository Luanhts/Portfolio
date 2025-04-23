import { useState } from "react";
import { Menu, X} from "lucide-react"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="flex justify-end m-4 mr-12">
        <div className="flex gap-6">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
          <nav>
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
