import fs from 'fs';
import path from 'path';
import { Deck } from './types';

const decksDirectory = path.join(process.cwd(), 'data/decks');

export function getAllDecks(): Deck[] {
  try {
    if (!fs.existsSync(decksDirectory)) {
      return [];
    }
    const filenames = fs.readdirSync(decksDirectory);
    const decks = filenames
      .filter((filename) => filename.endsWith('.json'))
      .map((filename) => {
        const filePath = path.join(decksDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents) as Deck;
      });
    return decks;
  } catch (error) {
    console.error('[DataLoader] Error al cargar los mazos:', error);
    return [];
  }
}

export function getDeckById(id: string): Deck | null {
  try {
    const decodedId = decodeURIComponent(id).trim().toLowerCase();
    const filenames = fs.readdirSync(decksDirectory);

    // Buscamos el archivo ignorando mayúsculas/minúsculas o pequeñas diferencias de formato
    const matchedFilename = filenames.find((filename) => {
      const fileId = filename.replace('.json', '').toLowerCase();
      return fileId === decodedId;
    });

    if (!matchedFilename) {
      return null;
    }

    const filePath = path.join(decksDirectory, matchedFilename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as Deck;
  } catch (error) {
    console.error(`[DataLoader] Error al buscar el mazo con id "${id}":`, error);
    return null;
  }
}