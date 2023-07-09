import { isEmail } from "@/util/validation";

describe("isEmail", () => {
  it.each([
    ["", false],
    ["abc", false],
    ["abc@", false],
    ["abc@naver", false],
    ["abc@naver.", false],
    ["abc@naver.c", false],
    ["abc@naver.com", true],
  ])(`"%s"이 이메일 여부가 %s인지 확인한다`, (email, result) => {
    expect(isEmail(email)).toBe(result);
  });
});
