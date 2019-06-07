const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegSchema = new Schema({
  name:{
    type: String,
    required: [true, 'Name Field is Required']
  },

  email:{
    type: String,
    required: [true, 'Email Field is Required']
  },

  mobile:{
    type: String
  },

  password:{
    type: String,
    required: [true, 'Please Enter Password']
  }

});

const Reg = mongoose.model('reglog', RegSchema);

module.exports = Reg;
