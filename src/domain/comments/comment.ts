import { User } from "@/domain/users/user";
import { Post } from "@/domain/posts/post";

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
  ) {}
}
