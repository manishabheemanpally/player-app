const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://joshisantosh7878:9779345461saj99@cluster0.8zescpp.mongodb.net/?retryWrites=true&w=majority";


const connection = async ()=>{
    const client = new MongoClient(uri)
    await client.connect();
    return client
}
module.exports={
    connection,
}