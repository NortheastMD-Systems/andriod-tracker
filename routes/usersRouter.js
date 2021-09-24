const express = require('express')
const router = express.Router()
const db = require('../models/user-model')



/*             Users Router                     */



router.get('/users/all',(req,res)=>{
    db.getAll()
    .then(users => {
        res.status(200).json({users})
    })
    .catch(err => {res.status(500).json({message:err.message})})
    
})
router.post('/users/byname',(req,res) => {
    const name = req.body.name
    db.getByName(name)
        .then(user => {
            res.status(200).json({user})
        })
        .catch(err =>{res.status(500).json({message:err.message})})
})
router.post('/users/byid',(req,res) => {
    const userid = req.body.userid
   
    db.getById(userid)
        .then(user => {
            res.status(200).json({user})
        })
        .catch(err => {res.status(500).json({message:err.message})})
})
router.post('/users/add',(req,res) => {
    const name = req.body.name
    const id = req.body.userid
  const user = {
      name:name,
      userid:id
  }

    db.add(user)
        .then(user => {
            res.status(200).json({user})
        })
        .catch(err => {res.status(500).json({message:err.message})})
})
router.delete('/users/remove', (req,res) => {
    const userid = req.body.userid
    db.remove(userid)
    .then(
        res.status(204).json({message:'User deleted'})
    )
    .catch(err => {res.status(500).json({message:err.message})})
})





module.exports = router