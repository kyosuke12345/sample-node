import { Stock } from '@app/libs/db/entities/stock.entity';
import { ApiProperty } from '@nestjs/swagger';

export class StockItem {
  @ApiProperty({ type: Date })
  day: Stock['day'];
  @ApiProperty({ type: Number })
  takane: Stock['takane'];
  @ApiProperty({ type: Number })
  owarine: Stock['owarine'];
  @ApiProperty({ type: Number })
  hajimene: Stock['hajimene'];
  @ApiProperty({ type: Number })
  yasune: Stock['yasune'];

  constructor(stock: Stock) {
    this.day = stock.day;
    this.takane = stock.takane;
    this.yasune = stock.yasune;
    this.owarine = stock.owarine;
    this.hajimene = stock.hajimene;
  }
}

export class StockResponse {
  @ApiProperty({ type: StockItem, isArray: true })
  items: StockItem[];

  constructor(stockList: Stock[]) {
    this.items = [];
    for (const row of stockList) {
      this.items.push(new StockItem(row));
    }
  }
}
