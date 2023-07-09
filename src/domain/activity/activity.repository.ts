import { Activity } from "@/domain/activity/activity";

export interface ActivityRepository {
  findAllByUserId(userId: number): Promise<Activity[]>;
  getContinuousDays(userId: number): Promise<number>;
}
