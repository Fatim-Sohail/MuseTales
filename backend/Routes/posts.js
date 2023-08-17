import express from "express";
import { getPosts } from "../Controllers/posts.js";
import { createPost } from "../Controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost)

export default router;