import { Controller, Get} from '@nestjs/common';
import { SliderService } from './slider.service';

@Controller('slider')
export class SliderController {
  constructor(private readonly sliderService: SliderService) {}

  @Get()
  async findAll(){
      return await this.sliderService.findAll()
  }
}
