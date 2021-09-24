const express = require('express')
const router = express.Router()
const db = require('../models/scanners-model')



/*              Scanner Router                */


router.get('/scanners/all',(req,res) => {
    db.getAll()
      .then(scanners => {
          res.status(200).json({scanners})
      })
      .catch(err => {res.status(500).json({message:err.message})
      })
})

router.post('/scanners/bysku',(req,res) => {
    const sku = req.body.sku
    db.getBySku(sku)
        .then(scanner =>{
            res.status(200).json({scanner})
        })
      .catch(err => {
          res.status(500).json({message:err.message})
      })  
})
router.post('/scanners/add',(req,res) => {
    const sku = req.body.sku
    const scanner = {sku:sku}
    db.add(scanner)
        .then(scanner => {
            res.status(200).json({scanner})
        })
        .catch(err => {
            res.status(500).json({message:err.message})
        })
})

router.delete('/scanners/remove',(req,res) => {
    const sku = req.body.sku
    db.remove(sku)
    .then(
        res.status(204).json({message:"Scanner deleted"})
    )
    .catch(err => {res.status(500).json({message:err.message})})
})
module.exports = router