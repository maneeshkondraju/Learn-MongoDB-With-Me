const connectionDB = require('./config/db');

async function Connection(){
    const db = await connectDB();
    const collection = await db.createcollection('products');


    const product = await collection.insertOne({
        productName: 'Iphone 18',
        price: 180000,
    });
    console.log(product);
}

Connection();
