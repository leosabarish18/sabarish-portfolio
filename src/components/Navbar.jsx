import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-cyan-400">
          Sabarish
        </h1>

        <div className="hidden md:flex gap-8 text-lg">
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        <div className="flex gap-4 text-2xl">
          <a
            href="https://github.com/leosabarish18"
            target="_blank"
          >
            <FaGithub className="hover:text-cyan-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/sreesabarish/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-cyan-400" />
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;