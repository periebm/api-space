import express from 'express';
import './config/config';
import cors from 'cors';
import helmet from 'helmet';
import { setupRoutes } from './config/routes';
import { envConfig } from './config/config';
import errorHandler from './middlewares/error.handler';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(cookieParser());

setupRoutes(app);
app.use(errorHandler.handleError);

const PORT = envConfig.port || 3000;

app.listen(PORT, () => {
  console.log(`Libcast: Up and Running in [${envConfig.env}] mode on port [${PORT}]`);
});

process.on('uncaughtException', (err) => {
  console.log(`Uncaught Exception: ${err.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled rejection at ', promise, `reason: ${reason}`);
  process.exit(1);
});
