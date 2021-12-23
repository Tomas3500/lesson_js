// alert('hello, palmo-master');
// const creatBtn = document.createElement('button');
//
// function showBtn() {
//     creatBtn.textContent = 'PUSH';
//     creatBtn.style.background = 'red';
//     return document.querySelector('body').append(creatBtn)
// }
//
// creatBtn.addEventListener('mousemove', () => {
//     let i = 0;
//     creatBtn.style.fontSize = '50px';
// })
//
// creatBtn.addEventListener('click', () => {
//     alert('hello palmo');
// })
// let admin;
// let name = 'Jhon';
// admin = name;
// let currentTime;
// let selectProduct;
// const COLOR_GREEN = 'green';
// const ageUser = 28;
// alert(admin)
// showBtn();
//
// // lesson-2
// let aLogin = prompt('ваш логин')
// let pasWord;
// if (aLogin === 'admin') {
//     pasWord = prompt('введите пароль')
//     if (pasWord === 'qwerty123') {
//         alert('Добро пожаловать')
//     }
// } else {
//     alert('не правильнЫй пароль')
// }
//
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
//
//
// //lesson 3
//
// function min(a, b) {
//     if (a > b) {
//         return a
//     }
// }
//
// min(4, 2)
// console.log(min(4, 2))
//
// function stepNumder(x, n) {
//     return x ** n
// }
//
// stepNumder(2, 2);
// console.log(stepNumder(2, 2));
//
//
// const user = {
//     // name:'John',
//     // surname:'Smith',
// }
// // user.name = Pete;
// // delete user.name
//
// function isEmpty(user){
//     for (key in user){
//         return false;
//     }
//     return true
// }
// isEmpty(user)

//lesson 4

//1

function upFirst(str) {
    let strNew = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return strNew
}

console.log(upFirst('иванов'))

//2
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let strNew = str.slice(0, maxlength - 1) + '…';
        return strNew
    }

}

console.log(truncate('hellooooooooooooooooo', 10))

//3

function getShortName(fullName) {
    let newstr = fullName.split(' ');
    return `${newstr[0]} ${newstr[1][0]}.${newstr[2][0]}.`

}

console.log(getShortName('Иванов Иван Иванович'))

//4
let arr = [
    {
        name: 'Ivan',
        age: 20
    },
    {
        id: 1,
        age: 20
    },
    {
        name: 'Alex',
        age: 20
    },
    {
        id: 1,
        age: 20
    }

]

function getObj(arr) {
    return arr.filter(function (item) {
        return item.name
    })

}

console.log(getObj(arr))

//5

let arr1 = ['a', 'b', 'v', 1, 25, 25, 25, 25]
let arr2 = ['Hello', 'Hu', 'Hi', 'Hi', 'Hi',]

function conCatArr(arr1, arr2) {
    let newArr = [];
    let res = arr1.concat(arr2);
    res.forEach(function (elem) {
        if (!newArr.includes(elem)) {
            return newArr.push(elem)
        }
    })
    return newArr;
}

console.log(conCatArr(arr1, arr2))

//6


function modifyString(str) {
    let out = '';
    let resArrStr = str.split('-');
    for (let key in resArrStr) {
        if (key != 0) {
            out += resArrStr[key][0].toUpperCase() + resArrStr[key].slice(1).toLowerCase()
        } else {
            out += resArrStr[key]
        }
    }
    return out
}

console.log(modifyString('super-user-name'))

//7
const arrSing = ['x', '/', '-', '+'];

function calc(str) {
    let arrStr = str.split('');
    for (let key in arrStr) {
        if (arrStr.includes('+') || arrStr.includes('-')) {
            let a = +arrStr[0] - +arrStr[2]
            console.log(a);
        }

    }
}

console.log(calc('5-1'))

//8
const users = [
    {
        id: 1,
        name: 'John',
        age: 20
    },
    {
        id: 2,
        name: 'Marry',
        age: 22
    },
    {
        id: 3,
        name: 'Poll',
        age: 25
    },
]
let newArr = []

function getNameUser(users) {
    users.forEach(function (item) {
        newArr.push(item.name)
    })
    return newArr
}

console.log(getNameUser(users))

//9
const allArr = [1, 2, 'hello', 'word'];
let res = []

function transformArr(allArr) {
    allArr.forEach(function (elem) {
        if (typeof (elem) === 'number') {
            res.push(elem * 2)
        } else {
            res.push(elem.split(''))
        }
    })
    return res
}

// console.log(transformArr(allArr))

//10
function repeatWokrs(str) {
    let newStr = str.trim().split(' ');
    let a = newStr[0]
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] > a) {
            return true
        }
    }
    return false;
}

console.log(repeatWokrs('помидор огурец помидор'))

//11
const forbiddenWords = ['blin', 'suka', 'kozol'];

function examinationWork(str) {
    for (let i = 0; i < forbiddenWords.length; i++) {
        while (str.indexOf(forbiddenWords[i]) !== -1) {
            str = str.replace(forbiddenWords[i], '')
            return true
        }
    }
    return false

}

console.log(examinationWork('privet blin'))

//12
const arrStr = ['Привет', 1, null, 'как', '{}', 'дела'];

function arrayToSentence(arrStr) {
    for (let key in arrStr) {
        if (typeof arrStr[key] == 'string') {
            console.log(arrStr[key]);
        }
    }
    return arrStr;
}

arrayToSentence(arrStr);

//13
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx';

    for (let number of numbers) {
        format = format.replace('x', number);
        console.log(format)
    }

    return format;
}

createPhoneNumber(numbers);

//14
const users1 = [
    {
        id: 1,
        name: 'John',
        age: 20,
        salary: 1000
    },
    {
        id: 2,
        name: 'Marry',
        age: 22,
        salary: 1500
    },
    {
        id: 3,
        name: 'Poll',
        age: 25,
        salary: 1200
    },
]

function getHighestSalarty(users1) {
    let res
    for (let key in users1) {
        users1.sort(function (a, b) {
            res = b.name;
        })
    }
    console.log(res);
    return res;
}

getHighestSalarty(users1);
//15
let strFull = 'hello palmo it is good courses'

// console.log(strFull.length)

function validString(strFull) {
    for (let i = 0; i < strFull.length; i++) {
        if (strFull[i].length > 3 && strFull[i].length < 16) {
            console.log('строка меньше 3')
        } else if (isNaN(strFull[i]) || strFull[i].toUpperCase()) {
            console.log('содержит число и заглавную букву')
        } else {
            console.log('все валидно')
        }
        console.log(strFull[i])
    }
}

validString(strFull);

//16
const password = 'Palmoooo1'
function validPassword(password) {
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase() && password.length > 6 && !isNaN(password[i])) {
            console.log('валидный пароль');
        }
    }
}

validPassword(password);

