import mongoose from 'mongoose';

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb://127.0.0.1:27017/genosio-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export { connectDB };
