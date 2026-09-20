import React from 'react';
import { UpgradeTier } from '../lib/types';
import MagicCard from './MagicCard';

interface UpgradeViewProps {
  tier: UpgradeTier;
}

export default function UpgradeView({ tier }: UpgradeViewProps) {
  if (!tier || (tier.add.length === 0 && tier.remove.length === 0)) {
    return (
      <div className="text-center text-gray-400 py-12">
        No hay mejoras disponibles para este presupuesto.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 py-8">
      
      {/* SECCIÓN ROJA: Cartas a Eliminar */}
      <div className="flex flex-col bg-surface/40 rounded-2xl p-4 md:p-6 border border-surfaceHover">
        <div className="flex items-center gap-3 mb-6 border-b border-surfaceHover pb-4">
          <div className="w-4 h-4 rounded-full bg-ledRed shadow-glow-red animate-pulse"></div>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            Cartas a Quitar
          </h2>
          <span className="ml-auto bg-surfaceHover text-gray-300 text-xs font-bold px-3 py-1 rounded-full">
            {tier.remove.length} cartas
          </span>
        </div>
        
        {/* Usamos grid-cols-2 en móvil para aprovechar espacio, y 3 en pantallas grandes */}
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {tier.remove.map((cardName, index) => (
            <MagicCard key={`remove-${cardName}-${index}`} cardName={cardName} action="remove" />
          ))}
        </div>
      </div>

      {/* SECCIÓN VERDE: Cartas a Añadir */}
      <div className="flex flex-col bg-surface/40 rounded-2xl p-4 md:p-6 border border-surfaceHover">
        <div className="flex items-center gap-3 mb-6 border-b border-surfaceHover pb-4">
          <div className="w-4 h-4 rounded-full bg-ledGreen shadow-glow-green animate-pulse"></div>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            Cartas a Añadir
          </h2>
          <span className="ml-auto bg-surfaceHover text-gray-300 text-xs font-bold px-3 py-1 rounded-full">
            {tier.add.length} cartas
          </span>
        </div>
        
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {tier.add.map((cardName, index) => (
            <MagicCard key={`add-${cardName}-${index}`} cardName={cardName} action="add" />
          ))}
        </div>
      </div>

    </div>
  );
}