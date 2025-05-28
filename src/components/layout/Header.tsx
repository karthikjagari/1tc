import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CarFront, Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <span className="text-[#0A66C2]">
            <CarFront size={32} />
          </span>
          <span className="ml-2 text-2xl font-bold text-[#333333]">
            SR <span className="text-white">Automotives</span>
          </span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>About Us</NavLink></li>
            <li><NavLink to="/services" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Services</NavLink></li>
            <li><NavLink to="/testimonials" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Testimonials</NavLink></li>
            <li><NavLink to="/blog" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink></li>
          </ul>
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <NavLink to="/contact" className="btn btn-primary">
            Get a Quote
          </NavLink>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#333333] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white absolute w-full left-0 right-0 shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="container">
          <ul className="flex flex-col space-y-4">
            <li><NavLink to="/" className={({isActive}) => `nav-link block py-2 ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => `nav-link block py-2 ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/services" className={({isActive}) => `nav-link block py-2 ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/testimonials" className={({isActive}) => `nav-link block py-2 ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Testimonials</NavLink></li>
            <li><NavLink to="/blog" className={({isActive}) => `nav-link block py-2 ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => `nav-link block py-2 ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
            <li className="pt-2">
              <NavLink to="/contact" className="btn btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>
                Get a Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
