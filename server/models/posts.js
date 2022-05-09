import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
  author: {
    type: String,
  },
  postType: {
    type: String,
  },
  image: {
    type: String,
    default: "https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png"
  },
  content: {
    type: String,
  },
  partyReaction: {
    type: Number,
    default: 0,
  },
  likeReaction: {
    type: Number,
    default: 0,
  },
  litReaction: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model("Post", postsSchema);
