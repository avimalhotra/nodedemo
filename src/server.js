const express=require("express");
const path=require("path");
const nunjucks=require("nunjucks");
const app=express();
const dotenv=require('dotenv').config();


app.use(express.static(path.resolve(__dirname,'public')));

// configure
nunjucks.configure(path.resolve(__dirname,'public/views'),{
    express:app,
    autoscape:true,
    noCache:false,
    watch:true
}); 

app.get("/",(req,res)=>{
    //res.send("hi");
    res.render('index.html',{});
});

app.listen(process.env.PORT,()=>{
    console.log("express server running on ",process.env.PORT);
});
