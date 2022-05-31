const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// intialize gridFs storage
const methodOverride = require('method-override');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'));

const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
mongoose.connect(uri , ()=>{
    console.log('MongoDB connection established successfully');
})

app.use('/',require('./routes/bin'));


// create storage engine
const storage = new GridFsStorage({
    url: uri,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
})
const upload = multer({ storage });
const imageRouter = require('./routes/image');
app.use('/', imageRouter(upload));
app.listen(PORT , ()=>{
     console.log(`server started on `, PORT)
})