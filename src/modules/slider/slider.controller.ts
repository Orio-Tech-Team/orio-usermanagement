import { Controller } from '@nestjs/common';
import { SliderService } from './slider.service';

@Controller('slider')
export class SliderController {
  constructor(private readonly sliderService: SliderService) {}
}
