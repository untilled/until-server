import { Users as UserEntity, Profile as ProfileEntity } from "@prisma/client";
import { User } from "@/users/domain/user";
import { Profile } from "@/users/domain/profile";

export function mapEntityToUser(
  user: UserEntity,
  profile: ProfileEntity
): User {
  return new User(
    user.id,
    user.email,
    new Profile(
      user.id,
      profile.profileName,
      profile.blogName,
      profile.backgroundImgUrl,
      profile.profileImgUrl,
      profile.shortBio,
      profile.github,
      profile.twitter,
      profile.facebook,
      profile.homepage
    ),
    user.isCertified,
    user.createdAt,
    user.updatedAt
  );
}

export function mapUserToEntity(user: User): [UserEntity, ProfileEntity] {
  const userEntity: UserEntity = {
    id: user.id,
    email: user.email,
    isCertified: user.isCertified,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  const profileEntity: ProfileEntity = user.profile;

  return [userEntity, profileEntity];
}
