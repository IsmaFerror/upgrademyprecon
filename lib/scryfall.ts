export interface ScryfallCardData {
  name: string;
  image_url: string;
  price_usd: string | null;
  price_eur: string | null;
}

export async function fetchCardsData(cardNames: string[]): Promise<Record<string, ScryfallCardData>> {
  // 1. Filtramos por seguridad para que no haya nombres vacíos que enfaden a Scryfall
  const validNames = cardNames.filter(name => name && name.trim() !== '');
  if (validNames.length === 0) return {};

  const identifiers = validNames.map(name => ({ name }));

  try {
    const response = await fetch('https://api.scryfall.com/cards/collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 2. Scryfall exige identificarse para no considerar la petición como "spam"
        'User-Agent': 'UpgradeMyPreconApp/1.0'
      },
      body: JSON.stringify({ identifiers }),
      next: { revalidate: 86400 } 
    });

    if (!response.ok) {
      // 3. Si falla, extraemos el motivo exacto para saber por qué
      const errorData = await response.json().catch(() => ({}));
      console.error("Motivo del rechazo de Scryfall:", errorData);
      throw new Error(`Scryfall devolvió ${response.status}: ${errorData.details || 'Revisa la consola'}`);
    }

    const data = await response.json();
    const cardsRecord: Record<string, ScryfallCardData> = {};

    data.data.forEach((card: any) => {
      cardsRecord[card.name] = {
        name: card.name,
        image_url: card.image_uris?.art_crop || card.image_uris?.normal || '',
        price_usd: card.prices?.usd || "0.00",
        price_eur: card.prices?.eur || "0.00",
      };
    });

    return cardsRecord;
  } catch (error) {
    console.error("Error al obtener cartas de Scryfall:", error);
    return {};
  }
}