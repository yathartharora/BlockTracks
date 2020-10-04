import server from 'next/dist/server';

const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
})

const productRouter = require('./routes/product');

app.use('/products', productRouter);

app.listen(port, () => {
    console.log(`Server is running  port : ${port}`);
});
