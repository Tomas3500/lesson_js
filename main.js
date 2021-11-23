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
const COLOR_GREEN ='green';
const ageUser = 28;
// alert(admin)
// showBtn();