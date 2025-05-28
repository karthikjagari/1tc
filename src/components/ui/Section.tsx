import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'primary' | 'secondary';
}

const Section = ({
  children,
  title,
  subtitle,
  className = '',
  id,
  background = 'white'
}: SectionProps) => {
  // Background color classes
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-[#F8F9FA]',
    primary: 'bg-[#0A66C2] text-white',
    secondary: 'bg-[#FF4C29] text-white'
  };
  
  return (
    <section 
      id={id} 
      className={`section py-16 md:py-24 ${bgClasses[background]} ${className}`}
    >
      <div className="container">
        {(title || subtitle) && (
          <div className="section-title mb-12 text-center">
            {title && <h2 className="mb-4">{title}</h2>}
            {subtitle && (
              <p className="text-lg max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;