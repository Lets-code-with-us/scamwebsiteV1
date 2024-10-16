import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
  User: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  BlogLike: {
    type: mongoose.Types.ObjectId,
    ref: 'Blogs',
  },
});

export const Like = mongoose.models.Like || mongoose.model('Like', likeSchema);
