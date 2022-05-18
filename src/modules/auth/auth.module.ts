import { Module } from '@nestjs/common';
import { ApplicationService } from '../application/application.service';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Application } from '../application/entities/application.entity';

@Module({
  imports : [TypeOrmModule.forFeature([User , Application])],
  controllers: [AuthController],
  providers: [AuthService,ApplicationService, UserService]
})
export class AuthModule {}
