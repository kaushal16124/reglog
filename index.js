const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://test:test@reglogdb-mj2vy.mongodb.net/reglog?retryWrites=true&w=majority', {useNewUrlParser: true}).then(
  () => {console.log('success')},
  err => {}
);
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',routes);

app.use(function(err,req,res,next){
  res.status(422).send({error: err.message});
});

app.listen(process.env.port || 9119, function(){
  console.log('Listening to 9119');
});
