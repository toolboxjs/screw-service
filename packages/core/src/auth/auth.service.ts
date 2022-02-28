import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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
    const user = await this.userService.findOne(data);
    if (!user) throw new UnauthorizedException();
    return this.jwtService.sign({ id: user.id });
  }

  async register(data: RegisterDto): Promise<void> {
    await this.userService.create(data);
    return;
  }
}
