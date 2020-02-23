require('dotenv').config()

//Express Server 
const express = require ('express')
const app = express()
const port = 3000

// Connect with Mongo
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,  { useUnifiedTopology: true,useNewUrlParser: true  })
const db = mongoose.connection
db.on('error',function(error){console.error(error)})
db.once('open',function(){
    console.log('Database is connected.')
})
// JSON for Express
app.use(express.json())

// Setting Routes
const subcribersRouter = require('./routes/subscribers')
app.use('/subscribers',subcribersRouter)


// Listen to the port
app.listen(port,function(){
    console.log('Server is listening to port 3000')
})