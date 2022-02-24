import { ErrorMessage } from '@/common/enums/error-message.enum';
import { IsNotEmpty } from 'class-validator';

export class CreateLocalStorageDto {
  @IsNotEmpty({ message: ErrorMessage.FIELD_IS_REQUIRED })
  readonly key: string;
}
