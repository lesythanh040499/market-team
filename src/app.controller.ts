import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { CloudinaryResponse } from './cloudinary/cloudinary.i';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @ApiOperation({ summary: 'Upload proof image' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CloudinaryResponse> {
    return this.cloudinaryService.uploadFile(file);
  }

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('file[]', 5))
  uploadImages(@UploadedFiles() _files: Express.Multer.File[]) {
    //... handle multiple files
  }
}
