"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Definimos una interfaz básica para los mazos que recibiremos
interface MinimalDeck {
  id: string;
  name: string;
  commander: string;
}

interface DeckSelectorProps {
  decks: MinimalDeck[];
}

export default function DeckSelector({ decks }: DeckSelectorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Obtenemos los valores actuales de la URL o asignamos valores por defecto
  const currentDeckId = searchParams.get('deck') || (decks[0]?.id || '');
  const currentBudget = searchParams.get('budget') || 'budget';

  const handleDeckChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDeck = e.target.value;
    router.push(`/?deck=${newDeck}&budget=${currentBudget}`, { scroll: false });
  };

  const handleBudgetChange = (budget: string) => {
    router.push(`/?deck=${currentDeckId}&budget=${budget}`, { scroll: false });
  };

  return (
    <div className="w-full bg-surface/50 border border-surfaceHover rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between mb-8 shadow-lg">
      
      {/* Selector de Mazo */}
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <label htmlFor="deck-select" className="text-sm font-bold text-gray-400 uppercase tracking-wider">
          Selecciona tu Mazo
        </label>
        <div className="relative">
          <select
            id="deck-select"
            value={currentDeckId}
            onChange={handleDeckChange}
            className="w-full appearance-none bg-background border-2 border-surfaceHover hover:border-primary/50 focus:border-primary transition-colors text-white font-semibold text-lg rounded-xl py-3 px-4 outline-none cursor-pointer"
          >
            {decks.map((deck) => (
              <option key={deck.id} value={deck.id}>
                {deck.name} ({deck.commander})
              </option>
            ))}
          </select>
          {/* Icono de flecha para el select */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Selector de Presupuesto */}
      <div className="w-full md:w-1/2 flex flex-col gap-2 md:items-end">
        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">
          Nivel de Mejora
        </label>
        <div className="flex bg-background border-2 border-surfaceHover rounded-xl p-1 w-full max-w-sm">
          <button
            onClick={() => handleBudgetChange('budget')}
            className={`flex-1 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${
              currentBudget === 'budget'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-surfaceHover'
            }`}
          >
            Budget ($)
          </button>
          <button
            onClick={() => handleBudgetChange('premium')}
            className={`flex-1 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${
              currentBudget === 'premium'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-surfaceHover'
            }`}
          >
            Premium ($$$)
          </button>
        </div>
      </div>

    </div>
  );
}