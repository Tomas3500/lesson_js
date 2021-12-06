const btn = document.querySelector('.btn');
const btnInput = document.querySelector('#btn-2')
const input = document.querySelector('.input')
const inputConsole = document.querySelector('.input-i')
const btnConsole = document.querySelector('#btn-3')
const btnTitle = document.querySelector('.btn-title');
const btnP = document.querySelector('.btn-p');
const btnDisabled = document.querySelector('#btn-4');
const blockGreen = document.querySelector('.green');
const btnAddList = document.querySelector('#add-list')
const btnResult = document.querySelector('#btn-result')
const btnRegister = document.querySelector('#btn-register')


function showAlert() {
    return alert('hello palmo')
}

btn.addEventListener('click', showAlert)


//2
function showResultInInput() {
    return input.value = 'Hello, World!'
}

btnInput.addEventListener('click', showResultInInput);

//3
function showConsoleLog() {
    console.log(inputConsole.value)
}

btnConsole.addEventListener('click', showConsoleLog);

//4

function reversText() {
    let titleOne = document.querySelector('.title-one')
    let titleTwo = document.querySelector('.title-two')
    let a = titleOne.textContent
    titleOne.textContent = titleTwo.textContent
    titleTwo.textContent = a;
}

btnTitle.addEventListener('click', reversText);

//5

function showColorParagraf() {
    let paragraph = document.querySelector('.paragraph');
    let colorRed = paragraph.style.color = 'red'
    btnP.addEventListener('click', () => {
        paragraph.textContent = colorRed
    })
}

btnP.addEventListener('click', showColorParagraf);

//6
function disabledInput() {
    let input = document.querySelector('#input-i')
    input.setAttribute("disabled", "disabled")
    input.disabled = true;
}

btnDisabled.addEventListener('click', disabledInput);

//7

function reversColor() {
    let blockRed = document.querySelector('.red');
    if (blockRed.classList.contains('red')) {
        blockRed.classList.toggle('green')
    } else {
        blockRed.classList.add('red')
    }
    console.log(blockGreen)
}

blockGreen.addEventListener('click', reversColor);

//8
function addInLi() {
    let ul = document.querySelector('.ul')
    let li = document.createElement('li')
    li.innerHTML = 'hello palmo'
    ul.append(li)
    console.log(ul)

}

btnAddList.addEventListener('click', addInLi)

//9
function showListValue() {
    let textArea = document.querySelector('.text').value;
    let out = document.querySelector('.text-block')
    let arr = textArea.split(',')
    let ol = document.createElement('ol')
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = arr[i];
        ol.append(li);
        out.append(ol)
        console.log(li)
    }

}

btnResult.addEventListener('click', showListValue);

//10
const arrValidata = ['.', '/', ',', '\n', '|']

function validForm() {
    let loginUserInput = document.querySelector('.login-user');
    for (let item of arrValidata) {
        if (loginUserInput.value === item && loginUserInput.value.length > 4 || loginUserInput.value.length < 20) {
            return loginUserInput.style.border = '1px solid red'
        }
    }
    return false
}

function validataEmailUser() {
    let emailUser = document.querySelector('.email-user');
    if (emailUser.value.trim() === '' || emailUser.value.indexOf('@') === -1) {
        return emailUser.style.border = '1px solid red'
    }
    return false
}

function validataAgeUser() {
    let ageUser = document.querySelector('.age-user');
    if (typeof +ageUser.value === 'number' && +ageUser.value > 0) {
        return true
    } else {
        ageUser.style.border = '1px solid red'
    }
    return false
}

function validataPassword() {
    let passUser = document.querySelector('.password-user');
    if (passUser) {
        for (let i = 0; i < passUser.value.length; i++) {
            if (typeof passUser.value[i] === 'number' || passUser.value[i] === passUser.value[i].toUpperCase()) {
                return true
            } else {
                return passUser.style.border = '1px solid red'
            }
        }
    }
}


function regist() {
    if (validForm() && validataAgeUser() && validataEmailUser() && validataPassword()) {
        alert('успешно')
    }
}

// regist();
btnRegister.addEventListener('click', validForm,);
btnRegister.addEventListener('click', validataAgeUser);
btnRegister.addEventListener('click', validataEmailUser);
btnRegister.addEventListener('click', validataPassword);
btnRegister.addEventListener('click', regist);


//10

let oneNumber = '';
let twoNumber = '';
let sing = '';
const eventsBtn = document.querySelector('.buttons')
const out = document.querySelector('.out p')
const arrNumberCalc = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
const arrSing = ['x', '/', '-', '+'];

eventsBtn.addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) {
        return
    }
    let key = event.target.textContent;

    if (arrNumberCalc.includes(key)) {
        if (twoNumber === '' && sing === '') {
            oneNumber += key;
            out.textContent = oneNumber;
            console.log(oneNumber)
        } else {
            twoNumber += key;
            out.textContent = twoNumber;
            console.log(twoNumber)
        }
    }

    if (arrSing.includes(key)) {
        sing = key;
        out.textContent = sing;
        console.log(oneNumber)
    }

    if (key === '=') {
        switch (sing) {
            case '+':
                oneNumber = +oneNumber + +twoNumber
                break;
            case '-':
                oneNumber = +oneNumber - +twoNumber
                break;
            case 'x':
                oneNumber = +oneNumber / +twoNumber
                break;
            case '*':
                oneNumber = +oneNumber * +twoNumber
                break;
        }
        out.textContent = oneNumber
    }

})

const clearBtn = document.querySelector('.clear');

function clearAll() {
    oneNumber = '';
    twoNumber = '';
    sing = '';
    out.textContent = 0;
}

clearBtn.addEventListener('click', clearAll)

//11
const basket = document.querySelector('.basket');
const productCard = document.querySelector('.product');
const modal = document.querySelector('.modal');
const dataProduct = {
    '112263': {
        'name': 'car1',
    },
    '112264': {
        'name': 'car2',
    }
}


let nameProduct = [];

function addProduct(id) {
    let countProduct = parseInt(document.querySelector('.basket .res').innerHTML) + 1;
    console.log(countProduct)
    nameProduct.push(dataProduct[id]['name']);
    document.querySelector('.basket .res').innerHTML = countProduct;
    renderCard()
}

function renderCard() {
    let div = document.createElement('div')
    for (let product of nameProduct) {
        div.innerHTML = product + '<br>'
    }
    modal.append(div)
}


basket.addEventListener('click', function showModal() {
    modal.style.display = 'block'
})
productCard.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-product__card')) {
        let dataId = event.target.dataset.id
        addProduct(dataId)
        // console.log(dataId)
    }
})

// addProduct();
