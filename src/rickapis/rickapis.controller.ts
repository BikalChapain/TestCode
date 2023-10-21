import { Controller, Get, Param } from '@nestjs/common';
import { RickapisService } from './rickapis.service';

@Controller('rickapis')
export class RickapisController {
  constructor(private readonly rickapisService: RickapisService) {}

  @Get(':ids')
  async getEpisodesWithCharacters(@Param('ids') ids: string) {
    const episodeIds = ids.split(',').map((id) => parseInt(id, 10));
    const episodes =
      await this.rickapisService.fetchEpisodesWithCharacters(episodeIds);
    console.log(episodes);
    return episodes;
  }
}
