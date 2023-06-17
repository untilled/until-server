import { Module } from "@nestjs/common";
import { FeedController } from "@/feed/adapter/in/http_request/FeedController";
import { FeedInputPort } from "@/feed/application/port/in/FeedInputPort";
import { FeedPrismaRepository } from "@/feed/adapter/out/db/prisma/FeedPrismaRepository";
import { PrismaService } from "@/infra/prisma/PrismaService";

@Module({
  providers: [
    {
      provide: "FeedUsecase",
      useClass: FeedInputPort,
    },
    {
      provide: "FeedOutputPort",
      useClass: FeedPrismaRepository,
    },
    PrismaService,
  ],
  controllers: [FeedController],
})
export class FeedModule {}
