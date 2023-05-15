import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "@/users/domain/repository/user.repository";
import { User } from "@/users/domain/user";

@Injectable()
export class UsersService {
  constructor(@Inject('UserRepository') private readonly userRepository: UserRepository){}

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
