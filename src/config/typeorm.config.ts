import { ConfigModule, ConfigService } from '@nestjs/config';
import {TypeOrmModuleOptions , TypeOrmModuleAsyncOptions} from '@nestjs/typeorm'


export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
      return {  
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        migrations: [__dirname + '/../migrations/*{.ts,.js}'],
        cli: {
          migrationsDir: __dirname + '/../migrations',
        },
        extra: {
          charset: 'utf8mb4_unicode_ci',
          connectionLimit: 5
        },
        synchronize: false,
        logging: true,
      };
    },
  };
  
  export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: __dirname + '/../migrations',
    },
    extra: {
      charset: 'utf8mb4_unicode_ci',
      connectionLimit: 5
    },
    synchronize: false,
    logging: true,
  };