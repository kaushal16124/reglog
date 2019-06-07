const express = require('express');
const router = express.Router();
const Reg = require('../models/reg');

router.get('/reglog', function(req, res, next){
  res.send({type: 'GET'});
});

router.post('/reglog', function(req, res, next){
  console.log('Inside Post');
Reg.create(req.body).then(function(reglog){
  res.send(reglog);
}).catch(next);

});

module.exports = router;
