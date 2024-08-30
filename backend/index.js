const express = require('express');
const app = express();
const dotenv = require('dotenv');
const router = express.Router();
const port = 8000;
const morgan = require('morgan');
const helmet = require("helmet");
const { default: mongoose } = require('mongoose');
const User = require("./models/userModal")
// const userModel = require('../models/userModel');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cors = require ("cors")

const noteModel = require('./models/noteModal');
let secret = "secret"

dotenv.config()


app.use(cors({
  origin:process.env.CLIENT_URL,
}));

// Middleware
app.use(express.json());
app.use(router)

// app.use(helmet());
app.use(morgan("common"));

// MongoDb Connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database connection is established");
    
}).catch(err=>{
    console.log("DB connection err" ,err);
    
})


// SIGNUP let secret = "secret";

/* GET home page. */
  router.post("/signUp", async (req, res) => {
    let { username, name, email, password } = req.body;
  
    let emailCon = await User.findOne({ email });
  
    if (emailCon) {
      return res.json({
        success: false,
        message: "Email already exists"
      });
    }
    else {
  
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
  
          let user = await User.create({
            username,
            name,
            email,
            password: hash
          });
  
          var token = jwt.sign({ email: user.email, userID: user._id }, secret);
  
          res.json({
            success: true,
            userID: user._id,
            message: "User created successfully",
            token: token
          });
  
        });
      });
  
    }
  
  });
  
  router.post("/login", async (req, res) => {
    let { email, password } = req.body;
  
    let user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          var token = jwt.sign({ email: user.email, userID: user._id }, secret);
          res.json({
            success: true,
            userID: user._id,
            message: "User logged in successfully",
            token: token
          });
        }
        else {
          res.json({
            success: false,
            message: "Password is incorrect"
          });
        }
  
      }
      )
    }
    else {
      return res.json({
        success: false,
        message: "Email Id Not Exist !"
      })
    }
  
  });
  
  router.post("/getNotes", async (req, res) => {
    let notes = await noteModel.find({ uploadedBy: req.body.userId });
    console.log(notes)
    if (notes.length > 0) {
      res.json(notes);
    }
    else {
      res.json({
        success: false,
        msg: "No Notes Found !"
      })
    }
  });
  
  router.post("/addNote", async (req, res) => {
    let { title, description, content, isImportant, uploadedBy } = req.body;
  
    let note = await noteModel.create({
      title,
      description,
      content,
      isImportant,
      uploadedBy
    });
  
    res.json({
      success: true,
      noteID: note._id,
      userID: uploadedBy
    });
  
  });
  
  router.post("/deleteNote", async (req, res) => {
    try {
      let { noteId } = req.body;
      console.log("Request body:", req.body);
  
      // Validate noteId
      if (!noteId) {
        return res.status(400).json({ success: false, message: "noteId is required" });
      }
  
      // Find the note
      let note = await noteModel.findOne({ _id: noteId });
      console.log("Note found:", note);
  
      if (!note) {
        return res.status(404).json({ success: false, message: "Note not found" });
      }
  
      // Add deletion logic if needed
      await noteModel.deleteOne({ _id: noteId });
  
      res.json({
        success: true,
        message: "Note deleted successfully"
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred"
      });
    }
  });
  
  router.post("/updateNote", async (req, res) => {
    try {
      let { noteId, title, description, content, isImportant, uploadedBy } = req.body;
    //   console.log("Request body:", req.body);
  
      // Validate noteId
      if (!noteId) {
        return res.status(400).json({ success: false, message: "noteId is required" });
      }
  
      // Find the note
      let note = await noteModel.findOne({ _id: noteId });
      console.log("Note found:", note);
  
      if (!note) {
        return res.status(404).json({ success: false, message: "Note not found" });
      }
  
      // Add deletion logic if needed
      await noteModel.updateOne({ _id: noteId }, {
        title,
        description,
        content,
        isImportant,
        uploadedBy
      });
  
      res.json({
        success: true,
        message: "Note updated successfully"
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred"
      });
    }
  });

  router.post("/getNote", async(req,res)=>{
    let {noteId} = req.body;
    let note = await noteModel.findOne({_id : noteId})
    if (note){
        res.json(note)
    }else{
       res.json({
        success:false,
        message :"No Note Found"
       })
    }
  })

//   Api for Users

router.post("/getUserDetails", async (req, res) => {
    let { userId } = req.body;
    let user = await User.findOne({ _id: userId });
    if (user) {
      res.json(user);
    }
    else {
      res.json({
        success: false,
        msg: "No User Found !"
      });
    }
  })

app.listen(port,()=>{
    console.log("App is listening on port " + port);
    
})