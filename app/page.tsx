import recipesData from '../data/recipes.json';
import { fetchCardsData } from '../lib/scryfall';
import CardSwapCard from '../components/CardSwapCard';
import Navbar from '../components/Navbar';
import CheckoutFooter from '../components/CheckoutFooter';

export default async function Home() {
  const precon = recipesData.precons[0];
  const budget20 = precon.upgrades.budget_20;

  const cardNamesToFetch = [
    ...budget20.cuts.map(c => c.card_name),
    ...budget20.adds.map(a => a.card_name)
  ];
  
  const scryfallData = await fetchCardsData(cardNamesToFetch);

  // Calculamos el precio total real sumando las cartas añadidas
  let totalUpgradePrice = 0;

  const swaps = budget20.cuts.map((cut, index) => {
    const add = budget20.adds[index];
    const cutScryfall = scryfallData[cut.card_name] || {};
    const addScryfall = scryfallData[add.card_name] || {};

    if (addScryfall.price_usd) {
      totalUpgradePrice += parseFloat(addScryfall.price_usd);
    }

    return {
      cut: {
        name: cut.card_name,
        reason: cut.reason.es,
        imageUrl: cutScryfall.image_url || '',
      },
      add: {
        name: add.card_name,
        reason: add.reason.es,
        imageUrl: addScryfall.image_url || '',
        price: addScryfall.price_usd || '0.00',
      }
    };
  });

  return (
    <div className="min-h-screen pb-32">
      <Navbar />

      <main className="max-w-3xl mx-auto mt-6">
        {/* Cabecera del Mazo */}
        <header className="px-4 py-6 border-b border-gray-800">
          <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">Mejora de Commander</p>
          <h1 className="text-3xl font-extrabold text-white mb-3">{precon.name}</h1>
          <div className="inline-flex items-center justify-center bg-gray-800/80 px-4 py-1.5 rounded-full border border-gray-700">
            <span className="text-sm font-semibold text-gray-300">Tier: <span className="text-white">{budget20.label}</span></span>
          </div>
        </header>

        {/* Lista de Cambios */}
        <div className="px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Receta de Mejoras</h2>
            <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">10 Cartas</span>
          </div>
          
          <div className="space-y-6">
            {swaps.map((swap, i) => (
              <CardSwapCard 
                key={i} 
                cut={swap.cut} 
                add={swap.add} 
              />
            ))}
          </div>
        </div>
      </main>

      <CheckoutFooter totalPrice={totalUpgradePrice.toFixed(2)} />
    </div>
  );
}