let TOKEN = '395fdbf92bcc5120cad3e5dc85badec6'
let temp = document.querySelector('.temp')
let timeDate = document.querySelector('.time-date');
let cityId = document.querySelector('.city')
const nameCity = document.querySelector('.name')
const btn = document.querySelector('#btn');
let desc = document.querySelector('.desc');
let countryId = document.querySelector('#country');

//currentWeather
function currentWeather() {
    let arrLocal = localStorage.getItem('id')
    console.log(arrLocal)
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${arrLocal || cityId.value}&lang=ru&appid=${TOKEN}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            showResultWeather(data, nameCity, desc)
            allResWeather(data, '#wind ', '#pressure', '#humidity', '#visibility')
        })

}

function showResultWeather(data, nameCity, desc) {
    let DATE = new Date(data.dt * 1000).toLocaleDateString('ru', {   //!!!!
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })
    document.querySelector('.icon-weather').innerHTML = '<img src ="https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png">';
    timeDate.textContent = DATE
    temp.innerHTML = `${Math.floor(data.main.temp - 273)}&deg`
    nameCity.innerHTML = `${data.name}`;
    desc.innerHTML = `${data.weather[0]['description']}`;
}


function dataHandler3() {
    let arrLocal = localStorage.getItem('id')


    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${arrLocal || cityId.value}&cnt=40&lang=ru&units=metric&appid=${TOKEN}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data)
            let nowData = new Date();
            let hours = nowData.getHours();
            let num = 8 - (Math.floor(hours / 3));
            let pos = data.list[num + 1].dt
            let DATE = new Date(pos * 1000).toLocaleDateString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            })
            allResultTadWeatherTomorrow(DATE, data, num, 1, '#data-tomorrow', '#temp-tomorrow', '#icon-weather', '#name-tomorrow')
            showResTab(data, '#wind1', num, '#pressure1', '#humidity1', '#visibility1')
            document.querySelector('#data-1').innerHTML = data.list[num + 10].dt_txt;
            document.querySelector('#temp-1').innerHTML = `${Math.floor(data.list[num + 10].main['temp'])}&deg`;
            document.querySelector('#wind2').innerHTML = `${data.list[num + 10].wind.speed}<br>м/с`;
            document.querySelector('#pressure2').innerHTML = `${Math.floor((data.list[num + 10].main.pressure) * 0.76)} <br>мм рт.ст`;
            document.querySelector('#humidity2').innerHTML = `${data.list[num + 10].main.humidity}%`
            document.querySelector('#icon-weather1').innerHTML = '<img src ="https://openweathermap.org/img/wn/' + data.list[num + 10].weather[0].icon + '@2x.png">'
            //
            document.querySelector('#data-2').innerHTML = data.list[num + 18].dt_txt;
            document.querySelector('#temp-2').innerHTML = `${Math.floor(data.list[num + 18].main['temp'])}&deg`;
            document.querySelector('#wind3').innerHTML = `${data.list[num + 18].wind.speed}<br>м/с`;
            document.querySelector('#pressure3').innerHTML = `${Math.floor((data.list[num + 18].main.pressure) * 0.76)} <br>мм рт.ст`;
            document.querySelector('#humidity3').innerHTML = `${data.list[num + 18].main.humidity}%`
            document.querySelector('#icon-weather2').innerHTML = '<img src ="https://openweathermap.org/img/wn/' + data.list[num + 18].weather[0].icon + '@2x.png">'
            //
            document.querySelector('#data-3').innerHTML = data.list[num + 27].dt_txt;
            document.querySelector('#temp-3').innerHTML = `${Math.floor(data.list[num + 27].main['temp'])}&deg`;
            document.querySelector('#wind4').innerHTML = `${data.list[num + 27].wind.speed}<br>м/с`;
            document.querySelector('#pressure4').innerHTML = `${Math.floor((data.list[num + 27].main.pressure) * 0.76)} <br>мм рт.ст`;
            document.querySelector('#humidity4').innerHTML = `${data.list[num + 27].main.humidity}%`
            document.querySelector('#icon-weather3').innerHTML = '<img src ="https://openweathermap.org/img/wn/' + data.list[num + 27].weather[0].icon + '@2x.png">'


        })

}

function allResultTadWeatherTomorrow(DATE, data, num, n, dataTomorrow, tempT, iconWeather, nameTomorrow) {
    let dataTomor = document.querySelector(dataTomorrow)
    let tempTomor = document.querySelector(tempT)
    let iconTomor = document.querySelector(iconWeather)
    let name = document.querySelector(nameTomorrow)
    name.innerHTML = `${data.city.name}`;
    dataTomor.innerHTML = DATE;
    tempTomor.innerHTML = `${Math.floor(data.list[num + n].main['temp'])}&deg`
    iconTomor.innerHTML = '<img src ="https://openweathermap.org/img/wn/' + data.list[num + n].weather[0].icon + '@2x.png">'

}

function showResTab(data, windS, num, pressure, humidity, visibility) {
    let windSpeedTab = document.querySelector(windS);
    let presTab = document.querySelector(pressure)
    let humTab = document.querySelector(humidity)
    let visTab = document.querySelector(visibility)
    windSpeedTab.innerHTML = `${data.list[num + 3].wind.speed}<br>м/с`;
    presTab.innerHTML = `${Math.floor((data.list[num + 3].main.pressure) * 0.76)} <br>мм рт.ст`;
    humTab.innerHTML = `${data.list[num + 1].main.humidity}%`
    visTab.innerHTML = `${data.list[num + 1].visibility}`

}


function allResWeather(data, windS, pressure, humidity, visibility) {
    let windSpeed = document.querySelector(windS);
    let pres = document.querySelector(pressure)
    let hum = document.querySelector(humidity)
    let vis = document.querySelector(visibility)
    windSpeed.innerHTML = `${data.wind.speed}<br>м/с`;
    pres.innerHTML = `${Math.floor((data.main.pressure) * 0.76)} <br>мм рт.ст`;
    hum.innerHTML = `${data.main.humidity}%`
    vis.innerHTML = `${data.visibility}`


}

function saveCityLocal() {
    localStorage.setItem('id', cityId.value);
}


btn.addEventListener('click', saveCityLocal)
btn.addEventListener('click', currentWeather)
btn.addEventListener('click', dataHandler3)

currentWeather();
dataHandler3();

