var mongoose = require('mongoose');
var schema = require('./schema')
mongoose.connect('mongodb://mongo:27017/JJACDReviews');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database")
});



var Reviews = mongoose.model('Reviews', schema);



module.exports = Reviews
