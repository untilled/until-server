import { PrismaClient } from "@prisma/client";
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async findUserById(id: string) {
    return this.users.findUnique({ where: { id } });
  }

  async findAll() {
    return this.users.findMany();
  }
}