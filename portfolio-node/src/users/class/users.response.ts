import { COMMON_COLUMN_KEY_LIST } from '@app/libs/db/abstract/table.abstract';
import { User } from '@app/libs/db/entities/user.entity';
import { OmitType, PartialType } from '@nestjs/swagger';

export class UserResponse extends PartialType(
  OmitType(User, ['password', ...COMMON_COLUMN_KEY_LIST] as const),
) {
  constructor(user: User) {
    super();
    this.email = user.email;
    this.id = user.id;
  }
}
