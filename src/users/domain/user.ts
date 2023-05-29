import { Profile } from "@/users/domain/profile";

export class User {
  constructor(
    public readonly id: string,
    public email: string,
    public profile: Profile,
    public isCertified: boolean,
    public readonly createdAt: Date,
    public updatedAt: Date | null
  ) {}

  public changeProfile({
    profileName = this.profile.profileName,
    blogName = this.profile.blogName,
    backgroundImgUrl = this.profile.backgroundImgUrl,
    profileImgUrl = this.profile.profileImgUrl,
    shortBio = this.profile.shortBio,
    github = this.profile.github,
    twitter = this.profile.twitter,
    facebook = this.profile.facebook,
    homepage = this.profile.homepage,
  }: Partial<Profile>): void {
    this.profile = new Profile(
      this.id,
      profileName,
      blogName,
      backgroundImgUrl,
      profileImgUrl,
      shortBio,
      github,
      twitter,
      facebook,
      homepage
    );
  }
}
