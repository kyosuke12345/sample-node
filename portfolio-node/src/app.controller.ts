import {
  Post,
  UseGuards,
  Request,
  Controller,
  Get,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { LoginDto } from './auth/class/auth.dto';
import {
  AuthResponse,
  LoginResponse,
  UserReponse,
} from './auth/class/auth.response';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { CreateUserDto } from './users/class/users.dto';
import { UserResponse } from './users/class/users.response';

@ApiTags('ログイン、新規登録関連')
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ description: 'ログイン処理' })
  @ApiUnauthorizedResponse()
  @ApiResponse({
    type: LoginResponse,
  })
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(
    @Request() req: { user: AuthResponse },
    // eslit-why swaggerで使用するため
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Body(new ValidationPipe()) _: LoginDto,
  ): Promise<LoginResponse> {
    return this.authService.login(req.user);
  }

  @ApiProperty({ description: '新規会員登録処理' })
  @Post('regist')
  async regitst(@Body(new ValidationPipe()) body: CreateUserDto) {
    return this.authService.regist(body);
  }

  @ApiOperation({ description: 'ログインユーザの情報取得' })
  @ApiResponse({
    type: UserResponse,
  })
  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('login-info')
  async loginInfo(@Request() req: { user: UserReponse }) {
    return req.user;
  }
}
