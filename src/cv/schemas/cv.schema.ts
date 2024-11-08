import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class CV extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop([String])
  skills: string[];

  @Prop([String])
  experience: string[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId; // This stores the ObjectId of the related user
}

export const CVSchema = SchemaFactory.createForClass(CV);
