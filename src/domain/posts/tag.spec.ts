import { Tag } from "@/domain/posts/tag";

describe("Tag", () => {
  it("태그를 생성할 수 있다", () => {
    // given
    const tagName = "태그";

    // when
    const tag = new Tag(tagName);

    // then
    expect(tag.name).toBe(tagName);
  });

  it("빈 문자열의 태그는 생성할 때 오류를 발생한다", () => {
    // given
    const EMPTY_STRING = "";

    // then
    expect(() => new Tag(EMPTY_STRING)).toThrow(Error);
  });
});
