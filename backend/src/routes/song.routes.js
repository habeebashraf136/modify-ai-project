const express = require('express');
const router = express.Router();
const songController = require('../controllers/song.controller');
const upload = require('../middleware/upload.middleware');



router.post('/',upload.single('song'), songController.uploadSong);

router.get('/', songController.getSong);

router.get('/allsong',songController.getAllSong);






module.exports = router;