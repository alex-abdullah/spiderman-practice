import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Spiderman } from './spiderman';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const spidermen = [
      { id: 12, name: 'Spider-Man 2099' },
      { id: 13, name: 'The Superior Spider' },
      { id: 14, name: 'Miles Morales' },
      { id: 15, name: 'Spider-Gwen' },
      { id: 16, name: 'Ultimate Spider-Man' },
      { id: 17, name: 'Peter Parker' },
      { id: 18, name: 'The Symbiote Suit' },
      { id: 19, name: 'The Amazing Bag Man' },
      { id: 20, name: 'Spider-Punk' },
    ];
    return { spidermen };
  }

  genId(spidermen: Spiderman[]): number {
    return spidermen.length
      ? Math.max(...spidermen.map((spiderman) => spiderman.id)) + 1
      : 11;
  }

  constructor() {}
}
