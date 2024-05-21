import { Router } from 'express';
import spotifyController from './spotify.controller';

const spotifyRouter: Router = Router();

spotifyRouter.get('/get-token', spotifyController.getToken);

export default spotifyRouter;
