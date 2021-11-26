// //1
let promQuestion = prompt('Ваша страна:')
let promNumber = +promQuestion
if (promQuestion.trim() === '') {
    alert('введите данные')
} else if (typeof promNumber === 'number') {
    alert('Название не может быть числом')
}

// //2
let numberOne = +prompt('введите первое число')
let numberTwo = +prompt('введите второе число')
if (numberTwo % numberOne === 0) {
    alert('второе число кратное первому')
} else {
    alert('Второе число НЕ кратно первому')
}


//3
let enterNumber = prompt('Введите число');
if (enterNumber.trim() === '' || isNaN(enterNumber)) {
    alert('не число')
} else if (enterNumber % 2 === 0) {
    alert('число четное')
} else {
    alert('число не четно')
}

//4

let numberEnter = prompt('Введите число от 1 до 100');
if (numberEnter.trim() === '' || !Number(numberEnter)) {
    console.log('ВВЕДИТЕ ЧИСЛО')
} else if (numberEnter >= 1 && numberEnter <= 25) {
    console.log('первая четверть')
} else if (numberEnter >= 26 && numberEnter <= 50) {
    console.log('вторая четверть')
} else if (numberEnter >= 51 && numberEnter <= 75) {
    console.log('третья четверть')
} else if (numberEnter >= 76 && numberEnter <= 100) {
    console.log('четвертая четверь')
} else {
    console.log('диапозон не верный')
}


//5
for (let i = 1; i <= 500; i++) {
    // console.log(i)
}

//6

for (let i = 1000; i >= 300; i--) {
    // console.log(i)
}


//7
let numberUsers = prompt('введите число 1 до 100');
if (numberUsers.trim() === '' || !Number(numberUsers)) {
    console.log('ВВЕДИТЕ ЧИСЛО!!')
    for (let i = 1; i <= 100; i++) {
        console.log(numberUsers + i)
        console.log(numberUsers - i)
        console.log(numberUsers / i)
        console.log(numberUsers * i)
    }
}


//8
let a = +prompt('число a:');
let sing = prompt('Математический знак - + / *:');
let b = +prompt('число b:');
switch (sing) {
    case '-':
        alert(a - b)
        break
    case '+':
        alert(a + b)
        break
    case '/':
    case a / b === Infinity || b / a === Infinity: {
        alert('делить на 0 нельзя')
    }
        alert(a / b)
        break
    case '*': {
        alert(a * b)
        break
    }
}


//9
let moneyUser = +prompt('Сумма ставки');
let numbers1 = +prompt('Ваше диапазон от A:');
let numbers2 = +prompt('Ваше диапазон от B:');
let gamesNub = +prompt('Загадайте число:');
let rand = Math.floor(Math.random() * (numbers2 - numbers1) + numbers1);
let result = (numbers2 - numbers1) * 0.1 + moneyUser;
if (numbers1 >= numbers2 && numbers2 <= numbers1) {
} else if (rand === gamesNub) {
    console.log((`Сумма вашего выйграша:${result} ПОЗДРАВЛЯЕМ`));
} else {
    console.log((`Вы проиграли`));
}
console.log(rand)

//10

function games(max, min) {
    alert('Давай с играем в игру "Камень-ножницы-бумага"');
    let userChoice = (prompt("Камень-ножницы-бумага")).toLowerCase()
    let computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    if (computerChoice === 1) {
        if (userChoice === 'ножницы') {
            console.log('камень выграл')
        } else {
            alert('ПК ВЫГРАЛ')
            console.log('ножницы')
        }
    } else if (computerChoice === 2) {
        if (userChoice === 'бумага') {
            console.log('ножницы выграли')
        } else {
            alert('ПК ВЫГРАЛ')
            console.log('бумага')
        }
        // console.log('Ножницы')
    } else if (computerChoice === 3) {
        if (userChoice === 'Камень') {
            console.log('Бумага выграла')
        } else {
            alert('ПК ВЫГРАЛ')
            console.log('камень')
        }
        // console.log('Бумага')
    }

    console.log(computerChoice)
    // 1 - камень
    // 2 - ножницы
    // 3 - бумага
}

games(3, 1)





