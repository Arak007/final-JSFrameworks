const Car = require('../models/car');

exports.index = (req, res) => {
  Car.find()
    .then(cars => res.status(200).json(cars))
    .catch(err => res.status(404).send(err));
};


exports.show = (req, res) => {
  Car.findOne({
    _id: req.params.id
  })
    .then(car => res.status(200).json(car))
    .catch(err => res.status(404).json(err));
};


exports.create = async (req, res) => {
  Car.create(req.body)
    .then(() => res.status(200).json({ success: "New car created" }))
    .catch(err => res.status(404).json(err));
};


exports.update = (req, res) => {
  Car.updateOne({
    _id: req.body.id
  }, req.body, {
      runValidators: true
    })
    .then(() => res.status(200).json({ success: "Car updated" }))
    .catch(err => res.status(404).json(err));
};


exports.destroy = (req, res) => {
  Car.deleteOne({
    _id: req.body.id
  })
    .then(() => res.status(200).json({ success: "Car deleted" }))
    .catch(err => res.status(404).json(err));
};