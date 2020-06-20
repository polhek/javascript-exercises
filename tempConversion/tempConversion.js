const ftoc = function(fahrenheit) {
  var celsius = (fahrenheit-32)*(5/9) * 10;
  return Math.round(celsius) / 10;
}

const ctof = function(celsius) {
  var fahrenheit = (celsius*(9/5)+32) * 10;
  return Math.round(fahrenheit) / 10;
}

module.exports = {
  ftoc,
  ctof
}
