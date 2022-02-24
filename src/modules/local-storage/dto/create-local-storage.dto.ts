import { IsNotEmpty } from 'class-validator';

export class CreateLocalStorageDto {
  @IsNotEmpty({ message: 'key is empty' })
  readonly key: string;
}
