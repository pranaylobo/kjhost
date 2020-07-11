const express = require('express')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
const cors = require('cors')
// var MongoClient = require('mongodb').MongoClient;
// const fetch = require("node-fetch");
const PORT = process.env.PORT || 3000;
const app = express();




const router = express.Router();
// app.use(cors());
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(cors({
origin: ['http://127.0.0.1:5501','http://127.0.0.1:5501'],
credentials: true
}));

// app.use(cookieParser());
// app.use(session({
//   secret: 'ssshhhhh',  
//   saveUninitialized: true,
//   resave: true,
// }));
app.use(bodyParser.json());







 app.get('/getresponse',function(req,res)
 {
    // your code 
// twilio account id from twilio dashboard/console


    // send response to js after executing your code

    res.send("get success");
 })


 app.post('/postresponse',function(req,res)
 {
    // your code 
    var request = require('request'); //bash: npm install request
// URL for request POST /message
var url = 'https://eu150.chat-api.com/instance148703/message?token=xai1hptod2l5jpud';
var data = {
    phone: '+918879953141', // Receivers phone
    body: 'i love you very much!', // Сообщение
};
// Send a request
request({
    url: url,
    method: "POST",
    json: data
});
    res.send("post success"+req.body.input);
 })



 app.listen(PORT,function()
 {
     console.log("hello hello me sun raha hu ")
 });
 
