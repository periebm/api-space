import { Router, Express } from "express";
import healthRouter from "../features/healthCheck/healthCheck.router";
import spotifyRouter from "../features/spotify/spotify.router";

export const setupRoutes = (app: Express): void => {
    const router: Router = Router();

    app.use('/api', router);
    router.use(healthRouter);
    router.use(spotifyRouter);
}