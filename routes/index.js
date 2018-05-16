var express = require('express');
var router = express.Router();
const api=require('../app/controller/test.js');
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/runoob';

var Schema = mongoose.Schema;
var mySchema = new Schema({
  size:  String,
},{ timestamps: true });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/test',function(req, res, next) {
  mongoose.connect(url,function (err,db) {
    if(err) throw err;
    let MyModel=mongoose.model('yourmodel',mySchema);
    let doc1=new MyModel({size:'bigs'});
    doc1.save(function (err,doc) {
      console.log(doc);
    });
    res.send('1');
  })
});

router.get('/api',function(req, res, next) {
  mongoose.connect(url, function (err, db) {
    if (err) throw err;
    var MyModel = mongoose.model('MyModel', mySchema);
    var doc1 = new MyModel({ size: 'middle' });
    doc1.save(function (err,doc) {
      console.log(doc);
    })
  });
  res.status(200).send('1');
});


module.exports = router;
