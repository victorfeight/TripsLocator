var fs = require('fs');
var aboutads = JSON.parse(fs.readFileSync('./data/aboutads.json', 'utf8'));


/* GET about view */
const about = (req, res) => {
    let pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('about', { title: pageTitle, about: true, aboutads });
};

module.exports = {
  about
};