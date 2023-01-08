const express = require('express')
const addContactRouter = require('./Routes/AddContact')
const deleteContactRouter = require('./Routes/DeleteContact')
const updateContactRouter = require('./Routes/UpdateContact')
const viewContactRouter = require('./Routes/ViewContact')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/addContact', addContactRouter)

app.use('/api/viewContact', viewContactRouter)

app.use('/api/delete', deleteContactRouter)

app.use('/api/update', updateContactRouter)




app.listen(3001, () => {
    console.log("server running at port 3001")
})