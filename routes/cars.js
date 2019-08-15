// Our router module
const router = require('express').Router();

// Our controller
const CarsController = require('../controllers/carsController');

// Our routes
router.get(`/`, CarsController.index);
router.get(`/:id`, CarsController.show);
router.post(`/`, CarsController.create);
router.post(`/update`, CarsController.update);
router.post(`/destroy`, CarsController.destroy);

// We have to export our changes
module.exports = router;