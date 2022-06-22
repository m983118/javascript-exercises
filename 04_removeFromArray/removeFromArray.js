const removeFromArray = function(array, ...targets) {
    for (target of targets) {
        targetIndex = array.indexOf(target);
        if (targetIndex != -1) {
            array.splice(targetIndex, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
