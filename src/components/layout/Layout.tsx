import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppBubble from '../ui/WhatsAppBubble';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll reveal animation
  useEffect(() => {
    const handleScroll = () => {
      // Update header state
      setIsScrolled(window.scrollY > 50);
      
      // Reveal elements on scroll
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once to check for elements in view on initial load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
};

export default Layout;