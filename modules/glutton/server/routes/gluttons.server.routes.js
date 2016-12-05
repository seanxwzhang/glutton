'use strict';

/**
 * Module dependencies
 */
var gluttonsPolicy = require('../policies/gluttons.server.policy'),
  gluttons = require('../controllers/gluttons.server.controller');

module.exports = function (app) {
  // gluttons collection routes
  //TODO: design API routing for gluttons


  // Finish by binding the glutton middleware
  // app.param('gluttonId', gluttons.gluttonByID);
};
