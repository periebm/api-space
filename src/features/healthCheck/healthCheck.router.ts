import { Router } from "express";
import healthCheckController from "./healthCheck.controller";

const healthRouter: Router = Router();

healthRouter.get('/health', healthCheckController.checkHealth )

export default healthRouter;