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
            loginUserInput.style.border = '1px solid red'
        }
    }
}

function validataEmailUser() {
    let emailUser = document.querySelector('.email-user');
    if (emailUser.value.trim() === '' || emailUser.value.indexOf('@') === -1) {
        emailUser.style.border = '1px solid red'
    }
}

function validataAgeUser() {
    let ageUser = document.querySelector('.age-user');
    if (typeof +ageUser.value === 'number' && +ageUser.value > 0) {
        console.log('tttttt')
    } else {
        ageUser.style.border = '1px solid red'
    }
}

function validataPassword() {
    let passUser = document.querySelector('.password-user');
    if (passUser) {
        for (let i = 0; i < passUser.value.length; i++) {
            if (typeof +passUser.value[i] === 'number' || passUser.value[i] === passUser.value[i].toUpperCase()) {
                console.log('gooot')
            } else {
                passUser.style.border = '1px solid red'
            }
        }

    } else {
        passUser.style.border = '1px solid red'
    }

}


btnRegister.addEventListener('click', validForm,);
btnRegister.addEventListener('click', validataAgeUser);
btnRegister.addEventListener('click', validataEmailUser);
btnRegister.addEventListener('click', validataPassword);






