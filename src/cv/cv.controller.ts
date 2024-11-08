import {
  Controller,
  UseGuards,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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

@UseGuards(AuthGuard('jwt'))
@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createCv(
    @Body() createCvDto: CreateCvDto,
    @Req() req: RequestWithUser,
  ) {
    const userId = req.user.userId;
    return this.cvService.createCV(createCvDto, userId);
  }

  @Get(':id')
  async getCv(@Param('id') id: string, @Req() req: RequestWithUser) {
    const userId = req.user.userId;
    return this.cvService.findOne(id, userId);
  }

  @Get()
  async getAllCVs(@Req() req: RequestWithUser) {
    const userId = req.user.userId;
    return this.cvService.getAllCVs(userId);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateCv(
    @Param('id') id: string,
    @Body() updateCvDto: UpdateCvDto,
    @Req() req: RequestWithUser,
  ) {
    const userId = req.user.userId;
    return this.cvService.updateCV(id, updateCvDto, userId);
  }

  @Delete(':id')
  async deleteCv(@Param('id') id: string, @Req() req: RequestWithUser) {
    const userId = req.user.userId;
    return this.cvService.deleteCV(id, userId);
  }
}
