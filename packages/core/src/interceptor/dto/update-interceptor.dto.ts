import { IsOptional, IsString } from 'class-validator';

export class UpdateInterceptorDto {
  @IsOptional()
  @IsString()
  readonly request?: string;

  @IsOptional()
  @IsString()
  readonly response_on_fullfilled?: string;

  @IsOptional()
  @IsString()
  readonly response_on_rejected?: string;
}
