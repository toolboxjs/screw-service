import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Bcrypt } from '@screw/common/utils/bcrypt';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  async login(data: LoginDto): Promise<string> {
    const { id } = await this.validateUser(data.username, data.password);
    return this.jwtService.sign({ id });
  }

  async register(data: RegisterDto): Promise<void> {
    await this.userService.create(data);
    return;
  }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);
    if (!user) throw new UnauthorizedException();
    const validate = await Bcrypt.compare(password, user.password);
    if (!validate) throw new UnauthorizedException();
    const { password: p, ...res } = user;
    return res;
  }
}
