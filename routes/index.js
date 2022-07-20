const router = require('express').Router();
router.get('/',(req,res)=>{
    res.render('index');
    
})
router.get('/signup',(req,res)=>{
    res.render('signup')
})
router.get('/signin',(req,res)=>{
    res.render('signin')
})
router.get('/contact',(req,res)=>{
    res.render('contactUs')
})
router.get('/about',(req,res)=>{
    res.render('Aboutus')
})
router.get('/gallery',(req,res)=>{
    res.render('Gallery')
})

module.exports = router;