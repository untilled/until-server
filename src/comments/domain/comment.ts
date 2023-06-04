import { User } from "@/users/domain/user";
import { Post } from "@/posts/domain/post";

export class Comment {
  constructor(
    public readonly id: string,
    public readonly postId: Post["id"],
    public readonly replyTo: Comment["id"] | null,
    public text: string,
    public readonly authorId: User["id"],
    public likes: string[],
    public readonly createdAt: Date,
    public updatedAt: Date | null
  ) {
  }
}