var mongoose = require('mongoose');

// validators
var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [1, 30],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  })
]

var categorySchema = new mongoose.Schema({
    id: Number,
    name: {type: String, required: true, validate: nameValidator},
    description: String
});
