"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CvService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cv_schema_1 = require("./schemas/cv.schema");
let CvService = class CvService {
    findOne(id, userId) {
        throw new Error('Method not implemented.');
    }
    constructor(cvModel) {
        this.cvModel = cvModel;
    }
    async createCV(createCvDto, userId) {
        const newCv = new this.cvModel({ ...createCvDto, user: userId });
        return await newCv.save();
    }
    async getAllCVs(userId) {
        return await this.cvModel.find({ user: userId }).exec();
    }
    async getCVById(id, userId) {
        const cv = await this.cvModel.findOne({ _id: id, user: userId }).exec();
        if (!cv) {
            throw new common_1.NotFoundException(`CV with ID ${id} not found`);
        }
        return cv;
    }
    async updateCV(id, cvData, userId) {
        const updatedCv = await this.cvModel
            .findOneAndUpdate({ _id: id, user: userId }, cvData, { new: true })
            .exec();
        if (!updatedCv) {
            throw new common_1.NotFoundException(`CV with ID ${id} not found`);
        }
        return updatedCv;
    }
    async deleteCV(id, userId) {
        const deletedCv = await this.cvModel
            .findOneAndDelete({ _id: id, user: userId })
            .exec();
        if (!deletedCv) {
            throw new common_1.NotFoundException(`CV with ID ${id} not found`);
        }
    }
};
exports.CvService = CvService;
exports.CvService = CvService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cv_schema_1.CV.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CvService);
//# sourceMappingURL=cv.service.js.map