import { User } from "@/domain/users/user";

export class Post {
  constructor(
    public readonly id: string,
    public title: string,
    public body: string,
    public thumbnail: string | null,
    public isPublished: boolean,
    public urlSlug: string,
    public tags: string[],
    public readonly authorId: User["id"],
    public views: number,
    public postScore: number,
    public likes: string[],
    public comments: string[],
    public readonly createdAt: Date,
    public updatedAt: Date | null
  ) {}

  public addComment(commentId: string): void {
    this.comments = [...this.comments, commentId];
  }
}
