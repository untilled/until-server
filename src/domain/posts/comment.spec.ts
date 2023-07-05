import { Comment } from "@/domain/posts/comment";
import { LocalDateTime } from "js-joda";

describe("Comment를 생성할 때", () => {
  it("댓글 내용이 빈 문자열일 경우 오류를 발생시킨다", () => {
    // given
    const EMPTY_TEXT = "";

    // then
    expect(
      () =>
        new Comment(
          1,
          1,
          1,
          null,
          EMPTY_TEXT,
          LocalDateTime.now(),
          LocalDateTime.now()
        )
    ).toThrowError();
  });
});

test("equals 메소드로 같은 댓글을 판별할 수 있다", () => {
  const comment1 = new Comment(
    1,
    1,
    1,
    null,
    "abc",
    LocalDateTime.now(),
    LocalDateTime.now()
  );

  const comment2 = new Comment(
    1,
    1,
    1,
    null,
    "abc",
    LocalDateTime.now(),
    LocalDateTime.now()
  );

  const comment3 = new Comment(
    2,
    1,
    1,
    null,
    "abc",
    LocalDateTime.now(),
    LocalDateTime.now()
  );

  expect(comment1.equals(comment2)).toBe(true);
  expect(comment1.equals(comment3)).toBe(false);
});
