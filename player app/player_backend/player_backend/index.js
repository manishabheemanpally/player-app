const {connection}= require('./connection')
const express = require('express')
const bcrypt = require('bcrypt');
const cors = require('cors');



const app = express()
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 6010

app.get('/', function(req, res){
    res.send("Hello There")
})

// app.post('/addUser', async function(req,res){
//     const email = req.body.email;
//     const password = req.body.password;
//     const client= await connection()

//     const encPassword = bcrypt.hashSync(password, 10);
//     const dbName = "users_db"
//     const collectionName= "users"

//     const database = client.db(dbName)
//     const collection = database.collection(collectionName)

//     const data = {
//         uid: 1,
//         email : email,
//         password: encPassword
//     }
//     const insert = await collection.insertOne(data)
//     res.status(400).json({
//         msg: "Data Successfully Inserted",
//     })


// })
app.post('/insert_players', async function(req, res){
    const data= req.body.data;

    const client = await connection()

    const database = client.db('players_db')
    const collection = database.collection("players")
    try{
    const insert = await collection.insertMany(data)
    res.status(400).send("Data inserted")
    }
    catch(err){
        res.send(err)
    }
})
app.get("/players_data", async function(req, res){
    const client = await connection()
    const database = client.db('players_db')
    const collection = database.collection("players")
    try{
    const data = await collection.find({}).toArray()
    res.status(200).send(data)
    }
    catch(err){
        res.send(err)
    }
})
app.get("/players_data/:id", async function(req, res){
    const client = await connection()
    const id = parseInt(req.params.id) 
    const database = client.db('players_db')
    const collection = database.collection("players")
    try{
    const data = await collection.find({id:id}).toArray()
    res.status(200).send(data)
    }
    catch(err){
        res.send(err)
    }
})

app.listen(PORT)