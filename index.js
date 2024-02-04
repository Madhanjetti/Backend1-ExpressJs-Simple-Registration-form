const express=require('express')

const bodyparser=require('body-parser')

const app=express();
app.use(bodyparser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.send("Hello world 1233")

});
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/sub/register',(req,res)=>{
    res.send(req.body.firstName+''+req.body.lastName)
})
app.listen(3000,()=>{
    console.log("Server running on port 3000")
})