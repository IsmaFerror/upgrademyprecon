import React from 'react';
import Header from '../components/Header';
import DeckCatalog from '../components/DeckCatalog';
import { getAllDecks } from '../lib/dataLoader';

export const dynamic = 'force-dynamic';

export default function Home() {
  // El servidor lee los archivos .json de forma segura
  const decks = getAllDecks();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
        
        {/* Cabecera hero de la página */}
        <div className="text-center mb-12 mt-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Mejora tu Mazo Preconstruido
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Selecciona tu mazo para descubrir la guía definitiva de mejoras. Te mostramos qué cartas añadir y quitar con precios actualizados en tiempo real.
          </p>
        </div>

        {/* Le pasamos los datos al componente cliente que tiene el buscador */}
        <DeckCatalog decks={decks} />
        
      </main>
    </>
  );
}