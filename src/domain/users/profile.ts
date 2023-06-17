import { User } from "@/domain/users/user";

export class Profile {
  constructor(
    public readonly userId: User["id"],
    public readonly profileName: string,
    public readonly blogName: string,
    public readonly backgroundImgUrl: string | null,
    public readonly profileImgUrl: string | null,
    public readonly shortBio: string,
    public readonly github: string | null,
    public readonly twitter: string | null,
    public readonly facebook: string | null,
    public readonly homepage: string | null
  ) {}
}
