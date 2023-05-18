var express = require('express');
var router = express.Router();
var videoController = require('../controllers/videos')

/* GET users listing. */
router.get('/', videoController.getVideos);
router.post('/', videoController.createVideos);
router.get('/:id', videoController.getVideo);
router.put('/:id', videoController.editVideo);
router.delete('/:id', videoController.deleteVideo);

module.exports = router;
