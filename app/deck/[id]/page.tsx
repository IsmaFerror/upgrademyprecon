import React from 'react';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import BudgetTabs from '../../../components/BudgetTabs';
import UpgradeStats from '../../../components/UpgradeStats';
import UpgradeView from '../../../components/UpgradeView';
import CTAButton from '../../../components/CTAButton';
import { getDeckById } from '../../../lib/dataLoader';
import { BudgetLevel } from '../../../lib/types';

// En las versiones más recientes de Next.js, params y searchParams son asíncronos (Promises)
interface DeckPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    budget?: string;
  }>;
}

export default async function DeckPage({ params, searchParams }: DeckPageProps) {
  // 1. "Esperamos" (await) a que Next.js lea correctamente la URL
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // 2. Buscamos el mazo en nuestro CMS local con el ID correcto
  const deck = getDeckById(resolvedParams.id);

  // Si no se encuentra el archivo .json, mandamos a la página 404
  if (!deck) {
    notFound();
  }

  // 3. Determinamos el nivel de presupuesto
  const currentBudget = (resolvedSearchParams.budget as BudgetLevel) || '20';
  const selectedUpgrades = deck.upgrades[currentBudget] || { add: [], remove: [] };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
        
        {/* Cabecera del Mazo (Imagen + Info) */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-10 mt-4 bg-surface/30 p-6 md:p-8 rounded-3xl border border-surfaceHover">
          <div className="w-32 md:w-48 flex-shrink-0">
            {deck.image ? (
              <img 
                src={deck.image} 
                alt={deck.name} 
                className="w-full h-auto rounded-xl shadow-[0_10px_40px_rgba(124,58,237,0.15)] border-2 border-surfaceHover" 
              />
            ) : (
              <div className="w-full aspect-[3/4] bg-surface rounded-xl border-2 border-surfaceHover flex items-center justify-center text-gray-500">
                Sin foto
              </div>
            )}
          </div>
          
          <div className="text-center md:text-left flex-grow flex flex-col justify-center h-full md:mt-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
              {deck.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              Comandante: <span className="text-gray-300">{deck.commander}</span>
            </p>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl">
              Descubre las mejores cartas para potenciar la estrategia de este mazo. Intercambia las cartas recomendadas y domina tu próxima partida.
            </p>
          </div>
        </div>

        {/* Controles y Estadísticas */}
        <div className="w-full flex flex-col gap-6 mb-8">
          <BudgetTabs />
          
          {/* Aquí inyectamos el componente que calcula el precio real vía Scryfall */}
          <UpgradeStats cardsToAdd={selectedUpgrades.add} />
        </div>

        {/* Listado Visual de Cartas (Rojo / Verde) */}
        <UpgradeView tier={selectedUpgrades} />
        
        {/* Call to Action Final */}
        <CTAButton 
          text="Comprar cartas en Cardmarket" 
          href="https://www.cardmarket.com/" 
        />
        
      </main>
    </>
  );
}