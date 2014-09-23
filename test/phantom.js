var page = require('webpage').create();
page.open('http://lingyu.wang/', function() {
  page.render('lingyu.png');
  phantom.exit();
});