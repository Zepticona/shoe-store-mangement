const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'})

const app = require("./app");

const db = process.env.DB_URI.replace('<password>', process.env.DB_PASS);

const connectToDB = async () => {
    try {
        const res = await mongoose.connect(db, {useNewUrlParser: true});
        console.log('Database connection established');
    } catch(err) {
        console.log(err);
    }
}
connectToDB();
console.log(db);

const port = 8080;
app.listen(process.env.PORT || port, () => console.log('Listening on port' + port));