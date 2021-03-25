import express, { Express } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import blogRouter from './routes/blog';

// Env vars
dotenv.config({ path: './config/config.env' });

import './db/db';

const app: Express = express();

// Body parser
app.use(express.json());

// Dev Loggin Middleware
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Mount Routes
app.use('/api/v1/blog', blogRouter);

const PORT: string | number = process.env.PORT || 5000;

app.listen(PORT, (): void => console.log(`App running in PORT: ${PORT}`));
