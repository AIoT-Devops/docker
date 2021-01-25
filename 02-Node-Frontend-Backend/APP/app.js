const express = require('express');
const app = express();
const router = express.Router();


const port = 8080;
const path = __dirname + '/views/';

router.use(function (req,res,next) {
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/about', function(req,res){
  res.sendFile(path + 'about.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {})