import { useEffect } from 'react';
import { Settings, PenTool as Tool, RotateCw, Gauge, ShieldCheck, WrenchIcon, Headphones, BarChart3 } from 'lucide-react';
import Section from '../components/ui/Section';
import ServiceCard from '../components/ui/ServiceCard';
import ContactCTA from '../components/home/ContactCTA';

const Services = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Our Services | SR Automotives';
    
    // Scroll to specific service if hash exists
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  const mainServices = [
    {
      id: 'repairs',
      title: 'Car Repairs & Diagnostics',
      description: 'Our expert technicians use advanced diagnostic tools to identify and resolve issues with precision, minimizing downtime and ensuring reliable repairs.',
      icon: Settings,
      details: [
        'Computer diagnostics with OEM-level scanning tools',
        'Engine and transmission repairs',
        'Electrical system troubleshooting',
        'Brake system repairs and maintenance',
        'Suspension and steering services'
      ]
    },
    {
      id: 'parts',
      title: 'Spare Parts & Accessories',
      description: 'We source and supply genuine parts and premium accessories to maintain your vehicle\'s performance, reliability, and value.',
      icon: Tool,
      details: [
        'OEM and high-quality aftermarket parts',
        'Performance parts for various makes and models',
        'Interior and exterior accessories',
        'Lighting and electrical components',
        'Wheels, tires, and suspension upgrades'
      ]
    },
    {
      id: 'maintenance',
      title: 'Regular Vehicle Maintenance',
      description: 'Prevent costly repairs and extend your vehicle\'s lifespan with our comprehensive maintenance services, tailored to your specific make and model.',
      icon: RotateCw,
      details: [
        'Oil changes and fluid services',
        'Filter replacements (air, fuel, cabin)',
        'Brake inspections and maintenance',
        'Battery testing and replacement',
        'Scheduled maintenance packages'
      ]
    },
    {
      id: 'performance',
      title: 'Performance Upgrades',
      description: 'Enhance your driving experience with custom performance solutions designed to increase power, improve handling, and optimize efficiency.',
      icon: Gauge,
      details: [
        'Engine tuning and ECU remapping',
        'Exhaust system upgrades',
        'Suspension enhancements',
        'Brake system improvements',
        'Custom performance packages'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'Pre-Purchase Inspections',
      description: 'Comprehensive evaluation of vehicles before purchase to identify potential issues and ensure you make an informed decision.',
      icon: ShieldCheck,
    },
    {
      title: 'Custom Modifications',
      description: 'Personalized vehicle modifications to enhance performance, aesthetics, or functionality according to your preferences.',
      icon: WrenchIcon,
    },
    {
      title: '24/7 Roadside Assistance',
      description: 'Emergency support services available around the clock to help you get back on the road quickly and safely.',
      icon: Headphones,
    },
    {
      title: 'Fleet Management Solutions',
      description: 'Comprehensive maintenance programs for business fleets to minimize downtime and optimize operational efficiency.',
      icon: BarChart3,
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-[#0A66C2]">
        <div className="container text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive automotive solutions tailored to your vehicle's needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Premium Automotive Solutions</h2>
          <p className="text-lg">
            At SR Automotives, we offer a comprehensive range of services designed to keep your vehicle running at its best. From routine maintenance to complex repairs and performance upgrades, our expert team delivers quality results you can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((service) => (
            <div key={service.id} id={service.id} className="reveal">
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mr-6 text-[#0A66C2]">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                
                <p className="mb-6 text-[#666666]">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-[#0A66C2] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Additional Services */}
      <Section title="Additional Services" background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className="reveal">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link="/contact"
              />
            </div>
          ))}
        </div>
      </Section>
      
      {/* Service Process */}
      <Section title="Our Service Process" subtitle="How we deliver exceptional results every time">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1 reveal">
            <div className="relative pl-8 pb-16 border-l-2 border-[#0A66C2] last:border-0 last:pb-0">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#0A66C2]"></div>
              <div>
                <h3 className="text-xl font-bold mb-3">1. Initial Consultation</h3>
                <p className="text-[#666666]">
                  We begin with a detailed discussion about your vehicle's needs, concerns, and service history to develop a clear understanding of the situation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 reveal">
            <div className="relative pl-8 pb-16 border-l-2 border-[#0A66C2] last:border-0 last:pb-0">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#0A66C2]"></div>
              <div>
                <h3 className="text-xl font-bold mb-3">2. Diagnostic Assessment</h3>
                <p className="text-[#666666]">
                  Our technicians perform a comprehensive inspection using advanced diagnostic tools to identify any issues and determine the best course of action.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 reveal">
            <div className="relative pl-8 pb-16 border-l-2 border-[#0A66C2] last:border-0 last:pb-0">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#0A66C2]"></div>
              <div>
                <h3 className="text-xl font-bold mb-3">3. Transparent Quote</h3>
                <p className="text-[#666666]">
                  Based on our findings, we provide a detailed quote outlining the recommended services, parts needed, estimated completion time, and total cost.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 reveal">
            <div className="relative pl-8 border-l-2 border-[#0A66C2] last:border-0">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#0A66C2]"></div>
              <div>
                <h3 className="text-xl font-bold mb-3">4. Expert Service</h3>
                <p className="text-[#666666]">
                  Upon approval, our certified technicians perform the service with precision, using quality parts and following manufacturer specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA */}
      <ContactCTA />
    </>
  );
};

export default Services;