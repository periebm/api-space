export type SpotifyToken = {
  acess_token: string;
  token_type: string;
  expires_in: number;
}

export interface ISpotifyRepository {
  getToken():Promise<SpotifyToken | undefined>;
}