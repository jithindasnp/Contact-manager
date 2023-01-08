const express = require('express')
const addData = require('../src/model/addData')
const updateContactRouter = express.Router()


updateContactRouter.get('/view/:id', function (req, res) {
    let id = req.params.id
    addData.findById(id).then((result) => {
        res.json({
            data: result
        })
    })

})

updateContactRouter.post('/', function (req, res) {

    let id = req.body.id

    console.log(id);

    const item = {
        name: req.body.name,
        email: req.body.email
    }
    console.log(item);
    addData.updateOne({ _id: id }, { $set: item }).then((data) => {
        res.status(200).json({
            updated: data,
            message: "Contact updated"
        })
    }).catch((err) => {
        res.status(200).json({
            message: err.message
        })
    })

})

module.exports = updateContactRouter