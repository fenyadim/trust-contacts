import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsArray()
  tags?: string[];
}
