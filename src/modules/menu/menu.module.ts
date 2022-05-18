import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Permission } from './entities/permission.entity';
import { Application } from '../application/entities/application.entity';
import { ApplicationService } from '../application/application.service';

@Module({
  imports : [TypeOrmModule.forFeature([Menu,Permission,Application])],
  controllers: [MenuController],
  providers: [MenuService,ApplicationService]
})
export class MenuModule {}
