import { PartialType } from '@nestjs/mapped-types';
import { CreateOrgDto } from './createOrg.dto';

export class UpdateOrgDto extends PartialType(CreateOrgDto) {}
