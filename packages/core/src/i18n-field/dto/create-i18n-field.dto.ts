import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateI18nFieldDto {
  @IsNotEmpty()
  @IsString()
  key: string;

  @IsOptional()
  @IsString()
  alias: string;

  @IsNotEmpty()
  @IsString()
  zh_cn: string;

  @IsNotEmpty()
  @IsString()
  en_us: string;
}
