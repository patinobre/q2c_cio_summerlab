const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose
        .connect(db,{
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true
    });
    console.log('MongoDB Connected...')

    } catch (err) {
        console.error(err.message);
    
    }
};       



module.exports = connectDB;