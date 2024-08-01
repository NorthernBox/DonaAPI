import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDonationDto {
  @IsNumber()
  @IsOptional()
  amount?: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  donationType: string;

  @IsString()
  @IsNotEmpty()
  donationMethod: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  donationDate?: Date;

  @IsBoolean()
  @IsNotEmpty()
  internalControl: boolean;

  @IsString()
  @IsNotEmpty()
  purpose: string;

  @IsString()
  @IsOptional()
  donorId: string;

  @IsString()
  @IsOptional()
  organizationId: string;
}
