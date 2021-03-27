import { Document, Schema, model } from 'mongoose';

interface EmailDocument extends Document {
  title: string;
  body: string;
  paragraph: [];
}

const EmailSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

export default model<EmailDocument>('Email', EmailSchema);
