import { Schema, model } from 'mongoose';

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
});

export interface BlogDocument {
  title: string;
}

export default model('Blog', BlogSchema);
