import { User } from '@app/libs/db/entities/user.entity';
import { isUndefined } from '@app/libs/utils/typeguard';
import { UsersService } from '@app/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import {
  AuthResponse,
  LoginResponse,
  UserReponse,
} from '@app/auth/class/auth.response';
import { CreateUserDto } from '@app/users/class/users.dto';

export interface JWTPayload {
  userId: User['email'];
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: User['email'],
    password: User['password'],
  ): Promise<AuthResponse | null> {
    const user = await this.userService.findUser(email);
    if (!isUndefined(user) && compareSync(password, user.password)) {
      return new AuthResponse(user);
    } else {
      return null;
    }
  }

  /**
   * ログイン処理
   * @param user
   * @returns
   */
  async login(user: AuthResponse): Promise<LoginResponse> {
    // jwtにつけるPayload情報
    const payload: JWTPayload = { userId: user.email };
    return new LoginResponse(this.jwtService.sign(payload));
  }

  /**
   * 新規ユーザ登録処理
   * @param body
   * @returns
   */
  async regist(body: CreateUserDto) {
    return this.userService.regist(body);
  }

  /**
   * ユーザ情報取得
   * @param email
   */
  async getUser(email: User['email']): Promise<UserReponse> {
    const user = await this.userService.findUser(email);
    if (isUndefined(user)) {
      throw new UnauthorizedException();
    }
    return new UserReponse(user);
  }
}
