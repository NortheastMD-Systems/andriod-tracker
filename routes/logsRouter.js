const express = require('express')
const router = express.Router()
const db = require('../models/logs-model')
const uDb = require('../models/user-model')
const sDb = require('../models/scanners-model')
let date_ob = new Date()

let day = ("0" + date_ob.getDate()).slice(-2) 
let month = (date_ob.getMonth() +1)
let year = date_ob.getFullYear()
let hours = date_ob.getHours()
let minutes = date_ob.getMinutes()
let seconds = date_ob.getSeconds()

let timeStamp = (month + "-" + day + "-" + year +  " " + hours + ":" + minutes +":" + seconds).toString()


router.get('/logs/all', (req,res) => {
    db.getAll()
    .then(logs => {
        res.status(200).json({logs})
    })
    .catch(err => {
        res.status(500).json({message:err.message})
    })
})

router.post('/logs/checkout', async (req,res) => {
    const uName = req.body.userName
    const sku = req.body.sku
    console.log(sku,uName)
    const scanId = await sDb.getBySku(sku)
    const userId = await uDb.getByName(uName)
    const logs = {
        time_out:timeStamp,
        scanner_id:scanId.id,
        user_id:userId[0].id
    }
    db.checkOut(logs)
        .then(logs =>{
            res.status(200).json({logs})
        })
        .catch(err => {
            res.status(500).json({message:err.message})
        })
})

router.post('/logs/checkin',(req,res) =>{
    const time = timeStamp
    const id = req.body.id
    const changes ={
        id:id,
        time_in:time
    }
    
    db.checkIn(changes)
        .then(logs => {
            res.status(200).json({logs})
        })
        .catch(err => {
            res.status(500).json({message:err.message})
        })

})

module.exports = router