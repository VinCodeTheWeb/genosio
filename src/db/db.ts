import mongoose from 'mongoose';

const db = mongoose.connect('mongodb://127.0.0.1:27017/genosio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export { db };
