import { User } from '@app/libs/db/entities/user.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let findOne: jest.Mock;

  beforeEach(async () => {
    findOne = jest.fn();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            findOne,
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('findUser function', () => {
    let user: User;
    describe('正常確認', () => {
      beforeEach(() => {
        user = new User();
        user.id = 1;
        user.email = 'xxxx@gmail.com';
        user.password = '11111';
        findOne.mockReturnValue(Promise.resolve(user));
      });

      it('1', async () => {
        const findUser = await service.findUser('xxxx@gmail.com');
        expect(findUser).toEqual(user);
      });
    });

    describe('undefined 確認', () => {
      beforeEach(() => {
        findOne.mockReturnValue(Promise.resolve(undefined));
      });

      it('1', async () => {
        const findUser = await service.findUser('xxxx@gmail.com');
        expect(findUser).toEqual(undefined);
      });
    });
  });
});
