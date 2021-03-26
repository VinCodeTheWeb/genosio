import express from 'express';

import { createBlog, getBlogs } from '../controllers/blog';

const router = express.Router();

router.route('/').get(getBlogs).post(createBlog);

export default router;
