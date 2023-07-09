import { Post } from "@/domain/posts/post";

export interface PostRepository {
  findById(id: number): Promise<Post | null>;
  findByUserId(userId: number): Promise<Post[]>;
  findAllByTag(tag: string): Promise<Post[]>;
}
