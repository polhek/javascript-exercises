const palindromes = function(string) {
    let re = /[\W_]/g;

    let lowCase = string.toLowerCase().replace(re, '');

    let reverseString = lowCase.split('').reverse().join('');

    return reverseString === lowCase;
}

module.exports = palindromes


