    // contains routes
    const express = require('express')
    const DataModel = require('../models/dataModel');

    const router = express.Router();

    // create a post route 
    router.post('/data', async(req, res) =>{
        try{
            const newData = new DataModel(req.body);
            await newData.save();
            res.status(201).send(newData);
        }
        catch(error){
            res.status(400).send(error);
        }
    })

    module.exports = router;