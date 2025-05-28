import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0A66C2] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">SR Automotives</h3>
            <p className="mb-6">Driving Quality. Delivering Trust.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-[#FF4C29] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-[#FF4C29] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-[#FF4C29] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-[#FF4C29] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><NavLink to="/" className="hover:text-[#FF4C29] transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-[#FF4C29] transition-colors">About Us</NavLink></li>
              <li><NavLink to="/services" className="hover:text-[#FF4C29] transition-colors">Services</NavLink></li>
              <li><NavLink to="/testimonials" className="hover:text-[#FF4C29] transition-colors">Testimonials</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-[#FF4C29] transition-colors">Blog</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#FF4C29] transition-colors">Contact</NavLink></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><NavLink to="/services" className="hover:text-[#FF4C29] transition-colors">Car Repairs & Diagnostics</NavLink></li>
              <li><NavLink to="/services" className="hover:text-[#FF4C29] transition-colors">Spare Parts & Accessories</NavLink></li>
              <li><NavLink to="/services" className="hover:text-[#FF4C29] transition-colors">Regular Vehicle Maintenance</NavLink></li>
              <li><NavLink to="/services" className="hover:text-[#FF4C29] transition-colors">Performance Upgrades</NavLink></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>123 Automotive Lane, Engine City, EC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="hover:text-[#FF4C29] transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 flex-shrink-0" size={18} />
                <a href="mailto:info@srautomotives.com" className="hover:text-[#FF4C29] transition-colors">info@srautomotives.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#084f99] py-4">
        <div className="container text-center md:flex md:justify-between md:text-left">
          <p>&copy; {currentYear} SR Automotives. All Rights Reserved.</p>
          <div className="mt-2 md:mt-0">
            <a href="#" className="hover:text-[#FF4C29] transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF4C29] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;