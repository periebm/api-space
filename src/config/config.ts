import dotenv from 'dotenv';
import * as Joi from 'joi';

let path = '.env.dev';
if (process.env.NODE_ENV === 'production') {
  path = '.env';
}

dotenv.config({ path });

const envSchema = Joi.object({
  NODE_ENV: Joi.string().required(),
  PORT: Joi.number().default(3000),
  SPOTIFY_CLIENT_ID: Joi.string().required(),
  SPOTIFY_API_URL: Joi.string().required(),
  SPOTIFY_CLIENT_SECRET: Joi.string().required(),
  JWT_SECRET_KEY: Joi.string().required()
}).unknown(true);

const {error, value: envVars} = envSchema.validate(process.env);

if (error) {
  throw new Error(`Enviroment Variable Remaining: ${error.message}`);
}

export const envConfig = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwt_secret: envVars.JWT_SECRET_KEY,
  spotify: {
    client_id: envVars.SPOTIFY_CLIENT_ID,
    api: envVars.SPOTIFY_API_URL,
    client_secret: envVars.SPOTIFY_CLIENT_SECRET
  },
}