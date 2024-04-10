import { Request, Response } from 'express';
import { Router } from 'express';

const healthRouter = Router();

healthRouter.get('/health', (req: Request, res: Response) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: `Ok`,
    timestamp: Date.now(),
  };

  try {
    res.send(healthCheck);
  } catch (error) {
    res.status(503).send(error);
  }
});

export { healthRouter };
