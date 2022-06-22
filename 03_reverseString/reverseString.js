const reverseString = function(reStr) {
    let result = "";
    for (i = reStr.length-1; i >= 0; i--) {
        result += reStr[i];
    }
    return(result);
};

// Do not edit below this line
module.exports = reverseString;
