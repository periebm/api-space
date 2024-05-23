import axios from 'axios';
import { envConfig } from '../config/config';
import {
  ISpotifyRepository,
  SpotifyToken,
} from '../features/spotify/ISpotify.repository';

const SPOTIFY_URL = envConfig.spotify.api;
const TOKEN =
  'BQBgd6f0T2haxc6hwr2q6GWLIUO79xvD-RP_Uy5oZ5UEAIFSi7T5WYI2kG8lUN6x74P8Bc3Y6ghydvvTBA5kLqeHggXE72Bl2x5PHbDXL_lNzYBXsJY';
class SpotifyRepository implements ISpotifyRepository {
  async requestToken(): Promise<SpotifyToken | undefined> {
    try {
      const body = {
        grant_type: 'client_credentials',
        client_id: envConfig.spotify.client_id,
        client_secret: envConfig.spotify.client_secret,
      };
      const response: any = await axios.post(`${SPOTIFY_URL}/token`, body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(response.data);
      return response.data as SpotifyToken;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getPodcastEpisodes(): Promise<SpotifyToken | undefined> {
    try {
      const response: any = await axios.get(
        `https://api.spotify.com/v1/shows/1yQ2qrscxoTmdUvZgMoY4a/episodes?market=BR`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        },
      );
      console.log(response.data);
      return response.data as SpotifyToken;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const spotifyRepository = new SpotifyRepository();

export default spotifyRepository;
