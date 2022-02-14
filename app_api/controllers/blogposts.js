const mongoose = require("mongoose");
const model = mongoose.model('blogposts');
mongoose.set('debug', true);

// GET /trips -- list all the trips
const blogpostList = async (req, res) => {
  model.find({}).exec((err, blogposts) => {
    if(!blogposts) {
      // if no blogposts, return an error
      return res.status(404).json({"message": "trip not found"});
    } else if (err) {
      // if error occurs, return it
      return res.status(404).json(err);
    } else {
      // if trips found, return trips
      return res.status(200).json(blogposts);
    }
  });
};

module.exports = { 
  blogpostList,
};