import { IsEmail, IsNotEmpty } from 'class-validator';
import { User } from '@app/libs/db/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: String })
  @IsEmail()
  email: User['email'];
  @ApiProperty({ type: String })
  @IsNotEmpty()
  password: User['password'];
}
