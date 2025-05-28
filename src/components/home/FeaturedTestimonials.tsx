import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../ui/Section';
import TestimonialCard from '../ui/TestimonialCard';

const FeaturedTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'James Wilson',
      role: 'BMW Owner',
      content: 'SR Automotives has been servicing my BMW for over 3 years. Their attention to detail and technical expertise is unmatched. I wouldn\'t trust my car to anyone else.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Fleet Manager',
      content: 'Managing a fleet of 15 vehicles is challenging, but SR Automotives makes it seamless. Their preventive maintenance program has significantly reduced our downtime and repair costs.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'Performance Enthusiast',
      content: 'The performance upgrades SR Automotives installed on my sports car have transformed the driving experience. Their knowledge of performance tuning is exceptional.',
      rating: 5
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Honda Owner',
      content: 'I appreciate the honest and transparent service I always receive. They explain everything clearly and never push unnecessary repairs or services.',
      rating: 4
    },
    {
      id: 5,
      name: 'Robert Chen',
      role: 'Mercedes Owner',
      content: 'Finding quality parts for luxury vehicles can be difficult, but SR Automotives always sources genuine parts quickly. Their service is prompt and professional.',
      rating: 5
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      role: 'Small Business Owner',
      content: 'As a small business owner, vehicle reliability is crucial. SR Automotives keeps our delivery vans running smoothly, which directly impacts our business operations.',
      rating: 5
    }
  ];
  
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const displayedTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  
  return (
    <Section 
      title="What Our Customers Say" 
      subtitle="Discover why customers choose SR Automotives for their vehicles"
      background="light"
      id="testimonials"
    >
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="reveal">
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
        
        {/* Navigation Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-white border border-gray-300 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'bg-[#0A66C2] w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-white border border-gray-300 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
      
      <div className="text-center mt-12">
        <Link 
          to="/testimonials"
          className="btn btn-primary inline-flex items-center"
        >
          View All Testimonials
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </Section>
  );
};

export default FeaturedTestimonials;