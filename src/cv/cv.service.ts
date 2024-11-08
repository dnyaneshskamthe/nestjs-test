import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CV } from './schemas/cv.schema';
import { CreateCvDto } from './dto/create-cv.dto';

@Injectable()
export class CvService {
  findOne(id: string, userId: string) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(CV.name) private cvModel: Model<CV>) {}

  async createCV(createCvDto: CreateCvDto, userId: string): Promise<CV> {
    const newCv = new this.cvModel({ ...createCvDto, user: userId });
    return await newCv.save();
  }

  async getAllCVs(userId: string): Promise<CV[]> {
    // Fetch CVs only for the specified user
    return await this.cvModel.find({ user: userId }).exec();
  }

  async getCVById(id: string, userId: string): Promise<CV> {
    const cv = await this.cvModel.findOne({ _id: id, user: userId }).exec();
    if (!cv) {
      throw new NotFoundException(`CV with ID ${id} not found`);
    }
    return cv;
  }

  async updateCV(id: string, cvData: Partial<CV>, userId: string): Promise<CV> {
    // Ensure only the CV belonging to the user can be updated
    const updatedCv = await this.cvModel
      .findOneAndUpdate({ _id: id, user: userId }, cvData, { new: true })
      .exec();
    if (!updatedCv) {
      throw new NotFoundException(`CV with ID ${id} not found`);
    }
    return updatedCv;
  }

  async deleteCV(id: string, userId: string): Promise<void> {
    // Ensure only the CV belonging to the user can be deleted
    const deletedCv = await this.cvModel
      .findOneAndDelete({ _id: id, user: userId })
      .exec();
    if (!deletedCv) {
      throw new NotFoundException(`CV with ID ${id} not found`);
    }
  }
}
