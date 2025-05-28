import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  // Base classes
  const baseClasses = 'btn font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-[#0A66C2] hover:bg-[#084f99] text-white',
    secondary: 'bg-[#FF4C29] hover:bg-[#e53c1c] text-white',
    outline: 'border-2 border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white'
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Combine all classes
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClasses}
    ${className}
  `;
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;