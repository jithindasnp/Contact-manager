const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jdjithin:maitexa2255@cluster0.me79b0j.mongodb.net/CONTACTDB?retryWrites=true&w=majority')

const schema = mongoose.Schema
const addContactSchema = new schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
})
let addData=mongoose.model('addData',addContactSchema)
module.exports=addData;