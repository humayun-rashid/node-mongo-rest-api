const express = require('express')
const router = express.Router()

router.get('/',function(req,res){
    res.send('This is router get request.')
})

router.get('/:id',function(req,res){
    res.send(req.params.id)
})

router.post('/',function(req,res){
    
})

router.patch('/',function(req,res){
    
})

router.delete('/:id',function(req,res){
    
})



module.exports = router