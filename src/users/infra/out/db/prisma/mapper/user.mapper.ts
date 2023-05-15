import { Users } from "@prisma/client";
import { User } from "@/users/domain/user";

export function mapUserEntityToUser(user: Users): User {
  return new User(user.id, user.email, user.isCertified, user.createdAt, user.updatedAt);
}