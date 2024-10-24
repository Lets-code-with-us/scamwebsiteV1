import mongoose from 'mongoose';

// user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unqiue: true,
  },
  email: {
    type: String,
    required: true,
    unqiue: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
