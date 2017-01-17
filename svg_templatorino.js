#!/usr/bin/env node

var handlebars = require('handlebars');
fs = require('fs')

var source;
var svgFile = 'your_svg.svg'
var templateFile = 'template.html'
var svg = {
  line: ''
};

fs.readFile(svgFile,'utf8',function(err,data) {

  if (err) {
    return console.log(err);
  }
  svg['line'] = data.toString().split('\n');
  svg['line'].pop();
  return svg;
})

fs.readFile(templateFile,'utf8',function(err,source) {

  if (err) {
    return console.log(err);
  }
  var source = source;
  var template = handlebars.compile(source);
  var html = template(svg);
  console.log(html);
})
