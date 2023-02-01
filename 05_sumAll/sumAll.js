const sumAll = function(start,end) {

    let totalSum = 0;

    if (start > end) {

        let aux = start
        start = end
        end = aux
    }

    if (Number(start) !== start || Number(end) !== end || start < 0 || end < 0) {
        return "ERROR";
    }


    for (let i = start; i < end+1; i++) {
        totalSum = totalSum + i
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
