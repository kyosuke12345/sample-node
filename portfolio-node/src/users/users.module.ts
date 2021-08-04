import { Module } from '@nestjs/common';
import { UsersService } from '@app/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/libs/db/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
