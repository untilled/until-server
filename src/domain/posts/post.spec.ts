import { LoginInfo, Profile, User, UserRole } from "@/domain/users";
import { Post, PostStatus, Comment } from "@/domain/posts";
import { LocalDateTime } from "js-joda";

describe("Post", () => {
  describe("removeComment 함수로 댓글을 삭제할 수 있다", () => {
    const comment: Comment = new Comment(
      1,
      1,
      1,
      null,
      "댓글",
      LocalDateTime.now(),
      LocalDateTime.now()
    );

    const post: Post = new Post(
      1,
      "제목",
      "내용",
      null,
      PostStatus.PUBLIC,
      "urlSlug",
      [],
      1,
      0,
      0,
      [comment],
      LocalDateTime.now(),
      LocalDateTime.now()
    );

    it("댓글을 작성한 사용자는 댓글을 삭제할 수 있다", async () => {
      // given
      const remover: User = new User(
        1,
        await LoginInfo.of("remover@test.com", "password", {
          encode: async (p) => p,
        }),
        new Profile(
          "profileName",
          "blogName",
          null,
          null,
          "bio",
          null,
          null,
          null,
          null
        ),
        UserRole.NORMAL,
        [],
        [],
        [],
        LocalDateTime.now(),
        null
      );

      // when
      post.removeComment(remover, comment);

      // then
      expect(post.comments).not.toContain(1);
    });

    it("관리자는 댓글을 삭제할 수 있다", async () => {
      // given
      const remover: User = new User(
        1,
        await LoginInfo.of("remover@test.com", "password", {
          encode: async (p) => p,
        }),
        new Profile(
          "profileName",
          "blogName",
          null,
          null,
          "bio",
          null,
          null,
          null,
          null
        ),
        UserRole.ADMIN,
        [],
        [],
        [],
        LocalDateTime.now(),
        null
      );

      // when
      post.removeComment(remover, comment);

      // then
      expect(post.comments).not.toContain(1);
    });

    it("댓글을 작성한 사용자나 관리자가 아니면 오류를 발생한다", async () => {
      // given
      const notWriterId = post.authorId + 1;
      const remover: User = new User(
        notWriterId,
        await LoginInfo.of("remover@test.com", "password", {
          encode: async (p) => p,
        }),
        new Profile(
          "profileName",
          "blogName",
          null,
          null,
          "bio",
          null,
          null,
          null,
          null
        ),
        UserRole.NORMAL,
        [],
        [],
        [],
        LocalDateTime.now(),
        null
      );

      // then
      expect(() => post.removeComment(remover, comment)).toThrowError();
    });
  });

  describe("update 함수로 글의 정보를 수정할 수 있다", () => {
    const post: Post = new Post(
      1,
      "제목",
      "내용",
      null,
      PostStatus.PUBLIC,
      "urlSlug",
      [],
      1,
      0,
      0,
      [],
      LocalDateTime.now(),
      LocalDateTime.now()
    );

    it("하나 이상의 정보를 수정할 수 있다", () => {
      // given
      const newTitle = "수정된 제목";
      const newBody = "수정된 내용";
      const newThumbnail = "수정된 썸네일";

      // when
      post.update({
        title: newTitle,
        body: newBody,
        thumbnail: newThumbnail,
      });

      // then
      expect(post.title).toBe(newTitle);
      expect(post.body).toBe(newBody);
      expect(post.thumbnail).toBe(newThumbnail);
    });

    it("수정된 정보가 없으면 기존 정보를 유지한다", () => {
      // given
      const oldTitle = post.title;
      const oldBody = post.body;
      const oldThumbnail = post.thumbnail;

      // when
      post.update({});

      // then
      expect(post.title).toBe(oldTitle);
      expect(post.body).toBe(oldBody);
      expect(post.thumbnail).toBe(oldThumbnail);
    });

    it("updatedAt이 갱신된다", () => {
      // given
      const oldUpdatedAt = post.updatedAt;

      // when
      post.update({});

      // then
      expect(post.updatedAt).not.toBe(oldUpdatedAt);
    });
  });
});
