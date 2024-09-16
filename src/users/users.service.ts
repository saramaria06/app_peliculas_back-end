// src/users/users.service.ts
// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  private users = [];

  async create(user) {
    // Hashea la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = { ...user, password: hashedPassword };
    this.users.push(newUser);
    return newUser;
  }

  findOneByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }

  findAll() {
    return this.users;
  }

  // Otros métodos de gestión de usuarios...
}
