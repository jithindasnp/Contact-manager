const express = require('express')
const addData = require('../src/model/addData')
const viewContactRouter = express.Router()

viewContactRouter.get('/', function (req, res) {
    addData.find().then((result) => {
        res.json({
            data: result
        })
    })

})

module.exports = viewContactRouter