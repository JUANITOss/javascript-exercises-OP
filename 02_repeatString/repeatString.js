const repeatString = function(word, cycles) {
    
    if (cycles < 0) {
        return "ERROR"
    }

    let str = ""
    
    for (let i = 0; i < cycles; i++) {
        str = str.concat("",word)    
    }

    return str
};

// Do not edit below this line
module.exports = repeatString;
