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


}

console.log(conCatArr(arr1, arr2))

//6
