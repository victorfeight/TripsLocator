var fs = require('fs');
var allrooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));


/* GET about view */
const rooms = (req, res) => {
    let pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('rooms', { title: pageTitle, rooms: true, allrooms });
};

module.exports = {
  rooms
};