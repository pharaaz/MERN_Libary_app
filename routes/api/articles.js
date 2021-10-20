// routes/api/articles.js

const express = require('express');
const router = express.Router();

// Load Article model
const Article = require('../../models/article.js');

// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('article route testing!'));

// @route GET api/articles
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Articles found' }));
});


// @route GET next api/articles
// @description Get next article for analysing
// @access Public
router.get('/findNextArticle', (req, res) => {
  Article.findOne({"type": 'processing'})
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Article found to analyze' }));
});

// @route GET api/articles/:q1 as queried
// with query
// @description Get articles that satisfied query
// @access Public
router.get('/search/:q1', (req, res) => {
  //split query string by &
  let s=[];
  let searchQuery;
  s = req.params.q1.split('&');
  if(s[0] != '' && s[1] != '' && s[2] != ''){
    searchQuery = {"title": s[0], "isbn": s[1], "author": s[2], "type": 'accepted'};
  }else if(s[0] == '' && s[1] == '' && s[2] == ''){
    searchQuery = {"type": 'accepted'};
  }else if(s[0] != '' && s[1] == '' && s[2] == ''){
    searchQuery = {"title": s[0], "type": 'accepted'};
  }else if(s[0] == '' && s[1] != '' && s[2] == ''){
    searchQuery = {"isbn": s[1], "type": 'accepted'};
  }else if(s[0] == '' && s[1] == '' && s[2] != ''){
    searchQuery = {"author": s[2], "type": 'accepted'};
  }else if(s[0] != '' && s[1] != '' && s[2] == ''){
    searchQuery = {"title": s[0], "isbn": s[1], "type": 'accepted'};
  }else if(s[0] != '' && s[1] == '' && s[2] != ''){
    searchQuery = {"title": s[0], "author": s[2], "type": 'accepted'};
  }else if(s[0] == '' && s[1] != '' && s[2] != ''){
    searchQuery = {"isbn": s[1], "author": s[2], "type": 'accepted'};
  }
  
  //searchQuery = {"title": s[0],"author":s[1]};
  Article.find(searchQuery)
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Articles found' }));
});

router.get('/moderatorSearch/:q1', (req, res) => {
  //split query string by &
  let s=[];
  let moderatorSearchQuery;
  s = req.params.q1.split('&');
  if(s[0] != '' && s[1] != '' && s[2] != ''){
    moderatorSearchQuery = {"title": s[0], "isbn": s[1], "author": s[2], "type": 'pending'};
  }else if(s[0] == '' && s[1] == '' && s[2] == ''){
    moderatorSearchQuery = {"type": 'pending'};
  }else if(s[0] != '' && s[1] == '' && s[2] == ''){
    moderatorSearchQuery = {"title": s[0], "type": 'pending'};
  }else if(s[0] == '' && s[1] != '' && s[2] == ''){
    moderatorSearchQuery = {"isbn": s[1], "type": 'pending'};
  }else if(s[0] == '' && s[1] == '' && s[2] != ''){
    moderatorSearchQuery = {"author": s[2], "type": 'pending'};
  }else if(s[0] != '' && s[1] != '' && s[2] == ''){
    moderatorSearchQuery = {"title": s[0], "isbn": s[1], "type": 'pending'};
  }else if(s[0] != '' && s[1] == '' && s[2] != ''){
    moderatorSearchQuery = {"title": s[0], "author": s[2], "type": 'pending'};
  }else if(s[0] == '' && s[1] != '' && s[2] != ''){
    moderatorSearchQuery = {"isbn": s[1], "author": s[2], "type": 'pending'};
  }
  

  Article.find(moderatorSearchQuery)
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Articles found' }));
});

// @route GET api/articles/:id
// @description Get single article by id
// @access Public
router.get('/:id', (req, res) => {
  Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Article found' }));
});

// @route GET api/articles
// @description add/save article
// @access Public
router.post('/', (req, res) => {
  Article.create(req.body)
    .then(article => res.json({ msg: 'Article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});

// @route GET api/articles/:id
// @description Update article
// @access Public
router.put('/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then(article => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/articles/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Article.findByIdAndRemove(req.params.id, req.body)
    .then(article => res.json({ mgs: 'Article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such am article' }));
});

module.exports = router;