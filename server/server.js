
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes =  require('./routes/main.js');
const server = express();

// parse application/json
server.use(express.json());
server.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
server.use(cookieParser());
server.use(bodyParser.urlencoded({extended: true}));
server.use(session({
    key: 'userSession',
    secret: 'team workshope project angular',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1000 * 60 * 60 * 24,
    }
}));
server.use("/", routes.main);
const database = "mongodb://admin:mkahms@localhost:27017/todoApp?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const port = process.env.PORT || 8080;

mongoose
    .connect(database, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => {
        server.listen(port, () => console.log(`Server and Database running on ${port}, http://localhost:${port}`));
    })
    .catch((err) => {
        console.log(err);
    });


