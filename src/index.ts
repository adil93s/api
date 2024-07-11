import { globalRouter } from '@/api/routes';
import '@/config/db';
import { PORT } from '@/config/env';
import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Global Routing */
globalRouter(app);

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});

export { server };
