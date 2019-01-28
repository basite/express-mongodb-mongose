const express = require('express')
const bodyParser = require('body-parser')
const route = express.Router()
const data_controller = require('../controller/data_controller.js')

route.get('/data', data_controller.all)
route.post('/data', data_controller.create)

module.exports = route