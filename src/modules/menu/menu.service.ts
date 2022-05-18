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

    async create(menu : CreateMenuDto , application : Application){
        return await this.menuRepository.save(
            this.menuRepository.create({...menu,application})
        )
    }

    async findById(menuId : number) : Promise<Menu> {
        return await this.menuRepository.findOneOrFail({
            where : {
                id : menuId
            },
            relations : ['permissions']
        }).catch(error=> {
            throw FindOneException.exception("Menu Not Found")
        });
    }

}
