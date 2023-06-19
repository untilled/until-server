export interface FeedUsecase {
  getPopularPosts(tags: string[]): Promise<any[]>;
  getFollowerPosts(tags: string[]): Promise<any[]>;
}
