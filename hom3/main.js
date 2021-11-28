//1

function checkNumber(number) {
    if (typeof number === 'number') {
        return true
    }
    return false
}

console.log(checkNumber(2));
//2
function averageNumber(arrNumber) {
    let sum = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        sum += arrNumber[i]
    }
    return sum / arrNumber.length
}

console.log(averageNumber());


