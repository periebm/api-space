import express from 'express';
import 'express-async-errors';
import { router } from './routes/index.router';

const app = express();

app
  .use(express.json())
  .use(router);

export default app;
