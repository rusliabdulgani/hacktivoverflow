const Articles = require('../models/articles');

module.exports = {
  getAllArticles: (req, res) => {
    Articles.find()
    .then( data => {
      res.send(data)
    })
    .catch( err => {
      res.send(err)
    })
  },
  getArticlesById: (req, res) => {
    Articles.findById(req.params.id)
    .then( data => {
      res.send(data)
    })
    .catch( err => {
      res.send(err)
    })
  },
  createArticle: (req, res) => {
    Articles.create({
      name: req.body.name,
      content: req.body.content,
      category: req.body.category
    })
    .then( data => {
      res.send(data)
    })
    .catch( err => {
      res.send(err)
    })
  },
  updateArticle: (req, res) => {
    Articles.findOneAndUpdate({
      _id: req.params.id
    },{
      name: req.body.name,
      content: req.body.content,
      category: req.body.category
    })
  },
  deleteArticle: (req, res) => {
    Articles.remove({
      _id: req.params.id
    })
    .then( data => {
      res.send(data)
    })
    .catch( err => {
      res.send(err)
    })
  }
}
