fs = require('fs')

//take in svg file
var svgFile = process.argv[2]
//take in the template
var templateFile = process.argv[3]

fs.readFile(svgFile,'utf8',function(err,data) {
  if (err) {
    return console.log(err);
  }
  var split_svg_lines = data.toString().split('\n')
  console.log(split_svg_lines)
  //for each in array i want to pop it into the template
})

//take in the template
fs.readFile(templateFile,'utf8', function(err,data) {
  if (err) {
    return console.log(err);
  }
  var template = data.toString();
  console.log(template)
})
