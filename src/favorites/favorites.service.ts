// src/favorites/favorites.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritesService {
  private favorites = [];

  addFavorite(userId: number, movieId: number) {
    this.favorites.push({ userId, movieId });
    return { userId, movieId };
  }

  getFavorites(userId: number) {
    return this.favorites.filter(fav => fav.userId === userId);
  }

  // Otros métodos de gestión de favoritos...
}


