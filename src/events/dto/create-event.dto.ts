import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsDate,
  IsArray,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  theme: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  venue: string;

  @IsOptional()
  @IsString()
  link?: string;

  @IsString()
  @IsNotEmpty()
  deadLine: Date;

  @IsString()
  @IsNotEmpty()
  imgUrl: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  speakers?: string[];

  @IsString()
  @IsNotEmpty()
  targetAudience: string;

  @IsBoolean()
  @IsNotEmpty()
  entryFee: boolean;

  @IsOptional()
  @IsNumber()
  entryFeeAmount?: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  startDate: Date;

  @IsString()
  @IsNotEmpty()
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  organizationId: string;
}
