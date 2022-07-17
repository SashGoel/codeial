const mongoose = require('mongoose');
const env = require('./environment');
mongoose.connect(`mongodb+srv://sakshi:sakshi@cluster0.xm6afuj.mongodb.net/?retryWrites=true&w=majority/${env.db}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to MongoDB'));

db.once('open', function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;