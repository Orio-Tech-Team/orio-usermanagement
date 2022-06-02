import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneException } from 'src/Helper/Exception/findone.exception';
import { Repository } from 'typeorm';
import { Application } from '../application/entities/application.entity';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
    
    constructor(
        @InjectRepository(Menu)
        private readonly menuRepository : Repository<Menu>
    ){}

    /*
        1 - Use For own controller POST API
    */
    async create(menu : CreateMenuDto){
        return await this.menuRepository.save(
            this.menuRepository.create(menu)
        )
    }

}
