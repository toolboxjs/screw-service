import { RequestMethod } from '@screw/common/enums/request-method.enum';
import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString
} from 'class-validator';
import { RequestParamRow } from '../request.interface';

export class UpdateRequestDto {
  @IsOptional()
  @IsString()
  name_en?: string;

  @IsOptional()
  @IsString()
  name_zh?: string;

  @IsEnum(RequestMethod)
  @IsNotEmpty()
  method?: RequestMethod;

  @IsString()
  @IsNotEmpty()
  path?: string;

  @IsOptional()
  @IsObject()
  headers?: Record<string, string>;

  @IsOptional()
  @IsObject()
  body?: RequestParamRow;

  @IsOptional()
  @IsObject()
  response?: RequestParamRow;
}
