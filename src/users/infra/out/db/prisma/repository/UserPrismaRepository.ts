import { UserRepository } from "@/users/domain/repository/user.repository";
import { User } from "@/users/domain/user";
import { PrismaService } from "@/users/infra/out/db/prisma/client/prisma.service";
import {
  mapEntityToUser,
  mapUserToEntity,
} from "@/users/infra/out/db/prisma/mapper/user.mapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findUserById(id: string): Promise<User | null> {
    const userEntity = await this.prisma.users.findUnique({ where: { id } });
    const profileEntity = await this.prisma.profile.findUnique({
      where: { userId: id },
    });

    if (userEntity === null || profileEntity === null) {
      return null;
    }

    return mapEntityToUser(userEntity, profileEntity);
  }

  async findAll(): Promise<User[]> {
    // TODO: fxts를 이용해서 함수형으로 고칠 예정
    const [userEntityList, profileEntityList] = await Promise.all([
      this.prisma.users.findMany(),
      this.prisma.profile.findMany(),
    ]);

    return userEntityList.map((userEntity) => {
      const profileEntity = profileEntityList.find(
        (profileEntity) => profileEntity.userId === userEntity.id
      );

      if (profileEntity === undefined) {
        throw new Error("profileEntity is undefined");
      }

      return mapEntityToUser(userEntity, profileEntity);
    });
  }

  async save(user: User) {
    const [userEntity, profileEntity] = mapUserToEntity(user);

    await Promise.all([
      this.prisma.users.upsert({
        where: { id: user.id },
        update: userEntity,
        create: userEntity,
      }),

      this.prisma.profile.upsert({
        where: { userId: user.id },
        update: profileEntity,
        create: profileEntity,
      }),
    ]);
  }
}
