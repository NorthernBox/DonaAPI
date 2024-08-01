import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsEmail,
} from 'class-validator';

export class CreateRecipientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsBoolean()
  @IsOptional()
  childrenHome: boolean;

  @IsString()
  @IsOptional()
  dependants: string;

  @IsString()
  @IsOptional()
  dependantsAgeRange: string;

  @IsBoolean()
  @IsOptional()
  specialNeeds: boolean;
}
