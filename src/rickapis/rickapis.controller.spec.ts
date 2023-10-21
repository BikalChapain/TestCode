import { Test, TestingModule } from '@nestjs/testing';
import { RickapisController } from './rickapis.controller';
import { RickapisService } from './rickapis.service';

describe('RickapisController', () => {
  let controller: RickapisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RickapisController],
      providers: [RickapisService],
    }).compile();

    controller = module.get<RickapisController>(RickapisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
