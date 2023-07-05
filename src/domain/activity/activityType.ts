import { ClassEnum } from "class-enum";

export class ActivityType extends ClassEnum<ActivityType> {
  public static readonly WRITE_POST = new ActivityType("WRITE_POST");
  public static readonly GITHUB_COMMIT = new ActivityType("GITHUB_COMMIT"); // 현재 미사용

  public constructor(public readonly value: string) {
    super(value);
  }
}
