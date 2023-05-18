const mongoose = require('mongoose');
const { Schema } = mongoose;


const videoSchema = new Schema({
    title : String,
    posterurl : String,
    videourl : String,
    duration : String,
    date : String,
    time : String
})

const Videolist = new mongoose.model('videolists', videoSchema);

module.exports = Videolist;

