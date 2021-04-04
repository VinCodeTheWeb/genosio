"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        default: 'Vincenzo PELLEGRINI',
        required: true,
    },
    paragraph: {
        type: Array,
        required: true,
    },
}, { timestamps: true });
exports.default = mongoose_1.model('Blog', BlogSchema);
