import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { envConfig } from '../config/config';

const SECRET_KEY = envConfig.jwt_secret;

export const authorization = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers['authorization'] ? req.headers['authorization'] : '';
  const refreshToken = req.cookies['refreshToken'];

  if (!accessToken && !refreshToken) {
    return res.status(401).send('Access Denied. No token provided.');
  }

  try {
    if (accessToken) {
      const decoded: any = jwt.verify(accessToken, SECRET_KEY);
      res.locals.user = decoded.user;
      return next();
    }
  } catch (error) {
    // Access token is invalid or expired
  }

  // If access token is invalid/expired, try to use the refresh token
  if (!refreshToken) {
    return res.status(401).send('Access Denied. No refresh token provided.');
  }

  try {
    const decoded: any = jwt.verify(refreshToken, SECRET_KEY);
    const newAccessToken = jwt.sign({ user: decoded.user }, SECRET_KEY, {
      expiresIn: '1h',
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'strict',
    });
    console.log(newAccessToken);
    res.setHeader('Authorization', `Bearer ${newAccessToken}`);
    res.locals.user = decoded.user;
    next();
  } catch (error) {
    return res.status(400).send('Invalid Token.');
  }
};
