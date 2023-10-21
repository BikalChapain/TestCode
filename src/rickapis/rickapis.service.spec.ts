import { Test, TestingModule } from '@nestjs/testing';
import { RickapisService } from './rickapis.service';

describe('RickapisService', () => {
  let service: RickapisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RickapisService],
    }).compile();

    service = module.get<RickapisService>(RickapisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
