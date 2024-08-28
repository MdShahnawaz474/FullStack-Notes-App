const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
  title: String,
  description:String,
  content:String,
  isImportant:Boolean ,
  uploadedBy: String,
  date:{
    type : Date,
    default: Date.now
  } 
})

mongoose.model("Notes", noteSchema)

module.exports = mongoose.model("Notes")