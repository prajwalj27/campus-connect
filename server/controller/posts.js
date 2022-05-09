import Post from "../models/posts.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({_id: -1});
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  console.log(req.body);
  const post = new Post(req.body);
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const reactParty = async (req, res) => {
  try {
    const posts = await Post.find({ _id: req.params.id });
    if (posts.length === 0) {
      return res
        .status(404)
        .json({ message: "Cannot find Post with this postId" });
    }

    const currentPost = posts[0];
    currentPost.partyReaction++;
    await currentPost.save();
    res.send(currentPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const reactLike = async (req, res) => {
  try {
    const posts = await Post.find({ _id: req.params.id });
    if (posts.length === 0) {
      return res
        .status(404)
        .json({ message: "Cannot find Post with this postId" });
    }

    const currentPost = posts[0];
    currentPost.likeReaction++;
    await currentPost.save();
    res.send(currentPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const reactLit = async (req, res) => {
  try {
    const posts = await Post.find({ _id: req.params.id });
    if (posts.length === 0) {
      return res
        .status(404)
        .json({ message: "Cannot find Post with this postId" });
    }

    const currentPost = posts[0];
    currentPost.litReaction++;
    await currentPost.save();
    res.send(currentPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
