import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('.env') });

export const { DB_URI, PORT, JWT_SECRET } = process.env;
