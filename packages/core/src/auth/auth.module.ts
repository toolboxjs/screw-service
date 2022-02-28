import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@screw/common/entities/user.entity';
import { Jwt } from '@screw/common/enums/jwt.enum';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({ secret: Jwt.JWT_SECURITY_KEY })
  ],
  providers: [AuthService, UserService],
  controllers: [AuthController]
})
export class AuthModule {}
