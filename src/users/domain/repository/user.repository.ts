import { User } from "@/users/domain/user";

export interface UserRepository {
  findUserById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  save(user: User): Promise<void>;
}
