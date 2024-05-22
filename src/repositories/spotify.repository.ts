import axios from 'axios';
import { envConfig } from '../config/config';
import {
  ISpotifyRepository,
  SpotifyToken,
} from '../features/spotify/ISpotify.repository';

const SPOTIFY_URL = envConfig.spotify.api;
class SpotifyRepository implements ISpotifyRepository {
  async requestToken(): Promise<SpotifyToken | undefined> {
    try {
      const body = {
        grant_type: 'client_credentials',
        client_id: envConfig.spotify.client_id,
        client_secret: envConfig.spotify.client_secret,
      };
      const response:any = await axios.post(`${SPOTIFY_URL}/token`, body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(response.data)
      return response.data as SpotifyToken;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const spotifyRepository = new SpotifyRepository();

export default spotifyRepository;
