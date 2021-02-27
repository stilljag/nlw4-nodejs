export class AppError {
  public readonly message: string;
  public readonly statusCode: Number;

  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
