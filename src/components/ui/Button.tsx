import { AnchorHTMLAttributes } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseClasses = 'font-sans font-normal uppercase tracking-[0.2em] transition-all duration-300 inline-block text-center';
  
  const variantClasses = {
    primary: 'px-8 md:px-12 py-4 md:py-5 bg-turquoise text-[#0B0B0B] text-base md:text-lg border border-transparent hover:bg-[#0B0B0B] hover:text-turquoise hover:border-turquoise',
    secondary: 'px-16 py-6 bg-white text-black text-lg border border-transparent hover:bg-turquoise hover:text-black hover:border-turquoise w-full md:w-auto',
  };

  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
