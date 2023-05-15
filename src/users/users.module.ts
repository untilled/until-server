import { ClassProvider, Module } from "@nestjs/common";
import { UserPrismaRepository } from "@/users/infra/out/db/prisma/repository/UserPrismaRepository";
import { UsersController } from './infra/in/web/users.controller';
import { UsersService } from './users.service';
import { PrismaService } from "@/users/infra/out/db/prisma/client/prisma.service";

const userRepository: ClassProvider = {
  provide: 'UserRepository',
  useClass: UserPrismaRepository
}

@Module({
  providers: [
    UsersService,
    userRepository,
    PrismaService,
  ],
  controllers: [UsersController]
})
export class UsersModule {}
