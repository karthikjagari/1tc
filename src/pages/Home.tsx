import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedServices from '../components/home/FeaturedServices';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedTestimonials from '../components/home/FeaturedTestimonials';
import ContactCTA from '../components/home/ContactCTA';
import Brands from '../components/home/Brands';

const Home = () => {
  useEffect(() => {
    // Update page title
    document.title = 'SR Automotives | Premium Automotive Solutions';
  }, []);

  return (
    <>
      <Hero />
      <FeaturedServices />
      <AboutPreview />
      <FeaturedTestimonials />
      <Brands />
      <ContactCTA />
    </>
  );
};

export default Home;