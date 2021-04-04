"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./db/db");
const blog_1 = __importDefault(require("./routes/blog"));
const email_1 = __importDefault(require("./routes/email"));
// Env vars
dotenv_1.default.config({ path: './config/config.env' });
// Connect to database
db_1.connectDB();
const app = express_1.default();
// Body parser
app.use(express_1.default.json());
// Dev Loggin Middleware
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan_1.default('dev'));
}
// Mount Routes
app.use('/api/v1/blog', blog_1.default);
app.use('/api/v1/email', email_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App running in PORT: ${PORT}`));
