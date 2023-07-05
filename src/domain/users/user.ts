import { Profile } from "@/domain/users/profile";
import { LoginInfo } from "@/domain/users/loginInfo";
import { LocalDateTime } from "js-joda";
import { UserRole } from "@/domain/users/userRole";
import { Post } from "@/domain/posts";
import { assert } from "@/util/assert";
import { PasswordEncoder } from "@/domain/users/passwordEncoder";

export class User {
  constructor(
    public readonly id: number | null,
    public loginInfo: LoginInfo,
    public profile: Profile,
    public userRole: UserRole,
    public readonly writtenPosts: number[],
    public readonly starredPost: number[],
    public readonly followers: number[],

    public readonly joinedAt: LocalDateTime,
    public resignedAt: LocalDateTime | null
  ) {}

  public equals(other: User): boolean {
    return this.id !== null && this.id === other.id;
  }

  public static join(
    id: number | null,
    loginInfo: LoginInfo,
    profile: Profile,
    userRole: UserRole,
    joinDate: LocalDateTime = LocalDateTime.now()
  ): User {
    return new User(
      id,
      loginInfo,
      profile,
      userRole,
      [],
      [],
      [],
      joinDate,
      null
    );
  }

  public isAdmin(): boolean {
    return this.userRole === UserRole.ADMIN;
  }

  public async changeLoginInfo(
    email: string,
    password: string,
    passwordEncode: PasswordEncoder
  ): Promise<void> {
    this.loginInfo = await LoginInfo.of(email, password, passwordEncode);
  }

  public changeProfile(profile: Profile): void {
    this.profile = profile;
  }

  public writePost(post: Post): void {
    assert(post.id !== null, "작성할 게시글이 존재해야 합니다.");
    this.writtenPosts.push(post.id);
  }

  public starPost(post: Post): void {
    assert(post.id !== null, "스타 할 게시글이 존재해야 합니다.");
    assert(post.authorId !== this.id, "본인의 글은 스타할 수 없습니다.");
    this.starredPost.push(post.id);
  }

  public isAbleToResignUser(user: User): boolean {
    return this.isAdmin() || this.id === user.id;
  }
}
