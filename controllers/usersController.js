const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('/',(req,res)=>{
        console.log("Rerouting to the /users home page");
    });
})

module.exports = router;