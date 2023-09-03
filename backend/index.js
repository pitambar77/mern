const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('db connected')
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age:Number,
    education:String,
    location:String,
    stream:String,
    experience:String,
    institute:String,
    program:String,
    country:String,
    goal:String,
    Listening:Number,
    reading:Number,
    speaking:Number,
    writing:Number,
    tuition:String,
    pay:Number,
    gic:String,
    amount:Number,
  });


  const User = mongoose.model('User', userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

//CRUD - CREATE

server.post('/demo',async (req,res)=>{
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.age =req.body.age;
    user.education = req.body.education;
    user.location = req.body.location;
    user.stream = req.body.stream;
    user.experience = req.body.experience;
    user.institute = req.body.institute;
    user.program = req.body.program;
    user.country = req.body.country;
    user.goal = req.body.goal;
    user.Listening = req.body.Listening;
    user.reading = req.body.reading;
    user.speaking = req.body.speaking;
    user.writing = req.body.writing;
    user.tuition = req.body.tuition;
    user.pay = req.body.pay;
    user.gic = req.body.gic;
    user.amount = req.body.amount;



    const doc = await user.save();

    // console.log(doc)
    res.json(doc);
})

//get data from database to fronted

server.get('/demo',async (req,res)=>{
    const docs = await User.find({})
    res.json(docs)
})

server.listen(8080,()=>{
    console.log("server stated")
})