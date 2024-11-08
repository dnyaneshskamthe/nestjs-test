import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CvModule } from './cv/cv.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/cv-builder`),
    AuthModule,
    CvModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
