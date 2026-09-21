import React from 'react';
import Link from 'next/link';

interface DeckCatalogCardProps {
  id: string;
  name: string;
  image: string;
  commander: string;
}

export default function DeckCatalogCard({ id, name, image, commander }: DeckCatalogCardProps) {
  return (
    <Link href={`/deck/${id}`} className="block group cursor-pointer h-full">
      <div className="bg-surface/50 border-2 border-surfaceHover rounded-2xl p-4 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-surface group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgba(124,58,237,0.2)] flex flex-col h-full">
        
        {/* Contenedor de la imagen */}
        <div className="w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden mb-4 relative bg-background flex items-center justify-center">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
          ) : (
            <span className="text-gray-500 font-bold">Sin imagen</span>
          )}
          {/* Overlay sutil para oscurecer la imagen ligeramente en la parte inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Información del mazo */}
        <div className="flex flex-col flex-grow justify-end">
          <h2 className="text-xl font-extrabold text-white mb-1 group-hover:text-primary transition-colors">
            {name}
          </h2>
          <p className="text-sm font-medium text-gray-400">
            Comandante: <span className="text-gray-300">{commander}</span>
          </p>
        </div>

      </div>
    </Link>
  );
}