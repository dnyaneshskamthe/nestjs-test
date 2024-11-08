import { CvService } from './cv.service';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Request } from 'express';
export interface RequestWithUser extends Request {
    user: {
        userId: string;
        email: string;
    };
}
export declare class CvController {
    private readonly cvService;
    constructor(cvService: CvService);
    createCv(createCvDto: CreateCvDto, req: RequestWithUser): Promise<import("./schemas/cv.schema").CV>;
    getCv(id: string, req: RequestWithUser): Promise<void>;
    getAllCVs(req: RequestWithUser): Promise<import("./schemas/cv.schema").CV[]>;
    updateCv(id: string, updateCvDto: UpdateCvDto, req: RequestWithUser): Promise<import("./schemas/cv.schema").CV>;
    deleteCv(id: string, req: RequestWithUser): Promise<void>;
}
