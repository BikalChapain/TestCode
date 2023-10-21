import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RickapisModule } from './rickapis/rickapis.module';

@Module({
  imports: [RickapisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
