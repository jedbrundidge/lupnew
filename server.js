/**
 * Created by jed on 6/18/2016.
 */

var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var resourcejs = require('resourcejs');
var  cors= require('cors');
var path = require('path');
var ejs = require('ejs');
var mongoose = require('mongoose');
var _ = require('lodash');


var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.resolve(__dirname, 'client')));


app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(3000);
console.log('newlup is up and running on port 3000');