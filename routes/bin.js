const router = require('express').Router();
const Bin = require('../models/binModel');

router.get('/bin',async(req,res)=>{
    const bins = await Bin.find();
    res.send(bins);
})

router.post('/postbin',async(req,res)=>{

    const {des,key} = req.body;
    if(key=='' || des==''){
        return res.json({status:'Please fill all the fields'});
    }
    const f = await Bin.findOne({key});
    if(f){
        return res.json({status:'key already exists'});
    }
    try{
        // Bin.createIndex({ "expireAt": 1 }, { expireAfterSeconds:30 });
        const bin = new Bin({
            des,
            key,
            // expireAt: Date.now()
            // expireAt: {expires:10}
        });
        const newBin = await bin.save();
        return res.json({status:'Added'});
    }
    catch(err){
        return res.json({status:'error'})
    }
})

router.post('/getbin',async(req,res)=>{
    const bin = await Bin.findOne({key: req.body.key})
    if(!bin){  
        return res.json({status:'key does not exist'});
    }
    
    res.json({bin,status:'ok'});
})


module.exports = router;