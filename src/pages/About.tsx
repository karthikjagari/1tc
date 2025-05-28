import { useEffect } from 'react';
import { Clock, Award, Users, Shield, CheckCircle, BarChart } from 'lucide-react';
import Section from '../components/ui/Section';
import ContactCTA from '../components/home/ContactCTA';

const About = () => {
  useEffect(() => {
    // Update page title
    document.title = 'About Us | SR Automotives';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-[#0A66C2]">
        <div className="container text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SR Automotives</h1>
            <p className="text-xl opacity-90">
              Learn about our journey, values, and commitment to automotive excellence.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              Founded in 2013, SR Automotives began with a simple mission: to provide honest, high-quality automotive services that customers can trust. What started as a small repair shop has grown into a comprehensive automotive solutions provider serving individuals and businesses across the region.
            </p>
            <p className="mb-4">
              Our founder, Samuel Rodriguez, brought 15 years of experience working with premium automotive brands and a vision to create a service center that combines technical expertise with exceptional customer care.
            </p>
            <p>
              Today, SR Automotives is recognized for its state-of-the-art facility, team of certified technicians, and commitment to using the latest technology and genuine parts to deliver superior results.
            </p>
          </div>
          <div className="reveal">
            <img
              src="https://images.pexels.com/photos/3807388/pexels-photo-3807388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="SR Automotives Facility"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </Section>
      
      {/* Our Mission & Values */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
          <p className="text-lg">
            At SR Automotives, we're driven by our commitment to excellence and guided by core values that shape every aspect of our service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 text-center reveal">
            <div className="w-16 h-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mx-auto mb-6 text-[#0A66C2]">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p>
              To provide premium automotive solutions that exceed customer expectations through technical excellence, personalized service, and unwavering integrity.
            </p>
          </div>
          
          <div className="card p-8 text-center reveal">
            <div className="w-16 h-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mx-auto mb-6 text-[#0A66C2]">
              <BarChart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p>
              To be the most trusted name in automotive services, known for our expertise, innovation, and customer-first approach in everything we do.
            </p>
          </div>
          
          <div className="card p-8 text-center reveal">
            <div className="w-16 h-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mx-auto mb-6 text-[#0A66C2]">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Promise</h3>
            <p>
              We promise transparency, quality, and reliability in every service we provide, standing behind our work with satisfaction guarantees.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm reveal">
            <Award className="text-[#0A66C2] mb-4" size={40} />
            <h3 className="font-bold mb-2">Excellence</h3>
            <p className="text-sm text-[#666666]">
              We pursue excellence in every repair, maintenance service, and customer interaction.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm reveal">
            <Shield className="text-[#0A66C2] mb-4" size={40} />
            <h3 className="font-bold mb-2">Integrity</h3>
            <p className="text-sm text-[#666666]">
              We operate with honesty and transparency, building trust through ethical practices.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm reveal">
            <Users className="text-[#0A66C2] mb-4" size={40} />
            <h3 className="font-bold mb-2">Respect</h3>
            <p className="text-sm text-[#666666]">
              We value every customer and treat their vehicles with the utmost care and respect.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm reveal">
            <Clock className="text-[#0A66C2] mb-4" size={40} />
            <h3 className="font-bold mb-2">Reliability</h3>
            <p className="text-sm text-[#666666]">
              We deliver on our promises, completing services on time and as quoted.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Our Team */}
      <Section title="Our Team" subtitle="Meet the experts behind SR Automotives' success">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="card overflow-hidden reveal">
            <img
              src="https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Samuel Rodriguez"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Samuel Rodriguez</h3>
              <p className="text-[#0A66C2] font-medium mb-3">Founder & Lead Technician</p>
              <p className="text-[#666666]">
                With over 20 years of experience, Samuel leads our team with expertise in luxury vehicle diagnostics and performance optimization.
              </p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="card overflow-hidden reveal">
            <img
              src="https://images.pexels.com/photos/8962434/pexels-photo-8962434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Maria Chen"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Maria Chen</h3>
              <p className="text-[#0A66C2] font-medium mb-3">Service Manager</p>
              <p className="text-[#666666]">
                Maria ensures seamless operations and exceptional customer service, bringing 12 years of automotive management experience.
              </p>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="card overflow-hidden reveal">
            <img
              src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="David Kim"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">David Kim</h3>
              <p className="text-[#0A66C2] font-medium mb-3">Master Technician</p>
              <p className="text-[#666666]">
                David specializes in advanced diagnostics and electrical systems, with certifications from multiple premium automotive brands.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA */}
      <ContactCTA />
    </>
  );
};

export default About;