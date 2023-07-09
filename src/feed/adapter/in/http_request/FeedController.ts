import { Controller, Get, Inject } from "@nestjs/common";
import { FeedUsecase } from "@/feed/application/usecases/FeedUsecase";

interface PostDTO {
  id: string;
  title: string;
  thumbnail: string | null;
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
  async getPopularPosts(): Promise<PostDTO[]> {
    return await this.feedUsecase.getPopularPosts();
  }

  @Get("/follower")
  async getFollowerPosts(): Promise<PostDTO[]> {
    return await this.feedUsecase.getFollowerPosts();
  }

  @Get("/ranking")
  async getUserRanking(): Promise<any> {
    return await this.feedUsecase.getUserRanking();
  }

  @Get("/test")
  async makeTestData(): Promise<void> {
    return this.feedUsecase.makeTestData();
  }
}
