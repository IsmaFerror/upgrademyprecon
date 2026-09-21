"use client";

import React, { useRef } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

const TIERS = [
  { id: '5', label: '5 €' },
  { id: '10', label: '10 €' },
  { id: '20', label: '20 €' },
  { id: '30', label: '30 €' },
  { id: '40', label: '40 €' },
  { id: '50', label: '50 €' },
  { id: '60', label: '60 €' },
  { id: '80', label: '80 €' },
  { id: '100', label: '100 €' },
  { id: 'premium', label: 'Premium' },
];

export default function BudgetTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Por defecto, si el usuario entra sin parámetro, le mostramos el de 20€
  const currentBudget = searchParams.get('budget') || '20';

  const handleBudgetChange = (budget: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('budget', budget);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full bg-surface/50 border border-surfaceHover rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center justify-between mb-8 shadow-lg overflow-hidden">
      
      <div className="text-center md:text-left flex-shrink-0">
        <h3 className="text-lg font-bold text-white tracking-wide">Presupuesto</h3>
        <p className="text-sm text-gray-400 mt-1">Desliza y elige tu inversión</p>
      </div>
      
      {/* Contenedor con scroll horizontal ocultando la barra nativa */}
      <div 
        ref={scrollContainerRef}
        className="w-full flex items-center gap-2 overflow-x-auto pb-2 -mb-2 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TIERS.map((tier) => (
          <button
            key={tier.id}
            onClick={() => handleBudgetChange(tier.id)}
            className={`flex-shrink-0 py-2.5 px-5 rounded-xl font-bold text-sm transition-all duration-300 ${
              currentBudget === tier.id
                ? 'bg-primary text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-background border-2 border-surfaceHover text-gray-400 hover:text-white hover:border-primary/50'
            }`}
          >
            {tier.label}
          </button>
        ))}
      </div>

    </div>
  );
}