import { Module } from '@nestjs/common';
import { ApplicationModule } from './modules/application/application.module';
import { RoleModule } from './modules/role/role.module';
import { MenuModule } from './modules/menu/menu.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { SliderModule } from './modules/slider/slider.module';
import { ModuleModule } from './modules/module/module.module';
import { PublicModule } from './modules/public/public.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      { 
        isGlobal: true,
      }
    ),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig), 
    ApplicationModule, RoleModule, MenuModule, UserModule, AuthModule, SliderModule, ModuleModule, PublicModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
