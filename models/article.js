// models/Article.js

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    //title of the article
    type: String,
    required: true
  },
  isbn: {
    //isbn of the article 
    type: String,
    required: true
  },
  author: {
    //author of the contents
    type: String,
    required: true
  },
  description: {
    //short description of the article
    type: String
  },
  content:{
    //the contents of the article
    type: String
  },
  uploader:{
    //who is the uploader
    type: String,
    require: true
  },
  uploadDate:{
    //when does the uploader tried to upload to system
    type: Date,
    default: Date.now
  },
  uploadAcceptDate:{
    //when does the request been accepted from queue by analyzer
    type: Date,
    require: Date.now
  },
  type:{
    type: String,
    require: true
  },
  rate:{
    type: String,
  },
  rateSum:{
    type: String,
  },
  rateTimes:{
    type: String,
  }


  
});

module.exports = Article = mongoose.model('article', ArticleSchema);