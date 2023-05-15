export class User {
  private id: string;
  private email: string | null;
  private isCertified: boolean;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(id: string, email: string | null, isCertified: boolean, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.email = email;
    this.isCertified = isCertified;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}