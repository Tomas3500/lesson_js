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
// alert(admin)
// showBtn();

//lesson-2
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
