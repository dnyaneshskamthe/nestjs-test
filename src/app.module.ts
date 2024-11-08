import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CvModule } from './cv/cv.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/cv-builder`),
    AuthModule,
    CvModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
