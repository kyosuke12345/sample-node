import { Stock } from '@app/libs/db/entities/stock.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { addDays } from 'date-fns';
import { isStockResponse } from './class/stock.response';
import { StockService } from './stock.service';

describe('StockService', () => {
  let service: StockService;
  let find: jest.Mock;

  beforeEach(async () => {
    find = jest.fn();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StockService,
        // Mock
        {
          provide: getRepositoryToken(Stock),
          // useValue: find,
          useValue: {
            find,
          },
        },
      ],
    }).compile();

    service = module.get<StockService>(StockService);
  });

  describe('stockInfo function', () => {
    let stockList: Stock[];
    describe('正常確認', () => {
      beforeEach(() => {
        stockList = [];
        for (let i = 0; i < 10; i++) {
          const testData = new Stock();
          testData.day = addDays(new Date(), i - 10);
          testData.hajimene = i * 1;
          testData.owarine = i * 2;
          testData.takane = i * 3;
          testData.yasune = i * 4;
          stockList.push(testData);
        }
        find.mockReturnValue(Promise.resolve(stockList));
      });

      it('check response', async () => {
        const list = await service.stockInfo();
        expect(isStockResponse(list)).toBe(true);
      });
    });

    describe('正常確認 データが取得できなかった時', () => {
      beforeEach(() => {
        stockList = [];
        find.mockReturnValue(Promise.resolve([]));
      });

      it('1', async () => {
        const list = await service.stockInfo();
        expect(isStockResponse(list)).toBe(true);
        expect(list.items).toHaveLength(0);
      });
    });
  });
});
