import { User } from "@/domain/users/user";
import { Post } from "@/domain/posts";

export interface FeedOutputPort {
  getPopularPosts(): Promise<Post[]>;
  getFollowerPosts(userId: number): Promise<Post[]>;

  makeTestData(): Promise<void>;

  getUserRanking(): Promise<User[]>;
}
