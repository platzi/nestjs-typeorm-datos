import { Injectable } from '@nestjs/common';

import { UserRepository } from '../../database/entities/users/user.repository';

@Injectable()
export class UsersServiceA {
  constructor(private userRepo: UserRepository) {}

  getAll() {
    return this.userRepo.find();
  }
}
