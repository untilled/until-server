import { Post } from "@/posts/domain/post";
import { User } from "@/users/domain/user";

export interface PostRepository {
  findById(id: string): Promise<Post | null>;
  findAll(): Promise<Post[]>;
  save(post: Post): Promise<void>;
  delete(post: Post): Promise<void>;

  findAllByAuthorId(authorId: User["id"]): Promise<Post[]>;
  findAllByTitle(title: string): Promise<Post[]>;
}
