import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RequestHeader } from '@screw/common/enums/request-header.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const { headers } = context.switchToHttp().getRequest();
    if (headers[RequestHeader.ACCESS_TOKEN]) return true;
    return false;
  }
}
