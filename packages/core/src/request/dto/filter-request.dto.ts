import { IsEnum, IsOptional, IsString } from 'class-validator';
import { RequestMethod } from '@screw/common/enums/request-method.enum';

export class FilterRequestDto {
  @IsOptional()
  @IsString()
  name_en?: string;

  @IsOptional()
  @IsString()
  name_zh?: string;

  @IsOptional()
  @IsEnum(RequestMethod)
  method?: RequestMethod;

  @IsOptional()
  @IsString()
  path?: string;
}
