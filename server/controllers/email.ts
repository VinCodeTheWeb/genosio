import { Request, Response } from 'express';
import Email from '../models/Email';

// @desc    Create Email
// @route   POST /api/email
// @access  PRIVATE
const createEmail = async (req: Request, res: Response) => {
  const { title, body } = req.body;

  const email = new Email({
    title,
    body,
  });

  await email.save();

  res.status(201).json({ success: true, data: email });
};

export { createEmail };
