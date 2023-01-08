const express = require('express')
const addData = require('../src/model/addData')
const addContactRouter = express.Router()

addContactRouter.post('/',(req, res)=> {
    console.log(req.body);
    const item = {
        name: req.body.name,
        email: req.body.email
    }
    let contactData = addData(item)
    contactData.save().then((data) => {
        res.status(200).json({
            message: "route success"
        })
    }).catch((err) => {
        res.status(404).json({
            message: err.message
        })
    })
})
module.exports = addContactRouter