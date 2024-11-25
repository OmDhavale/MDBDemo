const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

module.exports = mongoose.model('Example', ExampleSchema);
