const express = require('express')
const router = express.Router()
const db = require('../models/user-model')



// get routes

router.get('/',(req,res) =>{
    res.send("<h1>I Work</h1>")
})

router.get('/all',(req,res)=>{
    db.getAll()
    .then(users => {
        res.status(200).json({users})
    })
    .catch(err => {res.status(500).json({message:err.message})})
    
})

module.exports = router