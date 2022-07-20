const express = require('express');
const path = require('path')
const mainRoutes = require('./routes/index')
const app = express();
let loggedIn = 0;
require("./db/connection");
const Register = require('./models/signup');
const port  = process.env.PORT ||  3000;
app.set('view engine','ejs')
app.use('/public',express.static('public'))
app.use(mainRoutes);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.post("/signup", async (req,res)=>{
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        if(password === cpassword){
            const customer = new Register({
                email : req.body.email,
                fullname:req.body.fullname,
                password:req.body.password,
                cpassword:req.body.cpassword
            })
           const registed =  await customer.save();
           res.status(201).render('signin');

        }else{
            res.send("password are not matched")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/signin', async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const userEmail = await Register.findOne({email:email})
        if(userEmail.password === password){
            loggedIn = 1;
            res.status(201).render('index_af_signin')
        }else{
            res.send("password not matching")
        }
    } catch (error) {
        res.status(400).send("email invalid")
    }
})
    app.get('/order',(req,res)=>{
        if(loggedIn === 1){
            res.render('order')
        }else{
            res.render('signin')
        }
    })

    app.get('/signout',(req,res)=>{
        loggedIn = 0;
        res.render('index')
    })
app.listen(port,()=>{
    console.log("it's work");
})