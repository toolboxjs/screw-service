import { IsNotEmpty } from 'class-validator';

export class CreateLocalStorageDto {
  @IsNotEmpty()
  readonly key: string;
}
