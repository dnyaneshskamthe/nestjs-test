import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreateCvDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  skills?: string[];

  @IsArray()
  @IsOptional()
  experience?: string[];

  userId?: string;
}
