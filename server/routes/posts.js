import express from "express";
const router = express.Router();

import { getAllPosts, createPost, reactParty, reactLike, reactLit} from "../controller/posts.js";

router.get("/", getAllPosts);
router.post("/new", createPost);
router.patch("/party/:id", reactParty);
router.patch("/like/:id", reactLike);
router.patch("/lit/:id", reactLit);

export default router;
