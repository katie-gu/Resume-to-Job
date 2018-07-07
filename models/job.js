var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var JobSchema = new Schema({
  position: String,
  company: String,
  startdate: Date,
  enddate: Date,
  description: String
});

module.exports = mongoose.model('Job', JobSchema);
