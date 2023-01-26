import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { PositiveIntPipe } from './../common/pipes/positiveInt.pipe';
import { CatsService } from './cats.service';
import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return {cats: 'get all cat api'};
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param) {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
