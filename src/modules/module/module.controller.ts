import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Module } from './entities/module.entity';
import { ModuleService } from './module.service';
import { ApplicationService } from '../application/application.service';
import { CreateModuleDto } from './dto/create-module.dto';

@Controller('modules')
export class ModuleController {
  constructor(
      private readonly moduleService: ModuleService,
      private readonly applicationService : ApplicationService
  ) {}

  @Get()
  async findAll(){
      return this.moduleService.findByRole(1)
  }
  
  @Post()
  async create(@Body() moduleData : CreateModuleDto) : Promise<Module>{
      await this.applicationService.findById(moduleData.application_id)
      return this.moduleService.create(moduleData)
  }

  @ApiBearerAuth('JWT-auth')
  @Get("user")
  async findByRole(){
      return [
        {
          id : 1,
          name : "Attendance",
          icon : "attendance.svg",
          hide : false,
          menus : [
            {
              id : "1",
              name : "Attendance",
              tag : "attendance_screen",
              icon : "attendance.svg",
              submenus : [],
              permissions : [
                {
                  id : 1,
                  name : "Mark Attendance",
                  tag : "MA"
                }
              ],
            }
          ]
        },
        {
          id : 2,
          name : "Rider",
          hide : true,
          icon : "rider.svg",
          menus : [
            {
              id : "2",
              name : "Delivery",
              tag : "delivery-screen",
              icon : "rider.svg",
              permissions : [
                {
                  id : 2,
                  name : "Get Delivery Data",
                  tag : "GDD"
                },
                {
                  id : 3,
                  name : "Get Delivery Status Update",
                  tag : "GDSU"
                },
              ],
              submenus : []
            },
            {
              id : "3",
              name : "Pickup",
              tag : "pickup-screen",
              icon : "rider.svg",
              submenus : [],
              permissions : [
                {
                  id : 4,
                  name : "Get Pickup Data",
                  tag : "GPD"
                },
                {
                  id : 5,
                  name : "Get Pickup Status Update",
                  tag : "GPSU"
                },
              ],
            }
          ]
        }
        
      ]
  }
}
