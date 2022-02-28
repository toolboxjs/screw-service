import { hash, compareSync } from 'bcrypt';

export class Bcrypt {
  static async hash(password: string): Promise<string> {
    return await hash(password, 10);
  }

  static async compare(data: string, encrypted: string): Promise<boolean> {
    return await compareSync(data, encrypted);
  }
}
