import { ClassEnum } from "class-enum";

export class PostStatus extends ClassEnum<PostStatus> {
  public static readonly PRIVATE = new PostStatus("PRIVATE");
  public static readonly PUBLIC = new PostStatus("PUBLIC");

  constructor(public readonly value: string) {
    super(value);
  }
}
