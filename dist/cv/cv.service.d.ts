import { Model } from 'mongoose';
import { CV } from './schemas/cv.schema';
import { CreateCvDto } from './dto/create-cv.dto';
export declare class CvService {
    private cvModel;
    findOne(id: string, userId: string): void;
    constructor(cvModel: Model<CV>);
    createCV(createCvDto: CreateCvDto, userId: string): Promise<CV>;
    getAllCVs(userId: string): Promise<CV[]>;
    getCVById(id: string, userId: string): Promise<CV>;
    updateCV(id: string, cvData: Partial<CV>, userId: string): Promise<CV>;
    deleteCV(id: string, userId: string): Promise<void>;
}
