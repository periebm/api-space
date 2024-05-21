import { ISpotifyRepository, SpotifyToken } from "../features/spotify/ISpotify.repository";

class SpotifyRepository implements ISpotifyRepository {

  async getToken(): Promise<SpotifyToken | undefined> {

    try {

      return ;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}

const spotifyRepository = new SpotifyRepository();

export default spotifyRepository;