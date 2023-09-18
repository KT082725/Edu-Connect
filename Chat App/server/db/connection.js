const mongoose = require('mongoose');

const url = "mongodb://0.0.0.0:27017/chatapp";

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))