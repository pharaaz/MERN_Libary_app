// app.js

const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require("body-parser");
const cors = require('cors');
const PORT = process.env.PORT || 8082;


// routes
const books = require('./routes/api/books');


const app = express();

const path = require("path");

// cors
app.use(express.json());
app.use(cors());

// use Routes
app.use('/api/books', books);



// Step 1:
app.use(express.static(path.resolve(__dirname, "./my-app/build")));
// Step 2:
app.get("*", function (request, response) {

  response.sendFile(path.resolve(__dirname, "./my-app/build", "index.html"));
});


// Connect Database
connectDB();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.get('/', (req, res) => res.send('Hello world!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));