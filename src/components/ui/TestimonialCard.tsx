import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  // Generate stars based on rating
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<Star key={i} size={16} className="fill-[#FF4C29] text-[#FF4C29]" />);
    } else {
      stars.push(<Star key={i} size={16} className="text-gray-300" />);
    }
  }

  return (
    <div className="card p-6 h-full flex flex-col">
      {/* Rating */}
      <div className="flex mb-4">
        {stars}
      </div>
      
      {/* Content */}
      <p className="italic mb-6 flex-grow">{content}</p>
      
      {/* Author */}
      <div className="flex items-center mt-auto">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold">{name}</h4>
          {role && <p className="text-sm text-[#666666]">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;