import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ModuleService } from './module.service';

@Controller('modules')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @ApiBearerAuth('JWT-auth')
  @Get("user")
  async findByRole(){
      return [
        {
          id : 1,
          name : "Attendance",
          menus : [
            {
              id : "1",
              name : "Attendance",
              tag : "attendance-screen",
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
          menus : [
            {
              id : "2",
              name : "Delivery",
              tag : "delivery-screen",
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
