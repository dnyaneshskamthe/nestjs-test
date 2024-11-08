import {
  Controller,
  UseGuards,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CvService } from './cv.service';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Post()
  createCv(@Body() createCvDto: CreateCvDto) {
    return this.cvService.createCV(createCvDto);
  }

  @Get(':id')
  getCv(@Param('id') id: string) {
    return this.cvService.findOne(id);
  }

  @Get()
  getAllCVs() {
    return this.cvService.getAllCVs();
  }

  @Patch(':id')
  updateCv(@Param('id') id: string, @Body() updateCvDto: UpdateCvDto) {
    return this.cvService.updateCV(id, updateCvDto);
  }

  @Delete(':id')
  deleteCv(@Param('id') id: string) {
    return this.cvService.deleteCV(id);
  }
}
