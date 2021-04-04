"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogs = exports.createBlog = void 0;
const Blog_1 = __importDefault(require("../models/Blog"));
// @desc    Create Blog
// @route   POST /api/blog
// @access  PRIVATE
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, author, paragraph } = req.body;
    const blog = new Blog_1.default({
        title,
        author,
        paragraph,
    });
    yield blog.save();
    res.status(201).json({ success: true, data: blog });
});
exports.createBlog = createBlog;
// @desc    Get All Blogs
// @route   GET /api/blog
// @access  PUBLIC
const getBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield Blog_1.default.find({});
    res.status(200).json({ success: true, data: blogs });
});
exports.getBlogs = getBlogs;
