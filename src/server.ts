import express, { Express } from 'express';
import dotenv from 'dotenv';

// Env vars
dotenv.config({ path: './config/config.env' });

import './db/db';

const app: Express = express();

// Body parser
app.use(express.json());

const PORT: string | number = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running in PORT: ${PORT}`));
