import React from 'react';
import { calculateUpgradeCost } from '../lib/priceCalculator';

interface UpgradeStatsProps {
  cardsToAdd: string[];
}

export default async function UpgradeStats({ cardsToAdd }: UpgradeStatsProps) {
  // Calculamos el coste total usando nuestra función en paralelo
  const totalCost = await calculateUpgradeCost(cardsToAdd);

  return (
    <div className="bg-surface/40 border border-surfaceHover rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-8 shadow-lg">
      
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="p-3 bg-primary/20 border border-primary/30 rounded-xl">
          {/* Icono de billetes / precio */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-wider">
            Precio estimado de las mejoras
          </h3>
          <p className="text-xs md:text-sm text-gray-500 mt-0.5">
            Calculado en tiempo real vía Scryfall / Cardmarket
          </p>
        </div>
      </div>

      <div className="text-left w-full md:w-auto md:text-right border-t border-surfaceHover pt-4 md:border-0 md:pt-0">
        <span className="block text-sm font-bold text-gray-400 mb-1">Costo Total:</span>
        <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          {totalCost}
        </span>
      </div>

    </div>
  );
}