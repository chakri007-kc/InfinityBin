const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    caption:{
        type: String,
        required: true
    },
    filename:{
        type: String,
        required: true
    },
    fileId :{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
},{
    collection: 'ImageData'
});

const Image = mongoose.model('Image', ImageSchema);
module.exports = Image;