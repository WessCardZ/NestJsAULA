import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('Cats Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    controller = module.get(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
