const mongoose = require('mongoose');

const {Schema, model,connect } = mongoose;

connect('mongodb+srv://Alter:12345@cluster0.scjvy.mongodb.net/test')
.then(db => console.log('db  esta conectado'))
.catch(err => console.error(err))

var schema = new Schema({
    titulo:String,
   mensaje:String,

 
  });
  
  
  module.exports = model("mensajes", schema);