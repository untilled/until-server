import { PasswordEncoder } from "@/domain/users/passwordEncoder";
import { assert } from "@/util/assert";
import { isEmail, isNotEmptyString } from "@/util/validation";

export class LoginInfo {
  private constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  public static async of(
    email: string,
    password: string,
    passwordEncode: PasswordEncoder
  ): Promise<LoginInfo> {
    assert(isEmail(email), "이메일 형식이 올바르지 않습니다.");
    assert(isNotEmptyString(password), "비밀번호 형식이 올바르지 않습니다.");

    const encodedPassword = await passwordEncode.encode(password);
    return new LoginInfo(email, encodedPassword);
  }
}
