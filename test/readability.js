var read = require('node-readability');

read('http://lingyu.wang/#/art/blog/2014/07/29/generator', function(err, article, meta) {
  // The main body of the page.
  console.log(article.content);
});