import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleService } from '../role/role.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService , private readonly roleService : RoleService) {}

  @Get()
    async findAll() : Promise<User[]>{
        return this.userService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: number) : Promise<User>{
        return await this.userService.findById(+id);
    }

    @Post()
    async create(@Body() user : CreateUserDto){
        const role = await this.roleService.findById(user.roleId)
        return this.userService.create(user,role);
    }
}
