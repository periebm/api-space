import { Request, Response, NextFunction } from 'express';
import { SpotifyService } from './Spotify.service';
import spotifyRepository from '../../repositories/spotify.repository';
import { HttpStatusCode } from 'axios';

class SpotifyController {
  async requestToken(req: Request, res: Response, next: NextFunction) {
    try {
      const spotifyService = new SpotifyService(spotifyRepository);

      const response = await spotifyService.requestToken();
      return res.status(HttpStatusCode.Ok).send(response);
    } catch (error) {
      next(error);
    }
  }

  async getPodcastEpisodes(req: Request, res: Response, next: NextFunction) {
    try {
      const spotifyService = new SpotifyService(spotifyRepository);

      const response = await spotifyService.getPodcastEpisodes();
      return res.status(HttpStatusCode.Ok).send(response);
    } catch (error) {
      next(error);
    }
  }
}

const spotifyController = new SpotifyController();

export default spotifyController;