import { Notification } from "@/domain/notification/notification";
import { LocalDateTime } from "js-joda";

export class FollowNotification extends Notification {
  constructor(
    public readonly id: number | null,
    public readonly userId: number,
    public readonly followerId: number,
    public readonly createdAt: LocalDateTime,
    public readAt: LocalDateTime | null
  ) {
    super(id, userId, createdAt, readAt);
    this.followerId = followerId;
  }
}
