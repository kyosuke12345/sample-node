import { Stock } from '@app/libs/db/entities/stock.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StockResponse } from './class/stock.response';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock) private stockRepository: Repository<Stock>,
  ) {}

  async stockInfo() {
    const stockList = await this.stockRepository.find({
      order: { day: 'ASC' },
      take: 60, // 2カ月分取得
    });
    return new StockResponse(stockList);
  }
}
