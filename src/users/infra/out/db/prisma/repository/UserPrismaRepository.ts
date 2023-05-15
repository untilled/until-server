import { UserRepository } from "@/users/domain/repository/user.repository";
import { User } from "@/users/domain/user";
import { PrismaService } from "@/users/infra/out/db/prisma/client/prisma.service";
import { mapUserEntityToUser } from "@/users/infra/out/db/prisma/mapper/user.mapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findUserById(id: string): Promise<User | null> {
    const userEntity = await this.prisma.findUserById(id);

    if(userEntity === null) {
      return null;
    }

    return mapUserEntityToUser(userEntity);
  }

  async findAll(): Promise<User[]> {
    // TODO: fxts를 이용해서 함수형으로 고칠 예정
    const userEntityList = await this.prisma.findAll()

    return userEntityList.map(mapUserEntityToUser);
  }
}