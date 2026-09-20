import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-surface border-b border-surfaceHover py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center font-bold text-white shadow-glow-green">
          UP
        </div>
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
          UpgradeMy<span className="text-primary">Precon</span>
        </h1>
      </div>
      
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
        <span className="hover:text-white cursor-pointer transition-colors duration-200">
          Mazos
        </span>
        <span className="hover:text-white cursor-pointer transition-colors duration-200">
          Acerca de
        </span>
      </nav>
      
      {/* Botón de menú móvil (placeholder visual) */}
      <div className="md:hidden text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </header>
  );
}