import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-[#f7f8fc]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-8 md:px-8 xl:max-w-[70vw] xl:px-0">
        <a href="#about" className="text-xl font-bold uppercase tracking-[-0.04em] text-blue-700 md:text-2xl">
          Olayinka U. Kareem
        </a>
        
        <nav className="hidden md:flex items-center gap-10 text-[1.05rem] font-medium text-slate-500">
          <a href="#about" className="transition-colors hover:text-slate-900">Profile</a>
          <a href="#skills" className="transition-colors hover:text-slate-900">Skills</a>
          <a href="#projects" className="transition-colors hover:text-slate-900">Work</a>
          <a href="#experience" className="transition-colors hover:text-slate-900">Experience</a>
          <a href="#contact" className="transition-colors hover:text-slate-900">Contact</a>
        </nav>
        
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu size={24} className="text-slate-800" />
        </button>
      </div>
      
      <div className={`md:hidden fixed inset-0 bg-[#f7f8fc] z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <X size={24} className="text-slate-800" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 pt-12 text-2xl font-medium text-slate-600">
          <a href="#about" className="transition-colors hover:text-slate-900" onClick={toggleMenu}>Profile</a>
          <a href="#skills" className="transition-colors hover:text-slate-900" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="transition-colors hover:text-slate-900" onClick={toggleMenu}>Work</a>
          <a href="#experience" className="transition-colors hover:text-slate-900" onClick={toggleMenu}>Experience</a>
          <a href="#contact" className="transition-colors hover:text-slate-900" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
