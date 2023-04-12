const express = require('express')
const shoeRouter = require('./shoesRoute')
const saleRouter = require('./saleRouter')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("This is the first middleware");
    next();
})

app.get("/", (req, res) => {
    res.send("App started successfully.");
})

app.use('/api/v1/shoes', shoeRouter);
app.use('/api/v1/sales', saleRouter);

module.exports = app;