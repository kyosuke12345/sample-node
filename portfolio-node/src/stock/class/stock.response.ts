import { Stock } from '@app/libs/db/entities/stock.entity';
import { isArray, isDate, isNumber, isObject } from '@app/libs/utils/typeguard';
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

export function isStockItem(obj: unknown): obj is StockItem {
  return (
    isObject(obj) &&
    isDate(obj.day) &&
    isNumber(obj.takane) &&
    isNumber(obj.yasune) &&
    isNumber(obj.owarine) &&
    isNumber(obj.hajimene)
  );
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

export function isStockResponse(obj: unknown): obj is StockResponse {
  return isObject(obj) && isArray(obj.items, isStockItem);
}
