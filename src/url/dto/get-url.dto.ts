import { IsString } from 'class-validator';

export class GetUrlParamDto {
  @IsString()
  shortUrl: string;
}
