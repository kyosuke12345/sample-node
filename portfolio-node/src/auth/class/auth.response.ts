import { COMMON_COLUMN_KEY_LIST } from '@app/libs/db/abstract/table.abstract';
import { User } from '@app/libs/db/entities/user.entity';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

export class AuthResponse extends PartialType(
  OmitType(User, ['password', 'id', ...COMMON_COLUMN_KEY_LIST] as const),
) {
  constructor(user: User) {
    super();
    this.email = user.email;
  }
}

export class LoginResponse {
  @ApiProperty()
  access_token: string;

  constructor(access_token: string) {
    this.access_token = access_token;
  }
}

export class UserReponse extends PartialType(
  OmitType(User, ['password', ...COMMON_COLUMN_KEY_LIST] as const),
) {
  constructor(user: User) {
    super();
    this.id = user.id;
    this.email = user.email;
  }
}
