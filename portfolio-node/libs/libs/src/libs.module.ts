import { Module } from '@nestjs/common';
import { LibsService } from './libs.service';
import { DbService } from './db/db.service';

@Module({
  providers: [LibsService, DbService],
  exports: [LibsService, DbService],
})
export class LibsModule {}
