import { getCardByName } from './scryfall';

// Función auxiliar para forzar pausas
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function calculateUpgradeCost(cardNames: string[]): Promise<string> {
  if (!cardNames || cardNames.length === 0) return "0.00 €";

  let total = 0;

  try {
    // Procesamos las cartas una por una en lugar de todas a la vez
    for (const name of cardNames) {
      const card = await getCardByName(name);

      if (card?.prices) {
        const priceString = card.prices.eur || card.prices.usd || "0";
        const priceNumber = parseFloat(priceString);
        
        if (!isNaN(priceNumber)) {
          total += priceNumber;
        }
      }

      // Pausa obligatoria de 100ms para cumplir el límite de 10 peticiones/segundo de Scryfall
      await delay(100);
    }

    return `${total.toFixed(2)} €`;
  } catch (error) {
    console.error("[Price Calculator] Error al calcular el precio total:", error);
    return "0.00 €";
  }
}