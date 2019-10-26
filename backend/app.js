const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const HotelRouter = require('./routers/hotels')
const RestoranRouter = require('./routers/restoran')

const cors = require("cors");
const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://farhod:7Q8SfcHx.F2J.HG@cluster0-uf7cc.mongodb.net/guide?retryWrites=true', { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected.');
    })
    .catch(err => console.log(err));

// mongoose.connect("mongodb://localhost:27017/ionic-test").then( () => {
//     console.log('Connected to database')
// })
// .catch( () =>{
//     console.log('Error in connected database')
// });

module.exports = { mongoose };


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, '../dist/online-pharmacy')))

app.use('/images', express.static(path.join("backend/images")));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-Width, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next()
});


app.use('/api/hotel/', HotelRouter);
app.use('/api/restoran/', RestoranRouter)

module.exports = app;
