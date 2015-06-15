var comments = [
  {
    id: 1,
    text: "I don't like bananas",
    post: 1
  },
  {
    id: 2,
    text: "I love bananas",
    post: 1
  }
];

module.exports = function(app) {
  var express = require('express');
  var commentsRouter = express.Router();
  var bodyParser = require('body-parser');
  app.use(bodyParser.json() );
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  commentsRouter.get('/', function(req, res) {
    res.send({
      'comments': comments
    });
  });

  commentsRouter.post('/', function(req, res) {
    console.log(req.params);
    console.log("server-side comment post");
    res.status(201).end();
  });

  commentsRouter.get('/:id', function(req, res) {
    res.send({
      'comments': {
        id: req.params.id
      }
    });
  });

  commentsRouter.put('/:id', function(req, res) {
    console.log(req.params);
    res.send({
      'comments': {
        id: req.params.id
      }
    });
  });

  commentsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/comments', commentsRouter);
};
