const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.get('/jade', function(req, res){
  res.render('sample', { message: 'Hello Jade!!' });
});

exports.site = functions.https.onRequest(app);
