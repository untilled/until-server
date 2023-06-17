import { Controller, Get, Inject, Query } from "@nestjs/common";
import { FeedUsecase } from "@/feed/application/usecases/FeedUsecase";

interface PostDTO {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  tags: string[];
  date: string;
  stars: number;
  comment: number;
  user: {
    id: string;
    name: string;
    image: string;
  };
}

@Controller("feed")
export class FeedController {
  constructor(
    @Inject("FeedUsecase") private readonly feedUsecase: FeedUsecase
  ) {}

  @Get("/popular")
  async getPopularPosts(@Query("tags") tags?: string[]): Promise<PostDTO[]> {
    return await this.feedUsecase.getPopularPosts(tags ?? []);
  }

  @Get("/follower")
  async getFollowerPosts(@Query("tags") tags?: string[]): Promise<PostDTO[]> {
    return await this.feedUsecase.getFollowerPosts(tags ?? []);
  }
}
