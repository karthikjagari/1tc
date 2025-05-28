import { useEffect, useState } from 'react';
import Section from '../components/ui/Section';
import TestimonialCard from '../components/ui/TestimonialCard';
import ContactCTA from '../components/home/ContactCTA';

const Testimonials = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Customer Testimonials | SR Automotives';
  }, []);

  const [filter, setFilter] = useState('all');
  
  const testimonials = [
    {
      id: 1,
      name: 'James Wilson',
      role: 'BMW Owner',
      content: 'SR Automotives has been servicing my BMW for over 3 years. Their attention to detail and technical expertise is unmatched. I wouldn\'t trust my car to anyone else.',
      rating: 5,
      category: 'individual'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Fleet Manager',
      content: 'Managing a fleet of 15 vehicles is challenging, but SR Automotives makes it seamless. Their preventive maintenance program has significantly reduced our downtime and repair costs.',
      rating: 5,
      category: 'business'
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'Performance Enthusiast',
      content: 'The performance upgrades SR Automotives installed on my sports car have transformed the driving experience. Their knowledge of performance tuning is exceptional.',
      rating: 5,
      category: 'individual'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Honda Owner',
      content: 'I appreciate the honest and transparent service I always receive. They explain everything clearly and never push unnecessary repairs or services.',
      rating: 4,
      category: 'individual'
    },
    {
      id: 5,
      name: 'Robert Chen',
      role: 'Mercedes Owner',
      content: 'Finding quality parts for luxury vehicles can be difficult, but SR Automotives always sources genuine parts quickly. Their service is prompt and professional.',
      rating: 5,
      category: 'individual'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      role: 'Small Business Owner',
      content: 'As a small business owner, vehicle reliability is crucial. SR Automotives keeps our delivery vans running smoothly, which directly impacts our business operations.',
      rating: 5,
      category: 'business'
    },
    {
      id: 7,
      name: 'David Martinez',
      role: 'Audi Owner',
      content: 'I\'ve been taking my Audi to SR Automotives for the past 2 years. Their diagnostic capabilities saved me from an expensive and unnecessary transmission replacement that another shop had recommended.',
      rating: 5,
      category: 'individual'
    },
    {
      id: 8,
      name: 'Jennifer Lee',
      role: 'Toyota Owner',
      content: 'The team at SR Automotives is friendly, knowledgeable, and efficient. My Toyota runs better than ever after their maintenance service, and they finished earlier than promised.',
      rating: 5,
      category: 'individual'
    },
    {
      id: 9,
      name: 'Thomas Wright',
      role: 'Restaurant Owner',
      content: 'Our restaurant delivery vehicles need to be reliable, and SR Automotives ensures they stay that way. Their flexible scheduling accommodates our business hours, minimizing disruption.',
      rating: 4,
      category: 'business'
    }
  ];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter);

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-[#0A66C2]">
        <div className="container text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Testimonials</h1>
            <p className="text-xl opacity-90">
              See what our satisfied customers have to say about our services
            </p>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <Section>
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#F8F9FA] p-1 rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-md ${
                filter === 'all' 
                  ? 'bg-[#0A66C2] text-white' 
                  : 'hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('individual')}
              className={`px-6 py-2 rounded-md ${
                filter === 'individual' 
                  ? 'bg-[#0A66C2] text-white' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Individual Customers
            </button>
            <button
              onClick={() => setFilter('business')}
              className={`px-6 py-2 rounded-md ${
                filter === 'business' 
                  ? 'bg-[#0A66C2] text-white' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Business Clients
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
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
      </Section>
      
      {/* Stats */}
      <Section background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="reveal">
            <div className="text-5xl font-bold text-[#0A66C2] mb-2">98%</div>
            <p className="text-lg font-medium">Customer Satisfaction</p>
          </div>
          <div className="reveal">
            <div className="text-5xl font-bold text-[#0A66C2] mb-2">5,000+</div>
            <p className="text-lg font-medium">Happy Customers</p>
          </div>
          <div className="reveal">
            <div className="text-5xl font-bold text-[#0A66C2] mb-2">10,000+</div>
            <p className="text-lg font-medium">Services Completed</p>
          </div>
          <div className="reveal">
            <div className="text-5xl font-bold text-[#0A66C2] mb-2">90%</div>
            <p className="text-lg font-medium">Repeat Customers</p>
          </div>
        </div>
      </Section>
      
      {/* Submit Testimonial */}
      <Section title="Share Your Experience" subtitle="We value your feedback">
        <div className="max-w-2xl mx-auto">
          <form className="card p-6 md:p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Your Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="text-[#FF4C29]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="testimonial" className="block mb-2 font-medium">
                Your Testimonial <span className="text-red-500">*</span>
              </label>
              <textarea
                id="testimonial"
                name="testimonial"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
            >
              Submit Testimonial
            </button>
          </form>
        </div>
      </Section>
      
      {/* CTA */}
      <ContactCTA />
    </>
  );
};

export default Testimonials;