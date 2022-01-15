var fs = require('fs');
var contactlist = JSON.parse(fs.readFileSync('./data/contactlist.json', 'utf8'));


/* GET travel view */
const contact = (req, res) => {
    let pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('contact', { title: pageTitle, contact: true, contactlist });
};

module.exports = {
  contact
};