import { Module } from '@nestjs/common';
import { LibLogService } from './lib-log.service';

@Module({
  providers: [LibLogService],
  exports: [LibLogService],
})
export class LibLogModule {}
