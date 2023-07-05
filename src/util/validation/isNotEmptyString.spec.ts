import { isNotEmptyString } from "@/util/validation";

describe("isNotEmptyString", () => {
  it.each([
    ["abc", true],
    ["1", true],
    ["", false],
  ])(`"%s"는 isNotEmptyString을 한 결과가 %s다.`, (str, result) => {
    expect(isNotEmptyString(str)).toBe(result);
  });
});
