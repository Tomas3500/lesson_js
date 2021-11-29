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
    if (arrNumber === undefined || arrNumber.length === 0) {
        return false
    }
    for (let i = 0; i < arrNumber.length; i++) {
        sum += arrNumber[i]
    }
    return sum / arrNumber.length
}

console.log(averageNumber([1, 2, 3]));

//3
const objUser = {
    name: 'Aleksandr',
    lastName: 'Smirnov',
    age: 28,
}

function checkUserName(objUser) {
    for (let key in objUser) {
        if (objUser.name !== undefined) {
            return true
        }
    }
    return false

}

console.log(checkUserName(objUser));

//4
function showFullName(objUser) {
    let out = '';
    for (let key in objUser) {
        return out += `${objUser.name} ${objUser.lastName}`
    }
}

console.log(showFullName(objUser));

//5
const objNum = {
    name1: 200,
    name2: 500,
    name3: 400,

}

function sumNumber(objNum) {
    let sum = 0;
    let result = '';
    for (let key in objNum) {
        if (typeof objNum[key] == 'number') {
            sum += objNum[key]
        }
        result = sum;
    }
    return result
}

console.log(sumNumber(objNum))

//6
const objFull = {
    name1: 200,
    name2: 500,
    name3: 400,
    name: 'Aleksandr',
    lastName: 'Smirnov',
    age: 11,
    obf: {}

}


function editObject(objFull) {
    for (let key in objFull) {
        if (typeof objFull[key] == 'number') {
            objFull[key] = Math.floor(objFull[key] / 2)
        }
        if (typeof objFull[key] === 'string') {
            objFull[key] = 'Hello, Palmo'
        }
        if (typeof objFull[key] !== 'number' && typeof objFull[key] !== 'string') {
            delete objFull[key]
        }
    }
    return objFull

}

console.log(editObject(objFull))