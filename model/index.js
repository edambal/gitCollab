const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/mongoose-assoc';

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connect', ()=> {
    console.log('mongodb connected')
});
mongoose.connection.on('error',()=>{
    console.log(error);
});

module.exports = {
    User: require('./User'),
    Bookmark: require('./Bookmark')
};