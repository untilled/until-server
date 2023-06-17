import { FeedUsecase } from "@/feed/application/usecases/FeedUsecase";
import { FeedOutputPort } from "@/feed/application/port/out/FeedOutputPort";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class FeedInputPort implements FeedUsecase {
  constructor(
    @Inject("FeedOutputPort") private readonly feedOutputPort: FeedOutputPort
  ) {}

  async getFollowerPosts(tags: string[]): Promise<any[]> {
    return this.feedOutputPort.getFollowerPosts(tags);
  }

  async getPopularPosts(tags: string[]): Promise<any[]> {
    return this.feedOutputPort.getPopularPosts(tags);
  }
}
