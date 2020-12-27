const express = require('express');
const dotenv = require('dotenv');

// Env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Body parser
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running in PORT: ${PORT}`));
