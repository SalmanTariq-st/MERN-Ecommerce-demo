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



app.use(express.static('public'))
app.use(cors({
   origin: process.env.CORS_ORIGIN,
    credentials: true
}));



console.log('hello');

app.post('/',async(req,res)=>
{
    let data= req.body;


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

    let a=1

   const data= await Products.find()
    console.log(data)
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

(async()=>{
    await db()
    app.listen(PORT, function(err){
        
        console.log("Server listening on Port", PORT);
    });
})(); //Immediately invoked function expression (IIFE)
