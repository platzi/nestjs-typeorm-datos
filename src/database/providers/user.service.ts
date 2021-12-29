import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserRepository } from '../../database/entities/users/user.repository';

@Injectable()
export class UsersServiceA {
  // constructor(
  //   // @InjectRepository(UserRepository) private userRepo: UserRepository,
  // ) {}

  getAll() {
    // return this.userRepo.find();
  }
}
