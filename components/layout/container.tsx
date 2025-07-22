import React from 'react'

interface ContainerProps {
  children: React.ReactNode;
  variant?: 'sm' | 'md' | 'lg' | 'xl';
}

const container = ({ children, variant = 'md' }: ContainerProps) => {
  const variantClasses = {
    sm: "max-w-[926px]",
    md: "max-w-[1200px]",
    lg: "max-w-[1400px]",
    xl: "max-w-[1600px]",
  };
  return (
    <div className={`${variantClasses[variant]} w-full m-auto px-3`}>
      {children}
    </div>
  );
}

export default container