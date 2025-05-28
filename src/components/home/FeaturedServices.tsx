import { Link } from 'react-router-dom';
import { Settings, PenTool as Tool, Gauge, RotateCw } from 'lucide-react';
import Section from '../ui/Section';
import ServiceCard from '../ui/ServiceCard';

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: 'Car Repairs & Diagnostics',
      description: 'Advanced diagnostic tools and skilled technicians to identify and fix issues with precision.',
      icon: Settings,
      link: '/services#repairs'
    },
    {
      id: 2,
      title: 'Spare Parts & Accessories',
      description: 'Genuine parts and premium accessories to enhance your vehicle\'s performance and appearance.',
      icon: Tool,
      link: '/services#parts'
    },
    {
      id: 3,
      title: 'Regular Vehicle Maintenance',
      description: 'Scheduled maintenance services to keep your vehicle running smoothly and prevent costly repairs.',
      icon: RotateCw,
      link: '/services#maintenance'
    },
    {
      id: 4,
      title: 'Performance Upgrades',
      description: 'Custom solutions to boost your vehicle\'s performance, efficiency, and driving experience.',
      icon: Gauge,
      link: '/services#performance'
    }
  ];

  return (
    <Section 
      title="Our Services" 
      subtitle="We provide comprehensive automotive solutions tailored to your vehicle's needs with quality parts and expert service."
      background="light"
      id="services"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <div key={service.id} className="reveal">
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link 
          to="/services"
          className="btn btn-primary inline-flex items-center"
        >
          View All Services
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </Section>
  );
};

export default FeaturedServices;