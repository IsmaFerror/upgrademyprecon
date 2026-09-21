// Definimos exactamente los tramos de precio que has elegido
export type BudgetLevel = '5' | '10' | '20' | '30' | '40' | '50' | '60' | '80' | '100' | 'premium';

export interface UpgradeTier {
  add: string[];
  remove: string[];
}

export interface Deck {
  id: string;
  name: string;
  image: string;
  commander: string;
  // Partial permite que un mazo no tenga obligatoriamente todos los tramos creados
  upgrades: Partial<Record<BudgetLevel, UpgradeTier>>;
}

export interface ScryfallCardData {
  card_faces: any;
  name: string;
  image_uris?: {
    normal: string;
  };
  prices?: {
    usd: string | null;
    usd_foil: string | null;
    eur: string | null;
    eur_foil: string | null;
  };
}