var fs = require('fs');
var latestnews = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));
var tips = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));


/* GET about view */
const news = (req, res) => {
    let pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('news', { title: pageTitle, news: true, latestnews, tips });
};

module.exports = {
  news
};