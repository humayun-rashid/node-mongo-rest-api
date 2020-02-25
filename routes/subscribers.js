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


router.get('/:id',getSubscriber,function(req,res){
    res.json(res.subscriber)

})

async function getSubscriber(req,res,next){
    let subscriber
    try{
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null){
            return res.status(404).json({message: "Cant find the subscriber"})
        }

    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.subscriber = subscriber
    next()

}

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

router.patch('/',getSubscriber, async function(req,res){
    
})

router.delete('/:id',getSubscriber, async function(req,res){
    try {
        await res.subscriber.remove()
        res.json({ message: "Subscriber is deleted"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})



module.exports = router