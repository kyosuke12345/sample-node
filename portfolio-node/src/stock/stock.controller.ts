import { JwtAuthGuard } from '@app/auth/jwt-auth.guard';
import { UserResponse } from '@app/users/class/users.response';
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { StockResponse } from './class/stock.response';
import { StockService } from './stock.service';

@ApiTags('株価情報取得')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiUnauthorizedResponse()
@Controller('stock')
export class StockController {
  constructor(private stockService: StockService) {}

  @ApiOperation({ description: '株価情報を取得' })
  @ApiResponse({
    type: StockResponse,
  })
  @Get()
  // eslit-why 認証確認用
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async stockInfo(@Request() _: { user: UserResponse }) {
    return this.stockService.stockInfo();
  }
}
