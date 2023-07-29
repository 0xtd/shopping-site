const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');

const app = express();
const mongodbURI = process.env.MONGODB_URI;

mongoose.connect(mongodbURI);


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Connection Error =>')) 
db.once('open', () => {
    console.log('Connected to DB successfully!');
});

// app.get("/", function(req,res){
//     res.send("Hello there!");
// });
app.use(express.json());
app.use(productRouter);
app.use(userRouter);

app.listen(5001, "0.0.0.0", () => {
    console.log("Server started at port 5001");
});

