import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './entities/menu.entity';
import { MenuService } from './menu.service';
import { ApplicationService } from '../application/application.service';

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService , private readonly applicationService : ApplicationService) {}

    @Post()
    async create(@Body() menu : CreateMenuDto) : Promise<Menu>{
        const application = await this.applicationService.findById(menu.applicationId)
        console.log("success")
        return await this.menuService.create(menu,application)
    }
    
    @Get(":id")
    async findByApplication(@Param('id') menuId : number) : Promise<Menu>{
        return await this.menuService.findById(menuId);
    }
}
