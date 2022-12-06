const router = require('express').Router();
const Image = require('../models/imageModel');
const uri = process.env.ATLAS_URI;
const mongoose = require('mongoose');

module.exports = (upload) => {

    const url = uri;
    const connect = mongoose.createConnection(url , { useNewUrlParser: true, useUnifiedTopology: true });
    let gfs;
    connect.once('open', () => {
        //intialize stream
        gfs = new mongoose.mongo.GridFSBucket(connect.db, {
            bucketName: 'uploads'
        })
    })

    router.post('/postfile', upload.single('file'), async(req, res) => {
        const file = req.file
        const caption = req.body.caption
        console.log(file)
        const data = await Image.findOne({ caption })
        if (data) {
            return res.json({success: false,status: 'File already exists'})
        }

        const newImage = new Image({
            caption: caption,
            filename: file.filename,
            fileId: file.id
        })
        newImage.save()
        .then(() => {
            return res.json({success: true,status: 'File Uploaded Successfully'})
        })
        .catch(err=>{
            return res.json({err,success: false,status: 'File Upload Failed'})
        })
        
    })

    router.get('/getimage/:caption', async(req, res) => {
        // console.log(gfs)
        const val = await Image.findOne({caption: req.params.caption})
        // console.log(val)
        if(!val){
            return res.json({success: false,status: 'File does not exist'})
        }
        const file = await gfs.find({
            filename: val.filename
        })
        file.toArray((err, files) => {
            // console.log(files)
            if (!files || files.length === 0) {
                return res.json({
                    success: false,
                    err: 'No file exists'
                })
            }
            // return res.json(files[0])
            if(files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png' || files[0].contentType === 'image/gif'){
                gfs.openDownloadStreamByName(files[0].filename).pipe(res);
            }
            else{
                res.json({success: false,status: 'Not an image'})
            }
        })




        // gfs.find({filename : val.filename}).toArray((err, files) => {
        //     console.log(files)
        //     if (!files[0] || files.length === 0) {
        //         return res.json({
        //             success: false,
        //             message: 'No files available',
        //         });
        //     }

        //     res.json({
        //         success: true,
        //         file: files[0],
        //     });
        // });

    })


    router.get('/getvideo/:caption', async(req, res) => {
        // console.log(gfs)
        const val = await Image.findOne({caption: req.params.caption})
        // console.log(val)
        if(!val){
            return res.json({err: 'No file exists'})
        }
        const file = await gfs.find({
            filename: val.filename
        })


        file.toArray((err, files) => {
            console.log(files)
            if (!files || files.length === 0) {
                return res.json({
                    success: false,
                    err: 'No file exists'
                })
            }
            // return res.json(files[0])

            if(files[0].contentType === 'video/mp4' || files[0].contentType === 'video/webm'){
                gfs.openDownloadStreamByName(files[0].filename).pipe(res);
            }
            else{
                res.json({err: 'Not an video'})
            }
        })
        
    })




    return router;
}