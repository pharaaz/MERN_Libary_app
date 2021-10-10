// app.js
//The process order is super super super important,
//for example has to initialize app with express first
//then introduce model and route
//then set the path for heroku accordingly and connect to db
//then create middleware
//finally listen to port

const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require("body-parser");
const cors = require('cors');
const PORT = process.env.PORT || 8082;



const app = express();
// cors
app.use(cors());
app.use(express.json());//this one line really solves the problem!! where axios post was not working but 
//now it works like a charm

// routes
const articles = require('./routes/api/articles');

app.use('/api/articles',articles);


const path = require("path");


// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {

  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// Connect Database
connectDB();



//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));