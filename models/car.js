// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const CarSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  type: {
    type: String,
    enum: ['SUV', 'SEDAN', 'COMMERCIAL', 'COUPE', 'HATCHBACK', 'VAN'],
    default: 'SUV'
  }
}, {
    timestamps: true
  });

// Exporting our Car model
module.exports = mongoose.model('Car', CarSchema);