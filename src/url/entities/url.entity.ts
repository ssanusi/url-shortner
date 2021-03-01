import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { nanoid } from 'nanoid/non-secure';
import { Exclude } from 'class-transformer';

@Schema()
export class Url extends Document {
  @Exclude()
  @Prop()
  longUrl: string;

  @Prop({ default: () => nanoid(6) })
  shortUrl: string;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
