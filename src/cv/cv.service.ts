import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CV } from './schemas/cv.schema';

@Injectable()
export class CvService {
  async findOne(id: string): Promise<CV> {
    const cv = await this.cvModel.findById(id).exec();
    if (!cv) {
      throw new NotFoundException(`CV with ID ${id} not found`);
    }
    return cv;
  }
  constructor(@InjectModel(CV.name) private cvModel: Model<CV>) {}

  async createCV(cvData: Partial<CV>) {
    const cv = new this.cvModel(cvData);
    return await cv.save();
  }

  async getAllCVs() {
    return await this.cvModel.find().exec();
  }

  async getCVById(id: string) {
    return await this.cvModel.findById(id).exec();
  }

  async updateCV(id: string, cvData: Partial<CV>) {
    return await this.cvModel
      .findByIdAndUpdate(id, cvData, { new: true })
      .exec();
  }

  async deleteCV(id: string) {
    return await this.cvModel.findByIdAndDelete(id).exec();
  }
}
