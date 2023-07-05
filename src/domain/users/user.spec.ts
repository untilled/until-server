import { User, LoginInfo, Profile, UserRole } from "@/domain/users";

test.each([
  [1, 1, true],
  [1, 2, false],
  [null, null, false],
  [null, 1, false],
])(
  "User의 equals는 id가 같으면 같은 유저로 판단한다",
  async (id1, id2, result) => {
    // given
    const user1: User = User.join(
      id1,
      await LoginInfo.of("test@test.com", "test1234", {
        encode: () => Promise.resolve("encodedPassword"),
      }),
      new Profile(
        "profileName",
        "blogName",
        null,
        null,
        "",
        null,
        null,
        null,
        null
      ),
      UserRole.NORMAL
    );

    const user2: User = User.join(
      id2,
      await LoginInfo.of("test@test.com", "test1234", {
        encode: () => Promise.resolve("encodedPassword"),
      }),
      new Profile(
        "profileName",
        "blogName",
        null,
        null,
        "",
        null,
        null,
        null,
        null
      ),
      UserRole.NORMAL
    );

    // then
    expect(user1.equals(user2)).toBe(result);
  }
);

test("User.join으로 회원가입할 user 객체를 생성할 수 있다", async () => {
  const id = null;
  const loginInfo = await LoginInfo.of("test@test.com", "test1234", {
    encode: () => Promise.resolve("encodedPassword"),
  });
  const profile = new Profile(
    "profileName",
    "blogName",
    null,
    null,
    "",
    null,
    null,
    null,
    null
  );

  // when
  const user = User.join(id, loginInfo, profile, UserRole.NORMAL);

  // then
  expect(user.id).toBe(id);
  expect(user.loginInfo).toBe(loginInfo);
  expect(user.profile).toBe(profile);
});
