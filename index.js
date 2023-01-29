const express = require('express');
require("dotenv").config()
const app = express();
const cors = require('cors');
const db= require('./DB connection/connection');
var bodyParser = require('body-parser')
const Products=require('./DB connection/models')
const path = require('path');
// const img=require('database.png')


app.use( bodyParser.json() );  

// app.use('/c',express.static(__dirname+'/base.png'));

app.use(express.static('public'))
// CORS_ORIGIN="http://localhost:3000"
app.use(cors({
   origin: process.env.CORS_ORIGIN,
    // origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// app.use(cors);

console.log('hello');

app.post('/',async(req,res)=>
{
    let data= req.body;
    // console.log(req);
    // var bodyStr = '';
    // req.on("data",function(chunk){
    //     bodyStr += chunk.toString();
       
    // }); 
    // console.log(bodyStr.toString())


    console.log(data.name)
    const product=new Products({ name: req.body.name, price: req.body.price,imgName:req.body.imgName})
    try
    {
        await product.save();
        res.status(201).send('Yes');
    }
    catch (err)
    {
       res.send('no')
    }
})

app.get('/getPic',async (req, res) => {
    // res.send('Hello World!'); 
    // const {abc}= req.body.data;
    // console.log(req.params);
    // const pathname = path.join('/base.png');
    // res.send('database.png');
    //  res.send('ac');
    // res.send(`<img src=${pathname}></img>`)

    // res.set({'Content-Type': 'image/png'});
    // console.log(pathname)
    // res.send(pathname)
    // let data={}
    let a=1

   const data= await Products.find()
    console.log(data)
    // res.send(data)
    console.log(data.length)
    res.status(200).send(data);


});

app.get('/a',(req,res)=>{
    Products.find(((err,docs)=>{
        if(!err)
        {
            res.send(docs)
            console.log(docs)
        }
    }))

} );
var PORT = 5000;
// db.once('open', function() {
//     // we're connected!
//     console.log('connected');
//   });
(async()=>{
    await db()
    app.listen(PORT, function(err){
        
        console.log("Server listening on Port", PORT);
    });
})(); //Immediately invoked function expression (IIFE)