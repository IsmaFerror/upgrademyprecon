interface CardData {
  name: string;
  reason: string;
  imageUrl: string;
  price?: string | null;
}

interface CardSwapCardProps {
  cut: CardData;
  add: CardData;
}

export default function CardSwapCard({ cut, add }: CardSwapCardProps) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto bg-[#171a21] rounded-xl overflow-hidden border border-gray-800 mb-8 shadow-lg">
      
      {/* SECCIÓN ROJA (Corte - LED Rojo) */}
      <div className="p-4 relative overflow-hidden">
        {/* Brillo LED de fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-full bg-red-900/10 pointer-events-none"></div>
        
        <div className="flex gap-4 items-center relative z-10">
          <div className="relative">
            {cut.imageUrl ? (
              <img src={cut.imageUrl} alt={cut.name} className="w-16 h-12 object-cover rounded shadow-[0_0_12px_rgba(239,68,68,0.5)] border border-red-500/50" />
            ) : (
              <div className="w-16 h-12 bg-gray-800 rounded border border-red-500/30"></div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-200 line-through decoration-red-500 decoration-2">{cut.name}</h3>
            <p className="text-xs text-gray-400 mt-1 leading-snug">{cut.reason}</p>
          </div>
        </div>
      </div>

      {/* CONECTOR (Flecha Minimalista) */}
      <div className="flex justify-center -my-3 relative z-20">
        <div className="bg-[#0f1115] rounded-full p-1.5 border border-gray-700 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* SECCIÓN VERDE (Añadido - LED Verde) */}
      <div className="p-4 relative overflow-hidden">
        {/* Brillo LED de fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-full bg-green-900/10 pointer-events-none"></div>

        <div className="flex gap-4 items-center relative z-10">
          <div className="relative">
            {add.imageUrl ? (
               <img src={add.imageUrl} alt={add.name} className="w-16 h-12 object-cover rounded shadow-[0_0_12px_rgba(34,197,94,0.6)] border border-green-400/50" />
            ) : (
               <div className="w-16 h-12 bg-gray-800 rounded border border-green-500/30"></div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-gray-100">{add.name}</h3>
              {add.price && (
                <span className="text-green-400 text-xs font-mono font-bold bg-green-900/30 px-2 py-1 rounded border border-green-500/20 shadow-[0_0_8px_rgba(34,197,94,0.2)]">
                  ${add.price}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-1 leading-snug">{add.reason}</p>
          </div>
        </div>
      </div>

    </div>
  );
}