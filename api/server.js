   
const express = require('express')
const usersRouter = require('../routes/usersRouter')
const scannerRouter = require('../routes/scannerRouter')
const helmet = require('helmet')
const cors = require('cors')
const server = express()
server.use(helmet())
server.use(express.json())
server.use(cors())

server.use(logger)
function logger(req, res, next) {
    const method = req.method;
    const url = req.url;
    const time = new Date().toISOString();
    console.log(`a ${method} request to ${url} was made at ${time} o'clock.`)
    next()
  };
  server.use('/db',usersRouter)
  server.use('/db',scannerRouter)
  
module.exports = server