import { Router } from "express";
import healthCheckController from "./healthCheck.controller";
import { authorization } from "../../middlewares/authorization.middleware";

const healthRouter: Router = Router();

healthRouter.get('/health', authorization , healthCheckController.checkHealth )

export default healthRouter;