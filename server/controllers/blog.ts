import { Request, Response } from 'express';
import Blog from '../models/Blog';

// @desc    Create Blog
// @route   POST /api/blog
// @access  PRIVATE
const createBlog = async (req: Request, res: Response) => {
  const { title, author, paragraph } = req.body;

  const blog = new Blog({
    title,
    author,
    paragraph,
  });

  await blog.save();

  res.status(201).json({ success: true, data: blog });
};

// @desc    Get All Blogs
// @route   GET /api/blog
// @access  PUBLIC
const getBlogs = async (req: Request, res: Response) => {
  const blogs = await Blog.find({});

  res.status(200).json({ success: true, data: blogs });
};

export { createBlog, getBlogs };
