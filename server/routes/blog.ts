import express from 'express';

import { createBlog } from '../controllers/blog';

const router = express.Router();

router.route('/').post(createBlog);

module.exports = router;
