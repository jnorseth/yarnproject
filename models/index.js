const dbConfig = require('../db/connect');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.pattern = require('./patterns')(mongoose);
db.yarn = require('./yarn')(mongoose);

module.exports = db;