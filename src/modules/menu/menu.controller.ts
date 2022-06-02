import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './entities/menu.entity';
import { MenuService } from './menu.service';
import { ApplicationService } from '../application/application.service';
import { ModuleService } from '../module/module.service';

@Controller('menus')
export class MenuController {
    constructor(
        private readonly menuService: MenuService , 
        private readonly moduleService: ModuleService
    ) {}

    @Post()
    async create(@Body() menu : CreateMenuDto) : Promise<Menu>{
        await this.moduleService.findById(menu.module_id)
        return await this.menuService.create(menu)
    }
}
