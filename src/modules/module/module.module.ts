import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Module as ModuleEntity} from 'src/modules/module/entities/module.entity'
import { ApplicationService } from '../application/application.service';
import { Application } from '../application/entities/application.entity';

@Module({
  imports : [TypeOrmModule.forFeature([ModuleEntity , Application])],
  controllers: [ModuleController],
  providers: [ModuleService , ApplicationService]
})
export class ModuleModule {}
