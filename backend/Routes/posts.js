import express from 'express';

import { getPosts, getPost, getLikedPosts, getPostsBySearch , createPost, updatePost, commentPost, likePost, deletePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();

// router.get('/', getPosts);
// router.post('/', createPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/search', getPostsBySearch);
router.get('/likedPosts/:id', getLikedPosts); 

router.post('/', auth, createPost);
router.post('/:id/commentPost', auth, commentPost);

router.patch('/:id', auth, updatePost);
router.patch('/:id/likePost', auth, likePost);

router.delete('/:id', auth, deletePost);

export default router;