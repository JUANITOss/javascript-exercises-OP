const reverseString = function(string) {

    if (string === ""){
        return string;
    }
    
    let revString = "";

    for (let i = string.length-1; i > -1; i--) {
        revString = revString.concat("",string.charAt(i)); 
    }

    console.log(revString);

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
