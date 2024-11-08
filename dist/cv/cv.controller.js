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
exports.CvController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const cv_service_1 = require("./cv.service");
const create_cv_dto_1 = require("./dto/create-cv.dto");
const update_cv_dto_1 = require("./dto/update-cv.dto");
let CvController = class CvController {
    constructor(cvService) {
        this.cvService = cvService;
    }
    async createCv(createCvDto, req) {
        const userId = req.user.userId;
        return this.cvService.createCV(createCvDto, userId);
    }
    async getCv(id, req) {
        const userId = req.user.userId;
        return this.cvService.findOne(id, userId);
    }
    async getAllCVs(req) {
        const userId = req.user.userId;
        return this.cvService.getAllCVs(userId);
    }
    async updateCv(id, updateCvDto, req) {
        const userId = req.user.userId;
        return this.cvService.updateCV(id, updateCvDto, userId);
    }
    async deleteCv(id, req) {
        const userId = req.user.userId;
        return this.cvService.deleteCV(id, userId);
    }
};
exports.CvController = CvController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cv_dto_1.CreateCvDto, Object]),
    __metadata("design:returntype", Promise)
], CvController.prototype, "createCv", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CvController.prototype, "getCv", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CvController.prototype, "getAllCVs", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cv_dto_1.UpdateCvDto, Object]),
    __metadata("design:returntype", Promise)
], CvController.prototype, "updateCv", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CvController.prototype, "deleteCv", null);
exports.CvController = CvController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('cv'),
    __metadata("design:paramtypes", [cv_service_1.CvService])
], CvController);
//# sourceMappingURL=cv.controller.js.map