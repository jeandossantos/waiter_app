import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => console.log('connected  to mongodb successfully'))
  .catch(() => console.error('error connecting to mongodb'));
