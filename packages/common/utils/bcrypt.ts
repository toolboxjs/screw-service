import { hash } from 'bcrypt';

export class Bcrypt {
  static async hash(password: string): Promise<string> {
    return await hash(password, 10);
  }
}
