const mongoose = require('mongoose');

const URI = process.env.DB_URI

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', ()=>{
    console.log('dataBase is connected')
})