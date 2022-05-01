const mongoose = require('mongoose');

const Bin = new mongoose.Schema(
    {
        des:{
            type: String,
            required: true
        },
        key:{
            type: String,
            required: true
        },
        // expireAt:{
        //     type: Date,
        //     expires:  5,
        //     // expires:{
        //     //     type: Number,
        //     //     default: 1
        //     // },
        //     default: Date.now
        // }
    },{
        collection: 'bindata'
    }
)

const model = mongoose.model('BinData',Bin);
module.exports = model;
