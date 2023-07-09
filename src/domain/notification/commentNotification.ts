import { Notification } from "@/domain/notification/notification";
import { LocalDateTime } from "js-joda";

export class CommentNotification extends Notification {
  constructor(
    public readonly id: number | null,
    public readonly userId: number,
    public readonly postId: number,
    public readonly commentWriterId: number,
    public readonly commentId: number,
    public readonly createdAt: LocalDateTime,
    public readAt: LocalDateTime | null
  ) {
    super(id, userId, createdAt, readAt);
    this.postId = postId;
    this.commentWriterId = commentWriterId;
    this.commentId = commentId;
  }
}
