import { PasswordEncoder } from "@/domain/users/passwordEncoder";
import { hash } from "bcrypt";

export class BcryptPasswordEncoder implements PasswordEncoder {
  public async encode(password: string): Promise<string> {
    return await hash(password, 10);
  }
}
