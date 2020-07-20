function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce(function(total, currentValue) {
		return total + currentValue;
	}, 0) 
}
function multiply (array) {
	return array.reduce(function(total, currentValue) {
		return total * currentValue;
	}, 1)
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}


  


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

// add, subtract, get the sum, multiply, get the power, and find the factorial

// In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jasmine! To see the expected value
// take a look at the spec file that houses the Jasmine test cases.