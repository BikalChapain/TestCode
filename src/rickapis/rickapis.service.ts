import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class RickapisService {
  constructor(private readonly httpService: HttpService) {}

  private async fetchEpisode(episodeId: number): Promise<any> {
    const response: AxiosResponse = await this.httpService
      .get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .toPromise();
    return response.data;
  }

  private async fetchCharacter(characterUrl: string): Promise<any> {
    const response: AxiosResponse = await this.httpService
      .get(characterUrl)
      .toPromise();
    return response.data;
  }

  async fetchEpisodesWithCharacters(episodeIds: number[]): Promise<any[]> {
    const episodes: any[] = await Promise.all(
      episodeIds.map((episodeId) => this.fetchEpisode(episodeId)),
    );

    for (const episode of episodes) {
      episode.characters = await Promise.all(
        episode.characters.map((characterUrl: string) =>
          this.fetchCharacter(characterUrl),
        ),
      );
    }

    return episodes;
  }
}
