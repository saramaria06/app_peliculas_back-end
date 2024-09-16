// src/favorites/favorites.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  addFavorite(@Body() body) {
    const { userId, movieId } = body;
    return this.favoritesService.addFavorite(userId, movieId);
  }

  @Get(':userId')
  getFavorites(@Param('userId') userId: number) {
    return this.favoritesService.getFavorites(userId);
  }
}
