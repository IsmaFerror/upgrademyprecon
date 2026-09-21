import { ScryfallCardData } from './types';

export async function getCardByName(name: string): Promise<ScryfallCardData | null> {
  try {
    const url = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`;
    
    // Añadimos el User-Agent para que Scryfall no nos detecte como un bot malicioso
    const response = await fetch(url, { 
      headers: {
        'User-Agent': 'UpgradeMyPrecon/1.0',
        'Accept': 'application/json'
      },
      next: { revalidate: 86400 } // Caché de 24 horas activa
    });

    if (!response.ok) {
      console.error(`[Scryfall API] Error buscando "${name}": ${response.status}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`[Scryfall API] Fallo crítico con "${name}":`, error);
    return null;
  }
}