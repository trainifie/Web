import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const navItems = ["About", "Features", "Team", "Contact"];

  return (
    <nav className="nav-blur h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-[#C5A059] rounded-xl flex items-center justify-center shadow-lg shadow-[#C5A059]/20 group-hover:scale-105 transition-transform">
            <AcademicCapIcon className="h-6 w-6 text-black" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            Trainifie
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-slate-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center space-x-5">
          <button className="hidden sm:block text-sm font-bold text-slate-300 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="px-6 py-2.5 bg-[#C5A059] text-black text-sm font-bold rounded-full hover:bg-[#EAD09F] transition-all hover:scale-[1.02] shadow-lg shadow-[#C5A059]/10">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
