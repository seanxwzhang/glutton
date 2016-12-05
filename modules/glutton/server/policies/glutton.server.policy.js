'use strict';

/**
 * Module dependencies
 */
var acl = require('acl');

// Using the memory backend
// TODO: change it to non-volatile storage, priority: low  
acl = new acl(new acl.memoryBackend());

/**
 * Invoke Articles Permissions
 */
exports.invokeRolesPolicies = function () {
  // TODO: implement Glutton policies based on different roles
  // e.g. Admin could have a dashboard backend to view all online voting
};

/**
 * Check If Glutton Policy Allows
 */
exports.isAllowed = function (req, res, next) {
 // TODO: design and implement glutton policies
};
