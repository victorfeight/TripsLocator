var fs = require("fs");
var frontpageads = JSON.parse(
  fs.readFileSync("./data/frontpageads.json", "utf8")
);
// var blogposts = JSON.parse(fs.readFileSync("./data/blogposts.json", "utf8"));
const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
}

const renderIndex = (req, res, responseBody) => {
  let message = null;
  let pageTitle = process.env.npm_package_description + ' - Travel';
  if(!(responseBody instanceof Array)) {
    message = 'API Lookup Error';
  } else {
    if(!responseBody.length) {
      message = 'No blogposts in the database!'
    }
  }
  
  res.render('index', {
    title: pageTitle,
    index: true,
    frontpageads,
    blogposts: responseBody,
    message
  });
};

const index = (req, res) => {
  const path = '/api/blogposts';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  console.info('>> blogpostsController.blogpostsList calling ' + requestOptions.url);
  
  request(requestOptions, (err, { statusCode }, body) => {
    if(err) {
      console.error(err);
    }
    renderIndex(req, res, body)
  })
}

// const index = (req, res) => {
//   res.render("index", {
//     title: "Test Getaways",
//     index: true,
//     frontpageads,
//     blogposts,
//   });
// };

module.exports = {
  index,
};
