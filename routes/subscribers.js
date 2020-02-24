const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

router.get('/',async function(req,res){
    try{
        const subscribers = await Subscriber.find()
        res.json(subscribers)

    } catch(err) {
        res.status(500).json({message:err.message})

    }
})

router.get('/:id', function(req,res){
    res.send(req.params.id)
})

router.post('/',async function(req,res){
    const subscriber = new Subscriber({
        name: req.body.name,
        subscriber: req.body.subscriber

    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)

    } catch(err){
        res.status(400).json({message: err.message})
    }
    
})

router.patch('/',function(req,res){
    
})

router.delete('/:id',function(req,res){
    
})



module.exports = router