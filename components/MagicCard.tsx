import React from 'react';
import { getCardByName } from '../lib/scryfall';

interface MagicCardProps {
  cardName: string;
  action: "add" | "remove";
}

export default async function MagicCard({ cardName, action }: MagicCardProps) {
  // Obtenemos los datos de la carta directamente desde nuestro archivo de Scryfall
  const cardData = await getCardByName(cardName);
  
  const isAdd = action === 'add';
  
  // Clases dinámicas según si hay que añadir o quitar la carta
  const glowClass = isAdd 
    ? 'shadow-glow-green border-ledGreen/50' 
    : 'shadow-glow-red border-ledRed/50';
  const badgeText = isAdd ? '+ AÑADIR' : '- QUITAR';
  const badgeBg = isAdd ? 'bg-ledGreen' : 'bg-ledRed';

  // Manejo de cartas dobles (Modal Double-Faced Cards de Magic)
  const imageUrl = cardData?.image_uris?.normal 
    || cardData?.card_faces?.[0]?.image_uris?.normal 
    || ''; 

  // Priorizamos Euros, si no, Dólares
  const price = cardData?.prices?.eur 
    ? `${cardData.prices.eur} €` 
    : (cardData?.prices?.usd ? `${cardData.prices.usd} $` : 'N/A');

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-[240px] mx-auto">
      {/* Contenedor de la carta con el efecto LED */}
      <div className={`relative rounded-xl overflow-hidden border-2 transition-transform hover:scale-105 duration-300 ${glowClass}`}>
        
        {/* Etiqueta superior indicando la acción */}
        <div className={`absolute top-0 left-0 w-full text-center font-bold text-white text-xs py-1.5 z-10 shadow-md ${badgeBg}`}>
          {badgeText}
        </div>
        
        {cardData && imageUrl ? (
          <img 
            src={imageUrl} 
            alt={cardName} 
            className="w-full h-auto object-cover relative z-0"
            loading="lazy"
          />
        ) : (
          // Placeholder por si la carta no se encuentra o falla la API
          <div className="w-full aspect-[63/88] bg-surfaceHover flex items-center justify-center p-4 text-center text-sm text-gray-400">
            Carta no encontrada:<br/><span className="font-bold">{cardName}</span>
          </div>
        )}
      </div>

      {/* Nombre y Precio debajo de la carta */}
      <div className="text-center w-full">
        <h3 className="font-semibold text-gray-100 truncate w-full px-2" title={cardName}>
          {cardName}
        </h3>
        <p className="text-primary font-bold text-sm mt-1">
          {price}
        </p>
      </div>
    </div>
  );
}