import { ISpotifyRepository } from "./ISpotify.repository";

export class SpotifyService{
  constructor(private repository: ISpotifyRepository){}

  async requestToken(){
    const token = await this.repository.requestToken();

    return token;
  }
}