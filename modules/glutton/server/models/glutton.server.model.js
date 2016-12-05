'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  autoIncrement = require('mongoose-auto-increment');
  Schema = mongoose.Schema;

/**
 * Glutton Schema
 */
// TODO: research if there's a way to compress default _id to reduce data redundency
var GluttonSchema = new Schema({
  _id: ObjectId,
  created: {
    type: Date,
    default: Date.now
  },
  member: [{name: String, phone: String, email: String}],
  location: {
    type: Point,
    coordinates: [Number, Number]
  }
});

//TODO: test if auto increment works
GluttonSchema.plugin(autoIncrement.plugin, { model: 'Glutton', fieldId: 'gluId'});
mongoose.model('Glutton', GluttonSchema);
