import { assert } from "@/util/assert";
import { isNotEmptyString } from "@/util/validation";

export class Profile {
  constructor(
    public readonly profileName: string,
    public readonly blogName: string,
    public readonly backgroundImgUrl: string | null,
    public readonly profileImgUrl: string | null,
    public readonly shortBio: string,
    public readonly github: string | null,
    public readonly twitter: string | null,
    public readonly facebook: string | null,
    public readonly homepage: string | null
  ) {
    assert(isNotEmptyString(this.profileName), "프로필 이름은 필수입니다.");
    assert(isNotEmptyString(this.blogName), "블로그 이름은 필수입니다.");
  }
}
