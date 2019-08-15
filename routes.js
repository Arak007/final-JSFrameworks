// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const carRoutes = require('./routes/cars');

// Registering our pageRoutes
// app.use('/', pageRoutes);
app.use('/cars', carRoutes);

// Exporting the changes
module.exports = app;