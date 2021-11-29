// //1
const promQuestion = prompt('Ваша страна:')
const promNumber = +promQuestion
if (promQuestion.trim() === '') {
    alert('введите данные')
} else if (typeof promNumber === 'number') {
    alert('Название не может быть числом')
}

//2
const numberOne = +prompt('введите первое число')
const numberTwo = +prompt('введите второе число')
if (numberTwo % numberOne === 0) {
    alert('второе число кратное первому')
} else {
    alert('Второе число НЕ кратно первому')
}


//3
const enterNumber = prompt('Введите число');
if (enterNumber.trim() === '' || isNaN(enterNumber)) {
    alert('не число')
} else if (enterNumber % 2 === 0) {
    alert('число четное')
} else {
    alert('число не четно')
}

// //4

const numberEnter = prompt('Введите число от 1 до 100');
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
for (let i = 2; i <= 500; i++) {
    let flag = 1
    for (let k = 2; k < i; k++) {
        if (i % k === 0) {
            flag = 0;
        }
    }
    if (flag) {
        // console.log(i)
    }
}

//6

for (let i = 1000; i >= 300; i--) {
    // console.log(i)
}


// 7
const numberUsers = prompt('введите число 1 до 100');
for (let i = 1; i <= 100; i++) {
    if (numberUsers.trim() === '' || isNaN(+numberUsers)) {
        console.log('ВВЕДИТЕ ЧИСЛО!!')
    } else {
        console.log(numberUsers + i)
        console.log(numberUsers - i)
        console.log(numberUsers / i)
        console.log(numberUsers * i)
    }
}


//8
const a = +prompt('число a:');
const sing = prompt('Математический знак - + / *:');
const b = +prompt('число b:');

if (isNaN(a) || isNaN(b)) {
    alert('Введи число')
}
switch (sing) {
    case '-':
        alert(a - b)
        break
    case '+':
        alert(a + b)
        break
    case '/': {
        if (b === 0) {
            alert('Делить на 0 нельзя')
        } else {
            alert(a / b)
        }
        break
    }
    case '*': {
        alert(a * b)
        break
    }
    default: {
        alert('введите математический знак')
    }
}


//9
const moneyUser = +prompt('Сумма ставки');
const numbers1 = +prompt('Ваше диапазон от A:');
const numbers2 = +prompt('Ваше диапазон от B:');
const gamesNub = +prompt('Загадайте число:');
const rand = Math.floor(Math.random() * (numbers2 - numbers1) + numbers1);
const result = (numbers2 - numbers1) * 0.1 + moneyUser;

if (isNaN(moneyUser) && isNaN(gamesNub) || isNaN(numbers1) || isNaN(numbers2)) {
    console.log('введите данные')
}
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
    const userChoice = (prompt("Камень-ножницы-бумага")).toLowerCase()
    const computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;
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
        if (computerChoice === userChoice) {
            alert('Ничья')
        }
        // console.log('Бумага')
    }

    console.log(computerChoice)
    // 1 - камень
    // 2 - ножницы
    // 3 - бумага
}

games(3, 1)





