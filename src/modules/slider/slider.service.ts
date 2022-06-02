import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Slider } from './entities/slider.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SliderService {
    constructor(
        @InjectRepository(Slider)
        private readonly sliderRepository : Repository<Slider>
    ){}

    async findAll(){
        return this.sliderRepository.find()
    }
}
