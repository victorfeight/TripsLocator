var fs = require('fs');
var frontpageads = JSON.parse(fs.readFileSync('./data/frontpageads.json', 'utf8'));
var blogposts = JSON.parse(fs.readFileSync('./data/blogposts.json', 'utf8'));

const index = (req, res) => {
  res.render('index', {title: 'Test Getaways', index: true, frontpageads, blogposts});
};

module.exports = {
  index
};