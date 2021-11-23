// 2
let num = 10;
console.log(num);
console.log('')
//3
let first = 5;
let second = 10;
console.log(first + second)
console.log(first - second)
console.log(first * second)
console.log(first / second)

//4
console.log('task 4=========')

function f1(a, b) {
    let result = a + b;
    console.log(result)
}

f1(3, 10)
console.log('task 5=========')

//5
function f2(bar, qwerty) {
    let res = (bar - qwerty) - 10;
    let end = res - qwerty;
    console.log(res)
    console.log(end)
}

f2(20, 5)

//6
let str = 'Hello, Palmo';
alert(str);

//7
const name = 'Aleksandr';
const age = 28;
alert(`Я ${name}, мне ${age}`);

//8
console.log('task - 8 ============')

function secondInTim(start) {
    console.log(`In one hours second - ${start * 60}`);
    console.log(`In one day second - ${start * 60 * 24}`);
    console.log(`In one month second - ${start * 60 * 24 * 30}`);
}
secondInTim(60)


//9
console.log('task 9==============')
let numbS = Math.pow(5, 2);
console.log(numbS)

//10
console.log('task 10 ============')
let d = 8;
let n = Math.pow(d, 2);
let x = Math.pow(d, 3);
console.log(`n = ${n} x = ${x}`)

// задание с презентации
console.log('Задание с презентации ==============')
let numbInStr = +'123445';
let boolInStr = true + '';
let nullInBool = Boolean(null);
let strInBool = Boolean('');

console.log(numbInStr)
console.log(boolInStr);
console.log(nullInBool);
console.log(strInBool);






