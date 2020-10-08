const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("sneding abck the router response");
})

module.exports = router;