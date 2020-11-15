const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/f88_education', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log('connect susessfully!!!');
    } catch (error) {
        console.log('Connect feill !!!');
    }
}
module.exports = { connect };
