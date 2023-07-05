import { ActivityType } from "@/domain/activity/activityType";
import { LocalDateTime } from "js-joda";

export class Activity {
  constructor(
    public readonly id: number,
    public readonly userId: number,
    public readonly activityType: ActivityType,
    public readonly activityTime: LocalDateTime
  ) {}
}
