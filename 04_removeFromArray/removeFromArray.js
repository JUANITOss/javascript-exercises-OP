const removeFromArray = function(array, ...args) {

    args.forEach((arg) => {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element === arg) {
                array.splice(i,1)
            }
        }
    }
    )

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
