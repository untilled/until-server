export interface FeedOutputPort {
  getPopularPosts(tags: string[]): Promise<any[]>;
  getFollowerPosts(tags: string[]): Promise<any[]>;
}
