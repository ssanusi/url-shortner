import { IsString } from 'class-validator';

export class CreateUrlDto {
  @IsString()
  longUrl: string;
}
