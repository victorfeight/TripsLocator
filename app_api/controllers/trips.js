const mongoose = require("mongoose");
const model = mongoose.model('trips');
mongoose.set('debug', true);

// GET /trips -- list all the trips
const tripsList = async (req, res) => {
  model.find({}).exec((err, trips) => {
    if(!trips) {
      // if no trips, return an error
      return res.status(404).json({"message": "trip not found"});
    } else if (err) {
      // if error occurs, return it
      return res.status(404).json(err);
    } else {
      // if trips found, return trips
      return res.status(200).json(trips);
    }
  });
};

const tripsFindByCode = async (req, res) => {
  model.find({ 'code': req.params.tripCode })
    .exec((err, trip) => {
      if(!trip) {
        return res.status(404).json({"message": "trip not found"});
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json(trip);
      }
    });
};

module.exports = { 
  tripsList,
  tripsFindByCode
};
