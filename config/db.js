const mongodb = require('mongodb').MongoClient;

const mongodb_Url='mongodb://localhost:27017/'

const connectDB = async () => {
    try {
        await mongodb.connect(mongodb_Url);
        console.log('connect to mongodb server')
    } catch (error) {
    
        console.error(error);
        process.exit(1);
    }
}
module.exports = connectDB;