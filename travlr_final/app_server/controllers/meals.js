var fs = require('fs');
var foods = JSON.parse(fs.readFileSync('./data/foods.json', 'utf8'));


/* GET meals view */
const meals = (req, res) => {
    let pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('meals', { title: pageTitle, meals: true, foods });
};

module.exports = {
  meals
};