// src/app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [AuthModule, UsersModule, FavoritesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

