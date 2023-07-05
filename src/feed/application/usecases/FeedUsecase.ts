export interface FeedUsecase {
  getPopularPosts(): Promise<any[]>;
  getFollowerPosts(): Promise<any[]>;
  getUserRanking(): Promise<any[]>;
  makeTestData(): Promise<void>;
}
