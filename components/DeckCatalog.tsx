"use client";

import React, { useState } from 'react';
import DeckCatalogCard from './DeckCatalogCard';
import { Deck } from '../lib/types';

interface DeckCatalogProps {
  decks: Deck[];
}

export default function DeckCatalog({ decks }: DeckCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtramos los mazos comprobando si el texto coincide con el nombre o el comandante
  const filteredDecks = decks.filter((deck) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      deck.name.toLowerCase().includes(searchLower) ||
      deck.commander.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="w-full">
      {/* Barra de Búsqueda */}
      <div className="mb-10 max-w-2xl mx-auto relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-500 group-focus-within:text-primary transition-colors duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Buscar mazo o comandante..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-surface/40 border-2 border-surfaceHover text-white rounded-2xl py-4 pl-14 pr-4 focus:outline-none focus:border-primary/70 focus:bg-surface focus:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300 placeholder-gray-500 text-lg"
        />
      </div>

      {/* Grid de Resultados */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredDecks.length > 0 ? (
          filteredDecks.map((deck) => (
            <DeckCatalogCard 
              key={deck.id}
              id={deck.id}
              name={deck.name}
              image={deck.image}
              commander={deck.commander}
            />
          ))
        ) : (
          <div className="col-span-full text-center p-12 border-2 border-dashed border-surfaceHover rounded-2xl bg-surface/20">
            <p className="text-gray-300 text-xl font-bold mb-2">No se encontraron resultados</p>
            <p className="text-gray-500">Prueba con otro nombre de mazo o comandante.</p>
          </div>
        )}
      </div>
    </div>
  );
}