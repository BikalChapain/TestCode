import { Module } from '@nestjs/common';
import { RickapisService } from './rickapis.service';
import { RickapisController } from './rickapis.controller';

@Module({
  controllers: [RickapisController],
  providers: [RickapisService],
})
export class RickapisModule {}
