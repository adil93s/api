import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { verifyToken } from '@/utils/jwt';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'No token provided' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid token' });
  }

  // req.user = decoded;
  next();
};
