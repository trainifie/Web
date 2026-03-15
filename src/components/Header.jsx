import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/24/outline";


export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 inset-x-0 backdrop-blur-md bg-black/70 z-50 border-b border-gold"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo + Name */}
        <a href="/" className="flex items-center space-x-2">
          <AcademicCapIcon className="h-8 w-8 text-gold" />
          <span className="text-3xl font-serif font-bold text-gold tracking-wide">
            Trainifie
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-7 uppercase font-semibold text-sm text-white">
          <a href="#about" className="hover:text-gold transition">About</a>
          <a href="#features" className="hover:text-gold transition">Features</a>
          <a href="#team" className="hover:text-gold transition">Team</a>
          <a href="#contact" className="hover:text-gold transition">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}
