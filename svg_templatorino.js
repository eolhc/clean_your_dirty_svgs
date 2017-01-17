#!/usr/bin/env node

var handlebars = require('handlebars');
fs = require('fs')

var source;
var svgFile = 'your_svg.svg'
var templateFile = 'template.html'
var svg = {
  line: ''
};
var html;

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
  html = template(svg);

  write(html);
})


function write(html) {
  fs.writeFile('output.html', html, (err) => {
    if (err) throw err;
    console.log('Output saved in output.html');
  });
}
