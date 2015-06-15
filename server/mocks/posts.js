if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}


var posts = [
  {
    id: 1,
    title: 'Bananas',
    date: new Date(2015, 5, 6),
    body: 'yellow',
    comments: [1,2]
  },
  {
    id: 2,
    title: 'Apples',
    date: new Date(2015, 4, 16),
    body: 'red',
    comments: []
  }
];

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
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': posts,
      'comments': comments
    });
  });

  postsRouter.post('/', function(req, res) {
    console.log(req.params);
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'post': posts.find(function(post) {
        return post.id == req.params.id
      }),
      // 'comments': comments
    });
  });

  postsRouter.put('/:id', function(req, res) {
    console.log("called 'put' on server");
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    console.log("called 'delete' on server");
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
