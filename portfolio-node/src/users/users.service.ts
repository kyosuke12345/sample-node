import { getUserInstance, User } from '@app/libs/db/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './class/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  /**
   * emailよりUser情報を取得
   * @param email
   * @returns
   */
  async findUser(email: User['email']): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email: email } });
  }

  /**
   * 登録処理
   * @param body
   */
  async regist(body: CreateUserDto) {
    await this.userRepository.save(getUserInstance(body));
    return {};
  }
}
