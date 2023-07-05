import { LocalDateTime } from "js-joda";

export abstract class Notification {
  protected constructor(
    public readonly id: number | null,
    public readonly userId: number,
    public readonly createdAt: LocalDateTime,
    public readAt: LocalDateTime | null
  ) {}

  public isRead(): boolean {
    return this.readAt !== null;
  }

  public read(readTime: LocalDateTime = LocalDateTime.now()): void {
    this.readAt = readTime;
  }
}
