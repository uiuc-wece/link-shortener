const mongoose = require('mongoose');
const db = "mongodb+srv://ellie-wece:popoca55@cluster0.dvsku.gcp.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
        useNewUrlParser: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    }

module.exports = connectDB;