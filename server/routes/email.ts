import express from 'express';

import { createEmail } from '../controllers/email';

const router = express.Router();

router.route('/').post(createEmail);

export default router;
