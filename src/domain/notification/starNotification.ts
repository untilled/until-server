import { Notification } from "@/domain/notification/notification";
import { LocalDateTime } from "js-joda";

export class StarNotification extends Notification {
  constructor(
    public readonly id: number | null,
    public readonly userId: number,
    public readonly postId: number,
    public readonly starredUserId: number,
    public readonly createdAt: LocalDateTime,
    public readAt: LocalDateTime | null
  ) {
    super(id, userId, createdAt, readAt);
    this.postId = postId;
    this.starredUserId = starredUserId;
  }
}
