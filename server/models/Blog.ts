import { Document, Schema, model } from 'mongoose';

interface BlogDocument extends Document {
  title: string;
  author: string;
  paragraph: [];
}

const BlogSchema: Schema = new Schema(
  {
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
  },
  { timestamps: true }
);

export default model<BlogDocument>('Blog', BlogSchema);
