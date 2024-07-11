import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@/config/env';

export const generateToken = (payload: Record<string, unknown>): string => {
  return jwt.sign(payload, JWT_SECRET as string, { expiresIn: '1h' });
};

export const verifyToken = (token: string): Record<string, unknown> | null => {
  try {
    return jwt.verify(token, JWT_SECRET as string) as Record<string, unknown>;
  } catch (err) {
    return null;
  }
};
