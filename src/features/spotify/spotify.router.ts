import { Router } from 'express';
import spotifyController from './spotify.controller';

const spotifyRouter: Router = Router();

spotifyRouter.post('/request-token', spotifyController.requestToken);

export default spotifyRouter;
