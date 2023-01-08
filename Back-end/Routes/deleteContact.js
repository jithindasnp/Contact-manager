const express = require('express')
const addData = require('../src/model/addData')
const deleteContactRouter = express.Router()

deleteContactRouter.delete('/:id', function (req, res) {
    // console.log(req.params.id);
    let id = req.params.id
    addData.findByIdAndDelete({ _id: id }).then(() => {
        res.status(200).json({
            message: "Contact deleted"
        })
    }).catch((err) => {
        res.status(200).json({
            message: err.message
        })
    })
})

module.exports = deleteContactRouter