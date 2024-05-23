export type SpotifyToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface ISpotifyRepository {
  requestToken():Promise<SpotifyToken | undefined>;
  getPodcastEpisodes():Promise<any | undefined>;
}