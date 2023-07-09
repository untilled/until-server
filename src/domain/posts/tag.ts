import { assert } from "@/util/assert";
import { isNotEmptyString } from "@/util/validation";

export class Tag {
  constructor(public readonly name: string) {
    assert(isNotEmptyString(name), "태그 이름은 빈 문자열이 될 수 없습니다.");
  }

  public equals(other: Tag): boolean {
    return this.name === other.name;
  }
}
