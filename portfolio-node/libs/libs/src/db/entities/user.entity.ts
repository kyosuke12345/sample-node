import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { CommonColumn } from '@app/libs/db/abstract/table.abstract';
import { CreateUserDto } from '@app/users/class/users.dto';
import { hashSync } from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

export const MAX_LENGTH = {
  EMAIL: 80,
  PASSWORD: 60,
} as const;

@Entity('user_info')
export class User extends CommonColumn {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Index({ unique: true })
  @Column({ type: 'varchar', length: MAX_LENGTH.EMAIL })
  email: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: MAX_LENGTH.PASSWORD })
  password: string;
}

export function getUserInstance(body: CreateUserDto): User {
  const user = new User();
  user.email = body.email;
  user.password = hashSync(body.password, 10);
  return user;
}
