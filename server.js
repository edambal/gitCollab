const express= require('express');
const app = express();
//Environment variables
require('dotenv').config();
const PORT = process.env.PORT;
app.set('view engine','ejs');

// -- Custm MOdules ----//
//Users Controller
const ctrl = require('./controllers');

// Middleware -----//


//--- routes -----//
app.get('/',(req,res)=>{
    res.send("Welcome to express bookmarks");
});

// app.use('/users',ctrl.users);
// app.use('/bookmarks',ctrl.bookmarks);

//----- Listener ---//
app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
})
