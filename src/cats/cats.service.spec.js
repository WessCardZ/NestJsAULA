import { Test } from '@nestjs/testing';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
