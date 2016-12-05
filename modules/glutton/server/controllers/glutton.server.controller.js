'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Glutton = mongoose.model('Glutton'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create an glutton
 */
exports.create = function (req, res) {
 // TODO: implement glutton creation
 // USER CASE:
 // 1. create a glutton based on member info from request
 
};

/**
 * Show the current glutton
 */
exports.retrieve = function (req, res) {
  // TODO: implement retrieve
  // USER CASE:
  // 1. retrieve glutton based on url encoding
  // 2. retrieve glutton based on session id
  // 3. retrieve glutton based on gluId
};

/**
 * Update an glutton
 */
exports.update = function (req, res) {
  // TODO: implement glutton update
  // USER CASE:
  // 1. update glutton member
  // 2. update glutton location

};

/**
 * Delete an glutton
 */
exports.delete = function (req, res) {
  // TODO: implement glutton deletion
  // USER CASE:
  // 1. User decides to cancle the group
};

/**
 * List of gluttons
 */
exports.list = function (req, res) {
  // TODO: implement glutton list
  // USER CASE:
  // 1. Admin list all glutton info
  // 2. Statistical needs
  // 3. Potential for ads

};

/**
 * glutton middleware
 */
exports.gluttonByGluID = function (req, res, next, id) {
  // TODO: implement get glutton by gluId
  // USER CASE:
  // 1. retrieve glutton based on gluId
};
