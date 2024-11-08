import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CV extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  skills: string[];

  @Prop()
  experience: string[];
}

export const CVSchema = SchemaFactory.createForClass(CV);
