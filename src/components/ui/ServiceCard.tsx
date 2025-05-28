import { DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard = ({ title, description, icon: Icon, link }: ServiceCardProps) => {
  return (
    <div className="card group hover:shadow-lg hover:translate-y-[-5px]">
      <div className="p-6">
        <div className="w-16 h-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mb-6 text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-300">
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="mb-6 text-[#666666]">{description}</p>
        <Link 
          to={link} 
          className="text-[#0A66C2] font-medium hover:text-[#FF4C29] transition-colors inline-flex items-center"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;