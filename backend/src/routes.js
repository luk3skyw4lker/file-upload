const router = require('express').Router();
const multer = require('multer');

const PostController = require('./controllers/PostController');
const uploadConfig = require('./config/multer');

const multerMid = multer(uploadConfig).single('file');

router.post('/posts', multerMid, PostController.store);
router.get('/posts', PostController.index);
router.delete('/posts/:id', PostController.delete);

module.exports = router;
