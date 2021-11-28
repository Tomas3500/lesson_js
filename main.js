// alert('hello, palmo-master');
const creatBtn = document.createElement('button');

function showBtn() {
    creatBtn.textContent = 'PUSH';
    creatBtn.style.background = 'red';
    return document.querySelector('body').append(creatBtn)
}

creatBtn.addEventListener('mousemove', () => {
    let i = 0;
    creatBtn.style.fontSize = '50px';
})

creatBtn.addEventListener('click', () => {
    alert('hello palmo');
})
let admin;
let name = 'Jhon';
admin = name;
let currentTime;
let selectProduct;
const COLOR_GREEN = 'green';
const ageUser = 28;
alert(admin)
showBtn();

// lesson-2
let aLogin = prompt('ваш логин')
let pasWord;
if (aLogin === 'admin') {
    pasWord = prompt('введите пароль')
    if (pasWord === 'qwerty123') {
        alert('Добро пожаловать')
    }
} else {
    alert('не правильнЫй пароль')
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


//lesson 3

function min(a, b) {
    if (a > b) {
        return a
    }
}

min(4, 2)
console.log(min(4, 2))

function stepNumder(x, n) {
    return x ** n
}

stepNumder(2, 2);
console.log(stepNumder(2, 2));


const user = {
    // name:'John',
    // surname:'Smith',
}
// user.name = Pete;
// delete user.name

function isEmpty(user){
    for (key in user){
        return false;
    }
    return true
}
isEmpty(user)
