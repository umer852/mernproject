const mongoose = require("mongoose");

mongoURL = 'mongodb+srv://luxurystay_hospitality:luxury123@cluster0.aqv6ddw.mongodb.net/Luxury_Rooms?retryWrites=true&w=majority';

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true})

connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('Mongodb connection failed ❌')
})

connection.on('connected' , ()=>{
    console.log('Mongodb connection successful ✅')
})

module.export = mongoose;
