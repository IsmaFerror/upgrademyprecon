export type BudgetLevel = "budget" | "premium";

export interface UpgradeTier {
  add: string[];
  remove: string[];
}

export interface DeckUpgrades {
  budget?: UpgradeTier;
  premium?: UpgradeTier;
}

export interface Deck {
  id: string;
  name: string;
  image: string;
  commander: string;
  upgrades: DeckUpgrades;
}

export interface ScryfallCardData {
  id: string;
  name: string;
  image_uris?: {
    normal: string;
    large: string;
  };
  card_faces?: {
    image_uris?: {
      normal: string;
      large: string;
    };
  }[];
  prices: {
    usd: string | null;
    eur: string | null;
  };
}

// Tipo que usaremos para pasar la información al componente visual de la carta
export interface CardAction {
  name: string;
  action: "add" | "remove";
}