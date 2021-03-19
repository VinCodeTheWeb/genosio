import { Schema } from 'mongoose';

interface BlogDocument {}

const BlogSchema = Schema({
  title: {
    type: String,
    required: true,
  },
});
