import { Link } from 'react-router-dom';
import { Award, Users, Clock, Shield } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const AboutPreview = () => {
  return (
    <Section id="about-preview">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="reveal">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="SR Automotives Team"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute bottom-6 right-6 bg-[#FF4C29] text-white py-4 px-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">10+</p>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
        
        {/* Content Column */}
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Trusted Leader in Automotive Solutions</h2>
          
          <p className="text-[#666666] mb-6">
            Since 2013, SR Automotives has been providing premium automotive services with a commitment to quality, reliability, and customer satisfaction. Our team of certified technicians combines expertise with cutting-edge technology to deliver exceptional results.
          </p>
          
          <p className="text-[#666666] mb-8">
            We take pride in our transparent approach, attention to detail, and dedication to keeping your vehicles in peak condition. Whether you need routine maintenance or complex repairs, our comprehensive solutions are designed to exceed your expectations.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start">
              <div className="mr-4 text-[#0A66C2]">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Certified Experts</h3>
                <p className="text-sm text-[#666666]">Factory-trained technicians</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-[#0A66C2]">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Quality Guarantee</h3>
                <p className="text-sm text-[#666666]">100% satisfaction promised</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-[#0A66C2]">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Timely Service</h3>
                <p className="text-sm text-[#666666]">On-time completion</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-[#0A66C2]">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Customer Focus</h3>
                <p className="text-sm text-[#666666]">Personalized solutions</p>
              </div>
            </div>
          </div>
          
          <Link to="/about">
            <Button variant="primary">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default AboutPreview;