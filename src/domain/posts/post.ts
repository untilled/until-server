import { Tag } from "@/domain/posts/tag";
import { PostStatus } from "@/domain/posts/postStatus";
import { LocalDateTime } from "js-joda";
import { User } from "@/domain/users/user";
import { Comment } from "@/domain/posts/comment";
import { assert } from "@/util/assert";

export class Post {
  constructor(
    public readonly id: number | null,
    public title: string,
    public body: string,
    public thumbnail: string | null,
    public status: PostStatus,
    public urlSlug: string,
    public tags: Tag[],
    public readonly authorId: number,
    public views: number,
    public likes: number,
    public comments: Comment[],
    public readonly createdAt: LocalDateTime,
    public updatedAt: LocalDateTime
  ) {
    assert(title.length > 0, "제목은 1글자 이상이어야 합니다.");
  }

  public writeComment(
    writer: User,
    commentId: number,
    content: string,
    replyTo: number | null,
    writeAt: LocalDateTime = LocalDateTime.now()
  ): void {
    assert(writer.id !== null, "댓글을 작성할 사용자가 존재해야 합니다.");
    assert(this.id !== null, "댓글을 작성할 게시글이 존재해야 합니다.");

    const comment = new Comment(
      commentId,
      writer.id,
      this.id,
      replyTo,
      content,
      writeAt,
      writeAt
    );

    this.comments = [...this.comments, comment];
  }

  public removeComment(remover: User, comment: Comment): void {
    assert(
      remover.isAdmin() || remover.id === comment.authorId,
      "댓글은 해당 댓글의 작성자나 관리자만 삭제할 수 있습니다."
    );

    this.comments = this.comments.filter((c) => c.equals(comment));
  }

  public update({
    title = this.title,
    body = this.body,
    thumbnail = this.thumbnail,
    status = this.status,
    urlSlug = this.urlSlug,
    tags = this.tags,
    updatedAt = LocalDateTime.now(),
  }: Partial<
    Pick<
      Post,
      | "title"
      | "body"
      | "thumbnail"
      | "status"
      | "urlSlug"
      | "tags"
      | "updatedAt"
    >
  >): void {
    this.title = title;
    this.body = body;
    this.thumbnail = thumbnail;
    this.status = status;
    this.urlSlug = urlSlug;
    this.tags = tags;
    this.updatedAt = updatedAt;
  }
}
