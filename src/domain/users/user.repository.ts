import { User } from "@/domain/users/user";

export interface UserRepository {
  findById(id: number): Promise<User | null>;
  findAllByIds(ids: number[]): Promise<User[]>;
  save(user: User): Promise<void>;
}
