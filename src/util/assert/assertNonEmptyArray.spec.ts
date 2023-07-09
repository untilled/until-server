import { assertNonEmptyArray } from "@/util/assert";

describe("assertNonEmptyArray", () => {
  it("최소 1개의 원소를 가진 배열이 들어오는 경우 오류를 발생시키지 않는다.", () => {
    const array = [1, 2, 3];

    expect(() => assertNonEmptyArray(array)).not.toThrowError(Error);
  });

  it("빈 배열이 들어오는 경우 오류를 발생시킨다.", () => {
    const array: Array<any> = [];
    expect(() => assertNonEmptyArray(array)).toThrowError(Error);
  });
});
