import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Permission } from './entities/permission.entity';
import { Module as ModuleEntity } from 'src/modules/module/entities/module.entity';
import { ModuleService } from '../module/module.service';

@Module({
  imports : [TypeOrmModule.forFeature([Menu,Permission,ModuleEntity])],
  controllers: [MenuController],
  providers: [MenuService,ModuleService]
})
export class MenuModule {}
