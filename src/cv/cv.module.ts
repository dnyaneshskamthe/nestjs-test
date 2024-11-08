import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CvService } from './cv.service';
import { CvController } from './cv.controller';
import { CV, CVSchema } from './schemas/cv.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CV.name, schema: CVSchema }]), // Importing CV schema here
  ],
  controllers: [CvController],
  providers: [CvService],
})
export class CvModule {}
