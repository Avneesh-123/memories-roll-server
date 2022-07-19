import express from 'express';
import {getPosts , getPost,createPosts, updatePost,deletePost,likePost} from '../Controller/posts.js';
import auth from '../middleware/auth.js';
const router= express.Router();


//http://localhost:8000/posts


router.get('/',getPosts);
router.post('/',auth,createPosts);
router.get('/:id',auth,  getPost);
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth, likePost);

export default router;