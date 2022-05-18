import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RoleService } from '../role/role.service';
import { Role } from '../role/entities/role.entity';
import { Permission } from '../menu/entities/permission.entity';

@Module({
  imports : [TypeOrmModule.forFeature([User , Role,Permission])],
  controllers: [UserController],
  providers: [UserService , RoleService]
})
export class UserModule {}
