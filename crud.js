require('./config/database.js');
const Brewery = require('./models/brewery');
const User = require('./models/user');

let b;
let u;

Brewery.findOne({}, function (err, brewery) {
    b = brewery;
});