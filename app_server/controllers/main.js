var fs = require("fs");
var frontpageads = JSON.parse(
  fs.readFileSync("./data/frontpageads.json", "utf8")
);

const index = (req, res) => {
  pageTitle = process.env.npm_package_description + " - Contact"; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
  res.render("index", { title: pageTitle, frontpageads, index: true });
};

module.exports = {
  index,
};
