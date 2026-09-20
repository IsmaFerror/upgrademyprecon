import { ScryfallCardData } from "./types";

const SCRYFALL_API_BASE = "https://api.scryfall.com";

export async function getCardByName(name: string): Promise<ScryfallCardData | null> {
  try {
    // Extendemos el tipo nativo para que TS acepte la extensión de Next.js
    const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
      next: { revalidate: 86400 },
    };

    const response = await fetch(
      `${SCRYFALL_API_BASE}/cards/named?exact=${encodeURIComponent(name)}`,
      fetchOptions
    );

    if (!response.ok) {
      console.error(`[Scryfall API] Error buscando la carta "${name}":`, response.statusText);
      return null;
    }

    const data: ScryfallCardData = await response.json();
    return data;
  } catch (error) {
    console.error(`[Scryfall API] Fallo de red al buscar la carta "${name}":`, error);
    return null;
  }
}