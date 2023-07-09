import { FeedUsecase } from "@/feed/application/usecases/FeedUsecase";
import { FeedOutputPort } from "@/feed/application/port/out/FeedOutputPort";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class FeedInputPort implements FeedUsecase {
  constructor(
    @Inject("FeedOutputPort") private readonly feedOutputPort: FeedOutputPort
  ) {}

  async getFollowerPosts(): Promise<any[]> {
    return this.feedOutputPort.getFollowerPosts(1);
  }

  async getPopularPosts(): Promise<any[]> {
    return this.feedOutputPort.getPopularPosts();
  }

  async getUserRanking(): Promise<any> {
    return this.feedOutputPort.getUserRanking();
  }

  async makeTestData(): Promise<void> {
    return this.feedOutputPort.makeTestData();
  }
}
