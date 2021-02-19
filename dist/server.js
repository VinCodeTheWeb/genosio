"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Env vars
dotenv_1.default.config({ path: './config/config.env' });
const app = express_1.default();
// Body parser
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App running in PORT: ${PORT}`));
