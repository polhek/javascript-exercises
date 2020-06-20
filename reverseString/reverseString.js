const reverseString = function(string) {
    var split = string.split("");

    var reverseArr = split.reverse();

    var joined = reverseArr.join("");

    return joined;
}

module.exports = reverseString
