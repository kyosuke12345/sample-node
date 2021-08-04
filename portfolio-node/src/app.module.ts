import { LibsModule } from '@app/libs';
import { DbService } from '@app/libs/db/db.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibLogModule } from '@app/libs/lib-log/lib-log.module';
import { AppController } from './app.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: `env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    {
      module: LibsModule,
      global: true,
    },
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      // 接続情報を作成するServiceクラスを定義
      useClass: DbService,
    }),
    LibLogModule,
    AuthModule,
    UsersModule,
    StockModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
