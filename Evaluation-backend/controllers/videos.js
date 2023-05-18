const videoModel = require('../model/videos');


const getVideos = async function(req, res, next) {
  //  res.send('this is controllers page')
  await videoModel.find({})
 
    .then((data)=>res.send(data))
     .catch((err)=>res.send(err))
}

const getVideo = async function(req, res, next) {
    //  res.send('this is controllers page')
    const id = req.params.id;
    await videoModel.findById(id)
   
      .then((data)=>res.send(data))
       .catch((err)=>res.send(err))
  }

const createVideos = async function(req, res, next) {
    const newVideo = videoModel.create(req.body) 
    try {
        res.send(newVideo)
    }
    catch(err) {
        res.send(err)
    }
}

const editVideo = async function(req, res, next) {
    const id = req.params.id;
    const body = req.body;

    videoModel.findByIdAndUpdate(id, body)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

const deleteVideo = async function(req, res, next) {
    id = req.params.id
    videoModel.findByIdAndDelete(id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports = {getVideos, getVideo, createVideos, deleteVideo, editVideo}