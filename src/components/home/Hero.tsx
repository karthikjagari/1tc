import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 pb-16">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Driven By Technology.<br />
            <span className="text-[#FF4C29]">Fueled By Trust.</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
            SR Automotives provides premium automotive solutions with expert technicians and quality parts to keep your vehicle in peak condition.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/services">
              <Button variant="secondary" size="lg">
                Our Services
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0A66C2]">
                Get a Quote
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-[#FF4C29]">10+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-[#FF4C29]">5,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-[#FF4C29]">20+</h3>
              <p>Expert Technicians</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-[#FF4C29]">100%</h3>
              <p>Quality Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;