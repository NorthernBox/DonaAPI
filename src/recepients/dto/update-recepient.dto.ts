import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipientDto } from './create-recepient.dto';

export class UpdateRecepientDto extends PartialType(CreateRecipientDto) {}
