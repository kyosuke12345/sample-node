import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Stock } from './entities/stock.entity';
import { User } from './entities/user.entity';

@Injectable()
export class DbService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'postgres',
      host: this.configService.get('DATABASE_HOST', 'localhost'),
      port: Number(this.configService.get('DATABASE_PORT', 5432)),
      username: this.configService.get('DATABASE_USERNAME', 'postgres'),
      password: this.configService.get('DATABASE_PASSWORD', 'postgres'),
      database: this.configService.get('DATABASE_NAME', 'postgres'),
      // TODO うまくいかないので、後で直す
      // entities: [join(__dirname + './entities/*.entity{.ts,.js}')],
      entities: [User, Stock],
      // logging: isLocal(),
      synchronize: false,
    };
  }
}
