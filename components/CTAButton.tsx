import React from 'react';

interface CTAButtonProps {
  text?: string;
  href?: string;
}

export default function CTAButton({ text = "Comprar en Cardmarket", href = "#" }: CTAButtonProps) {
  return (
    <div className="w-full flex justify-center py-8">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative px-8 py-4 bg-primary hover:bg-primaryHover text-white font-extrabold text-lg rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.8)] hover:-translate-y-1 flex items-center gap-3"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-6 h-6 transition-transform group-hover:scale-110"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        {text}
      </a>
    </div>
  );
}