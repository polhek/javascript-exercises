const caesar = function encrypt(msg, key)
{
    var encMsg = "";

    for(var i = 0; i < msg.length; i++)
    {
        var code = msg.charCodeAt(i);

        // Encrypt only letters in 'A' ... 'Z' interval
        if (code >= 65 && code <= 65 + 26 - 1)
        {
            code -= 65;
            code = mod(code + key, 26);
            code += 65;
        }

        encMsg += String.fromCharCode(code);
    }

    return encMsg;
}


function mod(n, p) {
    return n - p * Math.floor(n/p);
}

module.exports = caesar
