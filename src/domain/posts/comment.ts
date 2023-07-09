import { LocalDateTime } from "js-joda";
import { assert } from "@/util/assert";
import { isNotEmptyString } from "@/util/validation";

export class Comment {
  constructor(
    public readonly id: number | null,
    public readonly authorId: number,
    public readonly postId: number,
    public readonly replyTo: number | null,
    public text: string,
    public readonly createdAt: LocalDateTime,
    public updatedAt: LocalDateTime
  ) {
    this.checkValid(text);
  }

  private checkValid(text: string) {
    assert(isNotEmptyString(text), "댓글은 1글자 이상이어야 합니다.");
  }

  public equals(other: Comment): boolean {
    return this.id !== null && this.id === other.id;
  }

  public updateComment(
    text: string,
    updatedAt: LocalDateTime = LocalDateTime.now()
  ) {
    this.checkValid(text);
    this.text = text;
    this.updatedAt = updatedAt;
  }
}
