const reverseString = function(string) {
    
    let revString = "";
    let stringCopy = string;

    if (string === revString){
        return string;
    }
    
    for (let i = 0; i < string.length; i++) {
        let revString = revString.concat(stringCopy.pop()); 
    }

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
