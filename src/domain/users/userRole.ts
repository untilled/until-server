import { ClassEnum } from "class-enum";

export class UserRole extends ClassEnum<UserRole> {
  public static readonly ADMIN = new UserRole("ADMIN");
  public static readonly NORMAL = new UserRole("NORMAL");

  private constructor(value: string) {
    super(value);
  }
}
